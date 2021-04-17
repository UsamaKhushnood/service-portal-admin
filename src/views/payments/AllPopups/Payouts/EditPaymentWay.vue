<template>
  <div>
    <b-modal
      :id="'edit-payment-modal' + propsindex"
      title="Edit Payment Way"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form >
          <b-form-group
            id="input-group-1"
            label="Comments"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-textarea
              id="textarea"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-form>
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
  props: ["propsindex"],
  data: () => ({

  }),
};
</script>
<style lang="scss"></style>
