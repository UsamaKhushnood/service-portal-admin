<template>
  <div>
    <b-modal
      :id="'reason-modal' + propsindex"
      title="The Reason is"
      header-bg-variant="primary"
      header-text-variant="light"
    >
    <div class="modal-body">
        <form method="post">
		  <div class="form-group">
		    <h5><i class="fa fa-exclamation-circle vd_red"></i> Incompleted task #3.2</h5>
		  </div>
		</form>
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
