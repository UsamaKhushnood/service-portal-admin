<template>
  <div>
    <b-modal
      id="send-message-modal"
      title="Send Message to All Users"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <div class="modal-body">
        <b-form>
          <b-form-group id="input-group-1" label="Message" label-for="input-1">
            <b-form-textarea
              id="textarea"
              rows="10"
              size="sm"
              placeholder="What are you doing?"
            ></b-form-textarea>
          </b-form-group>
          <ul class="nav nav-pills d-flex align-items-center bg-dark" style="color: #fff !important;">
            <li class="one-icon">
              <a data-toggle="tab-post"
                ><span class="menu-icon"><i class="fa fa-user fa-fw"></i></span
              ></a>
            </li>
            <li class="one-icon">
              <a data-toggle="tab-post"
                ><span class="menu-icon"
                  ><i class="fa fa-camera fa-fw"></i></span
              ></a>
            </li>
            <li class="one-icon">
              <a data-toggle="tab-post"
                ><span class="menu-icon"
                  ><i class="fa fa-smile-o fa-fw"></i></span
              ></a>
            </li>
            <b-button class="ml-auto" squared size="sm" variant="success">Send</b-button>
          </ul>
        </b-form>
      </div>
      <template #modal-footer="{hide}">
        <div class="w-100">
          <b-button variant="dark" squared size="sm" class="float-right" @click="hide">
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
<style lang="scss"></style>
