<template>
<NavbarAdmin/>
<SidebarAdmin/>
<div class="container pt-4">
    <div class="card w-75">
    <div class="card-header"><h3>Kata Benda</h3></div>
    <div class="row">
        </div>
                <div class="card-body">
                <table class="table table-striped table-hover" id="myTable">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Kanji</th>
                        <th>Jepang</th>
                        <th>Indonesia</th>
                        <th>Opsi</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(benda, index) in katabenda" :key="index">
                        <td>{{ benda.id }}</td>
                        <td>{{ benda.kanji}}</td>
                        <td>{{ benda.onyomi}}</td>
                        <td>{{ benda.kunyomi}}</td>
                        <td>{{ benda.arti}}</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3" @click="edit(kanji)">Ubah</button>
                            <button type="button" class="btn btn-danger" @click="del(kanji)">Hapus</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div></div>
</template>
<style>
</style>
<script>
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

import NavbarAdmin from '../../../../components/NavbarAdmin.vue';
import axios from 'axios'
import SidebarAdmin from '../../../../components/SidebarAdmin.vue';
export default {
    data() {
        return {
            katabenda: "",
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios.get("http://localhost:3000/katabenda")
            .then(res => {
                this.katabenda = res.data;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    components: { NavbarAdmin, SidebarAdmin }
}
</script>