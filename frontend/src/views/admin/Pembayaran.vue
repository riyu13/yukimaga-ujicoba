<template>
<div class="container p-5">
    <div class="row">
        <div class="col">
    <div class="card" style="width: 20rem;">
        <div class="card-header">
            <div class="h3">Pembayaran</div>
        </div>
        <div class="card-body">
            <form @submit.prevent="add">
                <div class="mb-3 mt-3">
                <label class="form-label">ID Pembayaran :</label>
                    <input type="number" class="form-control" id="id_pembayaran" v-model="form.id_pembayaran"/>
                </div>
                <div class="mb-3 mt-3">
                <label class="form-label">Tanggal :</label>
                    <input type="date" class="form-control" id="tglbayar" v-model="form.tglbayar"/>
                </div>
                <div class="mb-3 mt-3">
                <label class="form-label">Keterangan :</label>
                    <input type="text" class="form-control" id="keterangan" v-model="form.keterangan"/>
                </div>
                <div class="mb-3 mt-3">
                <label class="form-label">Nominal :</label>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Rp.</span>
                </div>
                <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="nominal" v-model="form.nominal">
                </div></div>
                <div class="mb-3 mt-3">
                <label class="form-label">ID Peserta :</label>
                    <input type="text" class="form-control" id="id_users" v-model="form.id_users"/>
                </div>
                <button type="submit" class="btn btn-outline-primary " v-on:click="alertDisplay">Simpan</button>
                <button type="reset" class="btn btn-outline-danger" v-on:click="alertDisplay">Reset</button>

            </form>
        </div>
    </div></div>
    <div class="col-sm-8">
    <TabelPembayaran/></div></div>
</div>
    
</template>
<script>
import TabelPembayaran from './menu/TabelPembayaran.vue';
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
  methods: {
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
    }
    },
    components: {TabelPembayaran}
    }
</script>