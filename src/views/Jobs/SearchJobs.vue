<template>
  <div id="allJobs">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> Search Jobs</h1>
          </div>
        </div>

        <div class="dashboardPanels clearfix">
          <div class="col-md-3 col-sm-12 text-center company">
            <div class="vd_status-widget widget dashboardPanel">
              <a class="panel-body vd_blue pd-5" href="#">
                <div class="clearfix">
                  <div class="menu-text clearfix">
                    New
                    <br />Jobs
                  </div>
                  <span class="company-value">25</span>
                </div>
              </a>
            </div>
          </div>

          <div class="col-md-3 col-sm-12 text-center company">
            <div class="vd_status-widget widget dashboardPanel">
              <a class="panel-body vd_blue pd-5" href="#">
                <div class="clearfix">
                  <div class="menu-text clearfix">
                    Jobs
                    <br />on Hold
                  </div>
                  <span class="company-value">1</span>
                </div>
              </a>
            </div>
          </div>

          <div class="col-md-3 col-sm-12 text-center company">
            <div class="vd_status-widget widget dashboardPanel">
              <a class="panel-body vd_blue pd-5" href="#">
                <div class="clearfix">
                  <div class="menu-text clearfix">
                    Accepted Jobs
                  </div>
                  <span class="company-value">10</span>
                </div>
              </a>
            </div>
          </div>

          <div class="col-md-3 col-sm-12 text-center company">
            <div class="vd_status-widget widget dashboardPanel">
              <a class="panel-body vd_blue pd-5" href="#">
                <div class="clearfix">
                  <div class="menu-text clearfix">
                    Denied
                    <br />Jobs
                  </div>
                  <span class="company-value">2</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="vd_content-section clearfix">
          <div class="row">
            <div class="col-sm-12 tabs">
              <div id="category1" class="active tab-pane  in">
                <div class="tabs widget">
                  <ul class="nav nav-tabs widget">
                    <li>
                      <a
                        data-toggle="tab"
                        href="#new-Jobs-tab-c1"
                        class="active"
                      >
                        New Jobs
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#Jobs-hold-tab-c1">
                        Jobs On Hold
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#accepted-Jobs-tab-c1">
                        Accepted Jobs
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#denied-Jobs-tab-c1">
                        Denied Jobs
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="new-Jobs-tab-c1" class="tab-pane active">
                      <CDataTable
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        :fields="[
                          'No',
                          'CompanyName',
                          'Category',
                          'RequestTime',
                          'PhoneNo',
                          'Options',
                        ]"
                        :items-per-page="10"
                        pagination
                      >
                        <template #No="{index}">
                          <td>
                            {{ index + 1 }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              class="btn menu-icon vd_bd-green vd_green"
                              v-b-toggle="'view-shop-sidebar' + index"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>
                            <a
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              v-b-modal="'successfully-added-modal' + index"
                            >
                              <i
                                class="fa fa-check"
                                v-b-tooltip.hover
                                title="Accept"
                              ></i>
                            </a>

                            <a
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'deny-request-modal' + index"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Denied"
                                class="fa fa-minus-circle"
                              ></i>
                            </a>
                            <a
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'hold-request-modal' + index"
                            >
                              <i
                                class="fa fa-pause"
                                v-b-tooltip.hover
                                title="Hold"
                              ></i>
                            </a>
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
                        </template>
                      </CDataTable>
                    </div>

                    <!-- new-Jobs-tab SECTION 1 END -->
                    <div id="Jobs-hold-tab-c1" class="tab-pane">
                      <CDataTable
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        :fields="[
                          'No',
                          'CompanyName',
                          'Category',
                          'RequestTime',
                          'PhoneNo',
                          'Options',
                        ]"
                        :items-per-page="10"
                        pagination
                      >
                        <template #No="{index}">
                          <td>
                            {{ index + 1 }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              class="btn menu-icon vd_bd-green vd_green"
                              v-b-toggle="'view-shop-sidebar' + index"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>
                            <a
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              v-b-modal="'successfully-added-modal' + index"
                            >
                              <i
                                class="fa fa-check"
                                v-b-tooltip.hover
                                title="Accept"
                              ></i>
                            </a>

                            <a
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'deny-request-modal' + index"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Hold"
                                class="fa fa-minus-circle"
                              ></i>
                            </a>
                            <a
                              data-target="#onAccept"
                              data-toggle="modal"
                              href="javascript:void(0);"
                            >
                              <span class="badge badge-warning">Hold</span>
                            </a>
                          </td>
                        </template>
                      </CDataTable>
                    </div>

                    <!-- Jobs-hold-tab SECTION 1 END -->

                    <div id="accepted-Jobs-tab-c1" class="tab-pane">
                      <CDataTable
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        :fields="[
                          'No',
                          'CompanyName',
                          'Category',
                          'RequestTime',
                          'PhoneNo',
                          'Options',
                        ]"
                        :items-per-page="10"
                        pagination
                      >
                        <template #No="{index}">
                          <td>
                            {{ index + 1 }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              class="btn menu-icon vd_bd-green vd_green"
                              v-b-toggle="'view-shop-sidebar' + index"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>
                            <a
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'deny-request-modal' + index"
                            >
                              <i
                                v-b-tooltip.hover
                                title="Denied"
                                class="fa fa-minus-circle"
                              ></i>
                            </a>
                            <a
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'hold-request-modal' + index"
                            >
                              <i
                                class="fa fa-pause"
                                v-b-tooltip.hover
                                title="Hold"
                              ></i>
                            </a>
                                                        <a
                              data-target="#onAccept"
                              data-toggle="modal"
                              href="javascript:void(0);"
                            >
                              <span class="badge badge-success">Accept</span>
                            </a>
                          </td>
                        </template>
                      </CDataTable>
                    </div>

                    <!-- accepted-Jobs-tab SECTION 1 END -->

                    <div id="denied-Jobs-tab-c1" class="tab-pane">
                      <CDataTable
                        :hover="true"
                        :striped="true"
                        :border="true"
                        :fixed="false"
                        :items="items"
                        :fields="[
                          'No',
                          'CompanyName',
                          'Category',
                          'RequestTime',
                          'PhoneNo',
                          'Options',
                        ]"
                        :items-per-page="10"
                        pagination
                      >
                        <template #No="{index}">
                          <td>
                            {{ index + 1 }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              class="btn menu-icon vd_bd-green vd_green"
                              v-b-toggle="'view-shop-sidebar' + index"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>
                            <a
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              v-b-modal="'successfully-added-modal' + index"
                            >
                              <i
                                class="fa fa-check"
                                v-b-tooltip.hover
                                title="Accept"
                              ></i>
                            </a>
                            <a
                              class="btn menu-icon vd_bd-red vd_red"
                              v-b-modal="'hold-request-modal' + index"
                            >
                              <i
                                class="fa fa-pause"
                                v-b-tooltip.hover
                                title="Hold"
                              ></i>
                            </a>
                                                        <a
                              data-target="#onAccept"
                              data-toggle="modal"
                              href="javascript:void(0);"
                            >
                              <span class="badge badge-danger">Denied</span>
                            </a>
                          </td>
                        </template>
                      </CDataTable>
                    </div>

                    <!-- denied-Jobs-tab SECTION 1 END -->
                  </div>
                  <!-- tab-content end -->
                </div>
                <!-- tabs widget -->
              </div>
              <!-- #category1 -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- .vd_content-section -->
      </div>
      <!-- .vd_content -->

      <!-- .vd_container -->
    </div>
  </div>
</template>
<script>
import tableData from "./tableData";
import AllPopups from "./AllPopups.vue";
export default {
  components: { AllPopups },
  data: () => ({
    items: tableData,
  }),
};
</script>
<style lang="scss"></style>
