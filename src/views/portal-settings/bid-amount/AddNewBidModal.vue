<template>
  <div>
    <b-modal
      id="add-bid-amount-modal"
      title="Add New Bid"
      header-bg-variant="primary"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
          <b-form-group id="fieldset-horizontal" label-for="input-horizontal" label="Bid Amount" label-cols-md="4" content-cols-md="7"> 
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder="Enter Company Name"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="fieldset-horizontal" label-for="input-horizontal" label="Price" label-cols-md="4" content-cols-md="7"> 
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder="Enter Company Name"
            ></b-form-input>
          </b-form-group>
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

  }),
};
</script>
<style lang="scss"></style>
