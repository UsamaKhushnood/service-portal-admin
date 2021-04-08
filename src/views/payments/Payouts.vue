<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> Payouts</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboardPanels clearfix">
      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a href="#" class="panel-body vd_blue pd-5"
            ><div class="clearfix">
              <div class="menu-text clearfix">
                New <br />
                Release Request
              </div>
              <span class="company-value">10</span>
            </div></a
          >
        </div>
      </div>
      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a href="#" class="panel-body vd_blue pd-5"
            ><div class="clearfix">
              <div class="menu-text clearfix">Release<br />Done</div>
              <span class="company-value">20</span>
            </div></a
          >
        </div>
      </div>
      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a href="#" class="panel-body vd_blue pd-5"
            ><div class="clearfix">
              <div class="menu-text clearfix">Denied <br />Release</div>
              <span class="company-value">4</span>
            </div></a
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="tabs widget">
        <ul class="nav nav-tabs widget">
          <li>
            <a data-toggle="tab" href="#userPayoutRequest" class="active"
              >User Payout Request<span class="menu-active "
                ><i class="fa fa-caret-up"></i
              ></span>
            </a>
          </li>
          <li class="">
            <a data-toggle="tab" href="#clientPayoutRequest"
              >Client Payout Request<span class="menu-active"
                ><i class="fa fa-caret-up"></i
              ></span>
            </a>
          </li>
          <li class="">
            <a data-toggle="tab" href="#payoutsDone"
              >Payouts Done<span class="menu-active"
                ><i class="fa fa-caret-up"></i
              ></span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="userPayoutRequest" class="tab-pane fade active in show">
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-body table-responsive">
                    <table class="discountTable">
                      <colgroup>
                        <col width="10%" />
                        <col width="10%" />
                        <col width="15%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">Request ID</th>
                          <th class="text-center">Username</th>
                          <th class="text-center">Company Name</th>
                          <th class="text-center">On Milestone</th>
                          <th class="text-center">Request Amount</th>
                          <th class="text-center">Request Type</th>
                          <th class="text-center">Remain</th>
                          <th class="text-center">Option</th>
                          <th class="text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ID-23456</td>
                          <td>Abbas</td>
                          <td>Upwork</td>
                          <td>5000,- €.</td>
                          <td>1000,- €.</td>
                          <td>Release</td>
                          <td>600,- €</td>
                          <td class="menu-action">
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#removePayWay"
                              ><i
                                class="fa fa-money"
                                data-original-title="pay"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>Open</td>
                        </tr>
                        <tr>
                          <td>ID-23456</td>
                          <td>Abbas</td>
                          <td>Upwork</td>
                          <td>5000,- €.</td>
                          <td>1000,- €.</td>
                          <td>Release</td>
                          <td>600,- €</td>
                          <td>
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#removePayWay"
                              ><i
                                class="fa fa-money"
                                data-original-title="pay"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>Open</td>
                        </tr>
                        <tr>
                          <td>ID-23456</td>
                          <td>Abbas</td>
                          <td>Upwork</td>
                          <td>5000,- €.</td>
                          <td>1000,- €.</td>
                          <td>Release</td>
                          <td>600,- €</td>
                          <td>
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#removePayWay"
                              ><i
                                class="fa fa-money"
                                data-original-title="pay"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>Open</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="clientPayoutRequest" class="tab-pane fade">
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-body table-responsive">
                    <table class="discountTable">
                      <colgroup>
                        <col width="10%" />
                        <col width="10%" />
                        <col width="15%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">Request ID</th>
                          <th class="text-center">Username</th>
                          <th class="text-center">Company Name</th>
                          <th class="text-center">On Milestone</th>
                          <th class="text-center">Request Amount</th>
                          <th class="text-center">Request Type</th>
                          <th class="text-center">Remain</th>
                          <th class="text-center">Option</th>
                          <th class="text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ID-23456</td>
                          <td>Abbas</td>
                          <td>Upwork</td>
                          <td>5000,- €.</td>
                          <td>1000,- €.</td>
                          <td>Release</td>
                          <td>600,- €</td>
                          <td class="menu-action">
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#removePayWay"
                              ><i
                                class="fa fa-money"
                                data-original-title="pay"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>Open</td>
                        </tr>
                        <tr>
                          <td>ID-23456</td>
                          <td>Abbas</td>
                          <td>Upwork</td>
                          <td>5000,- €.</td>
                          <td>1000,- €.</td>
                          <td>Release</td>
                          <td>600,- €</td>
                          <td>
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#removePayWay"
                              ><i
                                class="fa fa-money"
                                data-original-title="pay"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>Open</td>
                        </tr>
                        <tr>
                          <td>ID-23456</td>
                          <td>Abbas</td>
                          <td>Upwork</td>
                          <td>5000,- €.</td>
                          <td>1000,- €.</td>
                          <td>Release</td>
                          <td>600,- €</td>
                          <td>
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                            <a
                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#removePayWay"
                              ><i
                                class="fa fa-money"
                                data-original-title="pay"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>Open</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="payoutsDone" class="tab-pane fade">
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-body table-responsive">
                    <table class="discountTable">
                      <colgroup>
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="15%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th class="text-center">Request ID</th>
                          <th class="text-center">Paid To</th>
                          <th class="text-center">Date and Time</th>
                          <th class="text-center">Payment Code</th>
                          <th class="text-center">Payment Amount</th>

                          <th class="text-center">Status</th>
                          <th class="text-center">Total</th>
                          <th class="text-center">Option</th>
                          <th class="text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ID-224434</td>
                          <td>User</td>
                          <td>Jan. 2017</td>
                          <td>546464654</td>
                          <td>100,00 €</td>

                          <td>Paid</td>
                          <td>600,- €</td>
                          <td class="menu-action">
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>
                            <select name="dropdown">
                              <option value="1">Open</option>
                              <option value="2">Paid</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>ID-224434</td>
                          <td>User</td>
                          <td>Jan. 2017</td>
                          <td>546464654</td>
                          <td>100,00 €</td>

                          <td>Paid</td>
                          <td>600,- €</td>
                          <td>
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>
                            <select name="dropdown">
                              <option value="1">Open</option>
                              <option value="2">Paid</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>ID-224434</td>
                          <td>User</td>
                          <td>Jan. 2017</td>
                          <td>546464654</td>
                          <td>100,00 €</td>

                          <td>Paid</td>
                          <td>600,- €</td>
                          <td>
                            <a
                              class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                              data-toggle="modal"
                              data-target="#editPayWay"
                              ><i
                                class="fa fa-eye"
                                data-original-title="view"
                                data-toggle="tooltip"
                                data-placement="top"
                              ></i
                            ></a>
                          </td>
                          <td>
                            <select name="dropdown">
                              <option value="1">Open</option>
                              <option value="2">Paid</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- .vd_content-section -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">

a[data-toggle="tab"].active {
    background: #0000006e;
}

.tabs .nav-tabs>li>a.active:hover {
    background: #0000006e;
}

.tabs.widget{
  width: 100%;
}

.panel .panel-body{
  margin-bottom: 0;
  padding: 15px;
}

.btn i, .btn .c-icon{
  width: auto;
}

.tabs .nav-tabs > li > a.active:after {
    content: ' ';
    width: 10px;
    height: 10px;
    background: #fff;
    z-index: 99999;
    border: 1px solid #fff;
    position: absolute;
    bottom: -12px;
    transform: rotate(45deg);
    left: 50%;
}
</style>
