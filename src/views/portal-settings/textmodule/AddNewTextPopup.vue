<template>
  <div>
    <b-modal :id="'add-new-text-modal' + propsindex" title="Add New Text" header-bg-variant="primary" header-text-variant="light">
      <div class="modal-body">
        <b-form>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Title"
            label-for="input-horizontal"
          >
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder="Title"
            ></b-form-input>
          </b-form-group>   
          <b-form-group
            id="fieldset-horizontal"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Text"
            label-for="input-horizontal"
          >
            <b-form-textarea
              id="input-horizontal"
              size="sm"
              rows="8"
              placeholder="Text"
            ></b-form-textarea>
          </b-form-group>
         <b-button variant="success" size="sm" class="btn-block">Add</b-button>

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
