import React from 'react'
import { useParams } from 'react-router-dom'
import invoices from '../data/Data_Penjualan.js'

const DetailPenjualan = () => {
    const { invoiceId } = useParams()
    const invoice = invoices.find((invoice) => invoices.id_transaksi === invoiceId)
    const {total} =invoice
  return (
    <>
    <div>{total}</div>
    <h1>tes</h1>
    </>
  )
}

export default DetailPenjualan