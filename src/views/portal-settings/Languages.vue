<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fas fa-language"></i> Add / Manage Languages</h1>
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
            v-b-modal="'add-language-modal'"
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add Language
          </button>
          <AddLanguagePopup> </AddLanguagePopup>
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
            :fields="[
              'Icon',
              'Language',
              'Progress',
              'Done',
              'Total',
              'Action',
            ]"
            :items-per-page="10"
            pagination
          >
            <template #Progress="{item}">
              <td>
                <div class="menu-info mrgn0">
                  <div class="progress progress-sm mrgn0">
                    <div
                      :style="{ width: item.Progress + '%' }"
                      class="progress-bar progress-bar-info"
                    >
                      {{ item.Progress }}%
                    </div>
                  </div>
                </div>
              </td>
            </template>
            <template #Icon>
              <td>
                <img
                  src="@/assets/flags/AE.png"
                  alt=""
                  width="25"
                  height="auto"
                />
              </td>
            </template>
            <template #Action="{index}">
              <td class="menu-action">
                <div class="pdng5">
                  <a
                    data-toggle="modal"
                    data-target="#editLang"
                    class="btn menu-icon vd_bd-yellow vd_yellow"
                    v-b-toggle="'edit-language-sidebar' + index"
                    ><i
                      class="fa fa-pencil"
                      data-original-title="Edit"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                  <a
                    v-b-modal="'remove-language-modal' + index"
                    class="btn menu-icon vd_bd-red vd_red"
                    ><i
                      class="fa fa-trash-o"
                      data-original-title="Remove"
                      data-toggle="tooltip"
                      data-placement="top"
                    ></i
                  ></a>
                  <RemoveLanguageModal :propsindex="index">
                  </RemoveLanguageModal>
                  <EditLanguageSidebar :dataIndex="index">
                  </EditLanguageSidebar>
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
import RemoveLanguageModal from "./languages/RemoveLanguageModal.vue";
import EditLanguageSidebar from "./languages/EditLanguageSidebar.vue";
import AddLanguagePopup from "./languages/AddLanguagePopup.vue";
import languagesTableData from "./tablesData/languagesTableData";
export default {
  components: { AddLanguagePopup, EditLanguageSidebar, RemoveLanguageModal },
  data: () => ({
    items: languagesTableData,
  }),
};
</script>
<style lang="scss"></style>
