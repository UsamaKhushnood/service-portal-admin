<template>
  <div>
    <b-modal :id="'new-payment-modal' + propsindex" title="New Payment For" header-bg-variant="success" header-text-variant="light">
      <div class="modal-body">
        <b-form>

       <p>E-mail Templates Client Invoice</p>

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
