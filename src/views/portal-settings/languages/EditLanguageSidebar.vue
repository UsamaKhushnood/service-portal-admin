<template>
  <div>
    <b-sidebar
      :id="'edit-language-sidebar' + dataIndex"
      class="viewProjectSidebar rightSidebar"
      :class="'viewProjectSidebar' + dataIndex"
      backdrop-variant="dark"
      backdrop
      shadow
      no-header
      bg-variant="white"
      right
    >
      <template #default="{ hide }">
        <div
          class="d-flex text-light align-items-center justify-content-center px-3 py-2 modalHeader bg-dark"
        >
          <b-button size="sm" @click="hide"
            ><i class="fa fa-arrow-circle-right"></i
          ></b-button>
          <h4 class="mx-auto">Edit arabic language</h4>
        </div>

        <!-- Sidebar Body  -->
        <div class="modal-body h100">
          <div class="row">
            <div class="col-md-12">
              <CDataTable
                :hover="true"
                :striped="true"
                :border="true"
                :fixed="false"
                :items="items"
                :fields="[
                  'Type',
                  'File',
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
                <template #Action="{index}">
                  <td class="menu-action">
                    <div class="pdng5">
                      <a
                        class="btn menu-icon vd_bd-yellow vd_yellow"
                        v-b-modal="'edit-language-translation-modal' + index"
                        ><i
                          class="fa fa-pencil"
                          data-original-title="Edit"
                          data-toggle="tooltip"
                          data-placement="top"
                        ></i
                      ></a>
                    </div>
                  </td>
                  <EditLanguageTranslateModal :propsindex="index"> </EditLanguageTranslateModal>
                </template>
              </CDataTable>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
import EditLanguageTranslateModal from './EditLanguageTranslateModal.vue'
import languageSidebarData from "./languageSidebarData";
export default {
    components: { EditLanguageTranslateModal },
  props: ["dataIndex"],
  data: () => ({
    items: languageSidebarData,
  }),
};
</script>
<style lang="scss">
.modalHeader {
  h4 {
    text-transform: uppercase;
  }
}

.headerSecondary h6 {
  font-size: 13px;
  padding: 5px 0;
}
</style>
