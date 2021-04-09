<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-check"></i> Client Income</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row">
        <div class="col-md-3 controls">
          <select>
            <option>Select Country</option>
            <option>Month 2</option>
            <option>Month 3</option>
          </select>
        </div>
        <!-- col-md-3 end -->

        <div class="col-md-3 controls">
          <select>
            <option>Select City</option>
            <option>Month 2</option>
            <option>Month 3</option>
          </select>
        </div>
        <!-- col-md-3 end -->

        <div class="col-md-3 controls">
          <select>
            <option>Select Service</option>
            <option>Month 2</option>
            <option>Month 3</option>
          </select>
        </div>
        <!-- col-md-3 end -->

        <div class="col-md-3 controls">
          <div class="input-group bootstrap-timepicker search-group">
            <input type="text" placeholder="Search" />
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
          </div>
        </div>
        <!-- col-md-3 end -->
      </div>

      <div class="row">
        <div class="col-sm-12">
          <CDataTable
            :hover="true"
            :striped="true"
            :border="true"
            :fixed="false"
            :items="items"
            :fields="[
              'No',
              'CompanyName',
              'TotalJobs',
              'InEscrow',
              'ReadyGet',
              'Remain',
              'TotalEarn',
              'Options',
            ]"
            :items-per-page="10"
            pagination
          >
          <template #No={index}>
            <td>
              {{index + 1}}
            </td>
          </template>
            <template #InvoiceNet="{item}">
              <td>{{ item.InvoiceNet }} &euro;</td>
            </template>
            <template #TotalAmount="{item}">
              <td>{{ item.TotalAmount }} &euro;</td>
            </template>

            <template #Options>
              <td>
                <button class="btn btn-outline-dark btn-sm text-center py-0">
                  <i class="fas fa-eye" style="font-size:10px"></i> View
                </button>
                </td>
            </template>
          </CDataTable>
          <!-- widget -->
        </div>
      </div>
      <!-- row -->
    </div>
  </div>
</template>
<script>
import clientIncomeTableData from "./ClientIncomeTableData";
export default {
  data: () => ({
    items: clientIncomeTableData,
  }),
};
</script>
<style lang="scss">
.search-group {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
