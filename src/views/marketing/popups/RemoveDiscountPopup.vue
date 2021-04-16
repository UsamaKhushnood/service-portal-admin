<template>
  <div>
    <b-modal id="remove-discount-modal" title="Add Discount" header-bg-variant="danger" header-text-variant="light">
      <div class="modal-body">
           <b-form-select value="Select Remove Reason" :options="['Select Remove Reason','Because of','Because of']"></b-form-select>
           <b-button size="sm" class="mt-3" variant="danger">Ok</b-button>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button variant="dark" size="sm" class="float-right" @click="hide">
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data: () => ({
    dateValue: "",
  }),
};
</script>
<style lang="scss"></style>
