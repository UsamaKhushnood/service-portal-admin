<template>
  <div>
    <b-modal
      :id="'suspend-user-modal' + propsindex"
      title="Suspend This User "
      header-bg-variant="danger "
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
            <b-form-select size="sm" value="Select Suspend Reason" :options="['Select Suspend Reason', 'Because of','Because of']">

            </b-form-select>
            <b-button size="sm" variant="danger" class="mt-2 " block >Ok</b-button>
        </b-form>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button variant="dark" squared size="sm" class="float-right" @click="hide">
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
