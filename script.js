document.getElementById('goTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Sayfa scroll olduğunda butonu gizle veya göster
window.addEventListener('scroll', function() {
    var goTopButton = document.getElementById('goTopButton');
    
    if (window.scrollY > 200) {
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});

const rawData = `ABA: Saygıdeğer, saygıya layık kişi. Bazı Türk boylarında “ana’’,’’abla’’ , bazılarında ise baba anlamında da kullanılmaktadır.
ABADAN: 1- Cömert, verici 2- Bağışlayıcı, gönül yapıcı
ABAK: Temiz, iffetli, namuslu kişi
ABAKA: Yakın akraba, amca çocuğu
ABAKAN: Alicenap
ABAKAY: 1- Yakın akraba, yeğen, amca çocuğu 2- Sibirya’da saygın ve sözü geçen hanımlara verilen bir unvan
ABALA: Abla
ABAR: (Avar): 1- Gösteriş, heybetlilik 2- Baş eğmez, dirençli
ABAŞ: Hanım yürüyüşü (Küçük narin adım)
ABAY: 1- Aydınlık, aydınlık verici 2- Hayret uyandıran, hayret verici
ABAKIYMIŞ: Gönül kırıcı, can yakıcı
ABÇAR-(Avşar): 1- İşin ehli kişi, iş bitirici 2- Uyumlu, itaatkar
ABI: 1- Can, ruh 2- Soyluluk
ABIÇ: Gönüllü
ABIDAN: İçli, gönül insanı
ABIK: İçli, gönüllü
ABIKAN: Mec.Soylu
ABIL: Gönüllü, İstekli
ABINAK: Sakinleşmiş gönül rahatlığı içinde olan
ABINÇ(Avunç): Avunç, teselli
ABIŞ(Apış): Bacağın diz kapağından yukarısı
ABIŞKA : İçten, içtenlikle çalışan
ABIZ: Ruhsal, ruhlarla ilgili
ABİKE: Alicenap, yüksek gönüllü
ABİN: Mutlu, memnun, hoşnut
ACAR: 1-Gayretli,Hareketli 2- Gözü pek, yırtıcı
ACLAN: Açık,Açılan
ACU-(Acı,Açığ): 1- Açık 2-Keskin, sert 3- Açı,aralık
ACUN: Dünya, yeryüzü
ACUNAL: birl. Acun/Al (Almak’tan)
ACUNAY: birl. Acun/Ay/Mec.”Dünya güzeli”
ACUNLUK: Dünya malı,dünyalık
ACUNSUZ: Dünya malında gözü olmayan
AÇA: 1- Toplum içinde saygınlığı olan kişi 2-Analık derecesinde saygıya layık hanım
AÇAN: Açma eylemi içinde olan (Çiçek gibi)
AÇIĞ: 1-Açık,dürüst 2- Bahşiş bey yada hanların verdiği bahşiş
AÇIK: (Açığ) Büyük kardeş
AÇIL: Açık, açılmış
AÇUK: (Açık) İyi huylu,mülayim
ADAK: 1-Söz,nişan 2-Bağış,sungu
ADAL: Sadık, güvenilir
ADALAN: Ünlü, şöhretli
ADALDI: Ünlü
ADALIR: Ünlü
ADALMIŞ: Ünlü
ADAN: Uygunluk, liyakat
ADANIR: Ünlü
ADANMIŞ: Adaklı,adak olmuş
ADAR: Adama eyleminde bulunan
ADAY: Memnunluk,hoşnutluk
ABDAN: Ünlü
ADBERİLGEN: Adına layık ve ününü hak etmiş kişi
ADIKTI: Ünlü
ADIN: Ünlü,adı anılan
ADINÇIĞ: 1-Seçkin,mümtaz 2- Olağanüstü, fevkalade, bambaşka
ADIÖTE: birl. Adı/Öte Mec. Temiz bir üne sahip
ADIVAR: Ünlü,tanınmış
ADIYAKŞI: birl. Adı/Yakşı(Adı güzel)
ADIYAMAN: birl. Adı/Yaman Mec. Ürkütücü bir üne sahip kişi
ADIYEKE: birl. Adı/Yeke(yeğ) Mec. Saygıyla anılan kişi, adı yeğlenen kişi
ADKIR: Aygır,erkek at
ADMIŞ: Ün almış, tanınmış ADSAY: birl. Ad/Say Mec. Adına saygı duyulan kişi
ADSIZ: 1- Fakir,kimsesiz
AFŞAR (Abçar)
AFŞIN: Apçın,(Opçın) Zırh,demir örgülü savaş giysisi
AFTABA: Su ibriği
AGA (Ağa,Aka): 1-Saygıdeğer, ulu kişi 2- Cömert,koruyucu 3-Büyük erkek kardeş,ağabey
AGOLA: Yönetici,amir
AGUN: Tatmin,avuntu
AGUNMUŞ: Avunmuş,sakin
AĞAÇA: Akça, beyazca, alımlı
AĞALAK: Oğlak
AĞALBAY: Muhterem,saygıdeğer
AĞAN: 1-Yüksek,yukarıda,yukarılara çıkan 2- Geceleri gökten hızla geçen, ışıklı nokta
AĞAR: 1- Ağı ağırbaşlı, oturaklı 2- Gönül ferahlığı 3- Göğe yükseliş
AĞARTMIŞ: 1- Namuslu,dürüst 2- Alçak gönüllü, mütevazı
AĞAT (Akat): Namuslu, gönüllü, iffetli
AĞAYA: Makul,geçerli,uygun
AĞDUK: Kutsal,muhterem
AĞICI: Ağcı, Akçı, Akıcı, Hazinedar, Hazine sorumlusu
AĞIÇ: Varlık, hazine,servet
AĞILGAT: 1-Saygıdeğer 2- Yıldız,gezegen
AĞIM: Yükseliş
AĞIR: 1- Ağırbaşlı,olgun 2- Ünlü,saygın
AĞIRBAŞ: birl. Ağır/baş, olgun, alçak gönüllü
AĞIŞ: (Ağıç) Hazine, servet
AĞIT: Mersiye,ölüm Türküsü,göğe yükselen feryat
AĞLAMIŞ: Çileli,çile çeken
AĞMIK: 1- Ünlü,tanınmış 2- Yüksek rütbeli
AĞRAK: Yükselen,ilerleyen
AĞRITMIŞ: Mec. Acı kuvvete sahip kişi
AĞUL: 1- Ay’ın halesi 2- Oba, köy
AĞUTUR: Yükselten,yukarı çıkaran
AĞZUKARA: birl. Ağzı/Kara. Mec. Sert konuşan, acımasız ve hükmedici konuşan kişi
AK: 1- Beyaz 2- Doğuş, doğum 3- Yükseliş 4-Parlaklık 5-Devinim,hareketlilik 6-Mec.Namusluluk,iffet ve
güvenirliğin sembolü
AKA: Büyük,ulu kişi,saygıdeğer kişi
AKABA: Yokuş,meyil
AKAÇ: Akıcı
AKALIN: bir. Ak/Alın mec. Dürüst,namuslu
AKAN: 1- Akıcı 2- Yükselen
AKARCA: Dere,ırmak
AKAR: Dere,akarsu
AKARSU: Dere,ırmak
AKAŞ: birl. Ak/Aş mec.Helal rızk
AKAY: birl. Ak/Ay 1- Ayın en güzel anı 2- Yenisey Türklerinde “hanımefendi” anlamında kullanılır.
AKBAŞ: birl. Ak/Baş mec. Dürüst,namuslu
AKBEL: Dürüst,sözüne güvenilir kişi
AKBERGÜ: birl. Ak/Vergi fıtrat,huy mec.iyi huylu
AKÇA: 1-Beyaza kaçan 2-İpekli dokuma 3-Para,maliye,hazine
AKÇALAR: birl.Ak/çalar mec.Ak tenli hanım
AKÇALI: Zengin,mal sahibi
AKÇALMAZ: birl. Ak/Çalmaz mec.Yanık tenli hanım
AKÇIL: 1-Ak tenli, akça yüzlü 2- Ağarmış, aklaşmış
AKÇIN: Sözüne güvenilen,sağlam kişilikli
AKÇORA: birl. Ak/Çura 1- Şamanist gelenekte iyi ruh ve iyilik perisi
AKEL: birl. Ak/El mec.Dürüst,namuslu
AKGÜN: birl. Ak/Gün mec. Gelecek,istikbal
AKHAN: birl. Ak/Han Şamanist gelenekte “İyilik Tanrısı”
AKI: Eli açık,cömert,zengin gönüllü
AKIM: 1-Yönelim,yükseliş 2- Akmaktan, akıcı,yayılıcı
AKIN: 1-Saldırı,hücum 2-Kazak ve Kırgızlarda, ozan ve müzisyenlere verilen ad
AKINAY: birl. Akın/Ay Türkistan’da hanım ozanlara verilen ad
AKINCI: 1- Akın eden,saldıran 2- Osmanlılar dönemindeki, öncü birliklere ve bu birliklere dahil olan
kişilere verilen unvan
AKIŞ: 1-Yükseliş 2-Akmaktan akış 3-Servet,hazine
AKKARA: birl. Ak/Kara mec.Zıtların bütünlüğü
AKMAN: birl. 1-Temiz,iffetli 2-Apak,bembeyaz AKOBA: birl. Ak/Oba mec.soylu
AKSAK: 1-Aksayan,seken 2-Yükselen,çıkan
AKSOY: birl. Ak/Soy mec.Soylu
AKŞAMAN: birl. Ak/Şaman Şamanist gelenekte,iyi ruhlarla ilgilenen ve ilişkiye giren kam
AKŞİT: Yürekli,gözükara
AKTAN: birl. Ak/Tan seher vakti,şafak
AKUZ: birl. Ak/Uz (Uzman,usta)
AKÜN: birl. Ak/Ün mec.Temiz,şöhretli
AKYOL: birl. Ak/Yol mec.Dürüst,namuslu
AKYÖN: birl. Ak/Yön mec.Dürüst,namuslu
AKYÜZ: birl. Ak/yüz mec.Dürüst
AL: 1-Bayrak kumaşı 2-Kızarmış,kızarık 3-El,kolun bilekten aşağı kısmı 4- Ala,alaca 5-Almaktan al
ALA: Karışık renkli,benekli
ALABAN (Alban)Timsah
ALACA: Karışık renkli
ALAÇUK: Kulübe,baraka,Altay Türklerinde,oda,(Çadırın iç bölmesi)
ALAGAN: (Algan)Fatih
ALAGAŞ: Ender rastlanan,nadir
ALAGÜN: birl. Ala/Gün Gün ortası
ALAK: Yok edici,öldürücü,alıcı,avlayıcı
ALAN: 1-Işık,nur 2-Orman içindeki açık ve düzlük bölge 3- algan
ALANÇA: Bahçelerdeki ağaç aralarında bulunan çimenlik bölge
ALANGUVA: birl. Ala/Geyik
Cengiz Kaan’ın onuncu göbekten büyük anası 2- Ergenekon destanında adı geçen Uldız Han’ın kızı
3-Türk mitolojisinde yer alan ünlü kadın ki, efsaneye göre, bir nevi Türklerin ’’Meryem Ana” sı gibidir.
ALAR: Yalancı karanlık(Gündüz vaktinde)
ALAS (Alaz) Şamanist gelenekte “Ateş Tanrısı’’
ALASAYVAN: Şafak vakti,Güneşin doğuşu
ALASI: Erek,amaç,sahip olunması istenen nesne
ALATAŞ: birl. Ala/Taş Köz,ateş parçası
ALAYUNT: birl. Ala/Yunt Altay Türklerinde “kısrak” anlamında kullanılmaktadır.
ALBA: Yükümlülük,hizmet yükümlülüğü
ALBAGA: Hasılat,savaş yada av ganimeti
ALBAN: Haraç,ganimet
ALBATU: Bürokrat, hizmetle yükümlü kişi
ALBENİ: Çekim,cazibe,sempati
ALCU (Alçu)Alıcı,avcı
ALÇİÇEK: birl. Al/Çiçek (Gül’ün Türkçe karşılığı)
ALÇİN: Kızıl renkli bir çalı kuşu
ALÇU (Alcu)1-Algan,Fatih,2-Alcı,Avcı
ALDI: 1-Öncü,öndeki,selef 2-Algan,Fatih
ALDUR: Ok atışı,oklayış
ALEV (Yalav…Yal kökünden)Ateşten çıkan ışık
ALGAN: Fatih,Fetheden
ALGAZIN: Yabani vahşi hayvan
ALGI: 1-Fetih,Almaktan… alım 2- Fehim,algılama
ALGIN: 1- Serap 2-Yüksek yer 3- Bitiricilik,bitiriş
ALGIŞ (Alkış): Dua,yakarış,niyaz
ALGU: 1-Tüm,hepsi 2-Toplum,topluluk 3-Silah 4-Alıcı,avcı
ALGUR: Sakin,kendi halinde,kendinden emin
ALGÜN: birl. Al/Gün”…Kazak ve Kırgızlarda,doğum sırasında yaşanan dikkat çekici,unutulmaz günleri
mecz eder.
ALICI: Alcu,Avcı
ALIK: Alıngan,Kırgın
ALIM: 1-Çekim,Cazibe 2-Vergi,Haraç
ALIMGA: Yazıcı,(Han ve Kaanların buyruk ve fermanlarını yazan görevli kişi)
ALIMLI: Çekici,Cazibeli
ALINAK: birl. Alın/Ak mec.dürüst,namuslu
ALINCAHAN (Alınçak Han) Oğuzname’ye göre,Türk’ün oğullarından
ALINÇAK: 1-Çekici,cazip 2- Alıngan,nazik
ALINGAN: Alınan,incinen,gücenen
ALK: Bitirmek,yok etmek,sona erdirmek,bitiricilik
ALKA: 1-Bitirici,yok edici 2-İleri,ilerici
ALKABÖLÜK: birl. Alka/Bölük..Vurucu Tim
ALKAN: Alkan,Fatih
ALKAR: Bitirici,yok edici
ALKAŞ: Bitirici,yok edici ALKI: Pervasız,vurdumduymaz
ALKIM: 1-Gökkuşağı 2-Gerdan
ALKIR: Tamamlayıcı,bitirici
ALKIŞ: Algış,dua,övme,yüceltme
ALMA: Elma
ALMAKAY: Elma yanaklı
ALMALUK: 1-Alınması gerekli olan 2-Elma bahçesi
ALMAS: Almaz,nazlı
ALMILA: Elma
ALMIŞ: Algan,Fatih
ALP: Bu sözcük birçok erdemi içinde barındırır. Bilgelik, yiğitlik, fedakarlık, kahramanlık, gözükaralık, toplumculuk, vb. ile birlikte tüm bunlar arasındaki uyumu da içerir.
ALPAGU: Düşmanına tek başına saldıran kişi
ALPAGUT: 1-Alplik gösteren kişi 2-Kurt soyundan 3- Seçkin ve saygın kişi
ALPEREN: birl.Alp/Eren (Gazi, Derviş) Toplumun sayıp sevdiği, örnek aldığı savaşçı kişilerin genel adı
ALPMAN: Alp gibi Alpçe yaşayan
ALTAÇU (Altaç): Aldatıcı taktik sahibi
ALTAMIŞ: Aldatıcı,hileci
ALTAN: 1-Altın 2-Güneşin doğuş anı,Şafak
ALTANURUG: (Altın Uruk) Cengiz Kagan ve oğullarının soyuna verilen unvanlardan
ALTAY: 1-Al/Ala/Tay 2-Altın 3-Ormanlarla kaplı yüksek dağ
ALTINDAĞ: birl. Altın/Dağ/Altay dağlarının,diğer adı.
ALTU (Aldu): 1-İlk,Birinci 2-Algan,Fatih
ALTUN: Altın
ALTUNSABAK: birl. Altun/Sabak(sopa,değnek)
ALUÇ: 1-Alıcı(Alçu) 2-Kayın cinsi bir ağaç
ALUNGAN: Alıngan,nazlı
ALUNUR: Nazlı
ALYU: (Algu) T..Çağatay Han’ın torunu
AMAÇ: (Umaç)Gaye, hedef, beklenti
AMAN: (YAMAN) Sertlik
AMGAK: Emek/Zahmet
ANAÇ: 1-Anacık 2-Analık duygusu çok gelişmiş 3-Anaya çeken 4-Doğurgan, üretken
ANAGAY: Anaya çekmiş, anaya benzer
ANASIOĞLU: birl. Anası(nın)Oğlu (Babası erken ölmüş ve özellikle anası tarafından bin bir güçlüklerle yetiştirilip büyütülmüş, yetim çocuklar için kullanılmış olduğu anlaşılan Türk adlarından)
ANAT: 1-Anı,Anılan 2- Yakın,hısım
ANAZ: Yeğrek, evla, eftal
AND (ANT) 1-Yemin,söz 2- Yakın akraba
ANDA: Birlikte ant içmiş(kan kardeşi) (Anda’lık Türklerin en eski geleneklerinden biridir. Andalar birbirlerini kardeşlerinden daha ileride korur, sayar ve kayırmaya çalışırlar.)
ANDAÇ: Hatıra, anı olsun diye verilip,alınan hediye
ANDARIMAN: Anılara değer veren ve saygı gösteren kişi
ANDIR: Anısı ola hatıra
ANGAY: Anılarına bağlı olan kişi
ANGI: 1-Anı,hatıra,2-Yetki, yeterlilik
ANGIM: Mamur, hakim
ANGIN: Ünlü, anılan, adı duyulan
ANGIŞ: Ünlü, meşhur
ANGIT: Yaban ördeği
ANIK: 1-Anlayış, yetenek, fehim 2- Hafıza, bellek 3- Hazır, mevcutlu
ANLI: 1-Sakin, ağırbaşlı 2- Bellek, hafıza
ANIT: Anı olsun diye yapılan yapı
ANITGAN: Anıt yapan
ANLI: Ünlü, tanınan
ANNAK: Yadigar, hatıra
ANT: And, Yemin
ANTLIĞ: And içmiş, Yeminli
ANUÇUR: Övülmüş, övülmeye layık
ANUK: Yadigar, hatıra
ANUŞ: Anış, anma eylemi, anı
APA: Ulu, büyük, saygıyı ve hürmeti hak etmiş kişi (Bazı Türk bölgelerinde “baba” anlamına da kullanılmaktadır.
APAĞ: Apak, temiz
APAK: Temiz, namuslu,iffetli
APATEG: (Apatek)birl. Apa/Tegtek(gibi,benzer) ARA: Orta yer, ortalık, boşluk, orta
ARAL: 1-Ada 2- Aralık,orta, ortalık
ARAS: 1- At kılı 2- Kalın yün 3- Talih,baht
ARASLAN: Arslan (Çuvaşlarca söylenişi)
ARAT: Cesaret, yüreklilik
ARBIŞ: Büyü,efsun
ARBUZ: Büyü, sihir
ARCA: 1-Arıca, saf, temiz 2- Çam ağacı, çamdan yapılmış kutu
ARDA: 1-Uzun değnek 2- Artçı, halife, ardı sıra giden
ARDALI: (Ardalu) Yönetici, amir
ARDIÇ: 1- Halife, artçı 2- Bir ağaç türü
ARGA: Zeki, akıllı
ARGAN : (Arkan) Kement, kement bağı
ARGATU: Yaban koyunu
ARGIÇ: 1- Kır, mera 2- Gurur
ARGIN: 1-Yavaş, sakin 2- Gelecek yıl
ARGUN: Pars cinsinden avcı bir hayvan
ARGUŞ: (Arkuş)1- Edepli, terbiyeli 2- Haberci, haber veren
ARGÜDEN: birl. Ar/Güden, Arlı, edepli
ARI: (Arık) 1- Saf, arı, arınmış 2- Irmak, dere
ARICA: Soylu, temiz, iyi huylu
ARIÇ: Barış, sulh
ARIĞ (Arı, Arık)
ARIK: 1- Arı, arınmış, temiz 2- Narin, ince yapılı
ARIL: Arınmış, temiz, pak
ARIN: Saf, arınmış
ARINÇ: 1-Barış, kurtuluş 2- Temizlik, saflık, günahsızlık
ARINIK: Saf, şeffaf, billur
ARINMIŞ: Temiz, gönüllü
ARKIN: 1-Argın, yavaş, sakin 2- Halef, ardıç
ARKIŞ: 1-Ulak, haberci 2- Kervan, kafile
ARKUN: Halef, geriden gelen, takipçi
ARKUY: Siper, mevzi
ARKUZ: (Arguz) Edepli, iyi huylu
ARLAĞ: Arlı, edepli
ARLAT: Biricik oğul, anaların en çok üstüne düştükleri oğul
ARMAGUN: Armağan, hediye
ARMAĞAN (Yarmagun-Yarmagan)- Hediye
ARMAN: 1- Onurlu, arlı, edepli 2- Dilek, istek 3- Hayal, fantezi
ARPA: 1- Büyü, tılsım, Şamanist gelenekte, Kamların okuduğu dua 2- Tahıl
ARPAD (Arpa)
ARSİN: (Ersin) Kurtuluş, istiklal
ARSALAN: Arslan
ARSLAN: Yırtıcı hayvan Mec. Cesaret, atılganlık ve gözü pekliği sembolize eder.
ARSLANBALA: birl. Arslan/Bala..Arslan yavrusu
ARSLANCIK: Küçük arslan..Arslan yavrusu
ARSLANÇA: Arslan gibi, arslan özelliklerine sahip
ARSU: birl. Ar/Su mec. Namuslu, dürüst
ARSUN: 1- Efendi, ağırbaşlı 2- Rahata ermiş, huzurlu
ARTAGAN: Bereket, artuk, fazlalık, bolluk
ARTAM (Erdem)
ARTIM: Bereket, bolluk
ARTUÇ: Mızrak, mızrak ucu
ARTUK: Fazlalık, üstünlük, bereket mec. Varlık, zenginlik
ARTUKDOĞAN: birl. Artuk/Doğan Kırgızlarda, olağanüstü vasıflara sahip kişilere verilen bir unvan
ARTUN: Vakarlı, ölçülü
ARTUR: Cazibeli, çekici, işveli, fettan
ARTURU: 1- Ekstrem, uç noktalarda 2- Bereket, bolluk
ARTUT: Armağan, hediye
ARVIŞ: Sihir, büyü, tılsım
ARZIK: Fanatik, bağnaz, sofu
ASAN: 1- Sağlıklı, zinde 2- Asma eyleminde olan
ASENA: Efsanevi dişi kurtun adı. Yakın, Yakınlık duyulan
ASIGLI: Faydalı,Gerekli
ASIĞ (Ası,Asık) 1- Fayda, Çıkar 2-Kar,temettü
ASPAR (Asbar) Faydalı, işe yarayan ASRAK: Himaye, Koruma
AŞAN: Aşmak’dan …mec. Azimli, engel tanımaz
AŞIT: 1- Aşılacak, aşılması gerekli olan 2- İşitmekten…İşit, kulak ver
AŞKAR: 1- Savaş atı 2- Kuyruk ve yelesi kara, vücudu kula renginde olan at
AŞKIN: 1- Aşmış, üstün, faik,akranlarından ileride olan 2- Melodi,nağme
AŞUK: 1-Aşık,aşmış, geçmiş 2- Tolga
AŞULA: Yılmaz irade sahibi
AŞUR: Aşırmaktan… mec. Yılmaz, gayretli
ATA: 1- Ulu, saygıdeğer kişi 2- Baba, dede, ced 3- Adın ve soyun bağlı olduğu kök
ATABAY: birl. Ata/Bay lala, beybaba. Han, Kağan ve padişah çocuklarını eğitip yetiştiren kişilere verilen bir unvan
ATAÇ: 1- Atasına bağlı, Atasının yolunda 2- Atadan intikal eden 3- Büyüklük gösteren çocuk
ATADAN: Miras, manevi miras
ATAERİ: birl. Ata/Eri mec.Atalarına ve geçmişine saygılı
ATAGÜÇ: birl. Ata/Güç mec. Gücünü atalarından almış
ATAĞ: (Atak) 1- Ün, nam, şöhret 2- Atılgan 3- Dağ yolu 4- Çağlayan 5- Bir şahin türü
ATAHAN: birl. Ata/Han mec. Devletin ilk kurucu büyüğü, devlete ad veren kişi
ATALA: Tanınmış, ünlü ve zengin
ATALAN: Ünlü, Meşhur
ATALAY: Ad almış, ün almış, meşhur kişi (Atila’nın asıl adının bu ve bundan bozulup çevrilmiş hali olduğunu söyleyen bazı tarihçilerimiz de var.)
ATALIK: Miras
ATALMIŞ: Ünlü, meşhur
ATAMAN: Ulu, Saygıdeğer kişi Bir kısım tarihçilere göre, Osmanlının, kurucusu olan Osman bey’in asıl adı budur. Bir kısmı Atman, bir kısmı Otman der.
ATASAGUN: birl. Ata/Sagun Hekimlerin en ulusu başhekim Şamanist gelenekte de aynı ad, en iyi kamlar için kullanılmaktadır.
ATAY: 1- Ünlü, tanınmış 2- Akın, hücum
ATIGAY: Ünlü, tanınmış
ATIĞ: Adı sanı belli, ününü arttırmış kişi
ATIL: Ünlü, meşhur
ATILGAN: Atak, gözüpek,cesur
ATILMIŞ: Atılgan, gözüpek
ATIŞ: Ünlü, meşhur
ATİLAY: Türk tarihinin en önemli kişilerinden,Batı Hun imparatoru, Bu kişinin adı üzerinde tarihçi ve dilciler pek de anlaşamamışlardır. Benim görüşüm de göç sırasında İtil ırmağı kıyısında doğmuş olmasından dolayı “İtil/Ay”dır. Ancak bununla birlikte bu kişi için bazı adlar söylenmekte (Atila,Atilla,Atılay,Atilay,Atalay,Atlıhan vb.) Anlamlar:1- Atacık,babacık 2- İtil ırmağı kenarında doğduğundan ve Türklerdeki eski bir gelenekten dolayı “İtil” çocuğu anlamında verilen İtilay’ın zamanla Atilay’a dönüşümü 3- Atlı/Ay 4- Atlı/Han 5- Macar dilinde çelik anlamına gelen “Atzel” den ATLIĞ: Ünlü,zengin
ATMACA: Yırtıcı bir avcı kuş
ATMAN: Ünlü, saygın
ATMIŞ: Atma eyleminde bulunmuş (ok,kargı vb.)
ATSAK: Ünlü, adı duyulan
ATUK: Bolluk, bereket
AVAR (Abar) 1- Heybet, büyüklük(Abartı) 2- Dirençlilik, dayanıklılık
AVAZ: Nara, yüksek perdeli ses, çığlık
AVCI: Av yapan, avlayan
AVCIL: Avlayıcı, av işinin uzmanı
AVGAN: Avuntu
AVINÇ: Avuntu, teselli
AVINÇA: Avunç
AVINGU: Avunç,teselli
AVLAK: Av yeri, av olanı
AVKAR: Bozkır bıldırcını
AVUNÇ: Teselli, avuntu
AVUÇU: Avunç
AVUNDUK: Avuntu, teselli
AVUTMUŞ: Teselli eden
AY: Dünyamızın uydusu olan gezegen. Ancak Türk kültüründe bu ad güzellik, temizlik, ahlaklılık vb. değerleri de içeren birçok öğeyi içinde barındıran bir sembol ve mecaz olarak kullanılmıştır. Çok önceleri erkeklerde kullanılmasına karşın, zamanla kız çocuklarına ad olarak verilmiş, gerek başta, gerekse de son da, birleşik ad olarak değerlendirilmiştir. Bununla birlikte bazen geçmiş örneklerde de görüleceği gibi hem erkeklerde hem de kızlarda kullanılmıştır. Ancak yine de ağırlık kız adlarındadır.Ve kız adlarında önemli bir konumdadır. AYAĞ (Ayak) 1-Uğur, şeref, şan 2- Devinim, hareket (ayaklanma sözü) buradan gelir. AYANA: birl. Ay/Ana Altay Türklerinin eski tanrıçalarından
AYAS: Ay ışığı, mehtap, gece aydınlığı
Altay, Tuva, Çuvaş Türklerinde Tanrı sıfatı olarak kullanılan bir ad
AYATA: birl. Ay/Ata Şamanist gelenekte, göğün altıncı katına bakan Tanrı
AYAZ: 1- Ay ışığı 2- saf, berrak hava 3- Kuru soğuk
AYBAKIM: birl. Ay/Bakım, bakmaktan, bakış
AYBAN: birl. Ay/Ban mec. Debdebe, şaşa
AYBANDI: birl. Ay/Bandı (Banmak)
AYBAR: 1-Ay gibi parlak 2- Heybet,heybetlilik
AYBI: İmdat, medet
AYBIN: Onur,şeref
AYÇIL: Ay ışığı, ay pırıltısı
AYDA: 1- Ay’a eş değer güzellikte 2- Dere kenarlarında yetişen hoş kokulu bir çiçek
AYDABOLDI: birl. Ayda/Oldu mec. Ay parçası
AYDAN: Ay parçası
AYDAR: (Aydar Han) saç perçemi, kakül
AYDIN: 1- Aydınlık, ışık yoğunluğu 2- Açık, aşikar 3- Entelektüel , münevver
AYGAN: İçten, samimi, yaren
AYGAY: Nara, bağırtı
AYGIN: Sınırsız, uçsuz, geniş
AYGIR: Erkek at
AYGIRAG : 1-Dağ keçisi 2- Bir geyik türü
AYGUÇI: Yönetici, devlet görevlisi, danışman, yarıcı
AYIM: Çekicilik, sempati
AYIMÇA: Ay parçası
AYINTAP: Mehtap, ay ışığı
AYIR: Değişik, farklı, başka, fark
AYIRBAŞ: birl. Ayır/Baş..Değişim, mübadele
AYIRT: Fark, farklılık, ayırım
AYITGU: Temyiz
AYISIG: birl. Ay/Isıg..Ay ısısı, sıcaklığı
AYIT: Söylemek, anlatmak
AYITMIŞ: Söyleyen, bildiren, uyaran
AYKAÇ: Konuşkan, Konuşmacı, Hatip
AYKIN: Geniş, ferah, aydınlık
AYKOYUN: birl. Ay/Koyun Yakut destanlarında adı geçen, eski dönem güç tanrısı
AYLA: 1-Ayın çevresindeki ışık halesi 2- Devir, dönüşüm
AYLU (Aylı): Aydan
AYMA: Duyarsız, başıboş vurdum duymaz
AYMAN: Aya eş değerde
AYMAZ: Vurdumduymaz, başına buyruk
AYRAL: Kuraldışı, istisna
AYRI: Başka, değişik, farklı
AYRIÇ: Bölüşüm, taksimat
AYRIKÇA (Ayıkşa): Derviş, mecnun
AYRUK: 1- Farklı, değişik 2- Varlıklı, zengin
AYSELİG (Aysiliğ) birl. Ay/Silig, dürüst, namuslu
AYTAK: Konuşmacı, hatip
AYTAR: Haberci, muhbir
AYTEK: Konuşmacı, hatip
AYTIN: Aydın, aydınlık
AYTIŞ: Nutuk, anlatım, hitabet
AYTIŞAN: Hatip, konuşmacı
AYTUK: Hatip, konuşmacı
AYUK: Söz söylenebilen ve sözün değer gördüğü yer
AYUR: Konu, bahis, bahse konu olan
AYÜN: birl. Ay/Ün Karahanlılar ve Uygurlar döneminde, han ve kağanların analarına verilen bir unvan
AYZIT: Şamanist gelenekte “ Ay Tanrıçası”
AZBOY: Heyecan
AZGIN: Zapt edilmesi zor, sınırı aşmış, tahrik olmuş
AZLAĞ. Nadir, az rastlanır.
AZRAK: Nadir, az rastlanır.
AZUK: (Azuka, Azık): Geçimlik, yiyecek
BABAT:Cins, Tür
BABRAK: Hızlı, çevik, atletik
BABÜR: Kaplan cinsi, yırtıcı bir hayvan
BACI: Kız kardeş
BAÇAK: Bir çeşit zırh (Dize geçirilen bir zırh)
BAÇMAN: Başlık, Tolga
BADAN: Batan (Batmaktan…Güneşin batışı)
BADUR: Batur, bagatur, kahraman
BADURUK: (Badruk) 1- Sadık, güvenilir 2- Batur, kahraman
BAGA: 1- Alt, küçük, küçük rütbeli yönetici 2- Boğa
BAGATUR: Kahraman, Batur, Bahadır
BAGAY: Afacan, yaramaz, ele avuca sığmaz
BAGRI: Kararlılık, azim
BAĞAM: Destek,arka, kuvvet
BAĞAN: Anıt, abide
BAĞATUR: Bagatur, batur, bahadır, kahraman
BAĞDAŞUK: Uyumlu, ahenkli, uzlaşmacı
BAĞDU: Işık, şua, ışın
BAĞI: Büyü, efsun, bağlılık
BAĞIM: Bağlı, bağlılık
BAĞIMSIZ: Bağlı olmayan, özgür
BAĞIR: 1- Sine, göğüs, kucak 2- Kalp, gönül
BAĞIRLAK: İri bir kırlangıç türü
BAĞIŞ: 1- Veriş, ikram 2- Af, af ediş,3- Nezaret
BAĞLAN: 1- Demet, deste 2- Bağlılık 3- Kızıl renkli bir su kuşu
BAĞRI: Kararlı, azimli
BAĞŞI: (Baksı) Kam, doktor
BAHADIR: Bagatur, Batur, kahraman
BAHŞİ: Baksı, doktor, bilgin, büyücü, hoca
BAKAÇ: Bakıcı, bakan, nazır
BAKAN (Bağan): 1- Anıt, abide 2- Bağlayıcı, birleştirici 3- Haşarı, afacan
BAKAY: Haşarı, ele avuca sığmayan
BAKIM: Bakma eylemi, nazar, bakış
BAKIR: Bakır madeni
BAKIRSOKUM:birl. Bakır/Sokum (Kuzey Türklerinde, Merih yıldızı anlamına kullanılmaktadır.)
BAKIŞ:1- Bakış, nazar 2- İkram 3- af
BAKSI (Bakşı): Bahşı,doktor, bilgin, büyücü
BAKTI: Bakan, nazır
BAKUY: Ulu, saygıdeğer kişi, tecrübeli, bilge kişi
BAL: 1- Yapışkan sıvı 2- Arı balı 3- Çamur, balçık
BALA: Yavru, çocuk
BALABAN (Balıban): 1-Bala bandırılmış 2- İri başlı bir doğan türü Ayrıca mecaz olarak “ mahzun ve baygın bakış” anlamını içerir.
BALACA: Yavrucak, ufaklık
BALAK (Balak): manda yavrusu
BALAMAN: Cüsseli, iri kıyım
BALAMİR: (Balabir) Biricik yavru
BALANDI: İri yarı, gösterişli
BALASAGUN: birl. Bala/Sagun Özlenen, beklenen yavru (çocuk)
BALBAL: 1- Heykel, anıt 2- Mezar taşı (Eskiden mezarlara dikilen ve üzerlerine öldürülen düşman sayılarının ve kimliklerinin yazıldığı mezar taşı)
BALÇAK: Kabza, kılıç kabzasındaki siperlik
BALDU: Balta
BALDUK: Balta
BALGAY: Ünlü, meşhur
BALI: Değerli, yüksek, ulu kişi
BALKAN: Ormanlarla kaplı, dağlık bölge
BALKIN: Parlak, gözalıcı
BALKIR: 1- Yağmur arasında çıkan güneş 2- Yağmurun hemen ardından çıkan güneş
BALTA: Ağaç ve odun kesmek için kullanılan alet
BALTEG: Çamur, çamurlu BALUG (Balık) 1- Balçık çamur 2- Ev, köy 3- Suda yaşayan balık
BAMSI: 1- Yüksek, ulu, ulaşılmaz 2- Baksı, kam
BANAR: Demet, tutam, deste
BANGU: (Mengü, Bengü) Sonsuz, sonsuzluk, ebedi
BANIÇİÇEK: Kutsal Çiçek
BANLAK: Çağrı, davet, ezan
BARADAN: 1- Boradan, bora parçası 2- Nara, yüksek ses, bağırtı
BARAK: Türk mitolojisinde adı geçen çok tüylü, iri başlı köpek
BARBOL: Varol
BARÇA: 1- Parça 2- Tüm, tamam, eksiksiz
BARÇIN: İpekli kumaş, kadife
BARÇUK (Barçık) Tahta ve keçeden yapılan küçük heykel
BARÇUK ART TİGİN: birl. Barçuk/Art/Tigin (Art,ardçı,halef)
BARDAM: Varlık, ganimet, bolluk
BARGAN: Varan
BARDI: Vardı (Varmak…dan)
BARGAN: Varan, ulaşan
BARGI: Kadife
BARGIT: Kadife
BARGU: Nimet, ganimet
BARGUŞ: Ganimet
BARIK(Barı) : Esas, esas olan, mahfuz
BARIM: Varım, servet, varlık
BARIN: 1- Güç, kuvvet 2- Barınak
BARUNDUK: Sığınılacak yer, barınak
BARIŞ: 1-Varış, gidiş, gidişat 2- Sukunet, sulh 3- Servet, hazine
BARK: (Barka) baraka, ev çok önceleri saray anlamına kullanılan bu sözcük, Uygurların kentleşmeye ağırlık vermesinden sonra, “taştan yapılan ev” anlamında kullanılmıştır.
BARKAN:Oynak toprak, bataklık
BARKAT: Heykel, büst
BARKIN: 1- Gezgin, seyyah 2- Kararlı, azimli
BARKUK: Servet, varlık
BARLA: Parlak, göz alıcı
BARLAK: Parlak
BARLAS: 1- Çekici, cazip 2- Varlık, servet 3- Temiz, temizlik
BARLI: Varlıklı, zengin
BARLIK: Varlık
BARMAK : (Varmak)
BARMAKLAK: 1- Varıcı, ulaşıcı 2- Eldiven 3- Varlık
BARMAN: Varlıklılık, mevcudiyet
BARS: Pars, leopar
BARSUK: Porsuk
BARTIK: Heykel, büst
BARTU:1- Varlık, servet 2- Menzil, varılacak yer
BARUG: Mesned, dayanak
BASAGAR: Ağırbaşlı, mütevazi
BASAK(Basa)1- Cesur, gözükara 2- Baskın 3- Farklılık, ayırım
BASAN: 1- Baskın yapan 2- Ölünün ardından verilen yemek 3- Yayan, yayıcı
BASAR: Baskın, baskıncı
BASAT:1- Mühür, 2- Yardım, muavenet 3- Busat, pusat,silah 4- başat
BASGAN: Basan, baskıncı
BASIK: 1- Gece baskını 2- Basınç, tazyik, baskı
BASILGAN: Baskıncı
BASIM: Enerji, güç
BASIR: Basar
BASKAK: Basak, cesur, farklı, Çengiz Kaan döneminde askeri valiler için
kullanılan ünvanlardan
BASKIN:1- Galp, muzaffer 2- Ani yapılan saldırı 3- Basık, yaygın genişlemiş
BASMIL:1- Baskıncı 2- yardımcı, muavin
BASRUK: Baskı, tazyik
BASSIZ: Başsız, başına buyruk
BASTI: Bastıran, baskın yapan
BASTIK: Basdı, Baskıncı
BASU (Basut) Tokmak
BASUÇ: Baskı, tazyik
BASUT: 1-Yardım, yardımcı 2- Demir tokmak 3- Baskın yapan BAŞ: Oluş, doğuş, ortaya çıkış, uç nokta, doruk, birinci sıra gibi anlamların
hepsini içeren bir söz
BAŞACI: Reis, lider, öncü
BAŞAD(Başat)
BAŞAGUT:Önde gelen, önde bulunan, sevilen
BAŞAK:1- Buğday başı 2- Ok ucu…okun ucuna takılan sivri demir 3- Sümbül çiçeği
BAŞALMIŞ:1- Öncü,önder 2- Düşmanını yenip, yoketmiş
BAŞAR: Başarı, kazanç
BAŞARAN: Başarılı, muvaffak
BAŞARI: Muvaffakıyet
BAŞAT:1- Emsalleri arasında en üstün ve en önde gelen 2- Hanlık yapan bir soya mensup kişi
BAŞA: (Paşa) Bazı tarihçilerimize göre ..Baş-ağa, bazılarına göre ise Baş-şad sözcüklerinin değişime uğramasıyla bu biçime gelmiş ve sözcük, bugünkü anlamıyla General ordu komutanı
BAŞBAĞ:1- Başı bağlı, özgürlüğü kısıtlı 2- Gözde, sevgili, en değerli
BAŞBUĞ: Ordu komutanı, orgeneral
BAŞÇIL: Şef, lider, önde gelen
BAŞDAŞ: Denk, akran
BAŞDU: Başta olan, önde giden
BAŞEL: birl. Baş/İl..yol gösterici,mihmandar
BAŞGAK: 1- Başkan,şef 2- Bir tatlı su balığı
BAŞGÖZ: birl. Baş/Göz 1-Birleşik, ayrılmaz 2- Mec. Evlilik
BAŞGU: Alnında beyaz lekesi olan at
BAŞIL: Önde giden, şef
BAŞKAL: Emir, ferman
BAŞKAN: Yönetici, şef, başta giden
BAŞKARA: birl. Baş/Kara…mec. Sert, acımasız,bir kişiliğe sahip olan kişi
BAŞKIR: Başarı, muvaffakıyet
BAŞLADAÇU: Başlatıcı, yönetici, hakem
BAŞLAG: Başlangıç, ilk
BAŞLAK:1- Başıboş, salınmış 2- Başlangıç
BAŞLAMIŞ: 1- Kararlı, çalışkan 2-Lider, lider olmuş
BAŞLIĞ: Başı dik gururlu
BAŞLIK: Yönetici, şef
BAŞNAK: Başlıksız, tulgasız
BAŞŞAD: (Paşa) Ordu komutanı, general
BAŞTIN: Selef, önceki
BAŞTINKİ: Baştaki, öndeki, önder
BAŞVEREN: Fedai
BAŞVERMİŞ: Kurban, fedai
BATAK:1- Çamur, bataklık 2- Gizli, gömülü
BATIŞAD: birl. Batı/Şad T…Göktürk ve Uygur ordularında, batı kanadının komutanlarına verilen unvan BATIM:1- Batma boyu, boy, derinlik 2- Sivri bir aletin saplanması BATIR: Batur’un şive farkıyla söylenmiş biçimi
BATMAZ: 1-Diri, mücadeleci 2- Vücuduna sivri ve kesici aletler işlemez
BATRAK: (Batırak) Mızrak, kargı
BATSIK: 1- Bastıran, yanaştıran 2- Gün batısı, batı
BATU: 1-Güçlü, yenilmez, gücüne dayanılmaz 2- Dayanıklı, metin 3- Gün batısı
BATUGA: 1- Batu, kahraman 2- Gizli, gizlenmiş
BATUR: Bagatur, Kahraman
BATURGAN: 1- Saklayan, gizleyen, gizli 2- Batıran,saplayan
BATUT: Gizli, saklı
BAVIRGAN: 1- Şefkatli, koruyucu 2- Bağıran, nara atan
BAY: Varlık, zenginlik, egemenlik, erklik, üstünlük, bolluk sözcüklerinin tümünü içeren önemli bir ad. Türk adlarının önemli birleşiklerinden başka sözcüklerle kullanılabilen, kullanılan sözcüğü bütünleyip, güçlendiren, hem başa gelerek hem de sona gelerek kullanılabilen bir ad.
BAYA: Bay,baylanmış, zenginleşmiş
BAYAK: Selef, daha önceki
BAYAN: (Muyan, buyan) 1- Kalıcılık,sonsuzluk 2- Baht, mutluluk 3- Zenginlik, güçlülük,erklik 4- eski dönem Tanrı sıfatlarından 5- Uygur kağanlarının unvanlarından
BAYAR: Ulu, yüce, kudretli, celil…Tanrı sıfatlarından Bulgar hanlığı dönemi,soyluluk ve üstün vasıflı yöneticiler için verilen bir unvan
BAYAT: Tanrı sıfatlarından ,..1- Devletli, kısmetli 2- Kadim, ezeli
BAYATLI: Devletli, bahtı açık, muktedir BAYATLUĞ: (Bayatlı)
BAYAVUT (Bayagut) Varlıklı, muktedir
BAYÇA: Varlıklı, muktedir
BAYÇU (Baycu): Varlıklı, devletli
BAYDAK: 1- Bağımsız, hür 2- Bekar
BAYDAN: 1- Cömert, eli açık 2- Şık, yakışıklı
BAYDAR: Varlıklı, muktedir, egemen
BAYGIN: Kendinden geçmiş
BAYIK: 1- Varlıklı, egemen 2- Usta, eli yatkın 3- Doğru sözlü, saygılı, güvenilir
BAYIN: Çekici, güzel, yakışıklı
BAYINDIR: Güçlü,varlıklı, egemen
BAYIR: Yamaç
BAYITMIŞ: Zengin, kudret sahibi
BAYLA: Varlıklı, refah içinde olan
BAYLAK: Rahat, refah içinde
BAYLAM: 1- Azim, kararlılık 2- Demet, bağ
BAYLAMIŞ: Varlıklı, güçlü olmuş
BAYLAN: Nazlı, şımarık
BAYLANIŞ: İlişki, münasebet
BAYLIK: 1- Varlık, Varlıklılık, güçlülük 2- Ganimet
BAYMAZ: Mala mülke ilgi duymayan kişi
BAYRAÇ: Varlıklı, zengin
BAYRAK: Varlık, varoluş, erklik, güç, ve bağımsızlık
BAYRAM: Güzellik, mutluluk, sevinç, bolluk
BAYRI: 1- Ezeli, kadim 2- Emektar, tecrübe sahibi 3- Sonradan zapt edilip, yurda dahil edilen toprak
BAYRIN: Kadim, ezeli, eskiye dayalı
BAYSA: Madalya
BAYSAL:1- birl.Bay/Sal 2- Bolluk, rahatlık 3- Asayiş, sükunet
BAYSAN: Yakışıklı, levent, gösterişli
BAYSİN: Zengillik, kudret
BAYTAG: Bolluk, çokluk, kalabalık
BAYUK: Hazır, amade
BAYUR: Cesur, gözükara
BAYUTMUŞ: birl. Bay/Utmuş (yenmiş, muzaffer)
BAYÜLGEN: birl. Bay/Ülgen Şamanist gelenekte insanlar arası ilişkilerle ilgilenen “mükafat tanrısı”
BAYÜLKEN: (Bayülgen)
BAZ: 1- Emin, güvenilir 2- Merkeze bağlanmış, sonradan katılmış
BAZDA: Hoş, latif, çekici
BAZIR: Basar, baskıncı
BAZMAN: Tabi, bağlı, muti
BECERİ: (Beceriklik) Hüner, marifet, yeterlilik
BECET: Süs, makyaj, tezniyat
BEÇİRİK: Becerik, beceri, marifet
BEÇKAN: İpekten yapılmış sancak
BEDER: Ziynet, mücevher
BEDİZ: 1- Resim, heykel, nakış, bezek 2- Taşlara yontularak yapılan süsleme
BEDİZCİ: Ressam , heykeltıraş, nakışçı
BEDÜK: Büyük, iri, cesim, ulu
BEGEÇ: Beyliğe uygun olan
BEGEN: 1- Beğeni, hoşluk 2- Şehzade, prens
BEGENÇE: Şehzade, prens
BEGESİN: Doğruluk, sevap, hayr
BEGİ: 1- Yiğit, güçlü, 2- Eş- koca
BEGİSİ:1- Doğru, sevap 2- Beğenilen, imrenilen
BEGÜM: Hanımefendi, bayan, saygı duyulan hanım, eski Türkçe’de “beğ”’in tam olarak dişi karşılığı
BEĞ: Bey, varlık, erklik, güç, yöneticili toparlayıcılık, liderlik, soyluluk vb. anlamları içerir
BEĞCEĞİZ: Beycik, Küçük bey
BEĞÇE: Küçük bey
BEĞÇEK: Küçük bey
BEĞDAŞ: Akran,eş,denk
BEĞDE:1- Aziz, saygıdeğer 2- Adil, adaletli
BEĞDEŞ: Nazir,benzer
BEĞDİ: Aziz,muterem, saygıdeğer
BEĞDÜZ EMEN: birl. Beğdüz/Emen (ruh,can)
BEĞEÇ:1- Beğliğe layık 2- Beğ çocuğu, küçük bey BEĞENDİK: Beğenilen
BEĞENİ: Hoşa giden, beğenilen
BEĞENMİŞ: Hoşuna gitmiş
BEĞER: Beyoğlu, prens, şehzade
BEĞLEN: Bey soyundan olan
BEĞLİK: Beylik, beyliğe uygun olan
BEĞREK: Beyrek, bey çocuğu, küçük bey
BEK: 1- Bey, beğ 2- Pek, sıkı
BEKEM: Bey, beyim
BEKEN: Dayanıklı, metin
BEKET: Kuvvet, dayanıklılık
BEKİ: 1- Yiğit,güçlü 2- Eş, koca 3- Şaman, baş şaman
BEKİK: Güvenli, iyi korunan
BEKİM: Azimli, kararlılık
BEL: 1- Bilgi, bilim 2- Belirti,iz, damga 3- Tarlanın orta yeri 4- İki dağın arasındaki geçit
BELÇİN: Belirti, iz, damga
BELDEK: İz, işaret, emare
BELEK:1- Kılavuz, rehber 2- hediye, 3-Kundak bezi
BELEN:1- Bilen, alim 2- Geçit 3- Sırt, tepe, dağ yolu
BELET: Belge, delil
BELGE: Belge, doküman, delil
BELGİ:1- Belge 2- Bilgi 3- Fark, farklılık, ayırt, alamet
BELGİN: Belirgin, net, açık
BELGÜ:1- Belge 2- Sınır taşı, sınır toprağı 3- Yüzük taşı, nişane
BELİK:1- Doruk, zirve, şahika 2- Saç örgüsü
BELLEK: Hafıza
BENEK: 1- Armağan, hediye 2- Bakır para 3- İşlemeli kumaş
BENGİ: Bengü, mengü sonsuz, sonsuzluk, ebediyet, ebedi
BENGİLİK: Sonsuzluk
BENGÜ: Bengi, mengü
BENİCE: Sonsuzluk, sonsuzluğa giden
BENK: Muhkem, iyi korunan
BENLİ: Yüzünde ben olan
BERDİ: Verdi,Kutsal güçler tarafından yollanan
BEREGEN: Eli açık, cömert, verici
BERGE: 1- Vergi 2- Berke, kamçı, değnek
BERGİ: 1- Vergi 2- Eli açık, cömert
BERGİLİK: Doğal, tabi
BERİK: 1-Berk, sağlam, gürbüz, dayanıklı 2- Cömert, eli açık
BERİL: Verici, cömert, eli açık, fedakar
BERİN: Veren, cömert
BERİŞ: Veriş, hibe
BERK: 1- Katı, sıkı, sağlam, dayanıklı 2- Şiddet, şiddetlilik 3- Korunan, muhkem 4- Yıldırım
BERKANT: birl. Berk/Ant Altay dağları cıvarında bir başka dağın adı
BERKE:1- Kamçı, değnek 2- Dövme 3- Naz, işve
BERKEM: Düşmana karşı iyi korunan yer, müstahkem mevki
BERKİN: Güçlü, güçlendirilmiş
BERKİT: Güçlü, güçlendirilmiş, muhkem
BERKLİĞ: Berkli, güçlü, dayanıklı
BERKUK: Sert,cesur, dayanıklı
BERMEK: Vermek, veriş
BERŞE: Odun kömürü, kül
BESEN: Bezen,süs, makyaj, gösteriş
BETİK: (Bitiğ, bitik) Yazılı kağıt, mektup
BEYBUT: Barış, sulh
BEYGE: Bike, küçük hanım
BEYGU: Bir şahin türü
BEYLEM: Buket, demet, çiçek demeti
BEYLEN: Beyli, beye bağlı
BEYNEN: Beğenen
BEYREK: 1- Tim, müfreze 2- Merkez ordu, ordugah
BEYRU (Bayrı) 1- Ezeli, başlangıçsız 2- Emektar, tecrübeli
BEZEK: Süs, takı, piraye
BEZEN: Süs, makyaj
BEZENMİŞ: Süslü
BEZGİN: Bez…mekden. Sarsılmış, bıkmış
BIÇAK: Biçme aracı BIÇGIN: Kesen, biçen
BIÇKAS: Kağan ve Hanlara yapılan bağlılık andı
BIÇKI: Bıçak bileme aracı
BİBİ: Kibar, eğitimli, sayıdeğer hanım (Anadolu’da birçok bölgemizde “hala” anlamında da kullanılır)
BİÇEK: Bıçak, biçici
BİÇİK: Biçilmiş, biçimlenmiş
BİÇİM: Şekil, format, örnek, biçilmiş gibi
BİÇİN: 1- Biçilmiş,biçime girmiş 2- Ekin, tahıl 3- Biçen, doğrayan
BİGE: 1- Bakire, temiz kız 2- Bey kız saygıdeğer kız
BİGEM: Sevilen, el üstünde tutulan kız
BİGEN: Beğenilen
BİGENDİK: Beğenilen, ilgi duyulan
BİKE: Bige
BİKET: Beylik, beyliğe uygun
BİL: Bilgi, bilim
BİLDİK: Bilinen, tanınan, ünlü
BİLECEN: Bilgiç,çok bilmiş
BİLEDA: Balta
BİLGE: Bilgili, filozof, alim, bilgin, ulu kişi
BİLGEKAĞAN: Bilge/Kağan (Aslı, Türk Bilge Kağan’dır) Türk tarihinin, bir çok nedenlerle en önde gelen kişilerinden. Türk Milliyetçiliğini devlet siyasetine sokan, ona sosyal, ve siyasal bir kimlik vererek, devlet-millet bütünleşmesini sağlayan, milliyetçiliğe “zaman boyutu”nu kazandırıp, onu çağlar ötesine götürebilmeyi amaçlayan ve ilk defa “ Birleşik Türk Devletleri” fikrini ortaya çıkarıp bunu milli politika biçimine getiren,yönetimi döneminde sık sık kurultaylar toplayarak milletine “hesap veren” ve tüm bunları kardeşi Kül Tigin’in ölümünden sonra yazdırttığı “mengütaş’larda(Orkun anıtları) da bizzat anlatan ve son olarak da gerek Türk dili, gerek de edebiyatı ve içeriği açısından, dünyada bir eşi daha bulunmayan yazıları yazdırtan ulu kişi…İlteriş Kutluk Kağan’ın büyük oğlu, Kül Tigin’in ağabeyi.
BİLGE TAMGAÇU: birl. Bilge/Tamgacı T…Göktürkler ve Uygurlar döneminde yüksek dereceli memurlara verilen bir unvan
BİLGE TONYUKUK: birl. Bilge/Tonyukuk T…Göktürkler dönemi, ünlü, devlet adamı, siyaset bilimci ve tarihçisi…II Göktürk kağanlığının kuruluşunda önemli rolü olan, hem İlteriş Kutluğ Kağan’ın yakın yoldaşı ve başkanlığını, hem de Bilge Kağan’ın başbakanlığını yapan ve kendi adına da yazıtlara yazı yazdıran ulu kişi BİLGEN: Bilen, bilgin, alim
BİLGİN: Bilim adamı
BİLGÜ: Bilgi
BİLİG: Bilgiler, bilim, bilim dalı (orj)
BİLİK: Bilen, bilgili
BİLUN: Esir, tutsak, (gönül ve akıl esiri, aşık)
BİNİT: Binilecek nitelikteki, soylu at
BİRBEN: birl. Bir/Ben Ben mec. Kendini beğenmiş
BİRÇE: Biricik, yegane
BİRÇEK: 1- Biricik 2- Saçın ortadan ayrılıp yana dökülmüş hali
BİREBİN: Yegane, tek, biricik
BİRGE: 1- Beraber, birlikte 2- Biricik 3-Berke
BİRGEN: İçine kapanık, münzevi
BİRİCİK: Tek, yegane, bir tane
BİRİÇİM: birl. Bir/İçim mec. İmrenilecek güzellik ve çekicilik
BİRİDİN: Güneyli, güney bölgesinden
BİRKİT: Birleşik, birleşmiş
BİŞÜK: Nesil,soy-sop, kavim, kardeş
BİTERGE: Gerek, hacet, ihtiyaç
BİTEV: (Bidev) 1- Soylu, soylu at 2- El değmemiş bakir
BİTİG: Yazı, yazıt
BİTİGÇİ: Katip, yazıcı
BİTİGEN: Anıt, yazıt, yazılı taş
BİTİM: Gaye, hedef, ülkü
BİTKİ (Bütkü) yerden biten
BİYAN: (Bayan) (Buyan) Varlıklı, cömert ,Eski Tanrı sıfatlarından
BİYUM: Cömert, eli açık
BOD: Boy,uruk
BOGA: Boğa
BOĞ: Hediye, armağan
BOĞA: Boğa
BOĞACA: Boğa gibi güçlü BOĞACI: Boğa deviren
BOĞAÇUK: Küçük boğa, genç boğa
BOĞAR: Boğucu, güçlü, kuvvetli
BOĞARCIK: Güçlü, boğucu
BOĞTAG: Şapka, başlık, hanım başlığı
BOLCAL: Vade, müddet
BOLÇAK: Gürz, topuz
BOLDUÇAĞ: Uygun zaman, olan çağ
BOLGAN: 1- Soylu at 2-Keşşaf, mucit 3- Olgun, olmuş, ermiş
BOLGU (Bolgi): Orijinal, özgün
BONCUK: Mücevher, takı
BOR: Bora, fırtına
BORA: Fırtına
BORDAK: Semiz, şişman, balık etli
BORDU: Üzüm, asma
BORKA: Baraka,ev
BORLA: Burla, üzüm, üzüm salkımı
BOSUM: Endam, zerafet
BOSUT (Basat) anlayış, izan, hidayet
BOŞGUR: Eğitmen, öğretmen, talimci
BOŞGUT: Öğrenci, şakirt
BOY: 1- Uruk, uyruk, oymaklar birliği 2- Eda, endam
BOYDA(Ğ): Soyut, mücerred
BOYDAŞ: Aynı boyun mensubu
BOYLA: Unvan veren kişi
BOYLA BAĞA TARKAN: birl. Boyla/Bağa/Tarkan. Bilge Tonyukuk’un öteki adı BOYLAN: Adına ve soyuna layık
BOYLUĞ: 1- Soylu 2- Yakışıklı
BOYSAN: Yakışıklı, heybetli
BOZ:1- Sert, şiddetli2- Alaca renk,füme rengi3- Toprak rengi
BOZAN: Bozmak…dan düşmanı yenip dağıtan
BOZCA:1- Cesur, gözükara 2- Boz rengine kaçan
BOZCAK: Cesur
BOZÇİN: Dürüst, güvenilir
BOZDOĞAN: birl. Boz/Doğan Bir doğan türü
BOZKIR: Step, çöl, vaha
BOZKURT: birl. Boz/Kurt
ğuz Kağan destanında, Oğuz’a yol gösteren efsane kurt. Genel olarak Türk boylarının hemen tamamında, Türklerin karakteristik özelliklerini üzerinde taşıdığına inanılan “Milli sembol” pozisyonundaki hayvan (Önceleri “Gökbörü” olarak kullanılan bu ad, Selçuklular döneminden sonra, daha yaygın olarak “Bozkurt” olmuştur.)
BOZLAK: 1- Boz ve kül renginde olan 2- Otlak, mera
BÖBÜLÜK: Koca, gül
BÖÇKE:1- Canavar 2- Böcek
BÖDGE: Çağ, zaman
BÖG(Bök): Kısmet, nasip
BÖGÜ:1- Filozof, hikmet sahibi kişi 2- Büyü, sihir 3- Ejderha, canavar 4- Zehirli bir böcek
BÖGÜR: 1- Ordunun kanatlarından her biri, cenah 2-Kaburga ile kalça arasındaki bölge
BÖĞDÜN: Bürokrat, yüksek dereceli memur
BÖĞREK: Ordugah, merkez ordu, merkez ordunun savaş pozisyonu
BÖĞÜRMÜŞ: Şamatacı, gürültücü
BÖĞÜŞ: Zeka
BÖKEN: Ahu, ceylan
BÖKEVUL: Aşçı, iyi yemek yapan
BÖKLİ: Yakışıklı,Şık, iyi giyimli
BÖKLİCE: Şık giyimli
BÖLE: Pay, nasip, kısmet
BÖLEN: Bölüm, pay
BÖLEK: Hediye, armağan
BÖLÜK: 1- Kısım, ekip, bölüm 2- Pay, nasip
BÖLÜN: Yönetici, şef
BÖNGE: Tekme
BÖNGER: Tekmeleyici, iyi tekme atan
BÖRÇE: Zülüf
BÖRÇEK: Zülüf
BÖRİ: Kurt Göktürkler ve Uygurlar dönemlerinde Kağan muhafızlarına verilen genel bir ad.
BÖRİTEÇİNE (Börteçine) Benekli bozkurt
Ergenekon destanlarının çeşitli versiyonlarından birinde, Ergenekon’dan çıkışı gösteren dişi kurt,bir diğerinde ise bu addaki demirci ustası olarak geçer.
BÖRK: Başlık, tüylü hayvan derilerinden yapılan başlık
BÖRKLÜ(Ğ) Saygıdeğer
BÖRKLÜCE: Saygıdeğer, saygı gösterilen
BÖRTE: Benek
BÖRÜ: (Böri) Kurt
BUBİK: Konca,gül
BUCAK: 1-Gizli bölge 2- Uzak yer
BUCUGA: (Buğucu, ceylan avcısı)
BUDAK: Sert dal parçası mec. Güç, sertlik, dayanıklılığı sembolize eder.
BUDAN: (budun)
BUDAY: Buğday
BUDRAÇ: Gözü pek, cesur
BUDULGAN: Yürekli,cesur
BUDUN: Bütün, Ulu, millet “ Siyasi ve dini yapıları ne olursa olsun soy,dil, töre, kültür, tarihsel yapıları bir olup, psikolojik olarak birbirine bağlı insan topluluğu.Türkçe’de kullanılan millet ve ulus sözcükleri tam olarak bu anlamı içermektedir. Millet, din ortaklıklarını daha ön planda tutan bir anlam içerirken Ulus ise, daha çok boy ve uruk anlamlarını içerir.Buna rağmen yakın zamana kadar millet, son zamanlarda ise ulus sözcükleri dilimize yer etmiştir. Oysa gerek günlük dilimizde gerek yazı dilimizde bu sözcüğün bir an önce kullanıma girmesi gerekmektedir.”
BUDUNÇAR (Budunçu-Yir) Sözcüğünün tam anlamıyla” Ulusçu”, “milletçi” “Oğuz Töresi”’ni yeniden gündeme getirip, yürürlüğe koyan kişi
BUDUNÇİ: Buduncu, Ulusçu
BUDUNÇİYİR: birl. Buduncu/Yir,yer toprak
BUGA: Boğa
BUGAN: 1- Boğan 2- Alamet, işaret, iz
BUGATEG: Boğa gibi güçlü
BUGAY: 1-Afacan, ele avuca sığmayan 2- Buğu, ceylan
BUGU: 1- Buğu, ceylan 2- Böcek, örümcek 3- Canavar
BUGUR: Sürekli,devamlı, devamlılığı olan
BUGA: Boğa
BUĞRA: 1- Genç aygır 2- Genç erkek deve
BUĞU:1- Ceylan, 2- Yavru geyik 3- Buhar
BUĞUÇAN: Boğucu, boğaç
BUKA: Boğa
BUKAĞI: Kelepçe, atların ayağına takılan bir çeşit köstek
BURAK: Güçlü, yenilmez
BUKAN: (Mokan, Büken) Güçlü, yenilmez
BUKUK: Tomurcuk, filiz
BULAÇ: Bulucu, keşşaf, mucit
BULAGAN: 1- Olgun, kamil 2- Bulan, bulucu
BULAK: Göze, kaynak, pınar
BULAR: Bulur, mucit
BULASI: Ülkü, bulunması istenen
BULÇA: 1- Bolluk, ganimet, bereket 2- Bulucu, mucit
BULÇU: Bulucu, mucit
BULÇUM: Keşif, buluş
BULDAN: Bolluk, refah
BULDU: Önemli, değerli, az rastlanan
BULDUR: 1-İri su damlası 2- Gözyaşı
BULDAK: 1- Bulanık, karışık, karma 2- Kıyı, sahil
BULGAN: 1- Olgun,kamil 2- Bulucu, mucit
BULGANÇ: Karma, kırma, karışık
BULGAR: Karışık, bulanık, karışmış, içiçe girmiş
BULGAŞ: Karışıklık, karmaşa
BULMAZ: 1- olgunlaşmamış 2- Sakin, tembel
BULMUŞ: 1- Olgun, erdemli, oturaklı 2- Keşşaf, mucit
BULU: Anlayış, idrak, izan
BULUÇ: 1-Bulucu 2- anlayış, fehim
BULUG: 1- Keşif bölgesi, keşfedilen yer, bölge 2- Fidye, haraç
BULUGAN: Bulan, bulucu
BULUM: İrfan
BULUNG: Bulunulan yer, yön, taraf
BULUŞ: 1-Feraset, buluculuk 2- Manevi destek BULUŞGAN: Maharetli, becerikli
BUMİN: 1- Merkez ordu, çekirdek ordu 2- Puhu kuşu
BUN: Üzüntü, keder, bunalım, kendinden geçiş
BUNAK: Bunlu, üzüntülü, kendinden geçmiş
BUNALMIŞ: Üzgün, mahzun
BUNG: Bun, keder
BUNLUĞ: Bunlu, kederli
BUNSUZ: Mutlu, huzurlu
BURAN: Burmaktan…Burucu
BURCU: 1- Buruk, burucu 2- Güzel ve keskin koku 3- Biber
BURÇAK: 1- Nohutgillerden bir tahıl 2- İrmiklik buğday
BURÇİGEN: Böü/Tigin Moğol ağzındaki söylenişi (Türk ağızlarında Kuzey’e çıkıldıkça T ”ler Ç’ ye dönüşür. Çigin, Tigin, Çengiz Tengiz vb.) Çengiz Kagan’ın aile adı. Uygur kökenli olup, sonraları kuzeye göç ederek,Moğol oymaklarının arasına karışmış bir oymak
BURÇİN: Dişi geyik
BURÇUGİN: Özü sözü bir, güvenilir
BURÇUK: 1- Tahta veya keçeden yapılmış küçük heykel 2- Varlık, servet 3- Çiçek, gül
BURKA: Yüz örtüsü, fular (Tozdan ve fırtınadan korunmak için yüze takılan örtü)
BURKAN: 1- Totem, heykelcilik 2- Hüzün, iç burkuntusu
BURKE: 1-Burka 2- Berke, kamçı
BURLA(Hatun): Üzüm, üzüm salkımı
BURTA: 1- Benek, ben 2- Altın tozu
BURTAG: Burtak çakıllı, taşlı toprak
BURUK: Kırgın, alıngan, mahzun
BURUL: İçli, içten, samimi
BURUNÇUK: Burulmuş, buruşuk
BURUNDU: Atların terbiyesi için burunlarına takılan kıskaç
BURUNGU: Geçmiş, mazi, hatıra
BUŞKU:Telaş, heyecan
BUYAN: (Bayan, Muyan) 1- Kut, baht, mutluluk 2- Sevap,hayır 3- Dayanıklılık, mukavemet
BUYANDI: Kutlu, bahtı açık
BUYRA: Kıvırcık, kıvrılmış, bürülmüş
BUYRAÇ: Amir, buyuran
BUYRAT: Engebe, engel
BUYRUK: 1- Emir, buyruk, buyurma 2- Göktürkler döneminde vezir, (bakan) anlamına da
kullanılmıştır.
BUYURUK: Buyruk, emir
BUZAÇ: Bozucu, bozguna uğratan
BUZAN: Bozan, düşman birliğini dağıtan
BÜBÜLÜK: Gül, konca
BÜDENE: Bir bıldırcın türü
BÜGÜ : 1- Büyü, sihir 2- Felsefe 3- ejderha
BÜK: Kıyı, sahil
BÜKE: 1- Genç kız, küçük hanım (Bike) 2- Bükü, ejderha
BÜKE BADRAÇ: birl. Büke/Badraç Mitolojideki, yedi başlı ejderha
BÜKEÇ: Güçlü, bükücü
BÜKEY: Büken, bükücü, güçlü
BÜKİN: Hanımcık, küçük hanım
BÜKLÜM: Kıvrım, büküntü, saçak
BÜKÜ: Ejderha
BÜKÜŞ: Bükme eylemi, bükmek
BÜLEK: Bilek T…Kırgızların, Mürti oymağı beylerinden
BÜLTE: Demet, deste, top
BÜNGÜ: Tos atmak, kafa vurmak
BÜR: Gonca; gonca gül
BÜRÇE: Kurt yavrusu
BÜRÇEK: 1- Kurt yavrusu 2- Saç kıvrımı
BÜRGE: 1- Kellik 2- Bahşiş, hediye
BÜRKEV: Himaye,vesayet
BÜRKÜT: 1- Bahşiş, hediye 2-Bir kartal türü
BÜRÜM: Bürülmüş, katlanmış
BÜRÜNCÜK: İpekten yapılmış, şal, fular
BÜTE: 1- Fidan 2- Bütünlük
BÜVET: Baraj, set, su seti
BÜYÜ: Sihir, gizliyi bilme işi, bilgelik BÜYÜK: 1- Olgun, saygıdeğer 2- Bilge 3- Büyü, büyücü CABADAK: Hayret, şaşma
CABALAK: Yabalak, yaygın
CAĞIMDA: Yaratıcı, üretken
CAĞIMDI: Lütufkar, iltifat eden
CAĞLI: Namuslu, dürüst
CAKŞI: Yakşı, yakışıklı, güzel
CALMAN: Yalman
CAMAN: 1- Yaman, 2- Kam, büyücü
CAMANBAY: birl. Caman/Bay..Şamanist gelenekte, obanın büyücüsü,doktoru, kötü ruhları kovan kişi
CAMUGA (Camuka) Kızgın, asabi
CANİK: Tüccar, ticaret erbabı
CANKU: Meşveret
CARIP: Yakın, dost, çok yakın arkadaş
CARLIK: Yarlık, emir, ferman
CARTI: Şık, alımlı
CARUZ: Heyecan
CATUK: Halim, haluk
CAV: Gösteriş, afi, fiyaka
CAVANKUL: Uygurlar döneminde ordunun sol cenahını ve oradaki askerlerin tümüne verilen ad
CAVILDAK: Neşeli, şen şakrak
CAVLI: Gösterişli, cafcaflı
CAYMAZ: Cesur, kararlı
CAYNAK: Pençe, Doğan pençesi
CEBE: 1- Silah,ok, cephane 2- Zırh
CEBEN: Gayretli, çalışkan
CEBENOYAN: Cebe/Noyan
Çengiz Kagan’ın dünyaca ünlü komutanı ve yakın arkadaşı.(Çengiz’in bütün Türkleri bir bayrak altında toplama fikrinin mimarı bu ulu kişidir.)
CELASUN: (Çalasun) 1- Delikanlı 2- Cesur, savaşçı 3- Becerikli, eli tez.
CELAYIR: (Çalayır) 1- Bilgin, gün görmüş, tecrübeli 2- savaşçı
CELDEN: Yel, yel parçası
CELME: Çalım, fiyaka, gösteriş
CENGEL: Hafif, ince
CENGİZ: Çengiz, Tengiz, Deniz
CEREN: Ceylan, ahu, gazel
CERKİN: Hısım, yakın
CERKUDAY: birl. Yer/Kutay Eski dönem yer tanrısı
CETİK: Yetkin, uzman, olgun
CETİZ: Yetkin, becerikli
CEYRAN: Ceren
CIDA: Mızrak, kısa saplı mızrak
CIGI: Şamanist gelenekte ,iyi ruh. Boy ve oymakları kötülüklerden koruduğuna inanılan ruh
CILDUZ: Yıldız
CILIMGA: Kağan ve Han’ların mektuplarını yazmakla görevli kişi
CİBELİK: Sonsuz, sonsuzluk
CİCİ: (Cicik, cicek) 1- Çiçek, gül 2- Konuk 3- Sevim, sevimlilik
CİDAGU: Yetkin, yetenekli, becerikli
CİDE: İri, uzun bir ağaç türü
CİGA: Taç, gelin başı
CİĞİL: Hafif, yeğni, kolay
CİLMAYA: Türk mitolojisindeki efsanevi kanatlı at
CİNGİL: 1- Galip, utkan 2- Güvenilir,sadık
CİNGÜ: Zafer, utku
CİVİL: İyi ruh, temiz , arınmış ruh
COLAY: (Yolay) birl. Yol/Ay…Kazaklarda “ayağı uğurlu” kişiler için kullanılır.
COLDA: Yolcu, yola çıkan
CUCİ: 1- Cici, çiçi, cicik, çiçek, çuçu, çuçi 2- Konuk..Bu ad daha çok, beklenmeyen doğumlar sonrası
kullanılır ve bu yüzden “konuk” anlamını içerir
CULUM: Narin, nazik, hassas CUMUK: Yumuk, yumulmuş
CUPAR: Parfüm, güzel koku
ÇABA: Gayret, enerji
ÇABACI: Gayretli, enerjik
ÇABAK (Çaba)1-Çabuk,çevik 2- Küçük bir göl balığı türü
ÇABAR: 1- Çapar, davranır 2- Ulak, kurye, elçi
ÇABUK: (Çapuk) Çapan, çaba gösteren, çabalayan
ÇAÇA: 1- Savaş baltası 2- Gemici 3- Çiçi, çiçik
ÇAGAVUN: Bal arısı
ÇAĞ: 1- Zaman, vakit 2- devir, devran 3- su sesi, şırıltı
ÇAĞA: Yavru çocuk
ÇAĞAN: 1- Bayram, eğlence 2- Şimşek 3- gürz, çakan 4- Beyaza kaçan beyazımsı
ÇAĞANAK: Çalgı, enstrüman
ÇAĞAŞ: Kırlangıç
ÇAĞATAY: birl. Çağ/Atay
1-Çağının en ünlüsü 2- çağdaş, çağının ilerisinde
ÇAĞDAŞ: Çağın insanı, aynı çağda yaşayan kişiler
ÇAĞIL: 1- Su sesi 2- Çakıl taşı
ÇAĞILDAK: Çağlayan, şelale
ÇAĞILTI: 1- Su sesi, suyun taş ve kayalara çarparken çıkarttığı ses
ÇAĞIN: 1- Şimşek , çakın 2- Gürz, topuz
ÇAĞIR: Çağırı, çağrı
ÇAĞIRGAN: Çağıran, davetkar
ÇAĞLA: 1- Namuslu, dürüst 2- Erik türlerinden bir yemiş
ÇAĞLAK: 1- Namuslu, dürüst 2- Çağlayan, şelale
ÇAĞLAR: Şelale, çağlayan
ÇAĞLASUN: Dürüst
ÇAĞLAV: Dürüst
ÇAĞLAYAN: Şelale
ÇAĞLAYIK: Şelale
ÇAĞLI: 1- Dürüst 2- Yakışıklı, güzel
ÇAĞLIN: Meşhur ve liyakat sahibi
ÇAĞRI:1- Mesaj, davet 2- Doğan kuşu, doğanın bir çeşidi
ÇAĞRUK: Katı, sert
ÇAKA: 1- Savaş baltası 2- Çakı 3- Fiyaka, çalım, gösteriş
ÇAKALOZ: 1- Fener 2- İlkel bir top silahı (Top mermisi yerine çakıl taşı atan)
ÇAKAN: 1- Gürz,topuz 2- Şimşek
ÇAKAR: 1-Deniz feneri 2- gürz
ÇAKI: Kesici, yontucu küçük bıçak
ÇAKICI: 1- Çakma eyleminde bulunan 2- Çakı ustası
ÇAKIL: Çakıl taşı
ÇAKIN: 1- Şimşek 2- Kıvılcım
ÇAKIR:1- Doğan türü bir avcı kuş 2- Gürz 3- Şarap, içki
ÇAKIRCA: Doğan türü bir avcı kuş
ÇAKIRCI: Eskiden saraylarda, özel olarak doğan terbiyeciliği yapanlara verilen bir sıfat
ÇAKMAK:..Çak kökünden türeyen, vurmak, kesmek, bölmek eylemi için kullanılan bir sözcük
ÇAKMUR: Tutumlu, eli sıkı
ÇAKTU: İri yapılı, gösterişli
ÇAL: Kılıç darbesi, darbe, vuruş
ÇALAP: Ulu ruh, Kadiri mutlak (Eski dönem Tanrı sıfatlarından)
ÇALGAR: Çalıcı, vurucu
ÇALGIÇAY: Taştan yapılmış el değirmeni
ÇALIK:1- Silahşör, iyi kılıç kullanan 2- Çelik 3- Mesaj, haber 4- Haşarı, yaramaz
ÇALIM: 1- Gösteriş, fiyaka, kurum 2- Kılıcın keskin tarafı
ÇALIMLU: Gösterişli, çekici
ÇALIN: Çiğ, jale
ÇALIŞ: Azim, ceht
ÇALIŞGAN: Çalışkan, işgüzar
ÇALKARA: Doğan türü bir avcı kuş
ÇALKIN: Darbeci, hamleci, vurucu
ÇALMA: Maden üzerine yapılmış oyma, işleme ÇALMAN: Çalıcı, vurucu
ÇALUK: Çalık
ÇAM: Bir ağaç türü
ÇAMUR: Sazlık, bataklık
ÇANAYAZ: Berrak, billur
ÇANDAR: Karışık, karma
ÇANDIR: Karışık
ÇANGA: 1- Soylu 2- Pençe
ÇANGAL: 1- Çok sık ağaçlı bölge 2- Budaklı ağaç
ÇAPAN: 1- Ulak, haberci 2- Enerjik,- çalışkan 3- iş elbisesi, eski giysi
ÇAPAR: 1- Enerjik, çalışkan 2- Giysi 3- Saldırgan 4- ulak, haberci
ÇAPGIN: Enerjik, koşan, ardından giden
ÇAPGUR: Tufan, afet, deprem
ÇAPIN: Atak, hücum, savlet
ÇAPITGAN: Saldıran, saldırgan
ÇAPLAN: Bir şahin türü
ÇAPLI: Şahin türü bir avcı kuş
ÇAPTI: Koşan, seğirten
ÇAPTUĞ: Ünlü, çok tanınan
ÇAPUL: Çap…mak kökünden, vuran, saldıran, alıp götüren vb. eylemlerin tümü
ÇARDU: Cinli, perili
ÇARMAGUN: Görevli, görevlendirilmiş , emir almış
ÇAŞKA: Sabi,bebek, yavru
ÇAŞUT: Haberci, muhbir, ajan
ÇAT: Yansıma, yayılma, ün
ÇATAK: Çatal, çatallı, iki kollu değnek
ÇATAL: İki kollu, iki kola ayrılmış nesne
ÇATGAL: 1-Yüksek dağlık bölge 2- Çatal
ÇATIK: Çatılmış, tersleşmiş
ÇATLI(ğ): 1-Ünlü, tanınmış 2- Gözü kara, cesur
ÇATUK: Bıçak sapı yapılan bir ağaç türü
ÇAV: Ün, şöhret, yansıma, duyuru, bildiri
ÇAVA: Ünlü, tanınmış
ÇAVAŞ: Ünlü, tanınmış
ÇAVLAK: Çağlayan, şelale
ÇAVLAN: Çağlayan
ÇAVLI: 1- Ünlü,meşhur 2- Doğan yavrusu
ÇAVUDUR: İyi üne ve şöhrete sahip olan
ÇAVUNT: Ün, şöhret
ÇAVUŞ: Bilgi veren, bilgi götüren, bilgi dağıtan (Çav…kökünden)
ÇAVUT: Duvar, sütun
ÇAY: Dere, ırmak
ÇAYAN: 1- Dövülmemiş, dökme demir 2- İşlenmemiş ham demir
ÇAYLAK: Kuyruğu uzun ve çatallı bir avcı kuş
ÇAYLAN: 1-Dere kenarı 2- Çağlayan
ÇEBER: 1- Usta, mahir 2- Hoş, latif
ÇEBİ : (Çepi,çepni) 1- Sert bakışlı 2- Usta eli yatkın, yetenekli 3- Cebe, çebe, silah
ÇEKEN: Cazip, cazibe, çekicilik
ÇEKİM: Cazibe, çekicilik
ÇEKİMLÜ: Çekimli, cazibeli
ÇEKLİ: Armağan, hediye, düğün hediyesi
ÇEKMERGEN: Nişancı, iyi vuruş yapan, silahşör
ÇELEK: Bülbül, güzel öten bir kuş
ÇELEN: 1- Becerikli, çalışkan 2- Fettan, yanıltıcı
ÇELİK: (Çelük,çuluk) Gücü arttırılmış sert demir
ÇELİKTEN: Çelik parçası
ÇELİM: Beden, endam, gösteriş
ÇELME: 1- Çalma 2- Başa örtülen bez (Bandana)
ÇENGİN: Gösterişli, dikkat çekici
ÇENGİZ: Deniz
ÇENGŞİ: Mucize, olağanüstülük
ÇEPEN: Hatip, iyi konuşan, güzel söz söyleyen
ÇERÇİ: Ulak, haber, bildiri ulaştıran kişi
ÇERİ(Ğ): Asker, savaşçı, toplanarak bir araya gelmiş erat
ÇEVEN: Çevre, muhit
ÇEVGEN: Cirit, değnek
ÇEVRİ: Çeviri,girdap, anafor ÇEVRİM: 1- Girdap, anafor 2- Çevre, muhit
ÇIDAM: Dayanıklılık, metanet
ÇIDAMLI: Metin, dayanıklı
ÇIDIK: Güç, dayanıklılık
ÇIGAY (Çığay): 1- Fakir, varlıksız 2- Kurt yüzlü, kurt bakışlı
ÇIĞ:1- su damlası, kırağı 2- kar yığını, kar topu
ÇIĞAL: Omuz, omuz başı
ÇIĞIN: Çıkın, bohça
ÇIĞIR: 1- Çağ, devir 2- çığın açtığı yol 3- Dar yol, patika
ÇIĞLA: Saf, halis
ÇIĞLAN: Saf, halis
ÇIĞRI: 1- felek 2- melodi
ÇIKAN: 1- kaynak, kaynarca 2- yeğen, hala çocuğu
ÇIKMAK: 1- çıkma eylemi 2- Kaynak 3- çakmak
ÇILDIM: Seri- hızlı, enerjik
ÇIMRIN: Aktif, faal
ÇIN: (çin, çine) sağlam, dayanıklı, güvenilir
ÇINAK: 1- sevap, hayr 2- güvenilir,sadık
ÇINDAN: sandal ağacı
ÇINGAY: Özü, sözü bir, sözüne güvenilir
ÇINGILIÇ: birl. Çın(sağlam, dayanıklı) Kılıç
ÇINGIR:1- Kopuza benzeyen bir saz 2- Çıngırak
ÇINTAY: Soylu, güvenilir
ÇIRAY: Yüz, eda, çehre
ÇIRGANIŞ: Zevk, haz, tat
ÇITIRKI: Işık, nur, ziya
ÇİBEK: Atmaca türü bir avcı kuş
ÇİÇEK: 1- Gül, gül çiçeği 2- Cici, cicik
ÇİÇİKAĞAN: birl. Çiçi/Kağan Hun Kaganı (Ulusçuluğu, devlet siyasetine sokan ve bunun savaşını veren kişi)
ÇİGAN: Yoksul, fakir
ÇİGEN: Gayretli
ÇİGENDİK: Gayretli, çalışkan
ÇİGER: 1- Gayret,azim 2- Çökertiş,çökertme
ÇİGERMİŞ: Çökertmiş, düşmanı bozguna uğratmış
ÇİGİL: Olgun,gelişmiş, olmuş
ÇİGİLVAR: Kısa ve küçük ok, özel ok
ÇİĞDEM: Yaban çiçeği, (Itır çiçeğinin Türkçesi)
ÇİL: Dağ tavuğu
ÇİLDE: Kış mevsiminin en soğuk dönemi
ÇİLDU: Hızlı, seri, çabuk
ÇİLEN: 1- Çığ 2- Jale 3- Bir dağ çiçeği
ÇİLENTİ: Çığ, jale
ÇİMÇİK: Saf, masum
ÇİNE: (Çin) 1- Sadık, güvenilir 2- Öz, soy 3- Kurt, kurt yavrusu
ÇİNKAY: Sözüne güvenilir, özü sözü bir
ÇİPLİ: Narin, ince yapılı
ÇİRAY: Yüz, çehre, eda
ÇİT: Çizgi, sınır, limit
ÇİTER: birl. Çit/Er (sınır muhafızı)
ÇİZGEN: Saban izi, karasabanın tarlada açtığı yol
ÇİZİM: Resim figürü
ÇOBAN: 1- Elinde cop (değnek, sopa) olan 2- Muhtar, oba beyi
ÇOBAR: Değnekli, değnek taşıyan
ÇOBAYIKMIŞ: Gönül kırıcı, haşin
ÇOGA: Vahşi hayvan
ÇOGAY: Yoğun, kesif
ÇOĞAŞ: 1- Debdebe, şaşa 2- Vahşi hayvan yavrusu
ÇOKAN: 1- Gürz, topuz 2- Hayvan yavrusu
ÇOKU: 1- Debdebe, şaşa 2- Bolluk, bereket
ÇOLAK (Çalak) Silahşör, iyi kılıç çalan
ÇOLBANAK: 1- Uzak görüşlü 2- Törenin dışında kalan 3- Nikahsız ilişkiden doğan çocuk (Hakas Türklerinde)
ÇOLDU: 1- Bahşiş, mükafat 2- Ganimet
ÇOLPAN: 1-Kuzey yıldızı 2- Uzak görüşlü 3- Tanıdık, bildik, aşina
ÇOMAK: 1- İri ve yuvarlak değnek 2- Bir ucunda topuz bulunan sopa, silah 3- İnanmış, inançlı
ÇONGAR: Gürültü, şamata, nara ÇOPUR: Geyik ve karaca yavrusu
ÇORA: (çura, çur) 1- Yer tanrısı 2- Cin, peri 3- Ruh
ÇORAMAN: Cinli, perili
ÇORLU: Cinli kötü ruhların etkisinde kalan kişi. Bu ad Şamanist gelenekten gelen bir ad dır.Eskiden bunalımlı ve toplum tarafından hoş karşılanmayan kişiler için bu ad verilirdi ve bu kişiler Kam ve Baksılar tarafından tedavi edilmeye çalışılırdı)
ÇOTAK: Kabza, kılıç kabzası
ÇOTUR: Kabza, kılıç kabzası
ÇÖKERMİŞ: Çökertmiş, düşmanı bozmuş
ÇÖKLÜ: Soylu, asil
ÇÖKÜL: Irmakların taşarak vadilere bıraktığı tortu
ÇÖMÇE: Ağaçtan oyulmuş su kabı
ÇÖZELİ: Kıpçak, merkezden uzakta olan
ÇÖZELTİ: Ayrılış, kopuş, firak
ÇUBAN: Çoban, muhtar, obabaşı
ÇUÇU: Şair, şairane konuşan
ÇUĞA: (çuka) 1- Yürekli, cesur 2- Arınmış, duru 3- narin
ÇUĞAY: Narin ve alımlı kız
ÇULÇU: Serçe, Turgay kuşu
ÇULUK: 1-Çelik 2- çalık, kılıç çalan 3- aceleci, heyecanlı
ÇURAN: Ruhlarla ilgilenen
ÇUTUR: Kılıç kabzası
ÇUVAŞ: 1-Sakin, rahat 2- dindar, dünyaya değer vermez
ÇÜCEN: Akıllı, aklını kullanan
ÇÜNÜK: Çınar ağacı
DADAK:Değme, dokunma, tatma
DADAL: Tat alan, sezen, farkına varan
DAĞ: (Tağ,tağ,tak,tav) Dağ…mec. genişlik, büyüklük, ululuk,heybet
DAĞAÇA: Dağ gibi heybetli
DAKAK: Ucu ataşli ok
DAL: 1-Ayrı, bölünmüş 2- saldırı, büyüme, yayılma 3- batma, çıkma 4- yalınlık, çıplaklık
DALAN: koridor, dehliz
DALAŞ: Döğüş, karşılıklı saldırı
DALAY: (Talay) Genişlik, ululuk, sonsuzluk mecaz eden, asıl anlamı , büyük deniz, okyanus
DALBAY: 1- Vasi, ardına sığınılan kişi 2- Çuhadan yapılmış şapka Kırgızlarda- 3- avcı kuşları yakalamak için, tuzaklara bağlanarak bırakılan küçük kuş
DALBOY: Vasi, ardına sığınılan kişi
DALKILIÇ: birl. Dal/Kılıç mec. Zırhsız ve korunmasız
DALKIRAN: Kırıcı, ayırıcı
DAMLA: Su damlası , tane
DANA: İnek yavrusu, iki yaşındaki genç inek
DANİŞMAN: Müşavir, bilgi ve tecrübesine danışılan kişi
DANSIK: (Tansık) Olağanüstü, fevkalade
DARGA: Vali, üst düzey, bürokrat
DARGUN: Alıngan, kırılan, narin
DARI : 1- Bir tahıl türü 2- sıkı, sıkıntı, zorluk
DARICA: 1- Darı gibi, darı niteliğinde mec. Bereketli 2- sıkı, sıkıcı, zorlu
DARSIK: Öfkeli, hiddetli
DARUKA : (Darga) Vali, yönetici, bürokrat
DARULGAN: alıngan, nazlı
DAŞKI: Taşkı, taşmış, dışarı çıkmış, dışarıda olan
DAYAK: Değnek, baston, dayanılan nesne
DAYANÇ: 1- Dayanak, destek, güven 2- Dayanma gücü tahammül
DAYANGAN: Dayanıklı, metin
DAYANGI: Köşe minderi
DAYAR: Hazır, hazırlıklı
DEBRET: Kımıldayış, devinim
DAĞER: Kıymet, para, nafız
DEĞERBİLİR: birl. Değer/Bilir Kadirşinas, vefalı
DEĞERLÜ: Değerli, kıymetli
DEĞİRMİ: Çevreli, yuvarlak, toparlak DEĞNEK: Dayanak, dayanılacak nesne
DELİ: Usu gitmiş, azmış, dellenen, mec.gözü kara, yiğit
DEMİR: Demir madeni
DEMİRAĞ: Zırh, örgülü göğüslük birl. Demir/Ağ
DEMİRDEN: Demir parçası
DEMİRDÖĞEN: birl. Demir/Döğen mec. Acı kuvvet sahibi
DEMİRGEN: 1- Demir, ham demir 2- temren, okun ucundaki demir parçası
DEMİRHAN: birl. Demir/Han
Şamanist gelenekte “ Maden Tanrısı”
DENERİ. Dikkat, itina
DENGİZİK: Denizcik, küçük deniz, göl
DENİZ: Deniz, büyük göl
DENLİ: Edepli, terbiyeli
DEPEGEN: Tekmeleyen, iyi tekme atan
DEPREM: Zelzele, sarsılma, kımıldama
DERİN: Derinlik…den mec. Olgunluk, bilgelik
DERMEK: Dirilik, canlılık, bir arada tutmak
DERNEK: Eğlence, toy, birliktelik
DEVİN: Hareket, kımıldanış, davranış
DEVRİM: Devirme, yıkma, devirip yerine geçme,..ihtilal
DEYİM: Söyleniş, darbımesel
DEYİŞ: Söyleyiş, şiirsel anlatım, ozan dili
DIVRAK: Yakışıklı, alımlı, civan
DİBEK: 1- Ağaçtan oyulmuş büyük havan 2- Yayık ağaç
DİK: 1-Yükseklik, yükseliş 2- kararlılık, yıkılmazlık, caymazlık 3- inat
DİKEÇ: Sütun, dikil, dikilmiş
DİKMEN: İnatçı, kararlı
DİLEK: Dil ile istenen, dile getirilen istek, arzu, murat, dilek
DİLER: Dileyen, dileyici
DİLİM: kesik, bölüm, bölünmüş, biçimlenmiş
DİNÇ: Zinde, sağlam, dirençli
DİNLER: Terbiyeli, munis, muti
DİP. Baht, talih
DİPÇİN: 1- Bahtı açık 2- Sağlam, dayanıklı
DİREK: 1- Dirilik, sağlamlık, ayakta kalmak 2- Temel, dayanak 3- Vezir,bakan
DİREN: Direnç, karşı koyuş, dirilik
DİRENÇ: Direnme gücü
DİRENGEÇ: Destek, dayanak
DİRGEN: 1-Dirilik,2- harmanda kullanılan demir çatal
DİRİ: (diri, dirik, Tiri, tirik) Can, ruh, canlılık, canlı
DİRİL: Can, ruh, tin
DİRİM: Yaşam, sağlık, canlılık
DİRLİG: Yaşam, hayat
DİRSE: Derse, söylerse, konuşkan
DİZİK: (dizi) Kolye, takı
DİZLEK: Hazır cevap, konuşkan
DODURGA: 1- Dolgun, doyumlu 2- doyuran, doyurucu 3- açık, net, berrak
DOĞA: 1- Tabiat,doğallık, ortaya çıkış 2- Huy, yaradılış, fıtrat
DOĞAN: 1- Soylu bir av kuşu 2- Doğmuş, olmuş, ortaya çıkan
DOĞRU: Dürüst, yalansız, sözüne güvenilen
DOĞRUL: 1-Doğruluk, dürüstlük 2- Ayakta duran, dirençli
DOĞU: Güneşin doğuş yönü
DOĞUÇ: Doğuş,doğma, ortaya çıkış
DOĞUDAN: Doğulu, doğu yönünden gelen
DOĞUŞ: Doğma, ortaya çıkış
DOKUNAK: Dokunuş, değiş, mec. Ağır, mahsun,yürek sızlatan, yüreğe dokunan
DOKUNÇ: Dokunak, hüzün
DOKUZ: Dokuz sayısı, Türklerin en çok eskilerden beri uğurlu sayılarındandır
DOKUZ ARKA: Dokuz/Arka (…Eski dönemlerde soyluluk gösterme ve belli etmesi açısından, bir kişinin babasından itibaren geriye doğru dokuz atasının sayılıp açıklanması..)
DOLANDI: Dolanan, gezgin
DOLU: 1-Bilgin, tecrübeli, öğretmen 2- Bütün, tam, eksiksiz 3, Şamanist gelenekte ve Alevi - Bektaşi gelenekte, içki, şarap 4- kısa süren, iri taneli yağmur
DOLUN: Tam, bütün, eksiksiz Yakut Türklerinin eski bereket Tanrılarından
DOLUNAY: Ayın on dördü, ayın en güzel hali DOMANİÇ: 1-Dumanlı bölge 2- Tümsek, engebeli arazi
DONAT: Giyim, kuşam, zenginlik, cömertlik
DOMURCUK: Gül, tomurcuk
DONATMIŞ: Giydirip, kuşatmış, sevindirmiş, cömertlik göstermiş
DONATUR: Cömert, eli açık, bağışlayıcı
DONSUZ: Çıplak, fakir, varlıksız
DORA: Doruk, zirve, şahika
DORAN: (Duran) Diri, canlı, yaşayan
DORU: 1- Doruk, zirve 2- Kara ile kızıl arası renk (At rengi)
DORUK: Zirve, uç, şahika
DOYMADUK: Doyumsuz, sevilmeye doymayan, doyulmayan
DOYUM: 1- Doymak, tatmin 2- Ganimet, bereket
DOYURAN: mec. Cömert, hayr sahibi, iyilik sever
DÖĞEN: 1- Dövüşçü,döven 2- Ekin saplarını ezmeye yarayan, altında çakmaktaşı bulunan geniş tahta
DÖĞER: 1- Döver 2- değer, kıymet 3- Kalın, enli bir ağaç
DÖĞERLİ: Değerli
DÖĞÜŞ: Dövüş, savaş, kavga
DÖĞÜŞGEN: Kavgacı, savaşçı
DÖKÜMHAN: birl. Böküm/Han 1- Dökmekten döküm 2- Düğüm, bağ
DÖLEK: 1- Çok döl veren 2- Koyunun kuzuladığı yer 3- İtibarlı, saygıdeğer, maharetli
DÖLEN: Muti, sevgi gösteren
DÖNDER: (Döne, döndü gibi “dönmek” fiilinden türetilmiş, çocukları ölen ailelerin, yeni
çocukları olduğunda kullandıkları adlardan)
DÖNDÜ: Dönüş yapan (Reenkarnasyon) çocukları ölen ailelerin verdiği adlardan
DÖNGEL: Saat
DÖNGÜ: Dönüşüm, başa dönüş
DÖNGÜN: Dargın, gönlü kırık
DÖNMEZ: Kararlı, cesur, azimli
DULAK: Dolu, olgun, tecrübeli
DUMAN: 1- Sis, kırağı 2- ateşten çıkan gaz
DUMLU: 1- dumanlı, sisli bölge 2- Soğuk ve ayaz alan yer
DUMRUL : 1- Okun sivri ucu 2- Başı dumanlı, efkarlı
DURA: (Durak) 1- yaşam, hayat 2- Sağlamlık, dayanıklılık, kalıcılık 3- ev, yaşanılan yer, barınak (Bu ad, çocukları ölmüş ailelerin yeni çocukları olduğunda yaşamda kalıp uzun yaşaması ve sağlıklı olması dileğini içeren adlardandır ve çok eskilere dayanan bir gelenekle bu gün de sürdürülmektedir.Durak, Dursun, Durmuş, Durdu, Yaşar, Tokta, Tok, Toka, Toktamış, Turan vb. adlar da hep aynı psikoloji ve geleneğin ürünüdür.
DURAK: (Dura) Yaşam, hayat
DURAN: (Turan) Durucu, kalıcı, yaşayan, canlı
DURCU: Durucu, kalıcı canlı
DURDU: 1- Duran, kalıcı, canlı, yaşayan 2- Yaşam, hayat
DURGAÇ: Durak, durulan, yaşanılan yer
DURGUN: 1- Durulmuş, süzülmüş, arınmış 2- Sakin, sükuna ermiş, kendi halinde
DURMUŞ: 1- Duran, yaşayan, canlı 2- Yaşam, hayat
DURSUN: Durması, yaşaması istenen
DURU: 1- saf, sade, berrak 2- Duran, durgun
DURUK: Duru, durucu
DURUL: 1- Sükun bulmak, huzura kavuşmak 2- Günahsızlık, arınmışlık
DURULCA: Masum, günahsız
DURULMAZ: Afacan, yaramaz
DURULMUŞ: Tatminkar, sakin
DURUM: Yaşam, hayat, süreğenlik, duruş
DUVA: (Düve)
DUVAK: Örtül kapanmış, gelin başı
DUVAN: (Doğan)
DUYAN: Duyucu, hissedici
DUYAR: Duyarlı, hisli, duygulu
DUYARI: Duyarlılık, hislilik
DUYGU: His, duyum
DUYUŞ: Duyum, hissediş, duyarlılık
DUYUŞAN: Duyan, hisseden
DÜĞÜN: (Töğün, Toygün) Toy günü, yemekli eğlence
DÜŞ: Rüya, aniden ortaya çıkış
DÜŞELGE: Pay, hisse
DÜŞERGE: Miras, pay
DÜŞÜNGÜ: Düşünerek üzülme, kafaya takma, üzülme, teessür
DÜVE:1- Genç inek, dananın büyüğü 2- Döven, dövüşçüDÜVECİ: Dövücü, dövüşçü
DÜVEHAN: birl. Düve/Han
DÜVEN: (Döven)
DÜYECİ: Dövüşçü, döğüşçü
DÜZ: (Tüz) 1- Doğru, doğruluk, gerçek 2- Soy, kök, döl 3- Kural,kaide
DÜZE: Düzen, uslup, tarz
DÜZEN: Kural, kurallar bütünü
DÜZGE: Süs, makyaj
DÜZGÜN: 1- Düzülü, düzenli, muntazam 2- Gidişat, teamül
EBİN:(Evin) Tane, öz
EBİNÇ: Refah, huzur
EBİRİ: Erim, erdem, fazilet
EBREK: Dayanıklı, sebatkar
EBREN: 1- Evren, kainat 2- Felek, talih
EBRET: Ayrılım, ihtilaf
EBRÜK: Dayanıklı, sebatkar
ECE: (Eçe)
ECEVİT: 1- Çalışkan ,, aktif 2- haşarı, yaramaz
EÇE: 1- Dahi, çok akıllı, çok zeki 2- Saygıdeğer, görgülü hanım
EÇİNE: Doğru sözlü, sözüne güvenilir
EDE: (Edi, Ata) Atalık, hatırı sayılan, sözü dinlenen kişi
EDERKON: birl. Ede/Kon (Konmaktan can, ruh)
EDGÜ: 1- İyi, güzel, hoş 2- Adil, adaletli 3- Eğitmen, öğretmen
EDGÜDİ: 1- Eğitici, öğretici 2- İyi, ala
EDİ: Eda, ata, saygıdeğer ulu kişi
EDİGE: 1- İyi, iyi kalpli 2- öğretmen
EDİK: Kısa konçlu çizme
EDİL: (İdil,etil, atil) iyilik, güzellik
EDİZ: 1- Kıymet, kıymetli 2- Yüksek, Yükselmiş
EGE: (Eke,Öke)1- Dahi, çok akıllı 2- Egemen, sahip 3- Bakıcı, eğitici
EGEMEN: 1- Hakim, sahip, kendinden başkasını dinlemeyen, buyrukçu 2- bilge kişi, dahi 3- ağa, ağabey
EGİT: Göz değmesi ve nazara karşı göz kenarlarına sürülen bir ot
EĞBER: Eğri, eğrilmiş
EĞİLMEZ: Gururlu, mağrur, dik başlı
EĞİN: Eğirilmiş
EĞİR: 1- Sarış, çeviriş, kuşatma 2- bükme, kıvırma
EĞNEZ: Narin, zayıf, ince
EĞREK: Sık, bol
EĞRİ: Eğik, bükük mec. Saygılı, alçak gönüllü
EĞRİM: Pınar, göze, küçük çağlayan
EKE:1- Dahi, çok akıllı 2- Sahip, egemen 3- bakıcı, eğitici
EKEÇ: Cana yakın ve çekici kız
EKELİK: Deha, kıymet
EKİM: 1- Ekin ekme eylemi 2- Yarım, ziraat
EKİN: 1- Mahsul, tarla ürünü 2- tarlaya ekilip olması beklenen her türlü bitki
EKİNCİ: 1-İkinci (erkek, ya da kız) 2- Rençber, çiftçi
EKSÜK: Azlık, yokluk, yoksulluk
EKŞİ: Eksi,eksik, azlık, yokluk
EL: 1- İl, Ülke, Memleket 2- İlgi, bağlantı 3- Barış, Sukunet 4- Kolun, bilekten aşağısı
ELA: (Ala) Renkli alacalı
ELBAN: (İlban) Devletçi, devletine bağlı, sadık
ELBİR: birl. El/Bir mec. Elbirliği, işbirliği, imece
ELCEK: 1- Ekin biçme aracı 2- Munis, sessiz
ELÇİK: Eldiven
ELÇİ: 1- Devletine bağlı, devletçi 2- Devleti adına aracılık eden, haberci, temsilci
ELÇİM: Demet, tutam
ELÇİN: 1- Demet, bağ, buket 2- Ekin biçerken kullanılan bir alet 3- Devlet görevlisi, devletine bağlı
ELDEK: 1- basiret, kabiliyet, eylem gücü 2- Yedek, elde bulunan
ELDEM: 1-Alışkın, yetişkin 2- Sevimli, cana yakın 3- evcil koyun
ELDÜZ: birl. El/Düz Yurtsever ELEZ: (Eliz)Arı,duru, temiz, munis, uyumlu Yakut destanlarında bekaret tanrıçası (Ulu Tuyun’un kızı)
ELGAY: Yurtsever
ELGİN: 1- Konuk, öncelik verilen kişi 2- Gurbetçi, yurdundan uzak
ELGÖRMÜŞ: Gezgin, seyyah
ELGÜN: Halk, avam, halktan kişi
ELİBOL: Cömert, eli açık, sahi
ELİK: Usta, eli yatkın
ELİŞ: Usta, maharetli
ELİTAŞ: Cimri, eli sıkı
ELİTEZ: Becerikli
ELKATMIŞ: birl. El/Katmış Ülke fethetmiş, algan
ELKİN: 1- konuk 2- Yolcu
ELÖVER: Yurtsever
ELTUTAR: birl. 1- El/Tutar mec. Yardımsever, hayırşinas 2- Fatih, Algan
ELVEREN: Olgunlaşan, yeterlilik kazanan
EMÇİ: Doktor,eczacı
EMEÇ: Amaç, gaye
EMEK: 1- Gayret, cehd, zahmet 2- Güç, enerji
EMEN: 1-Can, ruh, hayat 2- Ağaç dikmek için açılan çukur 3- meşe ağacı
EMET: Sınır, mesafe
EMGEK: Emek, zahmet, güçlük
EMLEK: Duygulu, merhametli
EMRE: (İmre) Düşkün, aşık, hayallerle yaşayan
EN: (Yen)1- Derinlik, genişlik 2- Av 3-Kıyı 4- Arka
ENÇU: Sükun,huzur,ruh derinliği
ENDEŞ: Eşit, müsavi
ENEÇ: Meyil, meyilli
ENİK: (enük, enek)Genişçe, yayık
ENGİN: 1- Genişlik, derinlik, yayıklık 2- ufuk, ufuk çizgisi
ENİCUK: Hısım, kavim- kardeş
ENİŞ: (Enuş) 1- İniş, yokuşun karşılığı mec. Rahata ve huzura erme 2- Uçlarda, ekstrem
ENKİŞ: Tecrübeli, deneyimli, olgun
ER: 1- Olgun,olmuş, ergin, yetişkin erkek 2- Asker, çeri
ERÇE: birl. Er/Çe…Erkeğe yakışır biçimde
ERÇİN: Ülkenin idari bölümlerinden her biri (İl, ilçe, kasaba vb.)
ERDEM: ( Ertem) Fazilet, bilgelik, yücelik, hünerlilik
ERDEMÇİ: Erdem sahibi
ERDEMLÜ: Erdem sahibi
ERDEN: Er parçası, erden olma
ERDİN: Ermiş, olgun
EREK: Erişilmek istenen, ülkü, hedef
EREKLİ: (Ereğli) Ereği olan
EREM: Müjde, iyi haber
EREN: 1- Olgun, 2- Hür, bağımsız 3- Din ile bütünleşmiş
ERENTÜZ: birl. Eren/Düz T…Tuva ve Çuvaş Türklerinde, “Terazi Yıldızı”
EREZ: 1- Erişilen, mutlu olunan 2- Cesur, gözü kara, dayanıklı
ERGEN: Olgun, deneyimli
ERGENE: 1- Güçlülük, egemenlik 2- Maden dağı 3- Dağlar arasındaki geçit
ERGENEKON: 1- Maden dağı 2- Dağlar arasındaki yurt
ERGİ: Eriş, olgunluk, deneyim
ERGİL: 1- Bilgili, deneyimli, yetişkin 2- Savaşçı, cengaver
ERGİN: 1- Ermiş, olgun, irfan sahibi 2- Savaşçı, cengaver
ERGUN: 1- Yumuşak huylu kişi 2- Hızlı koşan at 3- Argun
ERİK: Ermiş, olgun, bilge, filozof, becerikli
ERİKEN: Ermiş, olgun, bilge
ERİM: 1- Müjde, iyi haber 2- Felsefe, derin bilgi 3- Vade, zaman
ERİNCİK: Mahçup, utangaç
ERİNÇ: 1- Olacak, olması gereken, kaçınılmaz sonuç 2- Nimet, bolluk
ERİŞ: Gaye, erişilmesi istenen
ERİŞEK: Ülkü, gaye
ERİŞEN: Ulaşan, vasıl olan
ERİŞKİN: Olgun, kamil, ermiş
ERK: 1- Güç, kudret 2- İktidar, erklik, hükümranlık 3- Bağımsızlık,egemenlik
ERKE: 1- Egemen, güç 2- İşve, naz, cilve 3- Çekicilik, çekiciliği kullanma istek ve yeteneği Türk mitolojisinde, Ülgen’in dokuz kızından biri ve namus tanrıçası
ERKELİ: Egemen
ERKEM: Nazlım, işvelim, edalım
ERKİ: 1- Güçlü, egemen, erke 2- Atik, çevik
ERKİN: 1- Bağımsız, otorite tanımaz 2- Başına bıuruk, kendi bildiğini okuyan 3- Sürekli, süreklilik
ERKİNDİK: Erkinlik, bağımsızlık, hürriyet
ERKLİG: Egemen, kuvvetli, şevkatli
ERKMEN: 1- Bağımsız, başına buyruk 2- Bekar, evlenmemiş
ERLİK HAN: birl. Erlik/Han Şamanist gelenekte ve Türk mitolojisinde “Cezalandırma Tanrısı”. Yer altından sorumlu Tanrı.
ERMAN: 1- Erdemli, güç, mert 2- Kutsal, mukaddes
ERMİŞ: Olgun, müdrik
ERNEK: Küçük parmak, serçe parmağı
ERSE: Ermesi, olgunlaşması istenen
ERSİN: 1- Uzun ömürlülük dileği 2- Olgunluk, bilgelik dileği
ERSÜ: Fazla, çok fazlalık
ERTE: 1- Seher, şafak 2- Yarın, gelecek, sonraki, halef
ERTEGİ: Destan, lejant
ERTEN: Tan, şafak
ERTİK: Meslek, sanat
ERTİM: Olgun, erişkin, bilge
ERTİN: 1- Mahsun, hüzünlü 2- Kendine yeten
ERTİNGÜ: 1- Olağanüstü, fevkalade 2- Efsane, mit
ERZENE: Doruk, zirve, en üst
ERZİ: Veli, vasi, yönetici
ERZİK: 1- Asıl, ana, temel 2- Soylu ve yiğit
ESBOL: birl. Es/Bol …Çok zeki, çok akıllı (Usu-bol)
ESE: 1- Mutluluk, sağlık 2- Yel, esinti
ESELİK: Selam, selamet
ESEN: 1- Sağlık, selamet 2- Yel, yumuşak yel
ESENLÜ: Esenli, sağlıklı
ESER: Esinti, yel
ESİ: Yel, esinti
ESİM: Esinti
ESİN: 1- Esinti, yel 2- soluk, sağlık, nefes 3- İlham
ESİNTİ: Yel, hafif yel
ESİRGEN: 1- Arkadaş, dost, yaren 2- korunan, yakınlık duyulan
ESİRGENÇ: Nazlı, nazenin
ESİRKİŞ: Merhamet, acıma duygusu
ESKİN: Yel, yel alan
ESLEK: 1- Yumuşak başlı, uysal 2- Selam, selamet
ESNEK: Uzayan, genişleyen, esen
ESRİGÜN: birl. Esri/Gün…fırtına
ESRİK: Mecnun, kendinden geçmiş
ESRİMİŞ: Kendinden geçmiş
ESTELİK: Yadigar, hatıra
ESTİ: Yel, esinti
EŞİM: Çalışkan, becerikli
EŞİNGEN: 1- Çalışkan 2- Eşit, müsavi
EŞİTGEN: İşitken, işiten, dikkatli
EŞKİN: 1- Hızlı, atik 2- Dayanıklı, metin 3- Rüzgarlı bölge, rüzgar alan bölge
EŞLİK: Dost, yaren, refik
ETGÜ: 1- İyi, iyilik 2- Etki, şiddet
ETİGE: Öğretmen, mürebbiye
ETİL: İtil- idil
ETİNGÜ: Olağanüstü, fevkalade
ETİZ: Yüksek, ulu
EVCİL: Evine bağlı, evcimen
EVCİM: 1- Evcimen, evcil 2- İşgüzar, hamarat
EVCİMEN: Evine bağlı
EVCİMİK: Ekonomist, muktesit
EVDEŞ: Hanım, erkeğin eşi
EVGİ: İvedi, acele
EVGİN: 1- Aceleci, telaşlı 2- Evcil, evine bağlı
EVİN: Cevher, öz, nüve
EVİRGEN: 1- Tedbir, tedbirli 2- Dönüşüm, çevirim
EVREN: 1- Kainat 2- Ejderha, canavar 3- Baht, talih
EVRENSEL: Evreni kaplayan, evreni içine alan EYGİ: İyi, salih, temiz
EYGİŞ: İyi kişi, iyi insan
EYGÜ: İyi, iyice
EYİN: Vücut
EYİNÇ: Refah, mutluluk
EYLEM: 1- İş, iş görme, çalışma 2- Etkileyici davranış 3- Durdurma, önünü kesme
EYLETMEZ: Amansız, aman vermez
EYLETÜR: İyilik sahibi, cömert
EYLİK: İyilik, yardım, iane
EYMEN : 1- Alçak gönüllü, mütevazı 2- Yardımsever, hayırşinas
EYMÜR: (Eymir) İyilik sahibi, hayırşinas
EYTEMİŞ: Güzel konuşan, tatlı dilli, hatip
EYÜGE: İyi,iyice
EZDİ: Ezen, ezici, baskıcı
EZGİ: 1- İyi, iyilik, 2- Uyum, ahenk 3- Acı, üzüntü 4- Name, hoş sada
EZGİN: Ezik, ezilmiş, acı çekmiş, mahzun
EZİLGEN: Mazlum, zulüm görmüş
EZİM: 1- Belirti, iz 2- Zorunluluk, mecburiyet
EZİNÇ: 1- Belirti, iz 2- Ezginlik, mahzunluk
GALI:Kalın, Hediye, bağış, çehiz
GALIN: Hediye, çehiz
GAMAĞ: Bütünlük, bütün, tüm
GARA: Kara
GARACU: Sivil, resmi olmayan
GARGILI: Kargılı, mızraklı
GASPAK: Süslü, müzeyyen
GAYIR: (Kayır) 1- Taraf, destek, kayırma 2- Lütuf, ihsan, hediye
GAYURMUŞ: Kayırmış
GAZAN: (Kazan) 1- Kazanma, kazanç, üstünlük 2- Kızgın, kızgınlı celallenmek
GEÇE: Geçmiş, mazi, geçen
GEÇEK: Geçit, köprü
GEÇER: Geçeli, caiz
GEÇGEL: Makbul, nafız
GEÇGİL: Geçerli, makbul
GEÇGİN: Geçmiş, kendinden geçmiş, feda etmiş
GEÇİM: 1- Yaşam, dirlik 2- Anlaşma, uyuşma 3- rısk, yiyecek, nafaka
GEÇİMLÜ: Munis, yumuşak huylu
GEÇİMLÜK: Geçinmek için gerekli olan
GEDEK: 1- Görev, vazife 2- Oyuk, kırılıp, yıkılarak açılan yol
GEDİZ: Su birikintisi, gölet
GEGEZ: Mümkün, uyumlu
GEĞİN: Set, şiddetli
GELBERİ: Ocaklardan,ateş çekmek için kullanılan ucu eğri demir çubuk
GELDEÇ: Gelecek, ati, istikbal
GELEK: (Gelik) halef, sonraki
GELGEÇ: Geçici, kalıcı olmayan
GELGEL: Çekim, cazibe
GELDİ: Gelecek, istikbal
GELİN: Gelen, dışarıdan içeriye gelen
GELİNCİK: Kır çiçeği
GELİK: Halef, sonraki
GELİKLİ: Halef
GENCE: (Gençek, genç) Taze, yavru, genişleyen, gelişen
GENEŞ: Müşavere, meşveret
GENGŞİ: Cengşi, mucize
GENİŞ: Yaygın, enli, engin
GENSU: birl. Gen/Su Deniz, büyük göl
GER: 1- Söz verme, ant içme, bağlama, anlaşma, birleşme 2- Vahşi hayvan yavrusu 3- Dev, devasa
GERAY: birl. Ger/Ay Uygun, münasip, layık
GERAYHAN: birl. Geray/Han Kırım hanlığının kurucusu ve ilk hanı. Daha sonra gelen hanlar bu adı, birer unvan olarak kullanmışlardır.
GEREZ: Dilber
GERGÖZ: 1- Zabit, zabıta 2- Geyik gözü
GERİM: 1- Yön, cihet 2- Hicap, utangaçlık
GEYİK: (Geyük) Yabani, vahşi, yabancıl
GEZ: 1- Nişan, işaret 2- Giz, sır
GEZGİN: Seyyah
GEZGİNSU: birl. Gezgin/Su …Irmak
GEZLER: Nişancı, iyi atıcı
GIYIN: Gamze, çukur
GİCİK: Taze, hoş, sevimli
GİDİK: Uç, kenar, sınır, limit
GİRAY: Uygun, layık
GİRGİN: Girişken, müteşebbis, cana yakın
GİRİK: Girişken, müteşebbis
GİRİŞKEN: Girgin
GILAV: Teşvik, destek
GILIG: (Kılık) Huy, yaradılış, tabiat
GIRGIÇ: Çalışkan, aktif, faal
GİRÇEK: 1- Gerçek, hakikat 2- Bağlı, sadakatli
GİRTİNE: İman, inanç
GİZ: Sır, Gizlilik
GİZEM: Sır, esrar
GİZLENÇ: Hazine, define
GONÇA: Bahşiş, hediye
GORAL: Kısmet, nasip
GİCİK: Minyon, sevimli
GÖCEK: Taze, hoş, güzel
GÖÇELGE: Konup göçülen yer
GÖÇER: Göçmen
GÖÇMEN: Muhacır
GÖÇÜNCÜ: (Göçküncü) Geçici, fani
GÖĞEN: Gök rengi, maviye çalan, mavileşmiş
GÖĞKUTLUĞ: birl. Gök/Kutlu
GÖĞNÜK: 1- Yanmış, kavrulmuş 2- Mavi, maviye kaçan
GÖK: 1- Tanrı, Tanrıdan..Tanrısal, kutsal 2- Mavi ,Gök rengi 3- Yer üstü, gökyüzü 4- Ezel-ebet, başsızlık ve sonsuzluk 5- Güzellik, göz alıcılık, üstünlük
GÖKBEN: 1- Tanrıdan gelen, gök parçası 2- Masmavi
GÖKBÖRİ: birl. Gök/Böri Tanrısal kurt..(Bozkurt)
GÖKBÖRİ: birl. Gök/Böri (..Bazı kaynaklarda “Bozkurt” olarak da geçer.)
GÖKÇE: Güzel, zarif, çekici, gözalıcı
GÖKÇEK: Gökçe, çekici, güzel
GÖKÇEL: Mavimsi, maviye çalan
GÖKÇELİ: Güzel, Yakışıklı
GÖKÇEN: Gökçe, güzel, alımlı, dilber
GÖKÇİL: 1- Gökten gelen, göksel 2- Mavi, maviye çalan
GÖKÇİN: Mavi
GÖKLEN: Ulu, mübarek
GÖKMEN: Tanrısal, Tanrıdan gelen
GÖKTÜRK: birl. Gök/Türk Tanrıdan kut almış. Kutsanmış Türk…(Tanrısal Türk, Tanrı tarafından gökte yaratılıp, yeryüzüne yollanan Türk)
GÖL: Göl, deniz mec. Ululuk, geniş gönüllülük
GÖLEĞEZ: birl. Göl kenarında yetişen bir su çiçeği
GÖLET: Küçük göl, gölcük, yapay göl
GÖMEÇ: Kuyuda (Toprak fırında pişirilen ekmek)
GÖMEK: Kömek, yardım, inayet
GÖMÜÇ: Hazine, define, mücevher
GÖNDEM: İtaatkar, muti, sadık
GÖNDER: Mızrak, direk
GÖNE: Onur, iftihar
GÖNEN: 1- Feyz 2- Onur, iftihar 3- Bolluk, bereket
GÖNENÇ: Açık, talih, mutluluk, iftihar
GÖNÜL: 1- Can, ruh, duygu merkezi 2- Kalb, vücudun kan pompası
GÖNÜLDAŞ: Gönül birlikteliği, aynı inanç, duygu ve düşünceleri paylaşıp savunan bireylerin her biri
GÖRCEĞİZ: Ufuk çizgisi GÖRÇEK: Ufuk, ufuk çizgisi
GÖRÇÜM: Geçici, fani
GÖREGEN: Görgülü, görüp geçirmiş, deneyimli
GÖREK: Görüntü, peyzaj, manzara
GÖREZ: Meltem, hafif yel
GÖRGÜ: Terbiye, muaşeret
GÖRGÜÇ: Dürbün
GÖRGÜLÜ: Terbiyeli
GÖRGÜN: Görgülü, deneyimli
GÖRK: İhtişam, olağanüstü güzellik ve çekicilik, ihtişam, debdebe
GÖRKEM: İhtişam, debdebe, heybet, olağanüstülük
GÖRKEN: Hürmetli, Hürmete layık
GÖRKLÜCE: İhtişamlı, heybetli, yakışıklı, güzel
GÖRKLÜĞ: Çok güzel, çekici, ihtişamlı
GÖRÜMCÜK: Görülmesi, ilgilenilmesi gerekli olan
GÖRÜK: Gözetleyici, casus
GÖRÜN: Görüntü, Açıklık, netlik
GÖRÜNDÜK: Aşikar, gizlisiz, saklısız
GÖVEL: Gök rengini almış, göğe ermiş
GÖVERİ: Yeşermiş, gururlu
GÖVEZ: Mağrur, gururlu
GÖY: Taze, genç
GÖYMEN: Yanık, yanık tenli
GÖYNÜK: Yanık, kavrulmuş
GÖZ KAMAN: birl. Göz/Kaman Gözde, seçkin, göz kamaştırıcı
GÖZAL: Göz alıcı, farklı, seçkin, el üstünde
GÖZBAY: birl. Göz/Bay Sihirbaz
GÖZBAYCI: Sihirbaz, illüzyonist
GÖZDE: Beğenilen, göze girmiş, el üstünde tutulan, emsallerinden daha üstte bulunan
GÖZE: (Gözek, Köze) Kaynak suyu, menbaa
GÖZEBE: Tahmin, beklenti
GÖZEGER: Çekici, cazibeli
GÖZEGÜ: Gözde, çekici
GÖZEĞEN: Ufuk, ufuk çizgisi
GÖZEĞİR: birl. Göz/Eğir Çekici, cazip, göze hoş gelen
GÖZEK: Göze
GÖZEN: Cazibeli, çekici, göze hoş gelen
GÖZERİ: Dürbün
GÖZGEÇ: Ayna
GÖZGÖR: Ayna
GÖZGÜ: Ayna
GUNA: Kına
GONCUK: (Göncük) Kısa gün, kış günü
GUR: (Gür,Kür) 1- Şiddet, kızgınlık, öfke 2- Ateş, ateşlilik
GURSAÇTI: birl. Gur/Saçtı (Kızgın, celalli, hiddet ve öfke saçan)
GUVA: Geyik
GUYUK: Canavar, ejderha, vahşi ve yırtıcı hayvan
GUYULDAR: Uyumlu, ahenkli, geçimli
GUZ: 1- Güzel, çekici, yakışıklı 2- Oğuz
GÜCENİR: Alıngan, mahçup
GÜCENMİŞ: Alıngan
GÜÇ: (Güçü, küç, küçlük) Enerji, kuvvet
GÜÇEYÜ: Çok güçlü, yenilmez
GÜÇLÜK: Güç, zorluk, meşakkat
GÜDEK: Güdülenme, motivasyon
GÜDER: Murat, emel, beklenti
GÜDÜL: 1- Saç üzerinde pişirilmiş mısır ekmeği 2- Kısa, kalın 3- Gözü pek
GÜDÜR: Hayal, kurgu
GÜLEÇ: Güler yüzlü, mütebessim
GÜLEGEN: Güler yüzlü, mütebessim
GÜLEK: 1- Handan, mütebessim 2- Gölcük, küçük göl
GÜLEN: Mutlu, mütebessim
GÜLER: Mütebessim, güler yüzlü mec. Talihi açık
GÜLESİN: Mutlu, sıkıntısız, tasasız olma dileği
GÜLGÜN: Gülen, mütebessim
GÜLSÜN: Mutlu, sıkıntısız olma dileği
GÜLÜK: Gülen, mütebessim GÜLÜMSER: Mütebessim, sevimli
GÜMÜL: Demet, buket, deste
GÜMÜŞ: Gümüş madeni
GÜN: Güneş, gündüz, afitap
GÜNANA: birl. Gün/Ana Sogay Türklerinde eski dönem, güneş tanrıçası
GÜNÇE: Güneşlik, şemsiye
GÜNÇEK: Güneşlik
GÜNÇÜ: 1- Güneşe benzeyen, güneş gibi 2- Güneşi seven
GÜNDAŞ: Gün/Daş ..Aynı güneşi paylaşan, gün ortağı
GÜNDEM: Ağır başlı, mülayim
GÜNDEN: El üstünde tutulan, revaçta..
GÜNDER: birl. Gün/Der (..Derlemekten..)
GÜNDÖNDÜ: birl. Gün/Döndü bir çiçek türü
GÜNDÜ: Gündüz, gün ortası
GÜNDÜZ: Gün içi, gün ortası, güneşli gün
GÜNEŞ: Güneş
GÜNEY: (Küney) Güneşe bakan, güneş gören
GÜNGEN: Takvim, vakit
GÜNGÖR: birl. Gün/Gör “mec. Bahtı açık olsun, mutlu olsun”
GÜNGÖRMÜŞ: birl. Gün/Görmüş “mec. Deneyimli, dolu yaşamış
GÜNLÜK: Güneşlik, şemsiye
GÜNTÜLÜ: birl. Gün/Tülü (…Gündüz düşü)
GÜNÜÇ: Nafaka, günlük
GÜNYELİ: birl. Gün/Yeli ..doğudan gelen yel, doğu rüzgarı
GÜR: (Kür) 1- Sağlam, sıkı 2- Sık, yoğun 3- Yiğit, korkusuz
GÜRBOĞA: (Kürboğa) birl. Gür/Boğa Türkistan’ın Araplarca işgal edildiği dönemlerde, özellikle o sıralarda Genel vali olan, “ İbni-kuteybe” adlı çapulcuya karşı, kahramanca direnen ve her defasında Yeni direnişler örgütleyerek, Türkleri işgallere karşı uyanık ve diri tutmaya çalışan bir Türk beyi
GÜRBÜZ: Sağlıklı, kuvvetli, dayanıklı
GÜRE: Güç, enerji
GÜRELİ: 1- Enerjik, çalışkan 2- Haz, doyum
GÜRGEN: Bir ağaç türü
GÜRÜZ: (Gürz) Topuz
GÜVEN: İtimat
GÜVENÇ: Güvence, garanti
GÜYÜK: Canavar, vahşi hayvan
GÜZ: Sonbahar
GÜZEL: (Gözel) Yakşı, alımlı, çekici, göze hoş gelen
GÜZEY: 1- Taze, körpe, yeni 2-Destek, fırsat 3- Sonbahar 4- Kuzey yönü
GÜZİN: (Güzün) Güz vakti, güz vaktinde doğan
GÜZLEK: Güz döneminde kalınan yer
HAN:1- Devlet başkanı 2- Kağana bağlı, özerk devlet başkanı 3- beylik başkanı, yönetici
HANIM: 1- Han’ın dişisi 2- Soylu kadın 3- Han’ın evdeşi (Hatun) 4- Türk töresinde, kadınlara olan saygıyı ifade eden genel bir sıfat
HANLI: Yurttaş, Bir Han’a bağlı kişi, Bağımsız bir devletin mensubu
HATUN: (Katun) 1- Kağan’ın evdeşi, kraliçe 2- Saygı duyulan, görgülü hanım Türkçe’deki, kadın sözcüğü buradan gelir.
HOMAR: (Humar) Yakışıklı, çekici, güzel, süslü, fiyakalı
HUN: (Kul) Koyun, koyunlu
HUŞ: Bir çam ağacı türü
IDAÇU: Muhafız, koruma
IDUĞ: (Iduk) Kutsal, tanrısal
IĞAÇ: 1- Ağaç, ağaçlıklı bölge 2- Fersah
IĞAR: Kıymetli, ağır
IĞDIR: 1- İyi, hoş, hoşluk 2- Yetkin, ehil
IĞIRCIK: Fecir
ILAÇIN: Laçin, şahin kuşu
ILANKU: 1- Kıvrak, atletik 2- Ulu, Ululanmış, yüce
ILDIR: 1- Ürküt, ürkütücü 2- Berk, sert
ILDIRIM: Yıldırım, berk
ILDUZ: Yıldız, necm
ILGAR: 1- Gayret, cehd 2- Atın, dört nala gitmesi hali
ILGAT: Kapalı, müphem, belirsiz
ILGIM: Serap
ILGIN: Hoş kokulu bir bitki
ILGIT: Ilık, tatlı, sakince, yumuşakça
ILICA: 1- Ilımlı, ılık, ılıkça 2- Yunak, hamam
ILIK: Soğukla sıcak arası
ILIMAN: 1- Ilık, ılık hava 2- Uyumlu, sakin, mutedil
ILKI: 1- At yavrusu 2- At sürüsü
ILKICI: At çobanı
IMIRGI: Taze, körpe
IMRAĞ: (Imrak, İmre, Emre) Aşık, şayeste, geçkin
INAÇ: Yar, canan
INAK: 1- Han ve Kağanlara yakın olan kişi “Hasbey” 2- Gamsız 3- Canan, yar
IRAZ: (Irıs, uraz) 1- Baht, talih, mutluluk 2- Cesaret, gözü pek olma
IRGA: Talihli, şans, şanslı
IRIM: 1- Büyü, efsun 2- İçinden su akan toprak, arazi
IRLAYU: Irlayan, yırlayan, akarak uzaklaşan, ırmak
IRMAK: Akarsu
ISIK: (Issıg-Issık) Isı, sıcaklık, hararet
ISIYEL: birl. Isı/Yel…meltem
ISRIK: Okşayıcı, sarıcı, ısıtıcı
ISSIK: Isık, ısı
ISSIZ: Soğuk, tenha, cansız, kimsesiz
ISTIK: Sıcak, ılıman
IŞBARA: 1- Çalışkan, hamarat 2- birl. Isı/Bora
IŞIK: Aydınlık, nur
IŞIL: Yarul, nur, ziya, ışık parıltısı
IŞILTI: Işık parçası
IŞIN: Güneş parıltısı, ışık parıltısı, yansısı
IYIŞ: Armağan, hediye, ihsan
İBAR: Parfüm, koku, misk
İÇ: 1- Öz, görünmeyen yan, bir nesnenin öz yapısı 2- İçerde kalan kısım, iç kısım
İÇBUYRUK: birl. İç/Buyruk
Saraylardaki iç hizmetle görevli kişi
İÇEN: (İçin) İçli, duygusal
İÇER: İçeride, kapalı, mahfuz
İÇERGE: (İçergu) İçten, samimi
İÇGE: İçeri, içerde, dahili
İÇGELİK: birl. İç/Gelik ..İçten gelen, doğal davranış, samimiyet
İÇGER: İçe alan, içe bağlayan, tabi kılan
İÇGİN: İçli, içten, samimi
İÇİGEN: 1- İç geçiren, içli 2- Sabırsız, aceleci
İÇİK: 1- İçli, duygulu 2- İçerde, dahilde, devlete tabi İÇİM: 1- Duygu, hassasiyet 2- Yudum, yudumluk
İÇİNGİR: İçli, hassas
İÇİT: İçilecek nitelikte, içimi güzel
İÇKUR: Savaş meydanı
İÇLEK: İçli, narin, hassas
İÇLİ(K): Duygulu, hassas
İÇTEN: Samimi,açık, dürüst
İÇTENLÜK: Samimiyet
İDE: (Ede, İdi) Ululuk, nüfuz, kudret
İDEGE: Ulu, nüfuz sahibi, edici, yapıcı
İDEGER: Eder, yapar
İDEKLİ: Yapıcı, edici, güçlü
İDER: 1- İzci, takipçi 2- Yapan, yapıcı, edici
İDGÜ: 1- İyi, güzel 2- Tanrısal, mübarek
İDİ: (İdik) 1- Tanrı, rab, sahip, efendi 2- Tanrısal, Tanrıdan gelen, mübarek, kutlu
İDİKUT: birl. İdi/Kut…Kut sahibi, Tanrıdan gelen, Tanrıya yakın, Tanrıya benzer, Tanrı tarafından görevlendirilmiş vb. anlamları içeren ve Uygur kağanlarının büyük çoğunluğunun kullandığı bir unvan İDUK: İdi, Tanrısal, mübarek
İGAN: Yıkan, yıkıcı, deviren
İGİT: 1- Yiğit 2- Bakıcı, eğitici
İĞDİ: (İğdir) Yetkin, ehil, iyice
İĞREK: Saf, temiz, duru, arı
İĞSEN: Kayıtsız, ilgisiz
İĞSİZ: Salim, selametli
İKİNÇ: İkinci
İKİZER: İkizlerden her biri, benzer
İKŞİT: Yürekli, bagatur
İL: 1- Doğuş, oluş, oluşum 2- Bitişme, bütünleşme, doku 3- Devlet 4- Yurt, yer, konak, memleket,diyar 5- Halk, ahali, insan topluluğu 6- Barış, sulh
İLAÇAN: birl. İl/Açan ..İl almış, fatih, algan
İLAÇİN: Laçin, şahin
İLBAY: birl. İl/Bay .. Vali, bakan, beylerbeyi
İLBEY: birl. İl/Bey Eski dönemde asker toplayıp, onların eğitim ve lojistiğini sağlayan kişilere verilen bir unvan
İLBİ: Büyü, sihir
İLBİLGE: birl. İl/Bilge ( Devlet yönetiminde bulunmuş ve devlet tecrübesi olan)
İLBİLİG: 1- Devlet bilgisi ve deneyimi 2- Devlet arşivi
İLBİLMİŞ: birl. İl/Bilmiş Yurtsever, yurduna bağlı
İLÇİ: Devlete hizmet eden, devletin hizmetinde olan
İLÇİN: Devlet görevlisi, devlete iş gören
İLDAŞ: Yurttaş, hemşehri
İLDEM: Pişman, nadim
İLER: Oluşum, bitişim
İLEY: Civar, etraf
İLGEN: Kanıt, delil, ispat
İLGERÜ: 1- İleri, ileride 2- Doğu, doğudan 3- Bolluk, refah
İLGEZDİ: birl. İl/Gezdi, Gezgin, seyyah
İLGEZER: birl. İl/Gezer, Gezgin
İLGİ: Bağlantı, bitişim, alaka, özen
İLGİK: Barışsever, barışçı
İLGİNÇ: İlgi çeken, ilgi duyulan,enteresan, sıra dışı
İLGİR: Barışçı, barışsever
İLGÖRMÜŞ: birl. İl/Görmüş, Gezgin
İLGÜ: Amaç, hedef
İLGÜY: Nazlı, nazenin
İLHAN: birl. İl/Han…Bölge Hanı, Kağanlığa bağlı özerk han
İLİDİ: Yarar, fayda
İLİG(ğ): 1- Ünlü, tanınmış, meşhur 2- İlk, birinci, başlangıç, ortaya çıkış
İLİK: İlk, birinci, önce
İLİNGİ: Devletine bağlı, devletinin hizmetçisi
İLİŞ: Bitişik, yakın
İLK: Başlangıç, doğuş, çıkış, öncelik
İLKE: (Ülke) Kurucu, yapıştırıcı, oluşturucu..(Günümüz Türkçe’sinde,”prensip, düstur” anlamında)
İLKİ: ilk, ilkin, birinci
İLKİN: Birinci, öncelikli
İLKUŞ: birl. İl/Kuş Kartal türü bir avcı kuş İLLİ: Bağımsız, özgür, devleti olan
İLMEN: Devletç devletine sadık
İLSİRET: birl. İl/Siret ..Düşmanın devletini yıkıp, esir eden, devletsiz bırakan
İLTEMİŞ: birl. İl/Demiş ..Yurtsever
İLTER: Yurt koruyucusu, yurduna sahip çıkan, yurtsever, yurdunu toparlayan
İLTERİM: birl. İl/Terim
İLTERİŞ: birl. İl/Teriş, Yurdunu ve budunu derleyip, toparlayan, bir aya getiren ve yücelten
İLTÖRE: birl. İl/Töre, ..Devlet geleneği
İLTUTMUŞ: birl. İl/Tutmuş, Algan, fatih
İLUN: 1- Ulu,yüce 2- Soylu 3- Genç, cıvan
İLYIĞDI: birl. İl/Yığdı, Algan, fatih
İME: Em, çare, derman
İMEÇE: Birliktelik, emek ortaklığı
İMEN: 1- Emen, can, ruh 2- Kayın ağacı
İMER: Hayırsever, iyilik sahibi
İMGE: 1- İyi, yararlı 2- İz, belirti 3- Tasavvur, zihinsel sembol
İMİŞÇİ TUNGATAR: birl. İmişçi/Tunga/Tar..Kaplanlarla dövüşen cesur kişi
İMRAG (imrağ-İmrak): Aşık, derviş, dost
İMRE (Emre-İmrağ): 1- Ağabey,ağa 2- Beylerbeyi 3- Aşık, derviş, dost
İMREN: İmrenmekten…imrenilen, iç geçirten
İNAK: 1- Kardeş, kardeş çocuğu 2- Han ve beylerin en güvenilir adamı ve yardımcısı
İNAL: 1- Soylu, Kağan yada Hanların ana tarafından akraba 2- Anası Kağan yada Han soyundan olup babası kara budundan, halktan olan kişi 3- Avrupa’daki, kont, baron vb. unvanların Türkçe’deki karşılığı 4- Emin ve güvenilir kişi
İNALÇIK: Küçük İnal 1- Uygur kağanlığı dönemi bey ve komutanlarından 2- Haverezmler devleti bey ve
İNAN: İman, inanç 2- Kural, akide 3- Emniyet, güvenlik
İNANGU: İnanılan, güvenilen, mutemet
İNANIR: İmanlı, inançlı
İNCE: Hafif, yeğni, nazik
İNCESEN: Huzur ve güvenlik, sükunet
İNCİ: (Yinçi, yinçgü) 1- işve, naz,eda 2- Sessizlik, ıssızlık 3- İstiridye türü deniz kabuklusundan çıkan tane, takı
İNÇGÜ: İnce, narin
İNER: İnmek…den mec. Alçak gönüllü, mütevazı
İNERBAŞ: birl. İner/Baş mec. Alçak gönüllü
İNİ: Kardeş, karındaş,kayın birader
İNİSİ: Küçük erkek kardeşi
İPAR: Parfüm, misk
İPEK: (Yipek) İpek böceğinin ipeği (İp…kökünden)
İRÇİ: 1- Yırcı, halk ozanı 2- İr.ik, iricik 3- Yirçi, yerci, toprak sahibi
İRÇİK: 1- İricik 2- Er, küçük er
İREN: 1- Sert, katı2- Araç, vasıta 3- Ürek, yürek
İRENÇİN: 1- Bağımsız, başına buyruk 2- Güçlü, dayanıklı
İRGE: 1- Yırlama, söyleme, okuma 2- Ergin, olgun
İRGİN: (İrge) Uygurlar ve Karluklar dönemi memuriyet unvanlarından
İRİK: Sert, katı, iri
İRİM: Müjde, iyi haber
İRİS: 1- Kurtuluş, hürriyet 2- Iras, ıraz
Türk mitolojisindeki tanrıça adlarından “kötü ruhları kovup, tamuya gönderen tanrıça”
İRKİL: 1- Ululuk, heybet, cesaret 2- Aksakal,kam, baksı
İRKİN: Olgun, bilge, ulu
İRKİT: Ürküt, ürkütücü, heybetli
İRKLİ: 1- Güçlü, muktedir 2- Yüksek dereceli memur
İRNEK: (Emek) Serçe parmak
İRŞİ: Peri, peri kızı
İRTEGÜN: birl. Erte/Gün Sabah
İRTEM: 1- Erdem, fazilet 2- Marifet, hüner
İRTİŞ: Hüner, hünerlilik
İRTÜK: Değer, kıymet
İSEN: 1- Esen, yel, rüzgar 2- Doğa, tabiat 3- Açık, net, sahih
İSTEK: İsteyiş, arzu
İSTEM: İrade, dileme erki
İSTEMİ: İstem, irade, dileme ve buyurma erki
İŞBARA: (iş, devinme, davranma) Bara /Var, varlık) birl. İş/Bara
İŞÇEN: İşgüzar, hamarat
İŞGÜN: (İçgün) Kızıl yapraklı bir yayla çiçeği İŞİM: (İçim) İçtenlik, samimiyet
İŞİTGEN: İşitici, dinleyici,öğüt dinleyen
İŞLEK: 1- İdmanlı, eğitimli 2- İşgüzar, çalışkan
İTBARAK: birl. İt/Barak (Barık, baraka) Türk mitolojisinde adı geçen köpek
İTGÜÇİ: İteleyen, itici, yapıcı, destekçi
İTİK: Yetik, yetkin, uzman
İTİMGEN: İteleyen, itici, destekçi
İTMAÇ: Alet, edevat, takım
İTMİŞ: (Etmiş) Yapıcı, uzman, uzmanlaşmış
İVECEN: Aceleci, telaşlı
İVGİN: (Evgin) Ateşli, sabırsız, telaşlı
İYBA: Utangaç
İYE: Güç, kudret, erklik, sahip olma
İYEUZA: birl. İye/Uza, Güçlü, egemen ve uzman
İYİ: İyi, yararlı ve uğurlu
İYİK: 1- İyi, uğurlu 2- Heves
İYİM: 1- Güzellik,hüsn-i niyet 2- Dost, canan, yaren
İYİMSER: Olayları iyi gözle gören ve yorumlayan
İYNEM: Dost, ahbap, yaren, canan
İZ: Basma, ezme, sıkıştırma, kesmek, yarmak…bildiren kökten; yarık, yara, kalıntı, belirti
İZGİ: (İZGÜ) 1- İyi,kutlu 2- Akıllı, zeki 3- Adil, adaletli
KAAN:(Kagan) Kagan sözcüğünün Moğol ağzındaki söylenişi
KABA: Büyük, iri, şişkin
KABAK: 1- Kapalı, kabuklu 2- Kabarık
KABAL: Kapalı, zindan, mahpus
KABAMIŞ: Kapalı, güçlü, mahfuz
KABAN: 1- Kapan, kapıcı 2- Kabarık, asi, isyankar 3- Dik yokuş
KABAR: 1- Kabarık, asi, kabadayı 2- Kapan
KABARTU: Şişik, kabarık, kabarcık
KABIŞ: Kavuş, kavuşma, birleşme, toplanma
KACIR: Kaçır, kaçırıcı, korkutucu, ürkütücü
KAÇ: (Kaçı, kaş) Kaçan, koşan
KAÇAĞLI: Kaçaklı, kaçıcı, koşucu
KAÇAN: 1- koşan, kaçan 2- Vakit, saat, vade
KAÇGAR: (Koçgar,kaşgar) 1- Koç gibi, koç yiğit 2- koç başı
KAÇIR: Kaçıran, kaçırtıcı
KAÇIRA: (Kaçır) 1- Kaçıran, ürküten 2- Çalışkan, aktif
KAÇMAS: 1- Kaçmaz, ürkmez, korkmaz 2- Evcil, munis
KAÇUT: 1- Savaş, dövüş 2- Kısa mızrak, kargı
KADAGAN: Buyruk, ser, emir, komut
KADAK: (Katak,Katık) 1- Katı, sert 2- Mıh, çivi 3- Armağan, hediye
KADAŞ: Arkadaş, yaren, yakın
KADIR: (Katır) mec. Güçlü, dayanıklı, metin, inatçı
KADIRCA: Katır gibi
KAGI : (KAKI) Öfke, şiddet
KAĞAN: İmparator, hanların hanı
KAĞANLI(G) : İmparatorluk, imparatorluğa mensup olma
KAĞBA: Koruyucu, muhafız
KAKIĞAN: Öfkeli, gözü kara
KAKINÇ: 1- Kılıç ve kargı hamlesi 2- İhtar, ikaz 3- Hiddet, öfke
KAKIZ: Gözü pek, hiddetli
KAKŞA: Seri, aceleci, hızlı
KAKUMAKLU: Gazaplı,şiddetli
KAL: Ulu, saygıdeğer, hatırı sayılır
KALABA: 1- Ulu, saygıdeğer 2- Sayıca çok, kalabalık, bolluk
KALAKLI: Ulu, yüksekte
KALANÇA: Bakiye, arta kalan, artık
KALÇAV: Şakacı, nüktedan
KALDUN: Kalan, artan, bakiye KALGAN: (Kalkan) Ok, kargı, kılıç gibi savaş aletlerine karşı koruma sağlayan siperlik
KALGAY: Veliaht, şehzade
KALIN: 1- Sert, dayanıklı 2- Mal, servet, varlık 3- Çeyiz 4- Yararlılık, fayda
KALINGU: (Kalın) Kalıng, güçlü, dayanıklı
KALISIZ: Şüphesiz, kararlı
KALMUK: Güç gösterisi, güçlülük, kabadayılık
KAM: Şamanist gelenekte, ulu kişi (Hekimlik, filozofluk, büyücülük, duacılık dahil olmak üzere, oba ya da oymakların, her türlü sorunuyla ilgilenen kişi)
KAMALAG: Sedir ağacı
KAMAN: 1- Kuman, kumanlı 2- Gözü kara, cesur, aman vermeyen
KAMAŞIG: Melez, karışmış
KAMAZ: Sarsıcı, sallayıcı,ürkütücü
KAMÇI: Kırbaç
KAMDU: Para yerine geçen eşya, emanet
KAMŞAT: Şaşırtıcı, ürkütücü
KAMU(Ğ): 1- Bütün, tam, hep 2- Halk, ahali 3- Destek, dayanışma
KAN: 1- Soy, sop, kaynak, can, canlılık, soyluluk 2- Damarlardaki sıvı 3- Kağan, han
KANAT: 1- Tüy, telek 2- Taraf, yön, cenah
KANCI: 1- Kan güden soylu 2- Kanıcı, kanmış, inanıcı
KANDI: İnançlı, kanık
KANDUK: (Kanduk) Kandı, kanık
KANDUKYURT: birl. Kanduk/Yurt Gurbet
KANG: (Kang, kan) Kan, soy, ata
KANGSIK: 1- Kardeş gibi..kardeş yakınlığında 2- Üvey kardeş
KAYNAK: (Kanak) mec. Soylu
KANIĞ: 1- Kanmış, kanık 2- Sevinç, neşe
KANIK: 1- Kanma, inanma, kabul, ermek 2- Sevinç, neşe
KANIŞ: Kandırış, cilve, işve
KANITGAN: Şevk veren, kan kaynatan
KANK: 1- Kan, soy 2- Ata, baba
KANKLI: Soylu, soyu sopu belli, kanlı
KANLI: Soylu
KANTIK: 1- Kandırıcı, işveli 2- Uzakta, gurbette olan
KANYUMAZ: birl. Kan/Yumaz (Yumak, yıkamak…dan)
KAPALAN: Kaplan
KAPAR: 1- Akıl, can, ruh 2- Kalkan, zırh 3- Kapan, tuzak
KAPGAN: 1- Kanlı, soylu 2- Kalkan, zırh 3- Algan, fatih 4- Kaplan 5- Kapan, tuzak
KAPGIŞAY: Saf, sade, halis
KAPKIR: Hassas, imtizaçlı
KAPLAN: Kapan, kedigillerden bir yırtıcı hayvan
KAPURTU: Kabartı, kabarık, kabadayı
KAR: Kar tanesi
KARA: Siyah renk, ak’ın karşıtı Ancak…Bu sözcükte de Türkçe ad ve sıfatlar arasında özel bir yere sahiptir. Çünkü birçok mecaz anlamı içinde barındırması ilgi çekicidir. Birçok birleşik adın, başında ya da sonunda kullanılabildiğinden, çeşitli anlam değişiklikleri de ortaya çıkabilmektedir. Bu yüzden, içerdiği tüm anlamları açıklamakta yarar vardır. Bu durum,ayrıca Türklerin, sosyal yaşamlarında, renklere ne derece önem verip, ne derece zengin anlamlarla bezediğinin de önemli ipuçlarını verecektir. Örneğin: Ak:Temizlik, güzellik, soyluluk, merkez. Gök(mavi): Kutsallık, özgürlük, Kızıl(kırmızı): Dikkat, özen,tedbir, değişiklik, devrim, şiddet. Yeşil: Doğum, tazelik, huzur, sükun anlamlarını içinde barındırmaktadır. Renklerle yönler de anlatılabilir. Ak: güney, Kızıl: Doğu, Sarı: Batı, Kara: Kuzey yönlerini anlatır. Kara’nın öteki anlamlarına gelince: 1- Güç, şiddet 2- Olağanüstülük, harikuladelik 3- Ululuk, büyüklük, ulaşılmazlık 4- Cesaret, atılganlık, yiğitlik 5- Yas, keder, üzüntü, ölüm 6- Fakirlik, sıradanlık, (soylu olmamak) 7- Kötülük, bela, uğursuzluk 8- Esmer ten, yanık ten 9- Aşırı soğuk, kış KARAALMAZ: birl. Kara/Almaz..Namuslu
KARABAŞ: birl. Kara/Baş 1- Evlatlık 2- Kul, köle
KARABATAK: birl. Kara/Batak…Bir deniz kuşu
KARACA: 1- Karaya çalan, esmer 2- Gözü kara, cesur, şiddetli 3- Bir ceylan türü 4- Halktan soylu olmayan
KARACIK: 1- Esmer, kar tenli 2- Gözbebeği
KARAÇIL: Kumral, karaya çalan KARAGA: Karga, kuzgun
KARAĞLI: 1- Yaslı, matemli 2- Bakışları etkileyici
KARAHAN: birl. Kara/Han 1- Türk mitolojisinde “Tanrılar Tanrısı” 2-Devletlerinde, soylu olmayıp, kara budundan (halktan) biri olarak devlet kuran kişilerin takındığı unvan
KARAK: 1- Kara/Ak 2- Gözbebeği 3- Bakış, nazar
KARAKÇI: 1- Gözlemci, bakıcı 2- Karakeçi
KARAKIRK: birl. Kara/Kırk (..Kırk sayısı da, üç ve dokuz gibi, Türklerin uğurlu sayılarındandır.)
KARAKITAY: birl. Kara/Kıtay (Çinliye benzeyen, Çinlilerle kanı karışıp, melez olmuş)
KARAKOL: birl. 1- Kara el 2- Gözetleme yeri, gözetim alanı
KARAKUŞ: birl. Kara/Kuş (Mizan Yıldızı)
KARAKÜNE: Kara gün
KARAL: Vade, müddet
KARAMIŞ: Bakmış, görmüş, açık göz
KARAMAN: 1- Kara tenli 2- Yiğit, gözü kara
KARANÇI: Bakıcı, gözlemci
KARAOTAĞ: birl. Kara/Otağ Eski dönem, toy ve şölenlerde, çocuğu olmayan beylerin oturduğu kısım, tribün (…oğlu olanlar,Ak otağa, kızı olanlar kızıl otağa, konuk edilirlerdi.)
KARAOZAN: birl. Kara/ozan (halk ozanı)
KARASAGU: ağıt, mersiye
KARASÜYÜK: birl. Kara/Süyük (kemik) (avam, halktan)
KARAŞAMAN: birl. Kara/Şaman T…Şamanist gelenekte, kötü ruhlarla uğraşan şamanlar
KARAŞIN: Esmer, karaya çalan
KARAUL: Bakış, gözlem yeri (Karakol sözcüğü buradan gelir)
KARAÜREK: birl. Kara/Yürek Cesur, korkusuz
KARAV: Bakış, nazar, bakan
KARAVUL: (Karaul) 1- Gözcü, keşif kolu 2- Muhafız
KARAY: yardımcı, yararlı, yardımsever
KARAYIŞ: bakış, bakan
KARAYİR: birl. Kara/Yer (kara toprak)
KARÇAK: 1- Pençe 2- Büst, yarım heykel
KARÇIGA: Bir şahin türü
KARDAŞ: Kardeş, kardeş yakınlığı
KARGI: Mızrak
KARGIN: Meşbu
KARGUY: 1- Bir atmaca türü 2- Gözetleme kulesi, dağ başlarına yapılan yüksek yapı
KARIK: Karışık, melez
KARIKSIZ: Saf, temiz, karışık olmayan
KARIMIŞ: karışık, karışmış
KARINÇIK: Bakış, nazar, göz kaçamağı
KARINDAŞ: 1- Kardeş, kardeşlik 2- Kız kardeş, bacı (Kazak ve Kırgızlarda)
KARLIGAN: karlar eriyince açan bir dağ çiçeği
KARLIK: Karlı arazi, karlı dağ
KARLU: Karlı, kar almış
KARLUGAÇ: Kar çiçeği
KARMAS: Karıştırmaz (Soyunu, neslini)
KARŞI: Karşıt, zıt
KARŞIT: Karşı, Türk mitolojisinde, Ülgen’in yedi oğlundan biri ve Temizlik Tanrısı
KARTAL: İri kanatlı avcı kuş (Karatal)
KARUÇ: 1- Karış, karışık 2- Kara uç
KARYAĞDI: birl. Kar/Yağdı (…Doğumu, kar yağdığı sırada olan)
KASAR: 1- Keser 2- kasıntı, afili 3- Fırtına
KASMIŞ: Afili, fiyakalı, kasıntı
KAŞ: Kaş, korkusuzluk, cesaret
KAŞGAR: Cesur, üstün vasıflı
KAŞKA: 1- Yiğitlik, mertlik 2- Üstün vasıflılık 3- Dayanıklılık, metanet
KAŞUK: Dayanıklı, metin
KATAK: Katı, sert
KATAN: 1- Sert, katı 2- Saplayan, (Kargı, ok) 3- Ekleyen, artıran
KATGI (katkı): 1- Katı, sert, haşin 2- Yarar, yararlılık 3- Neşe, şenlik
KATGIÇ: Katı, sert, dayanıklı, haşin
KATI: sert, dayanıklı, haşin, güvenli, adamakıllı, etraf
KATLICAK: Katıca,sertçe,şiddetli
KATIGU: Çalışkan, gayretli, azimli KATIĞDI: Çok katı, şiddetli, kuvvetli
KATIK: 1- Katı, sert, güçlük, şiddet 2- Katılan, katılım 3- Ekmek, yemek
KATILGAN: Dayanıklı, metin, sert
KATILIK: Güçlük, sertlik, dayanıklılık, haşinlik
KATIRAK: Katıca, haşince
KATIYEL: birl. Katı/Yel (Kuru rüzgar)
KATIZ: 1- Ağaç kabuğu 2- Tarçın
KATLAV: Zırh, siper
KATLIG: Katılık, sertlik
KATMIŞ: 1- Saplamış 2- Katılaşmış 3- Eklemiş
KATUN: (Hatun) İmparatoriçe, Kağan eşlerine verilen bir unvan. (Kadın sözcüğü buradan gelir)
KAVAN: Kovucu, defedici
KAVÇIN: Konuk, kısa süreli misafir
KAVŞIT: 1- Kavuşma, vuslat, kavuşulan yer
KAVURT: 1- Kurt 2- Haşmet, ihtişam 3- Dayanıklılık, kalıcılık
KAVUŞ: 1- Menzil, kavuşulacak yer 2- Buluşma, buluşma yeri
KAY: 1- Tipi, kar fırtınası 2- Masal, hikaye
KAYA: Taş bloğu mec. 1- Sertlik, sağlamlık, yıkılmazlık, dayanıklılık 2- İhsan, inayet
KAYAK: Kayık, sandal
KAYALAK: 1- Kayık, sandal 2- kaya, kayalık
KAYAN: 1- Çığ, çığ kümesi 2- Sel, sel suyu
KAYAR: 1- Sel, sel suyu 2- Gurur, onur
KAYAŞ: Hısım, akraba, kavim kardeş
KAYÇI: Masalcı, destancı
KAYDU: 1- Katı, sert, şiddetli 2- Kaygı, hüzün 3- Sel, sel suyu
KAYGAÇ: Kayık, sandal
KAYGAŞ: Mucize, olağanüstülük
KAYGIN: 1- Üzgün, kaygılı 2- İsyankar, isyan halinde
KAYGU: Kaygı, endişe, titizlik
KAYGULU: Kaygılı, mahzun
KAYGUN: Mahzun, üzgün, müteessir
KAYGUSUZ: Vurdumduymaz, gailesiz, umursamaz
KAYI: 1- Sel 2- Kar fırtınası 3- Muhkem, iyi korunan
KAYIR: 1- Kayırma, hamilik, destek 2- Heybet, gösteriş 3- Azim, kararlılık
KAYIRGAŞ: 1- Deste, demet 2- Kayırıcı, koruyucu
KAYIRMIŞ: Kayıran, kayırıcı, destekçi
KAYIRŞI: 1- İçli, merhametli 2- Karşı, muhalif, hizip
KAYITGAN: Dik başlı, boyun eğmeyen
KAYITMAS: Adil, adaletli
KAYMAS: Adaletli, düzenli
KAYNAK: Pınar, göze
KAYNAR: 1- Pınar, göze 2- Ateşli, kızgın
KAYNARCA: 1- Kaynak, pınar, menbaa 2- Ilıca, banyo
KAYRA: Yardım, inayet
KAYRAL: Yardım, destek
KAYRALDIĞ: 1- Destekli, torpilli 2- Eli açık, cömert
KAYRIM: Arka, destek, inayet
KAYRU: Geri, arka, destek
KAYTAG: Aldatıcı, adaletsiz, hilebaz
KAYTBAY: Adil, adaletli, hakkaniyetli
KAYTMAZ: Adil
KAYTUN: Yardımsever
KAYURTAR: Kurtarıcı, yardımsever
KAZAK: 1- merkezden uzak kalan 2- Otoriteye bağlı olmayan,başına buyruk 3- Gezgin
KAZAN: 1- Kazanç, kazanım, birikim, artı değer, bolluk 2- Kızan, kızgın
KAZANCUK: 1- Kazanç, kar, getiri 2- Yemek kazanı, tencere
KAZANÇ: Gelir, kar, artı değer, getiri
KAZGAN: Kazan, kazanç
KAZILIK: 1- Kazık 2- Kazma aleti 3- Kızgın, celalli
KAZIRGAN: Şamanist gelenekte, kötü ruhların, doğruluğa gelmesi için,geçici bir süre için kaldığı ateş çukuru. Bir nevi cehennem
KAZU: Nimet, kazanç
KAZUK: (Kozu, Kazık) 1- Kazma 2- Kazık, sırık
KEBEK: Kabuk, ağaç kabuğu
KEBENÇ: İtimat, güven, hoşnutluk
KEBENÇÜ: Hoşnut, bahtiyar
KEÇİG: 1- Geçit, köprü 2- Mutlu, sevinçli KEÇİKLİĞ: Mutlu, sevinçli
KEÇİR: Bağışlayıcı, affedici
KEÇÜRGEN: Bağışlayıcı, affedici
KEDİMLİG: 1- Zırh, demir ağ 2- Giyimlik, giysi
KEKMEN: Olgun, ergin, ermiş
KELEŞ: Alımlı, yakışıklı, cıvan
KELEZTİ: Hayal, serap
KELGİN: Gelgin, suyu kabaran ırmak
KELİŞTÜ: Olgunluk, gelişim, suhulet
KELTEÇİ: Gelici, gelecek olan, halef
KEMEÇ: Asker, askeri görevli
KENÇEK: (Gençık, Genç)
KENÇLİYÜ: Oğuz beylerinin, özellikle güz kurultayların dan sonraki toy ve şölenlerde, kendi mallarını yağmalatıp, halka dağıtılması için kurdukları büyük sofra. Yağma sofrası
KENDÜZ: Nefs, can, ruh
KENEŞ: İstişare, müşavere
LENGEŞ: Keneş
KENGEŞLÜ: Danışık, anlaşık, dayanışmalı
KENDİL: Gönül, gönüllü, temiz yürekli
KENİ: (Kuni) Adaletli, adil, dengeli
KEPKE: Örnek, numune
KEPTİK: 1- Latif, şakacı 2- Eşit, müsavi
KERAMUN: Karaman, esmer tenli
KERAYET: Sahil, kıyı, plaj
KEREGÜ: Ev, çadır, barınak
KEREKLİ: Gerekli, elzem, ihtiyaç
KEREKTÜ: İhtiyaç, lüzum, zaruret
KEREKÜLÜG: Çadırlı, göçebe
KERELTİ: Tanıklık, şehadet
KEREN: Ulu, kebir, kadir
KEREŞ: Kiriş, yay kirişi
KERİ: 1- Eski, kadim, geride kalan 2- Germekten, gerilmiş, gergin
KERİNÇSİZ: Eşsiz,emsalsiz
KERKİ: Balta, nacak
KERKİT: Nacak
KERTÜK: (Kertik) 1- Ağaca bıçakla çizilen çizgi 2- yapay, suni
KESEN: 1- keskin, kesici 2- Bölüm, ara
KESİ: Keskin, kesen, kesici, sert
KESİK: Kesi, keskin
KESKİN: 1- Sert mizaçlı, asabi 2- Uç, ekstrem 3- Kesici
KEŞİKÇE: 1- Muhafız, koruyucu 2- Defa, sıra, adet
KEŞİKÇİ: 1- Israrlı 2- Nöbetçi
KET: 1- Darbe 2- Yılmaz, azimli, kararlı
KETÇİK: Darbecik
KETE: Ulu, büyük
KEYİK: Baht, mutluluk
KEZEGEN: Gezgin, çapkın
KEZGEN: Gezgin, çapkın
KEZGİÇ: Gezgin
KEZİK: Cesaret, atılganlık, cüret
KEZİR: (Kizir, keser) Cesur, cüretkar
KIBI: Keşif, buluş
KICIR: Öç duygusu, intikam
KICURGAN: Gösterişli, mağrur
KIDIK: Gedik, güdük
KIĞILCIM: Kıvılcım, şerare
KIĞITDUK: Davet, ikram
KILAĞI: Kılıç ve bıçakların bilendikten sonra ağız kısmında meydana gelen çizgi
KILAĞUZ: Kılavuz, rehber
KILAVUN: Düğün hediyesi
KILDI: 1- Yaratıcı, yapıcı 2- Etken, amil
KILGI: 1- İstem, irade 2- Yaratılmış, kılınmış
KILICI:Yaratıcı, yapıcı, halik, kadim
KILIÇ: (Kıl-Uç) Silah
KILIG: 1- yaradılış, huy, karakter 2- Beceri, iş, yapıcılık
KILIGLI: 1- İyi huylu, ahlaklı, görgülü 2- Becerikli, çalışkan, işgüzar
KILIN: 1- Huy, yaradılış 2- Naz, işve KILINÇ:Kılınış, huy, karakter
KILIVAN: Hediye, bahşiş, ödül
KILUÇ: Kılıç
KIMAÇA: Engel, mania
KIMAR: Komar, homar, yakışıklı, cezb edici
KIMIRTU: Kıpırdanış, devinim, jest
KIMIZ: Ekşi, mayhoş anlamına gelen ve kısrak sütünden yapılan bir içki
KIMNA: Sürekli, daima, her zaman
KIN: 1- Silah muhafazası 2- Gayret, çalışma 3- Suç, cürüm, ayıp
KINAGU: 1- Ceza, cezalandırma 2- Çalışma, aktivite
KINAY: Aktif, çalışkan
KINCAL: İnce, narin, zayıf
KINÇAK: Bıçak kılıfı
KINGAL: İnce, narin
KINGIR: Metin, dayanıklı, sebatkar
KINIK: 1- Gayret, gayretli, çalışkan 2- Muhterem, şerefli, hakim
KIP: Baht, talih
KIPÇAK: 1- Merkezde kaçmış, uzaklaşmış ve bir otoriteye bağlı bulunmayan 2- Çayırlık, geniş toprak,sahipsiz boş ve geniş arazi 3- Ağaç kovuğu 4- Bahtı açık, talihli
KIR: 1- Kırmak…dan Kırış, kesiş, kırma, yarma eylemleri 2- Ak’a yakın kirli beyaz renk 3- mec. Olgunluk,
tecrübe
KIRAÇ: 1- Kırlaşmış, kıra çalan, kır gibi 2- Kırıcı, kırık, yarık 3- Verimsiz toprak, yaşlı toprak
KIRAN: 1- Bozgun yapan, düşmanı yok eden 2- Dağ yamacı 3- Yön, kenar, kıyı
KIRAY: 1- Genç, delikanlı 2- Kıran, kan dökücü, vurguncu
KIRCA: Kıra çalan, ,kırlaşmış mec. Olgun, bilge
KIRCI: 1- Kırıcı, sert mizaçlı 2- Kenar, uç, sahil
KIRGI: 1- Kırım 2- Bir atmaca türü
KIRGIL: Kırık, üzgün, kırgın
KIRGIN: 1- Gönül kırgınlığı 2- Bozgun
KIRGIZ: 1- Kırgıncı, bozguncu, geçimsiz 2- Kırk/Uz 3- Numune, örnek
KIRICI: 1- Kıran, bölen, yaran mec. Sert mizaçlı, gönül kırıcı 2- Kenar, sahil
KIRIK: Kırılmış, bölünmüş
KIRIM: 1- Kırış, bozgun, katliam 2- Kırgınlık, küskünlük 3- Uç nokta, kenar
KIRIY: Sahil, kenar
KIRKIN: Bahşiş, hediye
KIRKLI: Eski, Şamanist gelenekten, bazı değişiklikler yada dinsel motiflerin de eklenmesiyle, bugünlere kadar gelen bir inanca göre; gerçek anlamı “kırk ünlü ata ruhunun koruması altındaki kişi”
KIRMAN: Kırma yeri, Kırman, harman
KISIG: 1- Hapis, dar yer 2- Kısıtlı, bağımlı
KISIGLU: Hapis, mahpus, kıstırılmış
KISRIK: Utangaç, mahçup
KISTAVUL: Acele, aceleci, telaşlı
KIŞIL: Kışlık, kış için ayrılmış
KIŞLAK: Kışın kalınan yer, ez, kışlık ev
KITAY: 1- Çinliye benzeyen , Çinliye karışmış 2- Kutay
KIVANÇ: Gurur, kıvanma, sevinme, öğünme, mutlu olma, kendine güvenerek ve öğünerek sevinme hali
KIVAM: Olgunluk,yeterlilik
KIVANDUK: Kıvançlı, mutlu
KIVIK: Ara, fasıla
KIVILCIM: Ateş parçası, şerare
KIVLIK: Kıvanç ve mutluluk nedeni
KIVRAK: 1- Kıvançlı 2- Hareketli, dayanıklı
KIVRIM: Hare, iltiva
KIYAK: 1- gaddar, acımasız 2- Kayak, kaydıraç 3- Çekicilik, cazibe
KIYAL: İmge
KIYAN: 1- Dağdan hızla akan sel suyu 2- Gaddar, acımasız, kıyıcı
KIYAT: Çekici, cazibeli
KIYGA: Zeki, çok akıllı
KIYGI: Zeka, deha
KIYIK: 1- Zeka, dahi 2- Çekici 3- Kaçak, kapçak
KIYIKSIZ: Kaçmaz, sözünden dönmez, düz
KIYIN: 1- Akit, sözleşme, anlaşma 2- Güç, kudret, otorite
KIYIŞKAN: 1- Sözünün eri, sözünde duran 2- Cesur, gözü pek
KIYMAÇ: Gamze
KIYNAK: 1- Ünlü, meşhur 2- pençe, kartal pençesi
KIYUK: 1- Mutluluk 2- Geyik KIZARIK: 1- Kızıl, kızıllaşmış 2- kızgın
KIZGAN: Kızgın, kızışmış
KIZGIN: Kızıllaşmış, asabi
KIZI: Şiddet, asabiyet, kızama, kızgınlık
KIZIK: 1- Kızgın, asabi 2- Kısık, hapis
KIZIL: 1- Kırmızı, al 2- Altın 3- Kızmış, kızarmış, kızgın
KIZILALMA: birl. Kızıl/Elma Olgun, kızarık elma anlamı, bir sembol ve imgedir. Ülkü’yü motivasyonu içerir. Bazen, fethedilmesi gereken illeri ifade eder, çoğu kez ise bütün Türklerin, tek bayrak altında toplandığı devletin, “Birleşik Türk devletleri”nin imgesi
KIZILGU: Kızarmış, kızgın T… Kırgızların, Mürdi oymağı, dip dedelerinden.
KIZILHAN: birl. Kızıl/Han Şamanist gelenekte Tanrı sıfatlarından
KIZILOTAĞ: birl. Kızıl/Otağ Kağan ya da Han’ların verdikleri, toy ve şölenlerde, kız çocuk sahiplerinin oturduğu, şeref tribünü
KIZIMTAY: birl. Kızım/Tay (Kızmaktan kızgınlık) Tay
KIZIRAK: (kızarık, kızrak) Nadir, ender rastlanan
KİÇİ: 1- Kişi, adam, insan 2- Küçük, minyon 3- Geçmiş, geçik, eski 4- Keçi
KİÇİCİK: 1- Kişicik, insancık 2- Küçük, minyon
KİÇİK: 1- Küçük, minyon, Geçik, geçmiş
KİÇİN: Zincir
KİÇKİ: 1- Eski, kadim 2- Kişi, insan
KİÇKİNE: (Giçgine) Geçkin, geçmiş kadim
KİDGÜ: Giyim, giysi, elbise
KİLÜKEN: Gülen, güleç, güleryüzlü, mütebessim
KİNDİK: Orta, odak, merkez
KİNEŞ: Şura, meşveret, kongre
KİRİŞ: Sinirden ve bağırsaktan yapılan sicim. Ok yayı olarak da kullanılır.
KİRTİ: Doğruluk, gerçekçilik
KİŞİLİK: Karakter, şahsiyet, insan olma özelliği
KİŞKEN: (Kiçgen) 1- Küçük, minyon 2- Geçen, geçmiş
KİÇKENTAY: birl. Kiçken/Tay …minyon, minik
KİYE: Kut, talih, ululuk
KİYELİ: Mübarek, saygıdeğer, ulu
KİZEK: 1- Kesik 2- Nöbet 3- Seyran, gezinti
KİZİR: 1- Keser, kesici 2- Gever, gezgin 3- Atılgan, cesur
KOBRAT: (Kubrat) Derlemek, toparlamak, örgütlemek
KOBU: (Kovu) Buket, demet
KOBURCUK: Kabarcık, kabarık, kabadayı
KOCA: 1- Ulu, saygıdeğer, hürmete layık 2- Bilgili, tecrübeli, görüp geçirmiş 3- Gösterişli, azametli 4- Mert, düz, koç gibi
KOCABAŞ: birl. Koca/Baş …Koruyucu, muhafız
KOCAMAN: 1- Akıllı, bilge 2- İriyarı, cüsseli, heybetli
KOÇ: Erkek koyun mec. Düz, mert, yüz yüze dövüşen, hilesiz, yiğit, dayanıklı, yılmaz
KOÇA: 1- Koç gibi..2- Kibar, centilmen
KOÇAK: Koç gibi, cesur yürekli
KOÇAN: 1- Centilmen, kibar 2- Koşan, koşucu
KOÇAŞ: Rehber, yol gösteren, önde giden
KOÇGAR: (Kaçgar,kaşgar) 1- Koç başı 2- Koç gibi, koç yiğit
KOÇİ: Koç gibi, koç yürekli
KOÇLUĞ:( Koçluk) Koç olacak kuzu
KOÇO: Kibar, mert
KOÇU: 1- Koç gibi 2- Kibar, centilmen
KOÇUM: 1- Yiğit, mert 2- Koşum, koşma
KOÇUN: Düz, hilesiz, temiz yürekli
KOÇUGAR: Mert, yiğit, özü sözü bir
KODAR: Mağrur
KODAZ: Mağrur
KOKLUĞ: Koku, parfüm
KOKULUG: Koku, Parfüm
KOKUM: Parfüm
KOKUŞ: Dalları, ok yapımına elverişli bir ağaç türü
KOLAN: 1- Hediye, bahşiş 2- Kollayan, koruyan 3- At, eşek,katır gibi hayvanların, eyerini bağlamaya yarayan kemer
KOLBAG: Kadınların, aksesuar olarak bileklerine taktıkları, boncuklu halka
KOLBAŞ: Askeri birlik başı, komutan, askeri koruyup kollayan kişi KOLBAY: Askeri danışman
KOLCUK: Kolcu, muhafız, koruyucu
KOLÇAK: Kolcu, koruyucu, kollayıcı
KOLÇU: Muhafız, bekçi
KOLDAGÜÇ: Hami, koruyucu, şefkatli, merhametli, yardımsever
KOLDAŞ: 1- Silah arkadaşı 2- Arkadaş, birbirini kollayan
KOLGAK: İstek, heves, talep
KOLGAY: Veliaht, şehzade (Kırım ve Kazan hanlıkları döneminde kullanılan bir aksesuar
KOLKA: 1- Kolgu, kol takısı 2- Refika, hanım, eş
KOLTAG: Arka, himaye, destek
KOLUÇ: Kolcu, kolbaşı, komutan
KOLUNÇUĞ: Yakarış, niyaz
KOMAN: (Kaman,kuman) 1- Yurduna yabancı sokmayan 2- Aman vermeyen 3- Kumral
KOMAS: Komayan, bırakmayan, aman vermeyen
KOMUK: 1- Kabuk, ağaç kabuğu 2- Hazine, define
KOMUR: Cesur, gözüpek
KON: 1- Yurt, vatan 2- Konak, yerleşim, mekan
KONAÇ: Aşiyan
KONAG: 1- Konuk, misafir 2- Konuk ağırlanan ev
KONALGA: 1- Konuk yeri, baş köşe 2- Menzil, konulacak, varılacak yer
KONAT: 1- Cana yakın, munis, sokulgan 2- konuk ağırlayıcı, konuksever 3- Birlikte göç eden oba birliği
KONCA: 1- Armağan, bahşiş 2, Gül
KONÇUK: 1-Aşina, tanıdık 2- Konuk
KONÇUY: Kağan kızı, prenses, soylu kız
KONDU: Yerleşik, yerli
KONDUR: Konuksever, cömert
KONGAR: 1- Koyu kırmızı renkteki at 2- Kızıla yakın renk tonu
KONIK: Can, ruh, yaşam
KONŞUK: 1- Konşu, komşu 2- Yerleşim yeri 3- konuşma, laf
KONUK: 1- Misafir 2- Can, ruh 3- Varılacak yer, menzil
KONUL: 1-Kerevetlerin altındaki, yük konan boşluk, yüklük
KONULGA: 1- Konuk yeri, baş köşe 2- Konuğa verilen yemek, değerli yemek
KONUR: 1- Yakışıklı, civan 2- Gururlu, onurlu, mağrur 3- Kara ve kızıl karışımı renk, at rengi, doru at
KONUŞ: 1- Yerleşim, karargah 2- Menzil, varılacak yer
KOPAN: 1- Galip, utkan 2- Ulu, yüksek
KOPTURU: Saygı duruşu, tören duruşu
KOPU: Kop, çok, çokluk
KOPUN: Çoklu, bereket, bütünlük
KOPUZ: Saz, bağlama (Kop_Uz)
KOR: 1- Öz, maya, asıl 2- Ateş parçası, ateş
KORBA: Filiz
KORCU: Korucu
KORGAN: Korunan yer, kale, kurgan
KORGAVUŞ: Savunucu, müdafi
KORIÇI: Korucu, koruyucu, bekçi, yasak bölgeleri bekleyen ve koruyan kişi
KORIG: 1- Koru, ağaçlık, yeşil bölge 2- korunan, yasak bölge
KORKMAZ: Korkusuz, cesur
KORKUNÇ: Korkutucu, ürkütücü
KORKUT: 1- Heybetli, korkutucu, korku salan
KORUĞ: 1- koru, koruluk, ağaçlıklı bölge 2- Koruma bölgesi 3- Yasak bölge, askeri bölge
KORUKÇU: Koruyucu, korucu, muhafız
KOŞ: 1- Koç 2- Dizi, sıra, dize
KOŞAK: 1- Koşulan, koşturan 2- Neşide, destansı şiir
KOŞAR: 1- Emredici, buyurucu 2- Koşucu, çalışkan, hareketli 3- Dizen, düzenleyen
KOŞMA: Ölçülü, uyaklı söz
KOŞUK: 1- Yan yana, birlikte, yaren, dost 2- Koşma, şiir
KOŞUL: Hüküm, şart
KOŞULGAN: Koşul koyan, buyurucu
KOŞUM: 1- Koçum 2- Bağlı, yan yana 3- Atın, eyer, kulan, üzengi vb. malzemelerinin tümü
KOŞUN: 1- Asker, savaş birliği 2- Halk, ahali 3- Dizi, dize
KOTKU: Alçak gönüllü, mütevazı
KOY: 1- Koyun 2- Merhamet, acıma duygusu
KOYLU: 1- Merhametli 2- İstikamet, yön, yönünü bilen 3- Koyunlu
KOYU: Merhamet
KOYULDAR: 1- Merhametli 2- Hürmetli KOYULMUŞ: 1- Merhametli 2- Çalışkan
KOYUNLU:Merhametli
KOYURGA: 1- Hürmet, lütuf 2- Acıma duygusu, merhamet
KOYURTANG: Özgürlük, Hürriyet
KOZAN: Kozalak
KOZALAK: Çam, selvi gibi ağaçların sert çiçeği
KOZAN: Kazan
KOZGAV: Kıyam, isyan, başkaldırma
KÖPÜRGE: 1- Köprü, geçit 2- Savaş davulu
KÖÇET: Filiz, sürgün
KÖÇMEN: Göçmen, göçücü
KÖDÜRGÜ: Kurban, adak
KÖGMEN: (Gökmen) 1- Tanrısal, ilahi 2- Sayın, saygıdeğer 3- Gücünü Tanrıdan alan
KÖĞÜZ: 1- Göksel, Tanrısal 2- Göğüs, sine
KÖK: 1- Gök 2- Aile, soy
KÖKDAŞ: Emsal, örnek
KÖKEN: Göğen, gelen, 2- Köken, soy, aile
KÖKİM: 1- Göğüm 2- Soyum, ailem
KÖKLÜ: 1- Tanrıdan gelen 2- Soylu
KÖKTEM: 1- Bahar 2- Gençlik 3- Deha, akıl
KÖL: Göl mec. Ululuk, sonsuzluk, derinlik, bilgelik
KÖLMÜK: Halk, ahali
KÖLÜK: Yük hayvanı
KÖMEK: 1- Yardım, arka, destek, inayet 2- Ahali, halk
KÖMEN: 1- Hayal, düş 2- Irk, soy 3- Cevher, damar
KÖMEY: Gerdan, döş
KÖMÜÇ: Hazine, define
KÖNG: (Könk) Cariye, odalık
KÖNGÜL: Gönül, can
KÖNİLİK : Adalet, doğruluk
KÖNKAŞ: Künkaş, kenkeş, meşveret
KÖNÜ: Adalet, doğruluk
KÖNÜL : Gönül , can
KÖP: Çok, gür, çokluk, bolluk
KÖPTÜK: 1- Bereket, bolluk 2- Kalabalık
KÖPÜK: Kabarcık, köpürcük, çoklu, artış
KÖREGEN : Gören, görücü
KÖREM: 1- Körpe, taze 2- Görgülü, terbiyeli
KÖRGEN: Gören, görücü
KÖRGÜZ: Görgülü, centilmen, beyefendi
KÖRKE: Ağaçtan yapılmış tabak
KÖRKEM: 1- Görkem, ihtişam 2- Hoş, güzel, latif
KÖRKLÜĞ: Güzel, alımlı, cemile
KÖRPE: Taze, cıvan
KÖRÜ: (körüg) Gözcü, haberci, casus, gözlemci
KÖRÜM: 1-Bakış, nazar, gözlem 2- Düş, rüya 3- Zeka, fehm
KÖRÜMÇİ: Astronom, rasat, gözlemci, yıldızları inceleyen kişi.
KÖRÜMDÜK: Bakıcı, nezaretçi
KÖRÜNÇ: 1- Görgü, muaşeret 2- Bakan, nazır
KÖSEMEN: Tas artan koç.
KÖŞÜK: Dilek, temenni
KÖTÜZ: Kıymetli
KÖVENÇ: 1- Güvenç, güvence, teminat 2- Azamet, gurur
KÖVEZ: Afi, çalım, fiyakalı.
KÖYMEN: 1- Yanıcı, yanık 2- Hayal
KÖYMEZ: Yanmaz, ateş almaz.
KÖZLÜK: At kuyruğundan yapılan, göz kamaşması ve göz ağrılarının tedavisinde kullanılan bir dokuma.
KUANÇ: Kıvanç, sevinçli gurur
KUANÇI: Kıvanç
KUBAL: Gürz, demir topuz.
KUBAN: Kapan
KUBAT: Kapalı, gizli
KUBAY: birl. Kubi/Ay
Yakutların eski dönem “Temizlik Tanrıçası”
KUBİ: (Kubil) Gökyüzü, feza, sema. Mec. Başsızlık ve sonsuzluk.
KUCAN: Göçen, göçer
KUCAR: Göçer, göçücü KUÇAM: Deste, demet, bağ
KUÇAR: Göçer, göçmen
KUDA: Sihir, büyü
KUDAGAÇI: Büyücü, doktor
KUDAK: Kadak, katı, sert
KUDEKAN: Buyruk, sert, emir, azar
KUKUN:kıvılcım, ateş parçası
KUKUŞ: 1- Gonca, gül 2- Şaka, latife
KUL: Bağımlı, bağlı, köle mec. Bağlılık, sadakat
KULA: 1- Kızıl ve karışımı renk, doru, bordo 2- Yelesi, ve kuyruğu kara, gövdesi kızıla çalan at 3-Yabani at 4- Gözü kara,atılgan
KULAÇ: 1- Açıklık, mesafe 2- İki kol arasındaki ara
KULAGU: 1- Yaratıcı, kılıcı, hükmedici 2- Kula gibi 3- Korkusuz, gözü kara
KULAN: 1- Galip, utkan 2- Vahşi at 3- Yaban eşeği
KULANŞI: 1- At terbiyecisi 2- Musikişinas, müzisyen
KULBAK: Merhametli, yardımsever
KULDAM: Sadık kul
KULGA: Güvercin
KULGU: 1- Müfettiş, murakıp 2- Güvercin
KULİ: (kulıg) Cesur, gözü kara
KULPU: 1- Kilit 2- kulluk, kulluk eden
KULUGA: Güvercin
KULUN: Tay, süt emen çağdaki at yavrusu
KUMAÇ: Solgun, soluk
KUMAK: 1- Yardım, kömek 2- Sevda, aşk
KUMAN: 1- Solgun 2- Kumral, sarı ile kahverengi arası renk 3- Aman vermeyen, dirayetli
KUMANDI: Mutlu, sevinçli
KUMARAL: Kumral, buğday tenli
KUMARGA: Kuşatma, muhasara
KUMRAL: Buğday tenli
KUL: 1- Koyun 2- Can, ruh 3- Uçurum 4- Adalet
KUNAN: 1- İki yaşına gelmiş kısrak 2- Adaletli, adil
KUNAR: Bereket, bolluk
KUNARLI: Bereketli, münbit
KUNDUZ: Dere kenarlarında yaşayan, kürkünden börk yapılan bir hayvan
KUNİ: Adalet, hakkaniyet, adaletlilik
KUNT: 1- Dayanıklı, metin 2- Sade, gösterişsiz
KUNUK: 1- Mahzun, elemli 2- Konuk
KUPÇI: İnce, zarif
KUPTAN: Niyaz, dua, yakarış
KUR: Düzen, sıra, hiyerarşi, düzenleme
KURAL: Düzen, düzenlilik, kaide
KURALAY: Ceylan, ahu
KURAR: Organizatör, düzenleyici
KURAY: Bir çeşit bozkır bitkisi ot
KURÇ: (kuruç) Kılıç yapımında kullanılan, iyi bir çelik türü
KURÇAK: Heykel, yontma taş
KURÇI: 1- Kürçü 2- Kurucu
KURÇIK: Kurum, kuruluş, yapılanma
KURGA: 1- Tecrübeli, bilge 2- İnce, narin
KURGAN: 1- İstihkam, kale 2- Anıt, anıt mezar
KURIDIN: Batılı, batı bölgesinden
KURUM: Figür, dans
KURIMLAK: Cilveli, hareketli, kıvrak
KURIKAN: 1- Kürkan, damat 2- Hisar, kale 3- Ağaçlık bölge
KURLAS: Düzen, işleyiş, ahenk
KURMAN: Düzgün, düzenli, düzenleyici
KURMUŞ: Planlı, düzenli, örgütlü
KURT: Bağımsızlığına olan düşkünlüğü, evcilleşmeyen tek hayvan oluşu, mücadeleciliği, hareketliliği,gururlu ve zeki oluşu, özellikle de sosyal ve örgütçü oluşu ve daha bir çok özellikleriyle, Türklere benzeyen ve Türklerin de çok eskiden beri kutsayarak, sembolleştirdiği hayvan
KURTAK: Kurulu, ayarlı
KURTAR: Kurtarıcı
KURTARAN: Kurtarıcı
KURTGA: Tecrübeli, gün görmüş
KURTUL: Haraç, vergi, cizye
KURTULGU: 1- Vergi, haraç 2- Kurtuluş, istiklal KURTULMUŞ: Özgür, bağımsız, azade
KURTUN: Batılı, batıdan
KURUĞÇIN: Kurşun
KURUK: Koru, park, koruluk
KURULTAY: birl. Kurul/Tay Kongre, divan, oturum Gerek seçim, gerekse devlet için önemli kararların alındığı seçkinler meclisi
KURUM: 1- Kuruluş, düzen, düzenleme 2- Çalım, jest, afi 3- Kaya parçası
KURUT:1- Kurt 2- Kale burcu 3- Kurutulup, suyu alınmış peynir topağı
KUSKUN: Atın kuyruğundan geçirilip, eyere bağlanan kayış
KUŞ: Kuş
KUŞÇAK: Kuşçu, kuş eğiticisi
KUŞÇU: Kuş eğiticisi
KUT: 1- Uğur, talih, baht 2- Tanrısal, mübarek 3- Can, ruh, dirilik, yaşam kaynağı, yaşam gücü 4- kader, yazgı 5- Erk, iktidar 6- Bereket, nasip
KUTADGU: Kutsanmış, kutlu, değerli, yararlı
KUTALAN: birl. Kut/Alan mübarek
KUTALDI: birl. Kut/Aldı kutlu, mübarek
KUTALMIŞ: birl. Kut/Almış kutlu, mübarek, kutsanmış
KUTAMIŞ: Kutsamış, değer vermiş, mübarek eylemiş.
KUTAN: 1- Dua, yakarış, niyaz 2- Bir avcı kuş 3- Saban, pulluk
KUTAR: Kutsar, kutsayan, kut veren
KUTAŞ: Kutlu, mübarek
KUTAY: birl. Kut/Ay T… 1- Ateş parçası,ateş 2- Şamanist gelenekte,” Ateş Tanrısı” 3- İpek, ipekli kumaş 4- Tanrıça 5-Paha biçilmez, değerli T… İlhanlı hanlarından, Argun Han’ın evdeşi ve Keykatu Han’ın anası.
KUTGARU: Buyruk, fermen
KUTKU: Ağırbaşlı, alçak ,gönüllü
KUTLU: 1- Mübarek, Tanrısal 2- Bahtiyar 3- Kabul görmüş, saygıdeğer
KUTLUCA: Uğurlu, bahtı açık
KUTLUĞ: Kutlu, mübarek
KUTLUĞ İNANÇ: (Kutluk İnanç) Kutlu/İnanç
KUTLUK: Kutlu
KUTLUK : (Kutluğ) Kutlu, mübarek
KUTSANDI: Kutlu, mübarek
KUTUN: 1- Mesut, mutlu, nurlu 2- Mukaddes, kutsal
KUTUNMUŞ: Kutlu, mübarek
KUTUR: Kutlu, mübarek
KUTUZ: birl. 1- Kut/Uz 2- Yaban öküzü
KUVANÇ: Kıvanç, gurur, mutluluk, iftihar
KUVANDUK: Kıvanç, mutluluk, iftihar, gurur verici
KUVART: 1- Kurt 2- Dayanıklı, kavi, metin
KUVAT: Sevinç, mutluluk
KUVRAG: Toplum, toplumcu
KUYAK: Zırh, demirağ
KUYAN: Tavşan, bozkır tavşanı
KUYAŞ: Güneş ışığı
KUYDUNG: Beden, vücut
KUYMU: Sevinç, neşe
KUYTAK: Mahfuz, siper
KUYTURKA: Bağış, ihsan, lütuf
KUYULDAR: Saygıdeğer, saygıya layık
KUYUM: Aksesuar, küpe, bilezik
KUZ: Dağın, güneş görmeyen yamacı
KUZAY: Kuzey yönü, güneşin az olduğu yer,Karanlık ve soğuk yer
KUZLAK: Bebe, yavru
KUZU: 1- Koyun yavrusu 2- Yavru, bebe
KÜÇ: Güç, dirayet, kudret
KÜÇKARA: birl. Küç/Kara (Acı kuvvet)
KÜÇEM: 1- Güç, kudret 2- zorba
KÜÇEY: Güçlü, gücü yeten
KÜÇİ: Güç, güçlük, zorluk
KÜÇİN: An, kısa zaman parçası
KÜÇKEY: Güçlü, zorlu
KÜÇLÜK: Güç, güçlük, zorluk, kudret
KÜÇÜK: Ufak, minyon
KÜÇÜLÜ: Güçlü, zorlu
KÜÇÜLÜK: Güçlük, güç, zorluk KÜÇÜM: Güç, kudret
KÜKLER: Müneccim, yıldız falcısı
KÜKREK: 1- Onur, gurur 2- Kükreyiş, kükreyen
KÜL: 1- Ateş, ateşlilik, yakıcılık, yok edicilik 2- Yenilmezlik 3- Ulu, ünlü 4- Cesaret, gözü karalık 5-Göl, göl gibi geniş ve büyük
KÜL TİGİN: birl. Kül/Tigin Birkaç anlam: 1- Ateş prensi 2, yenilmez prens 3- Ulu prens 4- Yok edici prens
KÜLÇUR: Ululuk, yüksek mevki, saygıdeğerlik.
KÜLE: 1- Güle , gülüş 2-Demet,bağ, deste
KÜLEGEÇ: 1-Güleç, güler yüzlü 2-Name, melodi
KÜLEGEN: Gülen, güler yüzlü
KÜLEK: 1- Fırtına, kum fırtınası 2-Bakraç, tahtadan yapılmış yoğurt kabı
KÜLEM: Bereketli, münbit
KÜLER: birl. Kül/Er ..Ulu, saygın kişi.
KÜLTEM: Deste, demet, buket
KÜLÜG: (Külük) 1-Ünlü, meşhur, çok tanınan 3-Hızlı,seri
KÜLÜNK: Kazma
KÜMÜŞ: Gümüş
KÜN: Gün, güneş
KÜNANA: birl. Gün/Ana
Şamanist gelenekte, göğün yedinci katına bakan tanrıça
KÜNÇEK: Güneşlik, şemsiye
KÜNDEŞ: 1- Gündeş, güneşe eş değerde 2- İzci, takipçi, halef
KÜNDÜN: Gün ışığı
KÜNDÜZ: Gündüz
KÜNEŞ: Güneş
KÜNGERÜ:Arzu, dilek, temenni
KÜNG: Cariye, dişi köle
KÜNİ: 1- Adil, adaletli, hukukçu, yasalara bağlı 2- İtaatkar, muti
KÜNKAŞ: Danışma, nasihat
KÜNTEM: Günlük, gündelik
KÜNÜÇEN: Muti, itaatkar, saygılı
KÜNÜLÜK: 1- Şemsiye, 2- Günlük, yevmiye
KÜR: 1- Gür, sık, bol, bolluk 2- Canlı, diri, sağlam, sarsılmaz 3- Gürleyen, kükreyen, kabadayı, gözü kara, yürekli 4- Öz, maya, özünü yitirmemezlik 5- Düzen, düzenlilik 6- Çare, çözüm, deva
KÜRÇE: Esas, asıl, maya, öz
KÜRÇİ: Kabadayı, gözü kara
KÜRHAN: (Gürhan) birl. Kür/Han Türk mitolojisinde, Kara Han’ın oğullarından
KÜRİ: İç geçiren, imrenen, kıskanç
KÜRKAN: birl. 1- Kür/Kan (Gür/Kan) 2- Damat (Körekan)
KÜRMEN: Özlü, soylu
KÜRÜGEN: 1- Gürgen 2- Köregen, damat
KÜRÜM: Basiret, meleke
KÜRÜNÇ: 1- Özlü, soylu 2- Düzen, düzenli 3- Kıskanç
KÜŞLİK: 1- Güçlük, güç, zorluk 2- Mutlu, mutluluk
KÜŞÜM: 1- Ar, edep, hicap 2- Güç, güçlülük
KÜVENÇ: Güvenç
KÜVENÇİ: Güvence, garanti
KÜZ: Güz, sonbahar, hazan
KÜZNEK: Işık kırılması
MAMAK:Sakin, kendi halinde
MAMAY: Sakin, munis
MAMIŞ: 1- Saygılı, söz dinler 2- Saygı
MANAS: 1- Huy, mizaç 2- Heybet, heybetli
MANAY: Saha, bölge, mıntıka
MANÇO: Mengü, sonsuz
MANÇU: Mengü, sonsuz
MANGALAY: 1- Alın, yüz, cephe 2-Süvari, iyi ata binen
MANGU: Mengü, bengü, sonsuz
MANGUR: Mangır, bakır para
MANGUT: Ölümsüz, sonsuz MARAL: Ceylan, ahu türü bir hayvan
MAYDA: Narin, ince, ince yapılı
MENÇİK: Mülkiyet, mal varlığı
MENDEŞ: (Menteş, mintaş) Acele, aceleci
MENGİ: Mengü, bengi, bengü
MENGİLİK: Sonsuzluk
MENGÜ: Ebedi, sonsuz, sonsuza kalan, sonsuzluk, ölümsüzlük
MENGÜÇ: Sonsuzluk, sonsuzluğa ulaşmış, ermiş, ulu, saygıdeğer
MENGÜÇ ATA: birl. Mengüç/Ata
Bilgi ve tecrübesine başvurulan ulu ve bilge kişi
MENGEN: 1- Nişancı, iyi ok atan, okçu 2- Becerikli, mahir
METE: 1- Soylu, saygıdeğer 2- Bütün, bütünlük, bütünlükçü
METEHAN: birl. Mete/Han Hun kağanlarının en ünlüsü. Aynı soy ve kökten gelen boylar arasında, kan dökülmesini yasaklamış hepsinin tek bir devlet çatısı altında toplanması gerektiğini,bunun aynı zamanda Türk Tanrısı’nın bir emri olduğuna inanarak bu yolda mücadele etmenin ve bunun getireceği sonuçların,en büyük ve paha biçilmez bir mutluluk olduğuna inanmış, bunu da ayrıca,devlet politikası biçimine getirmişti.Türk töresine devlet idaresine sokan,ilk düzenli ve sınıflı kara ordusunu kuran,”Birleşik Türk Devletleri ülküsünü devlet siyaseti olarak ve bunu gerçekleştiren ilk Türk büyüğü. MİN: 1-Bin,bin sayısı. 2-ben,gamze
MİNG:1-Ben,gamze 2-Huzur,refah 3-Bin sayısı
MİNGAN: Benli,gamzeli
MİNGİLİK: Rahat,huzur,refah
MİNGİR: Çok külliyetli.
MOĞOL:Kaygı,endişe,hüzün Oğuz’un amcası ve ilk kayın atası
MOKAN: Büken, güçlü
MONGUÇ: Atik, çevik, hamleci
MOTUN: Bütün, bütünlük ( Mete Han’ın asıl adının bu olduğunu söyleyen tarihçiler de var.)
MUGLU: Üzgün, hüzünlü
MUNAR: Serap, algın
MUNCUK: Boncuk, takı, mücevher
MUNÇUĞ: (Boncuk)
MUNG: 1- Hüzün, elem, üzüntü 2- Ming, ben, gamze
MUNGLUĞ: (Mungluk) Üzgün, bunalmış, hüzzam
MUNGUL: Hüzünlü, elemli
MUTLU: Mutlu, mesut, bahtiyar
MÜÇEK: öpücük, buse
MÜGE: İnci çiçeği
MÜLDÜZ: Berrak, saf
MÜREN: Irmak, akarsu
OBA:1- Yurt, mekan, mesken,diyar, çadır, mahalle 2- kabile, aşiret
OBAR: Ev, baraka
OBEN: 1- Genç aygır 2- Erkek deve yavrusu
OBULAZ: (Oblas, oflas) 1- Gözü pek, atılgan 2- Alicenap, yüce gönüllü.
OBUT: Şeref, haysiyet
OBUZ: Kaynak, menba
OCAK: (Otak, odak) Ateşlik, ateş olan yer, ateş tüten yer. Mec. Ev, yuva, insan eğitiminin, başladığı, insanın pişmeye ve biçimlenmeye başladığı yer.
OCAKLI: Ocak sahibi.
OD: Ot, ateş
ODAK: Ocak, yanma, yansıma merkezi
ODAKAN: Hanım ozan
ODANA: birl. Od/Ana
Şamanist gelenekte, “Dişi Melek”
ODATA: birl. Od/Ata
Şamanist gelenekte “erkek melek”
ODÇU: Ateşçi
ODGURMUŞ: 1- Oturmuş, oturaklı, sakin, kendinden emin 2- Yuva kuran, birlik kuran
ODHAN: birl. Od/Han Şamanist gelenekte, “Ateş Tanrısı” OG: Ok (Doğma, doğum, yaratılış)
OGAN: (Okan, Ugan) 1- Tanrı, Tanrılık vasıfları, yaratma, yaratış, doğuş, halik 2- Anlayış, zeka,bilgelik 3- Eski Türklerde, kan davalarına karşı çıkan, oba ve oymaklar arasındaki geçimsizliklerde,arabuluculuk yapan, “Barış Tanrısı” 4- Altay ve Tuna Türklerinde “ Ateş Tanrısı”
OGLAĞU: Körpe, genç kız
OGRAK: 1- Azim, kararlılık 2- Niyet
OGRAŞ: Uğraş, mücadele, meşgale
OGSAT: Benzer, benzerlik, benzeyiş
OGTADURMUŞ: birl. Okda/Durmuş ( Bu ad, iki anlamda da yorumlanabilir. Akıllı, zeki Durmuş. Zor
durumda kalan, zor koşullarda olan)
OGUR: 1- Gizlilik, gizem 2- Uğur, baht, talih, mutluluk
OGURLU: Uğurlu
OGURMUŞ: Gizemli, ağzı sıkı
OGUTUR: Gizli, gizemli
OGÜN: birl. O/Gün (..Eski bir Türk geleneği olan, tarihin önemli ve özel günlerinin anısına verilen, o gün ya da o günlerin yıldönümüne denk düşen günlerde doğanlar için kullanılan bir ad.
OĞÇU: Okçu, haberci, ulak
OĞIRCIK: Uğurcuk
OĞLAGU: Körpe kız
OĞLAK: Keçi yavrusu
OĞLAMAN: Bir yaşında doğum yapan, koyun ve keçi
OĞLAN: Oğul, erkek çocuk, genç erkek
OĞRAMIŞ: Uğurlu
OĞRUN: 1- Gizli, gizemli 2- Yavaş, ağır
OĞUL: 1- Oğlan, erkek çocuğu 2- Evlat, genel olarak, kız yada erkek çocuğu
OĞULÇA: 1- Oğulcuk, biricik oğul, biricik evlat 2- En küçük oğul
OĞULGANMIŞ: Oğlu olmayan
OĞUR: 1- Uğur, talih, bahtiyarlık 2- Vakit, zaman, devir
OĞUŞ: 1- Bolluk, bereket 2- Hısım, akraba, nesil
OĞUZ: 1- Ok-Uz 2- Ağuz, ağız 3- Olağanüstülük 4- Çağrı, davet, toparlama birleştirme, yaratış
OK: 1- Doğum, doğuş, yaradılış 2- Akıl, us 3- Dokunma, el sürme 4- Söyleyiş, çağırış, haber verme 5- Silah, yay ile kullanılan ok 6- Örgüt, teşkilat
OKAN: 1- Ogan 2- Anlayış, fehim
OKATMIŞ: (Okutmuş) Haberci, ulak
OKÇI: 1- Okuyucu, haberci 2- Ok atan, okçu 3- Örgütçü
OKIÇI: Davetçi, davetkar, çağırıcı
OKİ: Çağrı, davetiye
OKLAMIŞ: Ok atmış, savaşçı
OKLU: 1- Akıllı, zeki 2- Örgütlü
OKŞAK: Benzeyen, andıran, tanıdık, bildik
OKŞAN: Benzeyen, okşayan
OKTA: Akıllı, zeki, dahi
OKTAR: 1- Okçu, iyi ok atan 2- Bilgili, akıllı, yaratıcı 3- Davetçi, davetkar
OKUKLU: Alim, bilgin
OKUMAGAN: Arif, eğitimsiz ama kendini yetiştirmiş, olgunlaşmış
OKUNÇ: Toy ve düğün davetiyesi
OKUŞ: 1- Bilgi, bilgelik 2- Bereket
OKUŞLUĞ: 1- Alim, bilgin 2- Bolluk, bereket, bereketli
OKUTGAN: Okutan, eğitmen
OKUTAN: Eğitmen, öğretmen
OKUV: Okuyuş, kıraat, çağırış
OLAGAN: Olan, doğal, olumlu
OLAM: Debdebe, gösteriş, tantana
OLBAK: Oluş, oluşum
OLCA: Ganimet, bolluk
OLCAŞ: Tören, seremoni, tazim
OLCAY: Tanrı sıfatlarından. Baht, talih, açık talih, ululuk
OLCAYTU: Açık talih, bahtı açık, bereketli
OLÇA: Ganimet, bereket
OLÇAM: Ganimet, nimet, bolluk
OLÇAR: 1- Saldırı komutu, saldırı 2- haber, havadis 3- Uygun, muvafık
OLÇUM: 1- Olgunluk, olgun, yetişkin 2- Hüner, marifet
OLGAÇ: Olgun, olmuş
OLGUN: Yetişkin, olmuş, kamil
OLUM: Oluş, doğuş, olmaya elverişli.
OLUN: 1- Oluş, olgunluk, ağırbaşlılık 2- Genç, taze 3- Soyluluk OLUŞ: Oluşum, düzen
OMAÇ: Amaç, gaye
OMAK: 1- Soy, kan, soyluluk 2- Aile, akraba
OMAY: (Umay) Seçkin, güzide
OMRAK: Sevilen, maşuka
OMUR: (Umur) 1- İlgi, heves 2- Güç, dayanıklılık, dayanıklı
OMURCA: Sağlam, dayanıklı
OMURTAG: Kartal yavrusu
ONAK: 1- Onanmış, kabul görmüş 2- Sevgili, el üstünde tutulan
ONAL: 1- Doğuş, ortaya çıkış 2- Sağlam, dayanıklı
ONANLI: Sağlam, meyin, mütehammil
ONANMIŞ: Sağlam, bayındır, destekli
ONAT: 1- Sağlam, dayanıklı 2- Yakışıklı 3- Terbiyeli, iyi davranışlı
ONATÇA: Makbul, hatırşinas
ONAY: 1- Sağlam, dayanıklı, uygun 2- Makul, kabul,tasdik
ONG. 1- Sağlamlılık, kalıcılık, dayanıklılık 2- İyilik, rahmet, bereket, bolluk 3- Sevinç, neşe, mutluluk
ONGAN: 1- Uğurlu, mutlu, bahtiyar 2- Verimli, gelişkin 3- Bayrak, simge, totem
ONGU: 1- Kar, kazanç 2- Set, sütre
ONGUÇ: Karlı, kazançlı, verimli, uğurlu
ONGUDAY: Karlı, kazançlı
ONGUN: 1-Bolluk ve bereket tanrısı. 2- Uğurluluk, verimlilik, kalıcılık 3- Av totemi, kutsanmış av hayvanı 4- Totem, sembol, bayrak, flama
ONGUR: Kurtuluş, salah
ONGUT: Koruyucu, muhafız, kale muhafızı
ONUK: 1- Sağlıklı, dayanıklı 2- Uğurlu, aziz, saygıdeğer 3- Usul, yol, teamül 4- Yararlı, faydalı
ONUŞ: 1- Bereket, bolluk, verim 2- Uğur, talih
OPAK: (Apak) Temiz, bakımlı
OPAN: Mağara, delhiz
OPÇIN: (Apçın,afşın) Zırh, demirağ
OPUR: Obur, iştahlı
OPUZ: Katı,sert
OR: 1- Yer, durak, bölge 2- Doğramak, biçmek 3- Mevki, mertebe 4- Düzen, kuruluş
ORAK: Doğramak, kesmek, doğrayıcı, biçici
ORAN: 1- Taht, şeref makamı 2- Yüksek mevki, yüksek derece
ORAY: birl. Or/Ay 1- Aynı, eşit, eş değerde (Kırgızlarda) 2- Fırsat, hamle
ORAZ: (Uraz, uras, ıraz) Şeref, onur, talih
ORÇUN: 1- Kesici, keskin, doğrayıcı 2- Bölge, vilayet 3- Onurlu, ahlaklı, iyi huylu
ORDA: Orta, merkez (Kağan veya Han otağının bulunduğu yer)
ORDU: (Orda) 1- Orta, çekirdek, merkez 2- Silahlı ve düzenli topluluk
ORDUCA: 1- Ordu ile ilgilenen 2- Ortaca, ortanca
ORGA: Bayrak, flama
ORGARUN: 1- İstihkam 2- Bayraklı, bayrak sahibi
ORGİR: Kesici, biçici
ORGUN: Sırdaş, sır saklayan, ketum
ORHUN: Sır saklayan, sırdaş, gizli, gizemli
ORMAG: Doğramak, biçmek
ORMAN: Ağaçlık, bölge
ORMUŞ: Doğrayan, biçen
ORNAK: 1- Taht, tahtırevan 2- yer, yöre
ORPAG: Menşe, kök, nesep
ORTAÇ: 1- Ortadaki, ortanca 2- Ilımlı, dengeli
ORTAÇI: Ilımlı
ORTAĞ: Ortak, ortalama, ortada buluşma
ORTUG: Ortak, pay sahibi
ORUK: 1- Yol, eylem, gidişat 2- Çare, çözüm, imkan, uygunluk
ORUM: Mera, otlak
ORUN: 1- Makam, mevki, özel yer, şerefli yer, taht 2- Karargah, görev yeri
ORUNÇ: Hediye, bahşiş
ORUNÇAK: 1- Oya, işleme 2- Rehin, emanet
ORUNDUK: Koltuk, iskemle
ORUNGULUK: Bayrak, flama
ORUNLUG: Taht, makam
ORUNTAG: Yüksek mevki, makam
ORUS: 1- Talih, uğur, baht, mutluluk 2- Amaç, hedef
OSKAY: 1- Hamarat, işgüzar 2- Neşeli, şen
OT: 1- Ateş, ocak, ev 2- Nebat, bitki OTACI: (Utacı) 1- Doktor 2- Eczacı, ot ve bitkilerden ilaç yapan kişi 3- kam, baksı
OTAĞ: 1- Oda, içinde ateş yakılarak oturulabilen büyük ve geniş çadır 2- Yeni evlenenlere armağan
edilen ev, çadır
OTAĞA: birl. Ot/Ağa ..evin reisi, aile reisi, evde sözü geçen kişi
OTAK: Yeni evlenenlere armağan edilen ev, çadır, oda
OTAMIŞ: Doktor, hekim
OTANCAK: İlaç, merhem, deva
OTAR: Geçici, fani
OTÇİGEN: birl. Ot/Çigen (“Ot/Tigin” adının , Moğol ağzındaki söylenişi.)
OTGUN: Kabadayı.
OTKUN: Kabadayı.
OTLUĞ(K): Ateşli
OTMAN: Ailenin en küçük oğlu. Ocağın ateşini yakıp ısıtacak ve devamlılığı sağlayacak olan, Çok eskilerden beri süregelen,Türk töresince çocuklar arasındaki paylaşımlarda ev , en küçük çocuğa kalır. Bu yüzden ilerde evin yada mülkün idaresi küçük oğlandadır. Yani, ocak,onunla yanmaya devam edecek,aile oba yada oymağın yaşamı onun sayesinde sürecektir. Bu çocuklara içeren ”Otman,Ot Tigin,Othan” vb. adlar verilir. Osmanlı devletinin kurucusu ve ilk hanı. Ertuğrul Beğ’in en küçük oğlu. Daha Ertuğrul Bey ölmeden,Töreye göre,birçok mal mülk, büyük çocuklara, beylik, en küçük olan Otman (bilinen diğer şekliyle Osman)’a geçmişti.
OTMAR: Ateşli, ateş saçan
OVAT: Düzgün, muntazam
OVLAZ: Gözü pek, atılgan
OVMAÇ: El ile yoğrularak yapılan yiyecek
OY: 1- Düşünmek, düşünce, fikir 2- Çukur
OYA: 1- Oyularak yapılan elişi, işleme 2- Emanet, rehin 3- Sempatik, minyon
OYAN: 1- İman, inanç 2- Düşünce, efkar
OYAZ: Çukur, kuyu
OYBAK: Çukurlu vadi
OYBAT: Oyuk ve çukurlu yer
OYGAK: 1-Oya, rehin 2- Uyanık, müteyakkız
OYGUR: Dere yatağı, dere oyuğu
OYINLI: Düşünceli, efkarlı
OYLUM: 1- Çukur, kuyu, boşluk 2- Kurucu, kuruntu, yormak
OYMAK: Yığın, kitle. Türklerin sosyal birimleri içindeki sıralamada, Obadan büyü Boy’dan küçük olan akrabalar topluluğu
OYMUR: Dere, dere yatağı
OYNAK: Maral, ceylan, vb. Hayvanların bir arada olup su içtikleri kuyu, su birikintisi
OYRAM: Girdap, anafor
OYRAT: Derin, oyuk, derinleşmiş
OYTUN: Kutsanmış, mübarek
OYUR: Vücut, endam
OZ: İleri, ön, önde
OZA: Kadim, eski, ezeli, hep var olan
OZAĞI: Tecrübeli, bilgili, uzman
OZAMIŞ: Uzamış, uzman, usta işinin ehli OZAN: (Uzan) Öncü, herkesin önünde olup hitap eden, şiir yazan ve okuyan, kopuz çalarak şiir okuyan ve yazan. Usta, işinin ehli
OZAR: Uzman, usta, bilir kişi
OZGAN: Kademeli, dereceli, öncelikli
OZMAN: Uzman
OZMUŞ: Uzmanlaşmış, yetik
OZUL: Esas, kaide
OZUT: İkamet, ikametgah
OZUTGAN: İleride, ilerici
ÖBEK:Küçük grup, tim, takım, parça
ÖBGE: Ced, Ata, Soy
ÖCAL: birl. Öc/Al intikamcı
ÖCEK: 1- Esinti, hafif yel 2- Burç
ÖCÜT: İntikam, öç
ÖDEM: 1- Borç, bakiye 2- Ödül, mükafat
ÖDEMİŞ: 1- Eczacı, doktor 2- Ricacı, yakaran 3- Borçsuz, bakiyesiz 4- Ödül veren ÖDEN: 1- Ricacı, duacı 2- Ödül
ÖDGÜLMÜŞ: 1- Övülmüş, övülen, başarılı, ödül almış 2- Ricacı, duacı
ÖDGÜR: Uygun, yerinde, vaktinde
ÖDRÜM: Seçkin, mümtaz
ÖDÜGET: Ricacı, yakarıcı, duacı
Yakutlarda, “ Akarsular Tanrısı”
ÖDÜK: Rica, yakarı, dua, niyaz, arzu
ÖDÜL: 1- Usluluk, akıllılık 2- Yüceltme, ululama, mükafat
ÖDÜN: 1- Ödeme, ödeyiş 2- Yakarış, niyaz
ÖDÜŞ: Vakit, devir
ÖG: (Ok) Ana, anne, yaratan, doğuran
ÖDGÜL: Övülme, övünç kaynağı, övülme nedeni
ÖGE: (Öke) Dahi, çok zeki, çok akıllı
ÖGEÇ: İki yaşına gelmiş koç
ÖGEL: 1- Zeki, akıllı, aklı başında 2- Burç
ÖGET: 1- Akıl, zeka, akıllılık, 2- Sevgi, muhabbet
ÖGİR: Sevinç, neşe, eğlence
ÖGLÜ: Dahi, çok akıllı
ÖGREDİK: 1- Mürebbiye, eğitmen, yetiştirici, öğretmen 2- İdman, talim, antrenman
ÖGRÜ: 1- Öğrenilecek olan 2- Arkadaş, refik
ÖGÜŞLÜ: Övülen, methedilen, övülmeye layık
ÖGDÜ: Övme, methiye
ÖGDÜM: 1- Övülen, methedilen 2- Önce, öncelikli
ÖĞER: Övücü, methedici
ÖĞLEŞ: Akıl birliği, fikir birliği
ÖĞREK: Toplantı yeri, cemiyet , dernek
ÖĞREN: Öğrenmekten
ÖĞRET: Gelenek, terbiye
ÖĞREYÜK: Gelenek, görenek, terbiye
ÖĞRÜK: Munis, cana yakın, el üstünde tutulan
ÖĞRÜNÇ: 1- Deneyimli, bilgili, öğrenmiş, ders almış, yetişmiş 2- Hoşnutluk, memnuniyet
ÖĞTÜ: Metih, övme, ululama
ÖĞTÜR: Övme, methedici
ÖĞÜÇÜ: Övücü, methedici
ÖĞÜLMÜŞ: Başarılı, destekli, övülmeye layık
ÖĞÜN: 1- Öğünmek..ten öğün 2- İtina, dikkat 3- Sıra
ÖĞÜNÇ: Övünç, iftihar, övünme gerekçesi, iftihar vesilesi
ÖĞÜNÇEK: Öğünmeye değer, öğünme nedeni
ÖĞÜNMÜŞ: Övünmüş, övünmeyi hak etmiş, gururlu
ÖĞÜNÜR: Gururlu, mağrur
ÖĞÜR: Över
ÖĞÜT: 1- Anlayış, kavrayış 2- Nasihat, tavsiye, deneyim aktarımı
ÖK: (ög) 1- Öz, doğuş, oluş, gelişme 2- Zeka, bilme, us, yetenek, ana, doğuran
ÖKÇİ: Okeci, çağırıcı, davet edici, davetiye veren kişi
ÖKÇÜR: Zeki, anlayışlı
ÖKE: Dahi, yanılmaz, bilge, çok akıllı
ÖKER: Dahi, süper zeka
ÖKERMAN: Dahi, bilge, yanılmaz
ÖKLÜ: 1- Dahi, akıllı 2- Egemen, denetimci
ÖKSÜM: Arzu, murat
ÖKSÜZ: Desteksiz, arkasız, oluşumsuz, gelişmeye engel durumu olan, (Halk arasında, anası olmayan, ölen ya da ayrı olan çocuklar için de bu adın kullanılmasındaki neden, ananın, çocuğun yetişme ve gelişimindeki önemine atfendir.)
ÖKTE: 1- Ökeli, akıllı, dahi, yanılmaz, deneyimli, bilgili 2- Azametli, gösterişli
ÖKTEM: 1- Akıllı, bilge 2- Asi, başına buyruk, pervasız 3- Meşhur, gösterişli 4- Bahar, ilk yaz
ÖKTEN: 1- Akıllı, bilinçli 2- Kahraman, cesur, korkusuz, başına buyruk
ÖKÜÇ: 1- Çok, çokluk, bolluk 2- Akıl, us, bilinç
ÖKÜN: Kendine dönüş, öze dönüş
ÖKÜNMÜŞ: Özüne bağlı, özüne dönen
ÖKÜŞ: 1- Çok, çokluk, bolluk, bereket 2- Akıl, bilinç, bilinçli
ÖKÜŞ KARA AÇKI: birl. Öküş/Kara/Açkı mec. Keskin zekalı
ÖKÜZ: 1- Irmak, nehir, büyük akarsu 2- Uzman, bilge, ehil, dahi
ÖLÇER: 1- Mühendis 2- ağırbaşlı, ölçülü 3- Savaş buyruğu, saldırı buyruğu
ÖLÇÜM: 1- Adap, usul, erkan, yol 2- Ağırbaşlılık
ÖLMEZ: 1- Dirayetli, dayanıklı 2- Çok sevilen, unutulmaz, iz bırakmış
ÖN: 1- Doğu, güneşin doğduğu yön 2- İlk, başlangıç, doğuş, meydana geliş 4- İlke, öncelik, prensip,temel ÖNAL: birl. Ön/Al Öncü, lider, önde olan
ÖNALAN: birl. Ön/Alan, lider, öncü
ÖNALDI: birl. Ön/Aldı, lider, öncü
ÖNCEK: Önce, önceki, selef
ÖNCEL: 1- Selef, daha önceki 2- Önde olan, öncü, rehber 3- Öncelikli, imtiyazlı
ÖNCELİK: İmtiyaz, torpil
ÖNCÜ: 1- İlk, orijinal 2- Lider, yol açan, önde olan
ÖNCÜL: 1- Öncü, önde, rehber 2- Birinci, ilk
ÖNÇEK: Önceki, önceki, selef
ÖNDAŞ: Aynı öncelikte, aynı imtiyazı paylaşan
ÖNDE: Öncü, önceki
ÖNDEGÜN: birl. Önde/Gün 1- Önemli gün 2- Önceki gün
ÖNDER: Önde olan öncü, lider
ÖNDEŞ: Yol açan, rehber, mihmandar
ÖNDÜÇ: Öncü, mihmandar
ÖNDÜL: 1- En önde, en öndeki, öncü 2- Öncelik, imtiyaz
ÖNDÜN: 1- Peşin, peşinat 2- Önde, önde gelen
ÖNE: İleri, ileride, ötede
ÖNEK: Dayanak, direk, destek
ÖNEL: 1- Usta, uzman, pir 2- Vade, mühlet
ÖNEM: Öncelik, imtiyaz, değer, kıymet, hassasiyet
ÖNEN: 1- Önde olan, öne geçen 2- Bağlılık, sadakat
ÖNER: birl. Ön/Er Öncü, rehber, kılavuz
ÖNEY: 1- Öne geçen, önde gelen 2- Yükseklik
ÖNG: İlk, birinci, başta gelen
ÖNGEL: 1- Ağırbaşlı, olgun 2- Öncü, öncülük eden
ÖNGEN: 1- Zafer, utku 2- Uzun boylu, levent
ÖNGER: Hiddetli, asabi
ÖNGİ: (Öngü) 1- Değişik, farklı, sıra dışı 2- Önce, öncelikli
ÖNGÜÇ: 1- Öncü, kılavuz 2- Atak, atik, hareketli 3- Delil, kanıt, ispat
ÖNGÜK: Yastıkların ucuna yapıla işleme
ÖNGÜL: Yol gösteren, ön ayak olan
ÖNKUZU: birl. Ön/Kuzu mec. Kurban, kurbanlık
ÖNÜÇ: Önce, önceki, selef
ÖNÜM: 1- Birinci, ilk 2- Hasılat, ganimet, kar
ÖNÜR: Başlangıç, siftah
ÖNÜRT: Önce, öncelik
ÖNÜT: Önce, öncelik
ÖPGİNE: Öpücük, buse
ÖPKE: İç geçirme, öfke, hırs
ÖPÖZ: Can, ruh, nefs
ÖRÇÜM: Üreyiş, gelişim, büyüme
ÖRÇÜN: İpten örülmüş merdiven
ÖREN: 1- Örme yapan, örücü 2- Eskiden kalma kalıntı, kalıntı kent ya da mezar
ÖRGE: 1- Örnek, motif, örgü örneği 2- Şahika, yükseklik
ÖRGEN: 1- Örülü ip, urgan 2- Keçi kılından yapılan ip
ÖRGÜÇ: 1- Dokuma aleti, dokuma tezgahı 2- Mevki, mertebe 3- Tümsek, tepe
ÖRİKLİ: Şeciyeli
ÖRKEN: 1- Urgan, örülü ip 2- Fidan
ÖRKİN: 1- Fidan 2- Taht, tahtırevan
ÖRNEK: Numune, standart, ölçü
ÖRPEN: 1- Örtülü, kapalı, gizli 2- Alev, alev ışığı
ÖRS: Üzerinde metal maden dövülen demir kütle mec. Dayanıklılık
ÖRTE: Örtü, örtülü
ÖRTGÜN: Samanı ayrılmış, harmanlanmış tahıl
ÖRTÜN: Omuz üstüne alınan örgülü giyecek, pelerin
ÖRÜÇ: Örgü malzemesi, dokuma tezgahı
ÖRÜM: Çit, ağıl
ÖRÜN: 1- Saç örgüsü, belik 2- Beyazlık, temizlik 3- Gökyüzünün bulutsuz hali 4- Ürün, hasılat
ÖRÜNDÜ: Arı, temiz, saf, pakize
ÖRÜNDÜL: 1- Seçkin, güzide 2- Saf, temiz, pak
ÖS: Gerçek, hakiki
ÖSRÜK: 1- Mert, özü sözü bir 2- Esrik, kendinden geçmiş
ÖSTERİŞ: Fantezi, hayal, fantastik
ÖTER: 1- Ricacı, yakaran 2- İleri, ileri geçmiş 3- Çığırıcı, ötücü, okuyucu
ÖTGEN: Geçmiş, aşmış, ötede olan
ÖTGÜR: Delici, delip geçen ÖTİLİG: İtibarlı, saygıdeğer, muhterem
ÖTKER: 1- Ricacı, duacı 2- Geçici, fani
ÖTNÜ: Rica, yakarı, istirham
ÖTÜG: (Ötük) Arz, niyaz, rica, dua, dilek
ÖTÜGEN: (Ötüken)
ÖTÜKEN: 1- Ricacı, duacı, niyazcı, Tanrıya yakaran 2- Geçmiş, mazi, onurlu ve övünçlü mazi
ÖTÜN: 1- Ödün, verme, bağış, mağfiret 2- Yakarı, yalvarış, niyaz
ÖTÜNÇ: 1- Rica, dilek, maruzat, istirham 2- İltimas, tarafgirlik
ÖVET: Övüş, övgü
ÖVGÜ: Övme, methetme
ÖVGÜN: Övülen, övülmeye layık
ÖVÜÇ: Övünç, iftihar
ÖVÜL: Övülen, övülmeye layık
ÖVÜNÇ: Övülmeye yol açan davranış, gurur ve onur kaynağı
ÖVÜT: Öğüt, nasihat
ÖYKE: Öfke, hiddet, hınç
ÖYKÜ: 1- Taklit, benzeme, benzetme, 2- Hikaye
ÖYKÜNÇ: Eğilim, benzeme, taklit etme eğilimi
ÖYLEK: Zaman, devir
ÖYÜK: Coşku, coşkunluk, tezahürat
ÖZ: Kişinin “ben” derken, anlatmak istediği, tinsel varlık. 1- Ben, tin, can, ruh, gönül 2- Asıl, esas,temel, unsur 3- Şahsi, kişisel, kendi, kendine aitlik 4- Uz, uzluk, ustalık 5- Dere, ırmak
ÖZAK: birl. Öz/Ak mec. Soylu
ÖZBEK: birl. Öz/Bek mec. Cesur, kendine güveni tam
ÖZBİR: birl. Öz/Bir mec. Soylu
ÖZDEK: 1- Madde, temel, asıl, yapı, kuruluş, oluş, oluşum 2- Beden, vücut 3- Ağacın, köküne yakın olan kısım
ÖZDEL: 1- Soylu 2- Armağan, hediye
ÖZDEN: 1- İçten, samimi 2- Ender rastlanan, olağanüstü 3- Akraba, hısım 4- Armağan, hediye
ÖZEK: 1- Temel, asıl, üs, merkez 2- Can, ruh, gönül
ÖZEL: 1- Ayırt, fark, farklılık 2- Uzman, usta, kalifiye 3- Kişiye özgü, kişisel
ÖZEN: 1- İçten, samimi 2- Dikkat, itina, emek, heves 3- Irmak, küçük akarsu
ÖZENÇ: 1- Gıpta, heves 2- Direnç, gayret, dik başlılık
ÖZERK: birl. Öz/Erk Kendine egemen, kendine sözü geçen
ÖZGE: Ben’in karşıtı. Başka, öteki, yabancı, ,gayrı
ÖZGEL: Öze ait, özden gelen, samimiyet
ÖZGERİŞ: 1- Hayal, kurgu, fantezi 2- Devrim, başkaldırı
ÖZGÜ: Öze ait, özle ilgili, ait, has, mahsus
ÖZGÜN: Öze ait, özüne ait, orijinal, kendine has
ÖZGÜR: Hür, bağımsız, kendinden başkasını dinlemez
ÖZGÜVEN: birl. Öz/Güven Cesaret, kendine güvenme, kendinden emin olma, kendinden bilgi, beceri ve konumundan kuşku duymama
ÖZİ: Fert, Şahıs
ÖZİÇ: Varlık, şahsiyet
ÖZİL: birl. Öz/İl mec. Anayurt
ÖZKER: 1- Ulu ruhlu kişi 2- İyilik sever, hayırsever
ÖZKONUK: Can, ruh
ÖZLEK: 1- Üretken, münbit 2- Felek, talih 3- Özel, şahsi, kişisel
ÖZLEM: 1- Öz’ün ilgisi, ilgi duyarak yönelişi, hasret 2- Özel, hususi, kişisel
ÖZLEN: 1- Özlenen, aranan 2- Dürüst, özü sözü bir 3- özel, hususi, kişisel
ÖZLEŞ: Kendine dönüş, kendinden veriş
ÖZLÜ: Orijinal, sağlam
ÖZLÜK: Şahsi, özel, kişisel
ÖZMEN: Dürüst, özü sözü bir
ÖZRÜM: Seçkin, seçilmiş
ÖZÜÇ: Vücut, gövde, endam
ÖZÜM: Kendine katma, kendine çekme, kendinden yapma
ÖZVEREN: birl. Öz/Veren mec….Fedakar, fedai
ÖZVERİ: birl. Öz/Veri …Fedakarlık
PARS:Leopar
PARSAK: 1- Acıma duygusu, merhamet 2- Porsuk PAŞA: Baş komutan, general. ( Bu sözcük, bazı dilbilimcilerimize göre, Baş-Şad, bazılarına göre de Baş- Ağa birleşimi ve zamanla ağız değişimiyle bu biçime gelmiştir.
PEÇEN: Çayır, çimen, çayırlık, otlak
PEÇENEK: 1- Otlak, çayırlık 2- Bacanak
PEK: 1- Berk, katı, sıkı, sert, kuvvetli, dayanıklı 2- Bey sözcüğünün, değişik ağız ayrılığı Bek, beg,beğ, bey vb.
PEKİŞ: Sıklık, sertlik, pekişmişlik
PELEN: İyi, ehven
PELİN: Acı ve keskin kokulu bir yayla çiçeği
PELİT: Meşe ağacının çiçeği
PERİNÇEK: (Berincek) 1- Sadık, içten bağlı 2- Fedakar
PINAR: Kaynak, kaynarca, göze
PIŞGAN: Olgun, pişkin
PİŞKİN: Olgun, pişmiş
PUSAT: (Busat, basat) 1- Silah 2- Zırh, koruyucu
PUSUG: Pusu
PUSUN: Pusu, pusma, sinme
PUSUNÇ: İltica, sığınma, sinme, pusma, sığınmış, mülteci
PÜSKÜL: Sarkık, asılı duran süs, aksesuar
SABA:(Sava) 1- (Sapa, sopa) Sopa, değnek, savma aleti, savaş aleti 2- Söz, iddia, hitap
SABACI: 1- Sopacı, sopayla dövüşen 2- Konuşmacı, hatip
SABAK: (Savak) 1- Sopa, cop sopa kullanan, dövüşçü, sopa ile dövüşen 2- Kımız saklamak için beygir
derisinden yapılan tulum
SABAR: 1- Sapar, savar, döver, sopayla döven 2- Savar, savaşır, savaşçı 3- Hatip, konuşmacı
SABI: 1- Sopa, cop 2- Savaş, dövüş 3- Söz, sohbet
SABU: 1- Sopa, cop, değnek 2- Savaş, dövüşçü, dövüş ustası, savaşçı
SAÇA: Saçı, bahşiş, armağan
SAÇAN: 1- Cömert, dağıtan, harcayan 2- Yayıncı, yayın yapan
SAÇI: 1- Armağan, bahşiş 2- Adak, inanç gereği dağıtılan nesne
SAÇILIK: Armağan, hediye, bahşiş
SAÇUK: 1- Eli açık, cömert 2- Armağan, bahşiş 3- Aleni, saklısız, gizlisiz
SADAK: Okların, içinde muhafaza edildiği torba ok torbası
SADU: İyi, çok iyi, ala
SAGAY: 1- Düşünceli, Düşünen, sakınan 2- Özleyen, özlemiş, özlem oymaklarından
SAGIM: 1- Emel, arzu, Murat 2- Düşünce, fikir, düşünceli, fikir sahibi 3- Sağlamlık,dayanıklılık
SAGIN: 1- Özlem, hasret 2- Düşünce, plan, tasarım 3- Davet 4- Kıvılcım
SAGINÇI: Sagınan, düşünen, özleyen, sakınca duyan
SAGU: Ağıt, mersiye
SAGUNDU: Özlenen, düşünülen, kollanan
SAGUNDUK: Özlenen, düşünülen, özlemeye değer
SAGUNUR: Düşünce, tasarım
SAĞ: 1- Sağlık, dirilik, canlılık, yeterlilik 2- Akıl, fetanet 3- Doğruluk, inanırlık 4- Halis, saf, net
SAĞ BİLGE: birl. Sağ/Bilge Doktor, sağlık uzmanı
SAĞAN: Doğan türü, yırtıcı avcı bir kuş
SAĞANAK: Sağanak, sert ve hızlı yağan yağmur
SAĞANÇIĞ: Nefs, can, ruh
SAĞBİLİ: birl. Sağ/Bili (Bilig) Sağduyu, hikmet
SAĞDAÇ: Sağlıklı günlerin arkadaşı, can yoldaşı
SAĞDIÇ: Sağdaç “ Damadın en yakın, en güvenilir arkadaşı”
SAĞIK: 1- Düşünceli, planlı 2- Sağ, diri, uyanık 3- Ateş, kıvılcım, ateşli
SAĞIM: 1- Yaşam, sağlık 2- Serap, algın
SAĞIN: 1- Düşünce, tasarım 2- Özlem 3- Ateş, kıvılcım
SAĞINÇ: 1- Kurgu, hayal 2- Sakınca, mahsur, endişe 3- Özlem
SAĞIŞ: Hesap, matematik, sayış
SAĞLAM: Sağlıklı, güçlü, dayanıklı, dirençli
SAĞLI: (Sağlık) Diri, canlı, sağlıklı
SAĞLICA(K): Sağlıklı, diri, esenlikli
SAĞMAN: Sağlıklı, güçlü
SAĞNAK: (Sağanak)
SAĞRAK: İçki içilen kap, kupa, kadeh
SAĞRI: 1- Sağrak 2- Sarı SAĞUNÇAK: Ağıt, mersiye
SAĞUNMUŞ: 1- Özlem içinde olan 2- Düşünen, düşünceli 3- Davet eden, davetkar
SAKA: 1- Akıllı, arif 2- Düşünceli, kaygılı 3- Sakal 4- Saklı, saklayan, koruyan
SAKAR: 1- Alnında beyaz lekesi bulunan at 2- Uğursuz, sakıncalı
SAKÇI: Koruyucu, muhafız
SAKIK: Çoban yıldızı
SAKIN: 1- Düşünme, tasarım, kaygılanma, kaygıyı ortadan kaldırma eylemi 2- Saklama,
koruma,esirgeme 3- Uzaklaşma, ayrılma
SAKINÇ: Düşünce, kaygı
SAKIŞ: Kaygı, endişe
SAKLI: 1- Korunmuş, mahfuz, esirgenen 2- Zinde, dinç, sağlıklı
SAKLICA: 1- Gizli, örtülü, korunan 2- Hazine, mücevher
SAKLIÇAK: 1- Gizli, gizlenmiş, örtülü 2- Yaşam, sağlık, esenlik
SAKMAN: 1- Uyanık, diri, sağlam 2- Sokman, dize kadar çıkan çizme
SAL: 1- Saldırı, saldırmak 2- Salmak, bırakmak, azat etmek, serbestlik 3- göndermek,
yaymak,ulaştırmak, uzatmak
SALAÇAK: Salınan, bırakılan, salınmış
SALACUK: Saldıran, saldırıcı, gönderici
SALAMAN: Salınan, bırakılan, azat edilen, serbest, azade
SALAMIŞ: 1- Saldıran, düşmana karşı hamle ve manevra yapan 2- İyi kılıç sallayan, silahşor 3- Salmış, köle azat etmiş
SALANÇU: Saldırgan, iyi kılıç kullanan
SALAR: 1- Ordu sevk eden 2- İyi kılıç kullanan, silahşor
SALÇI: 1- Salıcı, sevk edici 2- Salan, serbest bırakan 3- Karahanlılar döneminde, saray aşçılarının unvanlarından
SALÇUK: 1- Salınmış, azat edilmiş, saltuk, eski köle 2- Başına buyruk, bağımsız, otoriteye karşı çıkan 3-
Saldıran 4- Silahşor, iyi silah kullanan 5- Küçük yel, esinti 6- Haber salan, mesaj yollayan
SALDIRAN: Hücum eden, asker sevk eden
SALDIRGAN: Saldırıcı, hücumcu
SALDIRI: Hücum, taarruz
SALDIRMIŞ: Hücum etmiş, taarruz etmiş
SALDUR: Saldırı
SALGARA: Salınmış, azade, başına buyruk, otorite tanımaz
SALGIN: 1- Serbest, bağımsız 2- Serap, hayal
SALGUR: Atak, tetik, saldırmaya hazır
SALGUT: Mebus, vekil. Eskiden bir bölgeyi temsilen, Kağan’a (Başkente) gönderilen kişilere verilen unvan
SALIK: 1- Vergi, vergi borcu, haraç 2- Haber, öğüt, tavsiye
SALIKÇU: Haberci, öğütçü
SALIM: 1- Serin esen yel, serinlik 2- Ferman, emirname 3- Üzüm demedi, salkım
SALIN: 1- Serbest, serbestlik, salınma, boy gösterme 2- Jest, eda 3- salıncak
SALINMIŞ: Serbest, azade, salaman
SALKIM: Salınmış, sarkık
SALTUK: 1- Serbest bırakılmış, azade, hürriyetine kavuşmuş eski köle 2- Başına buyruk, bağımsız
SALTIN: Yalnız, yalnızlık içinde, tek kalmış
SALUK: (Salık) Serbest, azade, hürriyetine kavuşmuş
SALUM: 1- Özgürlük, azat 2- Kılış, silah
SALUN: 1- Jest, mimik, eda, cilve 2- Boy gösterme, ortaya çıkma
SALUNDU: 1- Özgür, hür 2- Edalı, boy gösteren
SALUR: 1- Saldıran, saldırgan, asker salan 2- Silahşor, iyi silah kullanan 3- Saldırma, kılıç, silah 4- Serbest, azade
SAMSA: Baklava türü bir hamur tatlısı
SAMUKA: İnatçı, dirençli
SAN: Sanmak, saymak, var kabul etmek
SANAGA: 1- Serap, hayal 2- Niyet, maksat
SANAĞ: Hesap, matematik
SANAK: Matematik
SANÇAK: Ucu sivri mızrak
SANÇAR: Saplayan, batıran, dürten, mızrak kullanarak sançan, sançıcı, iyi silah kullanan
SANÇI: 1- Ucu sivri demir, silah 2- Sivri bir aletin, vücuda değince verdiği acı 3- Acı duymak 4- Hayalet
SANÇIĞ: Ucu sivri demir, kargı
SANÇIŞ: Hamle, kılıç veya kargıyla yapılan dürtüş
SANDUGAÇ: Bülbül
SANEK: Hayran, meftun
SANG: San, düşünce var sayma
SANGI: Hayal, serap SANIR: 1- Hayal 2- Burç
SANKUR: Hayret, şaşkınlık
SANLAV: Hürmet, saygı
SANLI: 1- Sanıcı, düşünücü 2- Şüpheci
SANSAK: Anlayış, intiba
SAPA: 1- Sopa, değnek 2- Kılıç sapı, kabza 3- Aykırı, farklı, başka
SAPAK: 1- Sopa 2-Aykırı, aykırılık
SAPAR: 1- Sabar, döver, dövücü 2- Aykırı, farklı 3- Kabza
SAPURLUŞ: Devrim, ihtilal, ayaklanma, ayrılma
SARAR: Saran, sarıcı, sarma eyleminde olan, ören, örücü
SARGIN: 1- Sevimli, sempatik, çekici 2- Sargı, sarılı, örülü
SARGUT: 1- Güneş ışığı 2- Bağış, ihsan
SARI: 1- Sarı renk, sarışın 2- Sarılı, sarılmış, saran, sarılma
SARICA: Sarılı, sarı gibi, sarıya çalan
SARIG: Sarılı, sarılmış, örgülü
SARIL: Sarılmaktan…sarıl, mec. Sevgili, saygılı, cana yakın
SARIM: 1- Suyu süzmeye yarayan, ince dokuma 2- Sarma, sarılma
SARIP: Sarp, dik, sarılı, çıkılması güç, yalçın
SARMAN: (Sarıman) 1- Sarışın, sarıya çalan 2- Sıcak kanlı, cana yakın
SARMAŞIK: Sarılı, sarpa sarmış, sarılan
SARTIK: 1- Sarılı, örgülü, örülmüş 2- Farklı, dikkat çekici
SARU: 1- Sarı 2- Sıra dışı, farklı, dikkat çekici 3- Batı, batı yönü
SARUCA: 1- Bir sungur türü avcı kuş 2- Sarıya çalan, sarışın
SARUL: Sarılı, sarılmış
SATI: 1- Satık, satuk, satılmışın dişisi 2- Pazar yeri (Eski Türk geleneklerine göre, çocukları sık ölen ya da olmayan ailelerin, çocuğu olduğunda, yaşaması ve uzun ömürlü olması için, onu Tanrı’nın sevdiği, toplumun sevip saydığı, bir ulu kişiye ya da onun ruhuna, çocuğu koruması, manevi bir destek vermesi bakımından emanet edilmesi eylemine satma-satılma adı verilir. Çocuk erkekse, “Satılmış”, kız ise “Satı” adı verilir. )
SATIÇ: 1- Satıcı, tüccar 2- Mertebe, rütbe
SATIM: 1- Satıcığım 2- Ticaret
SATIŞGAN: Satıcı, tüccar
SATUK: Satı, satık, satılmış
SATUN: Satın alma, satın alma gücü, paha
SAV: (Sava) 1- Mesaj, haber, yeni haber 2- İddia- isnat 3- Ün, san 4- Savaş, vuruşma, dövüş 5-Öykü, atasözü, darbı mesel
SAVA: (Sav)
SAVACI: (Savcı)
SAVAN: 1- Savıcı, savaşçı, def edici 2- Elçi, arabulucu
SAVAR: Savaşçı, savıcı, defedici
SAVARU: 1- Bahşiş, armağan 2- Geçici, muvakkat
SAVAŞ: Harp, döğüş, vuruşma, savma, defetme
SAVAŞGAN: Savaşçı, cengaver
SAVÇI:(Savcı, savacı)1- Elçi, haberci, resul, sözcü 2- Savaşçı, cengaver 3- Ünlü, meşhur, ün salmış
SAVDUK: Uğurlama, veda
SAVGAT: Armağan, bahşiş
SAVGU: 1- Haraç, vergi 2- Şifa, derman
SAVRIN: 1- Armağan, bahşiş 2- Ahd, azim
SAVRUK: Savrulmuş, derbeder
SAVTUR: Veda, uğurlama
SAVUN: 1- Davet, çağrı 2- Savunma, savaş 3- Ağıt, mersiye, ölenlerin yiğitlik ya da hayırlı işlerini anlatmak için verilen yemek
SAVUNDUK: Davetiye
SAVUNGAN: Savunucu, savaşan, direnen, müdafi
SAVUR: Eli açık, cömert, hovarda
SAVURKAÇ: 1- Savurgan, hovarda, eli açık 2- Fırtına, katı yel
SAVUT: 1- Koruyucu, koruyan, müdafi 2- Zırh, çelik yelek, demirağ
SAY: (sag, sağ, sak, sayı) 1- Saygı, sayma, geçerli kılma 2- Düşünme, ölçme, seçme, tasarım, hesap, ödeşme 3- Taşlık yer 4- Zırh, göğüslük
SAYAK: Saygılı, hürmetli
SAYAN: 1- Saygılı, saygıdeğer, saygıya layık 2- saygı gösteren, efendi, ağırbaşlı
SAYDAM: Saf, net, berrak, sayılabilen, açık, temiz, bilinen
SAYDUR: Saygı duruşu, ihtiram duruşu
SAYGI: 1- Hürmet, önem, değer, edep 2- Sayı, sayım, matematik
SAYGIN: İtibarlı, hürmet gören, saygı gören, hatırı sayılır
SAYIL: Seçilmiş, seçkin, sayılan SAYILGAN: Sayılan, saygı gösterilen,muteber
SAYIM: Saygı, saygı gösteriş
SAYIN: 1- Seçkin, değerli, muteber, güzide, muhterem 2- Saf, halis, arı 3- Güzel, ender rastlanan
SAYINDI: Saygı duyulan, itibar gören, muhterem, saygın
SAYIR: İçinden su çıkan mağara
SAYIŞ: Ödenek
SAYIT: Saygın, muteber
SAYLAK: Sayılan, takdir gören, usta, uzman
SAYLIK: Şeref, haysiyet, onur
SAYMAN: Sayıcı, hesapçı, hesap ve sayı uzmanı
SAYRI: Üzgün, mahzun, yorgun ilgisiz
SAYVAN: Gölgelik, kamelya
SAZAĞAN: (Sazan) Soğuk yel
SAZAK: 1- Sazlık, bataklık 2- İnce yağan kar 3- Ak bulut 4- Çok konuşan, geveze 5-Poyraz, soğuk esen yel 6-Sezgin, sezici, uyanık
SAZAN: 1- Soğuk esen yel 2- Sazlık, bataklık 3- Sezen, sezici
SEBE: Sevgi, sevi
SEBÜK: Sevik, sevilen, sevgi gören
SEÇEN: 1- Titiz, seçici, ayırıcı 2- Konuşkan, hoş sözlü
SEÇİL: 1- Seçkin, güzide, seçilmiş 2- Farklı, olağanüstü
SEÇİLİR: Seçkin, güzide
SEÇİLMİŞ: Seçkin, güzide
SEÇKİN: 1- Farklı, göze batan, olağanüstü 2- İtibar gören, muhterem
SEGREK: Seyrek, ender rastlanan
SEĞİRTGEN: 1-Koşucu, atlet 2- Afacan, ele avuca sığmaz, tez canlı
SEĞREK: Seyrek, nadir, az rastlanır
SEKMEN: Seviye, mertebe
SELÇİK: (Seligcik) 1- Temiz, pakize, namuslu, bakire 2- Küçük kılıç, bıçak 3- Açık,beliğ, fesahatli
SELEK: Eli açık, cömert
SELEN: 1- Salınan, sallanan, kıvrılan 2- Temiz, pak, namuslu, zarif, bakire 3- Fısıltı, hafif ses 4-Haber, havadis 5- Yılan (Tuva ve Çuvaşlarda)
SELENGE: Kıvrılan, kıvrık
SELİG(Silig): 1- Namuslu, temiz, dürüst, pakize 2- Kibar, narin, zarif
SELİGÇİK: (Selçik) Temiz, namuslu, bakire
SELİN: 1- Selen, salınan, haber, fısıltı 2- Sülün kuşu
SEMİZ: 1- İri yarı, şişman 2- Besili, bakımlı
SENGER: 1- Canavar, ejderha 2- Kale, burç
SENGİ: Sevgi, sevi
SENGÜN: Ordu komutanı, general
SEPİL: 1- Yaygın, yayılmış, bulaşmış 2- Kale, hisar
SEPİN: 1- Çeyiz, kalın 2- Yaygın, yayık
SEREDAY: Yüzük, takı, aksesuar
SERİM: 1- Gösteriş, teşhir 2- Sabır, metanet
SERİN: 1- Gölge, gölgelik 2- Genişlik, gerilmişlik 3- Soğuğa yakın, hafif soğuk 4- Sabırlı, dayanıklı
SERİNGEN: 1- Serince, serinleşmiş 2- Sabırlı, dayanıklı
SEVEN: Sevmek…den sevgi sahibi, şefkatli, tutkulu
SEVERGE: 1- Dost, yakın, yaren 2- Aşk, sevgi, tutku
SEVGİ: Sevme eyleminin nüvesi
SEVİ: Sevgi, sevgi eğilimi, sevgi yakınlığı
SEVİGEN: Seven, sevgisini veren
SEVİK: 1- Sevilen, sevgi gösterilen, sevgiye layık, sevgili 2- Dost, gönüldaş
SEVİL: Sevilen, el üstünde tutulan
SEVİLGEN: Sevilen, aşırı ilgi gören
SEVİM: Sempati, alım, çekicilik- sevgiye yol açan
SEVİMLİ: Çekici, sempatik
SEVİN: Sevinç, mutluluk
SEVİNÇ: Neşe, coşku, sevinme duygusu, mutluluk
SEVİNÇEK: Sevinilecek şey, sevinç kaynağı
SEVİNDÜK: Mutluluk, bahtiyarlık (Uzun süren bir çocuksuzluk döneminden sonra, çocukları olan ailelerin
sık kullandığı, geleneksel adlardan)
SEVİNMİŞ: Sevinçli, mutlu, mutlu olmuş
SEVİNTİ: 1- Mutluluk, mutlu olmaya değen 2- Ferahlık, gevşeme, rahatlık, huzur
SEVÜK: Sevilen, sevgili, canan
SEYİRTGEN: Afacan, çalışkan, ele avuca sığmaz
SEYREK: Az rastlanır, sıra dışı
SEZEK: 1- Hassas, duygulu, ferasetli 2- Sezgi, anlayış, kavrayış, his
SEZEN: Anlayan, kavrayan, hisseden SEZER: Hassas, duygulu, fark edici
SEZGİ: İdrak, seziş, hissediş, ilham
SEZGİN: Hassas, sezici
SEZGİR: Hassas, narin, alıngan
SEZİGEN: Sezen, sezgin
SEZİK: Sezgin, içli
SEZİKLÜ: Tedbirli, sezici
SEZİM: Hissediş, anlayış
SEZİMTAL: Hassas, duygulu
SEZMİŞ: İdrak eden, anlayan
SIBAK: Sopa, değnek
SIDAL: Muktedir, güçlü, egemen
SIGUN: 1- Yabani geyik 2- Emek, zahmet, sıkıntı
SIĞIN: Erkek geyik, Ala geyik
SIĞINAK: Sıkı korunan, sığınılacak yer, yoğun ve katı olan yer
SIĞINDIK: Bağlılık, sadakat
SIĞLAM: 1- Sağlam, sıkı, yoğun 2- Sine, bağır
SIK: Katı, yoğun
SIKI: Katı, sıkılmış, yoğun
SIKILGAN: Daralmış, daralan, sıkılaşan, utangaç
SIKIN: 1- Keder, yas, üzüntü, sıkıntı 2- Ala geyik
SILIV: Temiz, pakize, bakire
SILKIM: Cesur, gözükara
SIN: 1- Deney, deneme 2- Endam, gösteriş
SINAÇI: Hakem, sınayıcı
SINAĞ: Sınav, imtihan, deneme
SINAK: Deney, sınav, imtihan
SINAUVU: Sınav, deney
SINAYÇI: Hakem, sınayan
SINÇI: Hakem, sınaçı
SINDIRAÇ: Bülbül
SIRAY: Çehre, yüz, beniz
SIRGA: 1- Küpe, takı, aksesuar 2- Armağan, bahşiş 3- Halka, halkalı
SIRGALU: Küpeli
SIRMA: Sırlı, boyalı, gümüş tel
SIYKIM: Sevgili, canan
SIYLI: 1- Sevimli, sempatik, muteber 2- Armağan
SIYLIK: Armağan, bahşiş
SIYURGAL: Armağan
SIZGIÇ: Kalem, yazgaç
SIZIM: Sızı, yakınma, hüzün
SİBEL: 1- Buluttan ayrılıp henüz yere düşmemiş yağmur tanesi 2- Buğday, buğday tanesi
SİLGİ: Arınma, temizlik, parlaklık
SİLİG: 1- Temiz, namuslu, dürüst 2- El değmemiş, bakir, bakire 3- Tatlı dilli
SİNÇE: Çehre, beniz
SİNGİL: Küçük kız kardeş
SİNGİN: Mahçup, sıkılgan
SİNKEL: İmtiyazlı, ayrıcalıklı
SİNKİL: İmtiyazlı
SİR: 1- Şeciye, soy, kök 2- Birleşik, birleşmiş
SİREK: Zeki, akıllı
SİTACU: Nazlı, narin, alıngan, hassas
SİYAVUŞ: Sevimli, sempatik, sevgiye layık
SİYENDİ: Sevilen, sevilmiş, sevgiye layık
SİYREK: Az rastlanır, seyrek bulunur
SİYUN: Sevim, sevimlilik, sempati, beğeni
SİYURAN: Utkan, muzaffer
SİYURGAL: 1- Ödül, armağan, ödül alma 2- Madalya, askeri nişan
SİYURGATMIŞ: 1- Düşmanı bozguna uğratmış 2- Başarılı, ödül ve övgü almış
SİYÜNÇ: Sevinç, mutluluk
SİZGEK: Zeki, sezgin, müdrik
SİZÜÇEN: Hassas, zeki, uyanık, akıllı
SOBAY: 1- Bekar, yalnız, münferit 2- Silahını iyi kullanan, deneyimli asker, savaşçı
SOĞAY: Sağlıklı, zinde, dinç
SOKMAN: 1- Mert, dürüst 2- Diz kapağına kadar gelen uzun bir tür çizme (Türkmen çizmesi)
SOKULAG: 1- Adak, kurban 2- Sokulgan, munis, cana yakın
SOKULGAN: Cana yakın, munis SOKUM: Kurban, adak
SOLAGAY: 1- Solak 2- Ters, hiddetli, öfkeli
SOLAK: 1- Asker yöneten, asker sevk eden (Sulag) 2- Sol el ve ayağını kullanan
SOLAŞIGLI: Yararlı, çok yararlı, iş bitirici
SOLGUN: Rengi kaçmış, yıpranmış, hüzünlü
SOLGUR: (Salgur) Atak, saldırı
SOLIN: Araştırmacı, meraklı
SOLMAGAN: Canlı, ölümsüz, solmaz
SOLMAZ: Canlı, diri, çekici
SOLTU: Soludu, soluklu
SOLUK: Nefes, can
SONGAR: Sungur, şahin
SONUÇ: 1- Son, bitim, kıyı 2- Uç, sınır, limit
Otmanlı ve Salçuklular döneminde, sınır karakollarında görev yapan kişiler verilen bir ad
SORGUÇ: Başa takılan çelenk
SORGUN: Söğüt türü bir ağaç
SOYÇA: Soylu, soyluca
SOYDAM: 1- Soylu, soyunu düşünen 2- Ailesine bağlı, yuvasına bağlı
SOYDAN: 1- Soylu, soylu bir aileden gelen 2- Hanedan, hanedanlık
SOYDAŞ: Aynı soydan gelen, aynı soyun kişileri
SOYLAMIŞ: 1- Soyunu çoğaltıp, kutsayan, örgütleyen 2-söz, söyleyen, konuşmacı, hatip
SOYLU: Asil, asalet sahibi
SOYLUHAN: birl. Soylu/Han
SOYON: (Sayın)
SOYSAL: birl. Soy/Sal 1- Ünlü, meşhur 2- Soylu, asil 3- Medeni, uygar
SOYURGAL: 1- Ödül, askeri ödül,madalya, nişan 2- Armağan, bağış, ihsan
SOYURGAT: İhsan, bahşiş
SÖKE: Diz üstü çöküş, çökme
SÖKMEN: 1- Yiğit, gözü kara, düşmana diz çöktüren, dize getiren, buyruğunu dinleten 2- Sokman, uzun çizme
SÖKÜR: 1- Kızgın, hiddetli, kabarmış 2- Dize getiren, diz çöktüren,buyruğunu dinleten
SÖKÜRMÜŞ: Dize getirmiş, baş eğdirmiş
SÖN: Güçten kesilme, azalma
SÖNMEZ: 1- Canlı, enerjik, ateşli, iddialı 2- Parlak, göz alıcı
SÖNÜ-k- : Sönük, pasif, cansız, heyecansız
SÖYKEM: Sempati, sevim, sevimlilik
SÖYLEM: Anlatım, hitap, hitabet, demeç, izah
SÖYLENCE: Efsane, mit, destan, lejant
SÖYÜ: 1- Aşk, sevda 2- Sevinç
SÖYÜÇEN: 1- Aşık, sevdalı 2- Sevinçli, mutlu
SÖYÜNDÜK: Sevindik
SÖZBAY: birl. Söz/Bay Söz zengini, hatip, söz cambazı
SÖZBİR: birl. Söz/Bir mec. Doğruluk, dürüstlük, söz birliği, sadakat
SÖZEÇEN: (Sözen)
SÖZEN: Hatip, konuşmacı
SÖZER: birl. Söz/Er, mert, sözünün eri
SÖZERİ: birl. Söz/Eri, mert, sözünün eri
SU: 1- Sıvı 2- Asker, er, erat
SUBAK: Sopa, değnek, cop
SUBAY: birl. Su/Bay 1- Bilgili ve deneyimli asker 2- Hafif süvari, atlı asker 3- Bekar evlenmemiş (Anadolu ve Azerbaycan’da) 4- Çocuksuz, çocuğu olmayan ( Kazak ve Kırgızlarda)
SUGAY: Aya benzer, ay parçası
SUĞUNÇAK: Sığınak, sığınılacak yer, sine, bağır
SUKTA: Sıkıcı, ezici, acı kuvvete sahip
SULAK: 1- Asker sevk eden, sefere çıkan 2- Sulu, verimli
SUN: 1- Çağrı, davet 2- İncelik, nezaket 3- Vermek, ihsanda bulunmak
SUNA: 1- Emsalsiz güzellik 2- Yeşilbaş ördeği
SUNAK: Adak, kurban
SUNAR: 1- Davetkar 2- Cömert, abadan
SUNAYAN: Çığırıcı, davetkar
SUNÇA: Sunak, adak
SUNÇAK: Adak, kurban
SUNGU: Bağış, ihsan, ikram
SUNGUN: 1- Yetenek, yetenekli 2- Sunulan, adak, hibe
SUNGUR: 1- Kartal 2- Şahin
SUNGURCA: Sungur yavrusu, küçük sungur
SUNKA: Sunak SUNKAK: Sunak
SUNKAR: Sungur
SUNKUR: Sungur
SUNTAY: birl. Sun/Tay
SUNU: İkram, davet, bağış, armağan
SUSKUÇAK: Küçük, körpe
SUSÜ: Sağlık, şifa
SUTU BOĞDA: Mübarek, Tanrısal, Tanrıdan gelen (Eski dönem Tanrı sıfatlarından)
SUVAN: Savaşçı, cengaver
SUVAR: Bolluk, bereket
SUVAT: 1- Su kanalı 2- Suyun taksim edildiği yer
SUYUN: (siyun, sevim) Sevimlilik, sempati, niyet
SUYUNÇUK: 1- Sevinç, sevimlilik 2- Müjde
SÜÇÜG: (Süçig) Tatlı, lezzetli, hoşa giden
SÜDÜN: birl. Süt/Ün, Soylu, temiz
SÜLEDİ: Saldırgan, akın yapan, akıncı
SÜLEK: Saldırgan, akıncı
SÜLEMİŞ: 1- Akıncı, saldırgan, düşman üzerine asker yollayan 2- İyi silah kullanan, silahşor
SÜLÜN: Uzun kuyruklu, renkli bir kuş
SÜNE: Ruh, can
SÜNGÜ: (Süngük) 1- Kesici ve delici, uzun bıçak 2- Kemik, kemik parçası, kemikle yapılan mızrak 3-
Eskiden, mezar başlarına dikilen sırık
SÜNGÜK: Süngü
SÜNGÜŞ: Süngü darbesi, süngü hamlesi, süngüleme, savaş
SÜRÇEK: Yemek, oyun ve eğlence için yapılan, gece toplantısı
SÜREN: 1- Asker sevk eden, savaşa asker yollayan 2- Haykırış, nara, savaş narası
SÜRER:Asker sevk eden
SÜRGİT: 1- Payidar, kalıcı 2- Ulak, postacı
SÜRÜN: Süs, makyaj, makyaj malzemesi
SÜSÇEN: Kargı ve kılıç saplamada usta olan kişi
SÜSMEN: 1- Süslü, süsü ve süslenmeyi seven 2- Tos atan, toslayan
SÜSÜN: Süslü, işveli, sempatik, çekici
SÜVERCE: Canan, aşık olunan, maşuka
SÜYEK: Kemik, soy, sop
SÜYGEN: Sevgili, canan
SÜYÜK: Kemik, soy, oymak
SÜYÜM: 1- Sevim, sempatik 2- Görüş, kanaat
SÜYÜN: Sevim, sempati
SÜYÜNÇ: 1- Sevinç,mutluluk 2- Müjde
SÜYÜNÇÜ: (Süyünç) müjde
SÜYÜRGE: Toy, şölen, ziyafet
SÜYÜŞ: Buse, öpücük
SÜZEM: Diksiyon, söz söyleme ve konuşma ahengi
SÜZGE: Tarak, çok ince dişli saç tarağı
SÜZGÜ: 1- Tarak 2- Süzgeç
SÜZGÜN: 1- Arınmış, süzülmüş 2- Mest, mahmur, kendinden geçmiş 3- Göz alıcı, alımlı
ŞAD:(Şat) 1- Ordu komutanı, general 2- Tigin, prens 3- Cesur
ŞADAPIT: Şad’a bağlı birlik ve beyliklerin genel adı
ŞAKAR: 1- Şakır, bülbül gibi öter 2- Çakar, cesur
ŞAKIR: 1- Öter 2- Çakır
ŞAKRU: Çağrı, mesaj, davet
ŞAMAN: Kam, baksı
ŞANÇI: Saplayıcı, iyi ok ve kargı kullanan, silahşor
ŞANDA: Alçak ve rutubetli yer
ŞANYU: (Tanyu) Sonsuzluk, genişlik
ŞARA: (Çara) Ufuk, ufuk çizgisi
ŞAŞ: 1- Şiş, sivri uçlu, et pişirme aracı 2- Taş 3- Dış kısım, dışarı dışarıda kalan, taşra
ŞAŞLIK: Şiş, şiş kebabı
ŞAYBAL: Şımarık, nazlı
ŞAYLAN (çaylan): Nazik, kibar, neşeli, güler yüzlü
ŞAYLIĞ: Şeref, onur ŞEYBAN: (Şeban, şıban, çıbın, zıbın) Sinek, haşarat
ŞIMGA: Acele, aceleci
ŞORAMUN: (Çoramun, çuramun) Ruhlarla ilgilenen, kötü ruhları kovan
ŞORLAK: Şorul, şorul akan su, çağlayan
ŞÖLEN: Yalnızca fakir ve kimsesizlere verilen toy, yemek ziyafeti, Bey yemeği
ŞUMGA: Aceleci, tez kanlı
ŞURLAK: Çağlayan
ŞURLAYU: Çağlayan
ŞÜYÜN: Müjde
TABAN:1- Tapan, tapınan 2- Temas, dokunma, vurma 3- Dizi, sıra, kafile
TABAR: 1- Tapan, tapınan 2- Vuran, döven, dövüşçü
TABGAÇ: 1, Dövüşçü, kavgacı 2- Ulu, saygıdeğer, muhterem 3- Tapıcı,tapınıcı
TABIN: (Tapın) İbadet
TABKI: Vicdan
TABU: (Tapı, tapu) Kutsanmış, kutlu yapılmış, tapılacak duruma getirilmiş
TABUK: 1- Tabu 2- İnayet, yardım, hizmet
TABUN: Tapın, ibadet
TAÇA: Tasarı, kurgu, plan
TAÇAM: Tasarı, plan, kurgu, senaryo
TADIK: Tat, lezzet, damak
TAG: (Tak, tağ, dağ)
TAGA: 1- Silah 2- Kural, kaide 3- Saygıdeğer, hürmet edilen
TAGAY: 1- Saygı duyulan kişi 2- Dayı, ana tarafından gelen akraba
TAGI: 1- Dindar, inançlı 2- Takı, aksesuar
TAGUK: Tavuk
TAĞ: Dağ
TAĞAN: Üç ayak, saç ayağı
TAĞAŞAR: birl. Dağ/Aşar mec. Azimli, kararlı
TAĞLUK: Dağlık, dağlık bölge
TAĞMA: 1- Dağ eteği 2- Elçi, devlet temsilcisi, devlet görevlisi
TAĞUDAR: 1- Heybetli, dağ gibi 2- Dağıtıcı, yok edici, yıkıcı, şiddetli 3- Kısmet, nasip
TAKAK: Ucu, ateşli ok
TAKAY: 1- Dayı, ana tarafından akraba 2- Dolunay
TAKIĞ: Takı, ziynet, aksesuar, mücevher
TAKIR: Takı, ziynet
TAKIŞ: Takı, süs, aksesuar
TAKİ: Dindar
TAKSUK: Harika, olağanüstü, anormal
TALA: 1- İri cüsseli, heybetli 2- Seçkin, güzide
TALAKAN: Yağmacı, yağmalayan
TALAN: Yağma, yağmalama, üşüşme, saldırı
TALAS: 1- At yarışlarındaki, başlangıç ve bitiş çizgisi 2- Fırtına, kum fırtınası 3- Dalga 4- Tartışma, münakaşa
TALAY: (Taluy, Tulay, Toluy,Tolu) 1- Okyanus, derya, büyük deniz, büyük göl
mec. Ululuk, büyüklük, sonsuzluk 2- Gelecek, ikbal 3- Seçkin,güzide
Şamanist gelenekte Deniz ve göllere bakan Tanrı
TALAZ: Dalga
TALI: Güzide, seçkin
TALIKU: Seçkin, güzide, beğenilen
TALIMAN: Seçkin, güzide
TALKILIÇ: (Dalkılıç) Zırhsız, korumasız
TALKAN: Kızartılmış tahıl
TALPIN: Faal, aktif, çalışkan, himmetli
TALŞIK: İtimat, teminat, güvence
TAMAN: Duman, sis
TAMAR: 1- Damla, damlayan 2- Demir, demir cevheri
TAMGAÇ: Memur, devlet memuru, damgacı, devlet görevlisi
TAMIŞ: 1- Demiş, söylemiş, bilgili, deneyimli, sözüne değer verilen, sözüne güvenilen 2-Damla
TAMİR: Temir, demir
TAMİZ: Damla
TAMTUK: Büyük ve kuvvetli ateş TAMU: (Tamuğ) Yerin dibi, yer altı, cehennem Şamanist gelenekte, kötü kişi ve ruhların, öldükten sonra gittikleri yer
TAN: (Tang) 1- Gün açımı, gün doğumu, şafak 2- İlginç, acayip, şaşkınlık yaratan 3- Tatlı, tat veren,huzur veren
TANA: (Dana) dana, iki yaşındaki inek yavrusu
TANDU: 1- Tan vakti, tan vaktinde doğmuş 2- Alev, alevli büyük ateş
TANG: 1- Mucize, olağanüstülük 2- Tan vakti 3- Giriş, antre
TANGAK: Kaygı, endişe
TANGSUK: Mucize, şaşırtıcı olay, olağanüstülük
TANGUT: (Tankut) Savaşlarda, mızrak ve tuğların yanına ya da ucuna takılan ipek kumaş, flama
TANIK: 1- Tanuk, şahit, gözlemci 2- Tanıdık, dost, yaren
TANIL: Ünlü, meşhur, tanınan
TANIP: Tanınmış, ünlü
TANIR: Ünlü, tanınmış
TANIŞ: 1- Tanınan, bilinen, aşina, tanıdık 2- Danışılan, bilgi ve deneyimine başvurulan, danışman
TANIŞIK: Yakından tanınan, tanıdık, bildik, dost, yaren
TANIŞMAN: (Danışman) Tanış, danışılan, bilgili kişi
TANIT: Tanınacak nitelikte, belirgin, tanınabilen
TANJU: (Tanyu) Sonsuz genişlik, ululuk,olağanüstülük, mucize gibi Hun imparatorlarının unvanlarından
TANLA: 1- Şaşılası, ürkütücü, olağanüstü, mucize 2- Suçlayan, yargılayıcı 3- Doğuş, tan vakti
TANLAĞI: Mucize
TANMAN: Tan vakti doğan
TANRI: Tanrı ya da ilah, özellikle tek tanrılı inançlar tarafından evrenin tek yaradanı ve yöneteni olduğuna inanılan doğaüstü varlık. Çok tanrılı inançlarda genelde ilahların cinsiyeti bulunur ve eril olanlarına tanrı, dişi olanlarına tanrıça denir.
TANRIÇA: Tanrıça, dişi ya da dişil ilah anlamlarına gelebilir. Soyut bir ilahi varlıktır.
TANRIDAĞ: birl. Tanrı/Dağ “ Tanrı Dağı” Çok eski dönemlerden beri, kutsanarak, Tanrı tarafından yalnızca Türklere tahsis edildiğine inanılan ve halen kutlu kabul edilen sıradağların genel adı
TANRIKUT: birl. Tanrı/Kut Tanrısal, Tanrıdan gelen, Tanrının Kutunu üzerinde bulunduran, haşmetli, Hun imparatoru Mete Han’ın unvanı
TANSIĞ: (Tansık,Tansu) hayret verici, şaşırtıcı, olağanüstü
TANSU: 1- Tansık, mucize 2- Yadigar, armağan 3- Birleşik
TANTIK: 1- Çok konuşan, konuşkan 2- Tanıdık, hısım, ahbap
TANUĞ: Tanı, teşhis, kanıt, tanınan, tanınmaya yol açan
TANYU: (Tanju) Ulu, ulaşılmaz, hükümran
TAP: Dilek, istek, umut, yardım ve bunları içine alan beklentilerle dolu inanç
TAPAĞ: 1- Tapma, tapınma, saygı 2- Görev, iş
TAPAR: Tapan, seven, uman
TAPARLU: 1- Mutlu, umutlu 2- Sofu, dindar
TAPDUK: 1- Çocuğu uzun süre olmayanların, çocuğu olduğunda verdiği adlardan 2- Saygı ve sevgiye layık, saygıdeğer 3- İbadet, tapınma
TAPI: Tapınma, ibadet
TAPIK: Önde, önde olan, önde gelen
TAPIN: Tapınma, umma, beklenti
TAPINGU: Tapınılacak nitelikte sevilen
TAPIR: Buluş, yenilik, icat
TAPKI: Vicdan
TAPKIR: Ayak altında kalıp, katılaşan toprak
TAPKUR: Tabur, dizi, topluluk, kafile
TAPLAK: Rıza, kabul, teyit
TAPUK: Tapu, Tabu 1- Tapınma, dilek, istek 2- Tabu, kör inanç 3- Hizmet, hizmetli
TAPUKÇI: (Tapıcı) Saray muhafızı, muhafız askeri
TAPUKSAK: Saygılı, hürmetli
TAPUN: Kutsama, kutsal bir varlığa yönelme, beklenti, ibadet
TAPUNMUŞ: Sofu
TAR: Dar, darlık, zahmet, sıkıntı
TARA: Ağaç dallarını budamak için kullanılan bıçak
TARAGAY: Turgay, tarla kuşu, çayır kuşu
TARAKA: 1- Tarak, eşme, ayırma aleti 2- Saygı gösteren
TARAMAN: Tarayıcı,rençber, çiftçi
TARAN: 1- Geniş arazi, ekinlik, ekin yeri 2- Sınır, hudut
TARANÇI: 1- Sınır muhafızı 2- Ekinci, rençber
TARANG: Mevki sahibi, imtiyazlı, saygıdeğer
TARBAN: Gururlu, mağrur
TARDU: 1- Öncelikli, imtiyazlı 2- Durdu, duran yaşam Göktürkler dönemi, üst düzey yöneticilere verilen bir unvan
TARDUŞ: İmtiyazlı
TARGAN: Savaşlarda, düşmanın geçeceği yollara, onların gidişini ağırlaştırmak ve güçleştirmek için bırakılan, kaya ve kütük parçaları
TARGUN: Mahçup, sıkılgan
TARHAN: (Tarkan) İmtiyaz sahibi soylu kişi. Bu kişiler, vergi vermez, suçları dokuz kereye kadar bağışlanır, kağan ve hanların huzuruna izinsiz girebilirlerdi.
TARHUN: Güzel kokulu bir yayla çiçeği
TARIK: Darı, tahıl, ekin
TARIM: 1- Emek, enerji, zahmet, sıkıntı 2- Ziraat, rençberlik 3- Irmakların küçük kolları
TARINÇ: Sınır, hudut, uç
TARING: 1- Derin, derinlik 2- Ziraat
TARKAN: İmtiyazlı ve soylu kişi (Tarhan)
TARKANÇ: 1- Öfke, gücenme, rahatsızlık, kızgınlık 2- Darılma, sıkılma
TARKAT: Bakan, nazır, yönetici, bürokrat
TARKINÇ: 1- Darılma, darlanma, küsme, küskünlük 2- İsyan, başkaldırma
TARLIG: 1- Güçlük, darlanma, sıkılma 2- Bahşiş, hediye
TARTA: Terazi
TARTAGAN: 1- Tartan, terazi 2- Dağınık, derbeder
TARTIŞ: Armağan, bağış
TARUG: 1- Darı, ekin 2- Hediye, bağış
TASAR: Plan, tasarı, tasarım
TASIM: Gösteriş, afi
TAŞ: 1- Dış, dışta olan, görünürde olan 2- Kaya parçası mec. Sertlik, dayanıklılık
TAŞAN: Taşmış, dışa vurmuş, coşkun
TAŞAR: Taşmış, coşkun, ateşli
TAŞGAN: Taşan, coşan, ateşli
TAŞGARU: Dışarı, dışarıdan, taşra
TAŞGIN: Taşmış, dışa vurmuş, coşkulu, ateşli, asabi
TAŞKI: Dışarıdan, taşralı
TAŞKIN: Coşkun, ateşli
TAŞRALU: Dışarıdan, yabancı
TAŞRIK: Dışarıda, gurbet, gurbetçi, sefere giden.
TAŞUG: Taşınabilir mal, menkul değer
TAŞÜREK: birl. Taş/Yürek ( Cesur, gözü kara)
TAT: 1- Yemek, damak 2- Uzak, uzakta, uzaktan, yabancılaşmış 3- Kılıç pası, paslı kılıç
TATAR: 1- Uzakta kalmış, yabancılaşmış 2- Çayırlık, mera 3- Kent dışında yaşayan
TATAŞ: (Dadaş) 1- Yakın dost, yaren, arkadaş 2- Uzakta kalmış, aynı uzaklığı paylaşan
TATIG: Tatlı, hoş
TATIR: Çayırlık, otlak, mera
TATLI: Tatlı veren, hoşa giden mec. Güler yüzlü, sevimli, cana yakın
TATU: 1- Barış, sulh 2-Uzağı gören, uzak görüşlü 3- Bakıcı, eğitici 4- Tatlı, tat veren 5- Yaratılış, fıtrat
TAV: 1- Hız, devinim, çeviklik, koşu, davranmak, harekete geçmek. 2- Dağ
TAVAR: Hızlı hareket eden, hızlı davranan.
TAVGAÇ: 1- Hızlı koşan, hızlı davranan, atik 2- Çekici, cezbedici
TAVIŞGAN: Tavşan
TAVLI: 1- Hızlı, atik 2- Dağlı
TAY: 1- Dayak, dayanak, dayanılacak nesne 2- Soy, asalet, soyluluk unvanı 3- Ululuk, büyüklük,çokluk 4- Mevki, yer, bölge 5- Ananın erkek kardeşi, dayı 6- Süt emen at yavrusu
TAYAK: Baston, değnek, dayanılacak nesne.
TAYANÇ: 1- Dayanç, dayanak 2- Hami, koruyucu, sırdaş, güvenilen kişi
TAYANÇI: Danışman, memur.
Uygurlar döneminde, küçük dereceli memur unvanlarından
TAYANG: Dayak, dayanak, destek, dayanak
TAYANGU: Danışman, aracı, sıra dışı. Han ve kağanların danışmanlarına verilen bir unvan
TAYCU: 1- Hami, destekçi, koruyucu 2- Soylu, seçkin 3- Tay sahibi,tay eğiticisi
TAYEÇE: birl. Tay/Eçe..Soylu, saygıdeğer hanım. (Teyze, sözcüğünün buradan geldiğini söyleyen dilciler vardır.)
TAYGA: 1- Kavak, çam, söğüt karışımı ormanlık bölge 2- yoğurtlu sebze çorbası
TAYGAN: 1- Karışık ağaçlı orman 2- Dayanak, destek
TAYGANA: Kaygan, kayıcı
TAYGUN: Yavru, çocuk, torun
TAYGUR: Kayan, kızakla kayan
TAYIK: Kibar ve nazik genç
TAYLAN: 1- Beyefendi, centilmen 2- Yakışıklı, heybetli 3- Düzgün ve etkileyici konuşan
TAYŞI: 1- Mürşit, yol gösteren 2- Hami, koruyucu
TEBER: Balta, baltalı mızrak
TECİMEN: İdareli, ekonomist
TECİMER: Ekonomist, hesaplı TEDAN: Tutan, zapt eden, zabit
TEDİK: (Tetik) 1- Usta, becerikli, bilgili 2- Öğüt, nasihat
TEGEN: (Değen) Değerli, karşılığı olan
TEGİN: Tigin, prens, şehzade, bey oğlu. Göktürkler döneminde, vali unvanı olarak da kullanılmıştır.
TEGİNEK: Değnek, baston
TEGİR: 1- Değer, kıymet, paha 2- Hücum, taarruz 3- Ulaşım, ulaşma
TEGİŞ: 1- Değişim, değişme 2- Dövüş, temas, çarpışma, hücum
TEGRE: Daire, çevre, civar, etraf
TEGREK: 1- Değer, kıymet 2- Tekerlek, değirmi, yuvarlak
TEĞME: Değme, seçkin, farklı
TEKER: 1- Değer, kıymet 2- Çevre, yöre, daire 3- Saldırgan, mütecaviz
TEKEŞ: Döğüş, değiş, temas, savaş, savaşçı
TEKİN: 1- İyi, güzel, biricik, emsalsiz, uğurlu, uygun 2- Rahat, güvenli,güvenilir, 3- Tigin, prens, bey oğlu 4- Tabi, bağlı, kul, köle 5- Boş, ıssız, toplumdan uzak kişi 6- Saldırgan
TEKİNİK: Güvenilir, iyi, münasip, uygun
TEKİR: 1- Değer, kıymet, paha 2- kara benli, kara çizgili 3- Hücum, saldırı, saldırganlık
TELA: 1- Delici, delen 2- Tolu, olgun, bilge 3- Armağan, adak, sungu
TELEK: Armağan, sungu
TEMİR: Demir
TEMİR YALUP: birl. Demir/Yalup …demirci ustası, silah yapımcısı
TEMİRÇAL: birl. Temir/Çal ( kılıç darbesi, kılıç vuruşu)
TEMİREN: Ok başlığı, okun ucundaki sivri ve delici demir parçası
TEMİRHAN: birl. Temir/Han Eski dönem, “ Maden Tanrısı”
TEMİRKIRAN: birl. Temir/Kıran mec. Acı kuvvet, acı kuvvete sahip kişi
TEMİŞ: Demiş, söylemiş, bilgin, deneyimli
TEMÜGE: (Temürge) demir, nüvesi
TEMÜRKAZUK: birl. Temir/Kazık Kutup yıldızı
TENBE: At koşumu, koşum takımı
TENEKUR: Boraks madeni
TENGİZ: Deniz
TENGRİ: bkz. TANRI. Orta Asya'nın uçsuz bucaksız bozkırlarında yaşayan Eski Türklerin inancı, Gök Tanrı = Kök Tengri inancıdır. Eski Türkçede Tanrı sözcüğü Tengri biçiminde söylenirdi (ayrıca Tengri sözcüğü, gök anlamına da gelirdi). Eskiden Kök olarak söylenen gök sözcüğünün ise Eski Türkçede üç anlamı vardı: Biri bugünkü kullandığımız anlamı ile gök, gökyüzü; biri, yine bugünkü kullandığımız anlamı ile mavi renk; biri de, bugün kullanmadığımız anlamı ile ulu, yüce, kutsal. İşte Kök Tengri/Gök Tanrı deyiminde geçen kök/gök sözünün taşıdığı anlam ulu, yüce, kutsal'dır. Buna bağlı olarak da, Kök Tengri/Gök Tanrı deyimi Ulu Tanrı, Yüce Tanrı anlamlarına gelir.
TENİK: Azim, kararlılık
TENŞİ: Eşit, adil, adaletli
TEOMAN: Sis, duman, tuman
TEPE: 1- Uç, sınır, doruk, yükseklik, yüksek yer 2- Yığın, kütle 3- Bir nesnenin sivri ucu
TEREÇE: İnce, narin, zarif
TEREK: Siper, koruyucu
TEREKEME: Siper, siperlik, sütre
TERİLGEN: Diri, canlı, hazır, tetik, tetikte
TERİLGENBUDUN: birl. Terilgen/Budun Devletin çekirdeğini oluşturan boy merkez halk Devletin, temel, ulusal askeri gücü TERİM: 1- Bilim, sanat, bilim ve sanat erbabı 2- Emek, alın teri, zahmet 3- soyluluk, şeref, onur,nurlu 4- toplantı, dernek 5- Han soyundan gelen kızlara verilen bir soyluluk unvanı TERİŞ: Derleme, toparlama, birleştirme, birleştirici, derleyip toparlayıcı
TERKEN: 1- Süs oku, süslü ok 2- Savaş arabası 3- Soylu, soyluluk unvanı
TERNEK: Dernek, toplantı
TESİYEMİ TANYU: (Ululuğun sınırı olmayan, en ulu )
TETİK: 1- Uyanık, hazır 2- Becerikli, mahir
TEYENG: Sincap
TEYMUR: Demir
TEZ: 1- Hızlı, ivedi, hızlılık 2- Kaçma, ürkme, ürküntü 3- Şiddet, şiddetli
TEZME. Çabuk kızan, canı ağzında, kızıp çekip giden
TEZÜREK: birl. Tez/Yürek Heyecanlı, ateşli
TIBIK: Sakin, asude
TILSIM: Büyü, efsun, sihir
TIN: (Tin) Ruh, can, nefes
TINGI: 1- Tin, can, yaşam 2- Kulağa gelen ses, ses dinleme (Tınlama)
TINGLAK: Efendi, söz dinleyen
TINGLAR: Dinler, hürmetkar
TINGLATUR: Sözü dinlenen, sözü geçer
TINGLAYU: Munis, söz dinleyen
TINGLIĞ: Canlı, diri
TINI: 1- Ruhsal, ruhla ilgili 2- İnanç, iman 3- Tıngırtı, kulağa gelen ses
TİGİN: Prens, şehzade, han oğlu, bey oğlu
TİGREK: Çevre, daire
TİKE: Parça, bölüm, lokma, tıkım
TİKEN: Dikili, dik, dikmiş TİKİM: Parça, lokma
TİLBE: Dilek, dilenen şey, murat
TİLBİ: Dilek
TİLEK: Murat, istek, dilek
TİLKİ: Tilki, kürkü için avlanan hayvan
TİLMAÇ: Çevirmen, tercüman
TİLMEN: (Dilmen) Konuşkan, hatip, çenebaz
TİLTAY: Etken, amil, neden
TİLUN: Dolun, tolun, dolu, tam, eksiksiz, kusursuz
TİMAGUR: Merhametli, vicdanlı
TİMUÇİN: (Temuçin, temurçin, timurçine) Çengiz Kaan’ın ilk adı. Ancak doğrusu, Timurçin’dir. Demir ucu, sivri demir anlamındadır.
TİMUR: Demir
TİMUR KÜRKAN: birl. Timur/Kürkan Türk dünyasının en ünlü simalarından. Yalnızca Türk tarihi değil, dünya tarihinin de başta gelen liderlerinden. Çengiz Kaan’dan sonra, dünyanın ikinci büyük fatihi. Yaşamı hep çetin mücadelelerle geçmiş, koca bir imparatorluğu adeta yoktan var etmiştir. Kürkan (Damat) lakabını, evliliğinin ilk yıllarında, kayın eçesi olan Buhara Emir’ in himayesinde oluşu nedeniyle almış, daha sonraları,İranlılar ona “ Timurleng”, Otmanlılar “ Aksak Timur” lakabını takmışlardır. Bu ulu kişi zamanında,Türk dünyası üçüncü ve son kez olarak, tek devlet çatısı altında toplanmış, “ Birleşik Türk devletleri” ideali, bu ulu kişinin döneminde son kez gerçek olmuştur.
TİN: 1- Can, ruh, öz 2- Soluk, nefes, yel 3- Dinmiş, dingin, sakin, bitik 4- Gök, göksel, Tanrısal
TİRGEÇ: Diri, canlı, dirilik veren
TİRİG: Diri, canlı, güçlü
TİRİGLİĞ: Dirlik, yaşam, geçim
TİRİL: 1- Can, ruh, yaşam 2- Dirilik, canlılık, derlenip toparlanma 3- Derlenme, derleniş
TİRİM: Yaşam, geçim, hayat yolu
TİRKİŞ: Kervan, kafile
TOGA: 1- Doğa, tabiat, hilkat, yaratılış, huy 2- Kalın, katı, yoğun, doymuş 3- Usul, yordam, teamül
TOGAY: 1- Toga 2- Dolunay 3- Koruluk, küçük orman
TOGU: 1- Doğu, doğuş 2- Vuruş, darbe
TOĞAÇ: (tokaç) Topuz, çamaşır yıkarken kullanılan tahta topuz
TOĞAN: 1- Doğan, doğan kuşu 2- Canlı, doğmuş olan, yaşayan
TOĞMA: 1- Dokuma, dokumadan yapılan giysi 2- Yerli, yerli halktan olan kişi
TOĞMAK: (Tokmak)
TOĞMUŞ: Doğmuş, ortaya çıkmış, canlı, yaşayan
TOĞRUL: 1- Tuğrul 2- Doğrulmak, ayağa kalkmak
TOĞRULÇA: Doğan kuşu, doğan yavrusu
TOĞSIK: Doğuş, doğum, ortaya çıkış
TOĞUL: 1- Doğulu, doğudan 2- Doğum, doğuş, ortaya çıkış
TOĞULGA: Tolga, tulga, savaş başlığı, miğfer
TOK: 1- İrilik, katılık, dayanıklılık, yoğunluk 2- Vuruş, darbe, dövüş, savaş 3- Yol, yöntem, yordam
TOKA: 1- Tok, sert, katı 2- Usul, yol, yordam, teamül 3- Dövüş, vuruş, vuruşma, 4- Huy, hilkat,yaratılış
TOKAÇ: (Togaç) Topuz, çamaşır topuzu
TOKALIG: Tokluk, katılık, sertlik
TOKAY: 1- dolunay 2- Dere kenarlarında yetişen bir çiçek, çalı
TOKLU: 1- Yol, yordam, bilen, bilge 2- Bir yaşını geçmiş kuzu 3- İri, dolgun, besili
TOKMAK: Vurma, ezme, dövme aracı Kalın, geniş, ağaçtan yapılmış çekiç
TOKOL: Kuma, ikinci hanım
TOKTA: 1- Durma, yaşama, direnç, dayanıklılık 2- Tedbir, tedbirlilik
TOKTAK: Tedbir, tedbirli, temkinli
TOKTAMIŞ: Durucu, kalıcı, dirençli, dayanıklı, uzun ömürlü, dirayetli
TOKTAR: Dayanıklı, dirayetli, uzun ömürlü
TOKU: 1- Doğu 2- Dövüş, temas, savaş
TOKUM: 1- Doğum, doğuş 2- Yaşam, direnç, dayanıklılık
TOKUMAK: Tokmak
TOKUR: 1- Gözü pek, cesur 2- Dokur, dokumacı
TOKURGAK: Dokuma aleti, dokuma tezgahı
TOKUŞ: 1- Dövüş, savaş, vuruşma 2- Doğuş, direnç, yaşam, dirayet
TOKUZ: 1- Dokuz sayısı (..Türklerin uğurlu ve kutlu saydıkları sayılardan) 2- sıkça ve kalınca dokunmuş bir kumaş
TOLAN: Eşsiz, emsalsiz
TOLAY: Bir tavşan türü
TOLDI: Doldu, dolu, doluluk, bütünlük, olgunluk, irilik, bilgelik, erginlik
TOLDIKORGAN: Anıt, lahit, abide
TOLGA: Miğfer, çelik başlık TOLGAN: 1- Dolgun, iri, dolu 2- Acı, üzüntü, inleme
TOLKAN: Dolgun
TOLMIŞ: Dolmuş, dolu, olgun, bilge
TOLU: 1- Dolu, olgun, kamil, yetkin, usta 2- İçki, içki kadehi, içki ile dolu kadeh 3- Seçkin, güzide
TOLUHAN: birl. Tolu/Han Arap işgalleri sırasında, onlara karşı direniş örgütleyen ve çeşitli savaşlara giren bir bey
TOLUK: 1- Dolu, olgun, yetkin, bilge 2- Tuluk, tulum
TOLUM: 1- Silah, savaş aleti 2- Olgun, dolgun
TOLUN: Dolu, tam, bütün, eksiksiz, kusursuz, olgunlaşmış
TOMAN: Duman,sis
TOMBAY: Manda, camış
TOMRİS: (Tomris Hatun) 1-Demir ucu 2- Demir sesi. 3- Demirin özü, nüvesi.4- Bereket, bolluk,uğur. T… Türk tarihinin ünlü simalarından. Sakalar devletinin katun’u (kraliçesi) (İran – Turan savaşları sırasında, zalimliğiyle ünlü, Pers kralı Hüsrev’in, Türk topraklarını işgal etmesine karşın yapılan savaşta büyük kahramanlıklar göstererek, onu yenmiş, başını kesip kan dolu bir fıçıya atarak, “Hayatın boyunca kana doymadın, kan döküp kan içtin. Ben de sana yakışanı yapıp, seni bundan mahrum etmeyeceğim.” diyen ulu kişi.)
TON: Don, giyim, giysi, elbise
TONA: Giyimli, varlıklı, yakışıklı
TONAT: Donat, cömert, eli açık, aç doyuran – çıplak giydiren.
TONATMIŞ: Giydirmiş, hayır hasenatta bulunmuş, cömert ve eli açık.
TONGA: Kaplan, Asya kaplanı.
TONGUZ: Domuz
TONKA: 1- Tunga , kaplan 2- iri,büyük,gösterişli
TONLU: Giyimli,şık,zengin,varlıklı
TONSUZ: Yoksul
TONYUKUK: (Tanyu/Kök,gök) Sonsuzluk ve genişlik,bilgelik ve deneyimlilik.
TOP: Yığın, topluluk, bütünlük, erk
TOPAÇ: 1- Top gibi, toparlak, dolgun 2-İbrik 3- Sepet, sele
TOPAK: Topluca, toplanmış, yığın
TOPRAK:.. Yer, yurt, arazi
TOPURGAN: Ayak basıldığında toz çıkaran, yumuşak toprak
TOPUZ: Toplanıp, kurutulmuş, katılaşmış, topluca ve katıca. Silah, dövme ve ezme aracı
TOR: 1- Mevki, mertebe, şeref, şereflilik 2- Türeme, doğma, soy, gelişme, yayılma 3- Ağ, tuzak 4-Giysi 5- Evlat, çocuk, nesil 6- Zayıflık, incelik, hamlık
TORAMAN: 1- Fahri, onursal, şerefli 2- Kaba, yetişmemiş, acemi 3- İri, dolgun, heybetli
Toran: Turan, duran, yaşayan, dirençli
TORÇUK: Kozalak
TORKU: İpekli kumaş
TORLAK: 1- Eğitilmemiş at 2- Çırak, acemi, ham
TORMIŞ: Durmuş, yaşayan, yaşar, yaşam
TORMU: Yaşam süresi, yaşam
TORU: 1- Duruş, yaşam 2- Bolluk, bereket, fazlalık 3- Doru, doru renk
TORUG: Doruk, Doru renk
TORUK: 1- Doruk, zirve 2-İnce, zayıf, ham, olmamış
TORUM: 1- Aygır, aygır yavrusu 2- Kul, köle, muti, bağlı 3- Deve yavrusu
TORUN: 1- Evladın, evladı 2- Sevgili, biricik, çok sevilen 3- Acemi, ham, yetişmek üzere olan 4-Genç boğa
TOSUN: 1- Genç boğa, 2- Tos atan, tos vuran, azgın, azmış, saldırgan
TOY: 1- Şölen, yemekli eğlence, düğün dernek 2- Em, ilaç, doyum, doyumluluk 3- Ordu, ordu birliği 4- Çamur bataklık 5- Doğan türü bir avcı kuş 6- Genç, gençlik, acemilik, çıraklık
TOYAK: 1- Atlara giydirilen savaş zırhı 2- Tırnak, at tırnağı
TOYAN: Toy sahibi, toy veren kişi
TOYGA: 1- Toy sahibi, toy veren kişi, 2- Toylarda yapılan çorba, ayranlı çorba
TOYGAN: 1- Kurultay üyesi 2- Bir kuş türü 3- Genç, taze
TOYGAR: Tarla kuşu, çayır kuşu
TOYGUN: 1- Genç, taze, deneyimsiz 2- Doymuş
TOYGUR: Doymuş, gözü tok, olmuş, olgun
TOYLAK: 1- Toy yeri, toy yapılan yer 2- Karargah, ordunun toplandığı yer.
TOYLUK: Toy yeri, Toy yapılan yer
TOYMADUK: 1- Özlenen, özlemi duyulan 2- Hırslı, doyumsuz
TOYMAGUR: İştahlı, obur
TOYTİMUR: Ermiş, keramet sahibi, Şaman büyüğü, kam, rahip
TOZUN: 1- Tosun 2- Düzen, uyumluluk
TÖGİ: Cömert , eli açık
TÖGÜN: Çekici, yakışıklı
TÖKMEN: Çekici, yakışıklı TÖKÜ: Eli açık, cömert, müsrif
TÖKÜŞ: Düğüş, savaş, vuruşma
TÖLEÇ: Ücret, yevmiye
TÖLEGEN: Olgun, kamil, yetişkin
TÖLEK: 1-Ücret, yevmiye 2- Sükunet, sakinlik
TÖLİS: Bölük, bölünmüş
TÖLÜK: Tuluk, tulum
TÖR: 1- Türemek, çoğalmak, yaratılış 2- Makam, mevki, onur yeri, şerefli yer 3- Usul, kural, teamül
TÖRE: 1- Düzen, gelenek, usul, teamül, geleneksel hukuk 2- Türeyiş,yaşayış, çoğalma, yaratılış
TÖRELİ: Töresi olan, töreye bağlı, geleneklerine bağlı
TÖREMEN: Görgülü, töreye bağlı
TÖREN: 1- Töreye uygun yapılan, töre gereği yapılan, merasim 2- Soylu, necip, seçkin
TÖRKİN: Kök, menşe, dip, soy
TÖRÜ: 1- Yasa, devlet düzeni 2- Türeyiş, yaratılış
TÖRÜCE: Töreye ve yasaya uygun
TÖRÜİÇİ: Töreye uygun
TÖRÜLÜG: Töreye bağlılık, Töre bilgisi, Töre uygulaması
TÖRÜM: 1- Türeyiş, yaratılış 2- Töreye bağlılık
TÖRÜMÇÜ: Töreye bağlı, soyuna bağlı
TÖRÜN: 1- Soylu, soyluluk 2- Tören, merasim, ihtiram
TÖRÜTGEN: Yaratıcı, yaratan, halik
TÖŞTÜK: Düş, rüya
TÖZ: Kök, dip, temel, cevher, öz
TÖZLÜK: Öz, esas, asıl, kök, köklü, özlü
TÖZÜN: Soylu, temeli sağlam, köklü
TUNAY: Evlatlık kız çocuğu
TUDUN: (Tutun) 1- Tutunma, bağlılık, sadakat 2- Destek, güvence, tutunulacak nesne Hazar kağanlığı döneminde kullanılan “ vali “ unvanlarından
TUGAN: Doğan
TUGANA: Özel ok (İçi oyulmuş, içinde evrak gizlenen ok)
TUGAN: 1- Küçük ırmak, çay, akarsu 2- Togay
TUĞ: Sancağın tepesine takılan at kuyruğu, kıldan yapılan flama, Uğur ve Kut işareti olarak kullanılır olmasına karşın, bundan daha çok savaş isteği, başkaldırı ve isyan sembolü olarak kullanılmıştır. 2- Tıkaç,kapak, bent, set
TUĞANÇI: Doğancı, doğan terbiyecisi, doğan eğitmeni, doğan yetiştiricisi
TUĞCU: 1- Tuğ taşıyan kişi, alemdar 2- İsyancı, isyankar
TUĞÇE: Küçük tuğ, tuğcuk
TUĞLU: Tuğ sahibi, kutlu, uğurlu
TUĞLUK: Tuğlu, tuğu olan, tuğ taşıyan
TUĞMA: 1- Doğmuş, ortaya çıkan, boy gösteren 2- Tuğ kaldıran, isyankar
TUĞRUL: 1- Doğan kuşu, bir doğan türü 2- doğru, doğrulmuş, dik- ayakta 3- Türk mitolojisinde, adı geçen, yarı insan, yarı kuş.
TUĞSAVUL: birl. Tu/Savul Eski dönemlerde, ordu içinde tuğ taşıyan ve onu koruyup, önde tutmakla görevi olan kişilere verilen ad.
TULA: 1- Tolu, dolu, olgun 2- Ayna
TULAN: Dolu, olgun, kamil
TULAY: 1- Talay, taluy, okyanus, deniz 2- Ayna 3- Dolu, dolgun, olgun
TULGA: Tolga, miğfer
TULGAR: 1- Azim, kararlılık, inanç, güvenç 2- Gösteriş, heybet, heybetlilik
TULGAY: Tuga, Tolga, miğfer
TULİ: 1- Dolu, olgun, kamil 2- Ayna
TULKİ: Tilki
TULTAG: Sakin, kendinden emin
TULU: 1- Dolu, ergin, olgun 2- Ayna
TULUK: 1- Dolu, olgun, bilge 2- yayık, çömlek
TULUN: 1- Tolun, dolu 2- Çene kemiği
TUMA: Yeğen, kuzen
TUMAÇI: Erkek kuzen, (Amca, hala, dayı, teyze çocuğu)
TUMAÇIM: Kız kuzen
TUMAĞAN: 1- Nilüfer çiçeği 2- Duman, sis
TUMAN: Duman, sis
TUMAY: Sessiz, sakin, kendi halinde
TUMGAN: Tuman, sis
TUMRUL: Dumrul, Demir ucu
TUNA: (Tona) Varlıklı, zengin, gösterişli, ihtişamlı
TUNÇ: Bronz, Bakır, kalay karışımı TUNG: Nüfus sahibi, kudretli, muktedir
TUNGA: 1- Kaplan, Asya kaplanı 2- Kudret, ihtişam, fevkaladelik
TUNGUÇ: Çocuk, evlat, evlatlık
TUNGUT: Evlatlık
TUNUÇ: Tunç
TUR: 1- Durmak, yaşam, canlılık 2- İrade, istek, yargı
TURA: 1- Dura, durak, ev, mekan 2- Deriden örülen kamçı 3- Sibirya bölgesinin eski adı
TURAK: 1- Durulan yer, yaşanılan yer, mekan 2- Yaşam, ömür
TURAL: Durma, yaşama, ömür
TURAM: Olgunluk, kemal
TURAMUN: 1- Evcil, evcimen 2- Onurlu, onuruna düşkün
TURAN: Duran, yaşayan, ömür, ömürlü, yaşama direnci (Çocukları sık ölen ailelerin, uzun ömür ve kalıcılık dileklerini içeren adlardan.
TURÇAK: Filiz, fidan
TURÇİK: 1- Durucu, kalıcı, uzun ömürlü 2- Fidan
TURDU: Durdu, sağ, salim, yaşar, yaşayan, kalıcı, ömürlü
TURGAK: Bekçi, muhafız, koruyucu
TURGAN: Duran, ömürlü
TURGAY: 1- Tarla kuşu, serçe 2- Türk/Ay
TURGUT: (Turagut) 1- Ömürlü, durucu, uzun yaşamlı 2- Belde, mekan mesken, yaşanılan yer
TURKAK: Nöbetçi, bekçi
TURKU: Ateşli, heyecanlı
TURKUAZ:Rengi mavi ile (Türk mavisi) özdeş olmuş bir süs taşı
TURMUŞ: Ömür, yaşam, uzun ömürlülük (çocukları sık ölen ailelerin kullandıkları adlardan)
TURNA: Leylek türü, iri ve geniş kanatlı bir kuş
TURSUN: Dursun, Durdu, duran, durmuş vb. yaşam, ömür, uzun ömür
TURŞAK : Filiz, sürgün
TURU: 1- Duru, saf, arık 2- Duran, yaşayan, ömürlü 3- Durgun,sakin
TURUM: 1- Yaşam, ömür 2- Sükunet, durgunluk
TURUMTAY: 1- Turum/Tay 2- Doğan türü, avcı bir kuş
TURUŞKAN: Dayanıklı, metanetli, dirençli, uzun ömürlü
TURUT: 1- Yer, yurt, durulan, yaşanılan yer 2- Ömür, yaşam
TUSİT: Göğün ötesi Şamanist gelenekte, ulu ruhların gittiği yer. Göğün katlarından
TUSKAN: Akraba, yakın, hısım
TUŞGÜL: İşaret, iz, nişan
TUT: 1- Yakalayış, kavrayış, saklayış 2- Vuruşma, vuruş, yenme, ezme, koparma 3- Ordu, ordugah 4- Kılıç ve benzeri silahların üzerindeki kir, pas
TUTA: Bahşiş, armağan
TUTAÇ: Komşu, yakın, dost
TUTAÇI: Komşu, yakın
TUTAK: 1- Silah kabzası 2- Saldırı, hücum, taarruz 3- Evlatlık
TUTAM: Demet, buket, deste
TUTAN: Elinde bulunduran, yönetimi altında bulunduran
TUTAR: Tutucu, hükmedici
TUTAŞ: 1- Küçük hanım, evin en küçük kızı 2- Bekar, bakire kız 3- Komşu
TUTGAK: 1- İnilti, inleyiş, hüzün 2- Geceleri keşfe çıkan savaş birliği
TUTGAN: Tutucu, fanatik
TUTGUÇ: kahvaltı, kuşluk vakti yenen yemek
TUTGUN: Tutsak, esir, hapis,tutulu, tutulmuş, bağlanmış
TUTKU: Kapama, ele geçirme, bağlama, bağlanma
TUTGUK: Esir, hapis, tutsak
TUTNAK: Destek, arka
TUTNUK: Tutunulacak nesne, dayak, arka,destek
TUTSU: 1- Vasiyet, öğüt, nasihat 2- Bağımlılık
TUTSUK: Öğüt, nasihat, vasiyet
TUTU: Esir, tutsak, rehine 2- Çekici, cazip, güzel 3- Tutuş, savaş, dövüş 4- Ağırbaşlı,utangaç 5- Yiğit, batur, dövüşçü 6- Bakan, nazır, vali
TUTUG: Vali, askeri vali Göktürkler döneminde kullanılan askeri unvanlardan
TUTUK: 1- Dövüş, savaş, savaşçı 2- Devlet görevlisi, devlete bağlı 3- Evlatlık 4- Büyü, sihir 5-Tutsak, esir, tutulmuş, rehin
TUTUN: Tutunulacak nesne, destek, arka, güvence
TUTUNÇ: 1- Evlat, oğul, uşak 2- Tutunulacak nesne, güvence
TUTUNGU: Öğüt, nasihat, vasiyet
TUTURGAN: Öğüt, nasihat, vasiyet
TUTURGU: Öğüt, nasihat, akılda tutulan TUTUŞ: 1- Dövüş, savaş 2- Zapt etmek, egemenlik kurmak 3- bağlılık, sadakat 4- Orduyu ve devleti düzene sokmak
TUTUŞUK: Demet, çiçek demeti,buket Çengiz Kaan’ın Uygur kökenli danışmanı, oğullarının eğitmen ve atabeyi bu ulu kişi, imparatorluğun resmi dilinin “Türkçe” oluşunda ve Türk kültürünün egemen kılınmasında, önemli etken olmuştur.
TUYAK: 1- Dayak, destek, değnek 2- Duyan, işiten, işitici, dikkatli, uyanık
TUYAN: Duyan, işiten
TUYGU: Duygu, his duyumu
TUYGUN: Doğan türü bir avcı kuş
TUYUK: Dayak, destek, arka
TUYUN: Saygın, muteber
TUZGU: Yemek, yoldan geçenlere verilen yemek
TUZAK: Sevgili,sevgili için söylenen söz
TUZAĞI: Sevgili, aşık, maşuka
TUZGUN: Armağan, sunu, bahşiş
TÜBE: 1- Tepe, yüksek yer 2- Siper, sütre
TÜBEK: Tübe, tepe
TÜGÜN: 1- Düğün, bağlılık 2- bahşiş, hediye
TÜGÜZ: Düz, tam, eksiksiz, mükemmel
TÜKEL: 1- Tüy, saç, kıl 2- Dik, dikili Türk mitolojisinde, ağaçtan doğduğuna inanılan kişi
TÜKÜN: 1- Düğün, dernek, toplantı 2- Bahşiş, armağan
TÜLEK: 1- Zeki, kurnaz, fettan 2- Tüylü, kıllı
TÜLGÜ: Alaca, renkli bir karga türü
TÜLİN: 1- Ayna 2- Ayın çevresindeki ışık halesi
TÜLÜ: 1- Rica, yakarış 2- Düş, rüya
TÜLÜŞ: Ücret, değer, emeğin karşılığı alınan karşılık
TÜMEN: 1- Duman, duman, sis 2- On bin sayısının askeri terminolojideki kullanılışı
TÜN: Gece
TÜNBAY: birl. Tün/Bay ( Kazak ve Kırgızlarda, yatak, şilte)
TÜNEK: Gece kalınan yer
TÜNG: 1- Gece, gece karanlığı 2- Olağanüstülük, fevkaladelik
TÜNKÜR: Peri, melek
TÜR: Soy, kök, orjin, çeşit, kan, damar, doğuş, yaratılış, oluş
TÜRE: 1- Töre 2- Tigin, prens, şehzade
TÜREL: Türeli, töreye bağlı, töresel, hukuk, hukuki, hukuka uygun
TÜRELİ: Türe sahibi, töreye bağlı, hukuka bağlı
TÜREMEN: Töreye bağlı, töreye göre yaşayan
TÜRENER: Töreye bağlı, töre sahibi
TÜRETGEN: Yaratıcı, mucit, üretken
TÜRK: Bu kutlu ad, birçok anlamları içinde barındırır. Türeyiş, doğuş, güç, erk, soy, döl, çoğalma, düzen vb. ( Birçok dilbilimci, değişik anlatımlar yapıyormuş gibi görünseler de aslında tek bir şey vardır ortada. O da Töreli, Töreye bağlı, Töreye göre olmuş, Töre ile özdeş, iyilik, güzellik, doğruluk ve düzenlilik içinde yaşayan, bunun için gerektiğinde, mayasından gelen güç ve erkini kullanan kişi ya da kişiler topluluğu, anlamlarını net bir biçimde içinde barındırıyor olması.)
TÜRK BİLGE KAĞAN: (Orhun anıtlarında, Bilge kağan kendini böyle tanıtır.)
TÜRKÜ: Türk dilinde söylenen, melodi
TÜRÜ: Dürülmüş, derli, toplu, düzenli
TÜRÜNG: Aktif, faal, çalışkan
TÜŞ: Düş, rüya
TÜŞTEMİZ: birl. Tüş/Temiz
TÜTSÜ: Güzel kokulu ot yakarak ortaya çıkarılan koku
TÜTSÜK: 1- Tütsü, tüten koku 2- Öfkeli, kinci, öç alıcı
TÜTÜK: 1- Güzel ve etkileyici koku, duman, tütme kokusu 2- Düdük, savaşlarda ve savaş talimlerinde komut vermek için kullanılan düdük
TÜZ: Düz, düzen, kök, esas, kural, bütünlük, doğruluk, uyum, uyumluluk
TÜZE: 1- Düz, doğru, düzen, kural, uyum, ahenk 2- İdare, yönetim 3- Ulus, topluluk, halk 4- Uyum, uyumluluk, barış, uzlaşı 5- Kusursuzluk
TÜZBAYKÜÇ: birl. Tüz/Bay/Güç Bütün, hepsi, hepsini içine alan
TÜZEN: Düzen, uyum, kurallar bütünü
TÜZLİ: Uyumlu, uygun, düzenli, idareci
TÜZLÜG: uyum, ahenk, geçim
TÜZÜK: (Düzük) 1- Düzen, düzülü, sıralı, düzenleme, düzenlenmiş, düzenli, 2- Özel durumlara göre biçimlenmiş kurallar bütünü
TÜZÜL: 1- Düzülü, sıralı, muntazam, disiplinli, hiyerarşik 2- Anlaşmış,anlaşmalı
TÜZÜM: Düzgünlük, sıra, dizgi TÜZÜN: 1- Düzen, kural, teamül, gidişat 2- Öz, kök, soy, soylu, seçkin, egemen 3- Uysal, yumuşak huylu ve davranışlı
UBUT:Ar, edep, tevazu, alçak gönüllülük
UC: Uç, sınır
UCAS: İddia, bahis
UCUD: Yeryüzü, dünya
UCUN: Uçta, sınırda, kenarda, uçbeyi
UÇ: 1- Son, bitim, sınır, kıyı 2- Aşırılık, ekstrem 3- Herhangi bir nesnenin sivri kısmı 4- Ordu kanadı, kol, cenah
UÇA: 1- Koruma, himaye, arka 2- Uç, sınır, limit 3- Kendini aşmış, yüksek, ulu
UÇAR: 1- Haber, havadis 2- Kanıt, delil 3- Göğe yakın, Tanrıya yakın, dindar 4- Uçarı, vurdumduymaz
UÇBEY: birl. Uç/Bey
Sınır karakollarında görev yapan askeri birlik komutanı
UÇGUN: 1- Kam, baksı, kendinden geçmiş, transa girmiş 2- Kıvılcım
UÇKAN: Uçan, uçucu
UÇKARA: birl. Uç/Kara ..Sırtı renkli, kanatları kara bir kuş türü
UÇKUN: Uçuk, kendinden geçmiş, ateşli, heyecanlı
UÇMAĞ: (Uçmak) Cennet
UÇSIZ: Sınırsız, geniş, büyük, alabildiğine..
UÇUK: Uçmuş, kendinden geçen, mest olan kam, baksı
UÇUMAK: Uçmak, cennet
UÇUR: Devir, dönem
UÇURAN: Kam
UÇURUM: Son, uzak, uzak nokta, uçulan, uzaklaşılan, yüksek ve derin dağ yamacı, yar
UÇUZ: birl. Uç/Uz 1- Alçak gönüllü 2- Basit, kolay
UD: (Ut) 1- Arka, geri, ardından gitme, takip 2- karşılaşma, çatışma, yenme, utku 3- Uyuma, uyku
UDAR: 1- Takipçi, peşini bırakmayan, kovalayan 2- Yener, galip gelir
UDU: Uyku
UDUK: Uyanık, diri
UDUM: Art arka, arkası sıra
UDUN: 1- Hüner, beceri 2- Sönmüş, sönük
UDUZ: 1- Mürşit, yol gösteren, ardından gidilen 2- Yollayan, sevk eden
UGAN: Kaadir, yaratan ve hükmeden, Ali, yüksek, kudretli Çok eski dönemlerden beri, Tanrı ve Tanrı sıfatı olarak kullanılan bu sözcük, Türklerin ilk Müslüman oldukları dönemlerde de, bir süre Tanrı adı olarak kullanılmıştır.
UGIN: Fikir, düşünce
UGIŞ: Zeka, üretkenlik
UGUZ: Kutlu, mübarek
UĞRAK: 1- başvurulan kişi, bilge ve deneyimli kişi 2- Savaşa giderken, Askerlerin, aile ya da eşyalarını topluca bıraktıkları yer 3- Uğranılan yer UĞRAŞ: 1- Düşünce, tasarı, iş, çaba, meslek 2- Mücadele, savaşım, savaş, Karşılaşma, karşı karşıya gelme
UĞRAŞI: Meslek, iş, çaba, savaşım, geçim
UĞRUK: Savaşa giderken, askerlerin eşyalarını bıraktıkları yer
UĞRUN: Yan bakış, gizlice bakış
UĞUR: 1- Baht, talih, iyilik, güzellik, kut, bolluk, bereket 2- Süre, zaman
UĞURAL: Uğurlu, kutlu, bahtı açık
UĞURÇAL: birl. Uğur/Çal (Sürmek, değdirmek)
UĞUŞ: Akraba, hısım, kan bağıyla birbirine bağlı kişilerden her biri
UKUŞ: Zeka, akıl, yetenek
UL: 1- Temel, esas, kök, oluş, oluşum, doğuş 2- İşaret, nişan, iz
ULA: Temel, esas, esaslı
ULAÇ: 1- Ulaştıran, bağlayan, bağlayıcı 2- İsabet 3- Tim, takım, müfreze
ULAÇLI: Ulaştıran, ulak
ULAĞ: 1- Soy, nesil 2- Maiyet, bütünlük 3- ulak, haberci 4- Bağ, zincir
ULAK: 1- Ulaştırıcı, ulaştıran, haberci, bağlantı sahibi
ULAKÇI: Haberci, ulaştırıcı, bağlayıcı, bağlantı
ULAM: 1- Eklenmiş, katılmış, tim, müfreze 2- Dizi, dizili, bağlı, dizgi 3- yetenek, yetenekli 4- Ululama, selamlama, temenna
ULAN: 1- Bağlayan, bağlayıcı, birleştirici, etkileyici 2- Ulu, ululanmış, saygıdeğer, söz dinleten 3- Taze, tazelik, gençlik, genç, cıvan
ULANBATUR: birl. Ulan/Batur Ünlü ve ulu kahraman
ULANDI: Ululandı, kutsandı, kutlu
ULANMIŞ: Ulu, kutsal, mübarek, saygıdeğer
ULAR: 1- Bağlayan, birleştiren, birleştirici 2- Erkek keklik
ULAŞ: 1- Ululuk, ululaşma, yücelik 2- Oluş, temel, kök, soy, soyluluk 3- yetişme, kavuşma Ulaşılacak olan, bağlanılacak olan, ülkü, ideal 4- uluyuş, kurt gibi uluma 5- Savaş uranı, savaş narası 6- Kent, kent arazisi 7- İsabet
ULAŞLU: 1- Amaçlı, idealist, ne istediğini bilen 2- Ulaşıcı, bağlayıcı, birleştirici 3- Kentli, zengin, varlıklı
ULAT: Bağlayıcı, birleştirici
ULCA: 1- Ezeli, eskiden beri var olan 2- Pay, ganimet, savaş ganimeti
ULCAŞ: 1- Tazim, ululama, büyükleme 2- Bölüşüm, paylaşım, ganimet
ULDIZ: Yıldız
ULIÇ: Yavru, yaren, sevilen ve korunan
ULIÇIM: Yavru, yavrucak
ULIG: Uluma, yakınma, sızlanma
ULIŞ: Uluyuş, kurt gibi ulayış
ULU: (Ulug, Uluğ) Yüce, yüksek, mübarek
ULUCA: 1- Ululuğa yakın, saygıdeğer, hürmetli 2- Üst düzey yönetici, erk sahibi
ULUÇ: 1- Temel, esas, oluş, ulaş 2- Bağ, bağlantı, ilişki 3- Uluyuş, uluma
ULUĞAYGUÇİ: birl. Ulu/Ayguçi Göktürkler ve özellikle Uygurlar döneminde başbakan ( sadrazam, baş vezir) unvanı olarak kullanılmıştır.
ULUĞNOYAN: birl. Ulu/Noyan Çengiz Kagan döneminde “Başkomutanlık” sıfatı olarak kullanılan bir unvan
ULUKOYUN: birl. Ulu/Koyun Yakut destanlarında adı geçen “Ateş Tanrısı”
ULULA: Yücelt, yükselt, mübarek kıl
ULUM: Debdebe, şaşa, gösteriş
ULUN: (Ulan, İlun) Ulu, ululanmış
ULUNYEGE: birl. Ulun/Yeke Sözü dinlenen, saygı duyulan, bilgi ve deneyimine başvurulan hanım
ULURAK: Ulu, kebir, en büyük
ULUS: 1- Ul (Temel, kök, esas) dan…Ul/Uz 2- Ülüş, bölüm, kesim, topluluk…dan boy, halk, millet,budun
(Uygurlarda)
ULUŞ: Pay, bölüm
ULUTOYUN: birl. Ulu/Toyun Yakut destanlarında, kişiler arasındaki ilişkileri düzenleyen Tanrı
UMAK: Irk, soy, kemik
UMAN: Umutlu, bekleyen
UMANÇ: 1- Umutluluk 2- İntizar
UMAR: Umutlu
UMAY: Koruyucu, şefkatli, iyiliksever Eski dönem, Tanrıçalarından ( Halen, Altay ve tüm Kuzey Türkleri arasında çocukları sevip, koruduğuna inanılır)
UMDI: Arzu, beklenti
UMDU: Ümit, ümitli
UMUCA: Umutlu bekleyiş
UMUÇ: Rica, yakarış, beklenti
UMUG: 1- Ümit, destek, dayanak 2- Sığınma, iltica
UMUNÇ: Rica, beklenti
UMUR: Umar, ümitli
UMUŞ: Beklenti
UMUT: Umuş, ümit, beklenti
UNAT: Doğru, yerinde, uygun, olgun, yeterli
UNGAN: (Ungan) 1- Bağlı, bağımlı 2- Bahtiyar, doğru yolda olan
UR: 1- Uğur, baht, mutluluk 2- Vur, vurmak, darbe
URAGUT: Dişi, üretken, tohum, tohumluk
URAK: Orak, doğrayıcı, biçici
URAN: 1- Savaş narası, nara 2- Vuran, vurma eyleminde bulunan, döven 3- parola
URAS: 1-Kut, baht, mutluluk 2- Ateş bakışlı
URAZ: Uras, kut, baht
URAZLI: Mutlu, bahtiyar
URKU: Uğur, baht, talih
URPAK: (Urpağ) 1- Evlat, uşak 2- Kibar, nazik
URUK: 1- Boy, ok, ulus 2- Vuruk, vurgun
URUL: 1- Tür, cins 2- Örs URULU: Cins, soylu
URUM: 1- Şeref, onur, haysiyet 2- Meleke, beceri, yatkınlık
URUMDAY: Panzehir ve tedavi için kullanılan bir taş
URUN: 1- Orun, şeref, itibar 2- Miktar, adet
URUNÇA: 1- Şerefli, onurlu 2- Emanet, rehin
URUNGU: 1- Şeref, onur, haysiyet, onurlu davranış 2- Eğitim ve talim kılıcı
URUS: 1- Orus, uras, uraz) 2- Uruş, kırış, savaş
URUŞ: Vuruş, döğüş, kırış, savaş
URUŞKAN: Savaşçı, cengaver
URUT: 1- Aşama, merhale 2- Amaç, maksat, hedef
URUZ: 1- Uraz, uras 2-Vuruş, dövüş
US: Öz, töz, yeti, anlayış gücü, akıl, zeka, uzluk
USAN: Uslu, akıllı, usta, uzman
USBOL: birl. Us/Bol ..Dahi, üstün zekalı
USLU: Akıllı, uzman, üstad
USLUM: Becerikli, mahir
USLUY: Deneyimli, tecrübeli
USUK: Uslu, akıllı, zeki
USUN: 1- Uzun, uzman, derin, engin, deneyimli 2- Gerçek, sahih
UŞAK: Çocuk, genç, taze, ufaklık
UTA: 1- Tedavi, onarım, tamir, iyileştirme 2- Zafer, galibiyet
UTACI: Doktor, eczacı, iyileştirici
UTAMAN: 1- Utkan, galip, muzaffer 2- Eczacı, doktor 3- Edepli, mahçup, sıkılgan
UTAN: 1- Galip, muzaffer 2- Utanma, ar, mahçubiyet
UTANGAN: Utangaç, mahçup, kendi kendini sıkan
UTAR: 1- Yener, utkan, galip 2- İyileştirici 3- Kovalayan, takip eden
UTAŞ. 1- Yardım, imdat 2- Galibiyet, zafer, utku 3- Takip, kovalamaca
UTGUÇU: Galip, muzaffer
UTKU: Zafer, galibiyet, yenme, üstün gelme, güçlüklerden sonra ulaşılan mutlu son
UTLU: 1- Galip, muzaffer 2- Sıkılgan, mahçup
UTUGLU: Galip, muzaffer
UTUŞ: Yenme, galibiyet, zafer
UVUT: Utanma duygusu, edep, ar
UYAN: 1- Dikkat, itina, dikkatlilik, tedbir 2- İman, inanç
UYANIK: Dikkatli, tedbirli
UYAR: Uyumlu, uygun
UYAV: Uyanık, fatin, ferasetli
UYDAÇI: Mürşid, yol gösteren, öğretmen
UYGAN: 1- Uyumlu, geçimli, uysal 2- Bağlı, tabi, muti
UYGAR: (Uygur) çağdaş, uyumlu, uygun, uyarlı, medeni
UYGU: Ahenk, uyum
UYGUL: Uyumlu
UYGUN: 1- Yakışıklı, güzel, elverişli 2- Geçimli, dirlikçi, imtizaçlı
UYGUR: (uygar) Türk boyları içinde, bu günkü anlamda bir kentleşmeye ilk başlayan Türk boyu. Kağıdı, akapunkturu, matbaayı, tekstil sanayiini ve daha birçok buluşu gerçekleştiren Türk boyu
UYGUT: Uyumlu, ahenkli, uygar
UYGUTALP: birl. Uygut/Alp
UYLAŞ: 1- Uyum, geçim, dirlik, düzen 2- Fikir, düşünce, tefekkür
UYLAŞI: Uyum, geçim, barış
UYSAL: uyumlu, efendi,yumuşak başlı, halim, selim
UYTUN: Kutlu, mübarek
UYUM: Uygunluk, denklik, ahenk, armoni
UZ: Us, öz, erk, yetme, beceri, başarı, açılma, uzama, genişleme, açılım, yayılım
UZA: 1- uzay, genişlik, uzunluk, yaygınlık 2- Eski, eskiye dayalı, kadim, mazi 3- Geçiş, geçit
UZAK. 1- Uzman, usta, sanatkar 2- Güçlü, egemen, başarılı
UZAM: Uzmanlaşmış, ustalaşmış, usta
UZAN: Uzman, usta, akıllı, bilgili, sanatçı, pir
UZAY: Feza, gök boşluğu, uzamış, genişlemiş, geniş
UZDU: Ezeli, çok eski, kadim
UZEL: birl. Uz/El Usta, maharetli, becerikli, sanat erbabı
UZELLİ: Usta, maharetli, elinden iş gelen
UZLUK: İhtisas, uzmanlık
UZMA: Kalifiye, uzman, pir
UZMAN: Usta, pir, otorite
UZUG: Uyanık, dikkatli, müteyakkız
UZUN: (Usun) 1- Uzman, pir, becerikli, iş bitirici 2- yaygın, geniş 3- kalıcı, daimi
ÜÇ:Üç sayısı. (Türklerin, dokuz, kırk gibi, uğurlu saydığı sayılardan)
ÜGE: (Üyge) Ünlü, meşhur
ÜGİT: Öğüt, nasihat, propaganda, ajitasyon
ÜĞDÜL: Bahşiş, ihsan
ÜKELGE: Armağan, bahşiş
ÜLEGÜ: Bölüm, kısım, pay
ÜLEŞÜR: Bölüşüm, paylaşım, paylaşımcı
ÜLGEN: 1- Ulu, kebir 2- İri, büyük, heybetli, geniş Eski dönem Tanrılarından ( Türk mitolojisinde İyilik Tanrısı)
ÜLGİ: Örnek, numune
ÜLGÜDÜR: Örnek, numune
ÜLGÜT: Örnek, numune
ÜLKE: Bölüm, parça, toprak, diyar, memleket, vatan, yurt
ÜLKEM: Ülke, memleket sevgisi
ÜLKEN: (Ülgen)
ÜLKER: 1- yıldızlar topluluğu, yıldız kümesi 2- Yedi kardeşler de denen bir yıldız grubu 3- Kadife,peşkir,gibi dokumaların üzerindeki, ince tüy, hav
ÜLKER ÇERİĞ: Savaş hilesi, savaş taktiği
ÜLKÜ: 1- İdeal, hedef, olacağına inanılan..”Olan, değil, olması gereken..” 2- Prensip, adet, düstur 10- Üleşme, bölüşme, pay, pay ortaklığı
ÜLKÜCÜ: Ülkü sahibi, olması gerekeni düşünen
ÜLKÜDAŞ: Aynı ülküyü benimseyen ve aynı ülküyü paylaşan kimse
ÜLKÜM: Ülkü sevgisi
ÜLÜGLÜ: Talihli, kısmetli,bahtı açık
ÜLÜK: (ülüg) Kısmet, nasip, pay
ÜLÜKBULMUŞ: birl. Ülük/Bulmuş Uygur kağanlarının unvanlarından
ÜLÜŞ: 1- Bölüş, bölüm, bölünen, pay 2- Konuk payı, komşu payı, ailenin ihtiyaçları dışında, konu-komşu için ayrılan ve saklanan pay
ÜMİT: Umut 
ÜN: 1- Ses, seda 2- Şöhret, nam
ÜNAL: 1- Ün/Al 2- İnal (Han soyundan gelen, soylu ve imtiyazlı bey)
ÜNALDI: birl. Ün/Aldı Ünlü, meşhur
ÜNDEV: Namlı, meşhur
ÜNLÜ: 1- Meşhur, namlı, tanınmış 2- Gür sesli, sesini duyuran
ÜREGEN: Bereketli, münbit
ÜREGİR: Bolluk, bereket, üretkenlik
ÜREK: Yürek, kalp
ÜREKLÜ: Cesur, yiğit
ÜRENTUYUN: birl. Üren/Tuyun Eski dönem, Yakut Tanrı adlarından
ÜRGAN: Kıvılcım, şerare
ÜRGÜÇ: Körük, demirci körüğü
ÜRK: Dehşet, korku, çekince
ÜRKMEZ: Cesur, korkusuz
ÜRKÜT: Ürkütücü, dehşet verici
ÜRÜK: Süregen, daimi
ÜRÜN: Döl, verim, ekin, üremiş, üretilmiş olan
ÜRÜNDÜK: Verimli, seçkin, güzide
ÜRÜNDÜL: Seçkin, güzide
ÜRÜNG: 1- Maneviyat, manevi güç, 2- Temiz, pak
ÜSTE: Galip, faik
ÜSTEK: Üstün, galip, faik
ÜSTÜN: Üstte olan, galip, faik, muzaffer
ÜSTÜNGÜ: Üstün gelme, üste çıkma, mertebe atlama, derece
ÜTGÜR: Hızlı, seri, çabuk
ÜYEN: 1- İlkeli, özüne bağlı 2- İyilik sever, temiz yürekli
ÜYGE: İyi, yararlı, zararsız
ÜYGEN: İyilik dolu, temiz kalpli
ÜYGENARIK: birl. Üygen/Arık Altay, Tuva, Sogay destanlarında adı geçen bir Tanrıça
ÜZBE: Üzgün, kızgın, dargın, darlanmış, mahzun, sıkıntılı
ÜZLÜNÇÜĞ: Olağanüstü, fevkalade
ÜZÜT: Can, ruh, öz, tin
VAR:(Bar) Oluş, ortaya çıkış, doğuş
VARAK: Menzil, varılacak yer
VARAN: 1- Varlıklı, zengin 2- Sonuca ulaşan, eren
VARGI: 1- Varılan yer, sonuç 2- mal, mülk
VARIM: 1- Servet, mal, mülk 2- Evlilik çağına gelmiş kız
VARIMLU: Evlilik çağına girmiş kız
VARIŞ: Menzil, varılacak yer
VARIŞLI: Menzil
VARLIG: (Varlık) 1- Mevcudiyet, var olma hali 2- Varlık, servet, zenginlik, bütünlük 3- Evren, kainat
VAROL: birl. Var/Ol Uzun ömür dileği
VERDİ: Cömert, eli açık, bağışlayıcı, ihsanda bulunan
VERGİ: (Bergi, birgü) 1- Huy, tabiat, yaratılış, aitlik, özellik 2- Haraç, nüsum, verilen, ödenen nesne
VERİM: Veriş, verme, bolluk, bereket
VURGUN: 1- Vurulmuş, aşık 2- Baskın, ırgalama, yağmalama
VURUŞ: Savaş, döğüş, kırış
YABA:(Yapa, yapu) 1- Yapı, oluşum 2- Alet, edevat
YABAGU: Yabgu, genel vali
YABALAK: (Yablak) Dayanıklı, metin, mütehammil
YABAN: 1- Yabancı, yabani, vahşi 2- Yapan, yapıcı
YABAY: Yapay, yapan, yapıcı, yapılmış
YABGU: 1- Üst düzey yönetici, genel vali 2- Merkeze bağlı, özerk, bölge yöneticisi Göktürkler döneminde kullanılan unvanlardan
YABIR: 1- Yapıcı, pozitif kişilikli, aktif, çalışkan 2- Güreşçi, dövüşçü
YABIT: Yapı, yapıt, eser, mamulat
YAD: Yabancı, el, değişik, farklı
YADA: 1- Yabancı, yabancılık 2- Büyü, sihir, büyü yapmada kullanılan bir taş
YADAÇI: 1-Yaya, piyade 2-yada taşını kullanan
YADEL: birl. Yad/Er Gurbet, yabancı memleket
YADU: Yadçı, yad edici
YAGLA: Talan, yağma
YAĞADUR: Yağış, yağmur, bolluk, bereket
YAĞAN: (Yagan, yakan) 1- Ucu ateşli ok 2- Yağmur 3- Gökten inen nur 4- Yakın, yar, canan
YAĞDIKAR: birl. Yağdı/Kar (kar yağarken doğan)
YAĞDIBASAN: birl. Yağdı/Basan Düşmana baskın yapan, düşmanı yok eden
YAĞISAVAN: birl. Yağı/Savan Düşmanı püskürten, düşmanı kovan, kovalayan
YAĞISIYAN: birl. Yağı/Sıyan (defeden,kovan)
YAĞIŞ: (Yakız- Yavuz) Kara, yanarak kararmış, karaya çalan mec. Cesur, gözü pek, şiddetli, yaman,yiğit
YAĞMA: Ganimet, ganimet paylaşımı, bolluk
YAĞMUR: Yağmur yağışı
YAĞMURCA: 1- Sessiz ve kısa süren yağmur 2- Bir geyik türü
YAĞRIK: Yakarış, dilek, niyaz
YAĞRIKÇI: 1- Yakarıcı, duacı 2- Faydalı, yararlı, işe yarayan
YAĞUK: (Yavuk) Sevilen, yakınlık duyulan, gönül yakınlığı
YAKA: 1- Sınır, sınır bölgesi 2- Kıyı, sahil
YAKACIK: Dağ eteği
YAKAK: Ucu ateşli ok
YAKAN: 1- Yakıcı, yok edici 2- yağan
YAKARCA: Yakan, sıcaklığı artıran
YAKARI: Dua, temenni, yakarış, dilek
YAKI: 1- İlaç, em 2- Yakıcı, yakan
YAKIT: Yakılan, enerji, ısı kaynağı
YAKŞI: Yakışıklı, güzel, çekici, yakıcı, uygun, yakışan, doğru, iyi
YAKŞILIK: İyilik, güzellik, uygunluk
YAKTU: Işık, meşale, aydınlık
YAKURA: Yakın, yakınlık duygusu
YAKUŞUK: Yakışıklı, güzel, uygun, uyumlu YAKUT: Yakıt, enerji, yakılan
YAKUZ: (Yağız)
YALABIR: Parlak, parıldayan
YALABUK: Parlak, parlayan, ışık saçan
YALAP: Parlak, ışıltı, ışık saçan Eski dönem, Tanrı ad ve sıfatlarından
YALAV: Alev, yalaz
YALAVAÇ: (Yalvaç)
YALAZ: 1- Yalın, çıplak, aleni 2- Yalın, parlak, ışıklı, alev
YALÇIN: Dik, sarp, yukarıda, ulaşılmaz
YALDIR: 1- Parlak, parlayan 2- Yıldır, yıldıran,caydırıcı, ürkütücü
YALDIRAN: 1- Yıldırıcı, caydırıcı, ürkütücü 2- Parlak, parlaklık veren
YALDIRIM: Yıldırım
YALDIZ: Yıldız, ışık saçan parlaklık, parlayan, ışıyan
YALDRUK: (Yaldırık) Parlak, parlatılmış
YALGIN: Serap, yanıltıcı, görüntü
YALIM: 1- Ateş, kıvılcım 2- Kılıcın keskin tarafı, ince ağzı 3- Yüksek kayalık
YALIN: 1- Alev, parlaklık 2- Çıplak, net, açıkta olan, açık 3- Kınsız, kılıfsız kılıç 4- Tek başına, yalnız, korumasız
YALINCA: Yalnız, tek başına
YALINÇAK: Fakir, çıplak, garip, korumasız, sahipsiz
YALMA: Yağmurluk, pelerin
YALMAN: 1- Kılıcın keskin ağzı, kılıcın uç kısmı 2- Eğimli, dik tepe
YALTUK: Yalınlık, yalın olma hali
YALUNMUŞ: Yalın, çıplak, saf, arınmış
YALUY: Büyü, tılsım, sihir
YALVAÇ: Elçi, resul, nebi, peygamber
YAM: 1- Ulak atı 2- At gibi, ata benzeyen 3- Çöl, kıymık
YAMAÇ: 1- Bayır, dik yokuş, dağ ya da tepenin herhangi bir yanı 2- karşı, karşısı, öteki taraf
YAMAN: 1- Müthiş, dehşetli, etki ve beceri bakımından olağanüstü 2- kötü, fena, üzücü
YAMÇI: 1- Ulak, postacı 2- Ulak atı, postacı atı 3- Yağmurluk 4- Kalın, kolsuz yelek, kuzu derisiyle kaplı giysi
YAMI: 1- Ulak atı 2- Çöp, kıymık 3- İtibar, nüfuz
YAMTAR: 1- Yaman, güçlü, kuvvetli 2- Yağmurluk 3- Obur, iştahlı
YAMUN: Denetleyici, murakıp, müfettiş
YANAÇI: (Yanaç) Canip, candan
YANAĞ: (Yanak) Yanak, kısım, yan
YANAR: 1- Işıltı, ışık 2- Ateşli, sıcak kanlı, heyecanlı
YANAŞIK: 1- Ev kızı 2- Evlatlık alınmış, kız çocuğu
YANBAŞ: Sadık, bağlı, yakın, yanında,yanı başında, vefakar
YANÇ: (Yanıç) Hilal, yarım ay biçiminde
YANÇI: At zırhı
YANÇUK: (Yancık) At zırhı, at örtüsü
YANDAŞ: Yanında duran, destekleyen, taraftar
YANDIK: Heybetli, gösterişli, azametli
YANDU: İnançlı, inanmış, imanlı
YANGAK: 1- Yanak 2- yanık, sevdalı
YANGAL: Isı, hararet, ateş, ateşlilik
YANGIR: Hazin söz, dokunaklı söz, hazin konuşma
YANI: Cilve, işve, can yakıcılık
YANIK: Sevdalı, aşık, istekli
YANIT: 1- Ödül, mükafat 2- Karışık
YANK: (Yang) Metod, tarz, usul
YANKU: (Yankı) Aksi seda, eko
YANKUÇİ: Mübaşir, mahkeme memuru
YANTIR: Şehla, şehla gözlü
YANTUK: Gösterişli, azametli
YANTUT: Bedel, tazminat
YANUÇ: İnce, zayıf, narin
YANUK: 1- Esmer tenli, kara 2- Tutkun, aşık, sevdalı
YANULMAS: Yanılmaz, deneyimli ve bilgili otorite
YANUT: 1- Yanıt, karşılık 2- Ödül, mükafat
YAPA: 1- Yaba, yapma, çaba, enerji 2- Bütün, hep, bütünlük 3- Vefa
YAPAGI: Yapağı
YAPAN: 1- Yapıcı 2- Yaban, vahşi
YAPAR: Yapıcı, üretken, olumlu
YAPARLI: Olumlu, yapıcı YAPI: Mamul, yapılmış
YAPINÇ: (Yapınçak) Yapılmış, mamul, üretilmiş
YAPRAK: (Yapurgak) Ağaç ve çiçek yaprağı
YAPSIK: Memnuniyet, neşe, meftunluk
YAPŞIN: Yapıcı, olumlu, becerikli
YAPURGAK: (Yaprak)
YAR: (Yarı) 1- Uçurum, dik bayır 2- Tanzim, tertip, organizasyon
YARAGU: Yarar, fayda, faydalı, yararlı
YARAĞ: (Yara, yarag) 1- yarar, fayda, faydalı, yararlı 2- Silah, zırh, kalkan
YARAŞUK: Uyumlu, ahenkli, barışsever
YARAŞUR: Uygun, münasip, layık
YARATGAN: Yaratan, yaratıcı
YARATU: Yaratma, tertipleme, düzenleme
YARATUN: Yaratıcı, tertipli, düzenli, örgütlü
YARATUR: Yaptırır, yaptırımcı, buyurucu, örgütleyici
YARAY: Usta, ehil, beceri sahibi
YARAYLI: uygun, münasip, yararlı
YARÇI: Ortak, şerik, hissedar
YARDAK: Yardımcı, asistan, muavin, refik
YARGAN: 1- yararlı, faydalı, güvenilir, yakın 2- Koruyucu, muhafazakar 3- Mahkeme, yüksek mahkeme
YARGI: Hukuk, hüküm, mahkeme, adalet
YARGICI: (yarguçu, yagıçı, yargıç) Yargıç hakim, yargı mercii
YARGIÇ: Yargıcı, hakim
YARGIÇU: Yargıç
YARGIN: (yarkın) 1- Gün ışığı 2- Şimşek, çakın 3- Canan, arkadaş, dost 4- Güler yüzlü
YARGUÇİ: yargıcı, yargıç, hakim
YARIM: 1- Yapıcı, yaparlı 2- yarış, müsabaka 3- Bölüm, bölünmüş
YARIP: Yarı, yarım, bölük, bölünmüş
YARIŞ: 1- Bölüş, bölüm 2- Müsabaka, karşılıklı, ileriye atılma
YARIZ: Yarıcı, seri, çabuk, hızlı
YARLIG: 1- Bağışlama, acıma 2- Ferman, buyruk
YARLIGAÇ: İnayet, yardım, bağış, merhamet
YARLIGAMAS: Acımasız, acımaz, bağışlamaz
YARLIGAMIŞ: Bağışlayıcı, merhametli, rahman
YARLIGAN: Rahman, bağışlayıcı
YARLIGAR: Bağışlayıcı
YARLIGASUN: Bağışlayıcı, rahman
YARLIK: 1- Esirgeme, bağışlama 2- Buyruk, ferman
YARLUĞ: İrade, istem, buyruk
YARLUK: Muhtaç, yoksul
YARLUKA: Bağış, lütuf, koruma
YARMAKAN: (Yarmayan) Armağan, hediye
YARP: (yarıp) Durgun, sabit
YARPAN: (Yarban, yarıban) Sabit, sakin, kendi halinde
YARŞI: Hissedar, ortak
YARTIM: 1- Kısım, bölük, fırka 2- yardım, inayet, destek
YARUK: 1- Işık, ziya, nur 2- Zırh, koruyucu
YASA: (Yasağ, yasak) Yasa, kanun, nizam, kural, kaide, yasak
YASAÇU: (Yasacı) 1- Parlamenter, Yasa yapan, yasa koyucu 2- Yasaya bağlı, yasal
YASAĞ: yasak, yasa
YASAL: 1- Disiplin, sıra, saf, ordunun yürüyüş düzeni 2- Yasalara uygun, nizami
YASAN: 1- Tertip, düzen, tasarı, plan 2- İşaret, alamet, karar
YASAR: (Yasur) yasaya uyan, yasayı uygulayan
YASATAN: Yasalara saygılı
YASATUR: birl. Yasa/Tur Yasaya bağlı, yasayı uygulayan
YASAVUL: Yasayı korumak ve uygulamakla görevli memur. Zabıta, polis
YASGUÇ: Nikap, gizlilik
YASUN: (Yisun, İsun) Doğa, tabiat
YASUT: (yasıt) Onur, şeref, haysiyet
YASVUL: (Yasavul) 1- Polis, bekçi 2- Mübaşir
YAŞ: Yaşam, ömür, dirilik, aydınlık, tazelik, ışımak, gelişim, yeşil, yeşillik, gençlik
YAŞAGU: Ömür, yaşam, canlılık
YAŞAM: Hayat, ömür, dirlik
YAŞAR: Ömür, yaşam, hayatta kalış.
YAŞIL: 1- Yeşil renk mec.Tazelik, gençlik, zindelik 2- Yeşillik, çimenlik
YAŞIN: 1- Gizlilik, gizem 2- Şimşek, çakın YAŞIT: 1- Genç, körpe, taze 2- Eş, denk, eşit
YAŞLAK: Giz, sır, esrar, gizli kalması gereken
YAŞRU: Giz, gizlilik, gizem
YAŞUK: 1- Işık, ışın, şua 2- Aşkın, aşık, aşmış
YAŞURGAN: Ketum, sıkı ağızlı, sır vermez
YATAĞAN: (yatağan, yatakan) 1- Kama türünde, iki tarafı da kesen bir bıçak 2- Tembel, miskin 3- Borcunu ödemeyen, üstüne yatan (Uygurlarda)
YATI: Yatık, meleke, beceri, el yatkınlığı
YATKIN: Yatık, yatan, uygun, uygunluk
YATMAN: Muti, efendi, uyumlu, itaatkar
YATUK: 1- Yatkın, becerili, meleke sahibi 2- Tembel, ağır kanlı
YAVÇIN: (Yatçın) Konuk, yatıya gelen konuk
YAVGA: Soy, sop, nesil
YAVNIK: Sevinç, neşe
YAVRİ: Zayıf, güçten düşmüş
YAVRU: Zayıf, bakıma muhtaç, ilgi ve bakım bekleyen
YAVUK: Yakın, yakında duran, yakınlık duyulan, sevgili
YAVUZ: (Yağız) Kara. Mec. Sert, şiddetli, dehşetli, gözü kara, yaman
YAY: 1- Yaz mevsimi 2- Silah, ok atmaya yarayan, gergin ip, gerginlik
YAYAK: yaya, piyade
YAYGARU: Bahar, ilkbahar, yaza doğru giden zaman
YAYGIN: Yayık, yayılmış
YAYGIR: (Yaykır) Uzay, sema, yıldızlar alemi
YAYIK: 1- Yaygın, geniş, genişlemiş 2- Tufan, deprem 3- Altay destanlarında adı geçen, Tanrı Bayülken’in oğullarından
YAYIN: Serap, feyezan
YAYKIRU: Sema, feza, uzay
YAYLA: Yaz yeri, yazlık. Bahar, yaz aylarını geçirmek için çıkılan, yüksek dağlık bölge
YAYLAERİ: birl. Yayla/Eri Yaylada yada yaylaya çıkarken doğan çocuklar için kullanılan adlardan
YAYLAK: Yayla, yazlık, sayfiye
YAYLIM: Yayılım, yayılma yeri, otlak, mera
YAYMUT: birl. Yay/Mut Yaz sevinci
YAYUÇI: Yayıcı, dağıtıcı, haber yollayan
YAYUK: 1- Yayvan, yayık, uçsuz bucaksız, geniş 2- Deprem, yer sarsıntısı
YAZAL: Takı, süs, ziynet, mücevher
YAZDIÇ: Anıt, kitabe
YAZGAN: Yazan, yazıcı, yazgıyı tayin eden Eski dönem Tanrı ad ve sıfatlarından
YAZGI: 1- Yazı, kader, mukadderat, alın yazısı 2- Tanrısal, ilahi
YAZGULU: Talihli, bahtı açık
YAZIÇU: Yazıcı, katip
YAZIM: Yazgı, mukadderat
YAZIN: 1- Yaz vakti, bahar vakti 2- Kader, alın yazısı
YAZINÇ: Kader, alın yazısı, yazgı
YAZIR: 1- Çok ülkeler gezmiş, görmüş 2- Çok ülke fethetmiş, fatih 3- yazar, yazıcı, katip
YALIKSUZ: Günahsız
YEDEN: 1- Yedeği olan, yedeğine alan, tedbirli 2- Yetkin, yeterli, usta
YEĞ: (Yek, yeke) 1- Yüksek, ala, eftal, iyi, daha iyi 2- Soylu, asil, seçkin, güzide, mümtaz
YEĞEN: 1- Yeğ, üstün tutulan, yeğin, yeğlenmiş 2- Kardeş çocuğu (Babası ya da anası ölmüş, ya da uzakta olup da yakın akrabaları tarafından yetiştirilen çocuklar için kullanılan adlardan) 3- Güveyi, damat
YEĞİN: 1- Üstün, faik 2- Bereketli 3- Çok güçlü, hızlı, şiddetli
YEĞİNEK: 1- Yığınak, küme 2- Üstün, faik, daha iyice
YEĞNİ: 1- hafif 2- Alçak gönüllü, mütevazı
YEĞREK: (Yekrek) Etfal, evla, iyi, üstün
YEKREK: Evla, iyi, üstün, daha iyi
YEKSEK: Tedbirli, ihtiyatkar
YEKÜL: (Yeğül) Yeğni, faik, üstün, muzaffer
YEL: Rüzgar, esi
YELÇİ: Yel gibi, hızlı
YELEÇ: Havadar, yel alan
YELEGEN: Hızlı, süratli, yel gibi
YELEĞİN: Yel alan yer, rüzgarlı yer
YELEK: 1- yel gibi, hızlı 2- Okun arkasına takılan tüy, denge tüyü 3- Kolsuz ve yakasız üst giyeceği
YELEKİN: (Yeleğin) Rüzgarlı, yel esen yer, yel alan yer
YELEN: 1- Arzu, istek, dilek 2- Fırtına
YELES: Yel esintisi, havadar, rüzgarlı YELESER: birl. Yel/Eser Esintili, havadar, yel esen..
YELESEY: birl. Yel/Esey Yel esintisi
YELİM: Hareket, eylem, devinim
YELİN: 1- Yel uğrağı, yel alan yer 2- Yel değişi, yel teması
YELİS: Havalı, havadar, rüzgarlı
YELİZ: birl. Yel/İz Havadar, rüzgarlı, havalı
YELKİM: Havadar, havası güzel yer
YELKİN: 1- Konuk 2- Hızlı, yol gibi
YELME: Öncü, yol gösteren, mihmandar
YEN: 1- Yenmek, alt etmek 2- Deri 3- Yeni, yenilik, orijinal
YENCİLEK: Hafif, yeğin, narin, ince
YENDÜN: Tercih, seçim, referans
YENGİ: 1- Yeni, orijinal 2- Zafer, utku
YENİN: Galip, muzaffer, utkan
YENİŞ: Galebe, galibiyet, utku
YENTÜR: Kalender
YENÜL: Mütevazı, alçak gönüllü
YEPREM: Aktif, faal, becerikli, çalışkan
YERÇİ: Başkan, yol gösteren, mürşit.
YERÇİLİG: İzci, takipçi
YERGİN: Mahzun, hüzünlü, bitkin, yere bakan, boynu bükük
YERİNÜR: Durağan, üşengeç, müşkülpesent
YERÜNMES: Hamarat, çalışkan, vurdumduymaz
YESUGA: (Yesuge, yasagay) Yasa, yasak, yasaya bağlı, yasadan yana
YESUKEN: (Yasuga, yasag, yasa) Yasa, yasak, yasalı, yasaya bağlı
YEŞİL: (Yaşil) 1- Tazelik, taze, körpe 2- Çimen, çimenlik
YEŞİM: Eski dönemlerde, Türklerce kutsanmış, değerli taş
YET: (yeti, yete) Kudret, kuvvet, güç, yeterlilik, yetenek, beceri, maharet
YETEK: Gaye, emel
YETEN: Yeterli, yetkin, usta
YETER: Yeterli, yetkin, uzman, usta
YETGİN: (Yetkin) Çok çocuklu ailelerin, doğan çocuklarının sonuncu olması dileği ile verilen adlardan
YETİ: 1- yetenek, kabiliyet 2- Yetkin, kamil, olgun, becerikli, mükemmel 2- Etki, etkileyici 3- Yitik, kayıp, harcanmış, zayi olmuş
YETİŞGİN: (yetişkin) Yetişmiş, olgun, kamil, mükemmel, yetenekli
YETİZ: Hazır, amade, yeterli, olgunluğa ermiş
YETKİ: Sorumluluk, maharet, iş bitirme gücü
YETKİN: 1- yetişkin, ehil, uzman, yeterli 2- Etkileyici, çekici, mükemmel
YETMEN: Olgun, gelişkin, uzman, yeterli, yetenekli
YEYGÜ: Armağan, bahşiş, ihsan
YEYİN: Galip, kavi, üstte olan
YEYNİ: Ehven, iyi
YEYREK: Makbul, kabul gören, beğeni toplayan
YEYTEM: Eski, kadim
YIBAR: 1- Koku, parfüm 2- Kokulu mum
YIĞ: Yığılı, toplu, birikim
YIĞAÇ: 1- Ağaç 2- Erkeklik organı 3-Yığıcı, toplayıcı
YIĞAN: (Yıkan) 1- Yığıcı 2- Yıkıcı
YIĞIN: Birikim, kitle, yığılı olma hali, yığılmış, istifli
YIĞINAK: Toplum, kitle
YIĞINCA: Genel, teamül, sosyal kural, toplumun benimseyip uyguladığı kurallar
YIĞLINÇ: (Yığlınçı) İffetli, edepli, namuslu
YIĞNAK: Yığın, yığınak, toplum, cemaat
YIĞRIK: Mahçup, utangaç
YIKIN: (yığın) Afet, yıkım , zarar
YIKINÇ: Yıkmış, yıkıcı
YIKMIŞ: Yıkıcı, devirici, güçlü
YILDIKU: Yıldız, yıldız kümesi
YILDIR: Yıldırıcı, ürkütücü, heybetli, dehşetli, şiddetli, gözü kara, korkusuz
YILDIRAN: Ürkütücü, korkutucu, heybetli, gösterişli
YILDIRGAN: Yıldıran, ürküten, korkutan, şaşalı, gösterişli
YILDIRIM: (Yaldırım) 1- Berk, yüksek voltajlı elektrik 2- Göz kamaştırıcı, ışık, aşırı parlaklık
YILDIZ: Yaldız, parlak ışık, parlayan, ışıyan
YILDURU: Berrak, net, temiz, billur
YILGI: Yılma, dehşet, ürküntü
YILGIN: Yılmış, ürkek, bezgin YILIĞ: Yılgın, yılmış, yılık
YILKI: 1- At, at yavrusu 2- At sürüsü
YILMA: 1- Yılmaz, azimli, dayanıklı, cesur, korkusuz 2- Dik yokuş, dağ yamacı
YILMASIN: Yılmaz, korkusuz
YILMAZ: Gözü pek, korkusuz, batur, dayanıklı, azimli
YIRAGU: Yırcı, çalgıcı, enstrüman çalan, müzisyen
YIRAK: Irak, uzak, mesafeli
YIRI: Sol, sol taraf, tek taraf, tek taraflı
YIRIM: 1- Solak 2- Yarım 3- yurt, toprak
YIŞ: (Yaş, yaşıl) Orman, yeşillik içindeki bölge
YIŞIK: 1- Tulga, demir örgülü tulga 2- ışık
YİBEK: Ateşli, hararetli, heyecanlı
YİGE: Dayanıklı, kavi, metin
YİĞENEK: 1- Toplum, kitle, cemaat 2- Yeğen, yeğencik
YİĞİN: Daha iyi, sıkı, dayanıklı, üstün, tercih edilir
YİĞİT: 1- Yeğ, yiğ, iyi, daha iyi, sıkı, sağlam, güçlü, batur, cesur 2- Delikanlı, cıvan, genç 3- Koca, eş
YİLUN: (Yulun) İri, heybetli, gösterişli, cesim
YİNÇKE: İnce, zarif, narin
YİNÇKELÜ: Nazik, anlayışlı, kibar
YİNÇÜ: 1- İnce, zarif 2- İnci
YİNDEK: Daimi, ebedi, sürekli, kalıcı
YİR: Yer, toprak, arazi, arz, yeryüzü, dünya
YİRÇİ: Kılavuz, izci, rehber, yer bilen, yer bildiren
YİRDEŞ: Yurttaş, hemşehri, aynı toprağı paylaşan
YİRDİNÇÜ: (Yirtinçü) Evren, kainat
YİRGA: Mesut, mutlu, mutluluk dolu
YİRTİNÇÜ: Evren, kainat
YİSUN: (yasun, yosun) Doğa, tabiat, yeşillik
YİTER: Varis, mirasyedi
YİTİK: 1- Yetik, olgun 2- Keskin 3- Kayıp
YİTİRMİŞ: Yitik, kayıp, kaybetmiş, yoksul
YİTÜT: Meziyet, maharet, beceri
YİZEK: Askeri kılavuz, öncü
YOĞANAK: Yığınak, kütle
YOĞÇI: Yuğcu, yuğ yapan, yokluk çeken, yas tutan, yasçı
YOĞUN: Kalın, gür, iri, sık, sıkı, cüsseli, fazla, fazlalaşmış, katılaşmış
YOKUŞ: Yukarı, yukarı doğru çıkan, dik yol, bayır
YOL: Üzerinden gidilen…mec. 1- Kut, mut, baht, yazgı, kader 2- Örf, adet, töre, gelenek teamül, ilke, tarz, gidişat
YOLA: 1- Örf, adet, usul, erkan 2- Meşale, kandil
YOLAÇ: Yol gösterici, mihmandar, rehber, önder, öncü
YOLAÇAN: birl. Yol/Açan Önder, öncü
YOLAK: birl. Yol/ak 1- Dürüst, namuslu, temiz 2- Çığır, yenilik, gidişat 3-Kısa yol, kestirme yol
YOLALDI: birl. Yol/Aldı 1- İlerleme kaydeden, gelişen, uzman, profesyonel 2- Terbiyeli, yola gelmiş, geleneklerine bağlı
YOLBAK: (Yolbaka, yolbakan) Konuksever, misafirperver
YOLBİLİR: birl. Yol/Bilir Görgülü, bilgili, usul erkan sahibi
YOLÇU: 1- Önder, başkan, şef, lider 2- Peygamber, nebi 3- Gelenekçi, muhafazakar 4- Yolcu, yola çıkmış, yolunda giden
YOLDAM: 1- Uysal, yola gelen, yolunda giden 2- Usul, metot, tarz
YOLDAŞ: Aynı yolun yolcusu, aynı yolu paylaşan, aynı yola gönül vermiş, aynı yola baş koymuş,aynı, töre ya da prensipler üzerinde, fikir ve gönül birliği eden, çok yakınlaşmış dost, dava arkadaşı
YOLERİ: birl. Yol/Eri 1- Töreye bağlı, edep erkan sahibi, bilgili, deneyimli
YOLKULU: birl. Yol/Kulu mec. Töreye ve kurallara bağlı
YOLLUK: (Yolluğ) 1- Kutlu, mübarek 2- Olgun, ergin 3- Halas bulmuş, huzura kavuşmuş, mesut,bahtiyar
YOLOĞLU: birl. Yol/Oğlu 1- Fedai, serdengeçti 2- Adak, adanmış, kurban 3- Bağlı, kendini töreye bağlamış
YOLUM: Usul, kaide, prensip
YONAT: Tam, eksiksiz, kusursuz
YONCA: Sulu yerlerde yetişen bir bitki türü
YORÇU: 1- Askeri kılavuz, öncü, yol gösteren 2- Yorumcu, yorumlayan, eleştirmen
YORDAM: 1- Alışkanlık, eğilim, usul, meleke, beceri 2- Jest, eda, işve, naz
YORGA: (Yurga) Rahvan giden at
YORNUK: İstirahat, istirahatgah, dinlenme yeri
YOVAŞ: (Yavaş) Çelebi, efendi, ağırbaşlı, halim
YÖNDEM: (Yöntem) Usul, tarz, teamül, töreye uygun biçimde olan
YÖNET: 1- Biçim, tarz, yöntem 2- uygun, uyumlu, uysal, geçimli YÖNTEM: (Yöndem)
YÖNTEN: Uslup, tarz, biçim
YÖRGENÇ: Dağ dönemeci, dağ yolu
YÖRTEM: Usul, biçim, tarz
YÖYEN: Mevsim, sezon
YUĞAK: Bir su kuşu
YUĞKA: İnce
YUĞRUŞ: (Yukruş, Yukruç) Eskiden, halktan biri olmasına rağmen, gösterdiği performans ve yararlılıklardan sonra, bey mertebesinde değerlendirilerek, devletin üst düzey kademelerinde görev alan kişi.
YULA: 1- Su kaynağı, yerden fışkıran su, göze 2- Işıldak, ışık veren, meşale, kandil
YULU: Adalet
YULYU: (Yulu, yuluk, Yulug) 1- Yardımcı, yardımsever, fedakar, adil 2- haraç, cizye, vergi 3- traş,traşlı, bakımlı 4- Yağma, yağmacı
YULUĞBİRİM: birl. Yuluğ/Birim Uygurlar döneminde alınan mahsul vergisi
YULUK: 1- Traşlı, matruş, bakımlı 2- Yağmacı
YULUM: 1- Fedakar, yardımsever 2- Yolcu, yoluna bağlı, töresine bağlı
YULUN: Yolcu, yola giden
YUM: Mutluluk, neşe, ferahlık, rahatlık
YUMLU: Mutlu, kutlu, mübarek, huzurlu
YUMRU: 1- Yumulu, yumuk, yumruk 2- İri, heybetli, gösterişli
YUMUK: Gül, goncagül
YUMUŞ: (Yumuç) 1- Söz, öğüt, nasihat 2- Emir, ferman, buyruk 3- Müjde, müjdeli haber 4-
Yumuk,yumulmuş, yumruk
YUMUTGAN: Yapıcı, birleştirici, pozitif kişilik
YUNAK: Üzerinde çamaşır dövülen ve yıkanan, büyük taş parçası
YUNMUŞ: Yıkanmış, temiz, titiz, arık
YUNT: 1- Çadır, oba, ev, yurt, vatan 2- Terbiyesi tamamlanmamış, yarı yabani at 3- Uygarlık,medeniyet
YURÇI: 1- Becerikli, mahir 2- Yirçi, yer gösteren, rehber
YURGA: Rahvan giden at.
YURT: 1- Vatan, kutsanmış toprak 2- Kaynak, asıl, kök 3- Uygarlık, medeniyet 4- Çadır, oba, ev
YURTLAK: Yurt, vatan, sonradan yurt edinilmiş yer, yurtlaştırılmış yer.
YUTLUK: Kayıp, zarar
YUTUM: Yudum, damla, tike, parça
YUVANÇ: Teselli
YÜCE: Yüksek, ulu, alicenap, haşmetli
YÜCEL: Yücelik, ululuk, haşmet.
YÜĞNEK: Alçak gönüllü, mütevazı.
YÜĞNÜK: Salih, temiz
YÜĞRÜK: Yürük.
YÜĞÜNT: Selam
YÜKNÜ: Secde, secdede olan
YÜKSEL: Yükseklik, ululuk, büyüklük
YÜKSELEN: Ulu, kişi.
YÜKSELİŞ: Büyüklük, ululuk, ikbal
YÜKÜN: Baş eğme, saygı duruşu, tazim.
YÜKÜNÇ: Eğilme, reverans
YÜKÜNGEN: Eğilen, reverans yapan, saygılı
YÜKÜNTÜR: Baş eğdirir, diz çöktürür.
YÜKÜNÜK: Eğilme, reverans
YÜKÜNÜR: İbadet eden
YÜLEK: Okun arkasındaki, denge tüyü.
YÜNKÜL: Hafif, narin
YÜRE: Daire, helezon, çember
YÜREĞİR: Yürekli, cesur
YÜREKLİ: Cesur, korkusuz.
YÜRİK: Yaşam, hayat,, ömür, geçim.
YÜRÜM: Yaşam, hayat, ömür
YÜZAK: birl. Yüz/Ak Masum, günahsız.
YÜZAKI: birl. Yüz/Akı Masumiyet, temizlik, namus, namusluluk, başarı, beceri
YÜZLÜG: (Yüzlüg, yüzlük) Soylu, dürüst, namuslu.`



const data = rawData.split('\n').reduce((acc, line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();
        acc[key.trim()] = value.trim();
    }
    return acc;
}, {});

function normalizeTurkish(input) {
    return input.trim().replace(/ı/g, 'I').replace(/i/g, 'İ').toUpperCase();
}

function search() {
    const searchInput = normalizeTurkish(document.getElementById('searchInput').value);
    const resultContainer = document.getElementById('resultContainer');

    if (searchInput.length < 2) {
        alert("en az 2 harf giriniz.");
        return;
    }

    // Arama sonuçlarını temizle
    resultContainer.innerHTML = '';

    // Arama işlemi
    const keys = Object.keys(data);

    // Anahtar kelimeleri sırala
    keys.sort((a, b) => {
        const aNormalized = normalizeTurkish(a);
        const bNormalized = normalizeTurkish(b);

        // İlk olarak tam eşleşenleri sırala, sonra içerenleri
        if (aNormalized === searchInput) return -1;
        if (bNormalized === searchInput) return 1;

        // İçerenleri sırala
        if (aNormalized.includes(searchInput) && !bNormalized.includes(searchInput)) return -1;
        if (!aNormalized.includes(searchInput) && bNormalized.includes(searchInput)) return 1;

        // Diğer durumlar
        return 0;
    });

    const resultsPerPage = 10;
    let displayedResults = 0;

    for (const key of keys) {
        const normalizedKey = normalizeTurkish(key);
        const meaning = data[key];

        // Anahtar kelimenin kendisi veya anlam kısmında birebir eşleşme yap
        if (normalizedKey.includes(searchInput) || normalizeTurkish(meaning).split(' ').some(part => part === searchInput)) {
            resultContainer.innerHTML += `<div style="padding:0.1em;"><strong>${key}:</strong> ${meaning}</div>`;
            displayedResults++;

            if (displayedResults >= resultsPerPage) {
                break;
            }
        }
    }

    if (displayedResults > 0) {
        resultContainer.style.display = 'block';
        resultContainer.innerHTML = `<h4 style="text-align: center;">arama sonucu</h4>` + resultContainer.innerHTML;
    } else {
        resultContainer.style.display = 'block';
        resultContainer.innerHTML = '<p>aradığınız kelime bulunamadı.</p>';
    }
}

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Enter tuşuna basıldığında search fonksiyonunu çağır
        search();
    }
});
