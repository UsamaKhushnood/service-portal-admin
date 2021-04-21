<template>
  <div id="reasons">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-sort-amount-down-alt"></i> Reasons</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row mrgn15-0">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <button
            type="button"
            class="btn vd_btn vd_bg-blue btn-lg btn-block"
            v-b-modal.add-category-modal
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add Category
          </button>
          <AddCategoryPopup />
        </div>
        <div class="col-md-4">
          <button
            type="button"
            class="btn vd_btn vd_bg-blue btn-lg btn-block"
            v-b-modal.add-reason-modal
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add Reason
          </button>
          <AddReasonPopup />
        </div>
        <div class="col-md-2"></div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <table class="discountTable table">
            <colgroup>
              <col width="10%" />
              <col width="30%" />
              <col width="30%" />
              <col width="30%" />
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>Category</th>
                <th>Reason</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Engineering</td>
                <td>Wrong Name</td>
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
              </tr>
              <tr>
                <td>2</td>
                <td>Engineering</td>
                <td>Wrong Name</td>
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
              </tr>
            </tbody>
          </table>
        </div>
        <!-- col-md-12 end -->
      </div>
      <!-- row end -->
    </div>
  </div>
</template>
<script>
import AddReasonPopup from './reasons/AddReasonPopup.vue'
import AddCategoryPopup from './reasons/AddCategoryPopup.vue'
export default {
  components: { AddCategoryPopup, AddReasonPopup }
};
</script>
<style lang="scss"></style>
