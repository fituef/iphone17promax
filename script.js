// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validate form
        if (name && email && message) {
            // Show success message
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
            
            // Reset form
            this.reset();
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    });
}

// Button click handlers
const buyButtons = document.querySelectorAll('.btn-primary');
buyButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        if (this.textContent.includes('Mua')) {
            e.preventDefault();
            showModal();
        }
    });
});

// Modal for purchase confirmation
function showModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    modal.innerHTML = `
        <div style="
            background-color: white;
            padding: 40px;
            border-radius: 12px;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        ">
            <h2 style="margin-bottom: 20px; color: #1a1a1a;">Chọn Dung Lượng</h2>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 15px;">
                    <input type="radio" name="storage" value="256GB"> 256GB - 24,999,000 ₫
                </label>
                <label style="display: block; margin-bottom: 15px;">
                    <input type="radio" name="storage" value="512GB" checked> 512GB - 27,999,000 ₫
                </label>
                <label style="display: block; margin-bottom: 15px;">
                    <input type="radio" name="storage" value="1TB"> 1TB - 31,999,000 ₫
                </label>
            </div>
            <div style="display: flex; gap: 10px;">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                    flex: 1;
                    padding: 10px;
                    background-color: #ddd;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Hủy</button>
                <button onclick="confirmPurchase(this)" style="
                    flex: 1;
                    padding: 10px;
                    background-color: #09f;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Xác Nhận</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function confirmPurchase(button) {
    const modal = button.closest('[style*="position: fixed"]');
    const selectedStorage = modal.querySelector('input[name="storage"]:checked').value;
    alert(`Cảm ơn bạn đã chọn iPhone 17 ProMax ${selectedStorage}!\n\nĐơn hàng của bạn sẽ được xử lý sớm.`);
    modal.remove();
}

// Intersection Observer for fade-in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('[style*="position: fixed"]');
        if (modal) modal.remove();
    }
});

// Performance analytics (optional)
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
});

// Dark mode toggle (optional feature)
function toggleDarkMode() {
    const isDarkMode = document.body.style.backgroundColor === 'rgb(26, 26, 26)';
    
    if (isDarkMode) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#1a1a1a';
    } else {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#ffffff';
    }
}

console.log('Landing page loaded successfully!');
