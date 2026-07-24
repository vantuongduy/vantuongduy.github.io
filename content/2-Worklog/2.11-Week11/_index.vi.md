---
title: "Tuần 11"
weight: 11
description: "Advanced VPC, Public/Private Subnet, Security Groups và Amazon RDS SQL Server trong Private Subnet"
---

## 🎯 Mục tiêu tuần 11

- Ôn tập và nâng cao kiến thức về Amazon VPC.
- Thiết kế mô hình mạng với Public Subnet và Private Subnet.
- Cấu hình Security Groups để kiểm soát truy cập.
- Triển khai Amazon RDS SQL Server trong Private Subnet.
- Kiểm tra khả năng kết nối giữa EC2 và RDS trong môi trường riêng tư.

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
<li>- Ôn tập kiến thức về Amazon VPC.</li>
<li>- Thiết kế sơ đồ mạng cho hệ thống.</li>
<li>- Tạo VPC mới phục vụ thực hành.</li>
<li>- Cấu hình dải địa chỉ IPv4.</li>
<li>- Kiểm tra các thành phần của VPC.</li>
<li>- Đánh giá khả năng mở rộng của mô hình mạng.</li>
</ul>

</td>

<td style="text-align:center;">13/07/2026</td>

<td style="text-align:center;">13/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">2</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tạo Public Subnet và Private Subnet.</li>
<li>- Cấu hình Internet Gateway.</li>
<li>- Thiết lập Route Table cho từng Subnet.</li>
<li>- Kiểm tra khả năng truy cập Internet.</li>
<li>- Phân biệt chức năng của Public và Private Subnet.</li>
<li>- Kiểm tra kết nối giữa các Subnet.</li>
</ul>

</td>

<td style="text-align:center;">14/07/2026</td>

<td style="text-align:center;">14/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">3</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tạo Security Group cho EC2 Instance.</li>
<li>- Tạo Security Group cho Amazon RDS.</li>
<li>- Thiết lập Inbound Rules.</li>
<li>- Thiết lập Outbound Rules.</li>
<li>- Kiểm tra khả năng giao tiếp giữa EC2 và RDS.</li>
<li>- Điều chỉnh quy tắc để đảm bảo an toàn hệ thống.</li>
</ul>

</td>

<td style="text-align:center;">15/07/2026</td>

<td style="text-align:center;">15/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">4</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Triển khai Amazon RDS SQL Server.</li>
<li>- Lựa chọn DB Subnet Group.</li>
<li>- Đặt RDS trong Private Subnet.</li>
<li>- Thiết lập thông số cơ sở dữ liệu.</li>
<li>- Kiểm tra trạng thái của DB Instance.</li>
<li>- Đánh giá mức độ bảo mật của mô hình triển khai.</li>
</ul>

</td>

<td style="text-align:center;">16/07/2026</td>

<td style="text-align:center;">16/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">5</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Kết nối EC2 với Amazon RDS SQL Server.</li>
<li>- Kiểm tra khả năng truy cập dữ liệu.</li>
<li>- Thực hiện truy vấn dữ liệu thử nghiệm.</li>
<li>- Kiểm tra Security Group và Route Table.</li>
<li>- Khắc phục các lỗi kết nối nếu có.</li>
<li>- Tổng hợp kết quả triển khai toàn bộ mô hình.</li>
</ul>

</td>

<td style="text-align:center;">17/07/2026</td>

<td style="text-align:center;">19/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

</tbody>

</table>

## 🏆 Thành tích đạt được

- Thiết kế thành công mô hình mạng với Amazon VPC.
- Triển khai Public Subnet và Private Subnet theo đúng kiến trúc.
- Cấu hình Security Groups đảm bảo an toàn cho hệ thống.
- Triển khai thành công Amazon RDS SQL Server trong Private Subnet.
- Kết nối EC2 với RDS và thực hiện truy vấn dữ liệu thành công.
- Hiểu cách xây dựng hệ thống có tính bảo mật cao trong môi trường AWS.

## 💡 Kiến thức rút ra

- Hiểu sâu hơn về kiến trúc mạng của Amazon VPC.
- Biết cách thiết kế Public Subnet và Private Subnet phù hợp với yêu cầu thực tế.
- Nắm được vai trò của Security Groups trong việc kiểm soát truy cập.
- Hiểu quy trình triển khai Amazon RDS SQL Server trong Private Subnet.
- Có khả năng xây dựng mô hình mạng AWS đáp ứng yêu cầu bảo mật và tính sẵn sàng cao.