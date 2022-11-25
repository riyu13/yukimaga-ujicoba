<template>
    <div class="wrapper">
    <navbar-admin/>
    <SidebarAdmin/>
    <div class="content">
    <div class="container mt-3">
    <div class="card">
        <Pembayaran/>
    </div>
    </div>
</div></div>
</template>
<script setup>
import NavbarAdmin from '../../components/NavbarAdmin.vue';
import SidebarAdmin from '../../components/SidebarAdmin.vue';
import TabelPembayaran from './menu/TabelPembayaran.vue';
import Pembayaran from './Pembayaran.vue';

</script>

<style></style>