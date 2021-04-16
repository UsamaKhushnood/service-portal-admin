<template>
  <div id="review-seen-popup">
    <b-modal
      :id="'review-seen-popup' + popupIndex"
      title="Shop Name"
      hide-footer
      size="xl"
      header-bg-variant="primary"
      header-text-variant="light"
    >
      <div class="modal-body">
        <div class="panel-body no-padding">
          <div class="row">
            <div class="col-md-12">
              <!-- Start bordered table -->

              <div class="table-responsive mb-20" style="background:white;">
                <br />

                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td
                        align="center"
                        class="rating-width10"
                        style="width:150px;"
                      >
                        <img
                          data-no-retina=""
                          class="img-thumbnail img-bordered-default"
                          src="@/assets/avatar/customer175.png"
                          alt="Leli Madang"
                        />
                        <strong>Suliman</strong>
                      </td>
                      <td>
                        <div class="row border-bottom">
                          <div class="col-md-6">
                            Order Time : 22-8-2016 / 17:22:20
                          </div>
                          <div class="col-md-6">Order No : YAMI-0000321</div>
                          <hr />
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-12">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </div>
                        </div>
                      </td>
                      <td class="rating-width15" style="width:150px;">
                        <div style="float:left; width:40px;">1</div>

                        <b-form-rating variant="primary" ></b-form-rating>
                        <b-form-rating variant="primary" ></b-form-rating>
                        <b-form-rating variant="primary" ></b-form-rating>
                        <b-form-rating variant="primary" ></b-form-rating>
                        <b-form-rating variant="primary" ></b-form-rating>
                      </td>
                    </tr>

                    <tr>
                      <td align="center" class="rating-width10">
                        <h6 class="text-center">About Shop</h6>
                        <div class="row">
                          <div class="col-md-6"></div>
                          <div class="col-md-6"></div>
                          <div class="col-md-6"></div>
                          <div class="col-md-6"></div>
                          <div class="col-md-6"></div>
                          <div class="col-md-6"></div>
                          <div class="col-md-6"></div>
                          <div class="col-md-6"></div>
                        </div>
                      </td>
                      <td>
                        <div class="row border-bottom">
                          <div class="col-md-6">
                            Order Time : 22-8-2016 / 17:22:20
                          </div>
                          <div class="col-md-6">Order No : YAMI-0000321</div>
                          <hr />
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-12">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </div>
                        </div>
                      </td>
                      <td class="rating-width15" align="center">
                        <img
                          data-no-retina=""
                          class="img-thumbnail img-bordered-default"
                          src="@/assets/avatar/customer175.png"
                          alt="Leli Madang"
                        />

                        <b-form-rating variant="primary"></b-form-rating>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
              <!--/ End bordered table -->
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["popupIndex"],
};
</script>
<style lang="scss"></style>
