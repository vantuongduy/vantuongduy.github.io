---
title: "Tuần 4"
weight: 4
description: "Amazon RDS, DynamoDB, ElastiCache và CloudFront"
---

## 🎯 Mục tiêu tuần 4

- Triển khai và quản lý cơ sở dữ liệu quan hệ bằng Amazon RDS.
- Làm quen với cơ sở dữ liệu NoSQL Amazon DynamoDB.
- Hiểu cơ chế lưu trữ bộ nhớ đệm bằng Amazon ElastiCache.
- Tìm hiểu dịch vụ phân phối nội dung Amazon CloudFront.
- So sánh ưu điểm và phạm vi sử dụng của từng dịch vụ.

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
<li>- Truy cập dịch vụ Amazon RDS trên AWS Management Console.</li>
<li>- Tìm hiểu các Database Engine được Amazon RDS hỗ trợ.</li>
<li>- Khởi tạo một RDS Database Instance.</li>
<li>- Cấu hình DB Instance Identifier, Username và Password.</li>
<li>- Lựa chọn Instance Class và Storage phù hợp.</li>
<li>- Kiểm tra trạng thái hoạt động của RDS Instance.</li>
</ul>

</td>

<td style="text-align:center;">25/05/2026</td>

<td style="text-align:center;">25/05/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">2</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Cấu hình VPC Security Group cho Amazon RDS.</li>
<li>- Thiết lập kết nối giữa EC2 và RDS.</li>
<li>- Kết nối cơ sở dữ liệu bằng MySQL Workbench hoặc SSMS.</li>
<li>- Tạo Database và các bảng dữ liệu phục vụ thực hành.</li>
<li>- Thực hiện các thao tác Insert, Update, Delete và Select.</li>
<li>- Kiểm tra khả năng truy cập dữ liệu từ EC2.</li>
</ul>

</td>

<td style="text-align:center;">26/05/2026</td>

<td style="text-align:center;">26/05/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">3</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Truy cập dịch vụ Amazon DynamoDB.</li>
<li>- Tạo bảng dữ liệu mới.</li>
<li>- Khai báo Partition Key cho bảng.</li>
<li>- Thêm các Item vào DynamoDB.</li>
<li>- Thực hiện truy vấn và cập nhật dữ liệu.</li>
<li>- So sánh DynamoDB với Amazon RDS.</li>
</ul>

</td>

<td style="text-align:center;">27/05/2026</td>

<td style="text-align:center;">27/05/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">4</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu dịch vụ Amazon ElastiCache.</li>
<li>- Làm quen với Redis và Memcached.</li>
<li>- Khởi tạo ElastiCache Cluster.</li>
<li>- Tìm hiểu cơ chế Cache dữ liệu.</li>
<li>- So sánh hiệu năng khi sử dụng Cache.</li>
<li>- Đánh giá vai trò của ElastiCache trong hệ thống.</li>
</ul>

</td>

<td style="text-align:center;">28/05/2026</td>

<td style="text-align:center;">28/05/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">5</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu dịch vụ Amazon CloudFront.</li>
<li>- Tạo CloudFront Distribution.</li>
<li>- Cấu hình Origin và Default Behavior.</li>
<li>- Kiểm tra khả năng phân phối nội dung.</li>
<li>- Đánh giá tốc độ tải nội dung khi sử dụng CloudFront.</li>
<li>- So sánh việc truy cập trực tiếp và thông qua CloudFront.</li>
</ul>

</td>

<td style="text-align:center;">29/05/2026</td>

<td style="text-align:center;">31/05/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

</tbody>

</table>

## 🏆 Thành tích đạt được

- Khởi tạo thành công Amazon RDS Database Instance.
- Thiết lập kết nối giữa EC2 và Amazon RDS.
- Thực hiện thành công các thao tác quản lý dữ liệu trên RDS.
- Tạo và quản lý bảng dữ liệu trên Amazon DynamoDB.
- Hiểu sự khác nhau giữa cơ sở dữ liệu quan hệ và NoSQL.
- Làm quen với dịch vụ Amazon ElastiCache và cơ chế Cache dữ liệu.
- Tạo thành công Amazon CloudFront Distribution.
- Kiểm tra khả năng tăng tốc truy cập nội dung bằng CloudFront.

## 💡 Kiến thức rút ra

- Hiểu quy trình triển khai cơ sở dữ liệu trên Amazon RDS.
- Biết cách kết nối ứng dụng với RDS thông qua Security Group.
- Hiểu nguyên lý hoạt động của cơ sở dữ liệu NoSQL Amazon DynamoDB.
- Biết vai trò của ElastiCache trong việc tối ưu hiệu năng hệ thống.
- Hiểu cơ chế phân phối nội dung của Amazon CloudFront.
- Có thể lựa chọn dịch vụ lưu trữ dữ liệu phù hợp với từng yêu cầu của hệ thống.