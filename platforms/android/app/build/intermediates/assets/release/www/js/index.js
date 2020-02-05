$(document).ready(function(){

	getSehir();
	getBolge();
	
	if($('#icerik li').length == 0){

		$("#main #icerik").empty();
		$.get("http://tesakaucuk.com/api.php",{"param":"all"},function(jsonVerisi){			
			var obj = jQuery.parseJSON(jsonVerisi);
			$.each(obj,function(){
				$("#main #icerik").append('<li class="list-group-item" id="'+this.id+'"><h3>'+this.baslik+'</h3></br><img class="rounded" src="'+this.foto+'" style="width:100%"></br></br><p id="collapse'+this.id+'" class="panel-collapse collapse">'+this.aciklama+'</p><p id="collapse'+this.id+'" class="panel-collapse collapse"><b>Adres:</b> '+this.adres+'</p><nav class="navbar navbar-dark bg-dark"><button href="#collapse'+this.id+'" class="navbar-toggler" data-toggle="collapse"><span class="navbar-toggler-icon"></span><button type="button" onClick="favEkle('+this.id+')" class="btn btn-outline-success">Takip Listeme Ekle</button></button></nav></li>');
			});
			// Grab whatever we need to paginate
			var pageParts = $(".list-group-item");			
			// How many parts do we have?
			var numPages = pageParts.length;
			// How many parts do we want per page?
			var selectValue = 15;
			var perPage = selectValue;
			var start = 0;
			var end = perPage;
			// When the document loads we're on page 1
			// So to start with... hide everything else
			$(pageParts).hide().slice(start, end).show();
			// Apply simplePagination to our placeholder
			$("#page-nav").pagination({
				items: numPages,
				itemsOnPage: perPage,				
				// We implement the actual pagination
				// in this next function. It runs on
				// the event that a user changes page
				onPageClick: function(pageNum) {
					// Which page parts do we show?
					var start = perPage * (pageNum - 1);
					var end = start + perPage;

					// First hide all page parts
					// Then show those just for our page
					$(pageParts).hide().slice(start, end).show();
					
					$("html, body").animate({ scrollTop: 0 }, "slow");
				}
			});
		});	
	}

	if($("#s1").attr('checked', 'checked')){
		$("#s1").change(function(){
			$("#contentP").hide();
			$("#left-arrow").hide();
			var a = "";			
			if($("#s1").val() == "tüm şehirler"){
				a = "all";
			}else{
				a = $("#s1").val();
			}
			
			$("#main #icerik").empty();
			$.get("http://tesakaucuk.com/api.php",{"param":a},function(jsonVerisi){
				var obj = jQuery.parseJSON(jsonVerisi);
				$.each(obj,function(){
					$("#main #icerik").append('<li class="list-group-item" id="'+this.id+'"><h3>'+this.baslik+'</h3></br><img class="rounded" src="'+this.foto+'" style="width:100%"></br></br><p id="collapse'+this.id+'" class="panel-collapse collapse">'+this.aciklama+'</p><p id="collapse'+this.id+'" class="panel-collapse collapse"><b>Adres:</b> '+this.adres+'</p><nav class="navbar navbar-dark bg-dark"><button href="#collapse'+this.id+'" class="navbar-toggler" data-toggle="collapse"><span class="navbar-toggler-icon"></span><button type="button" onClick="favEkle('+this.id+')" class="btn btn-outline-success">Takip Listeme Ekle</button></button></nav></li>');
				});
				// Grab whatever we need to paginate
				var pageParts = $(".list-group-item");			
				// How many parts do we have?
				var numPages = pageParts.length;
				// How many parts do we want per page?
				var selectValue = 15;
				var perPage = selectValue;
				var start = 0;
				var end = perPage;
				// When the document loads we're on page 1
				// So to start with... hide everything else
				$(pageParts).hide().slice(start, end).show();
				// Apply simplePagination to our placeholder
				$("#page-nav").pagination({
					items: numPages,
					itemsOnPage: perPage,				
					// We implement the actual pagination
					// in this next function. It runs on
					// the event that a user changes page
					onPageClick: function(pageNum) {
						// Which page parts do we show?
						var start = perPage * (pageNum - 1);
						var end = start + perPage;

						// First hide all page parts
						// Then show those just for our page
						$(pageParts).hide().slice(start, end).show();
						
						$("html, body").animate({ scrollTop: 0 }, "slow");
					}
				});
			});		
		});	
	}
	$("#left-arrow").hide();
	$("#contentP").hide();
	
	if($("#s2").attr('checked', 'checked')){
		$("#s2").change(function(){
			var b = "";			
			b = $("#s2").val();
			if($("#s2").val() == "bölge seçiniz"){
				 $('#contentP').text('Sol menüden şehir ya da bölge seçiniz.');
				 $('#contentP').attr("class","alert alert-primary");
				 $("#contentP").show();
				 $("#left-arrow").show();				 
				 $(".ui-input-search").hide();
				 $(".simple-pagination").hide();
			}
			$("#main #icerik").empty();
			if($("#s2").val() != "bölge seçiniz"){
				$.get("http://tesakaucuk.com/api.php",{"getBolge":b},function(jsonVerisi){
					var obj = jQuery.parseJSON(jsonVerisi);
					$.each(obj,function(){
						$("#main #icerik").append('<li class="list-group-item" id="'+this.id+'"><h3>'+this.baslik+'</h3></br><img class="rounded" src="'+this.foto+'" style="width:100%"></br></br><p id="collapse'+this.id+'" class="panel-collapse collapse">'+this.aciklama+'</p><p id="collapse'+this.id+'" class="panel-collapse collapse"><b>Adres:</b> '+this.adres+'</p><nav class="navbar navbar-dark bg-dark"><button href="#collapse'+this.id+'" class="navbar-toggler" data-toggle="collapse"><span class="navbar-toggler-icon"></span><button type="button" onClick="favEkle('+this.id+')" class="btn btn-outline-success">Takip Listeme Ekle</button></button></nav></li>');
					});
					// Grab whatever we need to paginate
					var pageParts = $(".list-group-item");			
					// How many parts do we have?
					var numPages = pageParts.length;
					// How many parts do we want per page?
					var selectValue = 15;
					var perPage = selectValue;
					var start = 0;
					var end = perPage;
					// When the document loads we're on page 1
					// So to start with... hide everything else
					$(pageParts).hide().slice(start, end).show();
					// Apply simplePagination to our placeholder
					$("#page-nav").pagination({
						items: numPages,
						itemsOnPage: perPage,				
						// We implement the actual pagination
						// in this next function. It runs on
						// the event that a user changes page
						onPageClick: function(pageNum) {
							// Which page parts do we show?
							var start = perPage * (pageNum - 1);
							var end = start + perPage;

							// First hide all page parts
							// Then show those just for our page
							$(pageParts).hide().slice(start, end).show();
							
							$("html, body").animate({ scrollTop: 0 }, "slow");
						}
					});
				});
			}				
		});			
	}
	
	function getSehir(){
		$.get("http://tesakaucuk.com/api.php",{"sehir":"sehir"},function(sehir){				
			var sobj = jQuery.parseJSON(sehir);
			$.each(sobj,function(){
				$("#main #s1").append('<option class="selectFont">'+this.sehir+'</option>');
			});
		});
	}
	
	function getBolge(){
		$.get("http://tesakaucuk.com/api.php",{"bolge":"bolge"},function(bolge){				
			var sobj = jQuery.parseJSON(bolge);
			$.each(sobj,function(){
				$("#main #s2").append('<option class="selectFont">'+this.bolge+'</option>');
			});
		});
	}

	$('#smenu1 input:radio').click(function() {
		$("#s2").selectmenu("disable");
		$("#s1").selectmenu("enable");
		$('#s2').val("bölge seçiniz");
		$('#s2').selectmenu("refresh");
	});
	$('#smenu2 input:radio').click(function() {
		$("#s1").selectmenu("disable");
		$("#s2").selectmenu("enable");
		$('#s1').val("tüm şehirler");
		$('#s1').selectmenu("refresh");
	});
	$(".list").click(function(){
		$.mobile.changePage( "index.html#list", { transition: "slideup"});
	});
	$(".main").click(function(){
		$.mobile.changePage( "index.html#main", { transition: "slideup"});
	});
});

$(document).on("pagebeforeshow","#list",function(){	
    var favListe = "";
	var favs = JSON.stringify(localStorage.getItem("favs"));
	var favsr = favs.replace(/[\])}[{(]/g, ''); //regex
	var favsrr = favsr.replace(/["']/g, "");
	$.get("http://tesakaucuk.com/api.php",{"id":favsrr,},function(fav){
		if(favsrr.length > 0 && favsrr != "null" ){
		var data = JSON.parse(fav);
		console.log(data);
		$.each(data,function(){
			favListe+='<li class="list-group-item" id="'+this.id+'"><h3>'+this.baslik+'</h3></br><img class="rounded" src="'+this.foto+'" style="width:100%"></br></br><p id="collapse'+this.id+'" class="panel-collapse collapse">'+this.aciklama+'</p><p id="collapse'+this.id+'" class="panel-collapse collapse"><b>Adres:</b> '+this.adres+'</p><nav class="navbar navbar-dark bg-dark"><button href="#collapse'+this.id+'" class="navbar-toggler" data-toggle="collapse"><span class="navbar-toggler-icon"></span><button type="button" onClick="favSil('+this.id+')" class="btn btn-outline-danger">Takip Listemden Çıkar</button></button></nav></li>';	
		});
		$("#list #favList").html(favListe);
		$(".ui-input-search").show();
		}else{
			favListe = '<p class="alert alert-danger">Listeniz boş.</p>';
			$("#list #favList").html(favListe);
			$(".ui-input-search").hide();
		}
	});  
});

var favs = [];
if(localStorage.getItem("favs")){
	favs = JSON.parse(localStorage.getItem("favs"));
}
function favEkle(k){
	favs.push(k); 
	var uniqueNames = [];
	$.each(favs, function(i, el){
        if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });
    favs = uniqueNames;
    localStorage.setItem("favs",JSON.stringify(favs));
    console.log(favs);
	var title="";
	var btnName = "kampBul";
	var mesaj = "Kamp yeri, listenize eklendi.";
	navigator.notification.alert(mesaj,title,btnName);
}
function favSil(k){
	//favs.splice( favs.indexOf(k), 1 ); 
	var index = favs.indexOf(k);
	if (index > -1) { // eğer hiç değer dönmezse indexOf -1 değerini döndürür.
	  favs.splice(index, 1);
	}
	localStorage.setItem("favs",JSON.stringify(favs));
	console.log(favs);
	refreshPage();
	var title="";
	var btnName = "kampBul";
	var mesaj = "Kamp yeri, listenizden çıkarıldı.";
	navigator.notification.alert(mesaj,title,btnName);
}
function refreshPage(){
   $(":mobile-pagecontainer").pagecontainer("change", "#list", {
		allowSamePageTransition: true,
		transition: "fade"
    });       
}

function initApp() {
admob.banner.config({
 id: 'ca-app-pub-4755017593405657/2251976989',
 isTesting: false,
})

admob.banner.prepare()

admob.banner.show()
}

if(( /(android)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}