<template>
<div class="card">
<div class="card-header">
    Tabel Transaksi
</div>
<div class="card-body">
    <table>
        <thead>
            <tr>
                <td>No. </td>
                <td>Id Pembayaran</td>
                <td>Tanggal</td>
                <td>Keterangan</td>
                <td>Nominal</td>
                <td>Id Peserta</td>
                <td>Opsi</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(bayar, index) in pembayaran" :key="index">
                <td> {{ index + 1 }}</td>
                <td> {{bayar.id_pembayaran}}</td>
                <td> {{bayar.tglbayar}}</td>
                <td>{{bayar.keterangan}}</td>
                <td>{{bayar.nominal}}</td>
                <td>{{bayar.id_users}}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data(){
    return{
        form: {
          id_pembayaran: '',
          tglbayar: '',
          keterangan: '',
          nominal: '',
          id_users: ''
        },
        pembayaran: '',
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/pembayaran').then(res => {
        this.pembayaran = res.data
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
        axios.post('http://localhost:3000/pembayaran/', this.form).then(res => {
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data Berhasil Disimpan',
            showConfirmButton: true,
            timer: 1500
            })
        this.form.id_pembayaran = '',
        this.form.tglbayar = '',
        this.form.keterangan = '',
        this.form.nominal = '',
        this.form.id_users = ''
      }).catch ((err) => {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Data Gagal Disimpan',
            showConfirmButton: true,
            timer: 1500
        })
      })
    },
    del(user){
      Swal.fire({
        title: 'Apakah kamu akan menghapusnya?',
        text: "Data akan terhapus selamannya",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('http://localhost:3000/pembayaran/' + form.id_pembayaran).then(res =>{
          this.load()
          Swal.fire(
            'Di Hapus!',
            'Data telah dihapus',
            'success'
          )
      })
      } 
      })
    },
    edit(pembayaran){
      this.form.id_pembayaran = pembayaran.id_pembayaran
      this.form.tglbayar = pembayaran.tglbayar
      this.form.keterangan = pembayaran.keterangan
      this.form.nominal = pembayaran.nominal
      this.form.id_users = pembayaran.id_users
    },
    update(form){
        return axios.put('http://localhost:3000/pembayaran/' + form.id_pembayaran , { tglbayar :this.form.tglbayar, keterangan: this.form.keterangan, nominal: this.form.nominal, id_users: this.form.id_users  }).then(res => {
          this.load()
          Swal.fire(
            'Tersimpan!',
            'Data berhasil diperbarui',
            'success'
          )
      }).catch((err) => {
        console.log(err);
        
      })
    }
  },
}
</script>