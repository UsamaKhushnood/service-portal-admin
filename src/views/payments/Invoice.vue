<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fas fa-info-circle"></i> Invoice</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="tabs widget mt-4">
        <ul class="nav nav-tabs widget">
          <li>
            <a data-toggle="tab" class="active" href="#clientInvoice"
              >Client Invoice<span class="menu-active"
                ><i class="fa fa-caret-up"></i
              ></span>
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#userInvoice"
              >User Invoice<span class="menu-active"
                ><i class="fa fa-caret-up"></i
              ></span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="clientInvoice" class="tab-pane fade in active show">
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
              <template #Status="{index}">
                <td class="menu-action">
                  <a
                    data-v-44c7b9c7=""
                    class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                    role="button"
                    v-b-modal="'new-payment-modal' + index"
                    ><i
                      data-v-44c7b9c7=""
                      data-original-title="view"
                      data-toggle="tooltip"
                      data-placement="top"
                      class="fa fa-eye"
                      aria-hidden="true"
                    ></i
                  ></a>
                  <NewPaymentPopup :propsindex="index"> </NewPaymentPopup>
                </td>
              </template>
              <template #Actions="{ index }">
                <td>
                  <button
                    class="btn btn-success btn-sm text-center py-0"
                    @click="deleteEntry(index)"
                  >
                    <i class="fas fa-times" style="font-size: 10px"></i>
                  </button>
                </td>
              </template>
            </CDataTable>
            <!-- row end -->
          </div>
          <!-- tab-pane end -->
          <div id="userInvoice" class="tab-pane fade">
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
              <template #Status="{index}">
                <td class="menu-action">
                  <a
                    data-v-44c7b9c7=""
                    class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                    role="button"
                    v-b-modal="'new-payment-modal' + index"
                    ><i
                      data-v-44c7b9c7=""
                      data-original-title="view"
                      data-toggle="tooltip"
                      data-placement="top"
                      class="fa fa-eye"
                      aria-hidden="true"
                    ></i
                  ></a>
                </td>
              </template>
              <template #Actions="{ index }">
                <td>
                  <button
                    class="btn btn-success btn-sm text-center py-0"
                    @click="deleteEntry(index)"
                  >
                    <i class="fas fa-times" style="font-size: 10px"></i>
                  </button>
                </td>
              </template>
            </CDataTable>
            <!-- row end -->
          </div>
          <!-- tab-pane end -->
        </div>
        <!-- tab-content -->
      </div>
      <!-- tabs widget end -->
    </div>
  </div>
</template>
<script>
import NewPaymentPopup from "./AllPopups/invoicePopupss/NewPaymentPopup.vue";
import usersData from "./reviewTableData";
export default {
  components: { NewPaymentPopup },
  data: () => ({
    items: usersData,
  }),
  methods: {
    deleteEntry(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
<style lang="scss"></style>
