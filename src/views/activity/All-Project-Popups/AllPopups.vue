<template>
  <div>
    <!-- HOLD THIS JOB -->
    <div
      class="modal fade"
      :id="'holdThisJob' + dataIndex"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Add maincategory"
      aria-hidden="true"
    >
      <HoldPopup />
    </div>

    <!-- DENY THIS JOB -->
    <div
      class="modal fade"
      :id="'denyThisJob' + dataIndex"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Add maincategory"
      aria-hidden="true"
    >
      <DenyPopup />
    </div>

    <!-- REMOVE THIS JOB -->
    <div
      class="modal fade"
      :id="'removeThisJob' + dataIndex"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Add maincategory"
      aria-hidden="true"
    >
      <RemovePopup />
    </div>
    <!-- Block THIS JOB -->
    <div
      class="modal fade"
      :id="'blockThisJob' + dataIndex"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Add maincategory"
      aria-hidden="true"
    >
      <BlockPopup />
    </div>

    <!-- DELETE FILE -->
    <div
      class="modal fade"
      :id="'deleteFile' + dataIndex"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Add maincategory"
      aria-hidden="true"
      style="z-index:1050;"
    >
      <DeletePopup />
    </div>

    <!-- sidebar popup  -->
    <ViewProjectSidebar :dataIndex="dataIndex" />
  </div>
</template>
<script>
import ViewProjectSidebar from "./ViewProjectSidebar.vue";
import HoldPopup from "./HoldPopup.vue";
import DenyPopup from "./DenyPopup.vue";
import RemovePopup from "./RemovePopup.vue";
import BlockPopup from "./BlockPopup.vue";
import DeletePopup from "./DeletePopup.vue";
export default {
  components: {
    DeletePopup,
    BlockPopup,
    RemovePopup,
    DenyPopup,
    HoldPopup,
    ViewProjectSidebar,
  },
  name: "AllPopups",
  props: ["dataIndex"],
};
</script>
<style>
.viewProjectSidebar .b-sidebar {
  width: 90%;
}
</style>
