<template>
  <div>
    <b-modal id="add-company-type-modal" title="Add Company Type" header-bg-variant="success" header-text-variant="light">
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
              placeholder="Add Company Type"
            ></b-form-input>
          </b-form-group>   

         <b-button variant="success" size="sm" block>
             Add
         </b-button>

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
    dateValue: "",
    value: ''
  }),
};
</script>
<style lang="scss"></style>
