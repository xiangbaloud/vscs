jQuery.expr[":"].Contains=function(a,c,b){return 0<=jQuery(a).text().toUpperCase().indexOf(b[3].toUpperCase())};  

$(function(){
	$('.option,.abs button:first()').hide(); // 隱藏選單預設選單
	$('.select').click(function(){
		$('.option').toggle();
		$(".abs button").click(function(){
			$('.abs button:first()').show(); // 保留預設顯示的選項
			var buttontext = $(this).text();
			$('.select button').text(buttontext);	// 當選擇鎖定後，將顯示在最上層
		});
		// $(".abs button:first()").click(function(){
		// 	$(this).hide();
		// });
	});
	$('*').click(function(event){ 
		var target = $(event.target);
		if (!target.is('.select *')){ 
			$('.option').hide();
		}
	}); 	// 當選項鎖定後，隱藏其他選項
	$("tr.disk_info > td:Contains('vmlist')").parent().show();
});

$("div.abs > button").click(function(){
	// 選項鎖定後，顯示該選項 table
	$("tr.disk_info ").hide(); var clicked = $(this).val();
	$("tr.disk_info > td:Contains('"+clicked+"')").parent().show();
});

var diskctl_url = "http://10.144.7.3/diskctl"

$('#disk_open21').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0901-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open22').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0902-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open23').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0903-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open24').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0904-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open25').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0905-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open26').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0906-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open27').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0907-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open28').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab09',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-12.com.accelstor.p710:lab0908-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close21').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close22').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close23').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close24').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close25').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close26').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close27').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close28').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab09',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open31').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1301-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open32').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1302-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open33').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1303-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open34').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1304-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open35').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1305-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open36').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1306-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open37').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1307-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open38').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab13',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1308-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close31').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close32').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close33').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close34').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close35').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close36').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close37').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close38').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab13',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open41').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1401-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open42').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1402-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open43').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1403-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open44').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1404-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open45').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1405-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open46').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1406-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open47').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1407-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open48').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab14',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1408-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close41').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close42').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close43').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close44').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close45').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close46').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close47').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close48').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab14',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open51').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1501-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open52').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1502-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open53').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1503-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open54').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1504-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open55').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1505-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open56').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1506-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open57').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1507-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open58').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab15',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1508-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close51').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close52').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close53').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close54').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close55').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close56').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close57').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close58').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab15',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open61').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1601-lun-0',
		'target': 'sdb'
	}
	let xx = $.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});

	console.log(xx);
});

$('#disk_open62').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1602-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open63').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1603-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open64').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1604-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open65').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1605-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open66').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1606-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open67').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1607-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open68').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab16',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1608-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close61').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close62').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close63').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close64').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close65').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close66').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close67').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close68').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab16',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open71').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1701-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open72').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1702-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open73').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1703-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open74').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1704-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open75').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1705-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open76').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1706-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open77').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1707-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open78').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab17',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1708-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close71').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close72').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close73').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close74').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close75').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close76').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close77').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close78').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab17',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open81').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1801-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open82').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1802-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open83').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1803-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open84').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1804-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open85').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1805-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open86').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1806-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open87').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1807-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open88').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab18',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-06.com.accelstor.p710:lab1808-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close81').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close82').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close83').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close84').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close85').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close86').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close87').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close88').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab18',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open91').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1901-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open92').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1902-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open93').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1903-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open94').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1904-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open95').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1905-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open96').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1906-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open97').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1907-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open98').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab19',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab1908-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close91').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close92').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close93').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close94').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close95').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close96').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close97').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close98').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab19',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open101').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab2301-lun-0',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open102').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab2302-lun-0',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open103').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab2303-lun-0',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open104').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-07.com.accelstor.p710:lab2304-lun-0',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open105').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-08.com.accelstor.p710:lab2305-lun-0',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open106').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-08.com.accelstor.p710:lab2306-lun-0',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open107').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-08.com.accelstor.p710:lab2307-lun-0',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_open108').click(function(){
	let op = {
		'disk_ctl': 'open',
		'vm_name': 'lab23',
		'path': '/dev/disk/by-path/ip-172.19.10.2:3260-iscsi-iqn.2017-08.com.accelstor.p710:lab2308-lun-0',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close101').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sdb'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close102').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sdc'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close103').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sdd'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close104').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sde'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close105').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sdf'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close106').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sdg'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close107').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sdh'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});

$('#disk_close108').click(function(){
	let op = {
		'disk_ctl': 'close',
		'vm_name': 'lab23',
		'target': 'sdi'
	}
	$.ajax({
		type: 'POST',
		url: diskctl_url,
		contentType: 'application/json',
		data: JSON.stringify(op),
		dataType: 'json',
		success: function(XMLHttpRequest){
			alert(String(XMLHttpRequest.responseText));
		},
		error: function(XMLHttpRequest) {
			alert(String(XMLHttpRequest.responseText));
		}
	});
});