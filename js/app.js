$(document).ready(function(){

	// responsive nav
	var responsiveNav = $('#toggle-nav');
	var navBar = $('.nav-bar');

	responsiveNav.on('click',function(e){
		e.preventDefault();
		console.log(navBar);
		navBar.toggleClass('active')
	});

	// pseudo active
	if($('#docs').length){
		var sidenav = $('ul.side-nav').find('a');
		var url = window.location.pathname.split( '/' );
		var url = url[url.length-1];
		
		sidenav.each(function(i,e){
			var active = $(e).attr('href');

			if(active === url){
				$(e).parent('li').addClass('active');
				return false;
			}
		});
	}

	var options = {

		url: function(phrase) {
		return "https://site-capa.homolog.viajanet.com.br/resources/api/Autocomplete/"+ phrase +"";
		},
		dataType: "xml",
		minCharNumber: 3,
		xmlElementName: "Location",
		getValue: function(element) {
			return $(element).find("Name").text();
		},
		list: {
			match: {
				enabled: true
			}
		},
	  	requestDelay: 200

	};

	$("#validationCustom01").easyAutocomplete(options);

	var options = {

		url: function(phrase) {
		return "https://site-capa.homolog.viajanet.com.br/resources/api/Autocomplete/"+ phrase +"";
		},
		dataType: "xml",
		minCharNumber: 3,
		xmlElementName: "Location",
		getValue: function(element) {
			return $(element).find("Name").text();
		},
		list: {
			match: {
				enabled: true
			}
		},
	  	requestDelay: 200

	};

	$("#validationCustom02").easyAutocomplete(options);

});

hljs.configure({tabReplace: '  '});
hljs.initHighlightingOnLoad();

