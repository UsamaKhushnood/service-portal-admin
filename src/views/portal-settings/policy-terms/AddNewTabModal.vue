<template>
  <div>
    <b-modal id="add-new-tab-modal" title="Add New Tab" header-bg-variant="primary" header-text-variant="light">
      <div class="modal-body">
        <b-form>
          <b-form-group
            id="fieldset-horizontal"
            label-for="input-horizontal"
          >
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder="Add Tab Name Here"
            ></b-form-input>
          </b-form-group>   

         <b-button variant="dark" size="sm" class="btn-block">Add</b-button>

        </b-form>
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
