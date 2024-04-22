(function(){
    // This dataset is licensed under the ODbL license; attribute tinyworldmap and OpenStreetMap
    let places = {"countries":[[0.396098,0.791666,"China",0],[0.379362,0.220984,"United States",0],[0.5069,0.827473,"Indonesia",0],[0.528861,0.352222,"Brazil",0],[0.26229,0.771515,"Russia",0],[0.382323,0.597014,"Turkey",1],[0.292197,0.540336,"Sweden",1],[0.146465,0.381076,"Greenland",0],[0.473208,0.522222,"Nigeria",1],[0.432331,0.216645,"Mexico",1],[0.455178,0.799903,"Vietnam",1],[0.583651,0.569421,"South Africa",1],[0.60389,0.319535,"Argentina",1],[0.284376,0.200023,"Canada",1],[0.571073,0.874319,"Australia",1],[0.440315,0.658344,"Oman",1],[0.508286,0.566173,"Congo",2],[0.436276,0.718522,"India",2],[0.411512,0.69791,"Pakistan",2],[0.390705,0.886776,"Japan",2],[0.424377,0.581299,"Egypt",2],[0.334053,0.529022,"Germany",2],[0.471483,0.607367,"Ethiopia",2],[0.368819,0.535206,"Italy",2],[0.488602,0.297476,"Colombia",2],[0.418928,0.508333,"Algeria",2],[0.373732,0.677647,"Uzbekistan",2],[0.519129,0.291539,"Peru",2],[0.478951,0.724205,"Sri Lanka",2],[0.347193,0.685495,"Kazakhstan",2],[0.434283,0.275464,"Cuba",2],[0.380987,0.490324,"Spain",3],[0.566634,0.338418,"Paraguay",2],[0.46129,0.253016,"El Salvador",2],[0.352438,0.788472,"Mongolia",2],[0.459357,0.459853,"Senegal",3],[0.260344,0.449706,"Iceland",2],[0.479461,0.917826,"Micronesia",2],[0.405096,0.320121,"Bermuda",2],[0.464286,0.84092,"Philippines",3],[0.403965,0.651568,"Iran",3],[0.353336,0.505245,"France",3],[0.317734,0.490898,"United Kingdom",3],[0.341349,0.586866,"Ukraine",3],[0.518164,0.599411,"Tanzania",3],[0.459043,0.581922,"Sudan",3],[0.495994,0.606754,"Kenya",3],[0.417736,0.733333,"Nepal",3],[0.402483,0.622708,"Iraq",3],[0.487294,0.784071,"Malaysia",3],[0.453962,0.633032,"Yemen",3],[0.37722,0.85302,"North Korea",3],[0.431373,0.836061,"Taiwan",3],[0.553552,0.629005,"Madagascar",3],[0.355821,0.568572,"Romania",3],[0.487173,0.536538,"Cameroon",3],[0.477734,0.484533,"Ivory Coast",3],[0.449928,0.5259,"Niger",3],[0.540769,0.576553,"Zambia",3],[0.453896,0.493639,"Mali",3],[0.503722,0.279537,"Ecuador",3],[0.548096,0.319469,"Bolivia",3],[0.382196,0.561077,"Greece",3],[0.456082,0.552821,"Chad",3],[0.399991,0.526111,"Tunisia",3],[0.445816,0.299008,"Haiti",3],[0.32378,0.576936,"Belarus",3],[0.377148,0.632742,"Azerbaijan",3],[0.409959,0.596832,"Israel",3],[0.515808,0.900691,"Papua New Guinea",3],[0.422609,0.550344,"Libya",3],[0.271403,0.572003,"Finland",3],[0.476135,0.274637,"Panama",3],[0.566383,0.54812,"Namibia",3],[0.307171,0.56876,"Latvia",3],[0.5025,0.532472,"Gabon",3],[0.469971,0.330322,"Trinidad and Tobago",3],[0.424684,0.640374,"Bahrain",3],[0.396158,0.59207,"Cyprus",3],[0.486535,0.337106,"Guyana",3],[0.534161,0.623009,"Comoros",3],[0.487728,0.818237,"Brunei",3],[0.546554,0.966964,"Vanuatu",3],[0.538622,0.021889,"Sāmoa",3],[0.499042,0.9824,"Kiribati",3],[0.512952,0.654039,"Seychelles",3],[0.456665,0.329541,"Dominica",3],[0.475563,0.969753,"Marshall Islands",3],[0.27867,0.480466,"Faroe Islands",3],[0.429841,0.750815,"Bangladesh",4],[0.458145,0.780091,"Thailand",4],[0.390485,0.854711,"South Korea",4],[0.329338,0.553151,"Poland",4],[0.49574,0.589491,"Uganda",4],[0.408791,0.479622,"Morocco",4],[0.400245,0.683996,"Afghanistan",4],[0.4777,0.316359,"Venezuela",4],[0.426323,0.617647,"Saudi Arabia",4],[0.554661,0.596985,"Mozambique",4],[0.397315,0.608471,"Syria",4],[0.466206,0.495311,"Burkina Faso",4],[0.593126,0.301892,"Chile",4],[0.537191,0.594251,"Malawi",4],[0.464876,0.791151,"Cambodia",4],[0.533232,0.548803,"Angola",4],[0.505458,0.583512,"Rwanda",4],[0.47004,0.470255,"Guinea",4],[0.476673,0.636343,"Somalia",4],[0.473407,0.506273,"Benin",4],[0.349293,0.539235,"Austria",4],[0.47807,0.582408,"South Sudan",4],[0.368936,0.570794,"Bulgaria",4],[0.383505,0.69671,"Tajikistan",4],[0.44323,0.787162,"Laos",4],[0.373046,0.707567,"Kyrgyzstan",4],[0.313024,0.528704,"Denmark",4],[0.28388,0.52441,"Norway",4],[0.455111,0.605555,"Eritrea",4],[0.38083,0.664979,"Turkmenistan",4],[0.49623,0.788387,"Singapore",4],[0.326373,0.477835,"Ireland",4],[0.431293,0.649999,"United Arab Emirates",4],[0.626922,0.980096,"New Zealand",4],[0.358283,0.543493,"Croatia",4],[0.314595,0.565972,"Lithuania",4],[0.414897,0.631939,"Kuwait",4],[0.596788,0.344388,"Uruguay",4],[0.442529,0.474334,"Mauritania",4],[0.448616,0.285015,"Jamaica",4],[0.566185,0.568314,"Botswana",4],[0.576579,0.58722,"Eswatini",4],[0.297204,0.570366,"Estonia",4],[0.557536,0.659918,"Mauritius",4],[0.524385,0.850176,"East Timor",4],[0.495518,0.529214,"Equatorial Guinea",4],[0.420342,0.751422,"Bhutan",4],[0.527174,0.952302,"Solomon Islands",4],[0.454966,0.43331,"Cape Verde",4],[0.393068,0.540132,"Malta",4],[0.489658,0.703401,"Maldives",4],[0.451719,0.25365,"Belize",4],[0.463147,0.334653,"Barbados",4],[0.366879,0.614528,"Abkhazia",4],[0.556471,0.013326,"Tonga",4],[0.342482,0.494067,"Jersey",4],[0.369187,0.50437,"Andorra",4],[0.475908,0.467111,"Sierra Leone",5],[0.374926,0.555555,"Albania",5],[0.466947,0.619015,"Djibouti",5],[0.352545,0.522867,"Switzerland",5],[0.364651,0.520632,"Monaco",5],[0.451561,0.766667,"Myanmar",5],[0.363027,0.557087,"Serbia",5],[0.350985,0.554184,"Hungary",5],[0.372407,0.622302,"Georgia",5],[0.464689,0.263073,"Nicaragua",5],[0.551206,0.997256,"Fiji",5],[0.477621,0.497,"Ghana",5],[0.329213,0.515651,"Netherlands",5],[0.552175,0.58263,"Zimbabwe",5],[0.336359,0.512963,"Belgium",5],[0.340249,0.542606,"Czechia",5],[0.509524,0.583146,"Burundi",5],[0.379801,0.477402,"Portugal",5],[0.457109,0.260901,"Honduras",5],[0.344515,0.554036,"Slovakia",5],[0.399887,0.599565,"Lebanon",5],[0.471308,0.266461,"Costa Rica",5],[0.480416,0.55555,"Central African Republic",5],[0.35055,0.579353,"Moldova",5],[0.502018,0.54345,"Congo",5],[0.484001,0.473984,"Liberia",5],[0.369013,0.558061,"Kosovo",5],[0.466945,0.45768,"Guinea-Bissau",5],[0.339939,0.517027,"Luxembourg",5],[0.428934,0.283333,"The Bahamas",5],[0.464995,0.305662,"Aruba",5],[0.45142,0.327901,"Antigua and Barbuda",5],[0.456163,0.24904,"Guatemala",5],[0.472848,0.627805,"Somaliland",5],[0.444633,0.276204,"Cayman Islands",5],[0.438162,0.301242,"Turks and Caicos Islands",5],[0.497302,0.519507,"São Tomé and Príncipe",6],[0.427217,0.642304,"Qatar",6],[0.445941,0.304714,"Dominican Republic",7],[0.372644,0.560325,"North Macedonia",6],[0.586157,0.578708,"Lesotho",6],[0.475515,0.502833,"Togo",6],[0.408811,0.602616,"Jordan",6],[0.362438,0.548878,"Bosnia and Herzegovina",6],[0.375772,0.624094,"Armenia",6],[0.355282,0.541154,"Slovenia",6],[0.462234,0.456972,"The Gambia",6],[0.488486,0.34423,"Suriname",6],[0.461219,0.330625,"Saint Lucia",6],[0.466034,0.328638,"Grenada",6],[0.320164,0.487336,"Isle of Man",6],[0.369914,0.622494,"South Ossetia",6],[0.367499,0.554217,"Montenegro",7],[0.463847,0.329787,"Saint Vincent and the Grenadines",7],[0.34148,0.492827,"Guernsey",7],[0.466086,0.308525,"Curacao",7],[0.395335,0.593403,"Northern Cyprus",8]],"cities":[],"paths":[]}

    // The rest of this file is licensed under the MIT license
    function drawPlaces(tile, coords, places, opts) {
    var ctx = tile.getContext('2d', {alpha: false});

    if (!places.path2ds)
        places.path2ds = places.paths.map(p => [new Path2D(p[0]), p[1]])

    let vwidth = 800, vheight = 800

    var size = {x: tile.width, y: tile.height};
    let margin1 = 2/size.x, margin2 = 35/size.x, margin3 = 50/size.x, N = Math.pow(2, coords.z);

    let lbound = coords.x / N, rbound = lbound + 1/N, tbound = coords.y / N, bbound = tbound + 1/N

    ctx.fillStyle = opts.backgroundColor || (places.path2ds.length ? "#aad3df" : 'white')
    ctx.fillRect(0, 0, size.x, size.y)

    ctx.translate(-size.x*coords.x, -size.x*coords.y)
    ctx.scale(size.x*N/vwidth,size.y*N/vheight)
    ctx.strokeStyle = opts.borderColor || '#b4a6ae'
    ctx.fillStyle = opts.borderFillColor || '#fdf9f1'
    ctx.lineWidth = (opts.borderWidth||4)/N
    ctx.lineJoin = 'round'

    let pathsToDraw = new Path2D()

    for (let [p, bounds] of places.path2ds) { // 60-100 fails
        if (!(bounds[0] > rbound || bounds[2] < lbound || bounds[1] > bbound || bounds[3] < tbound)) {
            pathsToDraw.addPath(p)
        }
    }

    if (opts.borderFillColor != 'transparent')
        ctx.fill(pathsToDraw)
    if (opts.borderStrokeColor != 'transparent')
        ctx.stroke(pathsToDraw)

    ctx.resetTransform()

    let dotColor = opts.dotColor || (places.path2ds.length ? 'transparent' : 'red')
    ctx.fillStyle = dotColor

    if (dotColor != 'transparent')
        for (let [yc, xc, name, zoom] of places.cities) {
            let y = yc * N - coords.y, x = xc * N - coords.x
            if (zoom > coords.z && y > -margin1 && y < 1+margin1 && x > -margin1 && x < 1+margin1) {
                let xS = size.x * x, yS = size.y * y
                ctx.fillRect(xS-1,yS-1,2,2)
            }
        }

    ctx.strokeStyle = opts.textStrokeColor || 'rgba(255,255,255,.8)'
    ctx.lineWidth = opts.textStrokeWidth || 3
    ctx.textAlign = 'center'
    ctx.fillStyle = opts.textFillColor || "black";
    ctx.font = opts.cityFont || '12px Arial, Helvetica, Ubuntu, sans-serif'

    for (let [yc, xc, name, zoom] of places.cities) {
        if (zoom > coords.z) continue

        let y = yc * N - coords.y, x = xc * N - coords.x
        if (y > -margin2 && y < 1+margin2 && x > -margin2 && x < 1+margin2) {

            let xS = size.x * x, yS = size.y * y
            ctx.strokeText(name, xS, yS, 70)
            ctx.fillText(name, xS, yS, 70)
        }
    }

    ctx.font = opts.countryFont || 'bold 14px Arial, Helvetica, Ubuntu, sans-serif'

    for (let [yc, xc, name, zoom] of places.countries) {
        if (zoom > coords.z || coords.z > 8) continue

        let y = yc * N - coords.y, x = xc * N - coords.x
        if (y > -margin3 && y < 1+margin3 && x > -margin3 && x < 1+margin3) {
            let xS = size.x * x, yS = size.y * y
            ctx.strokeText(name, xS, yS, 100)
            ctx.fillText(name, xS, yS, 100)
        }
    }
    return tile;
}


    L.GridLayer.TinyWorld = L.GridLayer.extend({
        createTile: function(xyz){
            // create a <canvas> element for drawing
            let tile = L.DomUtil.create('canvas', 'leaflet-tile');

            var tileSize = this.getTileSize();
            tile.setAttribute('width', tileSize.x);
            tile.setAttribute('height', tileSize.y);

            return drawPlaces(tile, xyz, places, this.options)
        },
        getAttribution: function() {
            return '&copy; <a href="https://tinyworldmap.com">tinyworldmap</a>, <a href="https://openstreetmap.org">OpenStreetMap</a>'
        }
    });
})()
