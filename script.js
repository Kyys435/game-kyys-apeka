// External JS: https://unpkg.com/scrollreveal

// External JS: https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js

// External JS: https://unpkg.com/typeit@8.7.0/dist/index.umd.js

// External JS: https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js

// Inline JavaScript
async function fungsiWA() {
  await swals.fire("OK!", "Kirim pesan ke<br><span style='border-bottom: 2px solid green'>WhatsApp</span> aku, ya!", "success");
  const phoneNumber = "6285779083591"; // ganti dengan nomor tujuan
  const message = "Nih Papnya!";
  
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
}

var teksSekarang = 1;
const body = document.querySelector("body"); 
audio = new Audio('' + linkmp3.src); 
var swiper = new Swiper(".mySwiper", {
    pagination: {el: ".swiper-pagination", dynamicBullets: false,},
    allowSlidePrev: true,
    allowTouchMove: false,
    on: {
    slideChange: function () {
        teksSekarang++;
        teksScale = document.querySelector('#teks' + teksSekarang);
        stikerScale = document.querySelector('#stiker' + teksSekarang);
        Tombol = document.querySelector('#Tombol');

        setTimeout(function(){
        	
		        if(teksSekarang < 2){
		          teksScale.classList.add("scale1");
		          stikerScale.classList.add("scale1");
		        } else {
                  teksScale.classList.add("scale1");
                  setTimeout(startGame,100);
                  swiper.allowSlidePrev = false; // Nonaktifkan kembali ke slide sebelumnya saat slide 3
                  swiper.allowSlideNext = false;
                }
          
        }, 50);
    },
    },
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",},
});
    
const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageHeight: 90, imageWidth: 90, confirmButtonText: '<b>Kirim</b>'});
initeks = "<b style='font-size: 20px;'>Yaahh kena <span style='border-bottom: 2px solid red'>2 Boom</span>!! 💥😜</b><br><br>Karena kamu kena <span style='border-bottom: 0 solid red'>💣 2 Bom</span>,<br>Kamuu wajib <b>Kirim Pap</b><br>sebanyak <b>2 foto</b>! 😆🩷<br><br>── ᯓᡣ𐭩<br><br><b>Gabolee Sekali Liat yaa!!</b> 😝🫵🏻</b>";
teks3.innerHTML = "";
function katanimasi(){
    teks3.innerHTML = "";
	new TypeIt("#teks3", {
    strings: ["" + initeks], startDelay: 100, speed: 30, cursor: true,
    afterComplete: function(){
      	teks3.innerHTML = initeks;
      
          setTimeout(function(){
            stikerScale.classList.remove("scale1");
            stikerScale.classList.add("scale0");
               
            setTimeout(function(){stikerAkhir1.src = stikerAkhir2.src;}, 275);
            setTimeout(function(){
                //setInterval(falling, 200);
                mulaiKelopak('game-canvas');
                Tombol.style="transform:scale(1);opacity:1";
                setTimeout(function(){clearInterval(scrollInterval)},500);
                stikerScale.classList.remove("scale0");
                stikerScale.classList.add("scale1");
            },350);
            
            }, 100);
            
    },}).go();
}

// Animasi Kelopak Bunga
	let animationFrameId; // Variabel global untuk menyimpan ID requestAnimationFrame
	function mulaiKelopak(canvasId) {
	  const canvas = document.getElementById(canvasId);
	  if (!canvas) return; // Cek apakah canvas ada
	  const ctx = canvas.getContext('2d');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	
	  const kelopak = Array.from({ length: 20 }, () => ({
	    x: Math.random() * canvas.width,
	    y: Math.random() * canvas.height,
	    radius: Math.random() * 5 + 2,
	    speed: Math.random() * 0.5 + 1
	  }));
	
	  function gambarKelopak() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    kelopak.forEach(petal => {
	      ctx.beginPath();
	      ctx.arc(petal.x, petal.y, petal.radius, 0, Math.PI * 2);
	      ctx.fillStyle = 'rgba(255,255,255, 0.2)';
	      ctx.fill();
	      petal.y += petal.speed;
	      if (petal.y > canvas.height) petal.y = -petal.radius;
	      petal.x += Math.sin(petal.y / 50) * 2;
	    });
	    animationFrameId = requestAnimationFrame(gambarKelopak); // Simpan ID animasi
	  }
	  gambarKelopak();
}

var sudahKlik = true;
var fungsiBerfungsi = false;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
        audio.play();
        document.querySelector(".overlay").style.display = "none";
        setTimeout(()=>{
        stiker1.classList.add("scale1");
        teks1.classList.add("scale1");
        wallpaper.style="transform:scale(1)";
        
        //setTimeout(function(){fungsiBerfungsi = true}, 300);
        setTimeout(() => {swiper.slideNext();setTimeout(() => {swiper.slideNext();}, 2100);}, 2000);
        }, 500);
    } else {
        sudahKlik = true; 
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
    }
}

function falling() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
}
setInterval(function() {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
        heartArr[0].remove();
    }
}, 100);

const scrollContainer = document.getElementById("scroll-container");
function autoScroll() {
    scrollContainer.scrollTop += 10;
}
const scrollInterval = setInterval(autoScroll, 50); 

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        if (teksSekarang < 3) { // Hanya boleh maju sampai slide 3
            swiper.slideNext();
        }
    }
});

document.addEventListener('click', function() {
    if (teksSekarang < 3) {
    	if (fungsiBerfungsi === true) {
           swiper.slideNext();
        }
    }
});

setTimeout(function(){
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "none";
    var tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex";
}, 1500);

const cards = document.querySelectorAll(".card");
const gameBoard = document.querySelector(".game-board");
let lockBoard = false;

function startGame() {
    cards.forEach(card => {
        card.style.animation = "appear .9s forwards";
        setupScratchCard(card);
    });
    //shuffle();
}

// Tambahkan variabel global di atas (di dalam <script>)
let bombCount = 0;           // <<< SUDAH ADA DARI SEBELUMNYA
const bombCards = [];        // <<< TAMBAH BARIS INI (untuk simpan kartu bom)
function setupScratchCard(card) {
    const canvas = card.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 40;
    canvas.height = 40;

    // Isi canvas dengan lapisan abu-abu untuk "digosok"
    ctx.fillStyle = "rgba(255,255,255,.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let isScratching = false;
    let revealed = false;

    function handleScratch(e) {
        if (lockBoard || revealed) return;

        const rect = canvas.getBoundingClientRect();
        const x = (e.type.includes("mouse") ? e.clientX : e.touches[0].clientX) - rect.left;
        const y = (e.type.includes("mouse") ? e.clientY : e.touches[0].clientY) - rect.top;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2); // Lingkaran kecil untuk efek gosok
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";

        // Cek apakah sudah cukup digosok (50% area terbuka)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let transparentPixels = 0;
        for (let i = 3; i < imageData.length; i += 4) {
            if (imageData[i] === 0) transparentPixels++;
        }
        const totalPixels = canvas.width * canvas.height;
        if (transparentPixels / totalPixels > 0.05 && !revealed) {
            revealed = true;
            card.classList.add("flipped");
            card.textContent = card.dataset.emoji;
            canvas.style.display = "none"; // Sembunyikan canvas setelah terbuka
            /*if (card.dataset.emoji === "💣") {
                lockBoard = true;
                endGame();
            }*/
            if (card.dataset.emoji === "💣") {
			    bombCount++;
			
			    // Efek khusus HANYA untuk kartu bom yang BARU dibuka (bukan semua bom sebelumnya)
			    card.style.transition = "all 0.4s ease";
			    card.style.transform = "scale(1.4)";
			    card.style.background = "#F34C4C";
			    card.innerHTML += `<div style="position:absolute;inset:0;display:flex;color:white;align-items:center;justify-content:center;font-size:8px;pointer-events:none;animation:boom 0.7s ease-out forwards;z-index:10;">BOOM!</div>`;
			    card.classList.add("shake");
			
			    // Simpan info bahwa kartu ini sudah diberi efek (biar tidak double)
			    card.dataset.bombEffect = "true";
			
			    if (bombCount >= 2) {
			        lockBoard = true;
			        setTimeout(() => {
			            endGame();
			        }, 800); // jeda 1 detik setelah bom kedua
			    }
			}
        }
    }

    canvas.addEventListener("mousedown", () => isScratching = true);
    canvas.addEventListener("mouseup", () => isScratching = false);
    canvas.addEventListener("mousemove", (e) => { if (isScratching) handleScratch(e); });
    canvas.addEventListener("touchstart", () => isScratching = true);
    canvas.addEventListener("touchend", () => isScratching = false);
    canvas.addEventListener("touchmove", (e) => { if (isScratching) handleScratch(e); });
}

function endGame() {
    setTimeout(() => {
        document.querySelector(".main-card").style = "transform:scale(0);opacity:0 !important;transition:all .7s ease";
        stikerScale = document.querySelector('#stiker3');
        teksScale = document.querySelector('#teks3');
    
        setTimeout(() => {
        	const elements = document.querySelectorAll('.swiper-pagination');
			elements.forEach(el => {
			  el.style.display = 'none';
			});
  
            document.querySelector(".main-card").style.display = "none";
            
            scrollContainer.classList.remove("abs");
            scrollContainer.classList.remove("scale0");
            scrollContainer.classList.add("scale1");

            stikerScale.classList.remove("abs");
            stikerScale.classList.remove("scale0");
            stikerScale.classList.add("scale1");

            setTimeout(katanimasi, 200);
        }, 500);
    }, 800);
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
}

