var banners =
    ["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;
function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector(’h2#mensagem’).textContent =
    banners[bannerAtual];
}
<<<<<<< HEAD
setInterval(trocaBanner, 3000);
=======
setInterval(trocaBanner, 4000);
>>>>>>> design
