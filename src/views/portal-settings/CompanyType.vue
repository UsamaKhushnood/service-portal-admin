<template>
  <div id="company-type">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-star-of-life"></i> Company Type</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row mrgn15-0">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <button
            type="button"
            class="btn vd_btn vd_bg-blue btn-lg btn-block"
            v-b-modal="'add-company-type-modal'"
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add Company Type
          </button>
		  <AddCompanyType> </AddCompanyType>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <CDataTable
            sorter
            :hover="true"
            :striped="true"
            :border="true"
            :fixed="false"
            :items="items"
            :fields="['No', 'CompanyType', 'Options']"
            :items-per-page="10"
            pagination
          >
            <template #No="{index}">
              <td>
                {{ index + 1 }}
              </td>
            </template>
            <template #Options>
              <td class="menu-action">
                <div class="pdng5">
                  <a
                    data-toggle="modal"
                    data-target="#"
                    class="btn menu-icon vd_bd-yellow vd_yellow"
                    ><i
                      class="fa fa-pencil"
                      data-original-title="Edit"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                  <a
                    data-toggle="modal"
                    data-target="#"
                    class="btn menu-icon vd_bd-red vd_red"
                    ><i
                      class="fa fa-trash-o"
                      data-original-title="Remove"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                </div>
              </td>
            </template>
          </CDataTable>
        </div>
        <!-- col-md-12 end -->
      </div>
      <!-- row end -->
    </div>
  </div>
</template>
<script>
import AddCompanyType from './companyType/AddCompanyType.vue'
export default {
	components: { AddCompanyType },
  data: () => ({
    items: [
      { CompanyType: "Engineering" },
      { CompanyType: "Engineering" },
      { CompanyType: "Engineering" },
      { CompanyType: "Engineering" },
      { CompanyType: "Engineering" },
    ],
  }),
};
</script>
<style lang="scss"></style>
