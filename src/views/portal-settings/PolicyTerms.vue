<template>
  <div id="policyterms">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-gavel"></i> Policy &amp; Terms</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="mgbt-xs-10">
          <b-button block squared variant="dark" size="lg" v-b-modal.add-new-tab-modal>
            Add New Tab
          </b-button>
          <AddNewTabModal />
        </div>

        <div class="form-group">
          <select class="custom-select">
            <option selected="">Sort by Name</option>
            <option value="1">A to Z</option>
            <option value="2">Z to A</option>
          </select>
        </div>
        <div class="pirvacy-tabs">
          <div class="single-tab" :class="{active: tab1Active}" @click="tab1Active = true">
            <div class="icons">
              <i class="fa fa-pencil-alt"></i>
              <i class="fa fa-times"></i>
            </div>
            <div class="menu-icon"><i class="fa fa-file-text-o"></i></div>
            <h4>Privacy Policy</h4>
          </div>
          <div class="single-tab" :class="{active: !tab1Active}" @click="tab1Active = false">
            <div class="icons">
              <i class="fa fa-pencil-alt"></i>
              <i class="fa fa-times"></i>
            </div>
            <div class="menu-icon"><i class="fa fa-file-text-o"></i></div>
            <h4>Disclaimer</h4>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="p-tabs-content" >
          <div class="tab1" v-show="tab1Active">
            <quill-editor> </quill-editor>
          </div>
          <div class="tab2" v-show="!tab1Active">
            <quill-editor> </quill-editor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddNewTabModal from './policy-terms/AddNewTabModal.vue'
import { quillEditor } from "vue-quill-editor";
export default {
  components: { quillEditor, AddNewTabModal },
  data: () => ({
    tab1Active: true,
  }),
};
</script>
<style lang="scss">
.pirvacy-tabs {
  .single-tab {
    margin-top: 10px;
    padding: 10px;
    background: #fff;
    position: relative;
    text-align: center;
    cursor: pointer;
    border: 1px solid #fff;
    &.active {
      background-color: var(--primary);
      color: #fff;
    }
    &:hover {
      border: 1px solid var(--primary);
    }
    .icons {
      position: absolute;
      right: 10px;
      top: 10px;
      i {
        padding: 8px;
        cursor: pointer;
        &:hover {
          background: #0000001a;
        }
      }
    }
    .menu-icon {
      margin-top: 20px;
      i {
        background: #ebedef;
        color: #000 !important;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 17px;
        font-size: 17px;
        margin-bottom: 10px;
      }
    }
  }
}

.p-tabs-content {
  background: #fff;
}

.ql-editor[contenteditable="true"] {
  height: 200px;
}
</style>
