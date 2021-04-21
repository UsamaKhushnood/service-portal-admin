<template>
  <div>
    <b-modal
      id="add-main-category-modal"
      title="Add Main Category"
      header-bg-variant="primary"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
          <b-form-group
            id="fieldset-horizontal"
            label-for="input-horizontal"
          >
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder="Put your name here"
            ></b-form-input>
          </b-form-group>
          <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3 mb-3">Selected file: {{ file1 ? file1.name : '' }}</div>
          <b-button variant="success" size="sm" class="btn-block">Add</b-button>
        </b-form>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button
            variant="dark"
            size="sm"
            class="float-right"
            @click="hide"
            squared
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["propsindex"],
  data: () => ({
      file1: null,
  }),
};
</script>
<style lang="scss"></style>
