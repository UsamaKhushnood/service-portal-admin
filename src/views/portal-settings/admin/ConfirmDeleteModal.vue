<template>
  <div>
    <b-modal id="group-setting-modal" title="Group Settings" header-bg-variant="success" header-text-variant="light">
      <div class="modal-body">
          <b-button variant="success" squared block>Save</b-button>
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
