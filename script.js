const PRODUCTS = [
  {"id":"p1","name":"Smartphone XL","price":25999,"category":"Phones","rating":4.5,"img":"https://imgs.search.brave.com/3_No6aVJIkI0YaL27tXDLpu5i3uBycx_wLYC1aV5cLA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zczcu/dnp3LmNvbS9pcy9p/bWFnZS9WZXJpem9u/V2lyZWxlc3MvZ29v/Z2xlLWttNC1vYnNp/ZGlhbj9oZWk9MjUw/JmJnYz1mNmY2ZjYm/Zm10PXdlYnA","description":"Large display smartphone with excellent camera."},
  {"id":"p2","name":"Smartphone Mini","price":17999,"category":"Phones","rating":4.2,"img":"https://imgs.search.brave.com/RDW3nBIk3wGWucrIJECBdxsfA3xhfgKq8KOWlyMAU-4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9k/YW0vUkVGLTI2NTgz/NTAtZXhwbG9yZS10/eXBlLWlwaG9uZTJf/REVSLTgxMzljNjc4/LTg0YTQtNDFiYi1i/NTJjLWZlYjgyMWEx/MDgxNi5qcGc7bWF4/SGVpZ2h0PTQzMjtt/YXhXaWR0aD00MzI_/Zm9ybWF0PXdlYnA","description":"Compact smartphone, pocket friendly and fast."},
  {"id":"p3","name":"Laptop Pro 15","price":74999,"category":"Laptops","rating":4.7,"img":"https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"High performance laptop for professionals."},
  {"id":"p4","name":"Laptop Air 13","price":55999,"category":"Laptops","rating":4.4,"img":"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"Lightweight laptop with long battery."},
  {"id":"p5","name":"Wireless Headphones","price":2399,"category":"Audio","rating":4.5,"img":"https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"Comfortable over-ear wireless headphones."},
  {"id":"p6","name":"Noise Cancelling Earbuds","price":3999,"category":"Audio","rating":4.3,"img":"https://imgs.search.brave.com/B5_6kHNvVPCIGcYdm2Lh4prE900V4-qj-Dkz-svsNIM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzM3/V3REaGF1U2Z3MlRk/NlZXNG41R28ucG5n","description":"True wireless earbuds with ANC."},
  {"id":"p7","name":"Gaming Mouse","price":1199,"category":"Accessories","rating":4.2,"img":"https://imgs.search.brave.com/iE0qmQFmUUYeXiOeoZ5fPF-wCmOhi_I6uCAAXVw8Ts8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3Fz/UGRVbVVIY2M1U05p/RnFGR3NKbTcuanBl/Zw","description":"High precision gaming mouse."},
  {"id":"p8","name":"Mechanical Keyboard","price":3499,"category":"Accessories","rating":4.7,"img":"https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"Tactile mechanical keyboard with RGB."},
  {"id":"p9","name":"Smartwatch Series 5","price":10999,"category":"Wearables","rating":4.6,"img":"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"Stylish smartwatch with health tracking."},
  {"id":"p10","name":"Fitness Band","price":2999,"category":"Wearables","rating":4.1,"img":"https://imgs.search.brave.com/RYwmXT4EzGRcxE8UxgBwkS2aHBRdhbZV8J8qVRr4ycY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjQ0Nzcx/NDEvMjM2NTU1X0Ft/YXpmaXRfQmFuZF83/X0FLcmFsZXNfMDAx/OC5qcGc_cXVhbGl0/eT05MCZzdHJpcD1h/bGwmY3JvcD0xNi42/NjY2NjY2NjY2Njcs/MCw2Ni42NjY2NjY2/NjY2NjcsMTAwJnc9/MjQwMA","description":"Track steps, heart rate and sleep."},
  {"id":"p11","name":"Portable Bluetooth Speaker","price":1899,"category":"Audio","rating":4.3,"img":"https://imgs.search.brave.com/3S7b9kKL-zIGt6of0oqdf6w5O0Ttue9-ALtYPAoTpd8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY4M2E3/ODJlMTM2ODdkNDU4/MGEyYzYzYS80OjMv/d18zMjAsY19saW1p/dC9TdG9ybUJveCUy/MDIlMjByeWFuJTIw/d2FuaWF0YS5wbmc","description":"Compact speaker with strong bass."},
  {"id":"p12","name":"DSLR Camera","price":45999,"category":"Cameras","rating":4.6,"img":"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"DSLR for photography enthusiasts."},
  {"id":"p13","name":"Mirrorless Camera","price":69999,"category":"Cameras","rating":4.8,"img":"https://imgs.search.brave.com/9HIV3XmSRNVGOdcJiWOrtHxoN3jrN6thxyRdYGysW3c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/ODI3N2I2M2RlOWY4/ZTBhZTE5YjQ4MGEv/NjgzZTE2ZDg0YTdj/YWRmOTczNDZlZmE2/XzY2NThlY2U2ODZk/Y2UzNTRiYmU2YmZh/Nl9taXJyb3JsZXNz/LWNhbWVyYS5qcGVn","description":"Lightweight mirrorless camera with great optics."},
  {"id":"p14","name":"4K Monitor 27\"","price":29999,"category":"Monitors","rating":4.5,"img":"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"High resolution monitor for creators."},
  {"id":"p15","name":"Gaming Monitor 144Hz","price":19999,"category":"Monitors","rating":4.4,"img":"https://imgs.search.brave.com/S-f0YVJm6xxWXL4KxaI2hrqGsDT5Euwv5TTdlPlwcqM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lYXN5/cGMuY29tLnBoL2Nk/bi9zaG9wL3Byb2R1/Y3RzLzM2MDctY0FP/QzI0QjFYSFMyMy44/SW5jaGVzNjBIeklQ/U0xvd0JsdWVNb2Rl/X0ZsaWNrZXJGcmVl/X1VsdHJhTmFycm93/Qm9yZGVyTW9uaXRv/cl9JUFNQYW5lbF9V/bHRyYVNsaW1fTXVs/dGltZWRpYS1SZWFk/eXdpdGhIRE1JSW5w/dXRNb25pdG9yXzQy/MHguanBnP3Y9MTYy/OTczODkwNQ","description":"Fast refresh for smooth gaming."},
  {"id":"p16","name":"External SSD 1TB","price":7999,"category":"Storage","rating":4.7,"img":"https://imgs.search.brave.com/NXyCel29egQu1rRCzpmIGsbwXzjL_EAZnZA5FSFr_Wo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFmVkpVb3JkMEwu/X0FDLl9TUjE4MCwy/MzAuanBn","description":"Portable SSD with fast transfers."},
  {"id":"p17","name":"USB-C Charger 65W","price":1299,"category":"Accessories","rating":4.1,"img":"https://imgs.search.brave.com/0rOlIL5oGFqoAJoJ9vrrZNd9-4DEf39Beie5l5TEu0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFqZ2ZNRWEtQkwu/anBn","description":"Fast charger for laptops and phones."},
  {"id":"p19","name":"Wireless Charger Pad","price":899,"category":"Accessories","rating":4.0,"img":"https://images.pexels.com/photos/5081916/pexels-photo-5081916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"Qi wireless charging pad."},
  {"id":"p27","name":"Condenser Microphone","price":4999,"category":"Audio","rating":4.5,"img":"https://imgs.search.brave.com/FJT72wbWGzrfvQWogxLSqhcFZKGpRubLKpRft9ANS4E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92aW50/YWdla2luZy5jb20v/bWVkaWEvY2F0YWxv/Zy9wcm9kdWN0L3Uv/cC91cHRvbi0yNTFf/NzYwNjBfMV8yLmpw/Zz9vcHRpbWl6ZT1s/b3cmYmctY29sb3I9/MjU1LDI1NSwyNTUm/Zml0PWJvdW5kcyZo/ZWlnaHQ9MzYwJndp/ZHRoPTM2MCZjYW52/YXM9MzYwOjM2MA","description":"USB microphone for podcasts."},
  {"id":"p28","name":"Tripod Stand","price":1299,"category":"Accessories","rating":4.1,"img":"https://imgs.search.brave.com/W9GyqW57AntaIleC8Q0n8FOMSa_Bn-V4BJYESgLw98M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdHJpcG9k/eXNzZXkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzAz/L01hbmZyb3R0by1N/SzI5MFhUQTMtM1dV/Uy0yOTAtWHRyYS0z/LVdheS1IZWFkLUtp/dC1yZXZpZXcuanBn/P3Jlc2l6ZT04NDAs/NDY3JnNzbD0x","description":"Stable tripod for cameras and phones."},
  {"id":"p29","name":"DSLR Lens 50mm","price":8999,"category":"Cameras","rating":4.7,"img":"https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"Prime lens for portrait shots."},
  {"id":"p30","name":"Headphone Stand","price":599,"category":"Accessories","rating":4.0,"img":"https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"Stylish stand to keep headphones safe."},
  {"id":"p31","name":"Portable Monitor 15.6\"","price":12999,"category":"Monitors","rating":4.3,"img":"https://imgs.search.brave.com/3pTCY9AVDBvvtq1-8hkSSvKtTPxGYsTc4_ov9ZjT0C4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFKdHZycWExYUwu/anBn","description":"Second screen for productivity on the go."},
  {"id":"p32","name":"Stylus Pen","price":899,"category":"Accessories","rating":4.0,"img":"https://imgs.search.brave.com/zfiGliGR07F3r-QpTBzeHEzALA39VgXPUFscdnAyR4E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF4cHp4akVlakwu/anBn","description":"Precision stylus for tablets and phones."},
  {"id":"p33","name":"Smart Light Bulb","price":699,"category":"Home","rating":4.2,"img":"https://imgs.search.brave.com/awSSScdqSWgypFq-JJKFuQDilCAaZlE1yHPNFUhmdWQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3R1ZmYudHYvd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzIv/MjAyMi8xMC9OYW5v/bGVhZi1Fc3NlbnRp/YWxzLUJlc3QtU21h/cnQtTGlnaHQtQnVs/Yi5wbmc_dz0xMDI0","description":"Control color and brightness via app."},
  {"id":"p34","name":"Robot Vacuum","price":15999,"category":"Home","rating":4.1,"img":"https://imgs.search.brave.com/CfP6OMFoxZHTsagk2VlnH3hD151puExRl1zd0pGLkuY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlLmNv/bS90aG1iL2hvUEFC/TDJxaHZJNWNkVmtt/V0ZsNHNFUFVqRT0v/Zml0LWluLzE1MDB4/MjY2Ny9maWx0ZXJz/Om5vX3Vwc2NhbGUo/KTptYXhfYnl0ZXMo/MTUwMDAwKTpzdHJp/cF9pY2MoKS9zcHIt/cm9ib3QtdmFjdXVt/cy10ZXN0LWVjb3Zh/Y3MtdDktbW9wLWNv/bWJvLWRidXJyZXNv/bi0xNDEtNTBkNDhl/MDcyZDY1NGJiMjgw/NGFjZjJhNWE5YjI1/MzUuanBlZw","description":"Automated vacuum cleaner for floors."},
  {"id":"p35","name":"Electric Kettle","price":1699,"category":"Home","rating":4.0,"img":"https://imgs.search.brave.com/5Q3-cO8AgwvMuxlSKO-vpwDHCbCkO2IGhE5RcKh6fR0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aWxs/aWFtYjQwOS5zZy1o/b3N0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8xMi9T/dXN0YWluYWJseUNo/aWNfU3VzdGFpbmFi/bGVGYXNoaW9uTGlm/ZXN0eWxlQmxvZ19C/ZXN0Tm9uVG94aWNU/ZWFLZXR0bGVfWndp/bGxpbmctMi5qcGc","description":"Fast boiling kettle with auto shutoff."},
];
const state = {
  products: PRODUCTS.slice(),
  cart: loadCart(),
  favorites: loadFavorites(),
  filters: { query: '', category: 'all', sort: 'default' }
};

function qs(sel, root = document) { return root.querySelector(sel); }
function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
function formatCurrency(n) { return '₹' + n.toLocaleString('en-IN'); }
function saveCart() { localStorage.setItem('shopfront_cart', JSON.stringify(state.cart)); }
function loadCart() { try { return JSON.parse(localStorage.getItem('shopfront_cart')) || {}; } catch(e){ return {}; } }
function saveFavorites() { localStorage.setItem('shopfront_favs', JSON.stringify(state.favorites)); }
function loadFavorites() { try { return JSON.parse(localStorage.getItem('shopfront_favs')) || {}; } catch(e){ return {}; } }

function renderCategoryOptions() {
  const cats = ['all', ...new Set(state.products.map(p => p.category))];
  const sel = qs('#categoryFilter');
  sel.innerHTML = '';
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c === 'all' ? 'All categories' : c;
    sel.appendChild(opt);
  });
}

function applyFilters(products) {
  const q = state.filters.query.trim().toLowerCase();
  let out = products.slice();
  if (state.filters.category !== 'all') {
    out = out.filter(p => p.category === state.filters.category);
  }
  if (q) out = out.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  switch (state.filters.sort) {
    case 'price-asc': out.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': out.sort((a,b)=>b.price-a.price); break;
    case 'name-asc': out.sort((a,b)=>a.name.localeCompare(b.name)); break;
    default: break;
  }
  return out;
}

function renderProducts() {
  const grid = qs('#productsGrid');
  grid.innerHTML = '';
  const products = applyFilters(state.products);
  if (products.length === 0) {
    grid.innerHTML = `<div class="card"><p>No products match your search.</p></div>`;
    return;
  }
  products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img loading="lazy" src="${p.img}" alt="${escapeHtml(p.name)}" />
      <h4>${escapeHtml(p.name)}</h4>
      <div class="meta">
        <div>${formatCurrency(p.price)}</div>
        <div>⭐ ${p.rating}</div>
      </div>
      <p class="muted" style="color:var(--muted);font-size:.9rem">${escapeHtml(p.category)}</p>
      <div class="actions">
        <button class="btn view-btn" data-id="${p.id}">Quick view</button>
        <button class="btn add-btn" data-id="${p.id}">Add to cart</button>
        <button class="btn fav-btn" data-id="${p.id}" title="Add to wishlist">${state.favorites[p.id] ? '♥' : '♡'}</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function escapeHtml(str){ return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }

function addToCart(productId, qty = 1) {
  state.cart[productId] = (state.cart[productId] || 0) + qty;
  saveCart();
  renderCart();
  renderCounts();
}

function removeFromCart(productId) {
  delete state.cart[productId];
  saveCart();
  renderCart();
  renderCounts();
}

function setCartQuantity(productId, qty) {
  if (qty <= 0) { removeFromCart(productId); return; }
  state.cart[productId] = qty;
  saveCart();
  renderCart();
  renderCounts();
}

function cartItemsDetailed() {
  return Object.keys(state.cart).map(id => {
    const prod = state.products.find(p => p.id === id);
    return { ...prod, qty: state.cart[id], lineTotal: prod.price * state.cart[id] };
  });
}

function cartSubtotal() {
  return cartItemsDetailed().reduce((s, it) => s + it.lineTotal, 0);
}

function renderCart() {
  const list = qs('#cartItems');
  list.innerHTML = '';
  const items = cartItemsDetailed();
  if (items.length === 0) {
    list.innerHTML = '<p>Your cart is empty.</p>';
    qs('#cartSubtotal').textContent = formatCurrency(0);
    return;
  }
  items.forEach(it => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${it.img}" alt="${escapeHtml(it.name)}" loading="lazy"/>
      <div class="ci-meta">
        <strong>${escapeHtml(it.name)}</strong>
        <div style="color:var(--muted)">${formatCurrency(it.price)} • ${escapeHtml(it.category)}</div>
        <div class="qty-control">
          <button class="btn q-decrease" data-id="${it.id}">-</button>
          <input type="number" min="1" value="${it.qty}" style="width:56px;padding:6px;border-radius:6px;border:1px solid rgba(0,0,0,0.08)"/>
          <button class="btn q-increase" data-id="${it.id}">+</button>
          <button class="btn" style="margin-left:8px;" data-id="${it.id}" id="remove-${it.id}">Remove</button>
        </div>
      </div>
      <div style="min-width:80px;text-align:right">${formatCurrency(it.lineTotal)}</div>
    `;
    row.querySelector('.q-decrease').addEventListener('click', () => {
      setCartQuantity(it.id, Math.max(0, (state.cart[it.id] || 0) - 1));
    });
    row.querySelector('.q-increase').addEventListener('click', () => {
      setCartQuantity(it.id, (state.cart[it.id] || 0) + 1);
    });
    row.querySelector('input[type="number"]').addEventListener('change', (e) => {
      const val = parseInt(e.target.value) || 1;
      setCartQuantity(it.id, val);
    });
    row.querySelector(`#remove-${it.id}`).addEventListener('click', () => removeFromCart(it.id));
    list.appendChild(row);
  });
  qs('#cartSubtotal').textContent = formatCurrency(cartSubtotal());
}

function toggleFavorite(id) {
  if (state.favorites[id]) delete state.favorites[id]; else state.favorites[id] = true;
  saveFavorites();
  renderProducts();
  renderCounts();
}

function openProductModal(productId) {
  const p = state.products.find(x => x.id === productId);
  const body = qs('#modalBody');
  body.innerHTML = `
    <img src="${p.img}" alt="${escapeHtml(p.name)}" />
    <div style="flex:1">
      <h2>${escapeHtml(p.name)}</h2>
      <div style="color:var(--muted);margin-bottom:8px">${escapeHtml(p.category)} • ⭐ ${p.rating}</div>
      <p>${escapeHtml(p.description)}</p>
      <h3 style="margin-top:10px">${formatCurrency(p.price)}</h3>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="btn primary" id="modalAdd" data-id="${p.id}">Add to cart</button>
        <button class="btn fav" id="modalFav" data-id="${p.id}">${state.favorites[p.id] ? 'Remove from wishlist' : 'Add to wishlist'}</button>
      </div>
    </div>
  `;
  qs('#productModal').setAttribute('aria-hidden', 'false');
  qs('#productModal').dataset.openId = productId;
  qs('#modalAdd').addEventListener('click', () => {
    addToCart(productId, 1);
    closeProductModal();
  });
  qs('#modalFav').addEventListener('click', () => {
    toggleFavorite(productId);
    qs('#modalFav').textContent = state.favorites[productId] ? 'Remove from wishlist' : 'Add to wishlist';
  });
}

function closeProductModal() {
  qs('#productModal').setAttribute('aria-hidden', 'true');
  qs('#productModal').dataset.openId = '';
}

function openCheckoutModal() {
  if (cartItemsDetailed().length === 0) {
    alert('Cart is empty. Add items to checkout.');
    return;
  }
  qs('#checkoutModal').setAttribute('aria-hidden', 'false');
}

function closeCheckoutModal() {
  qs('#checkoutModal').setAttribute('aria-hidden', 'true');
  qs('#orderResult').hidden = true;
  qs('#checkoutForm').hidden = false;
  qs('#checkoutForm').reset();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const address = data.get('address').trim();
  const payment = data.get('payment');
  if (!name || !email || !address || !payment) {
    alert('Please fill all fields correctly.');
    return;
  }
  const orderId = 'ORD' + Math.random().toString(36).slice(2,9).toUpperCase();
  const total = cartSubtotal();
  state.cart = {};
  saveCart();
  renderCart(); renderCounts();
  qs('#checkoutForm').hidden = true;
  const result = qs('#orderResult');
  result.innerHTML = `<h3>Order confirmed</h3>
    <p>Thank you, <strong>${escapeHtml(name)}</strong> — your order <strong>${orderId}</strong> totaling ${formatCurrency(total)} has been placed.</p>`;
  result.hidden = false;
}

function renderCounts() {
  const cartCount = Object.values(state.cart).reduce((s,x)=>s+x,0);
  const favCount = Object.keys(state.favorites).length;
  qs('#cartCount').textContent = cartCount;
  qs('#favCount').textContent = favCount;
}

function wireUI() {
  qs('#searchInput').addEventListener('input', e => {
    state.filters.query = e.target.value;
    renderProducts();
  });
  qs('#categoryFilter').addEventListener('change', e => {
    state.filters.category = e.target.value;
    renderProducts();
  });
  qs('#sortSelect').addEventListener('change', e => {
    state.filters.sort = e.target.value;
    renderProducts();
  });

  qs('#productsGrid').addEventListener('click', e => {
    const addBtn = e.target.closest('.add-btn');
    if (addBtn) {
      addToCart(addBtn.dataset.id, 1);
      return;
    }
    const viewBtn = e.target.closest('.view-btn');
    if (viewBtn) {
      openProductModal(viewBtn.dataset.id);
      return;
    }
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      toggleFavorite(favBtn.dataset.id);
      return;
    }
  });

  qs('#modalClose').addEventListener('click', closeProductModal);
  qs('#productModal').addEventListener('click', e => {
    if (e.target === qs('#productModal')) closeProductModal();
  });

  qs('#cartBtn').addEventListener('click', () => {
    qs('html,body').forEach?.(el => el.scrollTo?.({top: document.body.scrollHeight, behavior:'smooth'}));
    qs('.cart-panel').scrollIntoView({behavior:'smooth'});
  });

  qs('#favoritesBtn').addEventListener('click', () => {
    const favIds = Object.keys(state.favorites);
    if (favIds.length === 0) return alert('No items in wishlist.');
    const names = favIds.map(id => state.products.find(p=>p.id===id)?.name || id);
    alert('Wishlist:\n' + names.join('\n'));
  });

  qs('#checkoutBtn').addEventListener('click', openCheckoutModal);
  qs('#checkoutClose').addEventListener('click', closeCheckoutModal);
  qs('#checkoutModal').addEventListener('click', e => {
    if (e.target === qs('#checkoutModal')) closeCheckoutModal();
  });

  qs('#checkoutForm').addEventListener('submit', handleCheckoutSubmit);

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (qs('#productModal').getAttribute('aria-hidden') === 'false') closeProductModal();
      if (qs('#checkoutModal').getAttribute('aria-hidden') === 'false') closeCheckoutModal();
    }
  });
}

if (!NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;

function init() {
  renderCategoryOptions();
  renderProducts();
  renderCart();
  renderCounts();
  wireUI();
}

init();


