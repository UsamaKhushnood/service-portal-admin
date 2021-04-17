<template>
  <div id="refund-request">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-sync-alt"></i> Refund Request</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboardPanels clearfix">
      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">New <br />Refund Request</div> 
              <span class="company-value">10</span>
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">Refund<br />Done</div>
              <span class="company-value">20</span>
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">Denied <br />Refunds</div>
              <span class="company-value">4</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="tabs widget mt-4">
      <ul class="nav nav-tabs widget">
        <li>
          <a href="#userclientrequest" data-toggle="tab" class="active"
            >User Refund Request</a
          >
        </li>
        <li>
          <a href="#clientuserrequest" data-toggle="tab">Client Refund Request</a>
        </li>
      </ul>
      <div class="tab-content">
        <div id="userclientrequest" class="tab-pane fade in active show">
          <CDataTable
            :hover="true"
            :striped="true"
            :border="true"
            :fixed="false"
            :items="items"
            :fields="[
              'No',
              'TimeandDate',
              'UpfrontID',
              'ContractID',
              'CompanyName',
              'UserName',
              'TotalAmount',
              'UpfrontAmount',
              'ReadyPaid',
              'Status'
            ]"
            :items-per-page="10"
            pagination
          >
            <template #No="{index}">
              <td>
                {{index + 1}}
              </td>
            </template>
            <template #Status="{index}">
              <td>
                 <span class="badge badge-success" v-b-modal="'denied-modal'+ index">Open</span>
                 <DeniedPopup :propsindex="index"> </DeniedPopup>
              </td>
            </template>
          </CDataTable>
        </div>
        <div id="clientuserrequest" class="tab-pane fade">
          <CDataTable
            :hover="true"
            :striped="true"
            :border="true"
            :fixed="false"
            :items="items"
            :fields="[
              'No',
              'TimeandDate',
              'UpfrontID',
              'ContractID',
              'CompanyName',
              'UserName',
              'TotalAmount',
              'UpfrontAmount',
              'ReadyPaid',
              'Status'
            ]"
            :items-per-page="10"
            pagination
          >
            <template #No="{index}">
              <td>
                {{index + 1}}
              </td>
            </template>
            <template #Status="{index}">
              <td>
                 <span class="badge badge-danger" v-b-modal="'denied-modal'+ index">Close</span>
              </td>
            </template>
          </CDataTable>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import DeniedPopup from './AllPopups/RequestPopups/DeniedPopup.vue'

import upFrontTableData from './UpfrontTableDate';
export default {
  components: { DeniedPopup },
  data: () => ({
    items: upFrontTableData,
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