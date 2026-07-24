---
title: "Tuần 3"
weight: 3
description: "Auto Scaling, Elastic Load Balancer, CloudWatch, Route 53 và AWS CLI"
---

## 🎯 Mục tiêu tuần 3

- Hiểu cơ chế tự động mở rộng tài nguyên bằng Amazon EC2 Auto Scaling.
- Làm quen với việc phân phối lưu lượng bằng Elastic Load Balancing.
- Theo dõi tài nguyên và hiệu năng hệ thống bằng Amazon CloudWatch.
- Cấu hình tên miền và bản ghi DNS bằng Amazon Route 53.
- Thực hành quản lý tài nguyên AWS thông qua AWS CLI.

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
<li>- Tìm hiểu vai trò của Amazon EC2 Auto Scaling trong hệ thống.</li>
<li>- Tạo Launch Template cho EC2 Instance.</li>
<li>- Cấu hình Amazon Machine Image và Instance Type trong Launch Template.</li>
<li>- Thiết lập Security Group và Key Pair phù hợp.</li>
<li>- Tạo Auto Scaling Group từ Launch Template.</li>
<li>- Cấu hình số lượng Instance tối thiểu, mong muốn và tối đa.</li>
</ul>
</td>
<td style="text-align:center;">18/05/2026</td>
<td style="text-align:center;">18/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">2</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu chức năng của Elastic Load Balancing.</li>
<li>- Tạo Application Load Balancer.</li>
<li>- Cấu hình VPC và các Public Subnet cho Load Balancer.</li>
<li>- Tạo Target Group cho các EC2 Instance.</li>
<li>- Đăng ký các EC2 Instance vào Target Group.</li>
<li>- Kiểm tra khả năng phân phối lưu lượng giữa nhiều EC2 Instance.</li>
</ul>
</td>
<td style="text-align:center;">19/05/2026</td>
<td style="text-align:center;">19/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">3</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Kết nối Auto Scaling Group với Application Load Balancer.</li>
<li>- Thiết lập Health Check cho các EC2 Instance.</li>
<li>- Cấu hình chính sách tự động mở rộng tài nguyên.</li>
<li>- Tạo Target Tracking Scaling Policy.</li>
<li>- Thiết lập ngưỡng sử dụng CPU làm điều kiện mở rộng.</li>
<li>- Kiểm tra quá trình tự động thêm và giảm EC2 Instance.</li>
</ul>
</td>
<td style="text-align:center;">20/05/2026</td>
<td style="text-align:center;">20/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">4</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Truy cập dịch vụ Amazon CloudWatch.</li>
<li>- Theo dõi các chỉ số CPU, Network và Status Check của EC2.</li>
<li>- Tạo CloudWatch Alarm cho chỉ số CPU Utilization.</li>
<li>- Kiểm tra trạng thái Alarm khi tài nguyên vượt ngưỡng.</li>
<li>- Tạo Dashboard để theo dõi các chỉ số quan trọng.</li>
<li>- Đánh giá khả năng giám sát hoạt động của hệ thống.</li>
</ul>
</td>
<td style="text-align:center;">21/05/2026</td>
<td style="text-align:center;">21/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
<tr>
<td style="text-align:center;">5</td>
<td>
<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu cơ chế phân giải tên miền bằng Amazon Route 53.</li>
<li>- Tạo Hosted Zone và làm quen với các loại DNS Record.</li>
<li>- Tạo bản ghi trỏ đến Application Load Balancer.</li>
<li>- Kiểm tra khả năng truy cập ứng dụng thông qua tên miền.</li>
<li>- Cấu hình AWS CLI trên môi trường thực hành.</li>
<li>- Sử dụng AWS CLI để kiểm tra EC2, Auto Scaling và CloudWatch.</li>
</ul>
</td>
<td style="text-align:center;">22/05/2026</td>
<td style="text-align:center;">24/05/2026</td>
<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>
</tr>
</tbody>
</table>

## 🏆 Thành tích đạt được

- Tạo thành công Launch Template và Auto Scaling Group.
- Thiết lập số lượng EC2 Instance tối thiểu, mong muốn và tối đa.
- Tạo thành công Application Load Balancer và Target Group.
- Phân phối lưu lượng truy cập giữa nhiều EC2 Instance.
- Kết nối Auto Scaling Group với Load Balancer.
- Thiết lập Health Check và chính sách tự động mở rộng tài nguyên.
- Theo dõi chỉ số hệ thống và tạo cảnh báo bằng Amazon CloudWatch.
- Tạo bản ghi DNS trên Amazon Route 53.
- Thực hành quản lý tài nguyên AWS bằng AWS CLI.

## 💡 Kiến thức rút ra

- Hiểu vai trò của Auto Scaling trong việc bảo đảm khả năng mở rộng hệ thống.
- Biết cách sử dụng Elastic Load Balancing để phân phối lưu lượng.
- Hiểu cơ chế hoạt động của Target Group và Health Check.
- Biết cách cấu hình Scaling Policy dựa trên chỉ số CloudWatch.
- Hiểu cách theo dõi hiệu năng tài nguyên bằng CloudWatch.
- Biết cách sử dụng Route 53 để quản lý tên miền và bản ghi DNS.
- Có thể sử dụng AWS CLI để kiểm tra và quản lý một số tài nguyên AWS.