<template>
    <div id="salesHistory">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> Sales History</h1>
          </div>
        </div>

        <div class="dashboardPanels clearfix">
          <div class="col-md-3 col-sm-12 text-center company">
            <div class="vd_status-widget widget dashboardPanel">
              <a class="panel-body vd_blue pd-5" href="#">
                <div class="clearfix">
                  <div class="menu-text clearfix">
                    Total
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
                    Used
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
                    Unused
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
                    Gifts
                  </div>
                  <span class="company-value">2</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="vd_content-section clearfix">
        <CDataTable
          :hover="true"
          :striped="true"
          :border="true"
          :fixed="false"
          :items="items"
          :fields="[
            'No',
            'CompanyName',
            'Category',
            'ServicesAmount',
            'Sales',
          ]"
          :items-per-page="10"
          pagination
        >
          <!-- <template #Status="{item}">
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
          </template> -->
        </CDataTable>
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
import tableData from './tableData'
export default {
  data: () => ({
      items: tableData
  })
}
</script>
<style lang="scss">
    
</style>