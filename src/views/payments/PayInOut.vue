<template>
  <div id="payinout">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i>PayIn / PayOut Accounts</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="vd_panel-header text-center pdng10">
        <h3 class=" vd_green">PayIn Accounts</h3>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="mrgn15-0">
                  <button
                    type="button"
                    class="btn vd_btn vd_bg-blue btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#addPayIn"
                  >
                    <span class="append-icon"><i class="fa fa-plus"></i></span
                    >Add New Account
                  </button>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 pdng5">
                <table class="discountTable">
                  <colgroup>
                    <col width="10%" />
                    <col width="30%" />
                    <col width="30%" />
                    <col width="30%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="text-center">No.</th>
                      <th class="text-center">Title</th>
                      <th class="text-center">Details</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>paypal</td>
                      <td>paypal@paypal.com</td>
                      <td>
                        <a
                          class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                          data-toggle="modal"
                          data-target="#editPayWay"
                          ><i
                            class="fa fa-pencil"
                            data-original-title="edit"
                            data-toggle="tooltip"
                            data-placement="top"
                          ></i
                        ></a>
                        <a
                          class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                          data-toggle="modal"
                          data-target="#removePayWay"
                          ><i
                            class="fa fa-trash-o"
                            data-original-title="remove"
                            data-toggle="tooltip"
                            data-placement="top"
                          ></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- col-md-12 end -->
            </div>
            <!-- row end -->
          </div>
          <!-- pdng5 -->
        </div>
      </div>
      <!-- row -->

      <div class="vd_panel-header text-center pdng10">
        <h3 class=" vd_green">PayOut Accounts</h3>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="mrgn15-0">
                  <button
                    type="button"
                    class="btn vd_btn vd_bg-blue btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#addPayOut"
                  >
                    <span class="append-icon"><i class="fa fa-plus"></i></span
                    >Add New Account
                  </button>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 pdng5">
                <table class="discountTable">
                  <colgroup>
                    <col width="10%" />
                    <col width="30%" />
                    <col width="30%" />
                    <col width="30%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="text-center">No.</th>
                      <th class="text-center">Title</th>
                      <th class="text-center">Details</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>visa</td>
                      <td>1234 5555 6863 2254</td>
                      <td>
                        <a
                          class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                          data-toggle="modal"
                          data-target="#editPayWay"
                          ><i
                            class="fa fa-pencil"
                            data-original-title="edit"
                            data-toggle="tooltip"
                            data-placement="top"
                          ></i
                        ></a>
                        <a
                          class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                          data-toggle="modal"
                          data-target="#removePayWay"
                          ><i
                            class="fa fa-trash-o"
                            data-original-title="remove"
                            data-toggle="tooltip"
                            data-placement="top"
                          ></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- col-md-12 end -->
            </div>
            <!-- row end -->
          </div>
          <!-- pdng5 -->
        </div>
      </div>
      <!-- row -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
