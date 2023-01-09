<template>
  <div id="page-container">
    <!-- Main Container -->
    <main id="main-container">
      <!-- Page Content -->
      <div class="hero-static">
        <div class="content">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6 col-xl-4">
              <!-- Sign Up Block -->
              <div class="block block-rounded block-themed mb-0">
                <div class="block-header bg-primary-dark">
                  <h3 class="block-title">Create Account</h3>
                  <div class="block-options">
                    <a
                      class="btn-block-option"
                      href="op_auth_signin.html"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Sign In"
                    >
                      <i class="fa fa-sign-in-alt"></i>
                    </a>
                  </div>
                </div>
                
                <div class="block-content">
                  <div class="p-sm-3 px-lg-4 py-lg-5">
                    <h1 class="h2 mb-1">OneUI</h1>
                    <p class="text-muted">
                      Please fill the following details to create a new account.
                    </p>
                    <ShowError></ShowError>
                    <form
                      @submit.prevent="submitForm()"
                      class="js-validation-signup"
                      action="be_pages_auth_all.html"
                      method="POST"
                    >
                      <div class="py-3">
                        <div class="form-group">
                          <input
                            type="text"
                            class="
                              form-control form-control-lg form-control-alt
                            "
                            id="name"
                            name="name"
                            v-model="form.name"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="
                              form-control form-control-lg form-control-alt
                            "
                            id="signup-username"
                            name="username"
                            v-model="form.username"
                            placeholder="Username"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="
                              form-control form-control-lg form-control-alt
                            "
                            id="signup-email"
                            name="email"
                            v-model="form.email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="
                              form-control form-control-lg form-control-alt
                            "
                            id="signup-password"
                            name="signup-password"
                            v-model="form.password"
                            placeholder="Password"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="
                              form-control form-control-lg form-control-alt
                            "
                            id="signup-password-confirm"
                            name="signup-password-confirm"
                            v-model="form.confirm_password"
                            placeholder="Confirm Password"
                          />
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="signup-terms"
                              name="signup-terms"
                            />
                            <label
                              class="custom-control-label font-w400"
                              for="signup-terms"
                              >I agree to Terms &amp; Conditions</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-md-6 col-xl-5">
                          <button
                            type="submit"
                            class="btn btn-block btn-alt-success"
                          >
                            <i class="fa fa-fw fa-plus mr-1"></i> Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                    <!-- END Sign Up Form -->
                  </div>
                </div>
              </div>
              <!-- END Sign Up Block -->
            </div>
          </div>
        </div>
        <div class="content content-full font-size-sm text-muted text-center">
          <strong>OneUI 4.9</strong> &copy;
          <span data-toggle="year-copy"></span>
        </div>
      </div>
      <!-- END Page Content -->
    </main>
    <!-- END Main Container -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ShowError from '../components/utilities/ShowError.vue';
export default {
  components: { ShowError },
  data() {
    return {
      form: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },

  methods: {
    ...mapActions(["addUser"]),
    submitForm() {
      if (this.form.password != this.form.confirm_password) {
        alert("Password and Confirm Password does not matched!");
        return;
      }
      let data = this.form;
       this.addUser(data);

      // this.$router.push('/');
     
    },
  },
};
</script>

<style>
</style>