<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-arrow-circle-up"></i> Upfront Request</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboardPanels clearfix">
      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">New <br />Request</div>
              <span class="company-value">10</span>
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">Upfront <br />Done</div>
              <span class="company-value">20</span>
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">Denied <br />Upfronts</div>
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
            >Upfront Done</a
          >
        </li>
        <li>
          <a href="#clientuserrequest" data-toggle="tab">Upfront Denied</a>
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
                <span class="badge badge-success" v-b-modal="'upfront-status-modal' + index">Accepted</span>
                <UpfrontAcceptPopup :propsindex="index"> </UpfrontAcceptPopup>
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
                 <span class="badge badge-danger" v-b-modal="'denied-modal'+ index">Denied</span>
                 <DeniedPopup :propsindex="index"> </DeniedPopup>
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
import UpfrontAcceptPopup from './AllPopups/RequestPopups/UpfrontAcceptPopup.vue'
import upFrontTableData from './UpfrontTableDate'
export default {
  components: { UpfrontAcceptPopup, DeniedPopup },
  data: () => ({
    items: upFrontTableData
  })

};
</script>
<style lang="scss"></style>
