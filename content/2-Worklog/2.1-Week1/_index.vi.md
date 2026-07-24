---
title: "Tuần 1"
weight: 1
description: "Khởi tạo AWS Account, IAM và Amazon VPC"
---

## 🎯 Mục tiêu tuần 1

- Khởi tạo và cấu hình tài khoản AWS phục vụ quá trình thực tập.
- Thiết lập AWS Budgets để theo dõi và kiểm soát chi phí.
- Hiểu cơ chế quản lý người dùng và phân quyền bằng AWS IAM.
- Xây dựng hệ thống mạng cơ bản bằng Amazon VPC.
- Cấu hình Public Subnet, Private Subnet, Route Table và Internet Gateway.

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
<li>- Khởi tạo tài khoản AWS cá nhân phục vụ quá trình thực tập.</li>
<li>- Xác minh địa chỉ email và thông tin tài khoản AWS.</li>
<li>- Cấu hình thông tin liên hệ và phương thức thanh toán.</li>
<li>- Đăng nhập AWS Management Console.</li>
<li>- Làm quen với giao diện quản lý và khu vực tìm kiếm dịch vụ AWS.</li>
</ul>
</td>
<td style="text-align:center;">05/05/2026</td>
<td style="text-align:center;">05/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">2</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Truy cập dịch vụ AWS Budgets trên AWS Management Console.</li>
<li>- Tạo ngân sách chi phí sử dụng hằng tháng.</li>
<li>- Thiết lập giới hạn chi phí phù hợp với tài khoản thực hành.</li>
<li>- Cấu hình cảnh báo khi chi phí đạt đến ngưỡng đã thiết lập.</li>
<li>- Kiểm tra trạng thái ngân sách và thông tin dự báo chi phí.</li>
</ul>
</td>
<td style="text-align:center;">06/05/2026</td>
<td style="text-align:center;">06/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">3</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Truy cập dịch vụ AWS Identity and Access Management.</li>
<li>- Tạo IAM User phục vụ quá trình thực hành.</li>
<li>- Tạo IAM Group và thêm người dùng vào nhóm.</li>
<li>- Tạo IAM Role dành cho các dịch vụ AWS.</li>
<li>- Xây dựng IAM Policy theo nguyên tắc phân quyền tối thiểu.</li>
<li>- Kiểm tra quyền truy cập sau khi cấu hình.</li>
</ul>
</td>
<td style="text-align:center;">07/05/2026</td>
<td style="text-align:center;">07/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">4</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu các thành phần chính của Amazon VPC.</li>
<li>- Khởi tạo một Amazon VPC mới.</li>
<li>- Thiết lập dải địa chỉ IPv4 CIDR cho VPC.</li>
<li>- Tạo Public Subnet cho các tài nguyên cần kết nối Internet.</li>
<li>- Tạo Private Subnet cho các tài nguyên nội bộ.</li>
<li>- Kiểm tra dải địa chỉ IP của từng Subnet.</li>
</ul>
</td>
<td style="text-align:center;">08/05/2026</td>
<td style="text-align:center;">08/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">5</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tạo Internet Gateway cho Amazon VPC.</li>
<li>- Gắn Internet Gateway vào VPC đã khởi tạo.</li>
<li>- Tạo Route Table dành cho Public Subnet.</li>
<li>- Cấu hình tuyến đường từ Public Subnet đến Internet Gateway.</li>
<li>- Liên kết Route Table với Public Subnet.</li>
<li>- Kiểm tra lại sơ đồ mạng và khả năng định tuyến Internet.</li>
</ul>
</td>
<td style="text-align:center;">09/05/2026</td>
<td style="text-align:center;">10/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
</tbody>
</table>

## 🏆 Thành tích đạt được

- Khởi tạo và cấu hình thành công tài khoản AWS cá nhân.
- Thiết lập AWS Budgets để theo dõi và kiểm soát chi phí sử dụng.
- Tạo thành công IAM User, IAM Group, IAM Role và IAM Policy.
- Áp dụng nguyên tắc Least Privilege trong quá trình phân quyền.
- Xây dựng thành công Amazon VPC với Public Subnet và Private Subnet.
- Cấu hình Route Table và Internet Gateway cho Public Subnet.
- Hiểu được cấu trúc mạng cơ bản trên nền tảng AWS.



## 💡 Kiến thức rút ra

- Hiểu quy trình khởi tạo và bảo vệ tài khoản AWS.
- Biết cách theo dõi chi phí bằng AWS Budgets.
- Hiểu vai trò của IAM User, IAM Group, IAM Role và IAM Policy.
- Biết cách áp dụng nguyên tắc Least Privilege.
- Hiểu cách phân chia mạng thành Public Subnet và Private Subnet.
- Hiểu vai trò của Route Table và Internet Gateway trong Amazon VPC.
- Có nền tảng mạng AWS để triển khai các tài nguyên trong những tuần tiếp theo.