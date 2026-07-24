---
title: "Tuần 2"
weight: 2
description: "Amazon EC2, IAM Role, Security Group"
---

## 🎯 Mục tiêu tuần 2

- Triển khai và quản lý máy chủ ảo Amazon EC2.
- Kết nối và thao tác với hệ điều hành Linux trên EC2.
- Hiểu cách phân quyền cho EC2 bằng IAM Role.
- Cấu hình Security Group để kiểm soát lưu lượng mạng.


## 📅 Công việc thực hiện trong tuần

<table class="table table-bordered table-hover">
<thead>
<tr>
<th style="width:6%">STT</th>
<th style="width:48%">Nhiệm vụ</th>
<th style="width:12%">Ngày bắt đầu</th>
<th style="width:12%">Ngày hoàn thành</th>
<th style="width:22%">Tài liệu tham khảo</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center;">1</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Truy cập dịch vụ Amazon EC2 trên AWS Management Console.</li>
<li>- Tìm hiểu các thành phần chính của một EC2 Instance.</li>
<li>- Lựa chọn Amazon Machine Image phù hợp với bài thực hành.</li>
<li>- Lựa chọn Instance Type phù hợp với nhu cầu sử dụng.</li>
<li>- Cấu hình VPC và Subnet cho EC2 Instance.</li>
<li>- Khởi chạy EC2 Instance và kiểm tra trạng thái hoạt động.</li>
</ul>
</td>
<td style="text-align:center;">11/05/2026</td>
<td style="text-align:center;">11/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">2</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tạo Key Pair để xác thực khi đăng nhập EC2 Instance.</li>
<li>- Tải và lưu trữ tệp khóa bảo mật tại thư mục an toàn.</li>
<li>- Kiểm tra Public IPv4, Private IPv4 và Public DNS của Instance.</li>
<li>- Kết nối đến EC2 Instance bằng giao thức SSH.</li>
<li>- Làm quen với môi trường dòng lệnh Linux trên EC2.</li>
<li>- Thực hành Start, Stop và Reboot EC2 Instance.</li>
</ul>
</td>
<td style="text-align:center;">12/05/2026</td>
<td style="text-align:center;">12/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">3</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Truy cập dịch vụ AWS Identity and Access Management.</li>
<li>- Tạo IAM Role dành cho dịch vụ Amazon EC2.</li>
<li>- Gắn IAM Policy phù hợp vào IAM Role.</li>
<li>- Gán IAM Role vào EC2 Instance đang hoạt động.</li>
<li>- Kiểm tra quyền truy cập tài nguyên AWS từ EC2.</li>
<li>- Thực hành sử dụng IAM Role thay cho Access Key và Secret Access Key.</li>
</ul>
</td>
<td style="text-align:center;">13/05/2026</td>
<td style="text-align:center;">13/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">4</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tạo Security Group dành cho Amazon EC2 Instance.</li>
<li>- Cấu hình Inbound Rules để cho phép lưu lượng truy cập cần thiết.</li>
<li>- Mở cổng SSH để quản trị máy chủ từ xa.</li>
<li>- Mở cổng HTTP để kiểm tra khả năng truy cập Web Server.</li>
<li>- Kiểm tra và điều chỉnh các Outbound Rules.</li>
<li>- Xác minh khả năng kết nối sau khi cập nhật Security Group.</li>
</ul>
</td>
<td style="text-align:center;">14/05/2026</td>
<td style="text-align:center;">14/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>

</tr>
</tbody>
</table>

## 🏆 Thành tích đạt được

- Khởi tạo và vận hành thành công Amazon EC2 Instance.
- Kết nối thành công đến EC2 bằng giao thức SSH.
- Thực hành quản lý trạng thái Start, Stop và Reboot của EC2 Instance.
- Tạo và gắn thành công IAM Role vào Amazon EC2.
- Truy cập tài nguyên AWS từ EC2 mà không cần lưu Access Key trực tiếp.
- Cấu hình Security Group để kiểm soát lưu lượng SSH và HTTP.
- Thực hành một số thao tác quản lý tài nguyên bằng AWS CLI.

## 💡 Kiến thức rút ra

- Hiểu quy trình khởi tạo và quản lý Amazon EC2 Instance.
- Biết cách kết nối đến máy chủ Linux bằng SSH.
- Hiểu vai trò của Key Pair trong quá trình xác thực.
- Biết cách gán IAM Role cho EC2 để truy cập tài nguyên an toàn.
- Hiểu vai trò của Security Group trong việc kiểm soát lưu lượng mạng.
- Biết cách sử dụng AWS CLI để kiểm tra và quản lý tài nguyên AWS.