---
title: "Tuần 5"
weight: 5
description: "VM Import/Export, AWS DMS, AWS SCT, AWS Lambda và Elastic Disaster Recovery"
---

## 🎯 Mục tiêu tuần 5

- Tìm hiểu quy trình di chuyển máy chủ lên AWS bằng VM Import/Export.
- Thực hành di chuyển cơ sở dữ liệu bằng AWS Database Migration Service (DMS).
- Làm quen với AWS Schema Conversion Tool (SCT).
- Triển khai hàm xử lý sự kiện bằng AWS Lambda.
- Tìm hiểu giải pháp sao lưu và khôi phục thảm họa bằng AWS Elastic Disaster Recovery.

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
<li>- Tìm hiểu dịch vụ VM Import/Export trên AWS.</li>
<li>- Nghiên cứu quy trình chuyển đổi máy ảo từ môi trường On-premises lên AWS.</li>
<li>- Chuẩn bị tệp máy ảo phục vụ quá trình Import.</li>
<li>- Tìm hiểu các định dạng máy ảo được AWS hỗ trợ.</li>
<li>- Theo dõi tiến trình Import và Export máy ảo.</li>
<li>- Đánh giá các yêu cầu trước khi thực hiện di chuyển hệ thống.</li>
</ul>

</td>

<td style="text-align:center;">01/06/2026</td>

<td style="text-align:center;">01/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">2</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Truy cập dịch vụ AWS Database Migration Service (DMS).</li>
<li>- Tạo Replication Instance.</li>
<li>- Cấu hình Source Endpoint và Target Endpoint.</li>
<li>- Thiết lập Migration Task.</li>
<li>- Theo dõi tiến trình đồng bộ dữ liệu.</li>
<li>- Kiểm tra dữ liệu sau khi quá trình Migration hoàn tất.</li>
</ul>

</td>

<td style="text-align:center;">02/06/2026</td>

<td style="text-align:center;">02/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">3</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Cài đặt AWS Schema Conversion Tool (SCT).</li>
<li>- Kết nối đến cơ sở dữ liệu nguồn.</li>
<li>- Phân tích cấu trúc cơ sở dữ liệu.</li>
<li>- Chuyển đổi Schema sang hệ quản trị cơ sở dữ liệu đích.</li>
<li>- Kiểm tra các đối tượng chưa được chuyển đổi.</li>
<li>- Đánh giá kết quả chuyển đổi Schema.</li>
</ul>

</td>

<td style="text-align:center;">03/06/2026</td>

<td style="text-align:center;">03/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">4</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu mô hình Serverless trên AWS.</li>
<li>- Khởi tạo AWS Lambda Function.</li>
<li>- Cấu hình Runtime phù hợp.</li>
<li>- Viết và triển khai mã nguồn Lambda.</li>
<li>- Thực hiện Test Event để kiểm tra kết quả.</li>
<li>- Theo dõi Log bằng Amazon CloudWatch.</li>
</ul>

</td>

<td style="text-align:center;">04/06/2026</td>

<td style="text-align:center;">04/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

<tr>

<td style="text-align:center;">5</td>

<td>

<ul style="list-style-type:none;padding-left:0;margin:0;">
<li>- Tìm hiểu dịch vụ AWS Elastic Disaster Recovery.</li>
<li>- Nghiên cứu quy trình sao lưu và phục hồi hệ thống.</li>
<li>- Tìm hiểu cơ chế Replication dữ liệu.</li>
<li>- Thực hành tạo Recovery Plan.</li>
<li>- Kiểm tra quy trình khôi phục dữ liệu.</li>
<li>- Đánh giá khả năng đảm bảo tính sẵn sàng của hệ thống.</li>
</ul>

</td>

<td style="text-align:center;">05/06/2026</td>

<td style="text-align:center;">07/06/2026</td>

<td>
<a href="https://cloudjourney.awsstudygroup.com/" target="_blank" rel="noopener noreferrer">https://cloudjourney.awsstudygroup.com/</a>
</td>

</tr>

</tbody>

</table>

## 🏆 Thành tích đạt được

- Hiểu quy trình di chuyển máy ảo lên AWS bằng VM Import/Export.
- Cấu hình thành công AWS Database Migration Service để đồng bộ dữ liệu.
- Thực hiện chuyển đổi Schema bằng AWS Schema Conversion Tool.
- Triển khai và kiểm thử thành công AWS Lambda Function.
- Theo dõi nhật ký hoạt động của Lambda thông qua Amazon CloudWatch.
- Nắm được quy trình sao lưu và khôi phục hệ thống bằng AWS Elastic Disaster Recovery.

## 💡 Kiến thức rút ra

- Hiểu quy trình Migration hệ thống từ môi trường On-premises lên AWS.
- Biết cách sử dụng AWS DMS để di chuyển dữ liệu giữa các hệ quản trị cơ sở dữ liệu.
- Hiểu vai trò của AWS SCT trong quá trình chuyển đổi Schema.
- Hiểu mô hình Serverless và cách triển khai AWS Lambda.
- Nắm được nguyên lý hoạt động của AWS Elastic Disaster Recovery trong việc đảm bảo tính liên tục của hệ thống.