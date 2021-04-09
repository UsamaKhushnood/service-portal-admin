<template>
  <div id="news-letter">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fas fa-language"></i> Add / Manage Languages</h1>
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
            data-target="#addLang"
          >
            <span class="append-icon"><i class="fa fa-plus-square"></i></span
            >Add Language
          </button>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <table class="discountTable table">
            <colgroup>
              <col width="10%" />
              <col width="15%" />
              <col width="40%" />
              <col width="10%" />
              <col width="10%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Language</th>
                <th>Progress</th>
                <th>Done</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="@/assets/flags/AE.png" alt="" width="48" height="32" />
                </td>
                <td>Arabic</td>
                <td>
                  <div class="menu-info mrgn0">
                    <div class="progress progress-sm mrgn0">
                      <div
                        style="width:95%"
                        class="progress-bar progress-bar-info"
                      >
                        95%
                      </div>
                    </div>
                  </div>
                </td>
                <td>543</td>
                <td>1345</td>
                <td class="menu-action">
                  <div class="pdng5">
                    <a
                      data-toggle="modal"
                      data-target="#editLang"
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
                      data-target="#removeLang"
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
              <tr>
                <td>
                  <img src="@/assets/flags/GB.png" alt="" width="48" height="32" />
                </td>
                <td>English</td>
                <td>
                  <div class="menu-info mrgn0">
                    <div class="progress progress-sm mrgn0">
                      <div
                        style="width:45%"
                        class="progress-bar progress-bar-info"
                      >
                        45%
                      </div>
                    </div>
                  </div>
                </td>
                <td>1543</td>
                <td>1345</td>
                <td class="menu-action">
                  <div class="pdng5">
                    <a
                      data-toggle="modal"
                      data-target="#editLang"
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
                      data-target="#removeLang"
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
