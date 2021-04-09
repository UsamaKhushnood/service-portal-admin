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
            >User / Client Request</a
          >
        </li>
        <li>
          <a href="#clientuserrequest" data-toggle="tab">Client / User Request</a>
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
                  <i class="fas fa-times" style="font-size:10px"></i>
                </button>
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
                  <i class="fas fa-times" style="font-size:10px"></i>
                </button>
              </td>
            </template>
          </CDataTable>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
