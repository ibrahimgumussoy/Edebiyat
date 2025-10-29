const questions = {
tanzimat : [
  { yazar: "Şinasi", eser: "Şair Evlenmesi", secenekler: ["Taaşşuk-ı Talat ve Fitnat", "Araba Sevdası", "Şair Evlenmesi", "Eylül", "Kiralık Konak"] },
  { yazar: "Namık Kemal", eser: "Vatan Yahut Silistre", secenekler: ["Sırça Köşk", "Vatan Yahut Silistre", "Sergüzeşt", "Ateşten Gömlek", "İntibah"] },
  { yazar: "Ziya Paşa", eser: "Zafername", secenekler: ["Sefiller", "Zafername", "İclal", "Harabat", "Defter-i Amal"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Felatun Bey ile Rakım Efendi", secenekler: ["Felatun Bey ile Rakım Efendi", "Sergüzeşt", "Çalıkuşu", "Eylül", "Mai ve Siyah"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Araba Sevdası", secenekler: ["Yaban", "İntibah", "Araba Sevdası", "Kiralık Konak", "Eylül"] },
  { yazar: "Namık Kemal", eser: "İntibah", secenekler: ["İntibah", "Turfanda mı Yoksa Turfa mı", "Sinekli Bakkal", "Kiralık Konak", "Felatun Bey ile Rakım Efendi"] },
  { yazar: "Ahmet Vefik Paşa", eser: "Moliere'den çeviriler", secenekler: ["Piyale", "Değirmen", "Moliere'den çeviriler", "Harabat", "Nağme-i Seher"] },
  { yazar: "Şemsettin Sami", eser: "Taaşşuk-ı Talat ve Fitnat", secenekler: ["Vatan Yahut Silistre", "Taaşşuk-ı Talat ve Fitnat", "Eylül", "Zehra", "Mai ve Siyah"] },
  { yazar: "Direktör Ali Bey", eser: "Seyahat Jurnali", secenekler: ["Seyahat Jurnali", "İclal", "Tutunamayanlar", "Aşk-ı Memnu", "Sergüzeşt"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Nağme-i Seher", secenekler: ["Çalıkuşu", "Nağme-i Seher", "Yalnızız", "Takdir-i Elhan", "Şermin"] },
  { yazar: "Ziya Paşa", eser: "Harabat", secenekler: ["Kağnı", "Safahat", "Harabat", "Defter-i Amal", "Zafername"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Esrar-ı Cinayat", secenekler: ["Esrar-ı Cinayat", "Tutunamayanlar", "Yaban", "Felatun Bey ile Rakım Efendi", "Hasan Mellah"] },
  { yazar: "Namık Kemal", eser: "Celaleddin Harzemşah", secenekler: ["Celaleddin Harzemşah", "Sodom ve Gomore", "Yalnızız", "Turfanda mı Yoksa Turfa mı", "Zehra"] },
  { yazar: "Şemsettin Sami", eser: "Kamus-ı Türkî", secenekler: ["Türkçülüğün Esasları", "Kamus-ı Türkî", "Nutuk", "Taaşşuk-ı Talat ve Fitnat", "Kamusü’l Âlâm"] },
  { yazar: "Ahmet Vefik Paşa", eser: "Zor Nikah", secenekler: ["Sinekli Bakkal", "Aşk-ı Memnu", "Zor Nikah", "Zoraki Tabip", "Moliere'den çeviriler"] },
  { yazar: "Ali Suavi", eser: "Ulûm", secenekler: ["Ulûm", "Şermin", "Gurbet Hikayeleri", "Tercüman-ı Ahval Mukaddimesi", "Kamus-ı Türkî"] },
  { yazar: "Sadullah Paşa", eser: "On Dokuzuncu Asır", secenekler: ["Ateşten Gömlek", "On Dokuzuncu Asır", "Piyale", "Vatan Yahut Silistre", "Harabat"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Takdir-i Elhan", secenekler: ["Takdir-i Elhan", "Rübab-ı Şikeste", "Tiryaki Sözleri", "Nağme-i Seher", "Zehra"] },
  { yazar: "Ziya Paşa", eser: "Defter-i Amal", secenekler: ["Aganta Burina Burinata", "Geçtiğim Yol", "Defter-i Amal", "Harabat", "Zafername"] },
  { yazar: "Namık Kemal", eser: "Tahrib-i Harabat", secenekler: ["Tahrib-i Harabat", "Harabat", "Sergüzeşt", "Zafername", "On Dokuzuncu Asır"] },

  // Eklenen yeni sorular:
  { yazar: "Ahmet Mithat Efendi", eser: "Hasan Mellah", secenekler: ["Hasan Mellah", "Felatun Bey ile Rakım Efendi", "Zehra", "Cezmi", "Araba Sevdası"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Zemzeme", secenekler: ["Zemzeme", "Nağme-i Seher", "Takdir-i Elhan", "Kiralık Konak", "Eylül"] },
  { yazar: "Namık Kemal", eser: "Renan Müdafaanamesi", secenekler: ["Renan Müdafaanamesi", "İntibah", "Sergüzeşt", "Harabat", "Kamus-ı Türkî"] },
  { yazar: "Ziya Paşa", eser: "Rüya", secenekler: ["Rüya", "Defter-i Amal", "Harabat", "Şair Evlenmesi", "Seyahat Jurnali"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Dürdane Hanım", secenekler: ["Dürdane Hanım", "Sergüzeşt", "Eylül", "Araba Sevdası", "Mai ve Siyah"] },
  { yazar: "Şinasi", eser: "Tercüman-ı Ahval Mukaddimesi", secenekler: ["Tercüman-ı Ahval Mukaddimesi", "Vatan Yahut Silistre", "Araba Sevdası", "İntibah", "Takdir-i Elhan"] },
  { yazar: "Ahmet Vefik Paşa", eser: "Zoraki Tabip", secenekler: ["Zoraki Tabip", "Zor Nikah", "Seyahat Jurnali", "Araba Sevdası", "Şair Evlenmesi"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Afife Anjelik", secenekler: ["Afife Anjelik", "Çalıkuşu", "Kiralık Konak", "Eylül", "Sergüzeşt"] },
  { yazar: "Namık Kemal", eser: "Cezmi", secenekler: ["Cezmi", "İntibah", "Zehra", "Hasan Mellah", "Vatan Yahut Silistre"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Karnaval", secenekler: ["Karnaval", "Dürdane Hanım", "Esrar-ı Cinayat", "Turfanda mı Yoksa Turfa mı", "Eylül"] }
],


servet : [
  { yazar: "Halit Ziya Uşaklıgil", eser: "Mai ve Siyah", secenekler: ["Mai ve Siyah", "Eylül", "Yaban", "Araba Sevdası", "Aşk-ı Memnu"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Aşk-ı Memnu", secenekler: ["Sinekli Bakkal", "Aşk-ı Memnu", "Çalıkuşu", "Kiralık Konak", "Eylül"] },
  { yazar: "Tevfik Fikret", eser: "Rübab-ı Şikeste", secenekler: ["Safahat", "Rübab-ı Şikeste", "Şermin", "Tiryaki Sözleri", "Nağme-i Seher"] },
  { yazar: "Tevfik Fikret", eser: "Haluk’un Defteri", secenekler: ["Küçük Ağa", "Piyale", "Haluk’un Defteri", "Sis", "Rübab-ı Şikeste"] },
  { yazar: "Cenap Şahabettin", eser: "Tamat", secenekler: ["Tamat", "Sodom ve Gomore", "Kutadgu Bilig", "Şermin", "Zemzeme"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Haristan ve Gülistan", secenekler: ["Yalnızız", "Haristan ve Gülistan", "Tutunamayanlar", "Çağlayanlar", "Mai ve Siyah"] },
  { yazar: "Süleyman Nazif", eser: "Firak-ı Irak", secenekler: ["Sergüzeşt", "Tiryaki Sözleri", "Firak-ı Irak", "Batarya ile Ateş", "On Dokuzuncu Asır"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Nadide", secenekler: ["Nadide", "Aganta Burina Burinata", "Şık", "Hayal İçinde", "Eylül"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Hayal İçinde", secenekler: ["Hayal İçinde", "Ateşten Gömlek", "Peyami", "Nadide", "Mai ve Siyah"] },
  { yazar: "Ahmet Şuayip", eser: "İlm-i Ahval-i İçtimaiye", secenekler: ["Fatih Harbiye", "İlm-i Ahval-i İçtimaiye", "Yaban", "Çağlayanlar", "Ulûm"] },
  { yazar: "Servet-i Fünun", eser: "Dergisi", secenekler: ["Dergisi", "Gazetesi", "Romanı", "Ansiklopedisi", "Şiiri"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Zilal-i İlham", secenekler: ["Zilal-i İlham", "Şermin", "Tiryaki Sözleri", "Nağme-i Seher", "Sis"] },
  { yazar: "Faik Ali Ozansoy", eser: "Şiirlerim", secenekler: ["Şiirlerim", "Eylül", "Yaban", "Piyale", "Hac Yolunda"] },
  { yazar: "Mehmet Rauf", eser: "Eylül", secenekler: ["Eylül", "Sinekli Bakkal", "Saatleri Ayarlama Enstitüsü", "Mai ve Siyah", "Aşk-ı Memnu"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Nemide", secenekler: ["Nemide", "Yaban", "Tutunamayanlar", "Bir Ölünün Defteri", "Kırık Hayatlar"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Bir Ölünün Defteri", secenekler: ["Bir Ölünün Defteri", "Çalıkuşu", "İnce Memed", "Nemide", "Eylül"] },
  { yazar: "Cenap Şahabettin", eser: "Hac Yolunda", secenekler: ["Hac Yolunda", "Seyahat Jurnali", "İstanbul’un İç Yüzü", "Avrupa Mektupları", "Tiryaki Sözleri"] },
  { yazar: "Tevfik Fikret", eser: "Sis", secenekler: ["Sis", "Piyale", "Şermin", "Rübab-ı Şikeste", "Tamat"] },
  { yazar: "Süleyman Nazif", eser: "Batarya ile Ateş", secenekler: ["Batarya ile Ateş", "Safahat", "Kağnı", "Firak-ı Irak", "On Dokuzuncu Asır"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Çağlayanlar", secenekler: ["Çağlayanlar", "Çalıkuşu", "Yalnızız", "Haristan ve Gülistan", "Tiryaki Sözleri"] },

  // Yeni eklenen sorular ↓
  { yazar: "Tevfik Fikret", eser: "Şermin", secenekler: ["Şermin", "Sis", "Tiryaki Sözleri", "Nağme-i Seher", "Zemzeme"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Kırık Hayatlar", secenekler: ["Kırık Hayatlar", "Aşk-ı Memnu", "Eylül", "Nemide", "Araba Sevdası"] },
  { yazar: "Cenap Şahabettin", eser: "Avrupa Mektupları", secenekler: ["Avrupa Mektupları", "Hac Yolunda", "Seyahat Jurnali", "Defter-i Amal", "Ulûm"] },
  { yazar: "Faik Ali Ozansoy", eser: "Temmuz Gecesi", secenekler: ["Temmuz Gecesi", "Şiirlerim", "Sis", "Eylül", "Mai ve Siyah"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Vicdan Alevleri", secenekler: ["Vicdan Alevleri", "Zilal-i İlham", "Sis", "Tiryaki Sözleri", "Nağme-i Seher"] },
  { yazar: "Mehmet Rauf", eser: "Ferda-yı Garam", secenekler: ["Ferda-yı Garam", "Eylül", "Araba Sevdası", "Kırık Hayatlar", "Çalıkuşu"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Hayat-ı Muhayyel", secenekler: ["Hayat-ı Muhayyel", "Hayal İçinde", "Nadide", "Eylül", "Yaban"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Sefile", secenekler: ["Sefile", "Nemide", "Bir Ölünün Defteri", "Eylül", "Kırık Hayatlar"] },
  { yazar: "Cenap Şahabettin", eser: "Evrak-ı Eyyam", secenekler: ["Evrak-ı Eyyam", "Tamat", "Hac Yolunda", "Sis", "Şermin"] },
  { yazar: "Tevfik Fikret", eser: "Tarih-i Kadim", secenekler: ["Tarih-i Kadim", "Haluk’un Defteri", "Rübab-ı Şikeste", "Şermin", "Sis"] }
],


fecri : [
  { yazar: "Ahmet Haşim", eser: "Piyale", secenekler: ["Piyale", "Kiralık Konak", "Yaban", "Eylül", "Rübab-ı Şikeste"] },
  { yazar: "Ahmet Haşim", eser: "Göl Saatleri", secenekler: ["Göl Saatleri", "Sis", "Rubab-ı Şikeste", "Nağme-i Seher", "Piyale"] },
  { yazar: "Faik Ali Ozansoy", eser: "Fani Teselliler", secenekler: ["Fani Teselliler", "Yalnızız", "Saatleri Ayarlama Enstitüsü", "Şiirlerim", "Piyale"] },
  { yazar: "Tahsin Nahit", eser: "Ruh-ı Bikayd", secenekler: ["Ruh-ı Bikayd", "Gurbet Hikayeleri", "Kuyucaklı Yusuf", "Jön Türk", "Salon Köşelerinde"] },
  { yazar: "Şahabettin Süleyman", eser: "Fanteziler", secenekler: ["Fanteziler", "Sergüzeşt", "Tutunamayanlar", "Çıkmaz Sokak", "Kadın Pençesi"] },
  { yazar: "Celal Sahir Erozan", eser: "Beyaz Gölgeler", secenekler: ["Beyaz Gölgeler", "Çalıkuşu", "Ateşten Gömlek", "Elhan-ı Vatan", "Kadın"] },
  { yazar: "Ali Canip Yöntem", eser: "Geçtiğim Yol", secenekler: ["Geçtiğim Yol", "Aganta Burina Burinata", "Anayurt Oteli", "Ulûm", "Şermin"] },
  { yazar: "Refik Halit Karay", eser: "İstanbul’un İç Yüzü", secenekler: ["İstanbul’un İç Yüzü", "Yaban", "Sodom ve Gomore", "Gurbet Hikayeleri", "Memleket Hikayeleri"] },
  { yazar: "Ahmet Haşim", eser: "Şiir-i Kamer", secenekler: ["Şiir-i Kamer", "Piyale", "Eylül", "Sis", "Göl Saatleri"] },
  { yazar: "Mehmet Behçet Yazar", eser: "Hatıralar", secenekler: ["Hatıralar", "Safahat", "Çalıkuşu", "Şermin", "Mai ve Siyah"] },
  { yazar: "Ahmet Haşim", eser: "Şiir Hakkında Bazı Mülahazalar", secenekler: ["Şiir Hakkında Bazı Mülahazalar", "Şermin", "Peyami", "Bize Göre", "Mukaddime"] },
  { yazar: "Tahsin Nahit", eser: "Jön Türk", secenekler: ["Jön Türk", "Tutunamayanlar", "Sinekli Bakkal", "Ruh-ı Bikayd", "Salon Köşelerinde"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Şiir Demeti", secenekler: ["Şiir Demeti", "Aganta Burina Burinata", "Seyahat Jurnali", "Zilal-i İlham", "Sis"] },
  { yazar: "Ahmet Haşim", eser: "Bize Göre", secenekler: ["Bize Göre", "Gurbet Hikayeleri", "Sodom ve Gomore", "Frankfurt Seyahatnamesi", "Piyale"] },
  { yazar: "Ahmet Haşim", eser: "Frankfurt Seyahatnamesi", secenekler: ["Frankfurt Seyahatnamesi", "Hac Yolunda", "Batarya ile Ateş", "Bize Göre", "Piyale"] },
  { yazar: "Ahmet Haşim", eser: "Mukaddime", secenekler: ["Mukaddime", "Sergüzeşt", "Fatih Harbiye", "Şiir Hakkında Bazı Mülahazalar", "Bize Göre"] },
  { yazar: "Celal Sahir Erozan", eser: "Çoban", secenekler: ["Çoban", "Aylak Adam", "Kuyucaklı Yusuf", "Beyaz Gölgeler", "Kadın"] },
  { yazar: "Tahsin Nahit", eser: "Salon Köşelerinde", secenekler: ["Salon Köşelerinde", "Yalnızız", "Saatleri Ayarlama Enstitüsü", "Ruh-ı Bikayd", "Jön Türk"] },
  { yazar: "Şahabettin Süleyman", eser: "Çıkmaz Sokak", secenekler: ["Çıkmaz Sokak", "Eylül", "Kiralık Konak", "Fanteziler", "Kadın Pençesi"] },
  { yazar: "Faik Ali Ozansoy", eser: "Elhan-ı Vatan", secenekler: ["Elhan-ı Vatan", "Sodom ve Gomore", "Piyale", "Fani Teselliler", "Şiirlerim"] },

  // Yeni eklenen 10 detaylı Fecr-i Âti sorusu ↓
  { yazar: "Ahmet Haşim", eser: "Merdiven", secenekler: ["Merdiven", "Sis", "O Belde", "Kaldırımlar", "Piyale"] },
  { yazar: "Tahsin Nahit", eser: "Ben Başka", secenekler: ["Ben Başka", "Salon Köşelerinde", "Ruh-ı Bikayd", "Çıkmaz Sokak", "Kadın Pençesi"] },
  { yazar: "Şahabettin Süleyman", eser: "Kadın Pençesi", secenekler: ["Kadın Pençesi", "Fanteziler", "Çıkmaz Sokak", "Ruh-ı Bikayd", "O Belde"] },
  { yazar: "Ahmet Haşim", eser: "O Belde", secenekler: ["O Belde", "Merdiven", "Sis", "Göl Saatleri", "Piyale"] },
  { yazar: "Refik Halit Karay", eser: "Memleket Hikayeleri", secenekler: ["Memleket Hikayeleri", "İstanbul’un İç Yüzü", "Yaban", "Sodom ve Gomore", "Gurbet Hikayeleri"] },
  { yazar: "Faik Ali Ozansoy", eser: "Payitahtın Kapısında", secenekler: ["Payitahtın Kapısında", "Elhan-ı Vatan", "Fani Teselliler", "Şiirlerim", "Sis"] },
  { yazar: "Celal Sahir Erozan", eser: "Kadın", secenekler: ["Kadın", "Çoban", "Beyaz Gölgeler", "Eylül", "Yalnızız"] },
  { yazar: "Ahmet Haşim", eser: "Bir Günün Sonunda Arzu", secenekler: ["Bir Günün Sonunda Arzu", "Merdiven", "O Belde", "Sis", "Piyale"] },
  { yazar: "Ali Canip Yöntem", eser: "Milli Edebiyat Cereyanının İlk Mübeşşirleri", secenekler: ["Milli Edebiyat Cereyanının İlk Mübeşşirleri", "Geçtiğim Yol", "Ulûm", "Piyale", "Sis"] },
  { yazar: "Şahabettin Süleyman", eser: "Dağlar ve Rüzgarlar", secenekler: ["Dağlar ve Rüzgarlar", "Çıkmaz Sokak", "Kadın Pençesi", "Fanteziler", "Ruh-ı Bikayd"] }
],

milli : [
  { yazar: "Ömer Seyfettin", eser: "Kaşağı", secenekler: ["Kaşağı", "Sinekli Bakkal", "Yalnızız"] },
  { yazar: "Ömer Seyfettin", eser: "Pembe İncili Kaftan", secenekler: ["Pembe İncili Kaftan", "Kağnı", "Eylül"] },
  { yazar: "Ömer Seyfettin", eser: "Bomba", secenekler: ["Bomba", "Yaban", "Sodom ve Gomore"] },
  { yazar: "Ziya Gökalp", eser: "Türkçülüğün Esasları", secenekler: ["Türkçülüğün Esasları", "Çalıkuşu", "Piyale"] },
  { yazar: "Ziya Gökalp", eser: "Altın Işık", secenekler: ["Altın Işık", "Şermin", "Piyale"] },
  { yazar: "Ziya Gökalp", eser: "Kızıl Elma", secenekler: ["Kızıl Elma", "Sis", "Haristan ve Gülistan"] },
  { yazar: "Ali Canip Yöntem", eser: "Milli Edebiyat Meselesi", secenekler: ["Milli Edebiyat Meselesi", "Geçtiğim Yol", "Eylül"] },
  { yazar: "Ali Canip Yöntem", eser: "Yeni Mecmua Yazıları", secenekler: ["Yeni Mecmua Yazıları", "Saatleri Ayarlama Enstitüsü", "Ateşten Gömlek"] },
  { yazar: "Halide Edib Adıvar", eser: "Ateşten Gömlek", secenekler: ["Ateşten Gömlek", "Sinekli Bakkal", "Anayurt Oteli"] },
  { yazar: "Halide Edib Adıvar", eser: "Sinekli Bakkal", secenekler: ["Sinekli Bakkal", "Fatih Harbiye", "Çalıkuşu"] },
  { yazar: "Halide Edib Adıvar", eser: "Vurun Kahpeye", secenekler: ["Vurun Kahpeye", "Aşk-ı Memnu", "Sodom ve Gomore"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Kiralık Konak", secenekler: ["Kiralık Konak", "Yaban", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Yaban", secenekler: ["Yaban", "Nur Baba", "Tutunamayanlar"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Nur Baba", secenekler: ["Nur Baba", "Kiralık Konak", "Aganta Burina Burinata"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Çalıkuşu", secenekler: ["Çalıkuşu", "İnce Memed", "Tutunamayanlar"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Dudaktan Kalbe", secenekler: ["Dudaktan Kalbe", "Yalnızız", "Peyami"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Yeşil Gece", secenekler: ["Yeşil Gece", "Kiralık Konak", "Aganta Burina Burinata"] },
  { yazar: "Mehmet Emin Yurdakul", eser: "Türk Sazı", secenekler: ["Türk Sazı", "Safahat", "Rübab-ı Şikeste"] },
  { yazar: "Mehmet Emin Yurdakul", eser: "Ey Türk Uyan", secenekler: ["Ey Türk Uyan", "Tiryaki Sözleri", "Sergüzeşt"] },
  { yazar: "Refik Halit Karay", eser: "Memleket Hikayeleri", secenekler: ["Memleket Hikayeleri", "Gurbet Hikayeleri", "İstanbul Hikayeleri"] },
  { yazar: "Refik Halit Karay", eser: "Gurbet Hikayeleri", secenekler: ["Gurbet Hikayeleri", "Tutunamayanlar", "Seyahat Jurnali"] },
  { yazar: "Refik Halit Karay", eser: "Sakın Aldanma", secenekler: ["Sakın Aldanma", "Yalnızız", "Sodom ve Gomore"] },
  { yazar: "Halide Nusret Zorlutuna", eser: "Benim Küçük Dostlarım", secenekler: ["Benim Küçük Dostlarım", "Şık", "Yaban"] },
  { yazar: "Hamdullah Suphi Tanrıöver", eser: "Dağ Yolu", secenekler: ["Dağ Yolu", "İnce Memed", "Kağnı"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Gönül Hanım", secenekler: ["Gönül Hanım", "Yalnızız", "Peyami"] },
  { yazar: "Ali Canip Yöntem", eser: "Geçtiğim Yol", secenekler: ["Geçtiğim Yol", "Aganta Burina Burinata", "Anayurt Oteli"] },
  { yazar: "Yusuf Akçura", eser: "Üç Tarz-ı Siyaset", secenekler: ["Üç Tarz-ı Siyaset", "Türkçülüğün Esasları", "Bize Göre"] },
  { yazar: "Halide Edib Adıvar", eser: "Handan", secenekler: ["Handan", "Eylül", "Aganta Burina Burinata"] }
],


cumhuriyet : [
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Yaban", secenekler: ["Tutunamayanlar", "Saatleri Ayarlama Enstitüsü", "Yaban"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Ankara", secenekler: ["Ankara", "Yalnızız", "Kiralık Konak"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Çalıkuşu", secenekler: ["Çalıkuşu", "Yalnızız", "İnce Memed"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Acımak", secenekler: ["Acımak", "Yeşil Gece", "Yorgun Savaşçı"] },
  { yazar: "Sabahattin Ali", eser: "Kürk Mantolu Madonna", secenekler: ["Kürk Mantolu Madonna", "Yaban", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Sabahattin Ali", eser: "Kuyucaklı Yusuf", secenekler: ["Kuyucaklı Yusuf", "Çalıkuşu", "Ateşten Gömlek"] },
  { yazar: "Sabahattin Ali", eser: "Sırça Köşk", secenekler: ["Sırça Köşk", "Kağnı", "Kiralık Konak"] },
  { yazar: "Peyami Safa", eser: "Yalnızız", secenekler: ["Yalnızız", "Tutunamayanlar", "Sodom ve Gomore"] },
  { yazar: "Peyami Safa", eser: "Fatih Harbiye", secenekler: ["Fatih Harbiye", "Yalnızız", "Kiralık Konak"] },
  { yazar: "Orhan Kemal", eser: "Bereketli Topraklar Üzerinde", secenekler: ["Bereketli Topraklar Üzerinde", "İnce Memed", "Kağnı"] },
  { yazar: "Orhan Kemal", eser: "Murtaza", secenekler: ["Murtaza", "Yalnızız", "Tutunamayanlar"] },
  { yazar: "Yaşar Kemal", eser: "İnce Memed", secenekler: ["İnce Memed", "Çalıkuşu", "Sinekli Bakkal"] },
  { yazar: "Yaşar Kemal", eser: "Yer Demir Gök Bakır", secenekler: ["Yer Demir Gök Bakır", "Kağnı", "Yorgun Savaşçı"] },
  { yazar: "Sait Faik Abasıyanık", eser: "Semaver", secenekler: ["Semaver", "Şık", "Kuyucaklı Yusuf"] },
  { yazar: "Sait Faik Abasıyanık", eser: "Lüzumsuz Adam", secenekler: ["Lüzumsuz Adam", "Sodom ve Gomore", "Fatih Harbiye"] },
  { yazar: "Halikarnas Balıkçısı", eser: "Aganta Burina Burinata", secenekler: ["Aganta Burina Burinata", "Yalnızız", "Kağnı"] },
  { yazar: "Ahmet Hamdi Tanpınar", eser: "Saatleri Ayarlama Enstitüsü", secenekler: ["Saatleri Ayarlama Enstitüsü", "Tutunamayanlar", "Yalnızız"] },
  { yazar: "Ahmet Hamdi Tanpınar", eser: "Huzur", secenekler: ["Huzur", "Fatih Harbiye", "Çalıkuşu"] },
  { yazar: "Tarık Buğra", eser: "Küçük Ağa", secenekler: ["Küçük Ağa", "Kaşağı", "Şermin"] },
  { yazar: "Tarık Buğra", eser: "Osmancık", secenekler: ["Osmancık", "Tutunamayanlar", "Yalnızız"] },
  { yazar: "Necip Fazıl Kısakürek", eser: "Çile", secenekler: ["Çile", "Safahat", "Piyale"] },
  { yazar: "Necip Fazıl Kısakürek", eser: "Bir Adam Yaratmak", secenekler: ["Bir Adam Yaratmak", "Kağnı", "Sodom ve Gomore"] },
  { yazar: "Nazım Hikmet", eser: "Memleketimden İnsan Manzaraları", secenekler: ["Memleketimden İnsan Manzaraları", "Çile", "Sis"] },
  { yazar: "Nazım Hikmet", eser: "835 Satır", secenekler: ["835 Satır", "Bize Göre", "Piyale"] },
  { yazar: "Orhan Veli Kanık", eser: "Garip", secenekler: ["Garip", "Piyale", "Şiir Demeti"] },
  { yazar: "Melih Cevdet Anday", eser: "Telgrafhane", secenekler: ["Telgrafhane", "Garip", "Çile"] },
  { yazar: "Oktay Rifat", eser: "Aşık Merdiveni", secenekler: ["Aşık Merdiveni", "Garip", "Yalnızız"] },
  { yazar: "Attila İlhan", eser: "Ben Sana Mecburum", secenekler: ["Ben Sana Mecburum", "İstanbul’un İç Yüzü", "Yaban"] },
  { yazar: "Attila İlhan", eser: "Duvar", secenekler: ["Duvar", "Garip", "Çile"] },
  { yazar: "Fakir Baykurt", eser: "Yılanların Öcü", secenekler: ["Yılanların Öcü", "İnce Memed", "Yalnızız"] },
  { yazar: "Kemal Tahir", eser: "Yorgun Savaşçı", secenekler: ["Yorgun Savaşçı", "Tutunamayanlar", "Sodom ve Gomore"] },
  { yazar: "Kemal Tahir", eser: "Esir Şehrin İnsanları", secenekler: ["Esir Şehrin İnsanları", "Fatih Harbiye", "Ateşten Gömlek"] },
  { yazar: "Aziz Nesin", eser: "Zübük", secenekler: ["Zübük", "Tutunamayanlar", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Rıfat Ilgaz", eser: "Hababam Sınıfı", secenekler: ["Hababam Sınıfı", "Kağnı", "Yorgun Savaşçı"] },
  { yazar: "Oğuz Atay", eser: "Tutunamayanlar", secenekler: ["Tutunamayanlar", "Yalnızız", "Yılanların Öcü"] },
  { yazar: "Oğuz Atay", eser: "Tehlikeli Oyunlar", secenekler: ["Tehlikeli Oyunlar", "Kuyucaklı Yusuf", "Ateşten Gömlek"] },
  { yazar: "Rasim Özdenören", eser: "Çözülme", secenekler: ["Çözülme", "Yalnızız", "Çile"] },
  { yazar: "Rasim Özdenören", eser: "Kafa Karıştıran Kelimeler", secenekler: ["Kafa Karıştıran Kelimeler", "Garip", "Tutunamayanlar"] },
  { yazar: "Sezai Karakoç", eser: "Mona Roza", secenekler: ["Mona Roza", "Ben Sana Mecburum", "Garip"] },
  { yazar: "Cahit Zarifoğlu", eser: "İşaret Çocukları", secenekler: ["İşaret Çocukları", "Piyale", "Çile"] },
  { yazar: "Erdem Bayazıt", eser: "Sebeb Ey", secenekler: ["Sebeb Ey", "Mona Roza", "Çözülme"] },
  { yazar: "Hilmi Yavuz", eser: "Doğu Şiirleri", secenekler: ["Doğu Şiirleri", "Garip", "Çile"] }
],
}

let current = 0;
let score = 0;
let selectedPeriod = "";
let activeQuestions = [];

const periodSelect = document.getElementById("periodSelect");
const startBtn = document.getElementById("startBtn");
const menu = document.getElementById("menu");
const game = document.getElementById("game");
const question = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

startBtn.onclick = () => {
  selectedPeriod = periodSelect.value;
  if (!selectedPeriod || !questions[selectedPeriod]) {
    alert("Lütfen bir dönem seçiniz.");
    return;
  }

  activeQuestions = [...questions[selectedPeriod]];
  shuffleArray(activeQuestions); // Rastgele sırala
  current = 0;
  score = 0;
  menu.style.display = "none";
  game.style.display = "block";
  nextBtn.style.display = "none";
  loadQuestion();
};

function loadQuestion() {
  result.textContent = "";
  const soru = activeQuestions[current];
  question.textContent = `Soru ${current + 1}/${activeQuestions.length}: "${soru.yazar}" adlı yazarın eseri hangisidir?`;
  optionsDiv.innerHTML = "";

  soru.secenekler.forEach(eser => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = eser;
    btn.onclick = () => checkAnswer(btn, eser, soru.eser);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(button, secilen, dogru) {
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach(btn => btn.onclick = null);

  if (secilen === dogru) {
    button.style.backgroundColor = "#a0e6a0";
    result.textContent = "✅ Doğru!";
    result.style.color = "green";
    score++;
  } else {
    button.style.backgroundColor = "#f08080";
    result.textContent = `❌ Yanlış! Doğru cevap: ${dogru}`;
    result.style.color = "red";
    optionButtons.forEach(btn => {
      if (btn.textContent === dogru) {
        btn.style.backgroundColor = "#a0e6a0";
      }
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  current++;
  if (current < activeQuestions.length) {
    nextBtn.style.display = "none";
    loadQuestion();
  } else {
    showFinalScreen();
  }
};

function showFinalScreen() {
  question.textContent = `🎉 Oyun Bitti!`;
  optionsDiv.innerHTML = `<p style="font-size: 20px;">Skorunuz: <strong>${score} / ${activeQuestions.length}</strong></p>`;
  result.textContent = "";

  nextBtn.textContent = "Yeniden Başla";
  nextBtn.style.display = "inline-block";
  nextBtn.onclick = () => {
    menu.style.display = "block";
    game.style.display = "none";
    nextBtn.textContent = "Sonraki Soru";
  };
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
