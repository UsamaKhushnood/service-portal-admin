<template>
  <div id="Review">
    <div class="vd_content-wrapper">
      <div class="vd_content ">
        <div class="vd_title-section ">
          <div class="vd_panel-header">
            <h1><i class="fas fa-star-half-alt"></i> Reviews</h1>
          </div>
        </div>
        <CInput label="Search Current User" description="Type User ID">
          <template #append>
            <CButton color="dark">
              <i class="fas fa-search"></i>
            </CButton>
          </template>
        </CInput>
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
            'Actions'
          ]"
          :items-per-page="10"
          pagination
        >
          <template #Status="{item , index}">
            <td>
              <CBadge :color="getBadge(item.Status)" v-b-modal="'review-seen-popup' + index">{{ item.Status }} </CBadge>
              <ReviewSeenPopup :popupIndex="index" />
            </td>
          </template>
          <template #Actions="{index}"> 
            <td>
              <button class="btn btn-success btn-sm text-center py-0" @click="deleteEntry(index)">
                <i class="fas fa-times" style="font-size:10px"></i>
              </button>
            </td>
          </template>
        </CDataTable>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewSeenPopup from './Review-Popups/ReviewSeenPopup.vue'
import usersData from "./reviewTableData";
export default {
  components: { ReviewSeenPopup },
  name: "Reviews",
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
    deleteEntry(index){
      this.items.splice( index , 1 )
    }
  },
};
</script>

<style></style>
