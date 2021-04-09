<template>
  <div id="bids-amount-client">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-coins"></i> Bids Amount Client</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row mrgn15-0">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <button
            type="button"
            class="btn vd_btn vd_bg-blue btn-lg btn-block"
            data-toggle="modal"
            data-target="#addBid"
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add New Bid
          </button>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <table class="discountTable table">
            <colgroup>
              <col width="10%" />
              <col width="30%" />
              <col width="30%" />
              <col width="30%" />
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>Bids amount</th>
                <th>Price</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12</td>
                <td>2.550 €</td>
                <td class="menu-action">
                  <div class="pdng5">
                    <a
                      data-toggle="modal"
                      data-target="#editBid"
                      class="btn menu-icon vd_bd-yellow vd_yellow"
                      ><i
                        class="fa fa-pencil"
                        data-original-title="Edit"
                        data-toggle="tooltip"
                        data-placement="top"
                      ></i
                    ></a>
                    <a
                      data-toggle="modal"
                      data-target="#removeBid"
                      class="btn menu-icon vd_bd-red vd_red"
                      ><i
                        class="fa fa-trash-o"
                        data-original-title="Remove"
                        data-toggle="tooltip"
                        data-placement="top"
                      ></i
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- col-md-12 end -->
      </div>
      <!-- row end -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
