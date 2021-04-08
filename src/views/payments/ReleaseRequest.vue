<template>
  <div id="release-request">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> Release Request</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboardPanels clearfix">
      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">New <br /> Release Request</div> 
              <span class="company-value">10</span>
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">Release<br />Done</div>
              <span class="company-value">20</span>
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 text-center company">
        <div class="vd_status-widget widget dashboardPanel">
          <a class="panel-body vd_blue pd-5" href="#">
            <div class="clearfix">
              <div class="menu-text clearfix">Denied <br />Release</div>
              <span class="company-value">4</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <CTabs class="tabs ctabs" active>
      <CTab title="Client / User Request" active>
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
              <CBadge :color="getBadge(item.Status)">{{ item.Status }} </CBadge>
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
      </CTab>
      <CTab title="Client / Portal Request">
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
              <CBadge :color="getBadge(item.Status)">{{ item.Status }} </CBadge>
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
      </CTab>
    </CTabs>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>