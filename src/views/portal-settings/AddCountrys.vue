<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-tags"></i> Add Countrys</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row">
        <div class="col-md-4">
          <div class="mgbt-xs-10">
            <button
              type="button"
              class="btn vd_btn vd_bg-blue btn-lg btn-block"
              v-b-modal="'add-country-modal'"
            >
              <span class="append-icon">
                <i class="fa fa-plus-circle fa-fw"></i> </span
              >Add County
            </button>
            <AddCountryModal />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mgbt-xs-10">
            <button
              type="button"
              class="btn vd_btn vd_bg-blue btn-lg btn-block"
              v-b-modal="'add-district-modal'"
            >
              <span class="append-icon">
                <i class="fa fa-plus-circle fa-fw"></i> </span
              >Add Descrit
            </button>
            <AddDistrictModal />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mgbt-xs-10">
            <button
              type="button"
              class="btn vd_btn vd_bg-blue btn-lg btn-block"
              v-b-modal="'add-city-modal'"
            >
              <span class="append-icon">
                <i class="fa fa-plus-circle fa-fw"></i> </span
              >Add Citys
            </button>
            <AddCityModal />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <CDataTable
            :items="items"
            :fields="['No', 'Country', 'District', 'City', 'Options']"
            :items-per-page="5"
            :striped="true"
            :border="true"
            hover
            sorter
            pagination
          >
            <template #No="{index}">
              <td>
                {{ index + 1 }}
              </td>
            </template>
            <template #Options>
              <td class="menu-action">
                <a class="btn menu-icon vd_bd-blue vd_blue">
                  <i
                    class="fa fa-plus"
                    data-toggle="tooltip"
                    data-original-title="add new"
                    data-placement="top"
                  ></i>
                </a>
                <a
                  data-original-title="edit"
                  data-toggle="tooltip"
                  data-placement="top"
                  class="btn menu-icon vd_bd-yellow vd_yellow"
                >
                  <i class="fa fa-edit"></i>
                </a>
                <a
                  data-original-title="view"
                  data-toggle="tooltip"
                  data-placement="top"
                  class="btn menu-icon vd_bd-green vd_green"
                >
                  <i class="fa fa-eye"></i>
                </a>
                <a
                  data-original-title="remove"
                  data-toggle="tooltip"
                  data-placement="top"
                  class="btn menu-icon vd_bd-red vd_red"
                >
                  <i class="fa fa-times"></i>
                </a>
              </td>
            </template>
          </CDataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddCityModal from "./addCountry/AddCityModal.vue";
import AddDistrictModal from "./addCountry/AddDistrictModal.vue";
import AddCountryModal from "./addCountry/AddCountryModal.vue";
export default {
  components: { AddCountryModal, AddDistrictModal, AddCityModal },
  data: () => ({
    items: [
      { Country: "Beauty", District: 5, City: 10 },
      { Country: "Beauty", District: 5, City: 10 },
      { Country: "Beauty", District: 5, City: 10 },
      { Country: "Beauty", District: 5, City: 10 },
      { Country: "Beauty", District: 5, City: 10 },
      { Country: "Beauty", District: 5, City: 10 },
      { Country: "Beauty", District: 5, City: 10 },
      { Country: "Beauty", District: 5, City: 10 },
    ],
  }),
};
</script>
<style lang="scss"></style>
