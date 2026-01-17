   // Default configuration
        const defaultConfig = {
            brand_name: 'ZANIX',
            tagline: 'Timeless Elegance',
            delivery_text: 'Free Delivery and Cash On Delivery to all over Pakistan',
            copyright_text: '© 2025 ZANIX. All Rights Reserved.'
        };

        const productsPerPage = 8;
        let currentPage = 1;

// ================= PRODUCTS DATA =================
const products = [
    {
        id: 1,
        name: 'Hublot Master Lock | Premium Stainless Steel | Date Working | Water-Resistant',
        description: `
        <br><h4>Description</h4>
        Premium Stainless Steel Case<br>
        Leather Straps<br>
        Master Lock System<br>
        Date Working with Auto Adjustment<br>
        Water-Resistant<br>
        Perfect Gift Choice<br>
        <b>Special Discount Offer – Get yours now at a limited-time price!</b>
        `,
        price: 'Rs. 2,300',
        colors: [
            { key: 'black', label: 'Black', hex: '#000000' },
            { key: 'silver', label: 'Silver', hex: '#C0C0C0' }
        ],
        images: {
            black: [
                'assets/HUBLOT/IMG4.png',
                'assets/HUBLOT/IMG2.png',
                'assets/HUBLOT/IMG3.png',
                'assets/HUBLOT/IMG1.png'
            ],
            silver: [
                'assets/HUBLOT/IMG5.png'
            ]
        },
        cardImage: 'assets/HUBLOT/IMG4.png'
    },

    {
        id: 2,
        name: 'Careera Leather Straps Watch With Master Lock, With Date & Day Working',
        description: `
        <br><h4>Description</h4>
        Premium leather straps<br>
        Elegant butterfly push button lock<br>
        Stainless steel case (front & back)<br>
        Day & Date working<br>
        Comfortable for daily & office wear<br>
        <b>Special Discount Offer – Get yours now at a limited-time price!</b>
        `,
        price: 'Rs. 2,450',
        colors: [
            { key: 'black', label: 'Black', hex: '#000000' },
            { key: 'brown', label: 'Brown', hex: '#8B4513' },
            { key: 'darkBrown', label: 'Dark Brown', hex: '#5C4033' }
        ],
        images: {
            black: [
                'assets/CAREERA/IMG1.png',
                'assets/CAREERA/IMG2.png',
                'assets/CAREERA/IMG3.png',
                'assets/CAREERA/IMG4.png',
                'assets/CAREERA/IMG5.png'
            ],
            brown: [
                'assets/CAREERA/IMG6.png',
                'assets/CAREERA/IMG7.png',
                'assets/CAREERA/IMG8.png'
            ],
            darkBrown: [
                'assets/CAREERA/IMG9.png'
            ]
        },
        cardImage: 'assets/CAREERA/IMG2.png'
    },

    {
        id: 3,
        name: 'Rolex Yacht-Master | Gold Edition',
        description: `
        <br><h4>Description</h4>
        Premium Gold Finish<br>
        Stainless Steel Body<br>
        Date Working<br>
        Luxury Feel<br>
        <b>Limited Stock Available</b>
        `,
        price: 'Rs. 2,699',
        colors: [
            { key: 'gold', label: 'Gold', hex: '#D4AF37' }
        ],
        images: {
            gold: [
                'assets/ROLEX-YACH-MASTER/IMG1.png',
                'assets/ROLEX-YACH-MASTER/IMG2.png',
                'assets/ROLEX-YACH-MASTER/IMG3.png',
                'assets/ROLEX-YACH-MASTER/IMG4.png'
            ]
        },
        cardImage: 'assets/ROLEX-YACH-MASTER/IMG1.png'
    },
    {
    id: 4,
    name: 'Patek Philippe Wristwatch - Waterproof Stainless Steel Formal Watch for Men',
    description: `
    <br><h4>Description</h4>
    Premium leather straps<br>
    Elegant butterfly push button lock<br>
    Stainless steel case (front & back)<br>
    Day & Date working<br>
    Comfortable for daily & office wear<br>
    <b>Special Discount Offer – Get yours now at a limited-time price!</b>
    `,
    price: 'Rs. 2,899',

    colors: [
        { key: 'black', label: 'Black', hex: '#000000' },
        { key: 'tiffany', label: 'Tiffany Blue', hex: '#81D8D0' },
        { key: 'fullblack', label: 'Full Black', hex: '#1C1C1C' },
        { key: 'blue', label: 'Blue', hex: '#0B3C5D' }
    ],

    images: {
        black: [
            'assets/PETAK-PHILLIP/IMG1.png'
        ],
        tiffany: [
            'assets/PETAK-PHILLIP/IMG2.png'
        ],
        fullblack: [
            'assets/PETAK-PHILLIP/IMG3.png'
        ],
        blue: [
            'assets/PETAK-PHILLIP/IMG4.png'
        ]
    },

    cardImage: 'assets/PETAK-PHILLIP/IMG1.png'
},
{
    id: 5,
    name: "Richard Mille Style Men's Watch, Good Quality Straps Watch",
    description: `
    <br><h4>Description</h4>
    Stylish Richard Mille inspired design<br>
    Comfortable & durable quality straps<br>
    Lightweight feel for daily wear<br>
    Smart casual & formal look<br>
    <b>Best value for money – Limited stock available!</b>
    `,
    price: 'Rs. 1,350',

    colors: [
        { key: 'blue', label: 'Blue', hex: '#1E4ED8' },
        { key: 'darkgreen', label: 'Dark Green', hex: '#1F3D2B' },
        { key: 'grey', label: 'Grey', hex: '#7A7A7A' }
    ],

    images: {
        blue: [
            'assets/RECHARD-MIL/IMG1.png',
            'assets/RECHARD-MIL/IMG2.png'
        ],
        darkgreen: [
            'assets/RECHARD-MIL/IMG3.png',
            'assets/RECHARD-MIL/IMG4.png'
        ],
        grey: [
            'assets/RECHARD-MIL/IMG5.png'
        ]
    },

    cardImage: 'assets/RECHARD-MIL/IMG1.png'
},
{
    id: 6,
    name: 'Hublot Chain Watch for Men & Boys - Luxurious Stainless Steel Chronograph with Date',
    description: `
    <br><h4>Description</h4>
    Premium stainless steel chain watch<br>
    Chronograph style with date function<br>
    Bold luxury look for men & boys<br>
    Perfect for daily wear & special occasions
    `,
    price: 'Rs. 2,899',

    colors: [
        { key: 'black', label: 'Black', hex: '#000000' }
    ],

    images: {
        black: [
            'assets/HUBLOT-CHAIN/IMG1.png',
            'assets/HUBLOT-CHAIN/IMG2.png',
            'assets/HUBLOT-CHAIN/IMG3.png',
            'assets/HUBLOT-CHAIN/IMG4.png',
            'assets/HUBLOT-CHAIN/IMG5.png'
        ]
    },

    cardImage: 'assets/HUBLOT-CHAIN/IMG1.png'
},
{
    id: 7,
    name: 'Rolex Chain Watch In Two Tone Black & Silver, Heavy Watch With Master Lock, Date Working With Premium Packaging',
    description: `
    <br><h4>Description</h4>
    Heavy two-tone chain watch with premium finish<br>
    Master lock design with date working<br>
    Durable stainless steel build<br>
    Luxury look with premium packaging
    `,
    price: 'Rs. 2,950',

    colors: [
        { key: 'black', label: 'Black', hex: '#000000' }
    ],

    images: {
        black: [
            'assets/ROLEX-CHAIN/IMG1.png',
            'assets/ROLEX-CHAIN/IMG2.png',
            'assets/ROLEX-CHAIN/IMG3.png',
            'assets/ROLEX-CHAIN/IMG4.png'
        ]
    },

    cardImage: 'assets/ROLEX-CHAIN/IMG1.png'
},
{
    id: 8,
    name: 'Aura Watch for Boys & Girls – Lightweight Carbon Fiber Arabic Dial Watch | Arabic Numerals Watch',
    description: `
    <br><h4>Description</h4>
    Lightweight carbon fiber style watch<br>
    Clear Arabic numerals for easy reading<br>
    Comfortable strap for daily wear<br>
    Simple, modern look for boys & girls
    `,
    price: 'Rs. 950',

    colors: [
        { key: 'black', label: 'Black', hex: '#000000' }
    ],

    images: {
        black: [
            'assets/AURA FIBER/IMG1.png',
            'assets/AURA FIBER/IMG2.png',
            'assets/AURA FIBER/IMG3.png'
        ]
    },

    cardImage: 'assets/AURA FIBER/IMG1.png'
},
{
    id: 9,
    name: 'Aura Watch for Men & Women – Heavy Weight 145g Black Arabic Dial Metal Aura Watch - Trendy Design',
    description: `
    <br><h4>Description</h4>
    Heavy weight metal body with premium feel<br>
    Bold black Arabic dial design<br>
    Stylish and durable for daily & formal wear<br>
    Trendy look for men & women
    `,
    price: 'Rs. 2,850',

    colors: [
        { key: 'black', label: 'Black', hex: '#000000' }
    ],

    images: {
        black: [
            'assets/AURA METAL/IMG1.png',
            'assets/AURA METAL/IMG2.png',
            'assets/AURA METAL/IMG3.png',
            'assets/AURA METAL/IMG4.png'
        ]
    },

    cardImage: 'assets/AURA METAL/IMG1.png'
},
{
    id: 10,
    name: 'T24 Champion Edition Smart Watch 7 in 1 Straps | Ultra Smart Watch Series 8 | Smart Watch for Boys & Girls',
    description: `
    <br><h4>Description</h4>
    Complete Combo Set – 1 smartwatch, 6 stylish straps, 1 magnetic charger, and user manual<br>
    Multiple strap options for different styles<br>
    Sleek aluminum alloy frame with large display<br>
    Customizable watch faces<br>
    Long battery life up to 1 day<br>
    Water & dust resistant
    `,
    price: 'Rs. 2,999',

    colors: [
        { key: 'black', label: 'Black', hex: '#000000' }
    ],

    images: {
        black: [
            'assets/SMART WATCH/IMG1.png',
            'assets/SMART WATCH/IMG2.png',
            'assets/SMART WATCH/IMG3.png',
            'assets/SMART WATCH/IMG4.png',
            'assets/SMART WATCH/IMG5.png'
        ]
    },

    cardImage: 'assets/SMART WATCH/IMG1.png'
},
{
    id: 11,
    name: 'Gold Rolex Datejust, Light Weight Watch, Comes With Rolex Box Premium Packaging, Date Working With Auto Adjustment',
    description: `
    <br><h4>Description</h4>
    Lightweight gold Rolex-inspired watch<br>
    Comes with premium Rolex box<br>
    Automatic date adjustment<br>
    Elegant design for daily & formal wear<br>
    Perfect gift choice
    `,
    price: 'Rs. 1,600',

    colors: [
        { key: 'gold', label: 'Gold', hex: '#FFD700' }
    ],

    images: {
        gold: [
            'assets/ROLEX FULL GOLD/IMG1.png',
            'assets/ROLEX FULL GOLD/IMG2.png',
            'assets/ROLEX FULL GOLD/IMG3.png',
            'assets/ROLEX FULL GOLD/IMG4.png',
            'assets/ROLEX FULL GOLD/IMG5.png'
        ]
    },

    cardImage: 'assets/ROLEX FULL GOLD/IMG1.png'
},
{
    id: 12,
    name: 'Rolex Chain Watch With Master Lock Two Tone Color Silver & Gold Rotating Bezel, Luminous Dial & Date Working',
    description: `
    <br><h4>Description</h4>
    Two-tone silver & gold chain watch<br>
    Luminous dial for easy reading<br>
    Master lock design with date function<br>
    Durable stainless steel build<br>
    Elegant & luxury look
    `,
    price: 'Rs. 3,700',

    colors: [
        { key: 'silver', label: 'Silver', hex: '#C0C0C0' }
    ],

    images: {
        silver: [
            'assets/ROLEX MASTERLOCK/IMG1.png',
            'assets/ROLEX MASTERLOCK/IMG2.png',
            'assets/ROLEX MASTERLOCK/IMG3.png',
            'assets/ROLEX MASTERLOCK/IMG4.png',
            'assets/ROLEX MASTERLOCK/IMG5.png'
        ]
    },

    cardImage: 'assets/ROLEX MASTERLOCK/IMG1.png'
}









];

let selectedProduct = null;
let basePrice = 0;

// ================= RENDER PRODUCTS =================
function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

        col.innerHTML = `
            <div class="card product-card" onclick="openProductModal(${product.id})">
                <img src="${product.cardImage}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p><strong>${product.price}</strong></p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });

    renderPagination();
}


document.addEventListener('DOMContentLoaded', renderProducts);

function changeQty(amount) {
    const qtyInput = document.getElementById('productQty');
    let qty = Number(qtyInput.value) + amount;
    if (qty < 1) qty = 1;
    qtyInput.value = qty;

    const updatedPrice = basePrice * qty;
    document.getElementById('modalPrice').textContent = `Rs ${updatedPrice}`;
}


function updateTotalPrice() {
    const qty = parseInt(document.getElementById('productQty').value);
    const total = basePrice * qty;
    document.getElementById('modalTotalPrice').textContent = `Rs ${total}`;
}


// ================= OPEN MODAL =================

function openProductModal(productId) {
    selectedProduct = products.find(p => p.id === productId);

    document.getElementById('modalProductTitle').textContent = selectedProduct.name;
    document.getElementById('modalProductName').textContent = selectedProduct.name;
    document.getElementById('modalProductDesc').innerHTML = selectedProduct.description;

    // base price
    basePrice = Number(selectedProduct.price.replace(/[^0-9]/g, ''));

    // reset quantity
    document.getElementById('productQty').value = 1;

    // show price (same element used everywhere)
    document.getElementById('modalPrice').textContent = `Rs ${basePrice}`;

    // colors
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = '';

    const firstColor = selectedProduct.colors[0];
    loadProductImages(firstColor.key);
    document.getElementById('selectedColor').value = firstColor.label;

    selectedProduct.colors.forEach((c, index) => {
        const btn = document.createElement('div');
        btn.className = 'color-btn';
        btn.style.backgroundColor = c.hex;
        btn.title = c.label;
        btn.onclick = () => selectColor(c.key, c.label, btn);
        if (index === 0) btn.classList.add('active');
        colorOptions.appendChild(btn);
    });

    new bootstrap.Modal(document.getElementById('productModal')).show();
}




// ================= LOAD IMAGES =================
function loadProductImages(colorKey) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbs = document.getElementById('thumbnailContainer');
    thumbs.innerHTML = '';

    const imgs = selectedProduct.images[colorKey];
    if (!imgs) return;

    mainImage.src = imgs[0];

    imgs.forEach(img => {
        const t = document.createElement('img');
        t.src = img;
        t.className = 'img-thumbnail';
        t.style.width = '60px';
        t.onclick = () => mainImage.src = img;
        thumbs.appendChild(t);
    });
}

// ================= COLOR SELECT =================
function selectColor(colorKey, colorName, el) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('selectedColor').value = colorName;
    loadProductImages(colorKey);
}


document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerCity = document.getElementById('customerCity').value;
    const customerProvince = document.getElementById('customerProvince').value;
    const customerLandmark = document.getElementById('customerLandmark').value;
    const selectedColor = document.getElementById('selectedColor').value;

    // ✅ PAYMENT METHOD
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    const product = selectedProduct.name;
    const price = selectedProduct.price;

    // ✅ DISCORD WEBHOOK
    const discordWebhook = "https://discord.com/api/webhooks/1459696629987803281/HjsmXWKWDzjRYSP4DNIO1wmgYTGVYYw2MjNCDlpEy5GaMwsxa5kj8vkUK2hf2DP-RjNu";

const quantity = Number(document.getElementById('productQty').value);
const totalPrice = basePrice * quantity;


    const discordData = {
    content:
`🟢 **NEW ORDER RECEIVED**

📦 Product: ${product}
🎨 Color: ${selectedColor}
🔢 Quantity: ${quantity}
💰 Price (Each): Rs ${basePrice}
💰 Total Price: Rs ${totalPrice}

💳 Payment Method: ${paymentMethod}

👤 Name: ${customerName}
📞 Phone: ${customerPhone}
📧 Email: ${customerEmail}

🏠 Address: ${customerAddress}
🏙️ City: ${customerCity}
🗺️ Province: ${customerProvince}
📍 Landmark: ${customerLandmark}

🕒 Time: ${new Date().toLocaleString()}`
};


    fetch(discordWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordData)
    }).catch(err => console.log("Discord error:", err));

    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('orderConfirmation').classList.add('show');

    setTimeout(() => {
        document.getElementById('orderForm').reset();
        document.getElementById('orderForm').style.display = 'block';
        document.getElementById('orderConfirmation').classList.remove('show');
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
    }, 3000);
});


        // Navbar scroll animation
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Update UI based on config
        function updateUI(config) {
            // Update brand name
            const brandElements = [
                document.getElementById('brand-name'),
                document.getElementById('footer-brand'),
                document.getElementById('carousel-title-1')
            ];
            brandElements.forEach(el => {
                if (el) el.textContent = config.brand_name || defaultConfig.brand_name;
            });

            // Update tagline
            const taglineEl = document.getElementById('carousel-tagline');
            if (taglineEl) {
                taglineEl.textContent = config.tagline || defaultConfig.tagline;
            }

            // Update delivery text in all badges
            const deliveryText = config.delivery_text || defaultConfig.delivery_text;
            products.forEach(product => {
                const badge = document.getElementById(`delivery-badge-${product.id}`);
                if (badge) {
                    badge.textContent = deliveryText;
                }
            });

            // Update copyright
            const copyrightEl = document.getElementById('copyright-text');
            if (copyrightEl) {
                copyrightEl.textContent = config.copyright_text || defaultConfig.copyright_text;
            }
        }

        // Elements SDK configuration
        async function onConfigChange(config) {
            updateUI(config);
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ['brand_name', config.brand_name || defaultConfig.brand_name],
                ['tagline', config.tagline || defaultConfig.tagline],
                ['delivery_text', config.delivery_text || defaultConfig.delivery_text],
                ['copyright_text', config.copyright_text || defaultConfig.copyright_text]
            ]);
        }

        // Initialize the application
        async function init() {
            // Initialize Elements SDK if available
            if (window.elementSdk) {
                await window.elementSdk.init({
                    defaultConfig,
                    onConfigChange,
                    mapToCapabilities,
                    mapToEditPanelValues
                });
            }

            // Render products
            renderProducts();
            
            // Initial UI update
            updateUI(window.elementSdk ? window.elementSdk.config : defaultConfig);
        }

        // Start the application when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        /* ===== PAGINATION ===== */
function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(products.length / productsPerPage);

    // Prev
    const prev = document.createElement('button');
    prev.innerHTML = '←';
    prev.disabled = currentPage === 1;
    prev.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prev);

    // Numbers
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => changePage(i);
        pagination.appendChild(btn);
    }

    // Next
    const next = document.createElement('button');
    next.innerHTML = '→';
    next.disabled = currentPage === totalPages;
    next.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(next);
}

/* ===== CHANGE PAGE ===== */
function changePage(page) {
    currentPage = page;
    renderProducts();
}


const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
const bankDetails = document.querySelector('.bank-details');

paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'Bank' && radio.checked) {
            bankDetails.style.display = 'block';
        } else {
            bankDetails.style.display = 'none';
        }
    });
});
