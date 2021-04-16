<template>
  <div>
    <b-modal id="add-discount-modal" title="Add Discount" header-bg-variant="danger" header-text-variant="light">
      <div class="modal-body">
        <b-form>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Discount Title"
            label-for="input-horizontal"
          >
            <b-form-input
              id="input-horizontal"
              size="sm"
              placeholder="Discount Title"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal2"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Discount Type"
            label-for="input-horizontal2"
          >
            <div class="row">
              <div class="col-md-8">
                <b-form-input
                  id="input-horizontal2 "
                  size="sm"
                  placeholder="Amount"
                ></b-form-input>
              </div>
              <div class="col-md-4">
                <b-form-select size="sm" value="euro">
                  <b-form-select-option value="euro">
                    &euro;
                  </b-form-select-option>
                  <b-form-select-option value="percentage">
                    %
                  </b-form-select-option>
                </b-form-select>
              </div>
            </div>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal3"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Select Service"
            label-for="input-horizontal3"
          >
            <b-form-select
              size="sm"
              value="Category 1"
              :options="[
                'Category 1',
                'Category 2',
                'Category 3',
                'Category 4',
              ]"
            >
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal4"
            label-cols-lg="4"
            content-cols-lg="8"
            label="Start Date"
            label-for="input-horizontal4"
          >
            <b-form-datepicker
              id="datepicker-full-width"
              v-model="dateValue"
              menu-class="w-100"
              calendar-width="100%"
              class="mb-2"
              size="sm"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal4"
            label-cols-lg="4"
            content-cols-lg="8"
            label="End Date"
            label-for="input-horizontal4"
          >
            <b-form-datepicker
              id="datepicker-full-width"
              v-model="value"
              menu-class="w-100"
              calendar-width="100%"
              class="mb-2"
              size="sm"
            ></b-form-datepicker>
          </b-form-group>
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
  data: () => ({
    dateValue: "",
    value: ''
  }),
};
</script>
<style lang="scss"></style>
