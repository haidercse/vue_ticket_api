<template>
  <header id="page-header">
    <!-- Header Content -->
    <div class="content-header">
      <!-- Left Section -->
      <div class="d-flex align-items-center">
        <!-- Toggle Sidebar -->
        <!-- Layout API, functionality initialized in Template._uiApiLayout()-->
        <button
          type="button"
          class="btn btn-sm btn-dual mr-2 d-lg-none"
          data-toggle="layout"
          data-action="sidebar_toggle"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <!-- END Toggle Sidebar -->

        <!-- Toggle Mini Sidebar -->
        <!-- Layout API, functionality initialized in Template._uiApiLayout()-->
        <button
          type="button"
          class="btn btn-sm btn-dual mr-2 d-none d-lg-inline-block"
          data-toggle="layout"
          data-action="sidebar_mini_toggle"
        >
          <i class="fa fa-fw fa-ellipsis-v"></i>
        </button>
        <!-- END Toggle Mini Sidebar -->

        <!-- Apps Modal -->
        <!-- Opens the Apps modal found at the bottom of the page, after footer’s markup -->
        <button
          type="button"
          class="btn btn-sm btn-dual mr-2"
          data-toggle="modal"
          data-target="#one-modal-apps"
        >
          <i class="fa fa-fw fa-cubes"></i>
        </button>
        <!-- END Apps Modal -->

        <!-- Open Search Section (visible on smaller screens) -->
        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
        <button
          type="button"
          class="btn btn-sm btn-dual d-md-none"
          data-toggle="layout"
          data-action="header_search_on"
        >
          <i class="fa fa-fw fa-search"></i>
        </button>
        <!-- END Open Search Section -->

        <!-- Search Form (visible on larger screens) -->
        <form
          class="d-none d-md-inline-block"
          action="be_pages_generic_search.html"
          method="POST"
        >
          <div class="input-group input-group-sm">
            <input
              type="text"
              class="form-control form-control-alt"
              placeholder="Search.."
              id="page-header-search-input2"
              name="page-header-search-input2"
            />
            <div class="input-group-append">
              <span class="input-group-text bg-body border-0">
                <i class="fa fa-fw fa-search"></i>
              </span>
            </div>
          </div>
        </form>
        <!-- END Search Form -->
      </div>
      <!-- END Left Section -->

      <!-- Right Section -->
      <right-section></right-section>
      <!-- END Right Section -->
    </div>
    <!-- END Header Content -->

    <!-- Header Search -->
    <div id="page-header-search" class="overlay-header bg-white">
      <div class="content-header">
        <form class="w-100" action="be_pages_generic_search.html" method="POST">
          <div class="input-group">
            <div class="input-group-prepend">
              <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
              <button
                type="button"
                class="btn btn-alt-danger"
                data-toggle="layout"
                data-action="header_search_off"
              >
                <i class="fa fa-fw fa-times-circle"></i>
              </button>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Search or hit ESC.."
              id="page-header-search-input"
              name="page-header-search-input"
            />
          </div>
        </form>
      </div>
    </div>
    <!-- END Header Search -->

    <!-- Header Loader -->
    <!-- Please check out the Loaders page under Components category to see examples of showing/hiding it -->
    <div id="page-header-loader" class="overlay-header bg-white">
      <div class="content-header">
        <div class="w-100 text-center">
          <i class="fa fa-fw fa-circle-notch fa-spin"></i>
        </div>
      </div>
    </div>
    <!-- END Header Loader -->
  </header>
</template>

<script>
import RightSection from "./RightSection.vue";

export default {
  components: { RightSection },
};
</script>

<style>
</style>