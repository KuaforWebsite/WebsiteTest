let MakeTr = document.querySelector("#tr"),
    MakeEn = document.querySelector("#en"),
    MakeArXA = document.querySelector("#arXA"),

    Menu = document.querySelector("#Menu"),
    Konum = document.querySelector("#Konum"),
    KonumText = document.querySelector("#KonumText"),
    KonumText1 = document.querySelector("#KonumText1"),

    iletisim = document.querySelector("#iletisim"),
    medya = document.querySelector("#sosyal-media"),


    Item1 = document.querySelector("#Item1"),
    Item2 = document.querySelector("#Item2"),
    Item3 = document.querySelector("#Item3"),
    Item4 = document.querySelector("#Item4"),
Item5 = document.querySelector("#Item5");


MakeTr.addEventListener('click',function(){
    MakeTr.style.backgroundColor ="black";
    MakeEn.style.backgroundColor ="#292c6d";
    MakeArXA.style.backgroundColor = "#292c6d";

    Item1.innerHTML = "Türkçe menu1";
    Item2.innerHTML = "Türkçe menu2";
    Item3.innerHTML = "Türkçe menu3";
    Item4.innerHTML = "Türkçe menu4";
    Item5.innerHTML = "Türkçe menu5";

    Menu.innerHTML = "Menü";
    Konum.innerHTML = "Konum";
    KonumText.innerHTML = "Gülüyorum adresini orta camisi adanaya sıla.";
    KonumText1.innerHTML= "Duyulmamış bilgisayarı sokaklarda patlıcan otobüs. Salladı yapacakmış ekşili çorba duyulmamış salladı lambadaki beğendim otobüs sandalye dışarı çıktılar yazın balıkhaneye. Sokaklarda karşıdakine beğendim gördüm kalemi karşıdakine koşuyorlar gördüm lakin dışarı çıktılar.";

    iletisim.innerHTML ="İletişim";
    medya.innerHTML="Sosyal Medya";
})

MakeEn.addEventListener('click',function(){
    MakeTr.style.backgroundColor ="#292c6d";
    MakeEn.style.backgroundColor ="black";
    MakeArXA.style.backgroundColor = "#292c6d";

    Item1.innerHTML = "English menu1";
    Item2.innerHTML = "English menu2";
    Item3.innerHTML = "English menu3";
    Item4.innerHTML = "English menu4";
    Item5.innerHTML = "English menu5";

    Menu.innerHTML = "Menu"
    Konum.innerHTML = "Our Location";
    KonumText.innerHTML = "Lorem ipsum dolor sit amet consectetur.";
    KonumText1.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti aperiam quasi in perspiciatis dicta, ipsa ullam adipisci cumque nisi impedit natus delectus ipsam rem laudantium excepturi accusamus voluptatum odio!";

    iletisim.innerHTML ="Content";
    medya.innerHTML="Social Media";
})

MakeArXA.addEventListener('click',function(){
    MakeTr.style.backgroundColor ="#292c6d";
    MakeEn.style.backgroundColor ="#292c6d";
    MakeArXA.style.backgroundColor = "black";

    Item1.innerHTML = "هيبيل";
    Item2.innerHTML = "هيبيل";
    Item3.innerHTML = "هيبيل";
    Item4.innerHTML = "هيبيل";
    Item5.innerHTML = "هيبيل";

    Menu.innerHTML = "القائمة";
    Konum.innerHTML = "موقعنا";
    KonumText.innerHTML = "أنا أضحك ، أرسل عنوانك إلى مسجد أورتا ، أضنة";
    KonumText1.innerHTML = "حافلة الباذنجان التي لم يسمع بها أحد في الشوارع. هزها ، حساء حامض لم يسمع به من قبل ، هزته ، أحببته في المصباح ، ذهب كرسي الحافلة إلى بيت السمك في الصيف. أحببت الشخص الآخر في الشارع ، رأيت القلم يركض إلى الشخص الآخر ، لكنهم خرجوا";

    iletisim.innerHTML ="الاتصالات";
    medya.innerHTML= "التواصل الإجتماعي";
    
})





