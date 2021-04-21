<template>
  <div>
    <b-modal
      id="add-sub-category-modal"
      title="Add Main Category"
      header-bg-variant="primary"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
          <b-form-group id="fieldset-horizontal" label-for="input-horizontal">
            <b-form-select
              id="input-horizontal"
              size="sm"
              value="Beauty"
              :options="['Beauty','Beauty 2',]"
            ></b-form-select>
          </b-form-group>
          <label for="tags-remove-on-delete"
            >Enter new tags separated by space</label
          >
          <b-form-tags
            input-id="tags-remove-on-delete"
            :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
            v-model="value"
            separator=" "
            placeholder="Enter new tags separated by space"
            remove-on-delete
            no-add-on-enter
          ></b-form-tags>
          <b-form-text id="tags-remove-on-delete-help" class="mt-2">
            Press <kbd>Backspace</kbd> to remove the last tag entered
          </b-form-text>
          <b-button variant="success" size="sm" class="btn-block mt-3"
            >Add</b-button
          >
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
    value: ['apple', 'orange', 'grape'],
  }),
};
</script>
<style lang="scss"></style>
