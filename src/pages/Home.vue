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

    <!-- Main Container -->
    <main id="main-container">
      <!-- Hero -->
      <div class="bg-body-light">
        <div class="content content-full">
          <div
            class="
              d-flex
              flex-column flex-sm-row
              justify-content-sm-between
              align-items-sm-center
              py-2
              text-center text-sm-left
            "
          >
            <div class="flex-sm-fill">
              <h1 class="h3 font-w700 mb-2">Main Dashboard</h1>
              <h2 class="h6 font-w500 text-muted mb-0">
                Welcome <a class="font-w600" href="javascript:void(0)">Adam</a>,
                everything looks great.
              </h2>
            </div>
            <div class="mt-3 mt-sm-0 ml-sm-3">
              <button type="button" class="btn btn-sm btn-alt-primary">
                <i class="fa fa-cog"></i>
              </button>
              <div class="dropdown d-inline-block">
                <button
                  type="button"
                  class="btn btn-sm btn-alt-primary"
                  id="dropdown-analytics-overview"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-fw fa-calendar-alt"></i>
                  Last 30 days
                  <i class="fa fa-fw fa-angle-down"></i>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right font-size-sm"
                  aria-labelledby="dropdown-analytics-overview"
                >
                  <a class="dropdown-item font-w500" href="javascript:void(0)"
                    >This Week</a
                  >
                  <a class="dropdown-item font-w500" href="javascript:void(0)"
                    >Previous Week</a
                  >
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item font-w500" href="javascript:void(0)"
                    >This Month</a
                  >
                  <a class="dropdown-item font-w500" href="javascript:void(0)"
                    >Previous Month</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Hero -->

      <!-- Page Content -->
      <div class="content">
        <!-- Overview -->
        <div class="row row-deck">
          <div class="col-sm-6 col-xl-3">
            <!-- Pending Orders -->
            <div class="block block-rounded d-flex flex-column">
              <div
                class="
                  block-content block-content-full
                  flex-grow-1
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                <dl class="mb-0">
                  <dt class="font-size-h2 font-w700">32</dt>
                  <dd class="text-muted mb-0">Pending Orders</dd>
                </dl>
                <div class="item item-rounded bg-body">
                  <i class="fa fa-shopping-cart font-size-h3 text-primary"></i>
                </div>
              </div>
              <div
                class="
                  block-content block-content-full block-content-sm
                  bg-body-light
                  font-size-sm
                "
              >
                <a
                  class="font-w500 d-flex align-items-center"
                  href="javascript:void(0)"
                >
                  View all orders
                  <i
                    class="
                      fa fa-arrow-alt-circle-right
                      ml-1
                      opacity-25
                      font-size-base
                    "
                  ></i>
                </a>
              </div>
            </div>
            <!-- END Pending Orders -->
          </div>
          <div class="col-sm-6 col-xl-3">
            <!-- New Customers -->
            <div class="block block-rounded d-flex flex-column">
              <div
                class="
                  block-content block-content-full
                  flex-grow-1
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                <dl class="mb-0">
                  <dt class="font-size-h2 font-w700">124</dt>
                  <dd class="text-muted mb-0">New Customers</dd>
                </dl>
                <div class="item item-rounded bg-body">
                  <i class="fa fa-users font-size-h3 text-primary"></i>
                </div>
              </div>
              <div
                class="
                  block-content block-content-full block-content-sm
                  bg-body-light
                  font-size-sm
                "
              >
                <a
                  class="font-w500 d-flex align-items-center"
                  href="javascript:void(0)"
                >
                  View all customers
                  <i
                    class="
                      fa fa-arrow-alt-circle-right
                      ml-1
                      opacity-25
                      font-size-base
                    "
                  ></i>
                </a>
              </div>
            </div>
            <!-- END New Customers -->
          </div>
          <div class="col-sm-6 col-xl-3">
            <!-- Messages -->
            <div class="block block-rounded d-flex flex-column">
              <div
                class="
                  block-content block-content-full
                  flex-grow-1
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                <dl class="mb-0">
                  <dt class="font-size-h2 font-w700">45</dt>
                  <dd class="text-muted mb-0">Messages</dd>
                </dl>
                <div class="item item-rounded bg-body">
                  <i class="fa fa-inbox font-size-h3 text-primary"></i>
                </div>
              </div>
              <div
                class="
                  block-content block-content-full block-content-sm
                  bg-body-light
                  font-size-sm
                "
              >
                <a
                  class="font-w500 d-flex align-items-center"
                  href="javascript:void(0)"
                >
                  View all messages
                  <i
                    class="
                      fa fa-arrow-alt-circle-right
                      ml-1
                      opacity-25
                      font-size-base
                    "
                  ></i>
                </a>
              </div>
            </div>
            <!-- END Messages -->
          </div>
          <div class="col-sm-6 col-xl-3">
            <!-- Conversion Rate -->
            <div class="block block-rounded d-flex flex-column">
              <div
                class="
                  block-content block-content-full
                  flex-grow-1
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                <dl class="mb-0">
                  <dt class="font-size-h2 font-w700">4.5%</dt>
                  <dd class="text-muted mb-0">Conversion Rate</dd>
                </dl>
                <div class="item item-rounded bg-body">
                  <i class="fa fa-chart-line font-size-h3 text-primary"></i>
                </div>
              </div>
              <div
                class="
                  block-content block-content-full block-content-sm
                  bg-body-light
                  font-size-sm
                "
              >
                <a
                  class="font-w500 d-flex align-items-center"
                  href="javascript:void(0)"
                >
                  View statistics
                  <i
                    class="
                      fa fa-arrow-alt-circle-right
                      ml-1
                      opacity-25
                      font-size-base
                    "
                  ></i>
                </a>
              </div>
            </div>
            <!-- END Conversion Rate-->
          </div>
        </div>
        <!-- END Overview -->
      </div>
      <!-- END Page Content -->
    </main>
    <!-- END Main Container -->

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