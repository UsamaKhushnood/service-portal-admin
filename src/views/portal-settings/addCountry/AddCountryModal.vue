<template>
  <div>
    <b-modal
      id="add-country-modal"
      title="Add Country"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <div class="modal-body">
        <div class="input-group mb-3">
          <b-form-input
            type="text"
            class="form-control"
            placeholder="Put the username here"
            aria-label="Put the username here"
            aria-describedby="button-addon2"
          />
          <b-button
            class="btn btn-dark"
            type="button"
            id="button-addon2"
            squared
            size="sm"
          >
            <i class="fa fa-plus"></i>
          </b-button>
        </div>
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
  data: () => ({
  }),
};
</script>
<style lang="scss"></style>
