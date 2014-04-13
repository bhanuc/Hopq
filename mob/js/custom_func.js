var data = {
	rajiv_chowk : 
                {
		rajiv_chowk:8,
		patel_chowk:8,
		cental_secretariat:10,
		udyog_bhawan:10,
		race_course:12,
		jor_bagh:12,
		ina:15,
		aiims:15,
		green_park:15,
		hauz_khas:16,
		malviya_nagar:16,
		saket:18,
		qutab_minar:18	
		},
	patel_chowk : 
                {
		rajiv_chowk:8,
		patel_chowk:8,
		cental_secretariat:8,
		udyog_bhawan:8,
		race_course:10,
		jor_bagh:12,
		ina:12,
		aiims:15,
		green_park:15,
		hauz_khas:15,
		malviya_nagar:16,
		saket:16,
		qutab_minar:18	
		},
	cental_secretariat : 
                {
		rajiv_chowk:8,
		patel_chowk:8,
		cental_secretariat:8,
		udyog_bhawan:8,
		race_course:8,
		jor_bagh:10,
		ina:12,
		aiims:12,
		green_park:15,
		hauz_khas:15,
		malviya_nagar:16,
		saket:16,
		qutab_minar:18	
		},
	udyog_bhawan : 
                {
		rajiv_chowk:10,
		patel_chowk:8,
		cental_secretariat:8,
		udyog_bhawan:8,
		race_course:8,
		jor_bagh:10,
		ina:10,
		aiims:12,
		green_park:12,
		hauz_khas:15,
		malviya_nagar:16,
		saket:16,
		qutab_minar:18	
		},
	race_course : 
                {
		rajiv_chowk:12,
		patel_chowk:10,
		cental_secretariat:8,
		udyog_bhawan:8,
		race_course:8,
		jor_bagh:10,
		ina:10,
		aiims:10,
		green_park:12,
		hauz_khas:15,
		malviya_nagar:15,
		saket:15,
		qutab_minar:16	
		},
	jor_bagh : 
                {
		rajiv_chowk:12,
		patel_chowk:12,
		cental_secretariat:10,
		udyog_bhawan:10,
		race_course:8,
		jor_bagh:10,
		ina:8,
		aiims:10,
		green_park:10,
		hauz_khas:12,
		malviya_nagar:15,
		saket:15,
		qutab_minar:16	
		},
	ina : 
                {
		rajiv_chowk:15,
		patel_chowk:12,
		cental_secretariat:12,
		udyog_bhawan:10,
		race_course:10,
		jor_bagh:8,
		ina:8,
		aiims:8,
		green_park:8,
		hauz_khas:10,
		malviya_nagar:12,
		saket:15,
		qutab_minar:15	
		},
	aiims: 
                {
		rajiv_chowk:15,
		patel_chowk:15,
		cental_secretariat:12,
		udyog_bhawan:12,
		race_course:10,
		jor_bagh:10,
		ina:8,
		aiims:8,
		green_park:8,
		hauz_khas:10,
		malviya_nagar:12,
		saket:12,
		qutab_minar:15	
		},
	green_park: 
                {
		rajiv_chowk:15,
		patel_chowk:15,
		cental_secretariat:15,
		udyog_bhawan:12,
		race_course:12,
		jor_bagh:10,
		ina:8,
		aiims:8,
		green_park:8,
		hauz_khas:8,
		malviya_nagar:10,
		saket:12,
		qutab_minar:15	
		},
	hauz_khas: 
                {
		rajiv_chowk:16,
		patel_chowk:15,
		cental_secretariat:15,
		udyog_bhawan:15,
		race_course:15,
		jor_bagh:12,
		ina:10,
		aiims:8,
		green_park:8,
		hauz_khas:8,
		malviya_nagar:8,
		saket:10,
		qutab_minar:12	
		},		
	malviya_nagar: 
                {
		rajiv_chowk:16,
		patel_chowk:16,
		cental_secretariat:16,
		udyog_bhawan:16,
		race_course:15,
		jor_bagh:15,
		ina:12,
		aiims:12,
		green_park:10,
		hauz_khas:8,
		malviya_nagar:8,
		saket:10,
		qutab_minar:12	
		},
	saket: 
                {
		rajiv_chowk:18,
		patel_chowk:16,
		cental_secretariat:16,
		udyog_bhawan:16,
		race_course:15,
		jor_bagh:15,
		ina:15,
		aiims:12,
		green_park:12,
		hauz_khas:10,
		malviya_nagar:8,
		saket:8,
		qutab_minar:8	
		},
	qutab_minar: 
                {
		rajiv_chowk:18,
		patel_chowk:18,
		cental_secretariat:18,
		udyog_bhawan:18,
		race_course:16,
		jor_bagh:16,
		ina:15,
		aiims:15,
		green_park:15,
		hauz_khas:12,
		malviya_nagar:10,
		saket:8,
		qutab_minar:8	
		},
}

var curr_book = {};

//create confirmation text function

function c_con_text(){
	curr_book = {};
	var destination = curr_book.destination = $('#destin').val();
	var origin = curr_book.origin = $('#origin').val();
	curr_book.cost = data[origin][destination];
	console.log(destination+ " "+ origin);
	$('#ticket_book').hide();
	$('#confirmation').show();
	$('#confirmation').html("<center>You have Entered : "+origin+" to "+destination+"<br><br>Your Fare is "+data[origin][destination]+"<br><button> <a class = 'button' onclick = create_ticket() >Continue </a> </button><br>or<center> <button><a class='button' onclick=cancel_ticket()> Cancel</a></button>");	

}	

function create_ticket(){
intel.xdk.device.showRemoteSite("http://162.222.183.55/"+"ticket/create?destination="+curr_book.destination+"&origin="+curr_book.origin,280,0,50,50);

}

function cancel_ticket(){
	$('#confirmation').html(" ");
	$('#ticket_book').show();
	curr_book = {};
}

function sucess(data){
	$('#qr_display').show(),
	 		$('#qr_display').html('<img src="data:image/svg;base64,' + data + '" />'); 
}
    $(document).ready(function(){
      $('#confirmation').hide();
      $('#qr_display').hide();
     // intel.xdk.device.hideSplashScreen();
    });
function random(){

	$.ajax({
	 	type: "GET",
	 	dataType: "xml",
	 	url:"http://162.222.183.55/"+"ticket/create?destination="+curr_book.destination+"&origin="+curr_book.origin,
	 	contentType: "image/svg",
        beforeSend: function(jqXHR, settings){
        jqXHR.setRequestHeader('X-requested-With', 'XMLHttpRequest');
        },
        crossDoamin: false,
	 	success: function(data){
	 		success(data);
	 	}
 } );
}

var onDeviceReady=function(){

//hide splash screen
intel.xdk.device.hideSplashScreen();	

};