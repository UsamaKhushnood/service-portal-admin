<template>
  <div>
    <b-modal
      id="add-sale-service-modal"
      title="Add Keyword"
      header-bg-variant="primary"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
          <b-form-group id="fieldset-horizontal" label-for="input-horizontal">
            <b-form-select
              id="input-horizontal"
              size="sm"
              value="Beauty"
              :options="['Beauty','Beauty 2',]"
            ></b-form-select>
          </b-form-group>

          <b-form-group label-for="input-horizontal">
            <b-form-input
              size="sm"
              type="number"
             placeholder="%"
            ></b-form-input>
          </b-form-group>

          <b-form-group label-for="input-horizontal">
            <b-form-input
              size="sm"
              type="number"
             placeholder="%"
            ></b-form-input>
          </b-form-group>
          
          <b-button variant="success" size="sm" class="btn-block mt-3"
            >Add</b-button
          >
        </b-form>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button
            variant="dark"
            size="sm"
            class="float-right"
            @click="hide"
            squared
          >
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
    value: ['apple', 'orange', 'grape'],
  }),
};
</script>
<style lang="scss"></style>
