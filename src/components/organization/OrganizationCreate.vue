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
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
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
export default {
  components: { Sidebar, Footer, HeaderComp },
};
</script>
  
  <style>
</style>