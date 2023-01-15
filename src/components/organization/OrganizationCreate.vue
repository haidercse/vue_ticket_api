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
    <main id="main-container">
      <!-- Page Content -->
      <div class="content">
        <!-- Full Table -->
        <div class="block block-rounded">
          <!-- error message -->
          <ShowError></ShowError>
          <ShowSuccess></ShowSuccess>
          <div class="block-header">
            <h3 class="block-title">Organization Create</h3>
            <div class="block-options">
              <router-link
                to="/organization"
                type="button"
                class="btn btn-alt-success"
              >
                <i class="far fa-fw fa-arrow-alt-circle-left"></i>
              </router-link>
            </div>
          </div>
          <div class="block-content">
            <form @submit.prevent="submitForm()">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Organization Name <span>*</span> </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="form.name"
                    placeholder="Enter Organization Name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="short_name">Short Name <span>*</span> </label>
                  <input
                    type="text"
                    placeholder="Enter Short Name"
                    class="form-control"
                    id="short_name"
                    v-model="form.short_name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <textarea
                  id="address"
                  cols="30"
                  rows="10"
                  v-model="form.address"
                  class="form-control"
                  placeholder="Address...."
                ></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <!-- END Full Table -->
      </div>
      <!-- END Page Content -->
    </main>

    <!-- Footer -->
    <Footer></Footer>
    <!-- END Footer -->
  </div>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
import Footer from "../template/Footer.vue";
import Sidebar from "../template/Sidebar.vue";
import HeaderComp from "../template/HeaderComponent.vue";
import ShowError from "../utilities/ShowError.vue";
import ShowSuccess from "../utilities/ShowSuccess.vue";
export default {
  data(){
    return{
       form: {
         name: "",
         short_name: "",
         address: ""
       }
    }
  },
  components: { Sidebar, Footer, HeaderComp, ShowError, ShowSuccess },
  methods: {
    ...mapActions(['addOrganization']),
    submitForm(){
       let data = this.form;
       this.addOrganization(data);

       this.form.name = "";
       this.form.short_name = "";
       this.form.address = "";
    }
  }
};
</script>
  
  <style>
</style>