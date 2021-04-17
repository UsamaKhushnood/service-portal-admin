<template>
  <div>
    <b-modal
      :id="'denied-modal' + propsindex"
      title="The Reason is"
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <div class="modal-body">
          <h5><i class="fa fa-exclamation-circle vd_red"></i> Incompleted task #3.2</h5>
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
    dateValue: "",
    value: "",
  }),
};
</script>
<style lang="scss"></style>
