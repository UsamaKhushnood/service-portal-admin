<template>
  <div id="Apointment">
    <div class="vd_content-wrapper">
      <div class="vd_content ">
        <div class="vd_title-section ">
          <div class="vd_panel-header">
            <h1><i class="fas fa-calendar-week"></i> Appointments</h1>
          </div>
        </div>
        <div class="tabs widget mt-4">
          <ul class="nav nav-tabs widget">
            <li>
              <a data-toggle="tab" href="#userPayoutRequest" class="active"
                >User / Client Request<span class="menu-active "
                  ><i class="fa fa-caret-up"></i
                ></span>
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#clientPayoutRequest"
                >Client / User Request<span class="menu-active"
                  ><i class="fa fa-caret-up"></i
                ></span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="userPayoutRequest" class="tab-pane fade active in show">
              <CDataTable
                :hover="true"
                :striped="true"
                :border="true"
                :fixed="false"
                :items="items"
                :fields="[
                  'No',
                  'ReviewID',
                  'ForShop',
                  'UserName',
                  'AverageRating',
                  'Date',
                  'Status',
                  'Actions',
                ]"
                :items-per-page="10"
                pagination
              >
                <template #Status="{item}">
                  <td>
                    <CBadge :color="getBadge(item.Status)"
                      >{{ item.Status }}
                    </CBadge>
                  </td>
                </template>
                <template #Actions="{index}">
                  <td>
                    <button
                      class="btn btn-success btn-sm text-center py-0"
                      @click="deleteEntry(index)"
                    >
                      <i class="fas fa-times" style="font-size:10px"></i>
                    </button>
                  </td>
                </template>
              </CDataTable>
            </div>

            <div id="clientPayoutRequest" class="tab-pane fade">
              <CDataTable
                :hover="true"
                :striped="true"
                :border="true"
                :fixed="false"
                :items="items"
                :fields="[
                  'No',
                  'ReviewID',
                  'ForShop',
                  'UserName',
                  'AverageRating',
                  'Date',
                  'Status',
                  'Actions',
                ]"
                :items-per-page="10"
                pagination
              >
                <template #Status="{item}">
                  <td>
                    <CBadge :color="getBadge(item.Status)"
                      >{{ item.Status }}
                    </CBadge>
                  </td>
                </template>
                <template #Actions="{index}">
                  <td>
                    <button
                      class="btn btn-success btn-sm text-center py-0"
                      @click="deleteEntry(index)"
                    >
                      <i class="fas fa-times" style="font-size:10px"></i>
                    </button>
                  </td>
                </template>
              </CDataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import usersData from "./reviewTableData";
export default {
  data: () => ({
    items: usersData,
  }),
  methods: {
    getBadge(status) {
      return status === "Seen"
        ? "success"
        : status === "Unseen"
        ? "danger"
        : "primary";
    },
    deleteEntry(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">

</style>
