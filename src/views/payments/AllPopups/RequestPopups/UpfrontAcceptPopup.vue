<template>
  <div>
    <b-modal
      :id="'upfront-status-modal' + propsindex"
      title="Change Status"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
          <b-form-group id="fieldset-horizontal" label-for="input-horizontal">
            <b-form-select
              value="Select Status"
              :options="['Select Status', 'Accepted', 'Denied']"
              size="sm"
            >
            </b-form-select>
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder="Add Reason"
              class="mt-2"
            ></b-form-input>
          </b-form-group>
          <b-button variant="success" size="sm" class="btn-block mt-5"
            >Save</b-button
          >
        </b-form>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button variant="dark" size="sm" class="float-right" @click="hide" squared>
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
    dateValue: "",
    value: "",
  }),
};
</script>
<style lang="scss"></style>
