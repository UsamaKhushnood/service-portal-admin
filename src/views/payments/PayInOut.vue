<template>
  <div id="payinout">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-flag-o"></i> PayIn / PayOut Accounts</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="vd_panel-header text-center pdng10">
        <h3 class=" vd_green">PayIn Accounts</h3>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="mrgn15-0">
                  <button
                    type="button"
                    class="btn vd_btn vd_bg-blue btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#addPayIn"
                    v-b-modal="'add-new-account-modal'"
                  >
                    <AddNewAccountPopup></AddNewAccountPopup>
                    <span class="append-icon"><i class="fa fa-plus"></i></span
                    >Add New Account
                  </button>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 pdng5">
                <CDataTable
                  :hover="true"
                  :striped="true"
                  :border="true"
                  :fixed="false"
                  :items="items"
                  :fields="['No', 'Title', 'Details', 'Actions']"
                  :items-per-page="10"
                  pagination
                >
                  <template #No="{index}">
                    <td>
                      {{ index + 1 }}
                    </td>
                  </template>
                  <template #Actions="{index}">
                    <td class="menu-action">
                      <a
                        data-target="#viewAccept"
                        data-toggle="modal"
                        class="btn menu-icon vd_bd-blue vd_blue"
                        v-b-modal="'edit-account-modal' + index"
                      >
                        <i
                          data-original-title="view"
                          data-toggle="tooltip"
                          data-placement="top"
                          class="fa fa-pencil"
                        ></i>
                      </a>

                      <a
                        data-target="#denyRequest"
                        data-toggle="modal"
                        class="btn menu-icon vd_bd-red vd_red"
                        v-b-modal="'delete-account-modal' + index"
                      >
                        <i
                          data-original-title="denied"
                          data-toggle="tooltip"
                          data-placement="top"
                          class="fa fa-trash"
                        ></i>
                      </a>
                    </td>
                    <EditAccountPopup :propsindex="index"> </EditAccountPopup>
                    <DeleteAccountPopup :propsindex="index">
                    </DeleteAccountPopup>
                  </template>
                </CDataTable>
              </div>
              <!-- col-md-12 end -->
            </div>
            <!-- row end -->
          </div>
          <!-- pdng5 -->
        </div>
      </div>
      <!-- row -->

      <div class="vd_panel-header text-center pdng10">
        <h3 class=" vd_green">PayOut Accounts</h3>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="mrgn15-0">
                  <button
                    type="button"
                    class="btn vd_btn vd_bg-blue btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#addPayOut"
                    v-b-modal="'add-new-account-modal'"
                  >
                    <span class="append-icon"><i class="fa fa-plus"></i></span
                    >Add New Account
                  </button>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 pdng5">
                <CDataTable
                  :hover="true"
                  :striped="true"
                  :border="true"
                  :fixed="false"
                  :items="items"
                  :fields="['No', 'Title', 'Details', 'Actions']"
                  :items-per-page="10"
                  pagination
                >
                  <template #No="{index}">
                    <td>
                      {{ index + 1 }}
                    </td>
                  </template>
                  <template #Actions="{index}">
                    <td class="menu-action">
                      <a
                        data-target="#viewAccept"
                        data-toggle="modal"
                        class="btn menu-icon vd_bd-blue vd_blue"
                        v-b-modal="'edit-account-modal' + index"
                      >
                        <i
                          data-original-title="view"
                          data-toggle="tooltip"
                          data-placement="top"
                          class="fa fa-pencil"
                        ></i>
                      </a>

                      <a
                        data-target="#denyRequest"
                        data-toggle="modal"
                        class="btn menu-icon vd_bd-red vd_red"
                        v-b-modal="'delete-account-modal' + index"
                      >
                        <i
                          data-original-title="denied"
                          data-toggle="tooltip"
                          data-placement="top"
                          class="fa fa-trash"
                        ></i>
                      </a>
                    </td>
                  </template>
                </CDataTable>
              </div>
              <!-- col-md-12 end -->
            </div>
            <!-- row end -->
          </div>
          <!-- pdng5 -->
        </div>
      </div>
      <!-- row -->
    </div>
  </div>
</template>
<script>
import DeleteAccountPopup from "./AllPopups/PayInOut/DeleteAccountPopup.vue";
import EditAccountPopup from "./AllPopups/PayInOut/EditAccountPopup.vue";
import AddNewAccountPopup from "./AllPopups/PayInOut/AddNewAccountPopup.vue";
import tableData from "./tableData";
export default {
  components: { AddNewAccountPopup, EditAccountPopup, DeleteAccountPopup },
  data: () => ({
    items: tableData,
  }),
};
</script>
<style lang="scss"></style>
