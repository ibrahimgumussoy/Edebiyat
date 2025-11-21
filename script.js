const questions = {
tanzimat : [
  { yazar: "Şinasi", eser: "Şair Evlenmesi", secenekler: ["Taaşşuk-ı Talat ve Fitnat", "Araba Sevdası", "Şair Evlenmesi", "Eylül", "Kiralık Konak"] },
  { yazar: "Namık Kemal", eser: "Vatan Yahut Silistre", secenekler: ["Sırça Köşk", "Vatan Yahut Silistre", "Sergüzeşt", "Ateşten Gömlek", "Felatun Bey ile Rakım Efendi"] },
  { yazar: "Ziya Paşa", eser: "Zafername", secenekler: ["Karabibik", "Zafername", "Eşber", "Demdeme", "Zor Nikah"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Felatun Bey ile Rakım Efendi", secenekler: ["Felatun Bey ile Rakım Efendi", "Sergüzeşt", "Cezmi", "Eylül", "Kamus-ı Türki"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Araba Sevdası", secenekler: ["Henüz On Yedi Yaşında", "İntibah", "Araba Sevdası", "Ömer'in Çocukluğu", "Zehra"] },
  { yazar: "Namık Kemal", eser: "İntibah", secenekler: ["İntibah", "Turfanda mı Yoksa Turfa mı", "Sinekli Bakkal", "Küçük Şeyler", "Afife Anjelik"] },
  { yazar: "Ahmet Vefik Paşa", eser: "Moliere'den çeviriler", secenekler: ["Piyale", "Değirmen", "Moliere'den çeviriler", "Harabat", "Nağme-i Seher"] },
  { yazar: "Şemsettin Sami", eser: "Taaşşuk-ı Talat ve Fitnat", secenekler: ["Vatan Yahut Silistre", "Taaşşuk-ı Talat ve Fitnat", "Eylül", "Zehra", "Mai ve Siyah"] },
  { yazar: "Direktör Ali Bey", eser: "Seyahat Jurnali", secenekler: ["Seyahat Jurnali", "İclal", "Tutunamayanlar", "Aşk-ı Memnu", "Sergüzeşt"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Nağme-i Seher", secenekler: ["Çalıkuşu", "Nağme-i Seher", "Yalnızız", "Demdeme", "Şermin"] },
  { yazar: "Ziya Paşa", eser: "Harabat", secenekler: ["Kağnı", "Safahat", "Harabat", "Tahrib-i Harabat", "Tercüman-ı Ahval"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Esrar-ı Cinayat", secenekler: ["Esrar-ı Cinayat", "Zor Nikah", "Pejmürde", "Makber", "Şerare"] },
  { yazar: "Namık Kemal", eser: "Celaleddin Harzemşah", secenekler: ["Celaleddin Harzemşah", "Sodom ve Gomore", "Yalnızız", "Turfanda mı Yoksa Turfa mı", "Zehra"] },
  { yazar: "Şemsettin Sami", eser: "Kamus-ı Türkî", secenekler: ["Türkçülüğün Esasları", "Kamus-ı Türkî", "Safahat", "Lehçe-i Osmani", "Terc-i Bent"] },
  { yazar: "Ahmet Vefik Paşa", eser: "Zor Nikah", secenekler: ["Tercuman-ı Ahval Mukaddimesi", "Durub-u Emsal-i Osmaniye", "Zor Nikah", "Renan Müdafaanamesi", "Kıssadan Hisse"] },
  { yazar: "Ali Suavi", eser: "Ulûm", secenekler: ["Ulûm", "Şermin", "Gurbet Hikayeleri", "Tercüman-ı Ahval Mukaddimesi", "Kamus-ı Türkî"] },
  { yazar: "Sadullah Paşa", eser: "On Dokuzuncu Asır", secenekler: ["Ateşten Gömlek", "On Dokuzuncu Asır", "Piyale", "Vatan Yahut Silistre", "Harabat"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Takdir-i Elhan", secenekler: ["Takdir-i Elhan", "Rübab-ı Şikeste", "Tiryaki Sözleri", "Avrupa'da Bir Cevelan", "Zehra"] },
  { yazar: "Ziya Paşa", eser: "Defter-i Amal", secenekler: ["Aganta Burina Burinata", "Geçtiğim Yol", "Defter-i Amal", "Hac Yolunda", "Fırak-ı Irak"] },
  { yazar: "Namık Kemal", eser: "Tahrib-i Harabat", secenekler: ["Tahrib-i Harabat", "Harabat", "Sergüzeşt", "Zafername", "On Dokuzuncu Asır"] },

  // Eklenen yeni sorular:
  { yazar: "Ahmet Mithat Efendi", eser: "Hasan Mellah", secenekler: ["Hasan Mellah", "Siyah İnciler", "Zehra", "Cezmi", "Araba Sevdası"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Zemzeme", secenekler: ["Zemzeme", "Demdeme", "Bağbozumu", "Kiralık Konak", "Eylül"] },
  { yazar: "Namık Kemal", eser: "Renan Müdafaanamesi", secenekler: ["Renan Müdafaanamesi", "Timsal-i Aşk", "Sergüzeşt", "Harabat", "Kamus-ı Türkî"] },
  { yazar: "Ziya Paşa", eser: "Rüya", secenekler: ["Şair Evlenmesi", "Okun Ucundan", "Yaprak Dökümü", "Rüya", "Seyahat Jurnali"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Dürdane Hanım", secenekler: ["Sergüzeşt", "Dürdane Hanım", "Eylül", "Araba Sevdası", "Mai ve Siyah"] },
  { yazar: "Şinasi", eser: "Tercüman-ı Ahval Mukaddimesi", secenekler: ["İntibah", "Vatan Yahut Silistre", "Araba Sevdası", "Tercüman-ı Ahval Mukaddimesi", "Takdir-i Elhan"] },
  { yazar: "Ahmet Vefik Paşa", eser: "Zoraki Tabip", secenekler: ["Şair Evlenmesi", "Erenlerin Bağından", "Seyahat Jurnali", "Araba Sevdası", "Zoraki Tabip"] },
  { yazar: "Recaizade Mahmut Ekrem", eser: "Afife Anjelik", secenekler: ["Çalıkuşu", "Afife Anjelik", "Kiralık Konak", "Eylül", "Sergüzeşt"] },
  { yazar: "Namık Kemal", eser: "Cezmi", secenekler: ["Türk Kalbi", "Turana Doğru", "Cezmi", "Hasan Mellah", "Türk'ün Ateşle İmtihanı"] },
  { yazar: "Ahmet Mithat Efendi", eser: "Karnaval", secenekler: ["Karnaval", "Pembe İncili Kaftan", "Kin", "Sisler ve Hisler", "Piyale"] }
],


servet : [
  { yazar: "Halit Ziya Uşaklıgil", eser: "Mai ve Siyah", secenekler: ["Mai ve Siyah", "Eylül", "Yaban", "Araba Sevdası", "Tamat"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Aşk-ı Memnu", secenekler: ["Sinekli Bakkal", "Aşk-ı Memnu", "Çalıkuşu", "Kiralık Konak", "Balıkçılar"] },
  { yazar: "Tevfik Fikret", eser: "Rübab-ı Şikeste", secenekler: ["Safahat", "Hayal İçinde", "Rübab-ı Şikeste", "Tiryaki Sözleri", "Nağme-i Seher"] },
  { yazar: "Tevfik Fikret", eser: "Haluk’un Defteri", secenekler: ["Küçük Ağa", "Piyale", "Şıpsevdi", "Kaside-i Askeriyye", "Haluk’un Defteri"] },
  { yazar: "Cenap Şahabettin", eser: "Tamat", secenekler: ["Tamat", "Sodom ve Gomore", "Rubab'ın Cevabı", "Şermin", "Zemzeme"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Haristan ve Gülistan", secenekler: ["Yalnızız", "Haristan ve Gülistan", "Tutunamayanlar", "Serab-ı Ömrüm", "Zavallı Necdet"] },
  { yazar: "Süleyman Nazif", eser: "Firak-ı Irak", secenekler: ["Sergüzeşt", "Tiryaki Sözleri", "Firak-ı Irak", "Feryadı Garam", "On Dokuzuncu Asır"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Nadide", secenekler: ["Nadide", "Aganta Burina Burinata", "Şık", "Hayal İçinde", "Eylül"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Hayal İçinde", secenekler: ["Hayal İçinde", "Ateşten Gömlek", "Sufuhat", "Nadide", "Mai ve Siyah"] },
  { yazar: "Ahmet Şuayip", eser: "İlm-i Ahval-i İçtimaiye", secenekler: ["Fatih Harbiye", "İlm-i Ahval-i İçtimaiye", "Yaban", "Çağlayanlar", "Ulûm"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Kaside-i Askeriyye", secenekler: ["Hürriyet Kasidesi", "İlk Sevgi", "Kuyruklu Yıldız Altında Bir İzdivaç", "Müntehab Çocuk Şiirleri", "Kaside-i Askeriyye"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Zilal-i İlham", secenekler: ["Zilal-i İlham", "Şermin", "Tiryaki Sözleri", "Nağme-i Seher", "Sis"] },
  { yazar: "Faik Ali Ozansoy", eser: "Payitaht'ın Kapısında", secenekler: ["Hac Yolunda", "Eylül", "Yaban", "Piyale", "Payitaht'ın Kapısında"] },
  { yazar: "Mehmet Rauf", eser: "Eylül", secenekler: ["Saatleri Ayarlama Enstitüsü", "Sinekli Bakkal", "Eylül", "Mai ve Siyah", "Aşk-ı Memnu"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Nemide", secenekler: ["Nemide", "Yaban", "Tutunamayanlar", "Pençe", "İstanbu'un İç Yüzü"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Bir Ölünün Defteri", secenekler: ["Aziz İstanbul", "Çalıkuşu", "İnce Memed", "Bir Ölünün Defteri", "Eylül"] },
  { yazar: "Cenap Şahabettin", eser: "Hac Yolunda", secenekler: ["Hac Yolunda", "Seyahat Jurnali", "İstanbul’un İç Yüzü", "Avrupa Mektupları", "Asım"] },
  { yazar: "Tevfik Fikret", eser: "Sis", secenekler: ["Sevda Sözleri", "Piyale", "Şermin", "Taaşşuk-ı Talat ve Fitnat", "Tamat"] },
  { yazar: "Süleyman Nazif", eser: "Batarya ile Ateş", secenekler: ["Batarya ile Ateş", "Safahat", "Kağnı", "Firak-ı Irak", "On Dokuzuncu Asır"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Çağlayanlar", secenekler: ["Kaldırımlar", "Kadın Pençesi", "Araba Sevdası", "Çağlayanlar", "Tiryaki Sözleri"] },

  // Yeni eklenen sorular ↓
  { yazar: "Tevfik Fikret", eser: "Şermin", secenekler: ["Şermin", "Epope", "Tiryaki Sözleri", "Nağme-i Seher", "Kızılelma"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Kırık Hayatlar", secenekler: ["Serab-ı Ömrüm", "Bugünün Saraylısı", "Yezidin Kızı", "Topuz", "Kırık Hayatlar"] },
  { yazar: "Cenap Şahabettin", eser: "Avrupa Mektupları", secenekler: ["Kendi Gök Kubbemiz", "Avrupa Mektupları", "Git Bahar", "Defter-i Amal", "Ulûm"] },
  { yazar: "Faik Ali Ozansoy", eser: "Kehkeşana Karşı", secenekler: ["Ankara", "Merdiven", "Kehkeşana Karşı", "Hatay'a Selam", "Elhan-ı Şita"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Vicdan Alevleri", secenekler: ["Vicdan Alevleri", "Son Yıldız", "Şir", "Kırlar ve Denizler", "Odalar ve Sofalar"] },
  { yazar: "Mehmet Rauf", eser: "Ferda-yı Garam", secenekler: ["Aşka Dair", "Böğürtlen", "Kuvayımilliye Desyanı", "Ferda-yı Garam", "Karabibik"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Hayat-ı Muhayyel", secenekler: ["Hayat-ı Muhayyel", "Evrak-ı Eyyam", "Handan", "Tatarcık", "And"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Sefile", secenekler: ["Sefile", "Bir Ermeni General", "Mona Rosa", "Duhter-i Hindu", "Beyaz Gölgeler"] },
  { yazar: "Cenap Şahabettin", eser: "Evrak-ı Eyyam", secenekler: ["Tarih-i Kadim", "Göl Saatleri", "Pembe İncili Kaftan", "Evrak-ı Eyyam", "Küçük Şeyler"] },
  { yazar: "Tevfik Fikret", eser: "Tarih-i Kadim", secenekler: ["Sahra", "Tarih-i Kadim", "Zafername", "Cezmi", "Tiryaki Sözler"] }
],


fecri : [
  { yazar: "Ahmet Haşim", eser: "Piyale", secenekler: ["Piyale", "Kin", "Bir Buhran", "Şeytan Diyor Ki", "Efruz Bey"] },
  { yazar: "Ahmet Haşim", eser: "Göl Saatleri", secenekler: ["Ben Deli miyim?", "Harname", "Göl Saatleri", "Çıkmaz Sokak", "Dağ Yolu"] },
  { yazar: "Faik Ali Ozansoy", eser: "Fani Teselliler", secenekler: ["Dev Şarkısı", "Fani Teselliler", "İnhizam", "Siyah Kitap", "Jön Türkler"] },
  { yazar: "Tahsin Nahit", eser: "Ruh-ı Bikayd", secenekler: ["Ruh-ı Bikayd", "Erenlerin Bağından", "Günebakan", "Nefes Almak", "Çile"] },
  { yazar: "Şahabettin Süleyman", eser: "Fırtına", secenekler: ["Bize Göre", "İntibah", "Fırtına", "Zor Nikah", "Sisler ve Hisler"] },
  { yazar: "Celal Sahir Erozan", eser: "Beyaz Gölgeler", secenekler: ["Kırmızı Fesler", "Nesteren", "Otuz Beş Yaş", "Beyaz Gölgeler", "Bir Ermeni General"] },
  { yazar: "Ahmet Haşim", eser: "Gurabahane-i Laklahan", secenekler: ["Sayfiyede", "Gurabahane-i Laklahan", "Eylül", "Şermin", "Kırlar ve Denizler"] },
  { yazar: "Mehmet Behçet Yazar", eser: "Yumak", secenekler: ["Merdiven", "Safahat", "Yeniçeriler", "Yumak", "Mai ve Siyah"] },
  { yazar: "Ahmet Haşim", eser: "Şiir Hakkında Bazı Mülahazalar", secenekler: ["Şiir Hakkında Bazı Mülahazalar", "Şermin", "Peyami", "Bize Göre", "Mukaddime"] },
  { yazar: "Tahsin Nahit", eser: "Kırlar ve Denizler", secenekler: ["Kırpıntı", "Tutunamayanlar", "Sinekli Bakkal", "Kırlar ve Denizler", "Safahat"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Şiir Demeti", secenekler: ["Şiir Demeti", "Aganta Burina Burinata", "Seyahat Jurnali", "Zilal-i İlham", "Sis"] },
  { yazar: "Ahmet Haşim", eser: "Bize Göre", secenekler: ["Siyah Gözler", "Çankaya", "Bize Göre", "Anlatamıyorum", "Yeşil Gece"] },
  { yazar: "Ahmet Haşim", eser: "Frankfurt Seyahatnamesi", secenekler: ["Nur Baba", "Frankfurt Seyahatnamesi", "Yalnız Efe", "Haluk'un Defteri", "Şık"] },
  { yazar: "Emin Bülent Serdaroğlu", eser: "Kin", secenekler: ["Kin", "Zincir", "Harem", "Hızırla Kırk Saat", "Duvak"] },
  { yazar: "Celal Sahir Erozan", eser: "Buhran", secenekler: ["Piyale", "Bir Buhran", "Dudaktan Kalbe", "Kendi Gök Kubbemiz", "Buhran"] },
  { yazar: "Tahsin Nahit", eser: "Sisler ve Hisler", secenekler: ["Sisler ve Hisler", "Zavallı Necdet", "Muharrir Bu Ya", "Afife Anjelik", "Lugat-ı Naci"] },
  { yazar: "Emin Bülent Serdaroğlu", eser: "Hatay'a Selam", secenekler: ["Türk'ün Ateşle İmtihanı", "Zafer Yolunda", "Hatay'a Selam", "Saray ve Ötesi", "Çürük Temel"] },
  { yazar: "Faik Ali Ozansoy", eser: "Elhan-ı Vatan", secenekler: ["Elhan-ı Vatan", "Sodom ve Gomore", "Mensiyat", "Renan Müdafaanamesi", "Çakırın Destanı"] },

  // Yeni eklenen 10 detaylı Fecr-i Âti sorusu ↓
  { yazar: "Emin Bülent Serdaroğlu", eser: "Dev Şarkısı", secenekler: ["Dev Şarkısı", "Cezmi", "Dağa Çıkan Kurt", "Gönül Hanım", "Geçtiğim Yol"] },
  { yazar: "Ahmet Haşim", eser: "Merdiven", secenekler: ["Kaldırımlar", "Şermin", "Pejmürde", "Merdiven", "Kin"] },
  { yazar: "Tahsin Nahit", eser: "Ben Başka", secenekler: ["Sivaslı Karınca", "Ben Başka", "Telemak", "Çıkmaz Sokak", "Kadın Pençesi"] },
  { yazar: "Şahabettin Süleyman", eser: "Çıkmaz Sokak", secenekler: ["Şeytan Diyor Ki", "Sarnıç", "Çıkmaz Sokak", "Zübük", "İstanbul'u Dinliyorum"] },
  { yazar: "Ahmet Haşim", eser: "O Belde", secenekler: ["O Belde", "Diyojen", "Akif Bey", "Karabibik", "Küçük Şeyler"] },
  { yazar: "Faik Ali Ozansoy", eser: "Payitahtın Kapısında", secenekler: ["Hakkın Sesleri", "Çankaya", "Kaşağı", "Payitahtın Kapısında", "Hababam Sınıfı"] },
  { yazar: "Celal Sahir Erozan", eser: "Siyah Kitap", secenekler: ["Hızırla Kırk Saat", "Siyah Kitap", "Bir Gün Mutlaka", "Boş Beşik", "Gol Kralı"] },
  { yazar: "Ahmet Haşim", eser: "Bir Günün Sonunda Arzu", secenekler: ["Serenad", "Künye", "Bir Günün Sonunda Arzu", "Beş Şehir", "Sırça Köşk"] },
  { yazar: "Şahabettin Süleyman", eser: "Tenkidat-ı Edebiyye: Namık Kemal", secenekler: ["Kadın Ruhu", "Haluk'un Defteri", "Yalan", "Tenkidat-ı Edebiyye: Namık Kemal", "Müntebat-ı Eş'ar"] }
],

milli : [
  { yazar: "Ömer Seyfettin", eser: "Kaşağı", secenekler: ["Kaşağı", "Sinekli Bakkal", "Yalnızız", "Bir Serencam", "Günebakan"] },
  { yazar: "Ömer Seyfettin", eser: "Pembe İncili Kaftan", secenekler: ["Hançer", "Pembe İncili Kaftan", "Kadınlar Tekkesi", "Kurbağacık", "Eski Saat"] },
  { yazar: "Ömer Seyfettin", eser: "Bomba", secenekler: ["Yeni Hayat", "Yaban", "Tunç Sesleri", "Bomba", "Odalar ve Sofalar"] },
  { yazar: "Ziya Gökalp", eser: "Türkçülüğün Esasları", secenekler: ["Türkçülüğün Esasları", "Vatan Yolunda", "Türkün Ateşle İmtihanı", "Dağa Çıkan Kurt", "Turana Doğru"] },
  { yazar: "Ziya Gökalp", eser: "Altın Işık", secenekler: ["Kızılcık Dalları", "Asım", "Kendi Gök Kubbemiz", "Türk Akdeniz", "Altın Işık"] },
  { yazar: "Ziya Gökalp", eser: "Kızıl Elma", secenekler: ["Osmanoflar", "Kızıl Elma", "Çile", "Beş Şehir", "Kurtlar Sofrası"] },
  { yazar: "Ali Canip Yöntem", eser: "Milli Edebiyat Meselesi", secenekler: ["Milli Edebiyat Meselesi", "Handan", "Eylül", "Çağlayanlar", "Ey Türk Uyan"] },
  { yazar: "Ali Canip Yöntem", eser: "Epope", secenekler: ["Nadide", "Sarpanapal", "Epope", "835 Satır", "Yaprak Dökümü"] },
  { yazar: "Halide Edib Adıvar", eser: "Ateşten Gömlek", secenekler: ["Ateşten Gömlek", "Türk Kalbi", "Anayurt Oteli", "Aydaki Kadın", "Kırık Saz"] },
  { yazar: "Halide Edib Adıvar", eser: "Sinekli Bakkal", secenekler: ["Kuvayı Milliye Destanı", "Fatih Harbiye", "Sinekli Bakkal", "Kiralık Konak", "Yaban"] },
  { yazar: "Halide Edib Adıvar", eser: "Vurun Kahpeye", secenekler: ["Vurun Kahpeye", "Ankara", "Sodom ve Gomore", "Kızılcık Dalları", "Atatürk Kurtuluş Savaşında"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Kiralık Konak", secenekler: ["Kiralık Konak", "Türk'ün Ateşle İmtihanı", "Gönül Hanım", "Yeni Turan", "Türk Töresi"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Yaban", secenekler: ["Yaban", "Safahat", "Başını Vermeyen Şehit", "Türkleşmek Muasırlaşmak İslamlaşmak", "Bizim Akdeniz"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Nur Baba", secenekler: ["Nur Baba", "İntibah", "Aganta Burina Burinata", "Kahramanlar", "Sebil ve Güvercinler"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Çalıkuşu", secenekler: ["Çalıkuşu", "İnce Memed", "Tutunamayanlar", "Hababam Sınıfı", "Aşk-ı Memnu"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Dudaktan Kalbe", secenekler: ["Dudaktan Kalbe", "Araba Sevdası", "Bize Göre", "Zavallı Çocuk", "Elde Var Hüzün"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Yeşil Gece", secenekler: ["Yeşil Gece", "Eylül", "Zehra", "Bugünün Saraylısı", "Zafer Yolunda"] },
  { yazar: "Mehmet Emin Yurdakul", eser: "Türk Sazı", secenekler: ["Türk Sazı", "Mahur Beste", "Rübab-ı Şikeste", "Örümcek Ağı", "Bingöl Çobanları"] },
  { yazar: "Mehmet Emin Yurdakul", eser: "Ey Türk Uyan", secenekler: ["Ey Türk Uyan", "Tiryaki Sözleri", "Sergüzeşt", "Çıkrık", "Aydınlık Kapı"] },
  { yazar: "Refik Halit Karay", eser: "Memleket Hikayeleri", secenekler: ["Memleket Hikayeleri", "Geçtiğim Yol", "Forsa", "Tatarcık", "Tan Sesleri"] },
  { yazar: "Refik Halit Karay", eser: "Gurbet Hikayeleri", secenekler: ["Gurbet Hikayeleri", "Celalettin Harzemşah", "Doksanbeşe Doğru", "Kırlar ve Denizler", "Yılanlı Kuyudan"] },
  { yazar: "Refik Halit Karay", eser: "Bugünün Saraylısı", secenekler: ["Bugünün Saraylısı", "Günebakan", "Kızıl Elma", "Esir Şehrin İnsanları", "Küçük Ağa"] },
  { yazar: "Halide Nusret Zorlutuna", eser: "Benim Küçük Dostlarım", secenekler: ["Benim Küçük Dostlarım", "Handan", "Vurun Kahpeye", "Yorgun Savaşçı", "Despot"] },
  { yazar: "Hamdullah Suphi Tanrıöver", eser: "Dağ Yolu", secenekler: ["Dağ Yolu", "Şermin", "Balıkçılar", "Han Duvarları", "İstanbul'u Dinliyorum"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Gönül Hanım", secenekler: ["Gönül Hanım", "Dokuzuncu Hariciye Koğuşu", "Mai ve Siyah", "Gülüp Ağladıklarım", "İskendername"] },
  { yazar: "Ali Canip Yöntem", eser: "Geçtiğim Yol", secenekler: ["Geçtiğim Yol", "Aganta Burina Burinata", "Makber", "Altın Işık", "Asım"] },
  { yazar: "Yusuf Akçura", eser: "Üç Tarz-ı Siyaset", secenekler: ["Üç Tarz-ı Siyaset", "Kanije Kalesi ve Osmanlı Tarihi", "Korkuyu Beklerken", "Siyah İnciler", "Nadide"] },
  { yazar: "Halide Edib Adıvar", eser: "Handan", secenekler: ["Handan", "Benim Küçük Dostlarım", "Çankaya", "İstanbul'un İç Yüzü", "Hançer"] },
  { yazar: "Aka Gündüz", eser: "Kurbağacık", secenekler: ["Kurbağacık", "Eski Şehrin İnsanları", "Gölgeler", "Çete", "Hüküm Gecesi"] },
  { yazar: "Mehmet Akif Ersoy", eser: "Asım", secenekler: ["Asım", "Kendi Gök Kubbemiz", "Takdir-i Elhan", "Macera'yı Aşk", "Terkib-i Bent"] }
],


cumhuriyet : [
  { yazar: "Sabahattin Ali", eser: "Kürk Mantolu Madonna", secenekler: ["Kürk Mantolu Madonna", "Rahmet Yolları Kesti", "Avare Yıllar", "Yusufçuk Yusuf", "Zübük"] },
  { yazar: "Sabahattin Ali", eser: "Kuyucaklı Yusuf", secenekler: ["Kuyucaklı Yusuf", "Acı Tütün", "Yılanların Öcü", "Eski Toprak", "Hızırla Kırk Saat"] },
  { yazar: "Sabahattin Ali", eser: "Sırça Köşk", secenekler: ["Sırça Köşk", "Göğe Bakma Durağı", "Üvercinka", "Elde Var Hüzün", "Sivaslı Karınca"] },
  { yazar: "Peyami Safa", eser: "Yalnızız", secenekler: ["Yalnızız", "Mona Rosa", "Ölmez Otu", "Değirmen", "Mahur Beste"] },
  { yazar: "Peyami Safa", eser: "Fatih Harbiye", secenekler: ["Fatih Harbiye", "Osmancık", "Boğaziçi Mehtapları", "Şahmerdan", "On İkiye Bir Var"] },
  { yazar: "Orhan Kemal", eser: "Bereketli Topraklar Üzerinde", secenekler: ["Bereketli Topraklar Üzerinde", "Bir Düğün Gecesi", "Kılavuz", "Anayurt Oteli", "Ihlamur Ağacı"] },
  { yazar: "Orhan Kemal", eser: "Ekmek Kavgası", secenekler: ["Ekmek Kavgası", "Kurtlar Sofrası", "Ödeşmeler", "Beyaz Kale", "Canan"] },
  { yazar: "Yaşar Kemal", eser: "İnce Memed", secenekler: ["İnce Memed", "Çalıkuşu", "Aşk-ı Memnu", "Hababam Sınıfı", "Yaz Yağmuru"] },
  { yazar: "Yaşar Kemal", eser: "Yer Demir Gök Bakır", secenekler: ["Yer Demir Gök Bakır", "Batmayan Gün", "Cumartesi Yalnızlığı", "Esir Şehrin İnsanları", "Kırk Yıl Önce Kırk Yıl Sonra"] },
  { yazar: "Sait Faik Abasıyanık", eser: "Semaver", secenekler: ["Semaver", "Ekmek Kavgası", "Kuyucaklı Yusuf", "Mürebbiye", "Ölmez Otu"] },
  { yazar: "Sait Faik Abasıyanık", eser: "Havuz Başı", secenekler: ["Havuz Başı", "Erbain", "Fatih Harbiye", "Güvercin Curnatası", "Türkistan Türkistan"] },
  { yazar: "Halikarnas Balıkçısı", eser: "Aganta Burina Burinata", secenekler: ["Aganta Burina Burinata", "Duvak", "Ayrılık Sevdaya Dahil", "Aşk ve Zafer", "835 Satır"] },
  { yazar: "Ahmet Hamdi Tanpınar", eser: "Saatleri Ayarlama Enstitüsü", secenekler: ["Saatleri Ayarlama Enstitüsü", "Yılanlı Kuyudan", "Gök Onları Yanıltmaz", "Yalnız Efe", "Ekmek Kavgası"] },
  { yazar: "Ahmet Hamdi Tanpınar", eser: "Huzur", secenekler: ["Huzur", "Ayaşlı ve Kiracılar", "Çalıkuşu", "Keşanlı Ali Destanı", "Troya'da Ölüm Vardı"] },
  { yazar: "Tarık Buğra", eser: "Küçük Ağa", secenekler: ["Küçük Ağa", "Anayurt Oteli", "Gül Yetiştiren Adam", "İntibah", "Buzul Çağın Virüsü"] },
  { yazar: "Tarık Buğra", eser: "Osmancık", secenekler: ["Osmancık", "Bıçağın Ucu", "Boş Beşik", "Neredesin", "Yaban"] },
  { yazar: "Necip Fazıl Kısakürek", eser: "Çile", secenekler: ["Çile", "Sözden Söze", "Eşref Saati", "Ah Biz Eşekler", "Silindir Şapka Giyen Köylü"] },
  { yazar: "Necip Fazıl Kısakürek", eser: "Örümcek Ağı", secenekler: ["Örümcek Ağı", "Bir Otelde Yedi Kişi", "Tunç Sesleri", "Memleketimden İnsan Manzaraları", "Baykuş"] },
  { yazar: "Nazım Hikmet", eser: "Memleketimden İnsan Manzaraları", secenekler: ["Memleketimden İnsan Manzaraları", "Tohum", "Virgülün Başından Geçenler", "Ah Yalan Dünya", "Dostlar Beni Hatırlasın"] },
  { yazar: "Nazım Hikmet", eser: "835 Satır", secenekler: ["835 Satır", "Mihriban", "Dom Dom Kurşunu", "Harap Mabetleri", "Kirpinin Dedikleri"] },
  { yazar: "Orhan Veli Kanık", eser: "İstanbul'u Dinliyorum", secenekler: ["İstanbul'u Dinliyorum", "Divançe", "Kaldırımlar", "Toprak Ana", "Efruz Bey"] },
  { yazar: "Melih Cevdet Anday", eser: "Telgrafhane", secenekler: ["Telgrafhane", "Anlatamıyorum", "Yer Demir Gök Bakır", "Hababam Sınıfı Uyanıyor", "Devlet Ana"] },
  { yazar: "Oktay Rifat", eser: "Aşık Merdiveni", secenekler: ["Aşık Merdiveni", "Esir Şehrin Mahpusu", "Baba Evi", "İçimizdeki Şeytan", "Üç Anadolu Efsanesi"] },
  { yazar: "Attila İlhan", eser: "Ben Sana Mecburum", secenekler: ["Ben Sana Mecburum", "Bacayı İndir Bacayı Kaldır", "Gol Kralı", "Nalınlar", "Sam Amca"] },
  { yazar: "Attila İlhan", eser: "Duvar", secenekler: ["Duvar", "Fahim Bey ve Biz", "Gece", "Bodur Minareden Öte", "Kartallar Yüksek Uçar"] },
  { yazar: "Fakir Baykurt", eser: "Yılanların Öcü", secenekler: ["Yılanların Öcü", "İnce Memed", "Susuz Yaz", "Karabibik", "Tatarcık"] },
  { yazar: "Kemal Tahir", eser: "Rahmet Yolları Kesti", secenekler: ["Rahmet Yolları Kesti", "Rahatı Kaçan Ağaç", "Hac Yolunda", "Haluk'un Defteri", "Bir Ölünün Defteri"] },
  { yazar: "Kemal Tahir", eser: "Esir Şehrin İnsanları", secenekler: ["Esir Şehrin İnsanları", "Saray ve Ötesi", "Feryadı Garam", "Bugünün Saraylısı", "Vatan Yolunda"] },
  { yazar: "Aziz Nesin", eser: "Zübük", secenekler: ["Zübük", "Bir Ömür Boyunca", "Şermin", "İclal", "Şir"] },
  { yazar: "Rıfat Ilgaz", eser: "Hababam Sınıfı", secenekler: ["Hababam Sınıfı", "Bize Göre", "Arz-ı Hal", "Tutunamayanlar", "Aşk-ı Memnu"] },
  { yazar: "Oğuz Atay", eser: "Tutunamayanlar", secenekler: ["Tutunamayanlar", "Çalıkuşu", "Yaprak Dökümü", "Fatih Harbiye", "İnce Memed"] },
  { yazar: "Oğuz Atay", eser: "Tehlikeli Oyunlar", secenekler: ["Tehlikeli Oyunlar", "Ses", "Ateşten Gömlek", "Kurt Kanunu", "Gavurun Kızı"] },
  { yazar: "Rasim Özdenören", eser: "Çözülme", secenekler: ["Çözülme", "Rezil Dünya", "Turgut Reis", "Cingöz Recai", "Oğlumuz"] },
  { yazar: "Rasim Özdenören", eser: "Kafa Karıştıran Kelimeler", secenekler: ["Kafa Karıştıran Kelimeler", "İki Uykunun Arasında", "Dokuzuncu Hariciye Koğuşu", "Çamlıacadaki Eniştemiz", "Sersem Kocanın Kurnaz Karısı"] },
  { yazar: "Sezai Karakoç", eser: "Mona Rosa", secenekler: ["Mona Rosa", "Üvercinka", "İstanbul", "Dünyanın En Güzel Arabistanı", "Yort Savul"] },
  { yazar: "Cemal Süreya", eser: "Üvercinka", secenekler: ["Üvercinka", "Hızırla Kırk Saat", "Kin", "Ateşpare", "Pejmürde"] },
  { yazar: "Cahit Sıtkı Tarancı", eser: "Otuz Beş Yaş", secenekler: ["Otuz Beş Yaş", "Kaldırımlar", "Olvido", "Bursa'da Zaman", "Memleketimden İnsan Manzaraları"] },
  { yazar: "Yavuz Bülent Bakiler", eser: "Duvak", secenekler: ["Duvak", "Hüzzam Beste", "Hasan'a Mektuplar", "Eski Ahbap", "Yusufçuk Yusuf"] }
], 
}

let current = 0;
let score = 0;
let selectedPeriod = "";
let activeQuestions = []; // Karışık sorular buraya yüklenecek

// === ELEMENTLER ===
const periodSelect = document.getElementById("periodSelect");
const startBtn = document.getElementById("startBtn");
const menu = document.getElementById("menu");
const game = document.getElementById("game");
const question = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

// === SORULARI KARIŞTIR (Fisher-Yates) ===
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// === BAŞLAT ===
startBtn.onclick = () => {
  selectedPeriod = periodSelect.value;
  if (!selectedPeriod || !questions[selectedPeriod]) {
    return alert("Lütfen geçerli bir dönem seçin!");
  }

  // SORULARI KARIŞTIR VE YÜKLE
  activeQuestions = shuffle(questions[selectedPeriod]);
  
  current = 0;
  score = 0;
  menu.style.display = "none";
  game.style.display = "block";
  showQuestion();
};

// === SORUYU GÖSTER ===
function showQuestion() {
  const q = activeQuestions[current];
  question.innerText = `${current + 1}. ${q.yazar} hangi eseri yazmıştır?`;
  
  optionsDiv.innerHTML = "";
  const shuffledOptions = shuffle([...q.secenekler]);

  shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option, btn);
    optionsDiv.appendChild(btn);
  });

  result.innerText = "";
  nextBtn.style.display = "none";
}

// === CEVAP KONTROL ===
function checkAnswer(selected, clickedBtn) {
  const q = activeQuestions[current];
  const buttons = optionsDiv.querySelectorAll("button");

  let correctFound = false;

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === q.eser) {
      btn.style.backgroundColor = "#27ae60";
      btn.style.color = "white";
      correctFound = true;
    } else if (btn === clickedBtn && selected !== q.eser) {
      btn.style.backgroundColor = "#e74c3c";
      btn.style.color = "white";
    }
  });

  if (selected === q.eser) {
    score++;
    result.innerText = "Doğru!";
    result.style.color = "#27ae60";
  } else {
    result.innerText = `Yanlış! Doğru cevap: ${q.eser}`;
    result.style.color = "#e74c3c";
  }

  nextBtn.style.display = "block";
}

// === SONRAKİ SORU ===
nextBtn.onclick = () => {
  current++;
  if (current < activeQuestions.length) {
    showQuestion();
  } else {
    // === OYUN BİTTİ ===
    game.innerHTML = `
      <h2>Quiz Tamamlandı!</h2>
      <p class="final-score">Skorunuz: ${score} / ${activeQuestions.length}</p>
      <button onclick="location.reload()" style="margin-top:10px;">Tekrar Oyna</button>
    `;
  }
};

// === ANA SAYFAYA DÖN ===
function goToMenu() {
  game.style.display = "none";
  menu.style.display = "block";
  periodSelect.value = "";
}

// Sayfa yüklendiğinde sosyal medya menüsünü görünür yap
document.addEventListener("DOMContentLoaded", () => {
  const socialMenu = document.getElementById("socialMenu");
  if (socialMenu) {
    // 500ms sonra görünür hale getir (animasyon etkisi)
    setTimeout(() => {
      socialMenu.classList.add("show");
    }, 500);
  }
});


