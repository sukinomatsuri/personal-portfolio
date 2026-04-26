# 🚀 DevOps Engineer Portfolio

[![Deploy to GitHub Pages](https://github.com/sukinomatsuri/personal-portfolio/actions/workflows/deploy.yml/badge.svg)](https://sukinomatsuri.github.io/personal-portfolio/)

Đây là trang web Portfolio cá nhân được xây dựng để giới thiệu kỹ năng, dự án và chứng chỉ trong lĩnh vực **DevOps / Cloud Engineering**. 

🌐 **Link Website Trực Tiếp:** [https://sukinomatsuri.github.io/personal-portfolio/](https://sukinomatsuri.github.io/personal-portfolio/)

---

## 📑 Nội Dung Portfolio
Trang web được thiết kế theo phong cách Terminal/DevOps hiện đại với đầy đủ các phần tử yêu cầu:
- **Giới thiệu (About):** Trình bày niềm đam mê với tự động hóa, CI/CD, Terraform và Docker.
- **Dự án (Projects):** Trưng bày các dự án thực tế với mô tả kiến trúc chi tiết.
- **Chứng chỉ (Certifications):** Tích hợp các chứng chỉ từ IBM, Google Cloud và FreeCodeCamp kèm link xác thực (Credly).
- **Liên hệ (Contact):** Form liên hệ hoạt động thực tế (gửi email tự động qua FormSubmit) cùng các liên kết GitHub, LinkedIn.

---

## 🛠️ Công Nghệ Sử Dụng
- **Frontend:** React.js (Vite), TypeScript.
- **Styling:** Tailwind CSS (kèm hiệu ứng Glassmorphism & Gradient Mesh).
- **Icons:** Lucide React.
- **Routing:** Wouter.
- **Deployment:** GitHub Actions & GitHub Pages.

---

## 🚀 Quá Trình Thực Hiện (Development Process)

Dự án được thực hiện qua các giai đoạn sau:

### 1. Lên ý tưởng và Thiết kế Giao diện (UI/UX)
- Quyết định sử dụng tông màu Tối (Dark mode) làm chủ đạo để mang lại cảm giác "Terminal" quen thuộc của dân kỹ thuật.
- Bổ sung Chế độ Sáng (Light mode) với nền Gradient lưới tinh tế để đa dạng hóa trải nghiệm.
- Thiết kế các khối hiển thị dạng "Command Line" (Dòng lệnh).

### 2. Phát triển Component (Code Implementation)
- Cấu trúc ứng dụng thành các Component độc lập: `Hero`, `About`, `Projects`, `Certifications`, `Contact`.
- Khai báo Interface chặt chẽ bằng TypeScript để đảm bảo không xảy ra lỗi dữ liệu.
- Xử lý mảng dữ liệu để tự động render danh sách dự án và chứng chỉ.

### 3. Tích hợp tính năng mở rộng
- **Contact Form:** Kết nối API của `FormSubmit.co` bằng phương thức AJAX để cho phép khách truy cập gửi email trực tiếp mà không cần Server/Backend.
- **Social Links:** Chỉnh sửa tất cả các icon GitHub, LinkedIn để mở tab mới dẫn về trang cá nhân.
- **Theme Toggle:** Viết logic chuyển đổi Dark/Light mode, tự động lưu trạng thái.

### 4. Cấu hình Deploy tự động lên GitHub Pages
- Tinh chỉnh file `vite.config.ts` để cấu hình `base: "/personal-portfolio/"` phù hợp với đường dẫn của GitHub Pages.
- Sửa lỗi định tuyến của thư viện `wouter` để hoạt động chính xác trên môi trường sub-path.
- Tạo workflow CI/CD (`.github/workflows/deploy.yml`) để tự động hóa việc Build code và Deploy mỗi khi có mã nguồn mới được đẩy (push) lên nhánh `main`.

---

## 📸 Hình Ảnh Mô Tả (Screenshots)

*(Lưu ý: Bạn có thể tự dùng công cụ Snipping Tool/Lightshot chụp ảnh website của mình và dán đè vào đây)*

- **Giao diện Hero (Dark Mode):** 
  ![Hero Section](https://via.placeholder.com/800x400?text=Hero+Section+-+Dark+Mode)
- **Giao diện Sáng (Light Mode):** 
  ![Light Mode](https://via.placeholder.com/800x400?text=Light+Mode+Design)
- **Danh sách Chứng chỉ & Form Liên hệ:**
  ![Certifications](https://via.placeholder.com/800x400?text=Certifications+and+Contact+Form)

---

## 💻 Hướng Dẫn Chạy Dự Án Trên Máy Cá Nhân (Local)

1. Tải repo này về máy:
   ```bash
   git clone https://github.com/sukinomatsuri/personal-portfolio.git
   ```
2. Cài đặt các gói thư viện:
   ```bash
   cd personal-portfolio
   npm install
   ```
3. Chạy server phát triển:
   ```bash
   npm run dev
   ```
4. Truy cập `http://localhost:3000` trên trình duyệt.
