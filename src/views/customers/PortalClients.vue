<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-id-card"></i> Poratl Clients</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="mgbt-xs-10">
            <button type="button" class="btn vd_btn vd_bg-blue btn-lg btn-block" v-b-modal="'send-message-modal'">
              <span class="append-icon"><i class="fa fa-comment-o fa-fw"></i></span>Sent Message To All Clients
            </button>
            <SendMessagePopup />
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="row mt-3">
        <div class="col-sm-12">
          <!-- Category1 Tab -->
          <div id="category1" class="active tab-pane fade in show">
            <div class="col-sm-12">
              <div class="row dashboardPanels">
                <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                  <div class="vd_status-widget widget dashboardPanel">
                    <a class="panel-body vd_blue pd-5" href="#">
                      <div class="clearfix">
                        <div class="menu-text clearfix">Active Companies</div>
                        <span class="company-value">10.500</span>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- col-md-3 company end -->
                <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                  <div class="vd_status-widget widget dashboardPanel">
                    <a class="panel-body vd_blue pd-5" href="#">
                      <div class="clearfix">
                        <div class="menu-text clearfix">Blocked Companies</div>
                        <span class="company-value">200</span>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- col-md-3 company end -->
                <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                  <div class="vd_status-widget widget dashboardPanel">
                    <a class="panel-body vd_blue pd-5" href="#">
                      <div class="clearfix">
                        <div class="menu-text clearfix">
                          Suspended Companies
                        </div>
                        <span class="company-value">300</span>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- col-md-3 company end -->
                <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                  <div class="vd_status-widget widget dashboardPanel">
                    <a class="panel-body vd_blue pd-5" href="#">
                      <div class="clearfix">
                        <div class="menu-text clearfix">Total Companies</div>
                        <span class="company-value">11.000</span>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- col-md-3 company end -->
              </div>
              <!-- row dashboardPanels end -->

              <div class="row mt-3">
                <div class="col-sm-12">
                  <div class="tabs widget">
                    <ul class="nav nav-tabs widget">
                      <li>
                        <a data-toggle="tab" href="#allCompaniesTab1" class="active">
                          All Companies
                          <span class="menu-active"><i class="fa fa-caret-up"></i></span></a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#activeCompaniesTab1">
                          Active Companies
                          <span class="menu-active"><i class="fa fa-caret-up"></i></span></a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#blockedCompaniesTab1">
                          Blocked Companies
                          <span class="menu-active"><i class="fa fa-caret-up"></i></span></a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#suspendedCompaniesTab1">
                          Suspended Companies
                          <span class="menu-active"><i class="fa fa-caret-up"></i></span></a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div id="allCompaniesTab1" class="tab-pane active">
                        <CDataTable :hover="true" :striped="true" :border="true" :fixed="false" :items="items" :fields="[
                            'No',
                            'UserName',
                            'UserID',
                            'CurrentJob',
                            'JobsDone',
                            'JobsCancelled',
                            'Reviews',
                            'Options',
                          ]" :items-per-page="10" pagination>
                          <template #No='{index}' > 
                           <td> {{index + 1}}</td>
                          </template>
                          <template #Options="{index}">
                            <td class="menu-action">
                              <a v-b-modal="'block-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i class="fa fa-lock" data-original-title="Block" data-toggle="tooltip"
                                  data-placement="top"></i>
                              </a>
                              <a v-b-modal="'suspend-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i data-original-title="Suspend" data-toggle="tooltip" data-placement="top"
                                  class="fa fa-pause"></i>
                              </a>
                              <BlockUser :propsindex="index" > </BlockUser>
                              <SuspendUser :propsindex="index" > </SuspendUser>
                            </td>
                          </template>
                        </CDataTable>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->

                      <div id="activeCompaniesTab1" class="tab-pane">
                        <CDataTable :hover="true" :striped="true" :border="true" :fixed="false" :items="items" :fields="[
                            'No',
                            'UserName',
                            'UserID',
                            'CurrentJob',
                            'JobsDone',
                            'JobsCancelled',
                            'Reviews',
                            'Options',
                          ]" :items-per-page="10" pagination>
                          <template #No='{index}' > 
                           <td> {{index + 1}}</td>
                          </template>
                          <template #Options="{index}">
                            <td class="menu-action">
                              <a v-b-modal="'block-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i class="fa fa-lock" data-original-title="Block" data-toggle="tooltip"
                                  data-placement="top"></i>
                              </a>
                              <a v-b-modal="'suspend-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i data-original-title="Suspend" data-toggle="tooltip" data-placement="top"
                                  class="fa fa-pause"></i>
                              </a>
                            </td>
                          </template>
                        </CDataTable>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->

                      <div id="blockedCompaniesTab1" class="tab-pane">
                        <CDataTable :hover="true" :striped="true" :border="true" :fixed="false" :items="items" :fields="[
                            'No',
                            'UserName',
                            'UserID',
                            'CurrentJob',
                            'JobsDone',
                            'JobsCancelled',
                            'Reviews',
                            'Options',
                          ]" :items-per-page="10" pagination>
                          <template #No='{index}' > 
                           <td> {{index + 1}}</td>
                          </template>
                          <template #Options="{index}">
                            <td class="menu-action">
                              <a v-b-modal="'block-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i class="fa fa-lock" data-original-title="Block" data-toggle="tooltip"
                                  data-placement="top"></i>
                              </a>
                              <a v-b-modal="'suspend-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i data-original-title="Suspend" data-toggle="tooltip" data-placement="top"
                                  class="fa fa-pause"></i>
                              </a>
                              <span class="badge badge-dark" v-b-modal="'reason-modal' + index">Reason</span>
                            </td>
                          
                          </template>
                        </CDataTable>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->

                      <div id="suspendedCompaniesTab1" class="tab-pane">
                        <CDataTable :hover="true" :striped="true" :border="true" :fixed="false" :items="items" :fields="[
                            'No',
                            'UserName',
                            'UserID',
                            'CurrentJob',
                            'JobsDone',
                            'JobsCancelled',
                            'Reviews',
                            'Options',
                          ]" :items-per-page="10" pagination>
                          <template #No='{index}' > 
                           <td> {{index + 1}}</td>
                          </template>
                          <template #Options="{index}">
                            <td class="menu-action">
                              <a v-b-modal="'block-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i class="fa fa-lock" data-original-title="Block" data-toggle="tooltip"
                                  data-placement="top"></i>
                              </a>
                              <a v-b-modal="'suspend-user-modal' + index"
                                class="btn menu-icon vd_bd-red vd_red">
                                <i data-original-title="Suspend" data-toggle="tooltip" data-placement="top"
                                  class="fa fa-pause"></i>
                              </a>
                              <span class="badge badge-dark" v-b-modal="'reason-modal' + index">Reason</span>
                            </td>
                            <ReasonPopup :propsindex="index"> </ReasonPopup>
                          </template>
                        </CDataTable>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->
                    </div>
                    <!-- tab-content end -->
                  </div>
                  <!-- tabs-widget end -->
                </div>
              </div>
              <!-- row end -->

              <!-- Category1 Tab END-->
            </div>
            <!-- Category Tabs END -->
          </div>
          <!-- col-sm-12 tabs end -->
        </div>
        <!-- row end -->
      </div>
      <!-- .vd_content-section -->
    </div>
  </div>
</template>
<script>
import ReasonPopup from './allPopups/ReasonPopup.vue'
import SuspendUser from './allPopups/SuspendUser.vue'
import BlockUser from './allPopups/BlockUser.vue'
  import SendMessagePopup from './allPopups/SendMessagePopup.vue'
  import usersData from "./reviewTableData";
  export default {
    components: {
      SendMessagePopup, BlockUser, SuspendUser, ReasonPopup
    },
    data: () => ({
      items: usersData,
    }),
    methods: {
      getBadge(status) {
        return status === "Seen" ?
          "success" :
          status === "Unseen" ?
            "danger" :
            "primary";
      },
      deleteEntry(index) {
        this.items.splice(index, 1);
      },
    },
  };
</script>
</script>
<style lang="scss"></style>