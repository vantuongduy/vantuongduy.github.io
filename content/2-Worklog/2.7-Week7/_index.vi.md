---
title: "Tuần 7"
weight: 7
description: "AWS CloudFormation, AWS CDK, Cost Optimization, EBS DLM, VPC Flow Logs và AWS Toolkit"
---

## 🎯 Mục tiêu tuần 7

- Tìm hiểu triển khai hạ tầng dưới dạng mã bằng AWS CloudFormation.
- Làm quen với AWS Cloud Development Kit (CDK).
- Tìm hiểu các phương pháp tối ưu chi phí trên AWS.
- Thực hành tạo Snapshot tự động bằng Amazon EBS Data Lifecycle Manager.
- Giám sát lưu lượng mạng bằng VPC Flow Logs.
- Làm quen với AWS Toolkit trên Visual Studio Code.

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
<li>- Tìm hiểu khái niệm Infrastructure as Code (IaC).</li>
<li>- Truy cập dịch vụ AWS CloudFormation.</li>
<li>- Tìm hiểu cấu trúc của CloudFormation Template.</li>
<li>- Khởi tạo Stack từ Template có sẵn.</li>
<li>- Theo dõi quá trình tạo tài nguyên.</li>
<li>- Kiểm tra các tài nguyên được triển khai sau khi Stack hoàn tất.</li>
</ul>

</td>

<td style="text-align:center;">15/06/2026</td>

<td style="text-align:center;">15/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">2</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Cài đặt AWS Cloud Development Kit (CDK).</li>
<li>- Khởi tạo dự án AWS CDK mới.</li>
<li>- Cấu hình môi trường làm việc.</li>
<li>- Tạo tài nguyên AWS bằng mã nguồn.</li>
<li>- Triển khai hạ tầng bằng lệnh CDK Deploy.</li>
<li>- Kiểm tra kết quả triển khai trên AWS Console.</li>
</ul>

</td>

<td style="text-align:center;">16/06/2026</td>

<td style="text-align:center;">16/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">3</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu AWS Cost Optimization.</li>
<li>- Kiểm tra chi phí sử dụng các dịch vụ AWS.</li>
<li>- Phân tích các tài nguyên chưa được sử dụng.</li>
<li>- Đánh giá các đề xuất tối ưu chi phí.</li>
<li>- Tìm hiểu Reserved Instance và Savings Plans.</li>
<li>- Tổng hợp các biện pháp giảm chi phí vận hành.</li>
</ul>

</td>

<td style="text-align:center;">17/06/2026</td>

<td style="text-align:center;">17/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">4</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu Amazon EBS Data Lifecycle Manager.</li>
<li>- Tạo Lifecycle Policy cho EBS Snapshot.</li>
<li>- Thiết lập lịch Snapshot tự động.</li>
<li>- Kiểm tra Snapshot sau khi được tạo.</li>
<li>- Tìm hiểu VPC Flow Logs.</li>
<li>- Kích hoạt Flow Logs để theo dõi lưu lượng mạng trong VPC.</li>
</ul>

</td>

<td style="text-align:center;">18/06/2026</td>

<td style="text-align:center;">18/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">5</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Cài đặt AWS Toolkit trên Visual Studio Code.</li>
<li>- Kết nối AWS Toolkit với tài khoản AWS.</li>
<li>- Quản lý các dịch vụ AWS ngay trong IDE.</li>
<li>- Triển khai và theo dõi tài nguyên từ Visual Studio Code.</li>
<li>- Kiểm tra thông tin EC2, Lambda và CloudFormation.</li>
<li>- Tổng hợp kết quả thực hành các dịch vụ trong tuần.</li>
</ul>

</td>

<td style="text-align:center;">19/06/2026</td>

<td style="text-align:center;">21/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

</tbody>

</table>

## 🏆 Thành tích đạt được

- Triển khai thành công hạ tầng bằng AWS CloudFormation.
- Thực hành tạo tài nguyên bằng AWS Cloud Development Kit (CDK).
- Hiểu các phương pháp tối ưu chi phí khi sử dụng AWS.
- Thiết lập chính sách tạo Snapshot tự động bằng Amazon EBS Data Lifecycle Manager.
- Kích hoạt và theo dõi lưu lượng mạng bằng VPC Flow Logs.
- Cài đặt và sử dụng AWS Toolkit trên Visual Studio Code để quản lý tài nguyên AWS.

## 💡 Kiến thức rút ra

- Hiểu lợi ích của Infrastructure as Code trong việc triển khai hạ tầng.
- Biết cách sử dụng AWS CloudFormation và AWS CDK để tự động hóa việc tạo tài nguyên.
- Nắm được các phương pháp tối ưu chi phí và quản lý tài nguyên hiệu quả.
- Hiểu vai trò của EBS Snapshot trong việc sao lưu dữ liệu.
- Biết cách sử dụng VPC Flow Logs để phân tích lưu lượng mạng.
- Làm quen với AWS Toolkit giúp quản lý và triển khai tài nguyên AWS trực tiếp từ Visual Studio Code.