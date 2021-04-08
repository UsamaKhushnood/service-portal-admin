<template>
  <div id="AllProjects">
    <div class="vd_content-wrapper">
      <div class="vd_content ">
        <div class="vd_title-section ">
          <div class="vd_panel-header">
            <h1><i class="fas fa-archive"></i> Projects</h1>
          </div>
        </div>
        <!-- search-section start -->
        <div class="row pdng10-0 searchBar">
          <form>
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
            <div class="col-md-2">
              <div>
                <input
                  class="ui-autocomplete-input"
                  type="text"
                  placeholder="Project ID"
                  id="project-autocomplete"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="col-md-2">
              <div>
                <input
                  class="ui-autocomplete-input"
                  type="text"
                  placeholder="Company Name"
                  id="company-autocomplete"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="col-md-2">
              <div>
                <select>
                  <option value disabled selected>Status</option>
                  <option value="1">On Hold</option>
                  <option value="2">Denied</option>
                  <option value="3">Blocked</option>
                  <option value="4">Removed</option>
                </select>
              </div>
            </div>
            <div class="col-md-2">
              <button
                type="button"
                class="btn vd_btn vd_bg-blue"
                data-toggle="modal"
                data-target
                style="max-height:32px;"
              >
                <span class="append-icon">
                  <i class="fa fa-search fa-fw"></i> </span
                >Search Projects
              </button>
            </div>
          </form>
        </div>
        <!-- search-section end -->

        <!-- Block card  -->
        <div v-for="(data, dataIndex) in allProjectsData" :key="dataIndex" class="block_card_wrapper">
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
                <strong>Post Time:</strong> <span class="">123154451</span>
              </p>
              <p class="card_mini_info">
                <strong>Job Type:</strong> <span class="">123154451</span>
              </p>
            </div>
            <div class="col-md-2 job_info border-right">
              <h4 class="card_sec_title">Job Budget</h4>
              <p class="card_mini_info">
                <strong>Budget:</strong>
                <span class="badge badge-primary ml-auto">250 &euro;</span>
              </p>
              <p class="card_mini_info">
                <strong>Type:</strong>
                <span class="badge badge-secondary ml-auto">Hourly</span>
              </p>
            </div>
            <div class="col-md-2 job_info border-right">
              <h4 class="card_sec_title">Work Start</h4>
              <p class="card_mini_info">
                <strong>Start Date:</strong>
                <span class="badge badge-success ml-auto">05-07-2021</span>
              </p>
              <p class="card_mini_info">
                <strong>End Date:</strong>
                <span class="badge badge-warning ml-auto">12-09-2021</span>
              </p>
            </div>
            <div class="col-md-2 job_info ">
              <h4 class="card_sec_title">Proposals</h4>
              <p class="card_mini_info">
                <strong>Accepted:</strong>
                <span class="badge badge-success ml-auto">120</span>
              </p>
              <p class="card_mini_info">
                <strong>Denied:</strong>
                <span class="badge badge-danger ml-auto">200</span>
              </p>
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
      <!-- vd_content end -->
    </div>
  </div>
</template>

<script>
import AllPopups from './All-Project-Popups/AllPopups.vue'
export default {
  name: "AllProjects",
  components: {AllPopups },
  data: () => ({
    allProjectsData: ["1", "2", "3", "4"],
  }),
};
</script>
<style lang="scss">
p {
  margin: 0;
}

.block_card_wrapper{
  position: relative;
  .moreOptions{
    position: absolute;
    top:15px;
    right: 0;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .content-menu .list-wrapper li{
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
