<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-check-square"></i> Portal Income</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row">
        <div class="col-md-6 col-sm-6 text-center">
          <div class="vd_status-widget widget dashboardPanel">
            <div class="panel-body vd_blue pd-5">
              <div class="clearfix">
                <div class="menu-text clearfix">Income This Month</div>
                <br />
                <span class="company-value">25.000 €</span>
              </div>
            </div>
          </div>
          <div id="barMonth" class="widget vd_bg-white"></div>
        </div>

        <div class="col-md-6 col-sm-6 text-center">
          <div class="vd_status-widget widget dashboardPanel">
            <div class="panel-body vd_blue pd-5">
              <div class="clearfix">
                <div class="menu-text clearfix">Income This Year</div>
                <br />
                <span class="company-value">25.000 €</span>
              </div>
            </div>
          </div>
          <div id="barYear" class="widget vd_bg-white"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 controls row">
          <div class="col-md-2 controls">
            <select>
              <option>Select</option>
              <option>Month 2</option>
              <option>Month 3</option>
            </select>
          </div>
          <!-- col-md-2 end -->

          <div class="col-md-5 controls text-center">
            <select class="width-45">
              <option>Month from</option>
              <option>Month 2</option>
              <option>Month 3</option>
            </select>
            <select class="width-45">
              <option>Month to</option>
              <option>Month 2</option>
              <option>Month 3</option>
            </select>
          </div>
          <!-- col-md-5 end -->

          <div class="col-md-5 controls text-center">
            <select class="width-45">
              <option>Year from</option>
              <option>Year 2</option>
              <option>Year 3</option>
            </select>
            <select class="width-45">
              <option>Year to</option>
              <option>Year 2</option>
              <option>Year 3</option>
            </select>
          </div>
          <!-- col-md-5 end -->
        </div>
        <!-- col-md-8 end -->

        <div class="col-md-2 controls">
          <select>
            <option>Sort By</option>
            <option>Choice 2</option>
            <option>Choice 3</option>
          </select>
        </div>
        <!-- col-md-2 end -->

        <div class="col-md-2 controls">
          <div class="input-group bootstrap-timepicker search-group">
            <input type="text" placeholder="Search" />
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
          </div>
        </div>
        <!-- col-md-2 end -->
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="tabs widget">
            <ul class="nav nav-tabs widget">
              <li class="active">
                <a data-toggle="tab" href="#monthlyIncome">
                  Monthly Income
                  <span class="menu-active"><i class="fa fa-caret-up"></i></span
                ></a>
              </li>
              <li>
                <a data-toggle="tab" href="#yearlyIncome">
                  Yearly Income
                  <span class="menu-active"><i class="fa fa-caret-up"></i></span
                ></a>
              </li>
            </ul>

            <div class="tab-content">
              <div id="monthlyIncome" class="tab-pane fade in active show">
                <CDataTable
                  :hover="true"
                  :striped="true"
                  :border="true"
                  :fixed="false"
                  :items="items"
                  :fields="[
                    'Month',
                    'InvoiceNet',
                    'Tax 19%',
                    'TotalAmount',
                    'Options',
                  ]"
                  :items-per-page="10"
                  pagination
                >
                  <template #InvoiceNet="{item}">
                    <td>
                      {{item.InvoiceNet}} &euro;
                    </td>
                  </template>
                  <template #TotalAmount="{item}">
                    <td>
                      {{item.TotalAmount}} &euro;
                    </td>
                  </template>

                  <template #Options>
                    <td>
                      <button
                        class="btn btn-outline-success btn-sm text-center py-0"
                      >
                        <i class="fas fa-eye" style="font-size:10px"></i>
                      </button>
                      <button
                        class="btn btn-outline-danger ml-1 btn-sm text-center py-0"
                      >
                        <i class="fas fa-print" style="font-size:10px"></i>
                      </button>
                      <span class="badge badge-primary ml-1">XML</span>
                      <span class="badge badge-primary ml-1">TXT</span>
                      <span class="badge badge-primary ml-1">XLS</span>
                      <span class="badge badge-primary ml-1">CSV</span>
                    </td>
                  </template>
                </CDataTable>
              </div>
              <!-- home-tab -->

              <div id="yearlyIncome" class="tab-pane fade">
                <CDataTable
                  :hover="true"
                  :striped="true"
                  :border="true"
                  :fixed="false"
                  :items="items"
                  :fields="[
                    'Month',
                    'InvoiceNet',
                    'Tax 19%',
                    'TotalAmount',
                    'Options',
                  ]"
                  :items-per-page="10"
                  pagination
                >
                  <template #InvoiceNet="{item}">
                    <td>
                      {{item.InvoiceNet}} &euro;
                    </td>
                  </template>
                  <template #TotalAmount="{item}">
                    <td>
                      {{item.TotalAmount}} &euro;
                    </td>
                  </template>

                  <template #Options>
                    <td>
                      <button
                        class="btn btn-outline-success btn-sm text-center py-0"
                      >
                        <i class="fas fa-eye" style="font-size:10px"></i>
                      </button>
                      <button
                        class="btn btn-outline-danger ml-1 btn-sm text-center py-0"
                      >
                        <i class="fas fa-print" style="font-size:10px"></i>
                      </button>
                      <span class="badge badge-primary ml-1">XML</span>
                      <span class="badge badge-primary ml-1">TXT</span>
                      <span class="badge badge-primary ml-1">XLS</span>
                      <span class="badge badge-primary ml-1">CSV</span>
                    </td>
                  </template>
                </CDataTable>
              </div>
              <!-- home-tab -->
            </div>
            <!-- tab-content -->
          </div>
          <!-- tabs-widget -->
        </div>
      </div>
      <!-- row -->
    </div>
  </div>
</template>
<script>
import usersData from "./reviewTableData";
export default {
  data: () => ({
    items: usersData,
  }),
};
</script>
<style lang="scss">
.search-group {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
