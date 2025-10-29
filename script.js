const questions = {
  tanzimat: [
    { yazar: "Şinasi", eser: "Şair Evlenmesi", secenekler: ["Taaşşuk-ı Talat ve Fitnat", "Araba Sevdası", "Şair Evlenmesi"] },
    { yazar: "Namık Kemal", eser: "Vatan Yahut Silistre", secenekler: ["Sırça Köşk", "Vatan Yahut Silistre", "Sergüzeşt"] },
    { yazar: "Ziya Paşa", eser: "Zafername", secenekler: ["Sefiller", "Zafername", "İclal"] },
    { yazar: "Ahmet Mithat Efendi", eser: "Felatun Bey ile Rakım Efendi", secenekler: ["Felatun Bey ile Rakım Efendi", "Sergüzeşt", "Çalıkuşu"] },
    { yazar: "Recaizade Mahmut Ekrem", eser: "Araba Sevdası", secenekler: ["Yaban", "İntibah", "Araba Sevdası"] },
    { yazar: "Namık Kemal", eser: "İntibah", secenekler: ["İntibah", "Turfanda mı Yoksa Turfa mı", "Sinekli Bakkal"] },
    { yazar: "Ahmet Vefik Paşa", eser: "Moliere'den çeviriler", secenekler: ["Piyale", "Değirmen", "Moliere'den çeviriler"] },
    { yazar: "Şemsettin Sami", eser: "Taaşşuk-ı Talat ve Fitnat", secenekler: ["Vatan Yahut Silistre", "Taaşşuk-ı Talat ve Fitnat", "Eylül"] },
    { yazar: "Direktör Ali Bey", eser: "Seyahat Jurnali", secenekler: ["Seyahat Jurnali", "İclal", "Tutunamayanlar"] },
    { yazar: "Recaizade Mahmut Ekrem", eser: "Nağme-i Seher", secenekler: ["Çalıkuşu", "Nağme-i Seher", "Yalnızız"] },
    { yazar: "Ziya Paşa", eser: "Harabat", secenekler: ["Kağnı", "Safahat", "Harabat"] },
    { yazar: "Ahmet Mithat Efendi", eser: "Esrar-ı Cinayat", secenekler: ["Esrar-ı Cinayat", "Tutunamayanlar", "Yaban"] },
    { yazar: "Namık Kemal", eser: "Celaleddin Harzemşah", secenekler: ["Celaleddin Harzemşah", "Sodom ve Gomore", "Yalnızız"] },
    { yazar: "Şemsettin Sami", eser: "Kamus-ı Türkî", secenekler: ["Türkçülüğün Esasları", "Kamus-ı Türkîı", "Nutuk"] },
    { yazar: "Ahmet Vefik Paşa", eser: "Zor Nikah", secenekler: ["Sinekli Bakkal", "Aşk-ı Memnu", "Zor Nikah"] },
    { yazar: "Ali Suavi", eser: "Ulûm", secenekler: ["Ulûm", "Şermin", "Gurbet Hikayeleri"] },
    { yazar: "Sadullah Paşa", eser: "On Dokuzuncu Asır", secenekler: ["Ateşten Gömlek", "On Dokuzuncu Asır", "Piyale"] },
    { yazar: "Recaizade Mahmut Ekrem", eser: "Takdir-i Elhan", secenekler: ["Takdir-i Elhan", "Rübab-ı Şikeste", "Tiryaki Sözleri"] },
    { yazar: "Ziya Paşa", eser: "Defter-i Amal", secenekler: ["Aganta Burina Burinata", "Geçtiğim Yol", "Defter-i Amal"] },
    { yazar: "Namık Kemal", eser: "Tahrib-i Harabat", secenekler: ["Tahrib-i Harabat", "Harabat", "Sergüzeşt"] }
  ],

servet: [
  { yazar: "Halit Ziya Uşaklıgil", eser: "Mai ve Siyah", secenekler: ["Mai ve Siyah", "Eylül", "Yaban"] },
  { yazar: "Halit Ziya Uşaklıgil", eser: "Aşk-ı Memnu", secenekler: ["Sinekli Bakkal", "Aşk-ı Memnu", "Çalıkuşu"] },
  { yazar: "Tevfik Fikret", eser: "Rübab-ı Şikeste", secenekler: ["Safahat", "Rübab-ı Şikeste", "Şermin"] },
  { yazar: "Tevfik Fikret", eser: "Haluk’un Defteri", secenekler: ["Küçük Ağa", "Piyale", "Haluk’un Defteri"] },
  { yazar: "Cenap Şahabettin", eser: "Tamat", secenekler: ["Tamat", "Sodom ve Gomore", "Kutadgu Bilig"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Haristan ve Gülistan", secenekler: ["Yalnızız", "Haristan ve Gülistan", "Tutunamayanlar"] },
  { yazar: "Süleyman Nazif", eser: "Firak-ı Irak", secenekler: ["Sergüzeşt", "Tiryaki Sözleri", "Firak-ı Irak"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Nadide", secenekler: ["Nadide", "Aganta Burina Burinata", "Şık"] },
  { yazar: "Hüseyin Cahit Yalçın", eser: "Hayal İçinde", secenekler: ["Hayal İçinde", "Ateşten Gömlek", "Peyami"] },
  { yazar: "Ahmet Şuayip", eser: "İlm-i Ahval-i İçtimaiye", secenekler: ["Fatih Harbiye", "İlm-i Ahval-i İçtimaiye", "Yaban"] },
  { yazar: "Servet-i Fünun", eser: "Dergisi", secenekler: ["Dergisi", "Gazetesi", "Romanı"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Zilal-i İlham", secenekler: ["Zilal-i İlham", "Şermin", "Tiryaki Sözleri"] },
  { yazar: "Faik Ali Ozansoy", eser: "Şiirlerim", secenekler: ["Şiirlerim", "Eylül", "Yaban"] },
  { yazar: "Mehmet Rauf", eser: "Eylül", secenekler: ["Eylül", "Sinekli Bakkal", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Halit Ziya", eser: "Nemide", secenekler: ["Nemide", "Yaban", "Tutunamayanlar"] },
  { yazar: "Halit Ziya", eser: "Bir Ölünün Defteri", secenekler: ["Bir Ölünün Defteri", "Çalıkuşu", "İnce Memed"] },
  { yazar: "Cenap Şahabettin", eser: "Hac Yolunda", secenekler: ["Hac Yolunda", "Seyahat Jurnali", "İstanbul’un İç Yüzü"] },
  { yazar: "Tevfik Fikret", eser: "Sis", secenekler: ["Sis", "Piyale", "Şermin"] },
  { yazar: "Süleyman Nazif", eser: "Batarya ile Ateş", secenekler: ["Batarya ile Ateş", "Safahat", "Kağnı"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Çağlayanlar", secenekler: ["Çağlayanlar", "Çalıkuşu", "Yalnızız"] }
],

fecri: [
  { yazar: "Ahmet Haşim", eser: "Piyale", secenekler: ["Piyale", "Kiralık Konak", "Yaban"] },
  { yazar: "Ahmet Haşim", eser: "Göl Saatleri", secenekler: ["Göl Saatleri", "Sis", "Rubab-ı Şikeste"] },
  { yazar: "Faik Ali Ozansoy", eser: "Fani Teselliler", secenekler: ["Fani Teselliler", "Yalnızız", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Tahsin Nahit", eser: "Ruh-ı Bikayd", secenekler: ["Ruh-ı Bikayd", "Gurbet Hikayeleri", "Kuyucaklı Yusuf"] },
  { yazar: "Şahabettin Süleyman", eser: "Fanteziler", secenekler: ["Fanteziler", "Sergüzeşt", "Tutunamayanlar"] },
  { yazar: "Celal Sahir Erozan", eser: "Beyaz Gölgeler", secenekler: ["Beyaz Gölgeler", "Çalıkuşu", "Ateşten Gömlek"] },
  { yazar: "Ali Canip Yöntem", eser: "Geçtiğim Yol", secenekler: ["Geçtiğim Yol", "Aganta Burina Burinata", "Anayurt Oteli"] },
  { yazar: "Refik Halit Karay", eser: "İstanbul’un İç Yüzü", secenekler: ["İstanbul’un İç Yüzü", "Yaban", "Sodom ve Gomore"] },
  { yazar: "Ahmet Haşim", eser: "Şiir-i Kamer", secenekler: ["Şiir-i Kamer", "Piyale", "Eylül"] },
  { yazar: "Mehmet Behçet Yazar", eser: "Hatıralar", secenekler: ["Hatıralar", "Safahat", "Çalıkuşu"] },
  { yazar: "Ahmet Haşim", eser: "Şiir Hakkında Bazı Mülahazalar", secenekler: ["Şiir Hakkında Bazı Mülahazalar", "Şermin", "Peyami"] },
  { yazar: "Tahsin Nahit", eser: "Jön Türk", secenekler: ["Jön Türk", "Tutunamayanlar", "Sinekli Bakkal"] },
  { yazar: "Ali Ekrem Bolayır", eser: "Şiir Demeti", secenekler: ["Şiir Demeti", "Aganta", "Seyahat Jurnali"] },
  { yazar: "Ahmet Haşim", eser: "Bize Göre", secenekler: ["Bize Göre", "Gurbet Hikayeleri", "Sodom ve Gomore"] },
  { yazar: "Ahmet Haşim", eser: "Frankfurt Seyahatnamesi", secenekler: ["Frankfurt Seyahatnamesi", "Hac Yolunda", "Batarya ile Ateş"] },
  { yazar: "Ahmet Haşim", eser: "Mukaddime", secenekler: ["Mukaddime", "Sergüzeşt", "Fatih Harbiye"] },
  { yazar: "Celal Sahir Erozan", eser: "Çoban", secenekler: ["Çoban", "Aylak Adam", "Kuyucaklı Yusuf"] },
  { yazar: "Tahsin Nahit", eser: "Salon Köşelerinde", secenekler: ["Salon Köşelerinde", "Yalnızız", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Şahabettin Süleyman", eser: "Çıkmaz Sokak", secenekler: ["Çıkmaz Sokak", "Eylül", "Kiralık Konak"] },
  { yazar: "Faik Ali Ozansoy", eser: "Elhan-ı Vatan", secenekler: ["Elhan-ı Vatan", "Sodom ve Gomore", "Piyale"] }
],

milli: [
  { yazar: "Ömer Seyfettin", eser: "Kaşağı", secenekler: ["Kaşağı", "Sinekli Bakkal", "Yalnızız"] },
  { yazar: "Ziya Gökalp", eser: "Türkçülüğün Esasları", secenekler: ["Türkçülüğün Esasları", "Çalıkuşu", "Piyale"] },
  { yazar: "Ali Canip Yöntem", eser: "Milli Edebiyat Meselesi", secenekler: ["Milli Edebiyat Meselesi", "Geçtiğim Yol", "Eylül"] },
  { yazar: "Halide Edib Adıvar", eser: "Ateşten Gömlek", secenekler: ["Ateşten Gömlek", "Sinekli Bakkal", "Anayurt Oteli"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Kiralık Konak", secenekler: ["Kiralık Konak", "Yaban", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Çalıkuşu", secenekler: ["Çalıkuşu", "İnce Memed", "Tutunamayanlar"] },
  { yazar: "Mehmet Emin Yurdakul", eser: "Türk Sazı", secenekler: ["Türk Sazı", "Safahat", "Rübab-ı Şikeste"] },
  { yazar: "Ziya Gökalp", eser: "Altın Işık", secenekler: ["Altın Işık", "Şermin", "Piyale"] },
  { yazar: "Refik Halit Karay", eser: "Memleket Hikayeleri", secenekler: ["Memleket Hikayeleri", "Gurbet Hikayeleri", "İstanbul Hikayeleri"] },
  { yazar: "Halide Nusret Zorlutuna", eser: "Benim Küçük Dostlarım", secenekler: ["Benim Küçük Dostlarım", "Şık", "Yaban"] },
  { yazar: "Hamdullah Suphi Tanrıöver", eser: "Dağ Yolu", secenekler: ["Dağ Yolu", "İnce Memed", "Kağnı"] },
  { yazar: "Ömer Seyfettin", eser: "Bomba", secenekler: ["Bomba", "Yaban", "Sodom ve Gomore"] },
  { yazar: "Mehmet Emin Yurdakul", eser: "Ey Türk Uyan", secenekler: ["Ey Türk Uyan", "Tiryaki Sözleri", "Sergüzeşt"] },
  { yazar: "Halide Edib Adıvar", eser: "Vurun Kahpeye", secenekler: ["Vurun Kahpeye", "Aşk-ı Memnu", "Sodom ve Gomore"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Dudaktan Kalbe", secenekler: ["Dudaktan Kalbe", "Yalnızız", "Peyami"] },
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Nur Baba", secenekler: ["Nur Baba", "Kiralık Konak", "Aganta Burina Burinata"] },
  { yazar: "Refik Halit Karay", eser: "Gurbet Hikayeleri", secenekler: ["Gurbet Hikayeleri", "Tutunamayanlar", "Seyahat Jurnali"] },
  { yazar: "Ahmet Hikmet Müftüoğlu", eser: "Gönül Hanım", secenekler: ["Gönül Hanım", "Yalnızız", "Peyami"] },
  { yazar: "Ali Canip Yöntem", eser: "Yeni Mecmua Yazıları", secenekler: ["Yeni Mecmua Yazıları", "Saatleri Ayarlama Enstitüsü", "Ateşten Gömlek"] },
  { yazar: "Halide Edib Adıvar", eser: "Sinekli Bakkal", secenekler: ["Sinekli Bakkal", "Fatih Harbiye", "Çalıkuşu"] }
],

cumhuriyet: [
  { yazar: "Yakup Kadri Karaosmanoğlu", eser: "Yaban", secenekler: ["Tutunamayanlar", "Saatleri Ayarlama Enstitüsü","Yaban"] },
  { yazar: "Reşat Nuri Güntekin", eser: "Çalıkuşu", secenekler: ["Çalıkuşu", "Yalnızız", "İnce Memed"] },
  { yazar: "Sabahattin Ali", eser: "Kürk Mantolu Madonna", secenekler: ["Kürk Mantolu Madonna", "Yaban", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Peyami Safa", eser: "Yalnızız", secenekler: ["Yalnızız", "Tutunamayanlar", "Sodom ve Gomore"] },
  { yazar: "Orhan Kemal", eser: "Bereketli Topraklar Üzerinde", secenekler: ["Bereketli Topraklar Üzerinde", "İnce Memed", "Kağnı"] },
  { yazar: "Yaşar Kemal", eser: "İnce Memed", secenekler: ["İnce Memed", "Çalıkuşu", "Sinekli Bakkal"] },
  { yazar: "Sait Faik Abasıyanık", eser: "Semaver", secenekler: ["Semaver", "Şık", "Kuyucaklı Yusuf"] },
  { yazar: "Halikarnas Balıkçısı", eser: "Aganta Burina Burinata", secenekler: ["Aganta Burina Burinata", "Yalnızız", "Kağnı"] },
  { yazar: "Ahmet Hamdi Tanpınar", eser: "Saatleri Ayarlama Enstitüsü", secenekler: ["Saatleri Ayarlama Enstitüsü", "Tutunamayanlar", "Yalnızız"] },
  { yazar: "Tarık Buğra", eser: "Küçük Ağa", secenekler: ["Küçük Ağa", "Kaşağı", "Şermin"] },
  { yazar: "Necip Fazıl Kısakürek", eser: "Çile", secenekler: ["Çile", "Safahat", "Piyale"] },
  { yazar: "Nazım Hikmet", eser: "Memleketimden İnsan Manzaraları", secenekler: ["Memleketimden İnsan Manzaraları", "Çile", "Sis"] },
  { yazar: "Orhan Veli Kanık", eser: "Garip", secenekler: ["Garip", "Piyale", "Şiir Demeti"] },
  { yazar: "Attila İlhan", eser: "Ben Sana Mecburum", secenekler: ["Ben Sana Mecburum", "İstanbul’un İç Yüzü", "Yaban"] },
  { yazar: "Fakir Baykurt", eser: "Yılanların Öcü", secenekler: ["Yılanların Öcü", "İnce Memed", "Yalnızız"] },
  { yazar: "Kemal Tahir", eser: "Yorgun Savaşçı", secenekler: ["Yorgun Savaşçı", "Tutunamayanlar", "Sodom ve Gomore"] },
  { yazar: "Aziz Nesin", eser: "Zübük", secenekler: ["Zübük", "Tutunamayanlar", "Saatleri Ayarlama Enstitüsü"] },
  { yazar: "Oğuz Atay", eser: "Tutunamayanlar", secenekler: ["Tutunamayanlar", "Yalnızız", "Yılanların Öcü"] },
  { yazar: "Rasim Özdenören", eser: "Çözülme", secenekler: ["Çözülme", "Yalnızız", "Çile"] },
  { yazar: "Sezai Karakoç", eser: "Mona Roza", secenekler: ["Mona Roza", "Ben Sana Mecburum", "Garip"] }
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
