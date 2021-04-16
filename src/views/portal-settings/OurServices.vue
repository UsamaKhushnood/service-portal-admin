<template>
  <div id="our-services">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-qrcode"></i> Our Services</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
      <div class="row">
        <div class="col-md-4">
          <div class="mgbt-md-10">
            <button
              type="button"
              class="btn vd_btn vd_bg-blue btn-lg btn-block"
              data-toggle="modal"
              data-target="#addMaincategory"
            >
              <span class="append-icon"
                ><i class="fa fa-plus-circle fa-fw"></i></span
              >Add Maincategory
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mgbt-md-10">
            <button
              type="button"
              class="btn vd_btn vd_bg-blue btn-lg btn-block"
              data-toggle="modal"
              data-target="#addSubcategory"
            >
              <span class="append-icon"
                ><i class="fa fa-plus-circle fa-fw"></i></span
              >Add Subcategory
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mgbt-md-10">
            <button
              type="button"
              class="btn vd_btn vd_bg-blue btn-lg btn-block"
              data-toggle="modal"
              data-target="#addKeyword"
            >
              <span class="append-icon"
                ><i class="fa fa-plus-circle fa-fw"></i></span
              >Add Keywords
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="panel widget">
            <div class="panel-body table-responsive">
              <table class="table table-hover center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Maincat Img</th>
                    <th>Maincategory</th>
                    <th>Subcategory</th>
                    <th>Keywords</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <!------------------------------------------------------------------------->
                    <td>
                      <img
                        id="myImg"
                        src="@/assets/products/2048.jpg"
                        alt="Snow"
                        style="width:100%;max-width:30px"
                      />

                      <!-- The Modal -->
                      <div id="myModal" class="modal">
                        <span class="close">×</span>
                        <img class="modal-content" id="img01" />
                        <div id="caption"></div>
                      </div>
                    </td>
                    <!------------------------------------------------------------------------------------------->
                    <td>Beauty</td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#subcategories"
                        >5</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#keywords"
                        >10</a
                      >
                    </td>
                    <td class="menu-action">
                      <a
                        class="btn menu-icon vd_bd-blue vd_blue"
                        data-toggle="modal"
                        data-target="#addMaincategory"
                      >
                        <i
                          class="fa fa-plus"
                          data-toggle="tooltip"
                          data-original-title="add new"
                          data-placement="top"
                        ></i>
                      </a>
                      <a
                        data-original-title="edit"
                        data-toggle="tooltip"
                        data-placement="top"
                        class="btn menu-icon vd_bd-yellow vd_yellow"
                      >
                        <i class="fa fa-edit"></i>
                      </a>
                      <a
                        data-original-title="view"
                        data-toggle="tooltip"
                        data-placement="top"
                        class="btn menu-icon vd_bd-green vd_green"
                      >
                        <i class="fa fa-eye"></i>
                      </a>
                      <a
                        data-original-title="remove"
                        data-toggle="tooltip"
                        data-placement="top"
                        class="btn menu-icon vd_bd-red vd_red"
                      >
                        <i class="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <!------------------------------------------------------------------------->
                    <td>
                      <img
                        id="myImg"
                        src="@/assets/products/2048.jpg"
                        alt="Snow"
                        style="width:100%;max-width:30px"
                      />
                    </td>
                    <!------------------------------------------------------------------------------------------->

                    <td>Internet</td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#subcategories"
                        >10</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#keywords"
                        >20</a
                      >
                    </td>
                    <td class="menu-action">
                      <a
                        class="btn menu-icon vd_bd-blue vd_blue"
                        data-toggle="modal"
                        data-target="#addMaincategory"
                      >
                        <i
                          class="fa fa-plus"
                          data-toggle="tooltip"
                          data-original-title="add new"
                          data-placement="top"
                        ></i>
                      </a>
                      <a
                        data-original-title="edit"
                        data-toggle="tooltip"
                        data-placement="top"
                        class="btn menu-icon vd_bd-yellow vd_yellow"
                      >
                        <i class="fa fa-edit"></i>
                      </a>
                      <a
                        data-original-title="view"
                        data-toggle="tooltip"
                        data-placement="top"
                        class="btn menu-icon vd_bd-green vd_green"
                      >
                        <i class="fa fa-eye"></i>
                      </a>
                      <a
                        data-original-title="remove"
                        data-toggle="tooltip"
                        data-placement="top"
                        class="btn menu-icon vd_bd-red vd_red"
                      >
                        <i class="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
