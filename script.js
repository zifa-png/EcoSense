// ============================================================
// ECOSENSE INDONESIA — script.js
// Data Lokasi 3 Tingkat: Provinsi > Kota/Kab > Kecamatan
// Data laporan mulai dari 0 (kosong)
// ============================================================

var LOKASI = {
  'Aceh': {
    lat:4.695, lng:96.749,
    kota: {
      'Kota Banda Aceh':['Baiturrahman','Banda Raya','Jaya Baru','Kuta Alam','Kuta Raja','Lueng Bata','Meuraxa','Syiah Kuala','Ulee Kareng'],
      'Kota Sabang':['Sukajaya','Sukakarya'],
      'Kota Langsa':['Langsa Barat','Langsa Baro','Langsa Kota','Langsa Lama','Langsa Timur'],
      'Kota Lhokseumawe':['Banda Sakti','Blang Mangat','Muara Dua','Muara Satu'],
      'Kab. Aceh Besar':['Baitussalam','Darul Imarah','Ingin Jaya','Kuta Baro','Montasik','Peukan Bada','Simpang Tiga'],
      'Kab. Pidie':['Batee','Delima','Grong-Grong','Kembang Tanjong','Mutiara','Sigli'],
      'Kab. Aceh Utara':['Baktiya','Dewantara','Lhoksukon','Muara Batu','Nisam','Samudera']
    }
  },
  'Sumatera Utara': {
    lat:2.115, lng:99.533,
    kota: {
      'Kota Medan':['Medan Amplas','Medan Area','Medan Baru','Medan Belawan','Medan Deli','Medan Denai','Medan Helvetia','Medan Johor','Medan Kota','Medan Labuhan','Medan Marelan','Medan Petisah','Medan Polonia','Medan Selayang','Medan Sunggal','Medan Tembung','Medan Timur','Medan Tuntungan','Medan Maimun','Medan Perjuangan','Medan Barat'],
      'Kota Binjai':['Binjai Barat','Binjai Kota','Binjai Selatan','Binjai Timur','Binjai Utara'],
      'Kota Pematangsiantar':['Siantar Barat','Siantar Marihat','Siantar Marimbun','Siantar Martoba','Siantar Selatan','Siantar Timur','Siantar Utara','Siantar Sitalasari'],
      'Kota Tebing Tinggi':['Bajenis','Padang Hulu','Rambutan','Tebing Tinggi Kota','Padang Hilir'],
      'Kab. Deli Serdang':['Batang Kuis','Beringin','Galang','Hamparan Perak','Labuhan Deli','Lubuk Pakam','Medan Amplas','Pantai Labu','Percut Sei Tuan','Sunggal','Tanjung Morawa'],
      'Kab. Langkat':['Bahorok','Besitang','Hinai','Kuala','Pangkalan Susu','Sawit Seberang','Sei Lepan','Stabat','Tanjung Pura','Wampu'],
      'Kab. Asahan':['Air Batu','Air Joman','Aek Ledong','Aek Songsongan','Kota Kisaran Barat','Kota Kisaran Timur','Lima Puluh','Meranti','Pulau Rakyat','Tanjung Balai'],
      'Kab. Simalungun':['Dolok Batu Nanggar','Dolok Pardamean','Gunung Malela','Gunung Maligas','Haranggaol Horisan','Hatonduhan','Jawa Maraja Bah Jambi','Jorlang Hataran'],
      'Kab. Tapanuli Utara':['Adian Koting','Adiankoting','Garoga','Muara','Pahae Jae','Pahae Julu','Pagaran','Pangaribuan','Parmonangan','Siatas Barita','Siborong-borong','Sipoholon','Tarutung'],
      'Kab. Tapanuli Selatan':['Angkola Barat','Angkola Selatan','Angkola Timur','Batang Angkola','Batang Toru','Dolok','Dolok Sigompulon','Lubuk Barumun','Marancar','Padang Sidimpuan Batunadua','Saipar Dolok Hole','Sayur Matinggi','Sipirok']
    }
  },
  'Sumatera Barat': {
    lat:-0.739, lng:100.800,
    kota: {
      'Kota Padang':['Bungus Teluk Kabung','Koto Tangah','Kuranji','Lubuk Begalung','Lubuk Kilangan','Nanggalo','Padang Barat','Padang Selatan','Padang Timur','Padang Utara','Pauh'],
      'Kota Bukittinggi':['Aur Birugo Tigo Baleh','Guguk Panjang','Mandiangin Koto Salayan','Payakumbuh Barat','Payakumbuh Timur'],
      'Kota Payakumbuh':['Lamposi Tigo Nagori','Latina','Payakumbuh Barat','Payakumbuh Selatan','Payakumbuh Timur','Payakumbuh Utara'],
      'Kota Solok':['Lubuk Sikarah','Tanjung Harapan'],
      'Kota Padang Panjang':['Padang Panjang Barat','Padang Panjang Timur'],
      'Kab. Padang Pariaman':['Batang Anai','Batang Gasan','Enam Lingkung','IV Koto Aur Malintang','Lubuk Alung','Nan Sabaris','Patamuan','Sungai Garingging','Sungai Limau','Ulakan Tapakis','V Koto Kampung Dalam'],
      'Kab. Agam':['Ampek Angkek','Ampek Nagari','Banuhampu','Baso','Canduang','IV Angkek','Kamang Magek','Lubuk Basung','Matur','Palembayan','Palupuh','Sungai Pua','Tilatang Kamang','Tanjung Mutiara'],
      'Kab. Pasaman':['Bonjol','Duo Koto','Lubuk Sikaping','Mapat Tunggul','Mapat Tunggul Selatan','Padang Gelugur','Panti','Rao','Rao Selatan','Rao Utara','Simpang Alahan Mati','Tigo Nagari']
    }
  },
  'Riau': {
    lat:0.293, lng:101.707,
    kota: {
      'Kota Pekanbaru':['Bukit Raya','Lima Puluh','Marpoyan Damai','Pekanbaru Kota','Payung Sekaki','Rumbai','Rumbai Pesisir','Sail','Senapelan','Sukajadi','Tampan','Tenayan Raya'],
      'Kota Dumai':['Bukit Kapur','Dumai Barat','Dumai Kota','Dumai Selatan','Dumai Timur','Medang Kampai','Sungai Sembilan'],
      'Kab. Kampar':['Bangkinang','Bangkinang Kota','Kampar','Kampar Kiri','Kampar Kiri Hilir','Kampar Kiri Hulu','Kampar Timur','Kampar Utara','Kuok','Perhentian Raja','Rumbio Jaya','Salo','Siak Hulu','Tambang','Tapung','Tapung Hilir','Tapung Hulu'],
      'Kab. Pelalawan':['Bandar Sei Kijang','Bunut','Kerumutan','Kuala Kampar','Langgam','Pelalawan','Pangkalan Kerinci','Pangkalan Kuras','Pangkalan Lesung','Ukui'],
      'Kab. Siak':['Bunga Raya','Dayun','Kandis','Kerinci Kanan','Koto Gasib','Lubuk Dalam','Mempura','Minas','Sabak Auh','Siak','Sungai Apit','Tualang'],
      'Kab. Rokan Hulu':['Bangun Purba','Bonai Darussalam','Kabun','Kepenuhan','Kepenuhan Hulu','Kunto Darussalam','Pagaran Tapah Darussalam','Pendalian IV Koto','Rambah','Rambah Hilir','Rambah Samo','Rokan IV Koto','Tambusai','Tambusai Utara','Ujungbatu'],
      'Kab. Indragiri Hulu':['Batang Cenaku','Batang Gangsal','Batang Peranap','Kelayang','Kuala Cenaku','Lirik','Lubuk Batu Jaya','Pasir Penyu','Peranap','Rakit Kulim','Rengat','Rengat Barat','Sei Lala','Seberida'],
      'Kab. Bengkalis':['Bantan','Bengkalis','Bukit Batu','Mandau','Pinggir','Rupat','Rupat Utara','Siak Kecil']
    }
  },
  'Jambi': {
    lat:-1.612, lng:103.616,
    kota: {
      'Kota Jambi':['Danau Sipin','Danau Teluk','Jambi Selatan','Jambi Timur','Jelutung','Kota Baru','Lalang','Pasar Jambi','Pelayangan','Telanaipura'],
      'Kota Sungai Penuh':['Hamparan Rawang','Pondok Tinggi','Kumun Debai','Pesisir Bukit','Sungai Bungkal','Tanah Kampung'],
      'Kab. Batanghari':['Bajubang','Batin XXIV','Maro Sebo Ilir','Maro Sebo Ulu','Mersam','Muara Bulian','Muara Tembesi','Pemayung'],
      'Kab. Muaro Jambi':['Bahar Selatan','Bahar Utara','Jambi Luar Kota','Kumpeh','Kumpeh Ulu','Mestong','Sungai Bahar','Sungai Gelam','Taman Rajo'],
      'Kab. Tanjung Jabung Timur':['Berbak','Dendang','Geragai','Mendahara','Mendahara Ulu','Muara Sabak Barat','Muara Sabak Timur','Nipah Panjang','Rantau Rasau','Sadu']
    }
  },
  'Sumatera Selatan': {
    lat:-3.316, lng:103.914,
    kota: {
      'Kota Palembang':['Alang-Alang Lebar','Bukit Kecil','Gandus','Ilir Barat I','Ilir Barat II','Ilir Timur I','Ilir Timur II','Ilir Timur III','Jakabaring','Kalidoni','Kemuning','Kertapati','Plaju','Sako','Seberang Ulu I','Seberang Ulu II','Sematang Borang','Sukarami'],
      'Kota Lubuklinggau':['Lubuklinggau Barat I','Lubuklinggau Barat II','Lubuklinggau Selatan I','Lubuklinggau Selatan II','Lubuklinggau Timur I','Lubuklinggau Timur II','Lubuklinggau Utara I','Lubuklinggau Utara II'],
      'Kota Prabumulih':['Cambai','Prabumulih Barat','Prabumulih Selatan','Prabumulih Timur','Prabumulih Utara','Rambang Kapak Tengah'],
      'Kab. Banyuasin':['Air Kumbang','Banyuasin I','Banyuasin II','Banyuasin III','Betung','Makarti Jaya','Muara Padang','Muara Sugihan','Muara Telang','Pulau Rimau','Rambutan','Rantau Bayur','Sembawa','Selat Penuguan','Suak Tapeh','Talang Kelapa','Tungkal Ilir'],
      'Kab. Ogan Ilir':['Indralaya','Indralaya Selatan','Indralaya Utara','Kandis','Lubuk Keliat','Muara Kuang','Payaraman','Pemulutan','Pemulutan Barat','Pemulutan Selatan','Rantau Alai','Rantau Panjang','Rambang Kuang','Sungai Pinang','Tanjung Batu','Tanjung Raja']
    }
  },
  'Bengkulu': {
    lat:-3.793, lng:102.261,
    kota: {
      'Kota Bengkulu':['Gading Cempaka','Kampung Melayu','Muara Bangka Hulu','Ratu Agung','Ratu Samban','Selebar','Singaran Pati','Sungai Serut','Teluk Segara'],
      'Kab. Bengkulu Utara':['Air Besi','Air Napal','Arma Jaya','Batik Nau','Enggano','Giri Mulya','Hulu Palik','Kerkap','Ketahun','Lais','Napal Putih','Padang Jaya','Putri Hijau','Tanjung Agung Palik'],
      'Kab. Seluma':['Air Periukan','Ilir Talo','Lubuk Sandi','Seluma','Seluma Barat','Seluma Selatan','Seluma Timur','Seluma Utara','Sukaraja','Talo','Talo Kecil','Ulu Talo']
    }
  },
  'Lampung': {
    lat:-4.558, lng:105.405,
    kota: {
      'Kota Bandar Lampung':['Bumi Waras','Enggal','Kedamaian','Kedaton','Kemiling','Labuhan Ratu','Langkapura','Panjang','Rajabasa','Sukabumi','Sukarame','Tanjung Karang Barat','Tanjung Karang Pusat','Tanjung Karang Timur','Tanjung Senang','Teluk Betung Barat','Teluk Betung Selatan','Teluk Betung Timur','Teluk Betung Utara','Way Halim'],
      'Kota Metro':['Metro Barat','Metro Pusat','Metro Selatan','Metro Timur','Metro Utara'],
      'Kab. Lampung Tengah':['Bandar Mataram','Bangun Rejo','Bekri','Bumi Nabung','Bumi Ratu Nuban','Gunung Sugih','Kalirejo','Kota Gajah','Padang Ratu','Punggur','Putra Rumbia','Selagai Lingga','Sendang Agung','Seputih Agung','Seputih Banyak','Seputih Mataram','Seputih Raman','Seputih Surabaya','Terbanggi Besar','Trimurjo','Anak Tuha','Anak Ratu Aji'],
      'Kab. Lampung Selatan':['Bakauheni','Candipuro','Jati Agung','Kalianda','Katibung','Ketapang','Merbau Mataram','Natar','Palas','Penengahan','Rajabasa','Sidomulyo','Sragi','Tanjung Bintang','Tanjung Sari','Way Panji','Way Sulan'],
      'Kab. Pesawaran':['Gedong Tataan','Kedondong','Marga Punduh','Negeri Katon','Padang Cermin','Punduh Pidada','Tegineneng','Way Khilau','Way Lima']
    }
  },
  'Kep. Bangka Belitung': {
    lat:-2.741, lng:106.440,
    kota: {
      'Kota Pangkal Pinang':['Bukit Intan','Gabek','Gerunggang','Girimaya','Pangkalbalam','Rangkui','Taman Sari'],
      'Kab. Bangka':['Bakam','Belinyu','Mendo Barat','Merawang','Pemali','Puding Besar','Riau Silip','Sungailiat'],
      'Kab. Bangka Tengah':['Koba','Namang','Pangkalan Baru','Simpang Katis','Sungai Selan','Lubuk Besar'],
      'Kab. Bangka Barat':['Jebus','Kelapa','Mentok','Muntok','Parittiga','Simpang Teritip','Tempilang'],
      'Kab. Belitung':['Badau','Membalong','Selat Nasik','Sijuk','Tanjungpandan'],
      'Kab. Belitung Timur':['Damar','Dendang','Gantung','Kelapa Kampit','Manggar','Simpang Pesak','Simpang Renggiang']
    }
  },
  'Kep. Riau': {
    lat:3.946, lng:108.142,
    kota: {
      'Kota Batam':['Batu Aji','Batu Ampar','Bengkong','Bulang','Galang','Lubuk Baja','Nongsa','Sagulung','Sekupang','Belakang Padang','Batam Kota'],
      'Kota Tanjungpinang':['Bukit Bestari','Tanjungpinang Barat','Tanjungpinang Kota','Tanjungpinang Timur'],
      'Kab. Bintan':['Bintan Pesisir','Bintan Timur','Bintan Utara','Gunung Kijang','Mantang','Seri Kuala Lobam','Sri Bintan','Tambelan','Teluk Bintan','Teluk Sebong'],
      'Kab. Karimun':['Buru','Durai','Karimun','Kundur','Kundur Barat','Kundur Utara','Meral','Meral Barat','Moro','Ungar','Tebing']
    }
  },
  'DKI Jakarta': {
    lat:-6.211, lng:106.845,
    kota: {
      'Jakarta Pusat':['Cempaka Putih','Gambir','Johar Baru','Kemayoran','Menteng','Sawah Besar','Senen','Tanah Abang'],
      'Jakarta Utara':['Cilincing','Kelapa Gading','Koja','Pademangan','Penjaringan','Tanjung Priok'],
      'Jakarta Barat':['Cengkareng','Grogol Petamburan','Kalideres','Kebon Jeruk','Kembangan','Palmerah','Taman Sari','Tambora'],
      'Jakarta Selatan':['Cilandak','Jagakarsa','Kebayoran Baru','Kebayoran Lama','Mampang Prapatan','Pancoran','Pasar Minggu','Pesanggrahan','Setiabudi','Tebet'],
      'Jakarta Timur':['Cakung','Cipayung','Ciracas','Duren Sawit','Jatinegara','Kramat Jati','Makasar','Matraman','Pasar Rebo','Pulo Gadung'],
      'Kep. Seribu':['Kepulauan Seribu Utara','Kepulauan Seribu Selatan']
    }
  },
  'Jawa Barat': {
    lat:-6.889, lng:107.640,
    kota: {
      'Kota Bandung':['Andir','Antapani','Arcamanik','Astanaanyar','Babakan Ciparay','Bandung Kidul','Bandung Kulon','Bandung Wetan','Batununggal','Bojongloa Kaler','Bojongloa Kidul','Buah Batu','Cibeunying Kaler','Cibeunying Kidul','Cicendo','Cidadap','Cibiru','Cinambo','Coblong','Gedebage','Kiaracondong','Lengkong','Mandalajati','Panyileukan','Rancasari','Regol','Sukajadi','Sukasari','Sumur Bandung','Ujungberung'],
      'Kota Bekasi':['Bantargebang','Bekasi Barat','Bekasi Selatan','Bekasi Timur','Bekasi Utara','Jatiasih','Jatisampurna','Medansatria','Mustikajaya','Pondokgede','Pondokmelati','Rawalumbu'],
      'Kota Depok':['Beji','Bojongsari','Cilodong','Cimanggis','Cinere','Cipayung','Limo','Pancoranmas','Sawangan','Sukmajaya','Tapos'],
      'Kota Bogor':['Bogor Barat','Bogor Selatan','Bogor Tengah','Bogor Timur','Bogor Utara','Tanah Sareal'],
      'Kota Cimahi':['Cimahi Selatan','Cimahi Tengah','Cimahi Utara'],
      'Kab. Bogor':['Babakan Madang','Bojonggede','Caringin','Cariu','Cigombong','Ciawi','Cibinong','Cileungsi','Cisarua','Jonggol','Kemang','Leuwiliang','Megamendung','Parung','Parung Panjang','Rumpin','Tajurhalang','Tenjo','Citeureup'],
      'Kab. Karawang':['Batujaya','Ciampel','Cibuaya','Cikampek','Cilamaya Kulon','Cilamaya Wetan','Cilebar','Jayakerta','Karawang Barat','Karawang Timur','Klari','Kotabaru','Majalaya','Pakisjaya','Pangkalan','Pedes','Purwasari','Rawamerta','Rengasdengklok','Tegalwaru','Telukjambe Barat','Telukjambe Timur','Tempuran','Tirtajaya','Tirtamulya'],
      'Kab. Bekasi':['Babelan','Bojongmangu','Cabangbungin','Cibarusah','Cibitung','Cikarang Barat','Cikarang Pusat','Cikarang Selatan','Cikarang Timur','Cikarang Utara','Cikarang Pusat','Karangbahagia','Kedungwaringin','Muaragembong','Pebayuran','Serang Baru','Setu','Sukakarya','Sukatani','Sukawangi','Tambelang','Tarumajaya']
    }
  },
  'Jawa Tengah': {
    lat:-7.150, lng:110.140,
    kota: {
      'Kota Semarang':['Banyumanik','Candisari','Gajah Mungkur','Gayamsari','Genuk','Gunungpati','Mijen','Ngaliyan','Pedurungan','Semarang Barat','Semarang Selatan','Semarang Tengah','Semarang Timur','Semarang Utara','Tembalang','Tugu'],
      'Kota Solo':['Banjarsari','Jebres','Laweyan','Pasar Kliwon','Serengan'],
      'Kota Magelang':['Magelang Selatan','Magelang Tengah','Magelang Utara'],
      'Kota Salatiga':['Argomulyo','Sidorejo','Sidomukti','Tingkir'],
      'Kota Tegal':['Margadana','Tegal Barat','Tegal Selatan','Tegal Timur'],
      'Kab. Semarang':['Ambarawa','Bandungan','Bancak','Banyubiru','Bringin','Bergas','Getasan','Jambu','Kaliwungu','Kendal','Pabelan','Pringapus','Sumowono','Suruh','Susukan','Tengaran','Tuntang','Ungaran Barat','Ungaran Timur'],
      'Kab. Klaten':['Bayat','Cawas','Ceper','Delanggu','Gantiwarno','Jatinom','Jogonalan','Juwiring','Kalikotes','Karanganom','Karangdowo','Karangnongko','Kebonarum','Kemalang','Klaten Selatan','Klaten Tengah','Klaten Utara','Manisrenggo','Ngawen','Pedan','Polanharjo','Prambanan','Trucuk','Tulung','Wedi','Wonosari'],
      'Kab. Banyumas':['Ajibarang','Banyumas','Baturraden','Cilongok','Gumelar','Jatilawang','Kalibagor','Karanglewas','Kebasen','Kedung Banteng','Kemranjen','Kembaran','Lumbir','Patikraja','Pekuncen','Purwojati','Purwokerto Barat','Purwokerto Selatan','Purwokerto Timur','Purwokerto Utara','Rawalo','Sokaraja','Somagede','Sumbang','Sumpiuh','Tambak','Wangon']
    }
  },
  'DI Yogyakarta': {
    lat:-7.797, lng:110.370,
    kota: {
      'Kota Yogyakarta':['Danurejan','Gedongtengen','Gondokusuman','Gondomanan','Jetis','Kotagede','Kraton','Mantrijeron','Mergangsan','Ngampilan','Pakualaman','Tegalrejo','Umbulharjo','Wirobrajan'],
      'Kab. Sleman':['Berbah','Cangkringan','Depok','Gamping','Godean','Kalasan','Minggir','Mlati','Moyudan','Ngaglik','Ngemplak','Pakem','Prambanan','Seyegan','Sleman','Tempel','Turi'],
      'Kab. Bantul':['Bambanglipuro','Banguntapan','Bantul','Dlingo','Imogiri','Jetis','Kasihan','Kretek','Pajangan','Pandak','Piyungan','Pleret','Pundong','Sanden','Sedayu','Sewon','Srandakan'],
      'Kab. Gunung Kidul':['Gedangsari','Girisubo','Karangmojo','Ngawen','Nglipar','Paliyan','Panggang','Patuk','Playen','Ponjong','Purwosari','Rongkop','Sapto Sari','Semanu','Semin','Tanjungsari','Tepus','Wonosari'],
      'Kab. Kulon Progo':['Galur','Girimulyo','Kalibawang','Kokap','Lendah','Nanggulan','Panjatan','Pengasih','Samigaluh','Sentolo','Temon','Wates']
    }
  },
  'Jawa Timur': {
    lat:-7.536, lng:112.239,
    kota: {
      'Kota Surabaya':['Asemrowo','Benowo','Bubutan','Bulak','Dukuh Pakis','Gayungan','Genteng','Gubeng','Gunung Anyar','Jambangan','Karang Pilang','Kenjeran','Krembangan','Lakarsantri','Mulyorejo','Pabean Cantian','Pakal','Rungkut','Sambikerep','Sawahan','Semampir','Simokerto','Sukolilo','Sukomanunggal','Tambaksari','Tandes','Tegalsari','Tenggilis Mejoyo','Wiyung','Wonocolo','Wonokromo'],
      'Kota Malang':['Blimbing','Kedungkandang','Klojen','Lowokwaru','Sukun'],
      'Kota Kediri':['Mojoroto','Pesantren','Kota'],
      'Kota Madiun':['Kartoharjo','Manguharjo','Taman'],
      'Kota Pasuruan':['Bugul Kidul','Gadingrejo','Purworejo','Panggungrejo'],
      'Kab. Sidoarjo':['Balongbendo','Buduran','Candi','Gedangan','Jabon','Krembung','Krian','Prambon','Porong','Sedati','Sidoarjo','Sukodono','Taman','Tanggulangin','Tarik','Tulangan','Waru','Wonoayu'],
      'Kab. Gresik':['Balongpanggang','Bungah','Cerme','Driyorejo','Duduk Sampeyan','Gresik','Kebomas','Kedamean','Manyar','Menganti','Panceng','Sangkapura','Sidayu','Tambak','Ujung Pangkah','Wringinanom'],
      'Kab. Mojokerto':['Bangsal','Dawarblandong','Dlanggu','Gedeg','Jetis','Jatirejo','Kemlagi','Kutorejo','Mojoanyar','Mojosari','Pacet','Pungging','Puri','Sooko','Trawas','Trowulan','Gondang','Ngoro']
    }
  },
  'Banten': {
    lat:-6.406, lng:106.064,
    kota: {
      'Kota Serang':['Cipocok Jaya','Curug','Kasemen','Serang','Taktakan','Walantaka'],
      'Kota Cilegon':['Cibeber','Cilegon','Citangkil','Ciwandan','Grogol','Jombang','Pulomerak','Purwakarta'],
      'Kota Tangerang':['Batuceper','Benda','Ciledug','Cipondoh','Jatiuwung','Karang Tengah','Karawaci','Larangan','Neglasari','Periuk','Pinang','Tangerang','Cibodas'],
      'Kota Tangerang Selatan':['Ciputat','Ciputat Timur','Pamulang','Pondok Aren','Serpong','Serpong Utara','Setu'],
      'Kab. Tangerang':['Balaraja','Cisauk','Cisoka','Curug','Gunung Kaler','Jambe','Jayanti','Kemiri','Koper','Kronjo','Legok','Mauk','Mekar Baru','Panongan','Pasar Kemis','Pagedangan','Rajeg','Sepatan','Sepatan Timur','Sindang Jaya','Solear','Sukadiri','Sukamulya','Tigaraksa'],
      'Kab. Serang':['Baros','Binuang','Bojonegara','Carenang','Cikande','Cinangka','Ciomas','Ciruas','Jawilan','Kibin','Kopo','Kramatwatu','Lebak Wangi','Mancak','Nyomplong','Pabuaran','Padarincang','Pamarayan','Petir','Pontang','Tirtayasa','Tunjung Teja','Waringin Kurung'],
      'Kab. Lebak':['Bayah','Banjarsari','Bojongmanik','Cibadak','Cibeber','Cijaku','Cikulur','Cileles','Cilograng','Cimarga','Cipanas','Cirinten','Curugbitung','Gunung Kencana','Kalanganyar','Lebak Gedong','Leuwidamar','Maja','Malingping','Muncang','Panggarangan','Rangkasbitung','Sajira','Sobang','Wanasalam','Warunggunung']
    }
  },
  'Bali': {
    lat:-8.340, lng:115.091,
    kota: {
      'Kota Denpasar':['Denpasar Barat','Denpasar Selatan','Denpasar Timur','Denpasar Utara'],
      'Kab. Badung':['Abiansemal','Kuta','Kuta Selatan','Kuta Utara','Mengwi','Petang'],
      'Kab. Gianyar':['Blahbatuh','Gianyar','Payangan','Sukawati','Tampaksiring','Tegallalang','Ubud'],
      'Kab. Tabanan':['Baturiti','Kediri','Kerambitan','Marga','Penebel','Pupuan','Selemadeg','Selemadeg Barat','Selemadeg Timur','Tabanan'],
      'Kab. Buleleng':['Banjar','Busungbiu','Gerokgak','Kubutambahan','Sawan','Seririt','Singaraja','Sukasada','Tejakula'],
      'Kab. Karangasem':['Abang','Bebandem','Karangasem','Kubu','Manggis','Rendang','Selat','Sidemen'],
      'Kab. Klungkung':['Banjarangkan','Dawan','Klungkung','Nusa Penida'],
      'Kab. Bangli':['Bangli','Kintamani','Susut','Tembuku'],
      'Kab. Jembrana':['Jembrana','Melaya','Mendoyo','Negara','Pekutatan']
    }
  },
  'NTB': {
    lat:-8.653, lng:117.361,
    kota: {
      'Kota Mataram':['Ampenan','Cakranegara','Mataram','Sandubaya','Sekarbela','Selaparang'],
      'Kota Bima':['Asakota','Mpunda','Raba','Rasanae Barat','Rasanae Timur'],
      'Kab. Lombok Barat':['Batu Layar','Gerung','Gunung Sari','Kediri','Labuapi','Lembar','Lingsar','Narmada','Sekotong','Kuripan'],
      'Kab. Lombok Tengah':['Batukliang','Batukliang Utara','Janapria','Jonggat','Kopang','Praya','Praya Barat','Praya Barat Daya','Praya Timur','Pringgarata','Pujut'],
      'Kab. Lombok Timur':['Aikmel','Jerowaru','Keruak','Labuhan Haji','Masbagik','Montong Gading','Pringgabaya','Pringgasela','Sakra','Sakra Barat','Sakra Timur','Sambalia','Selong','Sembalun','Sukamulia','Suralaga','Terara','Wanasaba'],
      'Kab. Sumbawa':['Alas','Alas Barat','Batu Lanteh','Buer','Empang','Labangka','Labuhan Badas','Lantung','Lape','Lenangguar','Lopok','Lunyuk','Maronge','Moyo Hilir','Moyo Hulu','Moyo Utara','Orong Telu','Plampang','Rhee','Ropang','Sumbawa','Tarano','Unter Iwes','Utan']
    }
  },
  'NTT': {
    lat:-8.657, lng:121.079,
    kota: {
      'Kota Kupang':['Alak','Kelapa Lima','Kota Lama','Kota Raja','Maulafa','Oebobo'],
      'Kab. Kupang':['Amabi Oefeto','Amabi Oefeto Timur','Amarasi','Amarasi Barat','Amarasi Selatan','Amarasi Timur','Amfoang Barat Daya','Amfoang Barat Laut','Amfoang Selatan','Amfoang Tengah','Amfoang Timur','Amfoang Utara','Fatuleu','Fatuleu Barat','Fatuleu Tengah','Kupang Barat','Kupang Tengah','Kupang Timur','Nekamese','Semau','Semau Selatan','Sulamu','Taebenu','Takari'],
      'Kab. Ende':['Detukeli','Detusoko','Ende','Ende Selatan','Ende Tengah','Ende Timur','Ende Utara','Lio Timur','Maukaro','Nangapanda','Ndona','Ndona Timur','Ndori','Pulau Ende','Wewaria'],
      'Kab. Flores Timur':['Adonara','Adonara Barat','Adonara Tengah','Adonara Timur','Ile Bura','Ile Mandiri','Kelubagolit','Larantuka','Lewolema','Solor Barat','Solor Selatan','Solor Timur','Titehena','Wulanggitang'],
      'Kab. Sikka':['Alok','Alok Barat','Alok Timur','Bola','Doreng','Hewokloang','Kangae','Kewapante','Koting','Lela','Mapitara','Mego','Maumere','Nita','Paga','Palue','Nelle','Talibura','Tana Wawo','Waigete','Waiblama']
    }
  },
  'Kalimantan Barat': {
    lat:0.130, lng:111.087,
    kota: {
      'Kota Pontianak':['Pontianak Barat','Pontianak Kota','Pontianak Selatan','Pontianak Tenggara','Pontianak Timur','Pontianak Utara'],
      'Kota Singkawang':['Singkawang Barat','Singkawang Selatan','Singkawang Tengah','Singkawang Timur','Singkawang Utara'],
      'Kab. Kubu Raya':['Batu Ampar','Kuala Mandor B','Kubu','Rasau Jaya','Sei Ambawang','Sei Kakap','Sei Raya','Sungai Raya','Sungai Ambawang','Terentang'],
      'Kab. Mempawah':['Anjongan','Mempawah Hilir','Mempawah Hulu','Sadaniang','Siantan','Segedong','Sungai Kunyit','Sungai Pinyuh','Toho'],
      'Kab. Sambas':['Jawai','Jawai Selatan','Paloh','Sajad','Sajingan Besar','Sambas','Sebawi','Sejangkung','Semelagi','Semparuk','Subah','Tebas','Teluk Keramat','Tekarang'],
      'Kab. Sanggau':['Balai','Beduai','Entikong','Jangkang','Kapuas','Kembayan','Meliau','Mukok','Noyan','Parindu','Sekayam','Tayan Hilir','Tayan Hulu','Toba']
    }
  },
  'Kalimantan Tengah': {
    lat:-1.682, lng:113.382,
    kota: {
      'Kota Palangkaraya':['Bukit Batu','Jekan Raya','Pahandut','Rakumpit','Sabangau'],
      'Kab. Kotawaringin Barat':['Arut Selatan','Arut Utara','Kotawaringin Lama','Kumai','Pangkalan Banteng','Pangkalan Lada'],
      'Kab. Kotawaringin Timur':['Antang Kalang','Baamang','Bukit Santuai','Cempaga','Cempaga Hulu','Kota Besi','Mentawa Baru Ketapang','Mentaya Hilir Selatan','Mentaya Hilir Utara','Mentaya Hulu','Parenggean','Pulau Hanaut','Seranau','Telaga Antang','Telawang','Tualan Hulu'],
      'Kab. Kapuas':['Bataguh','Basarang','Dadahup','Kapuas Barat','Kapuas Hilir','Kapuas Hulu','Kapuas Kuala','Kapuas Murung','Kapuas Tengah','Kapuas Timur','Mantangai','Pasak Talawang','Pulau Petak','Selat','Timpah'],
      'Kab. Barito Selatan':['Dusun Hilir','Dusun Selatan','Dusun Tengah','Dusun Utara','Gunung Bintang Awai','Jenamas','Karau Kuala','Lahei','Lahei Barat','Pandawan']
    }
  },
  'Kalimantan Selatan': {
    lat:-3.093, lng:115.284,
    kota: {
      'Kota Banjarmasin':['Banjar Selatan','Banjar Tengah','Banjar Timur','Banjarmasin Barat','Banjarmasin Selatan','Banjarmasin Tengah','Banjarmasin Timur','Banjarmasin Utara'],
      'Kota Banjarbaru':['Banjarbaru Selatan','Banjarbaru Utara','Cempaka','Landasan Ulin','Liang Anggang'],
      'Kab. Banjar':['Aranio','Astambul','Beruntung Baru','Gambut','Karang Intan','Kertak Hanyar','Martapura','Martapura Barat','Martapura Timur','Mataraman','Pengaron','Peramasan','Sambung Makmur','Simpang Empat','Sungai Pinang','Sungai Tabuk','Tatah Makmur'],
      'Kab. Tapin':['Binuang','Bungur','Candi Laras Selatan','Candi Laras Utara','Hatungun','Lokpaikat','Piani','Salam Babaris','Tapin Selatan','Tapin Tengah','Tapin Utara'],
      'Kab. Hulu Sungai Selatan':['Angkinang','Daha Barat','Daha Selatan','Daha Utara','Kalumpang','Kandangan','Loksado','Padang Batung','Simpur','Telaga Langsat']
    }
  },
  'Kalimantan Timur': {
    lat:1.636, lng:116.419,
    kota: {
      'Kota Samarinda':['Loa Janan Ilir','Palaran','Samarinda Ilir','Samarinda Kota','Samarinda Seberang','Samarinda Ulu','Samarinda Utara','Sambutan','Sungai Kunjang','Sungai Pinang'],
      'Kota Balikpapan':['Balikpapan Barat','Balikpapan Kota','Balikpapan Selatan','Balikpapan Tengah','Balikpapan Timur','Balikpapan Utara'],
      'Kota Bontang':['Bontang Barat','Bontang Selatan','Bontang Utara'],
      'Kab. Kutai Kartanegara':['Anggana','Kembang Janggut','Kenohan','Kota Bangun','Loa Janan','Loa Kulu','Marang Kayu','Muara Badak','Muara Jawa','Muara Kaman','Muara Muntai','Muara Wis','Samboja','Sanga-Sanga','Sebulu','Tabang','Tenggarong','Tenggarong Seberang'],
      'Kab. Berau':['Batu Putih','Biduk-Biduk','Biatan','Gunung Tabur','Kelay','Maratua','Pulau Derawan','Sambaliung','Segah','Tabalar','Talisayan','Teluk Bayur','Tanjung Redeb']
    }
  },
  'Kalimantan Utara': {
    lat:3.073, lng:116.041,
    kota: {
      'Kota Tarakan':['Tarakan Barat','Tarakan Tengah','Tarakan Timur','Tarakan Utara'],
      'Kab. Bulungan':['Peso','Peso Ilir','Sekatak','Tanjung Palas','Tanjung Palas Barat','Tanjung Palas Tengah','Tanjung Palas Timur','Tanjung Palas Utara','Tanjung Selor','Tanjung Setilas'],
      'Kab. Malinau':['Bahau Hulu','Kayan Hilir','Kayan Hulu','Kayan Selatan','Malinau Barat','Malinau Kota','Malinau Selatan','Malinau Selatan Hilir','Malinau Selatan Hulu','Malinau Utara','Mentarang','Mentarang Hulu','Pujungan','Sungai Boh','Sungai Tubu'],
      'Kab. Nunukan':['Krayan','Krayan Selatan','Lumbis','Lumbis Ogong','Nunukan','Nunukan Selatan','Sebatik','Sebatik Barat','Sebatik Tengah','Sebatik Timur','Sebatik Utara','Sei Menggaris','Sembakung','Sembakung Atulai','Tulin Onsoi'],
      'Kab. Tana Tidung':['Betayau','Muruk Rian','Sesayap','Sesayap Hilir','Tana Lia']
    }
  },
  'Sulawesi Utara': {
    lat:0.627, lng:124.021,
    kota: {
      'Kota Manado':['Bunaken','Malalayang','Mapanget','Paal Dua','Sario','Singkil','Tikala','Tuminting','Wanea','Wenang'],
      'Kota Bitung':['Aertembaga','Girian','Lembeh Selatan','Lembeh Utara','Madidir','Maesa','Matuari','Ranowulu'],
      'Kota Tomohon':['Tomohon Barat','Tomohon Selatan','Tomohon Tengah','Tomohon Timur','Tomohon Utara'],
      'Kota Kotamobagu':['Kotamobagu Barat','Kotamobagu Selatan','Kotamobagu Timur','Kotamobagu Utara'],
      'Kab. Minahasa':['Airmadidi','Dimembe','Kauditan','Kakas','Kakas Barat','Kombi','Langowan Barat','Langowan Selatan','Langowan Timur','Langowan Utara','Lembean Timur','Mandolang','Pineleng','Remboken','Sonder','Tompaso','Tompaso Barat','Tombulu','Tombariri','Tombariri Timur','Tondano Barat','Tondano Selatan','Tondano Timur','Tondano Utara'],
      'Kab. Minahasa Utara':['Airmadidi','Dimembe','Kalawat','Kauditan','Likupang Barat','Likupang Selatan','Likupang Timur','Wori']
    }
  },
  'Sulawesi Tengah': {
    lat:-1.431, lng:121.445,
    kota: {
      'Kota Palu':['Mantikulore','Palu Barat','Palu Selatan','Palu Timur','Palu Utara','Tatanga','Ulujadi'],
      'Kab. Donggala':['Banawa','Banawa Selatan','Banawa Tengah','Balaesang','Balaesang Tanjung','Damsol','Dampelas','Labuan','Pinembani','Rio Pakava','Sindue','Sindue Tobata','Sindue Tombusabora','Sirenja','Sojol','Sojol Utara','Tanantovea'],
      'Kab. Sigi':['Biromaru','Dolo','Dolo Barat','Dolo Selatan','Gumbasa','Kinovaro','Kulawi','Kulawi Selatan','Lindu','Marawola','Marawola Barat','Nokilalaki','Palolo','Pipikoro','Sigi Biromaru','Tanambulava'],
      'Kab. Poso':['Lage','Pamona Barat','Pamona Puselemba','Pamona Selatan','Pamona Tenggara','Pamona Timur','Pamona Utara','Poso Kota','Poso Kota Selatan','Poso Kota Utara','Lore Barat','Lore Tengah','Lore Timur','Lore Utara','Lore Peore']
    }
  },
  'Sulawesi Selatan': {
    lat:-3.666, lng:119.974,
    kota: {
      'Kota Makassar':['Biringkanaya','Bontoala','Kepulauan Sangkarrang','Makassar','Mamajang','Manggala','Mappala','Mariso','Panakkukang','Rappocini','Tallo','Tamalanrea','Tamalate','Ujung Pandang','Ujung Tanah','Wajo'],
      'Kota Parepare':['Bacukiki','Bacukiki Barat','Soreang','Ujung'],
      'Kota Palopo':['Bara','Mungkajang','Pontap','Sendana','Telluwanua','Wara','Wara Barat','Wara Selatan','Wara Timur','Wara Utara'],
      'Kab. Gowa':['Bajeng','Bajeng Barat','Barombong','Biringbulu','Bontolempangan','Bontomarannu','Bontonompo','Bontonompo Selatan','Bungaya','Kahu','Lokomata','Manuju','Pallangga','Parangloe','Pattalassang','Parigi','Somba Opu','Tinggimoncong','Tombolopao','Tombolo Pao'],
      'Kab. Maros':['Bantimurung','Bontoa','Camba','Cenrana','Lau','Mallawa','Mandai','Maros Baru','Moncongloe','Simbang','Tanralili','Tompobulu','Turikale'],
      'Kab. Bone':['Ajangale','Amali','Awangpone','Barebbo','Bengo','Bontocani','Cenrana','Cina','Dua Boccoe','Kahu','Kajuara','Lamuru','Lappariaja','Libureng','Mare','Palakka','Patimpeng','Ponre','Salomekko','Sibulue','Tanete Riattang','Tanete Riattang Barat','Tanete Riattang Timur','Tellu Siattinge','Ulaweng']
    }
  },
  'Sulawesi Tenggara': {
    lat:-4.145, lng:122.174,
    kota: {
      'Kota Kendari':['Abeli','Baruga','Kadia','Kambu','Kendari','Kendari Barat','Mandonga','Nambo','Poasia','Puuwatu','Wua-Wua'],
      'Kota Baubau':['Batupoaro','Betoambari','Kokalukuna','Lea-Lea','Murhum','Sorawolio','Waborobo','Wolio'],
      'Kab. Konawe':['Abuki','Asinua','Besulutu','Bondoala','Kapoiala','Konawe','Lalonggasumeeto','Lambuya','Meluhu','Onembute','Pondidaha','Puriala','Routa','Sampara','Soropia','Tongauna','Uepai','Uluiwoi','Wawotobi','Wonggeduku'],
      'Kab. Kolaka':['Baula','Iwoimendaa','Kolaka','Kolaka Utara','Latambaga','Polinggona','Pomalaa','Samaturu','Tanggetada','Toari','Watubangga','Wolo','Wundulako']
    }
  },
  'Gorontalo': {
    lat:0.690, lng:122.446,
    kota: {
      'Kota Gorontalo':['Dungingi','Hulonthlangi','Kota Barat','Kota Selatan','Kota Tengah','Kota Timur','Kota Utara','Sipatana'],
      'Kab. Gorontalo':['Asparaga','Batudaa','Batudaa Pantai','Bongomeme','Biawu','Dungaliyo','Kabila Bone','Limboto','Limboto Barat','Mootilango','Pulubala','Tabongo','Telaga','Telaga Biru','Telaga Jaya','Tibawa','Tilango','Tolangohula'],
      'Kab. Bone Bolango':['Bone','Bone Pantai','Bonepantai','Bulawa','Kabila','Kabila Bone','Pinogu','Suwawa','Suwawa Selatan','Suwawa Tengah','Suwawa Timur','Tapa','Tilongkabila'],
      'Kab. Gorontalo Utara':['Atinggola','Biau','Gentuma Raya','Kwandang','Monano','Nuangan','Ponelo Kepulauan','Sumalata','Sumalata Timur','Tomilito','Tolinggula'],
      'Kab. Boalemo':['Botumoito','Dulupi','Mananggu','Paguyaman','Paguyaman Pantai','Tilamuta','Wonosari'],
      'Kab. Pohuwato':['Buntulia','Dengilo','Duhiadaa','Lemito','Marisa','Paguat','Patilanggio','Popayato','Popayato Barat','Popayato Timur','Randangan','Taluditi','Wanggarasi']
    }
  },
  'Sulawesi Barat': {
    lat:-2.840, lng:119.232,
    kota: {
      'Kab. Mamuju':['Kalukku','Kalumpang','Mamuju','Papalang','Sampaga','Simboro','Tapalang','Tapalang Barat','Tommo'],
      'Kab. Majene':['Banggae','Banggae Timur','Malunda','Pamboang','Sendana','Tammerodo Sendana','Tubo Sendana','Ulumanda'],
      'Kab. Polewali Mandar':['Alu','Anreapi','Balanipa','Binuang','Bulo','Campalagian','Limboro','Luyo','Mapilli','Matakali','Matangnga','Polewali','Tapango','Tinambung','Tubbi Taramanu','Wonomulyo'],
      'Kab. Mamasa':['Aralle','Bambang','Balla','Buntumalangka','Mamasa','Mambi','Mehalaan','Messawa','Nosu','Pana','Rantebulahan Timur','Sesena Padang','Sumarorong','Tabang','Tabulahan'],
      'Kab. Pasangkayu':['Baras','Bulu Taba','Dapurang','Duri Utara','Lariang','Letawa','Mala','Bambaira','Bambalamotu','Papalang','Pasangkayu','Pedongga','Sarudu','Tikke Raya']
    }
  },
  'Maluku': {
    lat:-3.237, lng:130.145,
    kota: {
      'Kota Ambon':['Baguala','Leitimur Selatan','Nusaniwe','Sirimau','Teluk Ambon'],
      'Kota Tual':['Dullah Selatan','Dullah Utara','Kur Selatan','Manyeuw','Taylor'],
      'Kab. Maluku Tengah':['Amahai','Banda','Huamual','Huamual Belakang','Leihitu','Leihitu Barat','Nusalaut','Pulau Haruku','Salahutu','Saparua','Saparua Timur','Tehoru','Teluti','Teon Nila Serua'],
      'Kab. Maluku Tenggara':['Hoat Sorbay','Kei Besar','Kei Besar Selatan','Kei Besar Selatan Barat','Kei Besar Utara Barat','Kei Besar Utara Timur','Kei Kecil','Kei Kecil Barat','Kei Kecil Timur','Kei Kecil Timur Selatan'],
      'Kab. Buru':['Air Buaya','Bata Bual','Fenalisata','Fena Fafan','Gardena','Lolong Guba','Leksula','Namlea','Nuniali','Teluk Kaiely','Waeapo','Waelata','Waplau']
    }
  },
  'Maluku Utara': {
    lat:1.571, lng:127.808,
    kota: {
      'Kota Ternate':['Moti','Pulau Ternate','Ternate Selatan','Ternate Tengah','Ternate Utara'],
      'Kota Tidore Kepulauan':['Oba','Oba Tengah','Oba Utara','Tidore','Tidore Selatan','Tidore Timur','Tidore Utara'],
      'Kab. Halmahera Barat':['Ibu','Ibu Selatan','Ibu Utara','Jailolo','Jailolo Selatan','Loloda','Sahu','Sahu Timur'],
      'Kab. Halmahera Tengah':['Patani','Patani Barat','Patani Timur','Patani Utara','Pulau Gebe','Weda','Weda Selatan','Weda Tengah','Weda Timur','Weda Utara'],
      'Kab. Halmahera Utara':['Galela','Galela Barat','Galela Selatan','Galela Utara','Kao','Kao Barat','Kao Teluk','Kao Utara','Loloda Utara','Malifut','Morotai Jaya','Morotai Selatan','Tobelo','Tobelo Barat','Tobelo Selatan','Tobelo Tengah','Tobelo Timur','Tobelo Utara']
    }
  },
  'Papua Barat': {
    lat:-1.336, lng:133.174,
    kota: {
      'Kota Manokwari':['Manokwari Barat','Manokwari Selatan','Manokwari Timur','Manokwari Utara','Warmare'],
      'Kota Sorong':['Klaurung','Malaimsimsa','Maladum Mes','Sorong','Sorong Barat','Sorong Kepulauan','Sorong Manoi','Sorong Timur','Sorong Utara'],
      'Kab. Fakfak':['Fakfak','Fakfak Barat','Fakfak Tengah','Fakfak Timur','Fakfak Timur Selatan','Karas','Kokas','Kramongmongga','Mbahamdandara','Teluk Patipi'],
      'Kab. Manokwari':['Anggi','Anggi Gida','Catubouw','Hingk','Hubalkma','Manokwari Barat','Manokwari Selatan','Manokwari Timur','Manokwari Utara','Masni','Merdey','Momiwaren','Nikiwar','Oransbari','Ransiki','Sidey','Subsay','Testega','Warmare'],
      'Kab. Sorong':['Aimas','Beraur','Klamono','Kleyo','Makbon','Maudus','Mayamuk','Moisegen','Salawati','Salawati Tengah','Seget','Segun']
    }
  },
  'Papua': {
    lat:-4.269, lng:138.080,
    kota: {
      'Kota Jayapura':['Abepura','Heram','Jayapura Selatan','Jayapura Utara','Muara Tami'],
      'Kab. Jayapura':['Airu','Demta','Depapre','Ebungfauw','Gresi Selatan','Kaureh','Kemtuk','Kemtuk Gresi','Nimboran','Nimbokrang','Prigagal','Raveni Rara','Sentani','Sentani Barat','Sentani Timur','Unurum Guay','Waibu','Yapsi'],
      'Kab. Merauke':['Animha','Assault','Eligobel','Ilwayab','Jagebob','Kaptel','Kimaam','Kurik','Malind','Marind','Mbian','Merauke','Muting','Ngguti','Okaba','Semangga','Sota','Tanah Miring','Tubang','Ulilin'],
      'Kab. Nabire':['Dipa','Ikrar','Kimi','Makimi','Menou','Moora','Nabire','Napan','Siriwo','Teluk Kimi','Teluk Umar','Uwapa','Wanggar'],
      'Kab. Mimika':['Agimuga','Amar','Iwaka','Jita','Jila','Kualakencana','Kuala Kencana','Kwamki Narama','Mimika Barat','Mimika Barat Jauh','Mimika Baru','Mimika Timur','Mimika Timur Jauh','Mimika Timur Tengah','Tembagapura','Wania']
    }
  }
};

// ===== STATE =====
var laporan = JSON.parse(localStorage.getItem('eco_laporan') || '[]');
var poin = parseInt(localStorage.getItem('eco_poin') || '0');
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

function saveLaporan() { localStorage.setItem('eco_laporan', JSON.stringify(laporan)); }
function savePoin()    { localStorage.setItem('eco_poin', String(poin)); }

// ===== NAVIGASI =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
  var nl = document.getElementById('nav-' + id);
  if (nl) nl.classList.add('active');
  document.querySelectorAll('.mni').forEach(function(m) { m.classList.remove('active'); });
  var mn = document.getElementById('mnav-' + id);
  if (mn) mn.classList.add('active');
  if (id === 'peta')      setTimeout(initMap, 200);
  if (id === 'dashboard') setTimeout(initCharts, 100);
  if (id === 'poin')      initPoin();
  updateStats();
  checkWarn();
  window.scrollTo(0, 0);
}

// ===== TEMA =====
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'light');
  document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
}

// ===== WARNING =====
function checkWarn() {
  var pCount = {};
  laporan.filter(function(l) {
    return l.sev === 'parah' && (Date.now() - l.ts) < 86400000 * 7;
  }).forEach(function(l) {
    pCount[l.prov] = (pCount[l.prov] || 0) + 1;
  });
  var entries = Object.keys(pCount).map(function(k) { return [k, pCount[k]]; });
  entries.sort(function(a, b) { return b[1] - a[1]; });
  var bar = document.getElementById('warn-bar');
  if (entries.length > 0 && entries[0][1] >= 2) {
    bar.classList.remove('hidden');
    document.getElementById('warn-txt').textContent =
      '⚠️ PERINGATAN: ' + entries[0][0] + ' memiliki ' + entries[0][1] + ' laporan parah dalam 7 hari terakhir!';
  } else {
    bar.classList.add('hidden');
  }
}

// ===== STATISTIK =====
function updateStats() {
  var total = laporan.length;
  var week  = laporan.filter(function(l) { return Date.now() - l.ts < 86400000 * 7; }).length;
  var done  = laporan.filter(function(l) { return l.done; }).length;
  var provSet = {};
  laporan.forEach(function(l) { provSet[l.prov] = 1; });
  var provs = Object.keys(provSet).length;
  function s(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
  s('s-total', total); s('m-total', total);
  s('s-week',  week);  s('m-week',  week);
  s('s-done',  done);  s('m-done',  done);
  s('s-prov',  provs); s('m-prov',  provs);
}

// ===== FORM LOKASI 3 TINGKAT =====
function buildProvSelect() {
  var sel = document.getElementById('f-prov');
  Object.keys(LOKASI).sort().forEach(function(prov) {
    var o = document.createElement('option');
    o.value = prov; o.textContent = prov;
    sel.appendChild(o);
  });
}

function onProvChange() {
  var prov = document.getElementById('f-prov').value;
  var kotaSel = document.getElementById('f-kota');
  var kecSel  = document.getElementById('f-kec');
  kotaSel.innerHTML = '<option value="">— Pilih kota/kabupaten —</option>';
  kecSel.innerHTML  = '<option value="">— Pilih kota dulu —</option>';
  kecSel.disabled   = true;
  if (!prov) { kotaSel.disabled = true; return; }
  kotaSel.disabled = false;
  var kotaList = Object.keys(LOKASI[prov].kota).sort();
  kotaList.forEach(function(k) {
    var o = document.createElement('option');
    o.value = k; o.textContent = k;
    kotaSel.appendChild(o);
  });
}

function onKotaChange() {
  var prov = document.getElementById('f-prov').value;
  var kota = document.getElementById('f-kota').value;
  var kecSel = document.getElementById('f-kec');
  kecSel.innerHTML = '<option value="">— Pilih kecamatan/daerah —</option>';
  if (!prov || !kota || !LOKASI[prov] || !LOKASI[prov].kota[kota]) {
    kecSel.disabled = true; return;
  }
  kecSel.disabled = false;
  LOKASI[prov].kota[kota].sort().forEach(function(k) {
    var o = document.createElement('option');
    o.value = k; o.textContent = k;
    kecSel.appendChild(o);
  });
}

function setSev(s, btn) {
  curSev = s;
  document.querySelectorAll('.sev-btn').forEach(function(b) { b.className = 'sev-btn'; });
  btn.classList.add('sv-' + s);
}

function getGPS() {
  if (!navigator.geolocation) { alert('GPS tidak tersedia.'); return; }
  var btn = document.querySelector('.btn-gps');
  btn.textContent = '⏳';
  navigator.geolocation.getCurrentPosition(
    function(pos) {
      document.getElementById('f-lokasi').value =
        pos.coords.latitude.toFixed(5) + ', ' + pos.coords.longitude.toFixed(5);
      btn.textContent = '📍 GPS';
    },
    function() {
      document.getElementById('f-lokasi').value = 'GPS gagal — isi manual';
      btn.textContent = '📍 GPS';
    }
  );
}

function prevFoto(input) {
  var prev = document.getElementById('foto-prev');
  if (input.files && input.files[0]) {
    var r = new FileReader();
    r.onload = function(e) { prev.src = e.target.result; prev.style.display = 'block'; };
    r.readAsDataURL(input.files[0]);
    document.getElementById('foto-lbl').textContent = '📷 ' + input.files[0].name;
  }
}

function submitLaporan() {
  var jenis = document.getElementById('f-jenis').value;
  var prov  = document.getElementById('f-prov').value;
  var kota  = document.getElementById('f-kota').value;
  var kec   = document.getElementById('f-kec').value;
  if (!jenis || !prov || !kota || !kec || !curSev) {
    alert('Lengkapi semua field yang wajib: Jenis Masalah, Provinsi, Kota, Kecamatan, dan Tingkat Keparahan.');
    return;
  }
  var base = LOKASI[prov] ? [LOKASI[prov].lat, LOKASI[prov].lng] : [-2.5, 118];
  laporan.unshift({
    id: Date.now(), jenis: jenis, prov: prov, kota: kota, kec: kec,
    lokasi: document.getElementById('f-lokasi').value || '-',
    lat: base[0] + (Math.random() - 0.5) * 0.3,
    lng: base[1] + (Math.random() - 0.5) * 0.3,
    sev: curSev,
    desc: document.getElementById('f-desc').value || 'Tidak ada deskripsi.',
    nama: document.getElementById('f-nama').value || 'Anonim',
    ts: Date.now(), done: false
  });
  saveLaporan();
  poin += 15; savePoin();
  ['f-jenis','f-prov','f-kota','f-kec','f-lokasi','f-desc','f-nama'].forEach(function(id) {
    var e = document.getElementById(id);
    if (e) e.value = '';
  });
  var kotaSel = document.getElementById('f-kota');
  var kecSel  = document.getElementById('f-kec');
  kotaSel.innerHTML = '<option value="">— Pilih provinsi dulu —</option>';
  kotaSel.disabled  = true;
  kecSel.innerHTML  = '<option value="">— Pilih kota dulu —</option>';
  kecSel.disabled   = true;
  document.getElementById('foto-prev').style.display = 'none';
  document.getElementById('foto-lbl').textContent = '📷 Pilih foto kondisi lapangan (opsional)';
  document.querySelectorAll('.sev-btn').forEach(function(b) { b.className = 'sev-btn'; });
  curSev = '';
  var t = document.getElementById('toast');
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 5000);
  updateStats(); checkWarn();
  if (mapInited) refreshMarkers();
  if (laporan.length > 0) initCharts();
}

// ===== PETA =====
function initMap() {
  var emptyEl = document.getElementById('peta-empty');
  var mapEl   = document.getElementById('map');
  if (laporan.length === 0) {
    emptyEl.classList.add('show');
    mapEl.style.display = 'none';
    return;
  }
  emptyEl.classList.remove('show');
  mapEl.style.display = 'block';
  if (mapInited) {
    setTimeout(function() { ecoMap.invalidateSize(); refreshMarkers(); }, 200);
    return;
  }
  mapInited = true;
  ecoMap = L.map('map', { zoomControl: true }).setView([-2.5, 118], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors', maxZoom: 19
  }).addTo(ecoMap);
  setTimeout(function() { ecoMap.invalidateSize(); refreshMarkers(); }, 300);
}

function getColor(s) {
  return s === 'parah' ? '#ff5c5c' : s === 'sedang' ? '#ffb74d' : '#4ac571';
}

function refreshMarkers() {
  if (!ecoMap) return;
  markerList.forEach(function(m) { ecoMap.removeLayer(m); });
  markerList = [];
  if (heatLayer) { ecoMap.removeLayer(heatLayer); heatLayer = null; }
  var kw = (document.getElementById('search-peta') ? document.getElementById('search-peta').value : '').toLowerCase();
  var filtered = laporan.filter(function(l) {
    var mf = curFilter === 'semua'  ? true :
             curFilter === 'parah'  ? l.sev === 'parah'  :
             curFilter === 'sedang' ? l.sev === 'sedang' :
             curFilter === 'ringan' ? l.sev === 'ringan' :
             curFilter === 'polusi' ? (l.jenis.indexOf('Polusi') >= 0 || l.jenis.indexOf('udara') >= 0) :
             curFilter === 'sampah' ? (l.jenis.indexOf('Sampah') >= 0 || l.jenis.indexOf('sampah') >= 0) :
             curFilter === 'hutan'  ? l.jenis.indexOf('hutan') >= 0 : true;
    var ms = !kw || l.prov.toLowerCase().indexOf(kw) >= 0 ||
             l.kota.toLowerCase().indexOf(kw) >= 0 ||
             (l.kec && l.kec.toLowerCase().indexOf(kw) >= 0);
    return mf && ms;
  });
  var hd = [];
  filtered.forEach(function(l) {
    var c = getColor(l.sev);
    var icon = L.divIcon({
      html: '<div style="width:13px;height:13px;border-radius:50%;background:' + c + ';border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
      iconSize: [13,13], iconAnchor: [6,6], className: ''
    });
    var m = L.marker([l.lat, l.lng], { icon: icon }).addTo(ecoMap);
    var tgl = new Date(l.ts).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
    m.bindPopup(
      '<div style="font-family:DM Sans,sans-serif;min-width:220px;padding:4px">' +
      '<div style="font-weight:700;font-size:14px;margin-bottom:6px">' + l.jenis + '</div>' +
      '<div style="font-size:12px;color:#666;margin-bottom:2px">🏛️ ' + l.prov + '</div>' +
      '<div style="font-size:12px;color:#666;margin-bottom:2px">🏙️ ' + l.kota + ' — ' + (l.kec || '') + '</div>' +
      '<div style="font-size:12px;color:#666;margin-bottom:6px">📍 ' + l.lokasi + '</div>' +
      '<div style="font-size:13px;margin-bottom:8px">' + l.desc + '</div>' +
      '<div style="display:flex;justify-content:space-between;font-size:11px;color:#888;margin-bottom:7px">' +
      '<span>👤 ' + l.nama + '</span><span>' + tgl + '</span></div>' +
      '<span style="padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;' +
      'background:' + (l.sev==='parah'?'#fff0f0':l.sev==='sedang'?'#fff8e1':'#f0fff4') + ';color:' + c + '">' +
      l.sev.toUpperCase() + (l.done ? ' ✓ Ditangani' : '') + '</span></div>'
    );
    markerList.push(m);
    hd.push([l.lat, l.lng, l.sev === 'parah' ? 0.9 : l.sev === 'sedang' ? 0.5 : 0.25]);
  });
  if (heatOn && hd.length > 0) {
    heatLayer = L.heatLayer(hd, { radius:40, blur:25, maxZoom:17,
      gradient: { 0.2:'#4ac571', 0.5:'#ffb74d', 0.8:'#ff5c5c' } }).addTo(ecoMap);
  }
}

function filterMap(f, btn) {
  curFilter = f;
  document.querySelectorAll('.fbtn').forEach(function(b) { b.classList.remove('active','fp','fs'); });
  btn.classList.add('active');
  if (f === 'parah')  btn.classList.add('fp');
  if (f === 'sedang') btn.classList.add('fs');
  refreshMarkers();
}
function toggleHeat() {
  heatOn = !heatOn;
  document.getElementById('heat-btn').classList.toggle('active', heatOn);
  refreshMarkers();
}
function searchMap() { refreshMarkers(); }

// ===== DASHBOARD CHARTS =====
function initCharts() {
  var emptyEl  = document.getElementById('dash-empty');
  var chartsEl = document.getElementById('dash-charts');
  if (laporan.length === 0) {
    emptyEl.style.display  = 'block';
    chartsEl.style.display = 'none';
    return;
  }
  emptyEl.style.display  = 'none';
  chartsEl.style.display = 'block';

  var gc = 'rgba(74,197,113,.08)', tc = '#7fa87f';
  function baseOpts(ax) {
    var o = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };
    if (ax !== false) {
      o.scales = {
        x: { grid: { color: gc }, ticks: { color: tc, font: { size: 10 } } },
        y: { grid: { color: gc }, ticks: { color: tc, font: { size: 10 } }, beginAtZero: true }
      };
    }
    return o;
  }
  if (charts.line)  { charts.line.destroy();  charts.line  = null; }
  if (charts.donut) { charts.donut.destroy(); charts.donut = null; }
  if (charts.bar)   { charts.bar.destroy();   charts.bar   = null; }

  // Tren mingguan — hitung dari data asli per minggu
  var now = Date.now();
  var weekData = [0,0,0,0,0,0,0];
  laporan.forEach(function(l) {
    var diffDays = (now - l.ts) / 86400000;
    var weekIdx  = Math.floor(diffDays / 7);
    if (weekIdx < 7) weekData[6 - weekIdx]++;
  });
  charts.line = new Chart(document.getElementById('chartLine'), {
    type: 'line',
    data: {
      labels: ['6 mgg lalu','5 mgg lalu','4 mgg lalu','3 mgg lalu','2 mgg lalu','Mgg lalu','Mgg ini'],
      datasets: [{
        data: weekData,
        borderColor: '#4ac571', backgroundColor: 'rgba(74,197,113,.1)',
        borderWidth: 2, fill: true, tension: 0.4,
        pointBackgroundColor: '#4ac571', pointRadius: 4
      }]
    },
    options: baseOpts()
  });

  // Jenis masalah — dari data asli
  var jl = ['Polusi','Sampah','Air/Sungai','Limbah Ind.','Banjir','Hutan','Laut/Pesisir','Limbah B3','Lainnya'];
  var jd = [0,0,0,0,0,0,0,0,0];
  laporan.forEach(function(l) {
    var j = l.jenis;
    if      (j.indexOf('udara') >= 0 || j.indexOf('Polusi') >= 0)   jd[0]++;
    else if (j.indexOf('Sampah') >= 0 || j.indexOf('sampah') >= 0)  jd[1]++;
    else if (j.indexOf('air') >= 0 || j.indexOf('Sungai') >= 0)     jd[2]++;
    else if (j.indexOf('industri') >= 0)                             jd[3]++;
    else if (j.indexOf('Banjir') >= 0)                               jd[4]++;
    else if (j.indexOf('hutan') >= 0)                                jd[5]++;
    else if (j.indexOf('laut') >= 0 || j.indexOf('pesisir') >= 0)   jd[6]++;
    else if (j.indexOf('B3') >= 0)                                   jd[7]++;
    else                                                              jd[8]++;
  });
  charts.donut = new Chart(document.getElementById('chartDonut'), {
    type: 'doughnut',
    data: {
      labels: jl,
      datasets: [{
        data: jd,
        backgroundColor: ['#4ac571','#64b5f6','#ffb74d','#ff5c5c','#ce93d8','#80cbc4','#f48fb1','#e57373','#bcaaa4'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { color: tc, font: { size: 10 }, boxWidth: 11 } } }
    }
  });

  // Per pulau — dari data asli
  var pMap = {
    'Sumatera':    ['Aceh','Sumatera Utara','Sumatera Barat','Riau','Jambi','Sumatera Selatan','Bengkulu','Lampung','Kep. Bangka Belitung','Kep. Riau'],
    'Jawa':        ['DKI Jakarta','Jawa Barat','Jawa Tengah','DI Yogyakarta','Jawa Timur','Banten'],
    'Kalimantan':  ['Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Timur','Kalimantan Utara'],
    'Sulawesi':    ['Sulawesi Utara','Sulawesi Tengah','Sulawesi Selatan','Sulawesi Tenggara','Gorontalo','Sulawesi Barat'],
    'Bali & Nusa': ['Bali','NTB','NTT'],
    'Maluku':      ['Maluku','Maluku Utara'],
    'Papua':       ['Papua Barat','Papua']
  };
  var pl = Object.keys(pMap);
  var pd = pl.map(function(p) {
    return laporan.filter(function(l) { return pMap[p].indexOf(l.prov) >= 0; }).length;
  });
  charts.bar = new Chart(document.getElementById('chartBar'), {
    type: 'bar',
    data: {
      labels: pl,
      datasets: [{
        data: pd,
        backgroundColor: pd.map(function(v) { return v >= 5 ? '#ff5c5c' : v >= 2 ? '#ffb74d' : '#4ac571'; }),
        borderRadius: 6
      }]
    },
    options: baseOpts()
  });

  // Papan peringkat — dari data asli berdasarkan nama pelapor
  var namePoin = {};
  var nameProv = {};
  laporan.forEach(function(l) {
    if (l.nama && l.nama !== 'Anonim') {
      namePoin[l.nama] = (namePoin[l.nama] || 0) + 15;
      nameProv[l.nama] = l.prov;
    }
  });
  var ranking = Object.keys(namePoin).map(function(n) {
    return { nama: n, poin: namePoin[n], prov: nameProv[n] };
  }).sort(function(a, b) { return b.poin - a.poin; }).slice(0, 10);

  var ranks = ['g','s','b','','','','','','',''];
  var lbHtml = ranking.length === 0
    ? '<div style="text-align:center;padding:20px;color:var(--text2);font-size:13px">Belum ada pelapor terdaftar. Isi nama saat laporan untuk muncul di sini!</div>'
    : ranking.map(function(x, i) {
        return '<div class="lb-item">' +
          '<div class="lb-rank ' + (ranks[i] || '') + '">' + (i+1) + '</div>' +
          '<div><div class="lb-name">' + x.nama + '</div><div class="lb-loc">📍 ' + x.prov + '</div></div>' +
          '<div class="lb-pts">' + x.poin + ' pts</div></div>';
      }).join('');
  document.getElementById('lb-list').innerHTML = lbHtml;
}

// ===== EDUKASI =====
var EDU = [
  { tag:'Sampah', emoji:'🗑️', title:'Cara Pilah Sampah yang Benar',
    body:'<p>Memilah sampah adalah langkah pertama pengelolaan limbah yang berkelanjutan. Indonesia menghasilkan lebih dari 60 juta ton sampah per tahun.</p><p><strong>3 Kategori Utama:</strong></p><ul><li><strong>Sampah Organik</strong> — sisa makanan, daun kering, kulit buah. Bisa dijadikan kompos.</li><li><strong>Sampah Anorganik</strong> — plastik, kertas, kaca, logam. Bisa didaur ulang dan dijual ke bank sampah.</li><li><strong>Sampah B3</strong> — baterai, obat kadaluarsa, cat bekas. Harus dibuang ke tempat khusus B3.</li></ul><p>Mulai dari dua tempat sampah di rumah. Kurangi plastik sekali pakai. Ikut program bank sampah di lingkunganmu.</p>' },
  { tag:'Polusi Udara', emoji:'🌫️', title:'Bahaya Kabut Asap & Karhutla',
    body:'<p>Kebakaran hutan dan lahan (karhutla) di Sumatera dan Kalimantan setiap tahun menyebabkan kabut asap yang menyelimuti jutaan warga.</p><p><strong>Kandungan berbahaya dalam asap:</strong></p><ul><li>PM2.5 — partikel super halus yang masuk ke dalam paru-paru</li><li>Karbon monoksida (CO) — racun yang menghambat oksigen darah</li><li>Dioksin dari pembakaran gambut</li></ul><p><strong>Cara melindungi diri:</strong> Gunakan masker N95. Tutup jendela rapat saat kabut tebal. Pantau ISPU di aplikasi resmi KLHK.</p>' },
  { tag:'Air Bersih', emoji:'💧', title:'Menjaga Sumber Air Indonesia',
    body:'<p>Indonesia memiliki ribuan sungai besar, tetapi banyak yang kini tercemar parah. Sungai Citarum di Jawa Barat pernah menjadi salah satu sungai paling tercemar di dunia.</p><p><strong>Penyebab utama pencemaran air:</strong></p><ul><li>Limbah industri tekstil dan manufaktur</li><li>Limbah pertanian — pestisida dan pupuk kimia</li><li>Sampah plastik dari permukiman tepian sungai</li><li>Air limbah domestik yang tidak diolah</li></ul><p>Jangan buang sampah ke sungai. Laporkan pencemaran ke EcoSense. Dukung program restorasi sungai di daerahmu.</p>' },
  { tag:'Hutan', emoji:'🌴', title:'Deforestasi & Krisis Hutan Tropis',
    body:'<p>Indonesia memiliki hutan tropis terluas ketiga di dunia — surga keanekaragaman hayati yang tak ternilai. Namun deforestasi terus menggerus hutan kita demi perkebunan sawit dan pertambangan.</p><ul><li>Kalimantan dan Papua adalah epicentrum kehilangan hutan terbesar</li><li>Orangutan, Harimau Sumatera, dan ratusan spesies lain terancam punah</li><li>Hutan gambut yang terbakar melepaskan karbon tersimpan selama ribuan tahun</li></ul><p>Dukung produk bersertifikat ramah lingkungan. Laporkan pembakaran hutan yang kamu lihat ke EcoSense.</p>' },
  { tag:'Laut & Pesisir', emoji:'🌊', title:'Krisis Sampah Plastik di Laut Indonesia',
    body:'<p>Indonesia adalah negara kepulauan terbesar di dunia dengan lebih dari 17.000 pulau. Sayangnya, Indonesia juga masuk daftar penyumbang sampah plastik laut terbesar di dunia.</p><p><strong>Dampak sampah plastik laut:</strong></p><ul><li>Mematikan penyu, lumba-lumba, dan paus yang menelannya</li><li>Mikroplastik masuk ke rantai makanan dan akhirnya ke tubuh manusia</li><li>Merusak terumbu karang dan ekosistem pesisir yang indah</li></ul><p>Bawa tas belanja sendiri. Tolak sedotan plastik. Ikut kegiatan bersih pantai di kotamu.</p>' },
  { tag:'Jejak Karbon', emoji:'🌿', title:'Jejak Karbon & Perubahan Iklim Indonesia',
    body:'<p>Perubahan iklim bukan ancaman masa depan — ini sedang terjadi sekarang. Beberapa wilayah pesisir Indonesia sudah mulai tenggelam akibat kenaikan muka air laut.</p><p><strong>5 langkah mengurangi jejak karbon pribadi:</strong></p><ul><li>Naik transportasi umum atau sepeda daripada kendaraan pribadi</li><li>Hemat listrik — matikan lampu dan peralatan yang tidak dipakai</li><li>Kurangi konsumsi daging merah (peternakan = 14.5% emisi global)</li><li>Pilih produk lokal untuk mengurangi emisi transportasi</li><li>Tanam pohon di sekitar rumah dan lingkunganmu</li></ul>' }
];

function openEdu(i) {
  var d = EDU[i];
  document.getElementById('edu-content').innerHTML =
    '<span class="edu-tag">' + d.tag + '</span><h2>' + d.emoji + ' ' + d.title + '</h2>' + d.body;
  document.getElementById('edu-ov').classList.add('open');
}
function closeEdu(e) { if (e.target === document.getElementById('edu-ov')) closeEduBtn(); }
function closeEduBtn() { document.getElementById('edu-ov').classList.remove('open'); }

// ===== POIN =====
var BADGES = [
  { e:'🌱', n:'Pelapor Pertama',     d:'Kirim laporan pertama',  min:15   },
  { e:'🌿', n:'Warga Peduli',         d:'Capai 50 poin',          min:50   },
  { e:'🌳', n:'Pahlawan Lokal',       d:'Capai 150 poin',         min:150  },
  { e:'🏆', n:'Guardian Lingkungan', d:'Capai 300 poin',         min:300  },
  { e:'💚', n:'Eco Ambassador',       d:'Capai 500 poin',         min:500  },
  { e:'🌍', n:'Penyelamat Bumi',      d:'Capai 1000 poin',        min:1000 }
];

function initPoin() {
  document.getElementById('poin-angka').textContent = poin;
  var lvl = poin >= 1000 ? 'Penyelamat Bumi' :
            poin >= 500  ? 'Eco Ambassador'  :
            poin >= 300  ? 'Guardian Lingkungan' :
            poin >= 150  ? 'Pahlawan Lokal'  :
            poin >= 50   ? 'Warga Peduli'    : 'Pemula Hijau';
  document.getElementById('poin-level').textContent = lvl;
  var next = poin >= 1000 ? 2000 : poin >= 500 ? 1000 : poin >= 300 ? 500 : poin >= 150 ? 300 : poin >= 50 ? 150 : 50;
  document.getElementById('poin-bar').style.width = Math.min(100, Math.round(poin / next * 100)) + '%';
  document.getElementById('poin-next').textContent = poin + '/' + next + ' poin menuju level berikutnya';
  document.getElementById('badge-grid').innerHTML = BADGES.map(function(b) {
    var on = poin >= b.min;
    return '<div class="badge-item ' + (on ? 'on' : 'badge-off') + '">' +
      '<span class="badge-emoji">' + b.e + '</span>' +
      '<div class="badge-name">' + b.n + '</div>' +
      '<div class="badge-desc">' + b.d + '</div></div>';
  }).join('');
}

// ===== SERTIFIKAT =====
function generateCert() {
  var cv = document.getElementById('cert-canvas');
  cv.style.display = 'block';
  var ctx = cv.getContext('2d'), w = 800, h = 500;
  ctx.fillStyle = '#071a0d'; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle = '#4ac571'; ctx.lineWidth = 5; ctx.strokeRect(16,16,w-32,h-32);
  ctx.strokeStyle = 'rgba(74,197,113,.25)'; ctx.lineWidth = 1; ctx.strokeRect(28,28,w-56,h-56);
  ctx.fillStyle = 'rgba(74,197,113,.04)'; ctx.font = 'bold 80px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('ECOSENSE INDONESIA', w/2, h/2+25);
  ctx.fillStyle = '#4ac571'; ctx.font = 'bold 13px sans-serif';
  ctx.fillText('🌿 ECOSENSE INDONESIA — PLATFORM LINGKUNGAN HIDUP NASIONAL', w/2, 62);
  ctx.strokeStyle = 'rgba(74,197,113,.3)'; ctx.beginPath(); ctx.moveTo(60,75); ctx.lineTo(w-60,75); ctx.stroke();
  ctx.fillStyle = 'rgba(232,240,232,.6)'; ctx.font = '12px sans-serif'; ctx.fillText('SERTIFIKAT PENGHARGAAN', w/2, 108);
  ctx.fillStyle = '#4ac571'; ctx.font = 'bold 28px sans-serif'; ctx.fillText('PAHLAWAN LINGKUNGAN HIDUP', w/2, 155);
  ctx.fillStyle = 'rgba(232,240,232,.7)'; ctx.font = '14px sans-serif'; ctx.fillText('Diberikan dengan bangga kepada', w/2, 195);
  var nama = (document.getElementById('f-nama') && document.getElementById('f-nama').value) || 'Warga Peduli Lingkungan Indonesia';
  ctx.fillStyle = '#fff'; ctx.font = 'bold 26px sans-serif'; ctx.fillText(nama, w/2, 242);
  ctx.strokeStyle = 'rgba(74,197,113,.4)'; ctx.beginPath(); ctx.moveTo(200,258); ctx.lineTo(600,258); ctx.stroke();
  ctx.fillStyle = 'rgba(232,240,232,.65)'; ctx.font = '13px sans-serif';
  ctx.fillText('Atas kontribusi nyata dalam menjaga kelestarian lingkungan hidup Indonesia', w/2, 295);
  ctx.fillText('melalui pelaporan aktif masalah lingkungan di platform EcoSense', w/2, 315);
  ctx.fillStyle = '#4ac571'; ctx.font = 'bold 18px sans-serif'; ctx.fillText('✦ ' + poin + ' Poin Lingkungan ✦', w/2, 362);
  ctx.fillStyle = 'rgba(232,240,232,.5)'; ctx.font = '12px sans-serif';
  ctx.fillText('Tertanggal: ' + new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}), w/2, 415);
  ctx.strokeStyle = 'rgba(74,197,113,.2)'; ctx.beginPath(); ctx.moveTo(60,448); ctx.lineTo(w-60,448); ctx.stroke();
  ctx.fillStyle = 'rgba(74,197,113,.5)'; ctx.font = '11px sans-serif';
  ctx.fillText('EcoSense Indonesia — Platform Pemantau Lingkungan Hidup Nasional', w/2, 473);
  var a = document.createElement('a'); a.download = 'sertifikat-ecosense.png'; a.href = cv.toDataURL(); a.click();
}

// ===== AI CHAT =====
function toggleChat() { document.getElementById('chat-win').classList.toggle('open'); }
function sendQ(q)     { document.getElementById('chat-in').value = q; sendChat(); }

function sendChat() {
  var inp = document.getElementById('chat-in');
  var q   = inp.value.trim();
  if (!q) return;
  inp.value = '';
  addMsg('user', q);
  var load = addMsg('bot', '⏳ Sedang menjawab...', true);
  chatHist.push({ role: 'user', content: q });

  var messages = [
    {
      role: 'system',
      content: 'Kamu adalah AI Konsultan Lingkungan untuk EcoSense Indonesia — platform pemantau lingkungan hidup nasional. Jawab pertanyaan soal lingkungan hidup, karhutla, pencemaran sungai (Citarum, Siak, Musi), sampah plastik laut, deforestasi Kalimantan & Papua, dan isu lingkungan di seluruh Indonesia. Gunakan Bahasa Indonesia yang ramah, sederhana, dan mudah dipahami semua kalangan dari anak-anak hingga lansia. Berikan jawaban yang praktis dan berguna. Maksimal 150 kata per jawaban.'
    }
  ].concat(chatHist);

  fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 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',
      'Content-Type':  'application/json'
    },
    body: JSON.stringify({
      model:       'llama-3.3-70b-versatile',
      messages:    messages,
      max_tokens:  300,
      temperature: 0.7
    })
  }).then(function(r) { return r.json(); })
  .then(function(d) {
    var reply = (d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content)
                || 'Maaf, coba lagi ya!';
    load.remove();
    addMsg('bot', reply);
    chatHist.push({ role: 'assistant', content: reply });
    if (chatHist.length > 20) chatHist = chatHist.slice(-20);
  }).catch(function() {
    load.remove();
    addMsg('bot', 'Koneksi bermasalah. Pastikan internet aktif lalu coba lagi.');
  });
}

function addMsg(type, text, loading) {
  var msgs = document.getElementById('chat-msgs');
  var d = document.createElement('div');
  d.className = 'msg ' + type + (loading ? ' loading' : '');
  d.textContent = text;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
  return d;
}

// ===== ISU NASIONAL =====
var ISU = [
  { icon:'🌫️', judul:'Kebakaran Hutan & Lahan',   region:'Sumatera & Kalimantan', desc:'Jutaan hektar terbakar setiap kemarau, kabut asap menyelimuti belasan provinsi.' },
  { icon:'🌊', judul:'Pencemaran Sungai & Laut',   region:'Seluruh Indonesia',      desc:'Citarum, Siak, Musi terancam limbah industri dan rumah tangga.' },
  { icon:'🏝️', judul:'Abrasi Pulau Kecil',          region:'NTT, Maluku, Papua',     desc:'Ribuan pulau kecil terancam tenggelam akibat kenaikan muka air laut.' },
  { icon:'🌴', judul:'Deforestasi Hutan Tropis',   region:'Kalimantan & Papua',     desc:'Hutan tropis ketiga terluas di dunia terus berkurang demi perkebunan dan tambang.' },
  { icon:'🏭', judul:'Limbah Industri Kota Besar', region:'Jawa & Sumatera',        desc:'Kawasan industri membuang limbah ke sungai tanpa pengolahan yang memadai.' },
  { icon:'🗑️', judul:'Krisis Sampah Perkotaan',    region:'Jakarta, Surabaya, Medan',desc:'TPA sudah over kapasitas. Indonesia hasilkan 60 juta ton sampah per tahun.' }
];
document.getElementById('isu-grid').innerHTML = ISU.map(function(x) {
  return '<div class="isu-card"><span class="isu-icon">' + x.icon + '</span>' +
    '<h4>' + x.judul + '</h4><p>' + x.desc + '</p>' +
    '<span class="isu-reg">📍 ' + x.region + '</span></div>';
}).join('');

// ===== INIT =====
buildProvSelect();
updateStats();
checkWarn();