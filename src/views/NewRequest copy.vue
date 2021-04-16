<template>
  <div id="newrequest">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> New Request</h1>
          </div>
        </div>

        <div class="dashboardPanels clearfix">
          <div class="col-md-3 col-sm-12 text-center company">
            <div class="vd_status-widget widget dashboardPanel">
              <a class="panel-body vd_blue pd-5" href="#">
                <div class="clearfix">
                  <div class="menu-text clearfix">
                    New
                    <br />Request
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
                    Request
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
                    Accepted Request
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
                    <br />Request
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
                        href="#new-request-tab-c1"
                        class="active"
                      >
                        New Request
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#request-hold-tab-c1">
                        Request On Hold
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#accepted-request-tab-c1">
                        Accepted Request
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#denied-request-tab-c1">
                        Denied Request
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="new-request-tab-c1" class="tab-pane active">
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
                            {{ index }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
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
                              data-target="#denyRequest"
                              data-toggle="modal"
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
                              data-target="#holdRequest"
                              data-toggle="modal"
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
                      <!-- pd-20 end -->
                    </div>

                    <!-- new-request-tab SECTION 1 END -->

                    <div id="request-hold-tab-c1" class="tab-pane">
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
                            {{ index }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
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
                              data-target="#denyRequest"
                              data-toggle="modal"
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
                              data-target="#onAccept"
                              data-toggle="modal"
                              href="javascript:void(0);"
                            >
                              <span class="badge badge-danger">On Hold</span>
                            </a>
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>

                    <!-- request-hold-tab SECTION 1 END -->

                    <div id="accepted-request-tab-c1" class="tab-pane">
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
                            {{ index }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>

                            <a
                              data-target="#denyRequest"
                              data-toggle="modal"
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
                              data-target="#holdRequest"
                              data-toggle="modal"
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
                              <span class="badge badge-success">Accepted</span>
                            </a>
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>

                    <!-- accepted-request-tab SECTION 1 END -->

                    <div id="denied-request-tab-c1" class="tab-pane">
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
                            {{ index }}
                          </td>
                        </template>
                        <template #Options="{index}">
                          <td class="menu-action">
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
                              class="btn menu-icon vd_bd-green vd_green"
                            >
                              <i
                                class="fa fa-eye"
                                v-b-tooltip.hover
                                title="View"
                              ></i>
                            </a>
                            <a
                              data-target="#viewAccept"
                              data-toggle="modal"
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
                              data-target="#holdRequest"
                              data-toggle="modal"
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
                            <AllPopups :propsindex="index"> </AllPopups>
                          </td>
                        </template>
                      </CDataTable>
                      <!-- pd-20 end -->
                    </div>

                    <!-- denied-request-tab SECTION 1 END -->
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
import tableData from "./new-request-data/tableData";
import AllPopups from "@/views/new-request-data/AllPopups.vue";
export default {
  name: "NewRequest",
  components: { AllPopups },
  data: () => ({
    items: tableData,
  }),
};
</script>
