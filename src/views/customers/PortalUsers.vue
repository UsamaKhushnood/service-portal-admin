<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-id-card"></i> Poratl Users</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="mgbt-xs-10">
            <button
              type="button"
              class="btn vd_btn vd_bg-blue btn-lg btn-block"
              data-toggle="modal"
              data-target="#sentMessageCompany"
            >
              <span class="append-icon"
                ><i class="fa fa-comment-o fa-fw"></i></span
              >Sent Message To All Clients
            </button>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <!-- Category1 Tab -->
          <div id="category1" class="active tab-pane fade in show">
            <div class="col-sm-12">
              <div class="row dashboardPanels">
                <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                  <div class="vd_status-widget widget dashboardPanel">
                    <a class="panel-body vd_blue pd-5" href="#">
                      <div class="clearfix">
                        <div class="menu-text clearfix">Active Users</div>
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
                        <div class="menu-text clearfix">Blocked Users</div>
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
                          Suspended Users
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
                        <div class="menu-text clearfix">Total Users</div>
                        <span class="company-value">11.000</span>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- col-md-3 company end -->
              </div>
              <!-- row dashboardPanels end -->

              <div class="row">
                <div class="col-sm-12">
                  <div class="tabs widget">
                    <ul class="nav nav-tabs widget">
                      <li class="active">
                        <a data-toggle="tab" href="#allUsersTab1">
                          All Users
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i></span
                        ></a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#activeUsersTab1">
                          Active Users
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i></span
                        ></a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#blockedUsersTab1">
                          Blocked Users
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i></span
                        ></a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#suspendedUsersTab1">
                          Suspended Users
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i></span
                        ></a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div id="allUsersTab1" class="tab-pane active">
                        <CDataTable
                          :hover="true"
                          :striped="true"
                          :border="true"
                          :fixed="false"
                          :items="items"
                          :fields="[
                            'No',
                            'ReviewID',
                            'ForShop',
                            'UserName',
                            'AverageRating',
                            'Date',
                            'Status',
                            'Actions',
                          ]"
                          :items-per-page="10"
                          pagination
                        >
                          <template #Status="{item}">
                            <td>
                              <CBadge :color="getBadge(item.Status)"
                                >{{ item.Status }}
                              </CBadge>
                            </td>
                          </template>
                          <template #Actions="{index}">
                            <td>
                              <button
                                class="btn btn-success btn-sm text-center py-0"
                                @click="deleteEntry(index)"
                              >
                                <i
                                  class="fas fa-times"
                                  style="font-size:10px"
                                ></i>
                              </button>
                            </td>
                          </template>
                        </CDataTable>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->

                      <div id="activeUsersTab1" class="tab-pane">
                        <CDataTable
                          :hover="true"
                          :striped="true"
                          :border="true"
                          :fixed="false"
                          :items="items"
                          :fields="[
                            'No',
                            'ReviewID',
                            'ForShop',
                            'UserName',
                            'AverageRating',
                            'Date',
                            'Status',
                            'Actions',
                          ]"
                          :items-per-page="10"
                          pagination
                        >
                          <template #Status="{item}">
                            <td>
                              <CBadge :color="getBadge(item.Status)"
                                >{{ item.Status }}
                              </CBadge>
                            </td>
                          </template>
                          <template #Actions="{index}">
                            <td>
                              <button
                                class="btn btn-success btn-sm text-center py-0"
                                @click="deleteEntry(index)"
                              >
                                <i
                                  class="fas fa-times"
                                  style="font-size:10px"
                                ></i>
                              </button>
                            </td>
                          </template>
                        </CDataTable>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->

                      <div id="blockedUsersTab1" class="tab-pane">
                        <CDataTable
                          :hover="true"
                          :striped="true"
                          :border="true"
                          :fixed="false"
                          :items="items"
                          :fields="[
                            'No',
                            'ReviewID',
                            'ForShop',
                            'UserName',
                            'AverageRating',
                            'Date',
                            'Status',
                            'Actions',
                          ]"
                          :items-per-page="10"
                          pagination
                        >
                          <template #Status="{item}">
                            <td>
                              <CBadge :color="getBadge(item.Status)"
                                >{{ item.Status }}
                              </CBadge>
                            </td>
                          </template>
                          <template #Actions="{index}">
                            <td>
                              <button
                                class="btn btn-success btn-sm text-center py-0"
                                @click="deleteEntry(index)"
                              >
                                <i
                                  class="fas fa-times"
                                  style="font-size:10px"
                                ></i>
                              </button>
                            </td>
                          </template>
                        </CDataTable>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->

                      <div id="suspendedUsersTab1" class="tab-pane">
                        <CDataTable
                          :hover="true"
                          :striped="true"
                          :border="true"
                          :fixed="false"
                          :items="items"
                          :fields="[
                            'No',
                            'ReviewID',
                            'ForShop',
                            'UserName',
                            'AverageRating',
                            'Date',
                            'Status',
                            'Actions',
                          ]"
                          :items-per-page="10"
                          pagination
                        >
                          <template #Status="{item}">
                            <td>
                              <CBadge :color="getBadge(item.Status)"
                                >{{ item.Status }}
                              </CBadge>
                            </td>
                          </template>
                          <template #Actions="{index}">
                            <td>
                              <button
                                class="btn btn-success btn-sm text-center py-0"
                                @click="deleteEntry(index)"
                              >
                                <i
                                  class="fas fa-times"
                                  style="font-size:10px"
                                ></i>
                              </button>
                            </td>
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
import usersData from "./reviewTableData";
export default {
  data: () => ({
    items: usersData,
  }),
  methods: {
    getBadge(status) {
      return status === "Seen"
        ? "success"
        : status === "Unseen"
        ? "danger"
        : "primary";
    },
    deleteEntry(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style lang="scss"></style>
