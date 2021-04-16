<template>
  <div>
    <b-modal :id="'delete-account-modal' + propsindex" title="Delete" header-bg-variant="danger" header-text-variant="light">
      <div class="modal-body">
        <b-form>

         <b-button variant="success" size="sm" class="btn-block">Confirm</b-button>

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
    props: ['propsindex'],
  data: () => ({

  }),
};
</script>
<style lang="scss"></style>
