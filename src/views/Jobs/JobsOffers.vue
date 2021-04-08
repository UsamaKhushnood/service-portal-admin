<template>
    <div id="salesHistory">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> Jobs Offers</h1>
          </div>
        </div>

        <div class="dashboardPanels clearfix">
          <div class="col-md-3 col-sm-12 text-center company">
            <div class="vd_status-widget widget dashboardPanel">
              <a class="panel-body vd_blue pd-5" href="#">
                <div class="clearfix">
                  <div class="menu-text clearfix">
                    New
                    <br />Offers
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
                    Offers
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
                    Accepted Offers
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
                    <br />Offers
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
                    <li class="active">
                      <a data-toggle="tab" href="#new-Offers-tab-c1">
                        New Offers
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#Offers-hold-tab-c1">
                        Offers On Hold
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#accepted-Offers-tab-c1">
                        Accepted Offers
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#denied-Offers-tab-c1">
                        Denied Offers
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="new-Offers-tab-c1" class="tab-pane active">
                      <div class="pd-20">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="panel widget">
                              <div class="panel-body table-responsive">
                                <table class="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Company Name</th>
                                      <th>Category</th>
                                      <th>Offers Time</th>
                                      <th>Phone-No.</th>
                                      <th>Options</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>The Company Ltd</td>
                                      <td class="center">Bitcoin</td>
                                      <td class="center"></td>
                                      <td class="center">112</td>
                                      <td class="menu-action">
                                        <a
                                          data-target="#myModal5"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-green vd_green"
                                        >
                                          <i
                                            data-original-title="view"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-eye"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#successAdd"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-yellow vd_yellow"
                                        >
                                          <i
                                            data-original-title="accept"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-check"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#denyOffers"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-red vd_red"
                                        >
                                          <i
                                            data-original-title="denied"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-minus-circle"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#holdOffers"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-red vd_red"
                                        >
                                          <i
                                            data-original-title="hold"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-pause"
                                          ></i>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- panel-body end -->
                            </div>
                            <!-- panel widget end -->
                          </div>
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- pd-20 end -->
                    </div>

                    <!-- new-Offers-tab SECTION 1 END -->

                    <div id="Offers-hold-tab-c1" class="tab-pane">
                      <div class="pd-20">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="panel widget">
                              <div class="panel-body table-responsive">
                                <table class="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Company Name</th>
                                      <th>Category</th>
                                      <th>Offers Time</th>
                                      <th>Phone-No.</th>
                                      <th>Options</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>The Company Ltd</td>
                                      <td class="center">Bitcoin</td>
                                      <td class="center"></td>
                                      <td class="center">112</td>
                                      <td class="menu-action">
                                        <a
                                          data-target="#viewAccept"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-green vd_green"
                                        >
                                          <i
                                            data-original-title="view"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-eye"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#successAdd"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-yellow vd_yellow"
                                        >
                                          <i
                                            data-original-title="accept"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-check"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#denyOffers"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-red vd_red"
                                        >
                                          <i
                                            data-original-title="denied"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-minus-circle"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#onHold"
                                          data-toggle="modal"
                                          href="javascript:void(0);"
                                        >
                                          <span class="label label-danger"
                                            >On Hold</span
                                          >
                                        </a>
                                        <!--<a data-target="#theReason" data-toggle="modal" href="javascript:void(0);"><span class="label label-default">Reason</span></a>-->
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- panel-body end -->
                            </div>
                            <!-- panel widget end -->
                          </div>
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- pd-20 end -->
                    </div>

                    <!-- Offers-hold-tab SECTION 1 END -->

                    <div id="accepted-Offers-tab-c1" class="tab-pane">
                      <div class="pd-20">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="panel widget">
                              <div class="panel-body table-responsive">
                                <table class="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Company Name</th>
                                      <th>Category</th>
                                      <th>Offers Time</th>
                                      <th>Phone-No.</th>
                                      <th>Options</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>The Company Ltd</td>
                                      <td class="center">Bitcoin</td>
                                      <td class="center"></td>
                                      <td class="center">112</td>
                                      <td class="menu-action">
                                        <a
                                          data-target="#viewAccept"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-green vd_green"
                                        >
                                          <i
                                            data-original-title="view"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-eye"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#onAccept"
                                          data-toggle="modal"
                                          href="javascript:void(0);"
                                        >
                                          <span class="label label-success"
                                            >Accepted</span
                                          >
                                        </a>
                                        <a
                                          data-target="#denyOffers"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-red vd_red"
                                        >
                                          <i
                                            data-original-title="denied"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-minus-circle"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#holdOffers"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-red vd_red"
                                        >
                                          <i
                                            data-original-title="hold"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-pause"
                                          ></i>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- panel-body end -->
                            </div>
                            <!-- panel widget end -->
                          </div>
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- pd-20 end -->
                    </div>

                    <!-- accepted-Offers-tab SECTION 1 END -->

                    <div id="denied-Offers-tab-c1" class="tab-pane">
                      <div class="pd-20">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="panel widget">
                              <div class="panel-body table-responsive">
                                <table class="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Company Name</th>
                                      <th>Category</th>
                                      <th>Offers Time</th>
                                      <th>Phone-No.</th>
                                      <th>Options</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>The Company Ltd</td>
                                      <td class="center">Bitcoin</td>
                                      <td class="center"></td>
                                      <td class="center">112</td>
                                      <td class="menu-action">
                                        <a
                                          data-target="#viewAccept"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-green vd_green"
                                        >
                                          <i
                                            data-original-title="view"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-eye"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#successAdd"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-yellow vd_yellow"
                                        >
                                          <i
                                            data-original-title="accept"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-check"
                                          ></i>
                                        </a>
                                        <a
                                          data-target="#denied"
                                          data-toggle="modal"
                                          href="javascript:void(0);"
                                        >
                                          <span class="label label-danger"
                                            >Denied</span
                                          >
                                        </a>
                                        <a
                                          data-target="#holdOffers"
                                          data-toggle="modal"
                                          class="btn menu-icon vd_bd-red vd_red"
                                        >
                                          <i
                                            data-original-title="hold"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            class="fa fa-pause"
                                          ></i>
                                        </a>
                                        <!--<a data-target="#theReason" data-toggle="modal" href="javascript:void(0);"><span class="label label-default">Reason</span></a>-->
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!-- panel-body end -->
                            </div>
                            <!-- panel widget end -->
                          </div>
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- pd-20 end -->
                    </div>

                    <!-- denied-Offers-tab SECTION 1 END -->
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
export default {
    
}
</script>
<style lang="scss">
    
</style>