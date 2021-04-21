<template>
  <div>
    <b-modal id="add-reason-modal" title="Add Category" header-bg-variant="primary" header-text-variant="light">
      <div class="modal-body">
        <b-form>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Select Category"
            label-for="input-horizontal"
          >
            <b-form-select
              id="input-horizontal"
              size="sm"
              value="category1"
              :options="['category1','category 2',]"
            ></b-form-select>
          </b-form-group>   
          <b-form-group
            id="fieldset-horizontal"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Add Reason"
            label-for="input-horizontal"
          >
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder=""
            ></b-form-input>
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
