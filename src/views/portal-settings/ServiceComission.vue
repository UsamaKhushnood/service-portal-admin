<template>
  <div id="service-comission">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-dollar-sign"></i> Service Comission</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row mrgn15-0">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <button
            type="button"
            class="btn vd_btn vd_bg-blue btn-lg btn-block"
            v-b-modal.add-service-commission-modal
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add Service Comission
          </button>
          <AddServiceCommission />
        </div>
        <div class="col-md-4">
          <button
            type="button"
            class="btn vd_btn vd_bg-blue btn-lg btn-block"
            v-b-modal.add-sale-service-modal
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add % Sale Service
          </button>
          <AddSaleService />
        </div>
        <div class="col-md-2"></div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="tabs widget">
            <ul class="nav nav-tabs widget">
              <li>
                <a class="active" data-toggle="tab" href="#serviceComission">
                  Service Comission
                  <span class="menu-active"
                    ><i class="fa fa-caret-up"></i
                  ></span>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#salesComission">
                  Sales Comission
                  <span class="menu-active"
                    ><i class="fa fa-caret-up"></i
                  ></span>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="serviceComission" class="tab-pane active fade in show">
                <div class="pd-20">
                  <table class="table table-hover">
                    <colgroup>
                      <col width="10%" />
                      <col width="30%" />
                      <col width="30%" />
                      <col width="30%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="text-center">No.</th>
                        <th class="text-center">Service</th>
                        <th class="text-center">Comission, %</th>
                        <th class="text-center">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-center">
                        <td>1</td>
                        <td>Service 1</td>
                        <td>5</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              ><i
                                class="fa fa-pencil"
                                data-original-title="Edit"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-red vd_red"
                              ><i
                                class="fa fa-trash-o"
                                data-original-title="Remove"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <tr class="text-center">
                        <td>2</td>
                        <td>Service 2</td>
                        <td>10</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              ><i
                                class="fa fa-pencil"
                                data-original-title="Edit"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-red vd_red"
                              ><i
                                class="fa fa-trash-o"
                                data-original-title="Remove"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <tr class="text-center">
                        <td>2</td>
                        <td>Service 3</td>
                        <td>14</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              ><i
                                class="fa fa-pencil"
                                data-original-title="Edit"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-red vd_red"
                              ><i
                                class="fa fa-trash-o"
                                data-original-title="Remove"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="salesComission" class="tab-pane fade">
                <div class="pd-20">
                  <table class="table table-hover">
                    <colgroup>
                      <col width="10%" />
                      <col width="25%" />
                      <col width="25%" />
                      <col width="25%" />
                      <col width="15%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th class="text-center">No.</th>
                        <th class="text-center">Service</th>
                        <th class="text-center">Posting Price</th>
                        <th class="text-center">Comission, %</th>
                        <th class="text-center">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-center">
                        <td>1</td>
                        <td>Service 1</td>
                        <td>500</td>
                        <td>5</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              ><i
                                class="fa fa-pencil"
                                data-original-title="Edit"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-red vd_red"
                              ><i
                                class="fa fa-trash-o"
                                data-original-title="Remove"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <tr class="text-center">
                        <td>2</td>
                        <td>Service 2</td>
                        <td>1.000</td>
                        <td>10</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              ><i
                                class="fa fa-pencil"
                                data-original-title="Edit"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-red vd_red"
                              ><i
                                class="fa fa-trash-o"
                                data-original-title="Remove"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </div>
                        </td>
                      </tr>
                      <tr class="text-center">
                        <td>2</td>
                        <td>Service 3</td>
                        <td>1.450</td>
                        <td>14</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                              ><i
                                class="fa fa-pencil"
                                data-original-title="Edit"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              data-toggle="modal"
                              data-target="#"
                              class="btn menu-icon vd_bd-red vd_red"
                              ><i
                                class="fa fa-trash-o"
                                data-original-title="Remove"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- col-md-12 end -->
      </div>
      <!-- row end -->
    </div>
  </div>
</template>
<script>
import AddSaleService from './service-commission/AddSaleService.vue'
import AddServiceCommission from './service-commission/AddServiceCommission.vue'
export default {
  components: { AddServiceCommission, AddSaleService }
};
</script>
<style lang="scss"></style>
