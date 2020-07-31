package services

import (
	"database/sql"

	common "../commom"
	datamodels "../datamodels"
)

type IProduct interface {
	Conn() error
	SelectAll() ([]*datamodels.Product, error)
}

type ProductManager struct {
	table     string
	mysqlConn *sql.DB
}

func NewProductManager(table string, db *sql.DB) IProduct {
	return &ProductManager{table: table, mysqlConn: db}
}

func (p *ProductManager) Conn() (err error) {
	if p.mysqlConn == nil {
		mysql, err := common.NewMysqlConn()
		if err != nil {
			return err
		}
		p.mysqlConn = mysql
	}

	if p.table == "" {
		p.table = "product"
	}
	return
}

func (p *ProductManager) SelectAll() (productArray []*datamodels.Product, errProduct error){
	if err := p.Conn(); err != nil {
		return nil, err
	}
	sql := "SELECT * from " + p.table
	
	rows, err := p.mysqlConn.Query(sql)
	defer rows.Close()

	if err != nil {
		return nil, err
	}

	result := common.GetResultRows(rows)
	if len(result) == 0 {
		return nil, nil
	}

	for _, v := range result {
		product := &datamodels.Product{}
		common.DataToStructByTagSql(v, product)
		productArray = append(productArray, product)
	}

	return
}