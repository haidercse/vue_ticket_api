<template>
    <div
      id="page-container"
      class="
        sidebar-o sidebar-dark
        enable-page-overlay
        side-scroll
        page-header-fixed
        main-content-narrow
      "
    >
      <!-- Sidebar -->
      <sidebar></sidebar>
      <!-- END Sidebar -->
  
      <!-- Header -->
      <HeaderComp></HeaderComp>
      <!-- END Header -->
  
      <!-- Footer -->
      <Footer></Footer>
      <!-- END Footer -->
    </div>
  </template>
  
  <script>
  import Footer from "../components/template/Footer.vue";
  import Sidebar from "../components/template/Sidebar.vue";
  import HeaderComp from "../components/template/HeaderComponent.vue";
  export default {
    components: { Sidebar, Footer, HeaderComp },
  };
  </script>
  
  <style>
  </style>