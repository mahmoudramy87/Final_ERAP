var map;
var latitude;
var longitude;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var endLatitude;
var endLangitude;

var hospitalGeo = {
	El_Zohour_Hospital: [31.254169, 29.995143],
	El_Salam_Hospital: [31.201930, 29.910054],
	El_Madina_El_Tebbeya_Hospital: [31.224654, 29.945972],
	Faculty_of_Medicine_Alexandria_University: [31.202259, 29.906217],
	Alex_Specialized_Hospital: [31.230745, 29.951032],
	Royal_Hospital: [31.224216, 29.949448],
	Alexandria_International_Hospital: [31.215849, 29.941804],
	El_Shatby_University: [31.209685, 29.911337],
	Victoria_Hospital: [31.243767, 29.982048],
	Louran_Hospital: [31.247227, 29.974124],
	El_Thagher_Specialized_Hospital: [31.246589, 29.980024],
	El_Mowasah_University_Hospital: [31.203148, 29.927287],
	The_Coptic_Hospital: [31.192928, 29.915774],
	New_Nozha_Hospital: [31.195251, 29.916725],
	El_Gomhoreya_Public_Hospital: [31.181901, 29.904746],
	General_Alexandria_Hospital: [31.198461, 29.925049],
	Nariman_Public_Hospital: [31.198326, 29.923190],
	Mabaret_Alasafra_Hospital: [31.272067, 30.006963],
	Agial_Hospital: [31.230001, 29.949282],
	German_Hospital: [31.237034, 29.957633],
	El_Helal_El_Ahmar_Hospital: [31.231988, 29.970331]
};

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	
	var mapOptions = {
		zoom : 12,
		center: new google.maps.LatLng(31.228184, 29.952096)
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	// El Zohour Hospital Marker
	var contentString1 = 
		'<h1> <b>El Zohour Hospital</b> </h1> </br>' +
		'<p><ul>'+ 
		'<li> Address: Sidi Beshr Qebli, Qesm Al Montazah, Alexandria, Egypt</l>' +
		'<li> Phone Number: 03-5252201 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoZohour = new google.maps.InfoWindow({ content: contentString1 });
	var hZohour = new google.maps.LatLng(31.254169, 29.995143);
	var marker1 = new google.maps.Marker({
		position: hZohour,
		map: map,
		title:"El Zohour Hospital"
	});
	google.maps.event.addListener(marker1, 'click', function() {
		infoZohour.open(map,marker1);
	});
	// End of El Zohour Hospital Marker

	// El Salam Hospital Marker
	var contentString2 = 
		'<h1> <b>El Salam Hospital</b> </h1> </br>'+
		'<p><ul>'+ 	
		'<li> Address: Bab Sharqi WA Wabour Al Meyah, Qesm Bab Sharqi, Alexandria, Egypt</li>'+
		'<li> Phone Number: 03-4871948 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoSalam = new google.maps.InfoWindow({ content: contentString2 });
	var hSalam = new google.maps.LatLng(31.201930, 29.910054);
	var marker2 = new google.maps.Marker({
		position: hSalam,
		map: map,
		title:"El Salam Hospital"
	});
	google.maps.event.addListener(marker2, 'click', function() {
		infoSalam.open(map,marker2);
	});	
 	// End of El Salam Hospital Marker

	// El Madina El Tebbeya Hospital Marker
	var contentString3 = 
		'<h1> <b>El Madina El Tebbeya Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address: Mustafa Kamel WA Bolkli, Qesm Sidi Gaber, Alexandria, Egypt</li>'+
		'<li> Phone Number: 03-5433505 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoMadinaTebbeya = new google.maps.InfoWindow({ content: contentString3 });
	var hMadinaTebbeya = new google.maps.LatLng(31.224654, 29.945972);
	var marker3 = new google.maps.Marker({
		position: hMadinaTebbeya,
		map: map,
		title:"El Madina El Tebbeya Hospital"
	});
	google.maps.event.addListener(marker3, 'click', function() {
		infoMadinaTebbeya.open(map,marker3);
	});
	// End of El Madina El Tebbeya Hospital Marker

	// Faculty of Medicine Alexandria University Marker
	var contentString4 = 
		'<h1> <b> Faculty of Medicine Alexandria University Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address: Alexandria, Al Mesallah Sharq, Qesm Al Attarin, Alexandria, Egypt</li>'+
		'<li> Phone Number: 03-4862-920, 03-4862-929, 03-4862-928, 03-4861-129 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';

	var infoFMA = new google.maps.InfoWindow({ content: contentString4 });	
	var hFacultyOfMedicineAlexandriaUniversity = new google.maps.LatLng(31.202259, 29.906217);
	var marker4 = new google.maps.Marker({
		position: hFacultyOfMedicineAlexandriaUniversity,
		map: map,
		title:"Faculty of Medicine Alexandria University"
	});
	google.maps.event.addListener(marker4, 'click', function() {
		infoFMA.open(map,marker4);
	});
	// End of Faculty of Medicine Alexandria University Marker

	// Alex Specialized Hospital Marker
	var contentString5 = 
		'<h1> <b>El Alex Specialized Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address: 12 ش رشدى تقاطع ش عبد الحميد العبادى, رشدى, الاسكندرية</li>'+
		'<li> Phone Number: 03-5460130 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoAlexSpecialized = new google.maps.InfoWindow({ content: contentString5 });	
	var hAlexSpecialized = new google.maps.LatLng(31.230745, 29.951032);
	var marker5 = new google.maps.Marker({
		position: hAlexSpecialized,
		map: map,
		title:"Alex Specialized Hospital"
	});
	google.maps.event.addListener(marker5, 'click', function() {
		infoAlexSpecialized.open(map,marker5);
	});
	// End of Alex Specialized Hospital Marker

	// Royal Hospital marker
	var contentString6 = 
		'<h1> <b>Royal Hospital</b> </h1> </br>'+
		'<p> <ul>'+
		'<li> Phone Number: 03 5223077 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoRoyal = new google.maps.InfoWindow({ content: contentString6 });	
	var hRoyalHospital = new google.maps.LatLng(31.224216, 29.949448);
	var marker6 = new google.maps.Marker({
		position: hRoyalHospital,
		map: map,
		title:"Royal Hospital"
	});
	google.maps.event.addListener(marker6, 'click', function() {
		infoRoyal.open(map,marker6);
	});
	// End of Royal Hospital Marker

	// Alexandria International Hospital Marker
	var contentString7 = 
		'<h1> <b> Alexandria International Hospital</b> </h1> </br>'+
		'<p><ul>' + 	
		'<li> Address:  20 شارع محمد بهاء الدين سموحة </li>'+
		'<li> Phone Number: 03 4207247 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoAlexInternational = new google.maps.InfoWindow({ content: contentString7 });	
	var hAlexandriaInternational = new google.maps.LatLng(31.215849, 29.941804);
	var marker7 = new google.maps.Marker({
		position: hAlexandriaInternational,
		map: map,
		title:"Alexandria International Hospital"
	});
	google.maps.event.addListener(marker7, 'click', function() {
		infoAlexInternational.open(map,marker7);
	});
	// End of Alexandria International Hospital Marker
	
	// El Shatby University Hospital Marker
	var contentString8 = 
		'<h1> <b> El Shatby University Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  El-Gaish Rd, Al Azaritah WA Ash Shatebi, Qesm Bab Sharqi, 			Alexandria, Egypt </li>'+
		'<li> Phone Number: 4872950 </li>'+
		'<li> Specialized: نساء و توليد </li>'+
		'</ul></p>';
	var infoShatbyUniversity = new google.maps.InfoWindow({ content: contentString8 });	
	var hShatbyUniversity = new google.maps.LatLng(31.209685, 29.911337);
	var marker8 = new google.maps.Marker({
		position: hShatbyUniversity,
		map: map,
		title:"El Shatby University Hospital"
	});
	google.maps.event.addListener(marker8, 'click', function() {
		infoShatbyUniversity.open(map,marker8);
	});
	// End of El Shatby University Hospital Marker

	// Victoria Hospital Marker
	var contentString9 = 
		'<h1> <b> Victoria Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address: Fleb Glad, Al Qasaei Qebli, Qesm AR Ramel, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 5776774 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoShatbyUniversity = new google.maps.InfoWindow({ content: contentString9 });	
	var hVictoria = new google.maps.LatLng(31.243767, 29.982048);
	var marker9 = new google.maps.Marker({
		position: hVictoria,
		map: map,
		title:"Victoria Hospital"
	});
	google.maps.event.addListener(marker9, 'click', function() {
		infoShatbyUniversity.open(map,marker9);
	});
	// End of Victoria Hospital Marker
	
	// Louran Hospital Marker
	var contentString10 = 
		'<h1> <b> Louran Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  St. - Louran, 13 Shaarawy, San Stifano, Qesm AR Ramel, Alexandria, Egypt</li>'+
		'<li> Phone Number: 19152 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoLouran = new google.maps.InfoWindow({ content: contentString10 });	
	var hLouran = new google.maps.LatLng(31.247227, 29.974124);
	var marker10 = new google.maps.Marker({
		position: hLouran,
		map: map,
		title:"Louran Hospital"
	});
	google.maps.event.addListener(marker10, 'click', function() {
		infoLouran.open(map,marker10);
	});
	// End of Louran Hospital Marker

	// El Thagher Specialized Hospital marker
	var contentString11 = 
		'<h1> <b> El Thagher Specialized Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Al Qasaei Qebli, Qesm AR Ramel, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 5770529 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoThagher = new google.maps.InfoWindow({ content: contentString11 });	
	var hThagherSpecialized = new google.maps.LatLng(31.246589, 29.980024);
	var marker11 = new google.maps.Marker({
		position: hThagherSpecialized,
		map: map,
		title:"El Thagher Specialized Hospital"
	});
	google.maps.event.addListener(marker11, 'click', function() {
		infoThagher.open(map,marker11);
	});
	// End of El Thagher Specialize Hospital Marker
	
	// El Mowasah University Hospital Marker
	var contentString12 = 
		'<h1> <b> El Mowasah University Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Fahmy Abdel Magid St.، EL HADARA، Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 4282888 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoMowasahUni = new google.maps.InfoWindow({ content: contentString12 });	
	var hMowasahUniversity = new google.maps.LatLng(31.203148, 29.927287);
	var marker12 = new google.maps.Marker({
		position: hMowasahUniversity,
		map: map,
		title:"El Mowasah University Hospital"
	});
	google.maps.event.addListener(marker12, 'click', function() {
		infoMowasahUni.open(map,marker12);
	});
	// End of El Mowasah University Hospital Marker

	// The Coptic Hospital Marker
	var contentString13 = 
		'<h1> <b> The Coptic Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Emberouz WA Moharram Beik, Qesm Moharram Beik, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 3921402 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoCoptic = new google.maps.InfoWindow({ content: contentString13 });	
	var hCoptic = new google.maps.LatLng(31.192928, 29.915774);
	var marker13 = new google.maps.Marker({
		position: hCoptic,
		map: map,
		title:"The Coptic Hospital"
	});
	google.maps.event.addListener(marker13, 'click', function() {
		infoCoptic.open(map,marker13);
	});
	// End of Coptic Hospital Marker
	
	// New Nozha Hospital Marker
	var contentString14 = 
		'<h1> <b> New Nozha Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Emberouz WA Moharram Beik, Qesm Moharram Beik, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 4965111 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoNewNozha = new google.maps.InfoWindow({ content: contentString14 });	
	var hNewNozha = new google.maps.LatLng(31.195251, 29.916725);
	var marker14 = new google.maps.Marker({
		position: hNewNozha,
		map: map,
		title:"New Nozha Hospital"
	});
	google.maps.event.addListener(marker14, 'click', function() {
		infoNewNozha.open(map,marker14);
	});
	// End of New Nozha Hospital Marker
	
	// El Gomhoreya Public Hospital Marker
	var contentString15 = 
		'<h1> <b> El Gomhoreya Public Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Noubar, Qesm Karmouz, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 3608027 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoGP = new google.maps.InfoWindow({ content: contentString15 });	
	var hGomhoreyaPublic = new google.maps.LatLng(31.181901, 29.904746);
	var marker15 = new google.maps.Marker({
		position: hGomhoreyaPublic,
		map: map,
		title:"El Gomhoreya Public Hospital"
	});
	google.maps.event.addListener(marker15, 'click', function() {
		infoGP.open(map,marker15);
	});
	// End of El Gomhoreya Public Hospital Marker
	
	// General Alexandria Hospital Marker
	var contentString16 = 
		'<h1> <b> General Alexandria Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Al Hadrah, Bab Sharqi WA Wabour Al Meyah, Qesm Bab Sharqi, Alexandria, 			Egypt </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoGeneralAlex = new google.maps.InfoWindow({ content: contentString16 });	
	var hGeneralAlxandria = new google.maps.LatLng(31.198461, 29.925049);
	var marker16 = new google.maps.Marker({
		position: hGeneralAlxandria,
		map: map,
		title:"General Alxandria Hospital"
	});
	google.maps.event.addListener(marker16, 'click', function() {
		infoGeneralAlex.open(map,marker16);
	});
	// End of General Alexandria Hospital Marker
	
	// Nariman Public Hospital Marker
	var contentString17 = 
		'<h1> <b> Nariman Public Hospital</b> </h1> </br>'+
		'<p> <ul>'+
		'<li> Address:  Bab Sharqi WA Wabour Al Meyah, Qesm Bab Sharqi, Alexandria, Egypt </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoNarimanP = new google.maps.InfoWindow({ content: contentString17 });	
	var hNarimanPublic = new google.maps.LatLng(31.198326, 29.923190);
	var marker17 = new google.maps.Marker({
		position: hNarimanPublic,
		map: map,
		title:"Nariman Public Hospital"
	});
	google.maps.event.addListener(marker17, 'click', function() {
		infoNarimanP.open(map,marker17);
	});
	// End of Nariman Public Hospital Marker

	// Mabaret Alasafra Hospital marker
	var contentString18 = 
		'<h1> <b> Mabaret Alasafra Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Al Mandarah Bahri, Qesm Al Montazah, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 5551612 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoMabaretAsafra = new google.maps.InfoWindow({ content: contentString18 });	
	var hMabaretAlasafra = new google.maps.LatLng(31.272067, 30.006963);
	var marker18 = new google.maps.Marker({
		position: hMabaretAlasafra,
		map: map,
		title:"Mabaret Alasafra Hospital"
	});
	google.maps.event.addListener(marker18, 'click', function() {
		infoMabaretAsafra.open(map,marker18);
	});
	// End of Mabaret Alasafra Hospital Marker

	// Agial Hospital Marker
	var contentString19 = 
		'<h1> <b> Agial Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Khalf Fared Lyan, Mustafa Kamel WA Bolkli, Qesm Sidi Gaber, Alexandria, 		Egypt </li>'+
		'<li> Phone Number: 03 5234235 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoAgial = new google.maps.InfoWindow({ content: contentString19 });	
	var hAgial = new google.maps.LatLng(31.230001, 29.949282);
	var marker19 = new google.maps.Marker({
		position: hAgial,
		map: map,
		title:"Agial Hospital"
	});
	google.maps.event.addListener(marker19, 'click', function() {
		infoAgial.open(map,marker19);
	});
	// End of Agial Hospital Marker
	
	// German Hospital marker
	var contentString20 = 
		'<h1> <b> German Hospital</b> </h1> </br>'+
		'<p> <ul>'+ 	
		'<li> Address:  Fleming, Qesm AR Ramel, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 5841717 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoGerman = new google.maps.InfoWindow({ content: contentString20 });	
	var hGerman = new google.maps.LatLng(31.237034, 29.957633);
	var marker20 = new google.maps.Marker({
		position: hGerman,
		map: map,
		title:"German Hospital"
	});
	google.maps.event.addListener(marker20, 'click', function() {
		infoGerman.open(map,marker20);
	});
	// End of German Hopsital Marker
	
	// El Helal El Ahmar Hospital Marker
	var contentString21 = 
		'<h1> <b> El Helal El Ahmar Hospital</b> </h1> </br>'+
		'<p><ul>'+ 	
		'<li> Address:  Zaarbana WA Al Hamam, Qesm AR Ramel, Alexandria, Egypt </li>'+
		'<li> Phone Number: 03 5030230 </li>'+
		'<li> Specialized: All Specialization </li>'+
		'</ul></p>';
	var infoHelalAhmar = new google.maps.InfoWindow({ content: contentString21 });	
	var hHelalElAhmar = new google.maps.LatLng(31.231988, 29.970331);
	var marker21 = new google.maps.Marker({
		position: hHelalElAhmar,
		map: map,
		title:"El Helal El Ahmar Hospital"
	});
	google.maps.event.addListener(marker21, 'click', function() {
		infoHelalAhmar.open(map,marker21);
	});
	// End of El Helal El Ahmar Hopsital Marker
	directionsDisplay.setMap(map);
	geoFindMe();
}
// End of Initialize Function

// Find your Geolocation Function
function geoFindMe() {
	if (!navigator.geolocation){
  		alert("Browser Doesn't Support Geolocation");
  	}
	
	function success(position) {
    	latitude  = position.coords.latitude;
    	longitude = position.coords.longitude;
  	};
  	
  	function error() {
    	alert("Unable to Retrieve your location");
  	};

  	navigator.geolocation.getCurrentPosition(success, error);
}
// End of Geolocation Function

// Calculate Route Function
function calcRoute() {
	var start = new google.maps.LatLng(latitude, longitude);
  	var hospital = document.getElementById('hospital').value;
  	endLatitude = hospitalGeo[hospital][0];
  	endLongitude = hospitalGeo[hospital][1];
  	var end = new google.maps.LatLng(endLatitude, endLongitude);
  	var request = {
      	origin:start,
      	destination:end,
      	travelMode: google.maps.TravelMode.DRIVING
  	};
  	directionsService.route(request, function(response, status) {
    	if (status == google.maps.DirectionsStatus.OK) {
      	directionsDisplay.setDirections(response);
    	}
  	});
}
// End of Calculate Route Function

google.maps.event.addDomListener(window, 'load', initialize);


