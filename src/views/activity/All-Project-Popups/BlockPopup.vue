<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header vd_bg-green">
        <h4 class="modal-title vd_white">Block THIS JOB</h4>
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
            <select class="custom-select">
              <option selected>Select the Block reason</option>
              <option value="1">Because of</option>
              <option value="2">Because of</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Put the reason here" />
          </div>
          <button type="submit" class="btn btn-primary">OK</button>
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
  name: "BlockPopup",
};
</script>
