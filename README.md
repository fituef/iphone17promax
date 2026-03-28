# Landing Page - iPhone 17 ProMax

Đây là một trang landing chuyên nghiệp để giới thiệu sản phẩm iPhone 17 ProMax.

## 📁 Cấu Trúc Thư Mục

```
Landingpage/
├── index.html          # File HTML chính
├── styles.css          # File CSS để tạo phong cách
├── script.js           # File JavaScript cho tương tác
├── images/             # Thư mục chứa hình ảnh
│   ├── iphone-hero.png
│   ├── iphone-front.png
│   ├── iphone-back.png
│   ├── iphone-side.png
│   ├── iphone-colors.png
│   ├── iphone-camera.png
│   ├── iphone-display.png
│   ├── camera-icon.svg
│   ├── chip-icon.svg
│   ├── battery-icon.svg
│   ├── display-icon.svg
│   ├── design-icon.svg
│   └── ai-icon.svg
└── README.md           # File hướng dẫn

```

## 🚀 Cách Sử Dụng

### 1. Mở Landing Page

Đơn giản nhất, hãy mở file `index.html` bằng trình duyệt web của bạn:

- Click chuột phải vào `index.html`
- Chọn "Open with" → Chọn trình duyệt (Chrome, Firefox, Edge, Safari, v.v.)

### 2. Chạy trên Web Server (Khuyến Nghị)

Để tránh vấn đề CORS, hãy chạy trên web server:

**Sử dụng Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Sử dụng Node.js:**

```bash
npm install -g http-server
http-server
```

**Sử dụng PHP:**

```bash
php -S localhost:8000
```

Sau đó truy cập: `http://localhost:8000`

## 📱 Tính Năng của Landing Page

### 1. **Navigation Header**

- Sticky header với blur effect
- Menu điều hướng mượt mà

### 2. **Hero Section**

- Tiêu đề lớn và hấp dẫn
- Mô tả sản phẩm chi tiết
- Nút điều hành (Mua ngay, Tìm hiểu thêm)
- Hình ảnh iPhone động (floating animation)

### 3. **Features Section**

- 6 tính năng nổi bật
- Card với hover effect
- Icon và mô tả chi tiết
- Responsive design

### 4. **Specifications Section**

- Thông số kỹ thuật chi tiết
- 4 cột: Hiển thị, Hiệu suất, Camera, Pin & Sạc
- Dễ dàng thêm/chỉnh sửa thông số

### 5. **Gallery Section**

- Bộ sưu tập 6 hình ảnh
- Hover effect với zoom
- Responsive grid

### 6. **Pricing Section**

- 3 gói giá (256GB, 512GB, 1TB)
- Highlight gói phổ biến nhất
- Background gradient chuyên nghiệp

### 7. **Contact Section**

- Thông tin liên hệ
- Form gửi tin nhắn
- Responsive layout

### 8. **Footer**

- Copyright
- Social media links

## 🎨 Tùy Chỉnh Thông Tin

### Thay Đổi Giá

Mở `index.html` và tìm phần `pricing-section`:

```html
<div class="price">24,999,000 ₫</div>
```

### Thay Đổi Số Điện Thoại

Tìm phần contact:

```html
<p><strong>Điện thoại:</strong> 1900 9999</p>
```

### Thay Đổi Email

```html
<p><strong>Email:</strong> support@iphone17promax.vn</p>
```

### Thay Đổi Địa Chỉ

```html
<p><strong>Địa chỉ:</strong> 123 Đường Lê Lợi, Quận 1, TP.HCM</p>
```

## 🖼️ Thay Thế Hình Ảnh

### Sử Dụng Hình Ảnh Thực Tế

1. Lưu hình ảnh vào thư mục `images/`
2. Cập nhật đường dẫn trong `index.html`:

```html
<img src="images/your-image.jpg" alt="Description" />
```

### Hỗ Trợ Định Dạng

- JPG / JPEG
- PNG
- SVG
- WebP

## 🎯 Cải Thiện Hiệu Năng

1. **Tối ưu hình ảnh:** Sử dụng công cụ như TinyPNG
2. **Lazy loading:** Thêm `loading="lazy"` vào ảnh
3. **Web fonts:** Sử dụng Google Fonts

## 📱 Responsive Design

Landing page hoàn toàn responsive:

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🔧 Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc ngữ nghĩa
- **CSS3** - Styling, Flexbox, Grid, Animations
- **Vanilla JavaScript** - Tương tác không cần thư viện bên ngoài
- **SVG** - Icon vector chất lượng cao

## 💡 Tính Năng JavaScript

- ✅ Smooth scroll navigation
- ✅ Scroll effect header
- ✅ Form validation
- ✅ Purchase modal
- ✅ Intersection Observer animations
- ✅ Keyboard shortcuts

## 🎨 Màu Sắc Chính

- **Primary Blue:** #09f (0099ff)
- **Dark Text:** #1a1a1a
- **Light Text:** #666
- **Light Background:** #f9f9f9
- **White:** #ffffff

## 📊 SEO Optimization

- Meta tags đã cấu hình
- Semantic HTML
- Responsive design
- Fast loading times

## 🐛 Troubleshooting

### Hình ảnh không load?

- Kiểm tra đường dẫn file (case-sensitive trên Linux/Mac)
- Chắc chắn file tồn tại trong thư mục `images/`
- Chạy trên web server thay vì file:// protocol

### Form không hoạt động?

- Mở Developer Console (F12)
- Kiểm tra console.log messages
- Đảm bảo JavaScript được bật

## 📈 Các Trang Tiếp Theo (Gợi Ý)

- Product detail page
- Checkout page
- Order confirmation page
- Blog/News section

## 📞 Liên Hệ & Hỗ Trợ

Để thêm tính năng hoặc sửa lỗi, hãy:

1. Kiểm tra Developer Console
2. Xem source code HTML/CSS/JS
3. Chỉnh sửa theo nhu cầu

## 📄 License

Dự án này có sẵn cho mục đích sử dụng cá nhân và thương mại.

---

**Chúc bạn thành công!** 🎉

Nếu cần hỗ trợ thêm, vui lòng liên hệ.
