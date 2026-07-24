---
title: "Kiến trúc"
weight: 3
description: "Kiến trúc"
---



Hệ thống **Enterprise HelpDesk** được triển khai trên nền tảng AWS theo kiến trúc nhiều lớp nhằm tách biệt rõ ràng các thành phần truy cập, bảo mật, xử lý ứng dụng, lưu trữ dữ liệu và giám sát hệ thống. Mô hình này giúp hệ thống dễ dàng mở rộng, tăng tính sẵn sàng, nâng cao khả năng bảo mật và thuận tiện trong quá trình quản trị, vận hành.

## Hình ảnh kiến trúc

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/aws.jpg" target="_blank">
        <img src="/images/workshop/aws.jpg"
             alt="AWS Architecture"
             style="width:80%; cursor:zoom-in;">
    </a>
    <p><i>Hình 1. Kiến trúc tổng thể của hệ thống Enterprise HelpDesk trên AWS.</i></p>
</div>

---

## 1. Người dùng và phân quyền

- **Employee** truy cập hệ thống thông qua trình duyệt web để tạo ticket hỗ trợ, theo dõi trạng thái xử lý, xem lịch sử trao đổi và nhận kết quả giải quyết yêu cầu.
- **Support Agent** tiếp nhận ticket, phân loại yêu cầu, cập nhật trạng thái xử lý, phản hồi người dùng và ghi nhận toàn bộ lịch sử làm việc.
- **Manager** theo dõi SLA, giám sát tiến độ xử lý ticket, xem báo cáo thống kê và đánh giá hiệu quả hoạt động của bộ phận hỗ trợ.
- **Administrator** quản lý tài khoản, vai trò, phòng ban, danh mục, quyền truy cập và các thiết lập quản trị của toàn bộ hệ thống.
- Mỗi người dùng được cấp quyền theo đúng vai trò nhằm đảm bảo tính bảo mật và chỉ được phép truy cập các chức năng cần thiết.

---

## 2. Luồng truy cập của người dùng

- Người dùng truy cập hệ thống bằng giao thức HTTPS thông qua trình duyệt web.
- **Amazon CloudFront** cung cấp điểm truy cập công khai, đồng thời chuyển tiếp request đến hạ tầng phía sau.
- **AWS WAF** kiểm tra các request nhằm phát hiện và ngăn chặn các truy cập bất thường hoặc có dấu hiệu tấn công trước khi đến ứng dụng.
- **Application Load Balancer (ALB)** tiếp nhận request và phân phối lưu lượng đến các Amazon EC2 instance đang hoạt động.
- ALB sử dụng **Health Check** để chỉ chuyển request đến những EC2 có trạng thái **Healthy**, giúp đảm bảo tính sẵn sàng của hệ thống.

---

## 3. Lớp triển khai ứng dụng

- Ứng dụng **ASP.NET Core Razor Pages** được triển khai bằng **AWS Elastic Beanstalk**.
- Elastic Beanstalk quản lý toàn bộ môi trường triển khai, phiên bản ứng dụng và các tài nguyên AWS liên quan.
- Dịch vụ này tự động phối hợp với Amazon EC2, Amazon EC2 Auto Scaling, Application Load Balancer và Target Group để vận hành ứng dụng.
- Việc triển khai và cập nhật phiên bản mới được thực hiện nhanh chóng mà không cần cấu hình thủ công toàn bộ hạ tầng.

---

## 4. Lớp xử lý nghiệp vụ

- Các chức năng nghiệp vụ được thực hiện trên **Amazon EC2**.
- EC2 xử lý đăng nhập, xác thực người dùng và phân quyền truy cập.
- Hệ thống hỗ trợ tạo ticket, tiếp nhận yêu cầu, cập nhật trạng thái, phân công xử lý và trao đổi thông qua bình luận.
- Mọi thay đổi đều được lưu vào **TicketHistory** để theo dõi lịch sử xử lý.
- Hệ thống kiểm tra SLA, thống kê số lượng ticket, tổng hợp dữ liệu và hỗ trợ xuất báo cáo Excel.
- Khi lưu lượng truy cập tăng, Amazon EC2 Auto Scaling có thể tự động mở rộng số lượng instance để đáp ứng nhu cầu sử dụng.

---

## 5. Lớp lưu trữ dữ liệu

- Toàn bộ dữ liệu được lưu trữ trong **Amazon RDS for SQL Server**.
- Cơ sở dữ liệu lưu thông tin tài khoản, vai trò, phòng ban, danh mục, ticket, bình luận, lịch sử xử lý và dữ liệu SLA.
- Amazon RDS được tách biệt khỏi EC2 nhằm đảm bảo dữ liệu không bị ảnh hưởng khi máy chủ ứng dụng được cập nhật hoặc thay thế.
- Chỉ Security Group của EC2 mới được phép kết nối đến RDS thông qua cổng **1433**.
- Cơ sở dữ liệu không được phép truy cập trực tiếp từ Internet nhằm tăng cường bảo mật.

---

## 6. Quản lý thông tin bí mật và quyền truy cập

- Thông tin đăng nhập cơ sở dữ liệu được lưu trong **AWS Secrets Manager** thay vì ghi trực tiếp trong mã nguồn.
- Amazon EC2 sử dụng **IAM Role** để đọc Secret và thiết lập kết nối đến Amazon RDS.
- IAM cũng cấp quyền cho EC2 làm việc với Elastic Beanstalk và AWS Systems Manager.
- Toàn bộ quyền được cấp theo nguyên tắc **Principle of Least Privilege**, hạn chế tối đa các quyền không cần thiết và không sử dụng Access Key cố định trong ứng dụng.

---

## 7. Hạ tầng mạng

- Toàn bộ hệ thống được triển khai trong **Amazon VPC**.
- VPC bao gồm các thành phần như Subnet, Route Table, Internet Gateway và Security Group.
- Application Load Balancer được đặt tại lớp mạng công khai để tiếp nhận request từ Internet.
- Amazon EC2 được triển khai trong lớp ứng dụng để xử lý nghiệp vụ.
- Amazon RDS được đặt trong lớp cơ sở dữ liệu riêng tư nhằm đảm bảo an toàn cho dữ liệu.
- Security Group kiểm soát luồng kết nối theo chuỗi:
  - Người dùng → Application Load Balancer
  - Application Load Balancer → Amazon EC2
  - Amazon EC2 → Amazon RDS

---

## 8. Giám sát và quản trị hệ thống

- **Amazon CloudWatch** giám sát CPU, số lượng request, thời gian phản hồi, lỗi HTTP, kết nối cơ sở dữ liệu và log của ứng dụng.
- **AWS CloudTrail** ghi lại toàn bộ hoạt động quản trị như tạo tài nguyên, thay đổi IAM Role hoặc cập nhật Security Group để phục vụ kiểm tra và kiểm toán.
- **AWS Systems Manager** hỗ trợ quản trị Amazon EC2 thông qua Session Manager và Run Command mà không cần mở cổng SSH hoặc sử dụng SSH Key.
- Các dịch vụ giám sát và quản trị giúp hệ thống hoạt động ổn định, tăng khả năng phát hiện sự cố và hỗ trợ vận hành an toàn trong môi trường doanh nghiệp.

---

## Tổng kết

- Kiến trúc nhiều lớp giúp phân tách rõ ràng giữa tầng truy cập, tầng bảo mật, tầng ứng dụng, tầng dữ liệu và tầng giám sát.
- Amazon CloudFront, AWS WAF và Application Load Balancer đảm nhiệm việc tiếp nhận và bảo vệ lưu lượng truy cập.
- AWS Elastic Beanstalk và Amazon EC2 chịu trách nhiệm triển khai và xử lý toàn bộ nghiệp vụ của hệ thống.
- Amazon RDS for SQL Server lưu trữ dữ liệu tập trung, trong khi AWS Secrets Manager và IAM bảo vệ thông tin nhạy cảm cũng như quyền truy cập.
- Amazon CloudWatch, AWS CloudTrail và AWS Systems Manager hỗ trợ giám sát, kiểm toán và quản trị hệ thống, giúp Enterprise HelpDesk đáp ứng tốt các yêu cầu về bảo mật, khả năng mở rộng và tính sẵn sàng trong môi trường doanh nghiệp.
