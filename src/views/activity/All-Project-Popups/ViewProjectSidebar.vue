<template>
  <div>
    <b-sidebar
      :id="'sidebar-backdrop' + dataIndex"
      class="viewProjectSidebar rightSidebar"
      :class="'viewProjectSidebar' + dataIndex"
      backdrop-variant="dark"
      backdrop
      shadow
      no-header
      bg-variant="white"
      right
    >
      <template #default="{ hide }">
        <div
          class="d-flex text-light align-items-center justify-content-center px-3 py-2 modalHeader bg-dark"
        >
          <b-button size="sm" @click="hide"
            ><i class="fa fa-arrow-circle-right"></i
          ></b-button>
          <h4 class="mx-auto">View Project</h4>
        </div>
        <div
          class="d-flex align-items-center justify-content-center bg-success vd_white headerSecondary"
        >
          <div class="col-md-2 pdng5-0 col-md-offset-3 text-center">
            <h6 class="mrgn0">
              Project ID:
              <span>112223443</span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              Project Type:
              <span>Offer</span>
            </h6>
          </div>
          <div class="col-md-2 pdng5-0 text-center">
            <h6 class="mrgn0">
              Budget:
              <span>2.500 €</span>
            </h6>
          </div>
        </div>

        <!-- Sidebar Body  -->
        <div class="modal-body h100">
          <div class="row">
            <div class="col-sm-3 text-center">
              <div class="userAvatar vd_bg-light-grey">
                <div class="avatarBackground">
                  <img src="@/assets/avatar/avatarBg.png" alt="" />
                </div>
                <div class="userImageWrapper">
                  <img
                    src="@/assets/avatar/briant3.png"
                    alt=""
                    class=" inline-block"
                  />
                </div>

                <h4>Elizabeth Tailor</h4>
                <h6>User ID: 120987465</h6>
                <div class="row text-center">
                  <button type="submit" class="btn btn-primary btn-sm mx-auto">
                    View Profile
                  </button>
                </div>
              </div>

              <!-- Panel widget start -->

              <b-card
                border-variant="primary"
                header="Google Inc."
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
                class="mt-2 mb-2"
              >
                <b-card-text>
                  <div class="panel-body-list d-flex justify-content-around">
                    <div class="col-xs-4 text-center pdng5-0">
                      <h5 class="mrgn0">44%</h5>
                      <p class="mrgn0">COMPLETE</p>
                    </div>
                    <div class="col-xs-4 text-center pdng5-0">
                      <h5 class="mrgn0">3</h5>
                      <p class="mrgn0">MY TASKS</p>
                    </div>
                    <div class="col-xs-4 text-center pdng5-0">
                      <h5 class="mrgn0">245</h5>
                      <p class="mrgn0">DAYS DUE</p>
                    </div>
                  </div>
                </b-card-text>
              </b-card>

              <b-card
                border-variant="success"
                header="Facebook Inc."
                header-bg-variant="success"
                header-text-variant="white"
                align="center"
                class="mt-2"
              >
                <b-card-text>
                  <div class="panel-body-list d-flex justify-content-around">
                    <div class="col-xs-4 text-center pdng5-0">
                      <h5 class="mrgn0">44%</h5>
                      <p class="mrgn0">COMPLETE</p>
                    </div>
                    <div class="col-xs-4 text-center pdng5-0">
                      <h5 class="mrgn0">3</h5>
                      <p class="mrgn0">MY TASKS</p>
                    </div>
                    <div class="col-xs-4 text-center pdng5-0">
                      <h5 class="mrgn0">245</h5>
                      <p class="mrgn0">DAYS DUE</p>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
              <!-- Panel widget end -->
            </div>
            <div class="col-sm-9 ">
              <div class="row messageArea vd_bd-light-grey panel pdng10 align-items-center border">
                <div class="col-sm-8">
                  <p>Thank you for inviting me to your project.</p>
                  <p>
                    Sociis, erat fusce sit. Pulvinar. Auctor purus eros dictum
                    praesent quam potenti nullam ac, proin sit nec sem turpis.
                    Penatibus placerat enim. Arcu odio varius mi massa posuere
                    dignissim mattis Platea potenti tincidunt gravida. Interdum
                    urna mi convallis morbi donec, pulvinar vel dictum lorem
                    Suspendisse taciti nisl sed mus mus.
                  </p>
                </div>
                <div class="col-sm-4 brdLeft">
                  <img src="@/assets/avatar/briant3.png" alt="" class="projectImg" />
                  <h4 class="text-center">Elizabeth Tailor</h4>
                  <p class="mrgn0 text-center">
                    Message Time: 11-03-2018 4:05pm
                  </p>
                </div>
              </div>
              <h3 class="mt-3">All Tasks</h3>
              <CDataTable
                :hover="true"
                :striped="true"
                :border="true"
                :fixed="false"
                :items="items"
                :fields="['TasksList', 'StartDate', 'DeliverDate', 'status']"
                :items-per-page="10"
                pagination
              >
                <template #status={item}>
                  <td>
                    <CBadge :color="getBadge(item.status)">{{item.status}}</CBadge>
                  </td>
                </template>
              </CDataTable>
              <!-- Task end -->



              <hr class="mrgn10-0" />

              <h3>Extra Offers</h3>

              <div class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4" >

                <div class="col-sm-4 pdng5-0 d-flex align-items-center">
                  <h5 class="mrgn0">Change background Images</h5>
                </div>
                <div class="col-sm-8 text-center d-flex align-items-center">
                  <div class="col-sm-4">Start Date: 13-07-2016</div>
                  <div class="col-sm-4">Deliver Date: 13-07-2016</div>
                  <div class="col-sm-4">Price: 2.500 €</div>
                </div>
              </div>

              <div class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4" >

                <div class="col-sm-4 pdng5-0 d-flex align-items-center">
                  <h5 class="mrgn0">Change background Images</h5>
                </div>
                <div class="col-sm-8 text-center d-flex align-items-center">
                  <div class="col-sm-4">Start Date: 13-07-2016</div>
                  <div class="col-sm-4">Deliver Date: 13-07-2016</div>
                  <div class="col-sm-4">Price: 2.500 €</div>
                </div>
              </div>

              <div class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4" >

                <div class="col-sm-4 pdng5-0 d-flex align-items-center">
                  <h5 class="mrgn0">Change background Images</h5>
                </div>
                <div class="col-sm-8 text-center d-flex align-items-center">
                  <div class="col-sm-4">Start Date: 13-07-2016</div>
                  <div class="col-sm-4">Deliver Date: 13-07-2016</div>
                  <div class="col-sm-4">Price: 2.500 €</div>
                </div>
              </div>

              <!-- Extra Task end -->

              <hr class="mrgn10-0" />

              <h3>Images</h3>

              <div
                class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
              >
                <div class="col-sm-3 pdng5-0 text-center">
                  <a
                    data-toggle="modal"
                    data-target="#showFile"
                    href="javascript:void(0);"
                  >
                    <img
                      src="@/assets/products/06.jpg"
                      alt=""
                      width="80"
                      height="80"
                    />
                  </a>
                </div>
                <div class="col-sm-9 d-flex align-items-center">
                  <div class="col-sm-3">06_plan.jpg</div>
                  <div class="col-sm-3">
                    <i class="icon-user"></i> Vint Cerf
                  </div>
                  <div class="col-sm-3">320 KB</div>
                  <div class="col-sm-3">
                    <span class="label label-default vd_bg-green vd_white"
                      >Seen</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
              >
                <div class="col-sm-3 pdng5-0 text-center">
                  <a
                    data-toggle="modal"
                    data-target="#showFile"
                    href="javascript:void(0);"
                  >
                    <img
                      src="@/assets/products/06.jpg"
                      alt=""
                      width="80"
                      height="80"
                    />
                  </a>
                </div>
                <div class="col-sm-9 d-flex align-items-center">
                  <div class="col-sm-3">06_plan.jpg</div>
                  <div class="col-sm-3">
                    <i class="icon-user"></i> Vint Cerf
                  </div>
                  <div class="col-sm-3">320 KB</div>
                  <div class="col-sm-3">
                    <span class="label label-default vd_bg-green vd_white"
                      >Seen</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
              >
                <div class="col-sm-3 pdng5-0 text-center">
                  <a
                    data-toggle="modal"
                    data-target="#showFile"
                    href="javascript:void(0);"
                  >
                    <img
                      src="@/assets/products/06.jpg"
                      alt=""
                      width="80"
                      height="80"
                    />
                  </a>
                </div>
                <div class="col-sm-9 d-flex align-items-center">
                  <div class="col-sm-3">06_plan.jpg</div>
                  <div class="col-sm-3">
                    <i class="icon-user"></i> Vint Cerf
                  </div>
                  <div class="col-sm-3">320 KB</div>
                  <div class="col-sm-3">
                    <span class="label label-default vd_bg-green vd_white"
                      >Seen</span
                    >
                  </div>
                </div>
              </div>
              <!-- Task Image end -->

            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
import usersData from './userData'
export default {
  props: ["dataIndex"],
  data:() => ({
    items: usersData
  }),
    methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    }
  }
};
</script>
<style lang="scss">
.modalHeader {
  h4 {
    text-transform: uppercase;
  }
}

.headerSecondary h6 {
  font-size: 13px;
  padding: 5px 0;
}


</style>
