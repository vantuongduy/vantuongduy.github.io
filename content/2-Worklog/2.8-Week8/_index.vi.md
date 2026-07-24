---
title: "Tuần 8"
weight: 8
description: "AWS IAM Identity Center (SSO), IAM Permission Boundaries, VPC Endpoint, AWS KMS, AWS Secrets Manager, AWS WAF và Amazon GuardDuty"
---

## 🎯 Mục tiêu tuần 8

- Làm quen với AWS IAM Identity Center (AWS SSO).
- Hiểu cách giới hạn quyền bằng IAM Permission Boundaries.
- Tìm hiểu cơ chế truy cập riêng tư bằng Amazon VPC Endpoint.
- Thực hành mã hóa dữ liệu bằng AWS Key Management Service (KMS).
- Quản lý thông tin nhạy cảm bằng AWS Secrets Manager.
- Bảo vệ ứng dụng với AWS WAF.
- Giám sát và phát hiện mối đe dọa bằng Amazon GuardDuty.

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
<li>- Tìm hiểu AWS IAM Identity Center (AWS SSO).</li>
<li>- Cấu hình người dùng và nhóm người dùng.</li>
<li>- Thiết lập Permission Set.</li>
<li>- Gán quyền truy cập cho tài khoản AWS.</li>
<li>- Đăng nhập thông qua AWS IAM Identity Center.</li>
<li>- Kiểm tra quyền truy cập sau khi cấu hình.</li>
</ul>

</td>

<td style="text-align:center;">22/06/2026</td>

<td style="text-align:center;">22/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">2</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu IAM Permission Boundaries.</li>
<li>- Tạo IAM Policy giới hạn quyền.</li>
<li>- Áp dụng Permission Boundary cho IAM User và IAM Role.</li>
<li>- Kiểm tra quyền truy cập sau khi áp dụng.</li>
<li>- So sánh Permission Boundary với IAM Policy thông thường.</li>
<li>- Đánh giá hiệu quả trong việc kiểm soát quyền.</li>
</ul>

</td>

<td style="text-align:center;">23/06/2026</td>

<td style="text-align:center;">23/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">3</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu Amazon VPC Endpoint.</li>
<li>- Tạo Gateway Endpoint và Interface Endpoint.</li>
<li>- Cấu hình kết nối giữa VPC và dịch vụ AWS.</li>
<li>- Kiểm tra truy cập không thông qua Internet Gateway.</li>
<li>- Đánh giá mức độ bảo mật của VPC Endpoint.</li>
<li>- So sánh với phương thức truy cập công khai.</li>
</ul>

</td>

<td style="text-align:center;">24/06/2026</td>

<td style="text-align:center;">24/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">4</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu AWS Key Management Service (KMS).</li>
<li>- Tạo Customer Managed Key.</li>
<li>- Mã hóa và giải mã dữ liệu bằng KMS.</li>
<li>- Tạo Secret trong AWS Secrets Manager.</li>
<li>- Lưu trữ thông tin đăng nhập cơ sở dữ liệu.</li>
<li>- Kiểm tra việc truy xuất Secret từ ứng dụng.</li>
</ul>

</td>

<td style="text-align:center;">25/06/2026</td>

<td style="text-align:center;">25/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">5</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu AWS WAF và Amazon GuardDuty.</li>
<li>- Tạo Web ACL để bảo vệ ứng dụng Web.</li>
<li>- Cấu hình Rule cơ bản trên AWS WAF.</li>
<li>- Kích hoạt Amazon GuardDuty.</li>
<li>- Theo dõi các cảnh báo bảo mật.</li>
<li>- Đánh giá khả năng phát hiện và ngăn chặn các mối đe dọa.</li>
</ul>

</td>

<td style="text-align:center;">26/06/2026</td>

<td style="text-align:center;">28/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

</tbody>

</table>

## 🏆 Thành tích đạt được

- Cấu hình thành công AWS IAM Identity Center để quản lý đăng nhập tập trung.
- Áp dụng IAM Permission Boundaries nhằm giới hạn quyền truy cập.
- Triển khai Amazon VPC Endpoint để truy cập dịch vụ AWS một cách riêng tư.
- Tạo và sử dụng Customer Managed Key bằng AWS KMS.
- Lưu trữ và quản lý thông tin nhạy cảm bằng AWS Secrets Manager.
- Cấu hình AWS WAF để tăng cường bảo mật cho ứng dụng.
- Kích hoạt Amazon GuardDuty và theo dõi các cảnh báo an ninh.

## 💡 Kiến thức rút ra

- Hiểu mô hình quản lý danh tính tập trung bằng AWS IAM Identity Center.
- Biết cách sử dụng IAM Permission Boundaries để kiểm soát quyền hiệu quả.
- Hiểu lợi ích của Amazon VPC Endpoint trong việc tăng cường bảo mật mạng.
- Nắm được quy trình mã hóa dữ liệu với AWS KMS.
- Biết cách quản lý thông tin bí mật bằng AWS Secrets Manager.
- Hiểu vai trò của AWS WAF và Amazon GuardDuty trong việc bảo vệ hệ thống và phát hiện các mối đe dọa an ninh.