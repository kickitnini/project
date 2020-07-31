package datamodels

type Product struct {
	ID    int64 `json:"id" sql:"id"`
	Count int64 `json:"count" sql:"count"`
}