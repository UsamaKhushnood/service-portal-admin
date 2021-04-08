<template>
  <div id="AllContracts">
    <div class="vd_content-wrapper">
      <div class="vd_content ">
        <div class="vd_title-section ">
          <div class="vd_panel-header">
            <h1><i class="fas fa-briefcase"></i> All Contracts</h1>
          </div>
        </div>
        <!-- search-section start -->
        <div class="row pdng10-0 searchBar">
          <form class="align-items-center">
            <div class="col-md-2">
              <div>
                <select>
                  <option value disabled selected>All Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                  <option value="4">Category 4</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <b-button-group size="sm">
                <b-button variant="secondary">All</b-button>
                <b-button variant="primary">In Progress</b-button>
                <b-button variant="success">Completed</b-button>
                <b-button variant="danger">Behind Schedule</b-button>
                <b-button variant="warning">On Hold</b-button>
              </b-button-group>
            </div>
            <div class="col-md-3">
              <div>
                <div class="input-group">
                  <input type="text" placeholder="Search" />
                  <span
                    class="input-group-addon"
                    id="datepicker-icon-trigger"
                    data-datepicker="#datepicker-icon"
                    ><i class="fa fa-search"></i
                  ></span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- search-section end -->
        <!-- Block card  -->
        <div
          v-for="(data, dataIndex) in allProjectsData"
          :key="dataIndex"
          class="block_card_wrapper"
        >
          <div
            class="row block_card"
            v-b-toggle="'sidebar-backdrop' + dataIndex"
          >
            <div class="img_wrapper">
              <img :src="require('@/assets/avatar/briant2.png')" alt="image" />
            </div>
            <div class="col-md-4 job_info border-right">
              <h4 class="card_sec_title">Design Concept</h4>
              <p class="card_mini_info">
                <strong>Work Start: </strong> <span class=""> 05-07-2021</span>
              </p>
              <p class="card_mini_info">
                <span class="badge badge-primary ">In Progress</span>
              </p>
            </div>

            <div class="col-md-2 job_info border-right text-center">
                <div class="circleBar" data-percent="65">
                  <div style="width: 100px; height: 100px;">
                    <div
                      class="ab"
                      style="position: relative; text-align: center; width: 100px; height: 100px; border-radius: 100%; background-color: rgb(239, 239, 239); background-image: linear-gradient(324deg, transparent 50%, rgb(31, 174, 102) 50%), linear-gradient(90deg, rgb(31, 174, 102) 50%, transparent 50%);"
                    >
                      <div
                        class="cir"
                        style="position: relative; top: 2px; left: 2px; text-align: center; width: 96px; height: 96px; border-radius: 100%; background-color: rgb(255, 255, 255);"
                      >
                        <span
                          class="perc"
                          style="display: block; width: 100px; height: 100px; line-height: 100px; vertical-align: middle; font-size: 15px; font-weight: normal; color: rgb(92, 147, 200);"
                          >65%</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="col-md-2 job_info border-right">
              <h4 class="card_sec_title">All Tasks</h4>
              <p class="card_mini_info">
                <strong>Pending:</strong>
                <span class="badge badge-success ml-auto">0</span>
              </p>
              <p class="card_mini_info">
                <strong>Behind:</strong>
                <span class="badge badge-warning ml-auto">1</span>
              </p>
            </div>

            <div class="col-md-2 job_info contractLogo text-center">
                <img src="@/assets/logos/boinc.png">
            </div>
          </div>
          <div class="dropdown d-flex align-self-start ml-auto moreOptions">
            <button
              class="btn btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-cog"></i>
            </button>
            <div
              class="dropdown-menu dropdown-menu-lg-right dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
              style="z-index: 9;"
            >
              <div class="child-menu">
                <div class="content-list content-menu">
                  <ul class="list-wrapper pd-lr-10">
                    <li>
                      <a
                        data-toggle="modal"
                        :data-target="'#holdThisJob' + dataIndex"
                      >
                        <span class="iconOption">
                          <i class="fa fa-pause"></i>
                        </span>
                        Hold</a
                      >
                    </li>

                    <li>
                      <a
                        data-toggle="modal"
                        :data-target="'#denyThisJob' + dataIndex"
                      >
                        <span class="iconOption">
                          <i class="fa fa-times"></i>
                        </span>
                        Deny</a
                      >
                    </li>
                    <li>
                      <a
                        data-toggle="modal"
                        :data-target="'#blockThisJob' + dataIndex"
                      >
                        <span class="iconOption">
                          <i class="fa fa-lock"></i>
                        </span>
                        Block</a
                      >
                    </li>
                    <li>
                      <a
                        data-toggle="modal"
                        :data-target="'#removeThisJob' + dataIndex"
                      >
                        <span class="iconOption">
                          <i class="fa fa-trash-o"></i>
                        </span>
                        Remove</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Popups  -->
          <AllPopups :dataIndex="dataIndex" />
          <!-- popups  -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllPopups from "./All-Project-Popups/AllPopups.vue";
export default {
  name: "AllContracts",
  components: { AllPopups, AllPopups },
  data: () => ({
    allProjectsData: ["1", "2", "3", "4"],
  }),
};
</script>
<style lang="scss">
p {
  margin: 0;
}

.block_card_wrapper {
  position: relative;
  .moreOptions {
    position: absolute;
    top: 15px;
    right: 0;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .content-menu .list-wrapper li {
    cursor: pointer;
  }
}
.block_card {
  padding: 15px;
  background: #fff;
  margin-top: 10px;
  align-items: center;
  cursor: pointer;
  .img_wrapper {
    max-width: 100px;
    max-height: 100px;
    min-width: 100px;
    min-height: 100px;
  }

  .card_sec_title {
    font-size: 18px;
    font-weight: 700;
  }
  .user_section {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ebedef;
    max-height: 145px;
    p.user_id {
      margin-bottom: 0;
      margin-top: 10px;
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 80%;
      padding: 0 15px;
      text-align: center;
      background: #ebedef;
    }
  }
  p.card_mini_info {
    display: flex;
    align-items: center;
  }
}
</style>
