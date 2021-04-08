<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header vd_bg-green">
        <h4 class="modal-title vd_white">DELETE</h4>
        <button
          type="button"
          class="close vd_white"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="post">
          <div class="form-group">
            <p>Please, confirm deleting 06.jpg</p>
          </div>
          <button type="submit" class="btn btn-primary">
            Delete
          </button>
        </form>
      </div>
      <div class="modal-footer vd_bg-white">
        <button type="button" class="btn btn-secondary " data-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeletePopup",
};
</script>
