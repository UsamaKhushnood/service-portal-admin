<template>
  <div>
    <b-modal :id="'remove-language-modal' + propsindex" title="Remove" header-bg-variant="danger" header-text-variant="light">
      <div class="modal-body">
          <p>Confirm to remove language</p>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button variant="danger" size="sm" class="float-right" @click="hide" squared>
            Confirm
          </b-button>
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
    dateValue: "",
    value: ''
  }),
};
</script>
<style lang="scss"></style>
