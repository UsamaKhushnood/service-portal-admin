<template>
  <div>
    <b-modal id="confirm-delete-modal" title="Confrim Delete" header-bg-variant="danger" header-text-variant="light">
      <div class="modal-body">
          <b-button variant="danger" squared block>Confirm</b-button>
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
    props: ['propsindex'],
  data: () => ({

  }),
};
</script>
<style lang="scss"></style>
