 <template>
  <div id="text-module">
    <div class="vd_content-wrapper">
      <div class="vd_content clearfix">
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header">
            <h1><i class="fa fa-file-alt"></i> Text Module</h1>
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
											<button type="button" class="btn vd_btn vd_bg-blue btn-lg btn-block" data-toggle="modal" data-target="#addNewText"><span class="append-icon"><i class="fa fa-plus"></i></span>Add New Text</button>
										</div>
									</div>
									<div class="col-md-4">
									</div>
								</div>
							</div>
						</div>
					</div>   
					
					<div class="row">									
									<div class="col-md-12 pdng5">
										<table class="discountTable">
											<colgroup>
												<col width="25%">
												<col width="60%">
												<col width="15%">
											</colgroup>
											<thead>
												<tr>
													<th class="text-center">Title</th>
													<th class="text-center">Text</th>
													<th class="text-center">Option</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="text-left pdng5">Text Title for some block</td>
													<td class="text-left pdng5">Ut sit amet metus eget lectus aliquet dignissim et vel tellus. Sed egestas ante felis. Integer metus augue, facilisis non sem ac, blandit suscipit nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...</td>
													<td>
														<a class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8" data-toggle="modal" data-target="#editText"><i class="fa fa-pencil" data-original-title="edit" data-toggle="tooltip" data-placement="top"></i></a>
														<a class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8" data-toggle="modal" data-target="#removeText"><i class="fa fa-trash-o" data-original-title="remove" data-toggle="tooltip" data-placement="top"></i></a>
													</td>
												</tr>
											</tbody>
										</table>
									</div><!-- col-md-12 end --> 
								</div><!-- row end --> 
					 
          </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>