// ============================================================
// ECOSENSE INDONESIA — script.js
// Firebase v8 | Groq AI | Email KLHK otomatis
// ============================================================

// ===== FIREBASE CONFIG =====
var firebaseConfig = {
  apiKey: "AIzaSyBGs2g_eObrrrDd0zK9tc3ZwEvp8QgQf0A",
  authDomain: "ecosense-4d5c4.firebaseapp.com",
  projectId: "ecosense-4d5c4"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// ===== GROQ API KEY =====
// Ganti dengan API Key Groq baru kamu dari console.groq.com
var GROQ_KEY = "GANTI_DENGAN_GROQ_API_KEY_BARU";

// ===== DATA LOKASI =====
var LOKASI = {
  'Aceh':{lat:4.695,lng:96.749,kota:{
    'Kota Banda Aceh':['Baiturrahman','Banda Raya','Jaya Baru','Kuta Alam','Kuta Raja','Lueng Bata','Meuraxa','Syiah Kuala','Ulee Kareng'],
    'Kota Sabang':['Sukajaya','Sukakarya'],
    'Kota Langsa':['Langsa Barat','Langsa Baro','Langsa Kota','Langsa Lama','Langsa Timur'],
    'Kota Lhokseumawe':['Banda Sakti','Blang Mangat','Muara Dua','Muara Satu'],
    'Kab. Aceh Besar':['Baitussalam','Darul Imarah','Ingin Jaya','Kuta Baro','Montasik','Peukan Bada'],
    'Kab. Pidie':['Batee','Delima','Grong-Grong','Kembang Tanjong','Mutiara','Sigli'],
    'Kab. Aceh Utara':['Baktiya','Dewantara','Lhoksukon','Muara Batu','Nisam','Samudera']}},
  'Sumatera Utara':{lat:2.115,lng:99.533,kota:{
    'Kota Medan':['Medan Amplas','Medan Area','Medan Baru','Medan Belawan','Medan Deli','Medan Denai','Medan Helvetia','Medan Johor','Medan Kota','Medan Labuhan','Medan Marelan','Medan Petisah','Medan Polonia','Medan Selayang','Medan Sunggal','Medan Tembung','Medan Timur','Medan Tuntungan','Medan Maimun','Medan Perjuangan','Medan Barat'],
    'Kota Binjai':['Binjai Barat','Binjai Kota','Binjai Selatan','Binjai Timur','Binjai Utara'],
    'Kota Pematangsiantar':['Siantar Barat','Siantar Marihat','Siantar Marimbun','Siantar Martoba','Siantar Selatan','Siantar Timur','Siantar Utara'],
    'Kab. Deli Serdang':['Batang Kuis','Beringin','Galang','Hamparan Perak','Labuhan Deli','Lubuk Pakam','Percut Sei Tuan','Sunggal','Tanjung Morawa'],
    'Kab. Langkat':['Bahorok','Besitang','Hinai','Kuala','Pangkalan Susu','Stabat','Tanjung Pura'],
    'Kab. Asahan':['Air Batu','Air Joman','Kota Kisaran Barat','Kota Kisaran Timur','Lima Puluh','Meranti','Pulau Rakyat']}},
  'Sumatera Barat':{lat:-0.739,lng:100.800,kota:{
    'Kota Padang':['Bungus Teluk Kabung','Koto Tangah','Kuranji','Lubuk Begalung','Lubuk Kilangan','Nanggalo','Padang Barat','Padang Selatan','Padang Timur','Padang Utara','Pauh'],
    'Kota Bukittinggi':['Aur Birugo Tigo Baleh','Guguk Panjang','Mandiangin Koto Salayan'],
    'Kota Payakumbuh':['Lamposi Tigo Nagori','Latina','Payakumbuh Barat','Payakumbuh Selatan','Payakumbuh Timur','Payakumbuh Utara'],
    'Kab. Agam':['Ampek Angkek','Banuhampu','Baso','Lubuk Basung','Matur','Tanjung Mutiara'],
    'Kab. Padang Pariaman':['Batang Anai','Lubuk Alung','Nan Sabaris','Pariaman','Sungai Limau']}},
  'Riau':{lat:0.293,lng:101.707,kota:{
    'Kota Pekanbaru':['Bukit Raya','Lima Puluh','Marpoyan Damai','Pekanbaru Kota','Payung Sekaki','Rumbai','Rumbai Pesisir','Sail','Senapelan','Sukajadi','Tampan','Tenayan Raya'],
    'Kota Dumai':['Bukit Kapur','Dumai Barat','Dumai Kota','Dumai Selatan','Dumai Timur','Sungai Sembilan'],
    'Kab. Kampar':['Bangkinang','Kampar','Kampar Kiri','Siak Hulu','Tambang','Tapung'],
    'Kab. Siak':['Bunga Raya','Kandis','Minas','Siak','Tualang'],
    'Kab. Bengkalis':['Bantan','Bengkalis','Mandau','Pinggir','Rupat']}},
  'Jambi':{lat:-1.612,lng:103.616,kota:{
    'Kota Jambi':['Danau Sipin','Jambi Selatan','Jambi Timur','Jelutung','Kota Baru','Pasar Jambi','Pelayangan','Telanaipura'],
    'Kab. Batanghari':['Bajubang','Muara Bulian','Muara Tembesi','Mersam'],
    'Kab. Muaro Jambi':['Jambi Luar Kota','Kumpeh','Mestong','Sungai Gelam']}},
  'Sumatera Selatan':{lat:-3.316,lng:103.914,kota:{
    'Kota Palembang':['Alang-Alang Lebar','Bukit Kecil','Gandus','Ilir Barat I','Ilir Barat II','Ilir Timur I','Ilir Timur II','Kalidoni','Kemuning','Kertapati','Plaju','Sako','Seberang Ulu I','Seberang Ulu II','Sukarami'],
    'Kota Lubuklinggau':['Lubuklinggau Barat I','Lubuklinggau Selatan I','Lubuklinggau Timur I'],
    'Kab. Banyuasin':['Banyuasin I','Banyuasin III','Betung','Talang Kelapa']}},
  'Bengkulu':{lat:-3.793,lng:102.261,kota:{
    'Kota Bengkulu':['Gading Cempaka','Muara Bangka Hulu','Ratu Agung','Ratu Samban','Selebar','Teluk Segara'],
    'Kab. Bengkulu Utara':['Arma Jaya','Enggano','Kerkap','Ketahun','Lais']}},
  'Lampung':{lat:-4.558,lng:105.405,kota:{
    'Kota Bandar Lampung':['Bumi Waras','Enggal','Kedamaian','Kedaton','Kemiling','Panjang','Rajabasa','Sukabumi','Sukarame','Tanjung Karang Barat','Tanjung Karang Pusat','Tanjung Karang Timur','Teluk Betung Barat','Teluk Betung Selatan','Teluk Betung Utara','Way Halim'],
    'Kota Metro':['Metro Barat','Metro Pusat','Metro Selatan','Metro Timur','Metro Utara'],
    'Kab. Lampung Tengah':['Gunung Sugih','Kalirejo','Padang Ratu','Terbanggi Besar','Trimurjo'],
    'Kab. Lampung Selatan':['Bakauheni','Jati Agung','Kalianda','Natar','Sidomulyo']}},
  'Kep. Bangka Belitung':{lat:-2.741,lng:106.440,kota:{
    'Kota Pangkal Pinang':['Bukit Intan','Gabek','Gerunggang','Girimaya','Pangkalbalam','Rangkui'],
    'Kab. Bangka':['Belinyu','Merawang','Pemali','Sungailiat'],
    'Kab. Belitung':['Badau','Membalong','Sijuk','Tanjungpandan']}},
  'Kep. Riau':{lat:3.946,lng:108.142,kota:{
    'Kota Batam':['Batu Aji','Batu Ampar','Bengkong','Lubuk Baja','Nongsa','Sagulung','Sekupang','Batam Kota'],
    'Kota Tanjungpinang':['Bukit Bestari','Tanjungpinang Barat','Tanjungpinang Kota','Tanjungpinang Timur'],
    'Kab. Bintan':['Bintan Timur','Bintan Utara','Gunung Kijang','Sri Bintan']}},
  'DKI Jakarta':{lat:-6.211,lng:106.845,kota:{
    'Jakarta Pusat':['Cempaka Putih','Gambir','Johar Baru','Kemayoran','Menteng','Sawah Besar','Senen','Tanah Abang'],
    'Jakarta Utara':['Cilincing','Kelapa Gading','Koja','Pademangan','Penjaringan','Tanjung Priok'],
    'Jakarta Barat':['Cengkareng','Grogol Petamburan','Kalideres','Kebon Jeruk','Kembangan','Palmerah','Taman Sari','Tambora'],
    'Jakarta Selatan':['Cilandak','Jagakarsa','Kebayoran Baru','Kebayoran Lama','Mampang Prapatan','Pancoran','Pasar Minggu','Pesanggrahan','Setiabudi','Tebet'],
    'Jakarta Timur':['Cakung','Cipayung','Ciracas','Duren Sawit','Jatinegara','Kramat Jati','Makasar','Matraman','Pasar Rebo','Pulo Gadung'],
    'Kep. Seribu':['Kepulauan Seribu Utara','Kepulauan Seribu Selatan']}},
  'Jawa Barat':{lat:-6.889,lng:107.640,kota:{
    'Kota Bandung':['Andir','Antapani','Arcamanik','Astanaanyar','Babakan Ciparay','Bandung Kidul','Bandung Kulon','Buah Batu','Cibeunying Kaler','Cibeunying Kidul','Cicendo','Cidadap','Coblong','Gedebage','Kiaracondong','Lengkong','Mandalajati','Rancasari','Regol','Sukajadi','Sukasari','Sumur Bandung','Ujungberung'],
    'Kota Bekasi':['Bantargebang','Bekasi Barat','Bekasi Selatan','Bekasi Timur','Bekasi Utara','Jatiasih','Jatisampurna','Medansatria','Mustikajaya','Pondokgede','Rawalumbu'],
    'Kota Depok':['Beji','Bojongsari','Cilodong','Cimanggis','Cinere','Cipayung','Limo','Pancoranmas','Sawangan','Sukmajaya','Tapos'],
    'Kota Bogor':['Bogor Barat','Bogor Selatan','Bogor Tengah','Bogor Timur','Bogor Utara','Tanah Sareal'],
    'Kab. Bogor':['Babakan Madang','Bojonggede','Cibinong','Cileungsi','Cisarua','Jonggol','Kemang','Parung','Citeureup'],
    'Kab. Karawang':['Cikampek','Karawang Barat','Karawang Timur','Klari','Rengasdengklok'],
    'Kab. Bekasi':['Babelan','Cibitung','Cikarang Barat','Cikarang Pusat','Cikarang Selatan','Cikarang Timur','Cikarang Utara','Tambun Selatan','Tambun Utara']}},
  'Jawa Tengah':{lat:-7.150,lng:110.140,kota:{
    'Kota Semarang':['Banyumanik','Candisari','Gajah Mungkur','Gayamsari','Genuk','Gunungpati','Mijen','Ngaliyan','Pedurungan','Semarang Barat','Semarang Selatan','Semarang Tengah','Semarang Timur','Semarang Utara','Tembalang','Tugu'],
    'Kota Solo':['Banjarsari','Jebres','Laweyan','Pasar Kliwon','Serengan'],
    'Kota Magelang':['Magelang Selatan','Magelang Tengah','Magelang Utara'],
    'Kota Salatiga':['Argomulyo','Sidorejo','Sidomukti','Tingkir'],
    'Kab. Semarang':['Ambarawa','Bandungan','Bergas','Ungaran Barat','Ungaran Timur'],
    'Kab. Banyumas':['Ajibarang','Banyumas','Baturraden','Purwokerto Barat','Purwokerto Selatan','Purwokerto Timur','Purwokerto Utara']}},
  'DI Yogyakarta':{lat:-7.797,lng:110.370,kota:{
    'Kota Yogyakarta':['Danurejan','Gedongtengen','Gondokusuman','Gondomanan','Jetis','Kotagede','Kraton','Mantrijeron','Mergangsan','Ngampilan','Pakualaman','Tegalrejo','Umbulharjo','Wirobrajan'],
    'Kab. Sleman':['Berbah','Depok','Gamping','Godean','Kalasan','Mlati','Ngaglik','Ngemplak','Sleman','Tempel','Turi'],
    'Kab. Bantul':['Banguntapan','Bantul','Kasihan','Pajangan','Pandak','Sewon','Srandakan'],
    'Kab. Gunung Kidul':['Gedangsari','Karangmojo','Nglipar','Playen','Ponjong','Semanu','Wonosari'],
    'Kab. Kulon Progo':['Galur','Lendah','Nanggulan','Pengasih','Sentolo','Temon','Wates']}},
  'Jawa Timur':{lat:-7.536,lng:112.239,kota:{
    'Kota Surabaya':['Asemrowo','Bubutan','Bulak','Dukuh Pakis','Gayungan','Genteng','Gubeng','Gunung Anyar','Jambangan','Karang Pilang','Kenjeran','Krembangan','Rungkut','Sawahan','Semampir','Simokerto','Sukolilo','Tambaksari','Tegalsari','Wonokromo'],
    'Kota Malang':['Blimbing','Kedungkandang','Klojen','Lowokwaru','Sukun'],
    'Kota Kediri':['Mojoroto','Pesantren','Kota'],
    'Kab. Sidoarjo':['Buduran','Candi','Gedangan','Porong','Sidoarjo','Taman','Tanggulangin','Waru'],
    'Kab. Gresik':['Bungah','Cerme','Driyorejo','Gresik','Kebomas','Manyar','Menganti']}},
  'Banten':{lat:-6.406,lng:106.064,kota:{
    'Kota Serang':['Cipocok Jaya','Curug','Kasemen','Serang','Taktakan','Walantaka'],
    'Kota Cilegon':['Cibeber','Cilegon','Citangkil','Ciwandan','Grogol','Jombang','Pulomerak','Purwakarta'],
    'Kota Tangerang':['Batuceper','Benda','Ciledug','Cipondoh','Jatiuwung','Karang Tengah','Karawaci','Larangan','Neglasari','Periuk','Pinang','Tangerang'],
    'Kota Tangerang Selatan':['Ciputat','Ciputat Timur','Pamulang','Pondok Aren','Serpong','Serpong Utara','Setu'],
    'Kab. Tangerang':['Balaraja','Cisauk','Curug','Jayanti','Legok','Mauk','Pasar Kemis','Rajeg','Tigaraksa']}},
  'Bali':{lat:-8.340,lng:115.091,kota:{
    'Kota Denpasar':['Denpasar Barat','Denpasar Selatan','Denpasar Timur','Denpasar Utara'],
    'Kab. Badung':['Abiansemal','Kuta','Kuta Selatan','Kuta Utara','Mengwi','Petang'],
    'Kab. Gianyar':['Blahbatuh','Gianyar','Payangan','Sukawati','Tampaksiring','Ubud'],
    'Kab. Tabanan':['Baturiti','Kediri','Kerambitan','Marga','Penebel','Tabanan'],
    'Kab. Buleleng':['Banjar','Gerokgak','Seririt','Singaraja','Sukasada'],
    'Kab. Karangasem':['Abang','Karangasem','Kubu','Manggis','Rendang'],
    'Kab. Klungkung':['Banjarangkan','Dawan','Klungkung','Nusa Penida'],
    'Kab. Bangli':['Bangli','Kintamani','Susut','Tembuku'],
    'Kab. Jembrana':['Jembrana','Melaya','Mendoyo','Negara','Pekutatan']}},
  'NTB':{lat:-8.653,lng:117.361,kota:{
    'Kota Mataram':['Ampenan','Cakranegara','Mataram','Sandubaya','Sekarbela','Selaparang'],
    'Kota Bima':['Asakota','Mpunda','Raba','Rasanae Barat','Rasanae Timur'],
    'Kab. Lombok Barat':['Batu Layar','Gerung','Gunung Sari','Kediri','Labuapi','Narmada','Sekotong'],
    'Kab. Lombok Tengah':['Batukliang','Jonggat','Praya','Praya Barat','Praya Timur','Pujut'],
    'Kab. Lombok Timur':['Aikmel','Jerowaru','Labuhan Haji','Masbagik','Selong']}},
  'NTT':{lat:-8.657,lng:121.079,kota:{
    'Kota Kupang':['Alak','Kelapa Lima','Kota Lama','Kota Raja','Maulafa','Oebobo'],
    'Kab. Ende':['Ende','Ende Selatan','Ende Tengah','Ende Timur','Nangapanda'],
    'Kab. Flores Timur':['Adonara','Ile Mandiri','Larantuka','Wulanggitang'],
    'Kab. Sikka':['Alok','Kewapante','Maumere','Nita','Paga']}},
  'Kalimantan Barat':{lat:0.130,lng:111.087,kota:{
    'Kota Pontianak':['Pontianak Barat','Pontianak Kota','Pontianak Selatan','Pontianak Tenggara','Pontianak Timur','Pontianak Utara'],
    'Kota Singkawang':['Singkawang Barat','Singkawang Selatan','Singkawang Tengah','Singkawang Timur','Singkawang Utara'],
    'Kab. Kubu Raya':['Batu Ampar','Kubu','Rasau Jaya','Sei Ambawang','Sei Raya'],
    'Kab. Sambas':['Jawai','Sambas','Tebas','Teluk Keramat'],
    'Kab. Sanggau':['Balai','Kapuas','Meliau','Tayan Hilir','Tayan Hulu']}},
  'Kalimantan Tengah':{lat:-1.682,lng:113.382,kota:{
    'Kota Palangkaraya':['Bukit Batu','Jekan Raya','Pahandut','Rakumpit','Sabangau'],
    'Kab. Kotawaringin Barat':['Arut Selatan','Arut Utara','Kumai','Pangkalan Banteng'],
    'Kab. Kotawaringin Timur':['Baamang','Kota Besi','Mentawa Baru Ketapang','Seranau']}},
  'Kalimantan Selatan':{lat:-3.093,lng:115.284,kota:{
    'Kota Banjarmasin':['Banjar Selatan','Banjar Tengah','Banjar Timur','Banjarmasin Barat','Banjarmasin Selatan','Banjarmasin Tengah','Banjarmasin Timur','Banjarmasin Utara'],
    'Kota Banjarbaru':['Banjarbaru Selatan','Banjarbaru Utara','Cempaka','Landasan Ulin','Liang Anggang'],
    'Kab. Banjar':['Aranio','Astambul','Gambut','Karang Intan','Martapura','Martapura Barat']}},
  'Kalimantan Timur':{lat:1.636,lng:116.419,kota:{
    'Kota Samarinda':['Loa Janan Ilir','Palaran','Samarinda Ilir','Samarinda Kota','Samarinda Seberang','Samarinda Ulu','Samarinda Utara','Sambutan','Sungai Kunjang','Sungai Pinang'],
    'Kota Balikpapan':['Balikpapan Barat','Balikpapan Kota','Balikpapan Selatan','Balikpapan Tengah','Balikpapan Timur','Balikpapan Utara'],
    'Kota Bontang':['Bontang Barat','Bontang Selatan','Bontang Utara'],
    'Kab. Kutai Kartanegara':['Anggana','Kota Bangun','Loa Janan','Muara Badak','Samboja','Tenggarong']}},
  'Kalimantan Utara':{lat:3.073,lng:116.041,kota:{
    'Kota Tarakan':['Tarakan Barat','Tarakan Tengah','Tarakan Timur','Tarakan Utara'],
    'Kab. Bulungan':['Tanjung Palas','Tanjung Palas Timur','Tanjung Selor'],
    'Kab. Nunukan':['Nunukan','Nunukan Selatan','Sebatik'],
    'Kab. Malinau':['Malinau Barat','Malinau Kota','Malinau Selatan','Malinau Utara']}},
  'Sulawesi Utara':{lat:0.627,lng:124.021,kota:{
    'Kota Manado':['Bunaken','Malalayang','Mapanget','Paal Dua','Sario','Singkil','Tikala','Tuminting','Wanea','Wenang'],
    'Kota Bitung':['Aertembaga','Girian','Madidir','Maesa','Matuari','Ranowulu'],
    'Kota Tomohon':['Tomohon Barat','Tomohon Selatan','Tomohon Tengah','Tomohon Timur','Tomohon Utara'],
    'Kab. Minahasa':['Kakas','Kombi','Langowan Barat','Langowan Timur','Sonder','Tompaso','Tondano Barat','Tondano Timur']}},
  'Sulawesi Tengah':{lat:-1.431,lng:121.445,kota:{
    'Kota Palu':['Mantikulore','Palu Barat','Palu Selatan','Palu Timur','Palu Utara','Tatanga','Ulujadi'],
    'Kab. Donggala':['Banawa','Banawa Selatan','Labuan','Sindue'],
    'Kab. Sigi':['Biromaru','Dolo','Gumbasa','Marawola','Palolo'],
    'Kab. Poso':['Lage','Pamona Puselemba','Poso Kota','Poso Kota Selatan']}},
  'Sulawesi Selatan':{lat:-3.666,lng:119.974,kota:{
    'Kota Makassar':['Biringkanaya','Bontoala','Makassar','Mamajang','Manggala','Mariso','Panakkukang','Rappocini','Tallo','Tamalanrea','Tamalate','Ujung Pandang','Ujung Tanah','Wajo'],
    'Kota Parepare':['Bacukiki','Bacukiki Barat','Soreang','Ujung'],
    'Kota Palopo':['Bara','Mungkajang','Sendana','Wara','Wara Barat','Wara Selatan','Wara Timur'],
    'Kab. Gowa':['Bajeng','Barombong','Bontomarannu','Bontonompo','Pallangga','Somba Opu','Tinggimoncong'],
    'Kab. Maros':['Bantimurung','Bontoa','Mandai','Maros Baru','Moncongloe','Turikale']}},
  'Sulawesi Tenggara':{lat:-4.145,lng:122.174,kota:{
    'Kota Kendari':['Abeli','Baruga','Kadia','Kambu','Kendari','Kendari Barat','Mandonga','Poasia','Puuwatu','Wua-Wua'],
    'Kota Baubau':['Batupoaro','Betoambari','Kokalukuna','Murhum','Sorawolio','Wolio'],
    'Kab. Konawe':['Abuki','Bondoala','Konawe','Sampara','Soropia','Wawotobi']}},
  'Gorontalo':{lat:0.690,lng:122.446,kota:{
    'Kota Gorontalo':['Dungingi','Hulonthlangi','Kota Barat','Kota Selatan','Kota Tengah','Kota Timur','Kota Utara','Sipatana'],
    'Kab. Gorontalo':['Batudaa','Bongomeme','Limboto','Limboto Barat','Tibawa','Tilango'],
    'Kab. Bone Bolango':['Bone','Kabila','Suwawa','Tapa','Tilongkabila']}},
  'Sulawesi Barat':{lat:-2.840,lng:119.232,kota:{
    'Kab. Mamuju':['Kalukku','Mamuju','Papalang','Sampaga','Tapalang'],
    'Kab. Majene':['Banggae','Banggae Timur','Malunda','Pamboang','Sendana','Ulumanda'],
    'Kab. Polewali Mandar':['Alu','Anreapi','Balanipa','Binuang','Campalagian','Polewali','Wonomulyo']}},
  'Maluku':{lat:-3.237,lng:130.145,kota:{
    'Kota Ambon':['Baguala','Leitimur Selatan','Nusaniwe','Sirimau','Teluk Ambon'],
    'Kota Tual':['Dullah Selatan','Dullah Utara','Manyeuw'],
    'Kab. Maluku Tengah':['Amahai','Banda','Leihitu','Nusalaut','Saparua','Salahutu']}},
  'Maluku Utara':{lat:1.571,lng:127.808,kota:{
    'Kota Ternate':['Moti','Ternate Selatan','Ternate Tengah','Ternate Utara'],
    'Kota Tidore Kepulauan':['Oba','Tidore','Tidore Selatan','Tidore Timur'],
    'Kab. Halmahera Barat':['Ibu','Jailolo','Jailolo Selatan','Sahu'],
    'Kab. Halmahera Utara':['Galela','Kao','Tobelo','Tobelo Selatan']}},
  'Papua Barat':{lat:-1.336,lng:133.174,kota:{
    'Kota Manokwari':['Manokwari Barat','Manokwari Selatan','Manokwari Timur','Manokwari Utara','Warmare'],
    'Kota Sorong':['Klaurung','Malaimsimsa','Sorong','Sorong Barat','Sorong Timur','Sorong Utara'],
    'Kab. Fakfak':['Fakfak','Fakfak Barat','Fakfak Tengah','Kokas'],
    'Kab. Sorong':['Aimas','Klamono','Makbon','Salawati','Seget']}},
  'Papua':{lat:-4.269,lng:138.080,kota:{
    'Kota Jayapura':['Abepura','Heram','Jayapura Selatan','Jayapura Utara','Muara Tami'],
    'Kab. Jayapura':['Kaureh','Nimboran','Nimbokrang','Sentani','Sentani Barat','Sentani Timur','Waibu'],
    'Kab. Merauke':['Eligobel','Kurik','Malind','Merauke','Muting','Semangga','Sota'],
    'Kab. Mimika':['Kwamki Narama','Mimika Baru','Tembagapura','Wania'],
    'Kab. Nabire':['Nabire','Siriwo','Teluk Kimi','Uwapa']}}
};

// ===== STATE =====
var allLaporan = [];
var curSev = '';
var curFilter = 'semua';
var ecoMap = null;
var heatLayer = null;
var markerList = [];
var heatOn = false;
var mapInited = false;
var charts = {};
var chatHist = [];
var isDark = true;
var poinLokal = parseInt(localStorage.getItem('eco_poin') || '0');

// ===== FIREBASE LISTENER =====
function startListener() {
  db.collection('laporan').orderBy('ts','desc').onSnapshot(function(snap) {
    allLaporan = [];
    snap.forEach(function(doc) {
      var d = doc.data(); d.id = doc.id; allLaporan.push(d);
    });
    updateStats();
    checkWarn();
    if (mapInited) refreshMarkers();
    var dp = document.getElementById('page-dashboard');
    if (dp && dp.classList.contains('active')) initCharts();
  }, function(err) { console.error('Firebase:', err); });
}

// ===== NAVIGASI =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(function(a){a.classList.remove('active');});
  var nl=document.getElementById('nav-'+id); if(nl) nl.classList.add('active');
  document.querySelectorAll('.mni').forEach(function(m){m.classList.remove('active');});
  var mn=document.getElementById('mnav-'+id); if(mn) mn.classList.add('active');
  if(id==='peta') setTimeout(initMap,200);
  if(id==='dashboard') setTimeout(initCharts,100);
  if(id==='poin') initPoin();
  window.scrollTo(0,0);
}

function toggleTheme() {
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'':'light');
  document.getElementById('themeBtn').textContent=isDark?'🌙':'☀️';
}

// ===== WARN =====
function checkWarn() {
  var pc={};
  allLaporan.filter(function(l){return l.sev==='parah'&&l.ts&&(Date.now()-l.ts)<86400000*7;})
    .forEach(function(l){pc[l.prov]=(pc[l.prov]||0)+1;});
  var e=Object.keys(pc).map(function(k){return[k,pc[k]];}).sort(function(a,b){return b[1]-a[1];});
  var bar=document.getElementById('warn-bar');
  if(e.length>0&&e[0][1]>=2){
    bar.classList.remove('hidden');
    document.getElementById('warn-txt').textContent='⚠️ PERINGATAN: '+e[0][0]+' memiliki '+e[0][1]+' laporan parah dalam 7 hari terakhir!';
  } else { bar.classList.add('hidden'); }
}

// ===== STATS =====
function updateStats() {
  var total=allLaporan.length;
  var week=allLaporan.filter(function(l){return l.ts&&(Date.now()-l.ts)<86400000*7;}).length;
  var done=allLaporan.filter(function(l){return l.done;}).length;
  var ps={};allLaporan.forEach(function(l){if(l.prov)ps[l.prov]=1;});
  var provs=Object.keys(ps).length;
  function se(id,v){var x=document.getElementById(id);if(x)x.textContent=v;}
  se('s-total',total);se('m-total',total);
  se('s-week',week);se('m-week',week);
  se('s-done',done);se('m-done',done);
  se('s-prov',provs);se('m-prov',provs);
}

// ===== FORM =====
function buildProvSelect() {
  var sel=document.getElementById('f-prov');
  Object.keys(LOKASI).sort().forEach(function(p){
    var o=document.createElement('option');o.value=p;o.textContent=p;sel.appendChild(o);
  });
}

function onProvChange() {
  var prov=document.getElementById('f-prov').value;
  var ks=document.getElementById('f-kota');
  var ke=document.getElementById('f-kec');
  ks.innerHTML='<option value="">— Pilih kota/kabupaten —</option>';
  ke.innerHTML='<option value="">— Pilih kota dulu —</option>';
  ke.disabled=true;
  if(!prov){ks.disabled=true;return;}
  ks.disabled=false;
  Object.keys(LOKASI[prov].kota).sort().forEach(function(k){
    var o=document.createElement('option');o.value=k;o.textContent=k;ks.appendChild(o);
  });
}

function onKotaChange() {
  var prov=document.getElementById('f-prov').value;
  var kota=document.getElementById('f-kota').value;
  var ke=document.getElementById('f-kec');
  ke.innerHTML='<option value="">— Pilih kecamatan —</option>';
  if(!prov||!kota||!LOKASI[prov]||!LOKASI[prov].kota[kota]){ke.disabled=true;return;}
  ke.disabled=false;
  LOKASI[prov].kota[kota].sort().forEach(function(k){
    var o=document.createElement('option');o.value=k;o.textContent=k;ke.appendChild(o);
  });
}

function setSev(s,btn) {
  curSev=s;
  document.querySelectorAll('.sev-btn').forEach(function(b){b.className='sev-btn';});
  btn.classList.add('sv-'+s);
}

function getGPS() {
  if(!navigator.geolocation){alert('GPS tidak tersedia.');return;}
  var btn=document.querySelector('.btn-gps');btn.textContent='⏳';
  navigator.geolocation.getCurrentPosition(
    function(p){document.getElementById('f-lokasi').value=p.coords.latitude.toFixed(5)+', '+p.coords.longitude.toFixed(5);btn.textContent='📍 GPS';},
    function(){document.getElementById('f-lokasi').value='GPS gagal — isi manual';btn.textContent='📍 GPS';}
  );
}

// ===== SUBMIT LAPORAN =====
function submitLaporan() {
  var jenis=document.getElementById('f-jenis').value;
  var prov=document.getElementById('f-prov').value;
  var kota=document.getElementById('f-kota').value;
  var kec=document.getElementById('f-kec').value;
  if(!jenis||!prov||!kota||!kec||!curSev){
    alert('Lengkapi semua field yang wajib: Jenis Masalah, Provinsi, Kota, Kecamatan, dan Tingkat Keparahan.');
    return;
  }
  var base=LOKASI[prov]?[LOKASI[prov].lat,LOKASI[prov].lng]:[-2.5,118];
  var nama=document.getElementById('f-nama').value||'Anonim';
  var email=document.getElementById('f-email').value||'';
  var desc=document.getElementById('f-desc').value||'Tidak ada deskripsi.';
  var lokasi=document.getElementById('f-lokasi').value||'-';
  var lap={
    jenis:jenis,prov:prov,kota:kota,kec:kec,lokasi:lokasi,
    lat:base[0]+(Math.random()-0.5)*0.3,
    lng:base[1]+(Math.random()-0.5)*0.3,
    sev:curSev,desc:desc,nama:nama,email:email,
    ts:Date.now(),done:false
  };

  var btn=document.getElementById('btn-submit');
  btn.disabled=true;btn.textContent='⏳ Mengirim...';

  db.collection('laporan').add(lap).then(function(){
    poinLokal+=15;localStorage.setItem('eco_poin',String(poinLokal));

    var t=document.getElementById('toast');
    t.className='toast ok';
    t.textContent='✅ Laporan berhasil dikirim ke peta nasional! Semua pengguna kini bisa melihatnya. +15 poin 🌿';
    t.style.display='block';

    // Tampilkan info email KLHK
    showKlhkBox(lap);

    // Reset form
    ['f-jenis','f-prov','f-lokasi','f-desc','f-nama','f-email'].forEach(function(id){
      var x=document.getElementById(id);if(x)x.value='';
    });
    var ks=document.getElementById('f-kota');ks.innerHTML='<option value="">— Pilih provinsi dulu —</option>';ks.disabled=true;
    var ke=document.getElementById('f-kec');ke.innerHTML='<option value="">— Pilih kota dulu —</option>';ke.disabled=true;
    document.querySelectorAll('.sev-btn').forEach(function(b){b.className='sev-btn';});curSev='';

    btn.disabled=false;btn.textContent='📤 Kirim Laporan';
    setTimeout(function(){t.style.display='none';},6000);

    // Pindah ke peta setelah 2.5 detik
    setTimeout(function(){showPage('peta');},2500);

  }).catch(function(err){
    var t=document.getElementById('toast');
    t.className='toast err';
    t.textContent='❌ Gagal mengirim. Pastikan internet aktif lalu coba lagi.';
    t.style.display='block';
    console.error(err);
    btn.disabled=false;btn.textContent='📤 Kirim Laporan';
    setTimeout(function(){t.style.display='none';},6000);
  });
}

// ===== KIRIM EMAIL KLHK OTOMATIS =====
function showKlhkBox(lap) {
  var box=document.getElementById('klhk-box');
  box.classList.remove('hidden');
  var tgl=new Date(lap.ts).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
  var subj=encodeURIComponent('[EcoSense] Laporan: '+lap.jenis+' di '+lap.kec+', '+lap.kota+', '+lap.prov);
  var body=encodeURIComponent(
    'Kepada Yth.\nTim Pengaduan Kementerian Lingkungan Hidup dan Kehutanan (KLHK)\n\n'+
    'Dengan hormat,\n\n'+
    'Saya melaporkan masalah lingkungan hidup melalui platform EcoSense Indonesia.\n\n'+
    '=== DETAIL LAPORAN ===\n'+
    'Jenis Masalah  : '+lap.jenis+'\n'+
    'Provinsi       : '+lap.prov+'\n'+
    'Kota/Kabupaten : '+lap.kota+'\n'+
    'Kecamatan      : '+lap.kec+'\n'+
    'Alamat Detail  : '+lap.lokasi+'\n'+
    'Tingkat Parah  : '+lap.sev.toUpperCase()+'\n'+
    'Deskripsi      : '+lap.desc+'\n'+
    'Nama Pelapor   : '+lap.nama+'\n'+
    'Email Pelapor  : '+(lap.email||'-')+'\n'+
    'Tanggal Laporan: '+tgl+'\n'+
    '====================\n\n'+
    'Mohon kiranya masalah lingkungan ini segera ditindaklanjuti oleh instansi yang berwenang.\n\n'+
    'Laporan ini dikirim melalui EcoSense Indonesia — Platform Pemantau Lingkungan Hidup Nasional.\n\n'+
    'Terima kasih atas perhatian dan tindakan Bapak/Ibu.\n\n'+
    'Hormat kami,\nPelapor EcoSense Indonesia'
  );
  var href='mailto:pengaduan.klhk@menlhk.go.id?subject='+subj+'&body='+body;
  document.getElementById('klhk-mailto').href=href;
  // Auto buka email client
  window.location.href=href;
}

// ===== PETA =====
function initMap() {
  var emEl=document.getElementById('peta-empty');
  var mpEl=document.getElementById('map');
  if(allLaporan.length===0){emEl.classList.add('show');mpEl.style.display='none';return;}
  emEl.classList.remove('show');mpEl.style.display='block';
  if(mapInited){setTimeout(function(){ecoMap.invalidateSize();refreshMarkers();},200);return;}
  mapInited=true;
  ecoMap=L.map('map',{zoomControl:true}).setView([-2.5,118],5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:19}).addTo(ecoMap);
  setTimeout(function(){ecoMap.invalidateSize();refreshMarkers();},300);
}

function getColor(s){return s==='parah'?'#ff5c5c':s==='sedang'?'#ffb74d':'#4ac571';}

function refreshMarkers() {
  if(!ecoMap)return;
  markerList.forEach(function(m){ecoMap.removeLayer(m);});markerList=[];
  if(heatLayer){ecoMap.removeLayer(heatLayer);heatLayer=null;}
  var kw=(document.getElementById('search-peta')?document.getElementById('search-peta').value:'').toLowerCase();
  var fil=allLaporan.filter(function(l){
    var mf=curFilter==='semua'?true:curFilter==='parah'?l.sev==='parah':curFilter==='sedang'?l.sev==='sedang':curFilter==='ringan'?l.sev==='ringan':curFilter==='polusi'?(l.jenis&&(l.jenis.indexOf('Polusi')>=0||l.jenis.indexOf('udara')>=0)):curFilter==='sampah'?(l.jenis&&(l.jenis.indexOf('Sampah')>=0||l.jenis.indexOf('sampah')>=0)):curFilter==='hutan'?(l.jenis&&l.jenis.indexOf('hutan')>=0):true;
    var ms=!kw||(l.prov&&l.prov.toLowerCase().indexOf(kw)>=0)||(l.kota&&l.kota.toLowerCase().indexOf(kw)>=0)||(l.kec&&l.kec.toLowerCase().indexOf(kw)>=0);
    return mf&&ms;
  });
  var hd=[];
  fil.forEach(function(l){
    var c=getColor(l.sev);
    var icon=L.divIcon({html:'<div style="width:13px;height:13px;border-radius:50%;background:'+c+';border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[13,13],iconAnchor:[6,6],className:''});
    var m=L.marker([l.lat,l.lng],{icon:icon}).addTo(ecoMap);
    var tgl=l.ts?new Date(l.ts).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}):'-';
    m.bindPopup('<div style="font-family:DM Sans,sans-serif;min-width:220px;padding:4px">'+
      '<div style="font-weight:700;font-size:14px;margin-bottom:6px">'+(l.jenis||'')+'</div>'+
      '<div style="font-size:12px;color:#666;margin-bottom:2px">🏛️ '+(l.prov||'')+'</div>'+
      '<div style="font-size:12px;color:#666;margin-bottom:2px">🏙️ '+(l.kota||'')+' — '+(l.kec||'')+'</div>'+
      '<div style="font-size:12px;color:#666;margin-bottom:6px">📍 '+(l.lokasi||'')+'</div>'+
      '<div style="font-size:13px;margin-bottom:8px">'+(l.desc||'')+'</div>'+
      '<div style="display:flex;justify-content:space-between;font-size:11px;color:#888;margin-bottom:7px">'+
      '<span>👤 '+(l.nama||'Anonim')+'</span><span>'+tgl+'</span></div>'+
      '<span style="padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;'+
      'background:'+(l.sev==='parah'?'#fff0f0':l.sev==='sedang'?'#fff8e1':'#f0fff4')+';color:'+c+'">'+
      (l.sev||'').toUpperCase()+(l.done?' ✓ Ditangani':'')+'</span></div>');
    markerList.push(m);
    hd.push([l.lat,l.lng,l.sev==='parah'?.9:l.sev==='sedang'?.5:.25]);
  });
  if(heatOn&&hd.length>0) heatLayer=L.heatLayer(hd,{radius:40,blur:25,maxZoom:17,gradient:{0.2:'#4ac571',0.5:'#ffb74d',0.8:'#ff5c5c'}}).addTo(ecoMap);
  var emEl=document.getElementById('peta-empty');var mpEl=document.getElementById('map');
  if(allLaporan.length===0){emEl.classList.add('show');mpEl.style.display='none';}
  else{emEl.classList.remove('show');mpEl.style.display='block';}
}

function filterMap(f,btn){curFilter=f;document.querySelectorAll('.fbtn').forEach(function(b){b.classList.remove('active','fp','fs');});btn.classList.add('active');if(f==='parah')btn.classList.add('fp');if(f==='sedang')btn.classList.add('fs');refreshMarkers();}
function toggleHeat(){heatOn=!heatOn;document.getElementById('heat-btn').classList.toggle('active',heatOn);refreshMarkers();}
function searchMap(){refreshMarkers();}

// ===== DASHBOARD =====
function initCharts() {
  var emEl=document.getElementById('dash-empty');var chEl=document.getElementById('dash-charts');
  if(allLaporan.length===0){emEl.style.display='block';chEl.style.display='none';return;}
  emEl.style.display='none';chEl.style.display='block';
  var gc='rgba(74,197,113,.08)',tc='#7fa87f';
  function bo(ax){var o={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}};
    if(ax!==false){o.scales={x:{grid:{color:gc},ticks:{color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},beginAtZero:true}};}return o;}
  if(charts.line){charts.line.destroy();charts.line=null;}
  if(charts.donut){charts.donut.destroy();charts.donut=null;}
  if(charts.bar){charts.bar.destroy();charts.bar=null;}

  var now=Date.now();
  var wd=[0,0,0,0,0,0,0];
  allLaporan.forEach(function(l){if(!l.ts)return;var d=(now-l.ts)/86400000;var w=Math.floor(d/7);if(w<7)wd[6-w]++;});
  charts.line=new Chart(document.getElementById('chartLine'),{type:'line',data:{labels:['6 mgg lalu','5 mgg lalu','4 mgg lalu','3 mgg lalu','2 mgg lalu','Mgg lalu','Mgg ini'],datasets:[{data:wd,borderColor:'#4ac571',backgroundColor:'rgba(74,197,113,.1)',borderWidth:2,fill:true,tension:0.4,pointBackgroundColor:'#4ac571',pointRadius:4}]},options:bo()});

  var jl=['Polusi','Sampah','Air/Sungai','Limbah Ind.','Banjir','Hutan','Laut/Pesisir','Limbah B3','Lainnya'];
  var jd=[0,0,0,0,0,0,0,0,0];
  allLaporan.forEach(function(l){if(!l.jenis)return;var j=l.jenis;
    if(j.indexOf('udara')>=0||j.indexOf('Polusi')>=0)jd[0]++;
    else if(j.indexOf('Sampah')>=0||j.indexOf('sampah')>=0)jd[1]++;
    else if(j.indexOf('air')>=0||j.indexOf('Sungai')>=0)jd[2]++;
    else if(j.indexOf('industri')>=0)jd[3]++;
    else if(j.indexOf('Banjir')>=0)jd[4]++;
    else if(j.indexOf('hutan')>=0)jd[5]++;
    else if(j.indexOf('laut')>=0||j.indexOf('pesisir')>=0)jd[6]++;
    else if(j.indexOf('B3')>=0)jd[7]++;
    else jd[8]++;
  });
  charts.donut=new Chart(document.getElementById('chartDonut'),{type:'doughnut',data:{labels:jl,datasets:[{data:jd,backgroundColor:['#4ac571','#64b5f6','#ffb74d','#ff5c5c','#ce93d8','#80cbc4','#f48fb1','#e57373','#bcaaa4'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:tc,font:{size:10},boxWidth:11}}}}});

  var pm={'Sumatera':['Aceh','Sumatera Utara','Sumatera Barat','Riau','Jambi','Sumatera Selatan','Bengkulu','Lampung','Kep. Bangka Belitung','Kep. Riau'],'Jawa':['DKI Jakarta','Jawa Barat','Jawa Tengah','DI Yogyakarta','Jawa Timur','Banten'],'Kalimantan':['Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Timur','Kalimantan Utara'],'Sulawesi':['Sulawesi Utara','Sulawesi Tengah','Sulawesi Selatan','Sulawesi Tenggara','Gorontalo','Sulawesi Barat'],'Bali & Nusa':['Bali','NTB','NTT'],'Maluku':['Maluku','Maluku Utara'],'Papua':['Papua Barat','Papua']};
  var pl=Object.keys(pm);
  var pd=pl.map(function(p){return allLaporan.filter(function(l){return pm[p].indexOf(l.prov)>=0;}).length;});
  charts.bar=new Chart(document.getElementById('chartBar'),{type:'bar',data:{labels:pl,datasets:[{data:pd,backgroundColor:pd.map(function(v){return v>=5?'#ff5c5c':v>=2?'#ffb74d':'#4ac571';}),borderRadius:6}]},options:bo()});

  var np={};var npv={};
  allLaporan.forEach(function(l){if(l.nama&&l.nama!=='Anonim'){np[l.nama]=(np[l.nama]||0)+15;npv[l.nama]=l.prov;}});
  var rk=Object.keys(np).map(function(n){return{n:n,p:np[n],v:npv[n]};}).sort(function(a,b){return b.p-a.p;}).slice(0,10);
  var rks=['g','s','b','','','','','','',''];
  document.getElementById('lb-list').innerHTML=rk.length===0
    ?'<div style="text-align:center;padding:20px;color:var(--text2);font-size:13px">Belum ada pelapor terdaftar. Isi namamu saat laporan!</div>'
    :rk.map(function(x,i){return'<div class="lb-item"><div class="lb-rank '+(rks[i]||'')+'">'+(i+1)+'</div><div><div class="lb-name">'+x.n+'</div><div class="lb-loc">📍 '+x.v+'</div></div><div class="lb-pts">'+x.p+' pts</div></div>';}).join('');
}

// ===== EDUKASI =====
var EDU=[
  {tag:'Sampah',e:'🗑️',t:'Cara Pilah Sampah yang Benar',b:'<p>Indonesia menghasilkan lebih dari 60 juta ton sampah per tahun. Memilah sampah adalah langkah pertama yang paling penting.</p><p><strong>3 Kategori Utama:</strong></p><ul><li><strong>Sampah Organik</strong> — sisa makanan, daun kering. Jadikan kompos.</li><li><strong>Sampah Anorganik</strong> — plastik, kertas, kaca, logam. Daur ulang di bank sampah.</li><li><strong>Sampah B3</strong> — baterai, obat kadaluarsa, cat. Buang ke tempat khusus.</li></ul><p>Mulai dari dua tempat sampah di rumah. Ikut bank sampah terdekat!</p>'},
  {tag:'Polusi Udara',e:'🌫️',t:'Bahaya Kabut Asap & Karhutla',b:'<p>Kebakaran hutan dan lahan (karhutla) di Sumatera dan Kalimantan setiap musim kemarau menghasilkan kabut asap yang menyerang jutaan warga.</p><ul><li>PM2.5 — partikel super halus yang masuk ke paru-paru</li><li>Karbon monoksida (CO) — menghambat pengangkutan oksigen darah</li><li>Dioksin dari pembakaran gambut</li></ul><p><strong>Cara melindungi diri:</strong> Masker N95, tutup jendela, pantau ISPU di aplikasi KLHK.</p>'},
  {tag:'Air Bersih',e:'💧',t:'Menjaga Sumber Air Indonesia',b:'<p>Sungai Citarum di Jawa Barat pernah menjadi salah satu sungai paling tercemar di dunia. Sungai Siak, Musi, dan ribuan sungai lain juga terancam.</p><ul><li>Limbah industri tekstil dan manufaktur</li><li>Limbah pertanian — pestisida dan pupuk kimia</li><li>Sampah plastik dari permukiman tepian sungai</li></ul><p>Jangan buang sampah ke sungai. Laporkan pencemaran ke EcoSense!</p>'},
  {tag:'Hutan',e:'🌴',t:'Deforestasi & Krisis Hutan Tropis',b:'<p>Indonesia memiliki hutan tropis terluas ketiga di dunia. Namun deforestasi terus mengancam dari perkebunan sawit dan tambang.</p><ul><li>Kalimantan dan Papua — epicentrum kehilangan hutan terbesar</li><li>Orangutan, Harimau Sumatera, ratusan spesies lain terancam punah</li><li>Gambut yang terbakar melepaskan karbon yang tersimpan ribuan tahun</li></ul><p>Dukung produk bersertifikat ramah lingkungan!</p>'},
  {tag:'Laut & Pesisir',e:'🌊',t:'Krisis Sampah Plastik di Laut Indonesia',b:'<p>Indonesia masuk daftar penyumbang sampah plastik laut terbesar di dunia, dengan lebih dari 17.000 pulau yang terancam.</p><ul><li>Mematikan penyu, lumba-lumba, dan paus yang menelannya</li><li>Mikroplastik masuk ke rantai makanan dan tubuh manusia</li><li>Merusak terumbu karang dan ekosistem pesisir</li></ul><p>Bawa tas sendiri. Ikut kegiatan bersih pantai di kotamu!</p>'},
  {tag:'Jejak Karbon',e:'🌿',t:'Jejak Karbon & Perubahan Iklim Indonesia',b:'<p>Beberapa wilayah pesisir Indonesia sudah mulai tenggelam akibat kenaikan muka air laut. Perubahan iklim bukan ancaman masa depan — ini sedang terjadi sekarang.</p><p><strong>5 langkah mengurangi jejak karbonmu:</strong></p><ul><li>Naik transportasi umum atau sepeda</li><li>Hemat listrik — matikan yang tidak dipakai</li><li>Kurangi konsumsi daging merah</li><li>Pilih produk lokal untuk kurangi emisi transportasi</li><li>Tanam pohon di sekitar rumah</li></ul>'}
];

function openEdu(i){
  var d=EDU[i];
  document.getElementById('edu-content').innerHTML='<span class="edu-tag">'+d.tag+'</span><h2>'+d.e+' '+d.t+'</h2>'+d.b;
  document.getElementById('edu-ov').classList.add('open');
}
function closeEduOv(e){if(e.target===document.getElementById('edu-ov'))closeEduBtn();}
function closeEduBtn(){document.getElementById('edu-ov').classList.remove('open');}

// ===== POIN =====
var BADGES=[
  {e:'🌱',n:'Pelapor Pertama',d:'Kirim laporan pertama',min:15},
  {e:'🌿',n:'Warga Peduli',d:'Capai 50 poin',min:50},
  {e:'🌳',n:'Pahlawan Lokal',d:'Capai 150 poin',min:150},
  {e:'🏆',n:'Guardian Lingkungan',d:'Capai 300 poin',min:300},
  {e:'💚',n:'Eco Ambassador',d:'Capai 500 poin',min:500},
  {e:'🌍',n:'Penyelamat Bumi',d:'Capai 1000 poin',min:1000}
];

function initPoin() {
  document.getElementById('poin-angka').textContent=poinLokal;
  var lv=poinLokal>=1000?'Penyelamat Bumi':poinLokal>=500?'Eco Ambassador':poinLokal>=300?'Guardian Lingkungan':poinLokal>=150?'Pahlawan Lokal':poinLokal>=50?'Warga Peduli':'Pemula Hijau';
  document.getElementById('poin-level').textContent=lv;
  var nx=poinLokal>=1000?2000:poinLokal>=500?1000:poinLokal>=300?500:poinLokal>=150?300:poinLokal>=50?150:50;
  document.getElementById('poin-bar').style.width=Math.min(100,Math.round(poinLokal/nx*100))+'%';
  document.getElementById('poin-next').textContent=poinLokal+'/'+nx+' poin menuju level berikutnya';
  document.getElementById('badge-grid').innerHTML=BADGES.map(function(b){
    var on=poinLokal>=b.min;
    return'<div class="badge-item '+(on?'on':'badge-off')+'"><span class="badge-emoji">'+b.e+'</span><div class="badge-name">'+b.n+'</div><div class="badge-desc">'+b.d+'</div></div>';
  }).join('');
}

// ===== SERTIFIKAT =====
function generateCert() {
  var cv=document.getElementById('cert-canvas');cv.style.display='block';
  var ctx=cv.getContext('2d'),w=800,h=500;
  ctx.fillStyle='#071a0d';ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='#4ac571';ctx.lineWidth=5;ctx.strokeRect(16,16,w-32,h-32);
  ctx.strokeStyle='rgba(74,197,113,.25)';ctx.lineWidth=1;ctx.strokeRect(28,28,w-56,h-56);
  ctx.fillStyle='rgba(74,197,113,.04)';ctx.font='bold 80px sans-serif';ctx.textAlign='center';ctx.fillText('ECOSENSE INDONESIA',w/2,h/2+25);
  ctx.fillStyle='#4ac571';ctx.font='bold 13px sans-serif';ctx.fillText('🌿 ECOSENSE INDONESIA — PLATFORM LINGKUNGAN HIDUP NASIONAL',w/2,62);
  ctx.strokeStyle='rgba(74,197,113,.3)';ctx.beginPath();ctx.moveTo(60,75);ctx.lineTo(w-60,75);ctx.stroke();
  ctx.fillStyle='rgba(232,240,232,.6)';ctx.font='12px sans-serif';ctx.fillText('SERTIFIKAT PENGHARGAAN',w/2,108);
  ctx.fillStyle='#4ac571';ctx.font='bold 28px sans-serif';ctx.fillText('PAHLAWAN LINGKUNGAN HIDUP',w/2,155);
  ctx.fillStyle='rgba(232,240,232,.7)';ctx.font='14px sans-serif';ctx.fillText('Diberikan dengan bangga kepada',w/2,195);
  var nama=(document.getElementById('f-nama')&&document.getElementById('f-nama').value)||'Warga Peduli Lingkungan Indonesia';
  ctx.fillStyle='#fff';ctx.font='bold 26px sans-serif';ctx.fillText(nama,w/2,242);
  ctx.strokeStyle='rgba(74,197,113,.4)';ctx.beginPath();ctx.moveTo(200,258);ctx.lineTo(600,258);ctx.stroke();
  ctx.fillStyle='rgba(232,240,232,.65)';ctx.font='13px sans-serif';
  ctx.fillText('Atas kontribusi nyata dalam menjaga kelestarian lingkungan hidup Indonesia',w/2,295);
  ctx.fillText('melalui pelaporan aktif masalah lingkungan di platform EcoSense',w/2,315);
  ctx.fillStyle='#4ac571';ctx.font='bold 18px sans-serif';ctx.fillText('✦ '+poinLokal+' Poin Lingkungan ✦',w/2,362);
  ctx.fillStyle='rgba(232,240,232,.5)';ctx.font='12px sans-serif';
  ctx.fillText('Tertanggal: '+new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}),w/2,415);
  ctx.strokeStyle='rgba(74,197,113,.2)';ctx.beginPath();ctx.moveTo(60,448);ctx.lineTo(w-60,448);ctx.stroke();
  ctx.fillStyle='rgba(74,197,113,.5)';ctx.font='11px sans-serif';
  ctx.fillText('EcoSense Indonesia — Platform Pemantau Lingkungan Hidup Nasional',w/2,473);
  var a=document.createElement('a');a.download='sertifikat-ecosense.png';a.href=cv.toDataURL();a.click();
}

// ===== AI CHAT (Groq) =====
function toggleChat(){document.getElementById('chat-win').classList.toggle('open');}
function sendQ(q){document.getElementById('chat-in').value=q;sendChat();}

function sendChat() {
  var inp=document.getElementById('chat-in');
  var q=inp.value.trim();
  if(!q)return;
  inp.value='';
  addMsg('user',q);
  var load=addMsg('bot','⏳ Sedang menjawab...',true);
  chatHist.push({role:'user',content:q});

  // Cek API Key
  if(GROQ_KEY==='GANTI_DENGAN_GROQ_API_KEY_BARU'){
    load.remove();
    addMsg('bot','AI Chat belum aktif. Ganti GROQ_KEY di script.js dengan API Key dari console.groq.com (gratis!)');
    return;
  }

  var msgs=[{role:'system',content:'Kamu adalah AI Konsultan Lingkungan untuk EcoSense Indonesia — platform pemantau lingkungan hidup nasional yang mencakup 34 provinsi. Jawab pertanyaan soal lingkungan hidup, karhutla, pencemaran sungai (Citarum, Siak, Musi), sampah plastik laut, deforestasi Kalimantan & Papua, cara lapor ke KLHK/WALHI/LAPOR.go.id, dan isu lingkungan di seluruh Indonesia. Gunakan Bahasa Indonesia yang ramah, hangat, dan mudah dipahami semua kalangan dari anak-anak hingga lansia. Berikan jawaban yang praktis dan actionable. Maksimal 180 kata.'}].concat(chatHist);

  fetch('https://api.groq.com/openai/v1/chat/completions',{
    method:'POST',
    headers:{'Authorization':'Bearer '+GROQ_KEY,'Content-Type':'application/json'},
    body:JSON.stringify({model:'llama-3.3-70b-versatile',messages:msgs,max_tokens:300,temperature:0.7})
  })
  .then(function(r){
    if(!r.ok) throw new Error('HTTP '+r.status);
    return r.json();
  })
  .then(function(d){
    var reply=(d.choices&&d.choices[0]&&d.choices[0].message&&d.choices[0].message.content)||'Maaf, tidak ada jawaban. Coba lagi!';
    load.remove();addMsg('bot',reply);
    chatHist.push({role:'assistant',content:reply});
    if(chatHist.length>20)chatHist=chatHist.slice(-20);
  })
  .catch(function(err){
    load.remove();
    addMsg('bot','Koneksi ke AI bermasalah. Pastikan internet aktif dan API Key benar, lalu coba lagi.');
    console.error('Groq error:',err);
  });
}

function addMsg(type,text,loading) {
  var msgs=document.getElementById('chat-msgs');
  var d=document.createElement('div');
  d.className='msg '+type+(loading?' loading':'');
  d.textContent=text;
  msgs.appendChild(d);
  msgs.scrollTop=msgs.scrollHeight;
  return d;
}

// ===== ISU NASIONAL =====
var ISU=[
  {icon:'🌫️',judul:'Kebakaran Hutan & Lahan',region:'Sumatera & Kalimantan',desc:'Jutaan hektar terbakar setiap kemarau, kabut asap menyelimuti belasan provinsi.'},
  {icon:'🌊',judul:'Pencemaran Sungai & Laut',region:'Seluruh Indonesia',desc:'Citarum, Siak, Musi terancam limbah industri dan sampah rumah tangga.'},
  {icon:'🏝️',judul:'Abrasi Pulau Kecil',region:'NTT, Maluku, Papua',desc:'Ribuan pulau kecil terancam tenggelam akibat kenaikan muka air laut.'},
  {icon:'🌴',judul:'Deforestasi Hutan Tropis',region:'Kalimantan & Papua',desc:'Hutan tropis ketiga terluas di dunia terus berkurang demi perkebunan dan tambang.'},
  {icon:'🏭',judul:'Limbah Industri Kota Besar',region:'Jawa & Sumatera',desc:'Kawasan industri membuang limbah ke sungai tanpa pengolahan yang memadai.'},
  {icon:'🗑️',judul:'Krisis Sampah Perkotaan',region:'Jakarta, Surabaya, Medan',desc:'TPA sudah over kapasitas. Indonesia hasilkan 60 juta ton sampah per tahun.'}
];
document.getElementById('isu-grid').innerHTML=ISU.map(function(x){
  return'<div class="isu-card"><span class="isu-icon">'+x.icon+'</span><h4>'+x.judul+'</h4><p>'+x.desc+'</p><span class="isu-reg">📍 '+x.region+'</span></div>';
}).join('');

// ===== INIT =====
buildProvSelect();
startListener();
