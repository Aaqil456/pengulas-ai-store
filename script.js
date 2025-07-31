// Helper: load JSON
async function loadProducts() {
  const res = await fetch('./products.json');
  return await res.json();
}

// Helper: get URL params
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// INDEX PAGE
if (document.getElementById('product-list')) {
  loadProducts().then(products => {
    let html = '';
    products.forEach(p => {
      html += `
        <div class="product-card">
          <a href="product.html?id=${p.id}">
            <img src="${p.image}" alt="${p.title}">
            <h2>${p.title}</h2>
            <span class="price">${p.price}</span>
          </a>
        </div>`;
    });
    document.getElementById('product-list').innerHTML = html;
  });
}

// PRODUCT PAGE
if (document.getElementById('product-detail')) {
  loadProducts().then(products => {
    const id = getParam('id');
    const p = products.find(x => x.id === id);
    if (!p) return document.getElementById('product-detail').innerHTML = '<p>Produk tak jumpa.</p>';
    document.getElementById('product-detail').innerHTML = `
      <h1>${p.title}</h1>
      <img src="${p.image}" alt="${p.title}" class="ebook-cover">
      <p>${p.description}</p>
      <p class="price">${p.price}</p>
      <a href="${p.link}" class="buy-button">📩 Dapatkan Sekarang</a>
      <a href="index.html" class="back-button">Kembali</a>
      `;
  });
}

