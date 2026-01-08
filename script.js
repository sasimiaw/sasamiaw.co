// Data produk keychain dengan jenis (acrylic/plush)
const allProducts = [
    { id: 1, name: "Furuhonya LIMITED Plush Keychain", price: 105000, rating: 5, type: "plush", color: "#FFB6C1", image:"images/furuhonya-limited.png" },
    { id: 2, name: "Hachiware Plush Keychain", price: 85000, rating: 4, type: "plush", color: "#FFC8DD", image:"images/hachiware-plush.jpeg" },
    { id: 3, name: "Usagi LIMITED Plush Keychain", price: 98000, rating: 5, type: "plush", color: "#CDB4DB", image:"images/usagi-limited.png" },
    { id: 4, name: "Chiikawa Plush Keychain", price: 80000, rating: 4, type: "plush", color: "#A2D2FF", image:"images/chiikawa-plush.jpeg" },
    { id: 5, name: "Momonga Plush Keychain", price: 88000, rating: 5, type: "plush", color: "#FFD166", image:"images/momonga-plush.jpeg" },
    { id: 6, name: "Chiikawa Baker Keychain", price: 42000, rating: 4, type: "acrylic", color: "#06D6A0", image:"images/chiikawa baker.png" },
    { id: 7, name: "Hachiware Driving Keychain", price: 30000, rating: 5, type: "acrylic", color: "#FFAFCC", image:"images/hachiware-acrylic.png" },
    { id: 8, name: "Hachiware Baker Keychain", price: 38000, rating: 4, type: "acrylic", color: "#BDE0FE", image:"images/hachiware-baker.png" },
    { id: 9, name: "Usagi Baker Keychain", price: 35000, rating: 5, type: "acrylic", color: "#FFB4A2", image:"images/usagi baker.png" },
    { id: 10, name: "Shisa LIMITED Plush Keychain", price: 100000, rating: 4, type: "plush", color: "#A0C4FF", image:"images/shisa-limited.png" },
    { id: 11, name: "Rakko Plush Keychain", price: 92000, rating: 5, type: "plush", color: "#FFADAD", image:"images/rakko-plush.jpeg" },
    { id: 12, name: "Usagi Driving Keychain", price: 32000, rating: 4, type: "acrylic", color: "#BDB2FF", image:"images/usagi-acrylic.png" }
];

// Data testimonial
const testimonials = [
    { name: "Dena Alzena", rating: 5, comment: "The keychain is so cute! The quality is also good. Fast shipping!", avatar: "🍪" },
    { name: "Nori >___<", rating: 4, comment: "Love the pixel alien keychain collection! Very cute!!", avatar: "🪼" },
    { name: "Annyori", rating: 5, comment: "The packaging is very neat, the keychain is cuter than in the photo. I will buy again!", avatar: "🎀" },
    { name: "IZzal67", rating: 5, comment: "Excellent quality and super fast delivery. My new favorite keychain shop!", avatar: "♨️" }
];

// Data chatbot responses
const chatbotResponses = {
    "price": "Our keychains range from Rp 30,000 to Rp 105,000 depending on the model! ✨",
    "shipping": "We ship orders via JNE, J&T, and SiCepat. Estimated 2-5 days depending on location! 🚚",
    "help": "We're here to help! You can ask about products, shipping, or payment! 💖",
    "payment": "We accept payments via bank transfer, e-wallet (OVO, Dana, Gopay), and QRIS! 💳",
    "acrylic": "Acrylic keychains are durable, colorful, and perfect for everyday use! They're made from high-quality acrylic material.",
    "plush": "Plush keychains are soft, huggable, and great for bag decorations! They're made from premium plush fabric.",
    "default": "Hello! I'm the SasaMiaw.CO chatbot. You can ask about: price, shipping, payment, acrylic or plush keychains, or other help! 😊"
};

// Cart state
let cart = JSON.parse(localStorage.getItem('sasamiaw_cart')) || [];

// DOM Elements
const loadingEl = document.getElementById('loading');
const overlay = document.getElementById('overlay');
const homePage = document.getElementById('homePage');
const productsPage = document.getElementById('productsPage');
const aboutPage = document.getElementById('aboutPage');
const faqPage = document.getElementById('faqPage');
const featuredProductsContainer = document.getElementById('featuredProductsContainer');
const allProductsContainer = document.getElementById('allProductsContainer');
const testimonialContainer = document.getElementById('testimonialContainer');
const testimonialsSection = document.getElementById('testimonialsSection');
const cartIcon = document.getElementById('cartIcon');
const cartIconProducts = document.getElementById('cartIconProducts');
const cartIconAbout = document.getElementById('cartIconAbout');
const cartIconFaq = document.getElementById('cartIconFaq');
const cartBadge = document.getElementById('cartBadge');
const cartBadgeProducts = document.getElementById('cartBadgeProducts');
const cartBadgeAbout = document.getElementById('cartBadgeAbout');
const cartBadgeFaq = document.getElementById('cartBadgeFaq');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const searchInput = document.getElementById('searchInput');
const searchInputProducts = document.getElementById('searchInputProducts');
const searchInputAbout = document.getElementById('searchInputAbout');
const searchInputFaq = document.getElementById('searchInputFaq');
const chatBubble = document.getElementById('chatBubble');
const chatWindow = document.getElementById('chatWindow');
const closeChatBtn = document.getElementById('closeChatBtn');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const shopNowBtn = document.getElementById('shopNowBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const seeAllBtn = document.getElementById('seeAllBtn');
const cuteNotification = document.getElementById('cuteNotification');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutFormElement = document.getElementById('checkoutFormElement');
const cancelOrderBtn = document.getElementById('cancelOrderBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const navLinks = document.querySelectorAll('.nav-link');
const footerNavLinks = document.querySelectorAll('.footer-nav-link');
const faqToggles = document.querySelectorAll('.faq-toggle');
const contactLink = document.getElementById('contactLink');
const contactLinkProducts = document.getElementById('contactLinkProducts');
const contactLinkAbout = document.getElementById('contactLinkAbout');
const contactLinkFaq = document.getElementById('contactLinkFaq');
const contactFooterLinks = document.querySelectorAll('.contact-footer-link');
const contactModal = document.getElementById('contactModal');
const closeContactBtn = document.getElementById('closeContactBtn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading animation after 1.5 seconds
    setTimeout(() => {
        loadingEl.classList.add('hidden');
    }, 1500);
    
    // Generate featured product cards (first 4 products)
    renderProducts(allProducts.slice(0, 4), featuredProductsContainer);
    
    // Generate all product cards
    renderProducts(allProducts, allProductsContainer);
    
    // Generate testimonials
    renderTestimonials(testimonials);
    
    // Update cart badge
    updateCartBadge();
    
    // Initialize FAQ toggles
    initFaqToggles();
    
    // Event listeners for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
            }
        });
    });
    
    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
            }
        });
    });
    
    // Contact modal event listeners
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        openContactModal();
    });
    
    contactLinkProducts.addEventListener('click', function(e) {
        e.preventDefault();
        openContactModal();
    });
    
    contactLinkAbout.addEventListener('click', function(e) {
        e.preventDefault();
        openContactModal();
    });
    
    contactLinkFaq.addEventListener('click', function(e) {
        e.preventDefault();
        openContactModal();
    });
    
    contactFooterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openContactModal();
        });
    });
    
    closeContactBtn.addEventListener('click', closeContactModal);
    
    // Event listeners for cart
    cartIcon.addEventListener('click', openCart);
    cartIconProducts.addEventListener('click', openCart);
    cartIconAbout.addEventListener('click', openCart);
    cartIconFaq.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    
    // Other event listeners
    shopNowBtn.addEventListener('click', () => {
        navigateToPage('products');
    });
    
    seeAllBtn.addEventListener('click', () => {
        navigateToPage('products');
    });
    
    checkoutBtn.addEventListener('click', showCheckoutForm);
    cancelOrderBtn.addEventListener('click', closeCheckoutForm);
    
    // Search functionality - IMPROVED
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(this.value, featuredProductsContainer, allProducts.slice(0, 4));
        }, 300);
    });
    
    searchInputProducts.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(this.value, allProductsContainer, allProducts);
        }, 300);
    });
    
    searchInputAbout.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            // Search functionality for about page if needed
        }, 300);
    });
    
    searchInputFaq.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            // Search functionality for FAQ page if needed
        }, 300);
    });
    
    // Chat functionality
    chatBubble.addEventListener('click', toggleChat);
    closeChatBtn.addEventListener('click', toggleChat);
    sendChatBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
    
    // Filter and sort functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    sortSelect.addEventListener('change', function() {
        sortProducts(this.value);
    });
    
    // Checkout form submission
    checkoutFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        processOrder();
    });
    
    // Shipping cost calculation
    document.getElementById('shipping').addEventListener('change', updateOrderSummary);
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && 
            !cartIcon.contains(e.target) && 
            !cartIconProducts.contains(e.target) && 
            !cartIconAbout.contains(e.target) && 
            !cartIconFaq.contains(e.target) && 
            cartSidebar.classList.contains('active')) {
            closeCart();
        }
    });
    
    // Close modals when clicking overlay
    overlay.addEventListener('click', function() {
        closeCheckoutForm();
        closeContactModal();
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCheckoutForm();
            closeContactModal();
            closeCart();
            toggleChat(false);
        }
    });
});

// Initialize FAQ toggles
function initFaqToggles() {
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            
            // Toggle active class on answer
            answer.classList.toggle('active');
            
            // Rotate toggle button
            this.classList.toggle('rotated');
            
            // Change button text
            this.textContent = answer.classList.contains('active') ? '−' : '+';
        });
    });
}

// Navigate between pages with animation
function navigateToPage(page) {
    // Get all page elements
    const pages = {
        home: homePage,
        products: productsPage,
        about: aboutPage,
        faq: faqPage,
        testimonials: homePage // Testimonials is part of home page
    };
    
    // If going to testimonials, scroll to that section
    if (page === 'testimonials') {
        pages.home.style.display = 'block';
        productsPage.style.display = 'none';
        aboutPage.style.display = 'none';
        faqPage.style.display = 'none';
        
        // Add transition class
        pages.home.classList.remove('active');
        setTimeout(() => {
            pages.home.classList.add('active');
        }, 10);
        
        // Scroll to testimonials section
        setTimeout(() => {
            document.getElementById('testimonialsSection').scrollIntoView({ behavior: 'smooth' });
        }, 300);
        
        // Update active nav link
        updateActiveNavLink(page);
        return;
    }
    
    // Hide all pages
    Object.values(pages).forEach(pageEl => {
        if (pageEl) {
            pageEl.style.display = 'none';
            pageEl.classList.remove('active');
        }
    });
    
    // Show selected page with animation
    if (pages[page]) {
        pages[page].style.display = 'block';
        
        // Trigger animation after a small delay
        setTimeout(() => {
            pages[page].classList.add('active');
        }, 10);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Update active nav link
    updateActiveNavLink(page);
}

// Update active navigation link
function updateActiveNavLink(activePage) {
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === activePage) {
            link.style.backgroundColor = 'var(--pink-pastel)';
            link.style.color = 'white';
            link.style.boxShadow = '0 2px 6px rgba(255, 145, 164, 0.3)';
        } else {
            link.style.backgroundColor = '';
            link.style.color = '';
            link.style.boxShadow = '';
        }
    });
}

// Render products to the page
function renderProducts(productsArray, container) {
    container.innerHTML = '';
    
    if (productsArray.length === 0) {
        container.innerHTML = '<div class="no-results" style="text-align: center; padding: 3rem; color: var(--gray-dark); grid-column: 1 / -1;"><h3>No products found</h3><p>Try a different search term</p></div>';
        return;
    }
    
    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
        <div class="product-image" style="background-color: ${product.color}">
        <div class="product-type">${product.type === 'acrylic' ? 'Acrylic' : 'Plush'}</div>
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
        <div class="product-rating">
            ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
        </div>
        <button class="add-to-cart" data-id="${product.id}">
            + Add to Cart
        </button>
    </div>
    `;
        
        container.appendChild(productCard);
    });
    
    // Add event listeners to Add to Cart buttons
    container.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Render testimonials to the page
function renderTestimonials(testimonialsArray) {
    testimonialContainer.innerHTML = '';
    
    testimonialsArray.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">${testimonial.avatar}</div>
                <div>
                    <h4 class="testimonial-name">${testimonial.name}</h4>
                    <div class="product-rating">
                        ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                    </div>
                </div>
            </div>
            <p>"${testimonial.comment}"</p>
        `;
        
        testimonialContainer.appendChild(testimonialCard);
    });
}

// Add product to cart with CUTE notification
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            type: product.type,
            color: product.color,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('sasamiaw_cart', JSON.stringify(cart));
    
    // Update UI
    updateCartBadge();
    
    // Show CUTE notification
    showCuteNotification(`${product.name} added to cart! 🛍️`);
    
    // If cart is open, update it
    if (cartSidebar.classList.contains('active')) {
        updateCartDisplay();
    }
}

// Show CUTE notification
function showCuteNotification(message) {
    // Update notification message
    document.getElementById('notificationMessage').textContent = message;
    
    // Show notification with animation
    cuteNotification.classList.add('show');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        cuteNotification.classList.remove('show');
    }, 3000);
}

// Update cart badge
function updateCartBadge() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadgeProducts.textContent = totalItems;
    cartBadgeAbout.textContent = totalItems;
    cartBadgeFaq.textContent = totalItems;
}

// Open cart sidebar
function openCart() {
    cartSidebar.classList.add('active');
    updateCartDisplay();
}

// Close cart sidebar
function closeCart() {
    cartSidebar.classList.remove('active');
}

// Update cart display
function updateCartDisplay() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--gray-dark); padding: 2rem;">Your cart is empty 🛒</p>';
        cartTotalPrice.textContent = 'Rp 0';
        return;
    }
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-color: ${item.color}">
                <span>${item.type === 'acrylic' ? '🔸' : '🧸'}</span>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')} × ${item.quantity}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                <button class="delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Update total price
    cartTotalPrice.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    
    // Add event listeners to cart controls
    cartItems.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    cartItems.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    cartItems.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeCartItem(productId);
        });
    });
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        
        // Save to localStorage
        localStorage.setItem('sasamiaw_cart', JSON.stringify(cart));
        
        // Update UI
        updateCartBadge();
        updateCartDisplay();
        showCuteNotification('Cart updated! 🛒');
    }
}

// Remove cart item
function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    // Save to localStorage
    localStorage.setItem('sasamiaw_cart', JSON.stringify(cart));
    
    // Update UI
    updateCartBadge();
    updateCartDisplay();
    showCuteNotification('Item removed from cart 🗑️');
}

// Handle search - IMPROVED with better filtering
function handleSearch(query, container, productsArray) {
    if (!query.trim()) {
        // If search is empty, show all products
        renderProducts(productsArray, container);
        return;
    }
    
    const searchTerms = query.toLowerCase().split(' ');
    
    const filteredProducts = productsArray.filter(product => {
        const productText = (product.name + ' ' + product.type).toLowerCase();
        
        // Check if ALL search terms are found in product text
        return searchTerms.every(term => productText.includes(term));
    });
    
    renderProducts(filteredProducts, container);
}

// Filter products by type
function filterProducts(filter) {
    let filteredProducts;
    
    if (filter === 'all') {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(product => product.type === filter);
    }
    
    // Apply current sort
    const sortValue = sortSelect.value;
    if (sortValue !== 'default') {
        filteredProducts = sortProductsArray(filteredProducts, sortValue);
    }
    
    renderProducts(filteredProducts, allProductsContainer);
}

// Sort products
function sortProducts(sortValue) {
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    let filteredProducts;
    
    if (activeFilter === 'all') {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(product => product.type === activeFilter);
    }
    
    const sortedProducts = sortProductsArray(filteredProducts, sortValue);
    renderProducts(sortedProducts, allProductsContainer);
}

// Sort products array
function sortProductsArray(productsArray, sortValue) {
    const sortedArray = [...productsArray];
    
    if (sortValue === 'price-low') {
        sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        sortedArray.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
        sortedArray.sort((a, b) => b.rating - a.rating);
    }
    
    return sortedArray;
}

// Open contact modal
function openContactModal() {
    contactModal.classList.add('active');
    overlay.classList.add('active');
}

// Close contact modal
function closeContactModal() {
    contactModal.classList.remove('active');
    overlay.classList.remove('active');
}

// Toggle chat window
function toggleChat(forceClose) {
    if (forceClose === false) {
        chatWindow.classList.remove('active');
    } else {
        chatWindow.classList.toggle('active');
    }
}

// Send chat message
function sendChatMessage() {
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Bot response (simulated)
    setTimeout(() => {
        let response = chatbotResponses.default;
        
        // Check for keywords
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            response = chatbotResponses.price;
        } else if (lowerMessage.includes('ship') || lowerMessage.includes('delivery')) {
            response = chatbotResponses.shipping;
        } else if (lowerMessage.includes('help')) {
            response = chatbotResponses.help;
        } else if (lowerMessage.includes('pay')) {
            response = chatbotResponses.payment;
        } else if (lowerMessage.includes('acrylic')) {
            response = chatbotResponses.acrylic;
        } else if (lowerMessage.includes('plush')) {
            response = chatbotResponses.plush;
        }
        
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.textContent = response;
        chatBody.appendChild(botMessage);
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// Show checkout form
function showCheckoutForm() {
    if (cart.length === 0) {
        showCuteNotification('Your cart is empty! Add some keychains first. 🛒');
        return;
    }
    
    // Calculate total
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Update summary
    document.getElementById('summarySubtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    updateOrderSummary();
    
    checkoutForm.classList.add('active');
    overlay.classList.add('active');
}

// Close checkout form
function closeCheckoutForm() {
    checkoutForm.classList.remove('active');
    overlay.classList.remove('active');
}

// Update order summary
function updateOrderSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingSelect = document.getElementById('shipping');
    let shippingCost = 0;
    
    if (shippingSelect.value === 'regular') {
        shippingCost = 10000;
    } else if (shippingSelect.value === 'express') {
        shippingCost = 25000;
    }
    
    document.getElementById('summaryShipping').textContent = `Rp ${shippingCost.toLocaleString('id-ID')}`;
    
    const total = subtotal + shippingCost;
    document.getElementById('summaryTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// Process order
function processOrder() {
    // In a real application, you would send this data to a server
    const orderData = {
        customer: {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            postalCode: document.getElementById('postalCode').value
        },
        shipping: document.getElementById('shipping').value,
        payment: document.getElementById('payment').value,
        items: cart,
        subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        shippingCost: document.getElementById('shipping').value === 'regular' ? 10000 : 25000,
        total: 0
    };
    
    orderData.total = orderData.subtotal + orderData.shippingCost;
    
    // Clear cart
    cart = [];
    localStorage.setItem('sasamiaw_cart', JSON.stringify(cart));
    updateCartBadge();
    updateCartDisplay();
    
    // Close checkout form
    closeCheckoutForm();
    
    // Show success message
    showCuteNotification('Order Booked successfully! Please wait for confirmation through whatsapp. Thank you for shopping with us. 🎉');
    
    // Reset form
    checkoutFormElement.reset();
}