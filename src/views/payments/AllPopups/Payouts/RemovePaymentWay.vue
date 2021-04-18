<template>
  <div>
    <b-modal
      :id="'remove-payment-modal' + propsindex"
      title="Remove Payment Way"
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Coupon Code"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <div class="row">
              <div class="col-md-9">
                <b-form-input
                  placeholder="Generate Code"
                  size="sm"
                ></b-form-input>
              </div>
              <div class="col-md-2">
                <b-button variant="dark" size="sm">Generate</b-button>
              </div>
            </div>
          </b-form-group>
            <b-button variant="danger" size="sm" block class="mt-2 ">Submit</b-button>
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
  data: () => ({}),
};
</script>
<style lang="scss"></style>
