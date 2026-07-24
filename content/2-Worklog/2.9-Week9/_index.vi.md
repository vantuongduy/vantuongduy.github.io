---
title: "Tuần 9"
weight: 9
description: "AWS Backup, VPC Peering, Transit Gateway, SQL High Availability, Docker, Amazon ECS và AWS CodePipeline"
---

## 🎯 Mục tiêu tuần 9

- Thực hành sao lưu và khôi phục dữ liệu bằng AWS Backup.
- Tìm hiểu kết nối mạng giữa các VPC bằng VPC Peering và Transit Gateway.
- Làm quen với mô hình SQL High Availability.
- Tìm hiểu Docker và triển khai ứng dụng bằng Amazon ECS.
- Xây dựng quy trình CI/CD với AWS CodePipeline.

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
<li>- Truy cập dịch vụ AWS Backup.</li>
<li>- Tạo Backup Vault để lưu trữ bản sao lưu.</li>
<li>- Xây dựng Backup Plan.</li>
<li>- Gán tài nguyên cần sao lưu vào Backup Plan.</li>
<li>- Thực hiện sao lưu dữ liệu theo kế hoạch.</li>
<li>- Kiểm tra và khôi phục dữ liệu từ bản Backup.</li>
</ul>

</td>

<td style="text-align:center;">29/06/2026</td>

<td style="text-align:center;">29/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">2</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu mô hình VPC Peering.</li>
<li>- Tạo kết nối VPC Peering giữa hai VPC.</li>
<li>- Cập nhật Route Table.</li>
<li>- Kiểm tra khả năng giao tiếp giữa các EC2 Instance.</li>
<li>- Tìm hiểu Amazon Transit Gateway.</li>
<li>- So sánh VPC Peering và Transit Gateway.</li>
</ul>

</td>

<td style="text-align:center;">30/06/2026</td>

<td style="text-align:center;">30/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">3</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu mô hình SQL High Availability.</li>
<li>- Nghiên cứu cơ chế Multi-AZ Deployment.</li>
<li>- Theo dõi quá trình đồng bộ dữ liệu.</li>
<li>- Kiểm tra khả năng Failover của hệ thống.</li>
<li>- Đánh giá tính sẵn sàng của cơ sở dữ liệu.</li>
<li>- So sánh Single-AZ và Multi-AZ.</li>
</ul>

</td>

<td style="text-align:center;">01/07/2026</td>

<td style="text-align:center;">01/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">4</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Cài đặt Docker trên môi trường thực hành.</li>
<li>- Tìm hiểu Docker Image và Docker Container.</li>
<li>- Thực hành tạo Docker Image.</li>
<li>- Chạy ứng dụng bằng Docker Container.</li>
<li>- Quản lý Container bằng các lệnh Docker.</li>
<li>- Kiểm tra hoạt động của ứng dụng trong Container.</li>
</ul>

</td>

<td style="text-align:center;">02/07/2026</td>

<td style="text-align:center;">02/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">5</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu Amazon Elastic Container Service (ECS).</li>
<li>- Tạo ECS Cluster.</li>
<li>- Triển khai Container lên ECS.</li>
<li>- Tìm hiểu quy trình CI/CD với AWS CodePipeline.</li>
<li>- Tạo Pipeline để tự động triển khai ứng dụng.</li>
<li>- Kiểm tra kết quả sau khi Pipeline thực thi.</li>
</ul>

</td>

<td style="text-align:center;">03/07/2026</td>

<td style="text-align:center;">05/07/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

</tbody>

</table>

## 🏆 Thành tích đạt được

- Tạo thành công Backup Plan và thực hiện sao lưu dữ liệu bằng AWS Backup.
- Thiết lập kết nối giữa các VPC thông qua VPC Peering.
- Hiểu nguyên lý hoạt động của Amazon Transit Gateway.
- Nắm được mô hình SQL High Availability và cơ chế Multi-AZ.
- Triển khai ứng dụng bằng Docker Container.
- Tạo và quản lý Amazon ECS Cluster.
- Xây dựng quy trình triển khai ứng dụng tự động với AWS CodePipeline.

## 💡 Kiến thức rút ra

- Hiểu quy trình sao lưu và khôi phục dữ liệu bằng AWS Backup.
- Biết cách kết nối nhiều VPC bằng VPC Peering và Transit Gateway.
- Hiểu tầm quan trọng của High Availability đối với cơ sở dữ liệu.
- Nắm được các khái niệm cơ bản về Docker và Container.
- Biết cách triển khai Container trên Amazon ECS.
- Hiểu quy trình CI/CD và vai trò của AWS CodePipeline trong tự động hóa triển khai ứng dụng.