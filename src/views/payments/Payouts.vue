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
      <div class="tabs widget mt-4">
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
            <CDataTable
              :hover="true"
              :striped="true"
              :border="true"
              :fixed="false"
              :items="items"
              :fields="[
                'RequestID',
                'UserName',
                'CompanyName',
                'OurMilestone',
                'RequestAmount',
                'RequestType',
                'Remain',
                'Options',
                'Status',
              ]"
              :items-per-page="10"
              pagination
            >
              <template #Options="{index}">
                <td class="menu-action">
                  <a
                    class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                    v-b-modal="'edit-payment-modal' + index"
                    ><i
                      class="fa fa-eye"
                      data-original-title="view"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                  <a
                    class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                    v-b-modal="'remove-payment-modal' + index"
                    ><i
                      class="fa fa-money"
                      data-original-title="pay"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                <EditPaymentWay :propsindex="index"> </EditPaymentWay>
                <RemovePaymentWay :propsindex="index"> </RemovePaymentWay>
                </td>
              </template>
            </CDataTable>
          </div>

          <div id="clientPayoutRequest" class="tab-pane fade">
            <CDataTable
              :hover="true"
              :striped="true"
              :border="true"
              :fixed="false"
              :items="items"
              :fields="[
                'RequestID',
                'UserName',
                'CompanyName',
                'OurMilestone',
                'RequestAmount',
                'RequestType',
                'Remain',
                'Options',
                'Status',
              ]"
              :items-per-page="10"
              pagination
            >
              <template #Options="{index}">
                <td class="menu-action">
                  <a
                    class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                    v-b-modal="'edit-payment-modal' + index"
                    ><i
                      class="fa fa-eye"
                      data-original-title="view"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                  <a
                    class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                    v-b-modal="'remove-payment-modal' + index"
                    ><i
                      class="fa fa-money"
                      data-original-title="pay"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                </td>
              </template>
            </CDataTable>
          </div>

          <div id="payoutsDone" class="tab-pane fade">
            <CDataTable
              :hover="true"
              :striped="true"
              :border="true"
              :fixed="false"
              :items="items"
              :fields="[
                'RequestID',
                'UserName',
                'CompanyName',
                'OurMilestone',
                'RequestAmount',
                'RequestType',
                'Remain',
                'Options',
                'Status',
              ]"
              :items-per-page="10"
              pagination
            >
              <template #Options="{index}">
                <td class="menu-action">
                  <a
                    class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                    data-toggle="modal"
                    data-target="#editPayWay"
                    v-b-modal="'edit-payment-modal' + index"
                    ><i
                      class="fa fa-eye"
                      data-original-title="view"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                </td>
              </template>
              <template #Status> 
                <td>
                     <b-form-select value="Open" :options="['Open', 'Close']" size="sm"></b-form-select>
                </td>
              </template>
            </CDataTable>
          </div>
        </div>
      </div>
      <!-- .vd_content-section -->
    </div>
  </div>
</template>
<script>
import RemovePaymentWay from "./AllPopups/Payouts/RemovePaymentWay.vue";
import EditPaymentWay from "./AllPopups/Payouts/EditPaymentWay.vue";
import UpfrontAcceptPopup from "./AllPopups/RequestPopups/UpfrontAcceptPopup.vue";
import payoutsTableData from "./payoutsTableData";
export default {
  components: { UpfrontAcceptPopup, EditPaymentWay, RemovePaymentWay },
  data: () => ({
    items: payoutsTableData,
  }),
};
</script>
<style lang="scss"></style>
