<template>
  <div id="admin">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-user"></i> Administrator</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="vd_content-section clearfix">
			  
					<div class="row mrgn0">
						<div class="col-sm-12">
							<div class="container-fluid">
								<div class="row mrgn0">
									<div class="col-md-4"></div>
									<div class="col-md-4">
										<div class="mgbt-xs-10">
											<button type="button" class="btn vd_btn vd_bg-blue btn-lg btn-block" data-toggle="modal" data-target="#addAdmin"><span class="append-icon"><i class="fa fa-plus"></i></span>Add New Administrator</button>
										</div>
									</div>
									<div class="col-md-4">
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<div class="row">
						<div class="pdng20 col-md-12">
							<div class="panel widget container-fluid">
								<div class="row projectRow">							
									<div class="col-sm-2">
										<img src="@/assets/avatar/briant2.png" alt="" class="projectImg">
									</div>
									<div class="col-sm-6 brdRight brdLeft">
										<h4>adminName</h4>
										<p class="mrgn5">Name: <strong>Erik</strong></p>
										<p class="mrgn5">Lastname: <strong>Schmidt</strong></p>
										<p class="mrgn5">Was added: 05-07-2017 12:05:00</p>
										<p class="mrgn5">Phone: +1 800 1234567</p>
										<p class="mrgn5">Email: somename@email.com</p>
									</div>
									<div class="col-sm-4 text-left">	
										<p class="mrgn5"><a href="javascript:void(0);" data-toggle="modal" data-target="#permissions"><span class="label label-default vd_bg-yellow vd_white"><span class="append-icon icon-key vd_white"></span> Permissions</span></a></p>
										<p class="mrgn5"><a href="javascript:void(0);" data-toggle="modal" data-target="#groupSettings"><span class="label label-default vd_bg-green vd_white"><span class="append-icon icon-users"></span> Group Settings</span></a></p>
										<p class="mrgn5"><a href="javascript:void(0);" data-toggle="modal" data-target="#changeSettings"><span class="label label-default vd_bg-blue vd_white"><span class="append-icon icon-tools"></span> Edit Settings</span></a></p>
										<p class="mrgn5" data-toggle="modal" data-target="#changePassword"><a href="javascript:void(0);"><span class="label label-default vd_bg-grey vd_white"><span class="append-icon icon-lock"></span> Change Password</span></a></p>
										<p class="mrgn5" data-toggle="modal" data-target="#deleting"><a href="javascript:void(0);"><span class="label label-default vd_bg-red vd_white"><span class="append-icon icon-trash"></span> Delete</span></a></p>
									</div>
								</div><!-- row end -->
								
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