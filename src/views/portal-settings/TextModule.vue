<template>
  <div id="text-module">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-file-alt"></i> Text Module</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row mrgn0">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="row mrgn0">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="mgbt-xs-10">
                  <button
                    type="button"
                    class="btn vd_btn vd_bg-blue btn-lg btn-block"
                    v-b-modal.add-new-text-modal0
                  >
                    <span class="append-icon"><i class="fa fa-plus"></i></span
                    >Add New Text
                  </button>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 pdng5">
          <CDataTable
            :items="items"
            :fields="['Title', 'Text', 'Options']"
            striped
            border
            items-per-page-select
            :items-per-page="5"
            hover
            sorter
            pagination
          >
            <template #Options='{index}'>
              <td class="menu-action">
                <a
                  class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                  v-b-modal="'add-new-text-modal' + index"
                  ><i
                    class="fa fa-pencil"
                    data-original-title="edit"
                    data-toggle="tooltip"
                    data-placement="top"
                  ></i
                ></a>
                <a
                  class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                  data-toggle="modal"
                  data-target="#removeText"
                  ><i
                    class="fa fa-trash-o"
                    data-original-title="remove"
                    data-toggle="tooltip"
                    data-placement="top"
                  ></i
                ></a>
              </td>
              <AddNewTextPopup :propsindex="index" > </AddNewTextPopup>
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
import AddNewTextPopup from './textmodule/AddNewTextPopup.vue'
export default {
  components: { AddNewTextPopup },
  data: () => ({
    items: [
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
      {
        Title: "Text Title for some block",
        Text:
          "Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis.",
      },
    ],
  }),
};
</script>
<style lang="scss"></style>
