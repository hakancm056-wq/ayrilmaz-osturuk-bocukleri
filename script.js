let melihBoyut = 1;
let resimBoyut = 1;

function melihBuyut() {
    const melihBtn = document.getElementById('melih-btn');
    const resim = document.getElementById('ana-resim');
    const mesaj = document.getElementById('mesaj');

    melihBoyut += 0.4;
    resimBoyut += 0.1;

    melihBtn.style.transform = "scale(" + melihBoyut + ")";
    resim.style.transform = "scale(" + resimBoyut + ")";
    mesaj.innerText = "Doğru! Melih'in sevgisi büyüyor... ❤️";

    if (melihBoyut > 5) {
        mesaj.innerHTML = "❤️ EVET! Melih daha çok seviyor zaaxd! ❤️";
        document.getElementById('sude-btn').style.display = "none";
        document.body.style.backgroundColor = "#fff176";
    }
}

function sudeTiklandi() {
    const mesaj = document.getElementById('mesaj');
    const sudeBtn = document.getElementById('sude-btn');
    
    mesaj.innerText = "Hata! Yanlış cevap, Melih'e basmalısın! 😜";
    sudeBtn.style.transform = "scale(0.8)";
}
