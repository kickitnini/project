package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"

	common "./commom"
	services "./services"
)

var sum int64 = 0
var productNum int64 = 0

var mutex sync.Mutex

func Get1Product() bool {
	mutex.Lock()
	defer mutex.Unlock()
	if sum < productNum {
		sum += 1
		fmt.Println(sum)
		return true
	}
	return false
}

func GetProduct(w http.ResponseWriter, r *http.Request) {
	if Get1Product() {
		fmt.Fprintf(w, "{\"OK\":true}")
		return
	}
	fmt.Fprintf(w, "{\"OK\":false}")
	return
}

func main() {
	http.Handle("/frontend/web/", http.StripPrefix("/frontend/web/", http.FileServer(http.Dir("frontend/web"))))

	http.HandleFunc("/getProduct", GetProduct)

	db, err := common.NewMysqlConn()
	if err != nil {
		log.Fatal("cannot connect to DB: ", err)
	}

	productMgr := services.NewProductManager("product", db)
	products, err := productMgr.SelectAll()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(products[0].Count)
	productNum = products[0].Count
	// productNum = 5

	err = http.ListenAndServe(":5555", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

}
