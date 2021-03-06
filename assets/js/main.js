function initMap() {
    var locations = [
    ['Lucky Star Resturant', 18.41945, -64.61857, 4, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Simply Delicious', 18.42215,-64.61852, 5, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Sweet and Savoury', 18.42082, -64.61808, 3, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['A taste of india Restaurant',18.41902, -64.61858, 2, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Marias By The Sea Hotel', 18.42090, -64.61671, 1, "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(18.42090, -64.61671),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: locations[i][4],
        title: locations[i][0],
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
    }

    var locations1 = [
    ['Coffee n Cream Restaurant & Lounge', 18.51449, -77.88126, 4, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Mystic India Restaurant', 18.51501,-77.88083, 5, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Sunrise Catering and Fine Foods', 18.51436, -77.88057, 3, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Spiritiz of Montego Bay Restaurant',18.50767, -77.89627, 2, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Hotel Riu Montego Bay', 18.5166, -77.8828, 1, "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
    ];

    var map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 14,
    center: new google.maps.LatLng(18.5166, -77.8828),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations1.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations1[i][1], locations1[i][2]),
        icon: locations1[i][4],
        title: locations1[i][0],
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations1[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
    }

    var locations2 = [
    ['De Shak Grill & Bar', 13.06690, -59.57124, 4, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Sea Fans Beach Bar and Restaurant', 13.0667,-59.56879, 5, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Jade Gardens Chinese Restaurant', 13.06742, -59.56953, 3, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Steak House Grill & St. Lawrence Pizza Hut',13.06746, -59.56937, 2, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Dover Beach Hotel', 13.06483, -59.56479, 1, "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
    ];

    var map = new google.maps.Map(document.getElementById('map2'), {
    zoom: 15,
    center: new google.maps.LatLng(13.06483, -59.56479),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations2.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations2[i][1], locations2[i][2]),
        icon: locations2[i][4],
        title: locations2[i][0],
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations2[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
    }

    var locations3 = [
    ['Steak Social', 19.33123, -81.38091, 4, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Luca Italian Restaurant',  19.33131, -81.38153, 5, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Canton Shinese Restaurant', 19.33183, -81.38095, 3, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Spanish Travelers Cuisine & Bar', 19.33182, -81.38067, 2, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    [' The Westin Grand Cayman Seven Mile Beach Resort & Spa', 19.3394, -81.3810, 1, "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
    ];

    var map = new google.maps.Map(document.getElementById('map3'), {
    zoom: 15,
    center: new google.maps.LatLng(19.3394, -81.3810),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations3.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations3[i][1], locations3[i][2]),
        icon: locations3[i][4],
        title: locations3[i][0],
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations3[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
    }

     var locations4 = [
    ['4 Senses Restaurant', 14.60218, -61.07293, 4, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Sri Ganesha Indian Restaurant',  14.60221, -61.07274, 5, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Restaurants Bar La Croisiere', 14.60360, -61.07242, 3, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Le Bristrot des Flamands Restaurant', 14.60232, -61.07284, 2, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Simon', 14.60223, -61.07278, 1, "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
    ];

    var map = new google.maps.Map(document.getElementById('map4'), {
    zoom: 15,
    center: new google.maps.LatLng(14.60223, -61.07278),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations4.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations4[i][1], locations4[i][2]),
        icon: locations4[i][4],
        title: locations4[i][0],
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations4[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
    }

     var locations5 = [
    ['Hung paradise Restaurant', 12.51684, -70.03688, 4, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['The Dutch Pancakehouse Restaurant',  12.51650, -70.03723, 5, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Hopi Bon Grill Restaurant', 12.51682, -70.03713, 3, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['One Happy Bowl Healthy Food Cafe', 12.51685, -70.03708, 2, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Renaissance Ocean Suites Restaurant', 12.51590, -70.03655, 1, "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
    ];

    var map = new google.maps.Map(document.getElementById('map5'), {
    zoom: 15,
    center: new google.maps.LatLng(12.51590, -70.03655),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations5.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations5[i][1], locations5[i][2]),
        icon: locations5[i][4],
        title: locations5[i][0],
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations5[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
}

 var locations6 = [
    ['Chefs BBQ', 11.15782, -60.83649, 4, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Arabian Delight Resturant & Bar',  11.15784, -60.83629, 5, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Jade Monkey Casino Bar and Grill', 11.15729, -60.83706, 3, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Cafe Coco', 11.15823, -60.83729, 2, "http://maps.google.com/mapfiles/ms/micons/green.png"],
    ['Coco Reef Resort & Spa', 11.15763, -60.83876, 1, "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"]
    ];

    var map = new google.maps.Map(document.getElementById('map6'), {
    zoom: 15,
    center: new google.maps.LatLng(11.15763, -60.83876 ),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations6.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations6[i][1], locations6[i][2]),
        icon: locations6[i][4],
        title: locations6[i][0],
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locations6[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
}
}