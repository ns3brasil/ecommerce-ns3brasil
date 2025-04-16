// Script futuro para carrinho, localStorage, integração com backend etc
document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Produto adicionado ao carrinho! (função futura)');
    });
  });

  // Menu mobile toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
  