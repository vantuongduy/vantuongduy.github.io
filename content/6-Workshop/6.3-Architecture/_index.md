---
title: "Architecture"
weight: 3
description: "Architecture"
---



The **Enterprise HelpDesk** system is deployed on AWS using a multi-tier architecture that clearly separates the presentation, security, application processing, data storage, and monitoring layers. This architecture improves scalability, enhances security, increases availability, and simplifies system management and maintenance.

## Architecture Diagram

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/aws.jpg" target="_blank">
        <img src="/images/workshop/aws.jpg"
             alt="Enterprise HelpDesk AWS Architecture"
             style="width:80%; cursor:zoom-in;">
    </a>
    <p><i>Figure 1. Overall architecture of the Enterprise HelpDesk system on AWS.</i></p>
</div>

---

## 1. Users and Access Control

- **Employees** access the system through a web browser to create support tickets, track ticket status, review communication history, and receive issue resolution updates.
- **Support Agents** receive and categorize support requests, update ticket status, communicate with users, and record the complete ticket resolution process.
- **Managers** monitor Service Level Agreements (SLAs), track ticket progress, review reports, and evaluate the overall performance of the support team.
- **Administrators** manage user accounts, roles, departments, categories, permissions, and overall system configuration.
- Each user is granted permissions based on their assigned role to ensure secure and controlled access to system resources.

---

## 2. User Request Flow

- Users access the application securely through HTTPS using a web browser.
- **Amazon CloudFront** provides the public entry point for the application and forwards incoming requests to the backend infrastructure.
- **AWS WAF** inspects incoming requests and blocks suspicious traffic or common web attacks before they reach the application.
- **Application Load Balancer (ALB)** receives validated requests and distributes them across healthy Amazon EC2 instances.
- ALB performs **Health Checks** continuously and forwards requests only to instances with a **Healthy** status, ensuring high availability and fault tolerance.

---

## 3. Application Deployment Layer

- The **ASP.NET Core Razor Pages** application is deployed using **AWS Elastic Beanstalk**.
- Elastic Beanstalk manages the application environment, deployment process, application versions, and related AWS resources.
- It automatically provisions and integrates Amazon EC2, Amazon EC2 Auto Scaling, Application Load Balancer, and Target Groups.
- New application versions can be deployed efficiently without manually configuring the underlying infrastructure.

---

## 4. Application Processing Layer

- All business logic is executed on **Amazon EC2** instances.
- EC2 handles user authentication, authorization, and session management.
- The application supports ticket creation, request processing, ticket assignment, status updates, and user comments.
- Every modification is recorded in **TicketHistory** to provide a complete audit trail of ticket activities.
- The system validates SLA compliance, generates ticket statistics, produces management reports, and exports data to Microsoft Excel.
- **Amazon EC2 Auto Scaling** automatically launches additional instances during periods of high traffic to maintain application performance.

---

## 5. Data Storage Layer

- All business data is stored in **Amazon RDS for SQL Server**.
- The database contains user accounts, roles, departments, categories, tickets, comments, processing history, and SLA information.
- Amazon RDS is separated from the application servers to ensure data persistence even when EC2 instances are updated or replaced.
- Database access is restricted to the EC2 Security Group through SQL Server port **1433**.
- Amazon RDS is deployed in a private network and is not directly accessible from the Internet.

---

## 6. Secret Management and Identity Control

- Database credentials are securely stored in **AWS Secrets Manager** instead of being hard-coded into the application.
- Amazon EC2 uses an **IAM Role** to retrieve database secrets securely and establish connections to Amazon RDS.
- IAM also grants permissions for EC2 to interact with AWS Elastic Beanstalk and AWS Systems Manager.
- All permissions follow the **Principle of Least Privilege**, minimizing unnecessary access and eliminating the need for long-term Access Keys within the application.

---

## 7. Network Infrastructure

- The entire infrastructure is deployed inside an **Amazon VPC**.
- The VPC includes subnets, route tables, an Internet Gateway, and Security Groups.
- The **Application Load Balancer** resides in the public subnet to receive Internet traffic.
- **Amazon EC2** instances are deployed within the application layer.
- **Amazon RDS for SQL Server** is located in a private database subnet for enhanced security.
- Security Groups control network communication using the following flow:
  - Users → Application Load Balancer
  - Application Load Balancer → Amazon EC2
  - Amazon EC2 → Amazon RDS

---

## 8. Monitoring and System Administration

- **Amazon CloudWatch** monitors CPU utilization, request volume, response time, HTTP errors, database connections, and application logs.
- **AWS CloudTrail** records administrative activities such as resource creation, IAM Role modifications, and Security Group updates for auditing and compliance purposes.
- **AWS Systems Manager** enables secure administration of Amazon EC2 instances using **Session Manager** and **Run Command** without opening SSH ports or managing SSH keys.
- These monitoring and management services improve operational visibility, simplify troubleshooting, and enhance the overall security and reliability of the system.

---

## Summary

- The multi-tier architecture clearly separates the presentation, security, application, database, and monitoring layers.
- Amazon CloudFront, AWS WAF, and Application Load Balancer provide secure and highly available request routing.
- AWS Elastic Beanstalk and Amazon EC2 manage application deployment and execute all business logic.
- Amazon RDS for SQL Server stores business data securely, while AWS Secrets Manager and IAM protect sensitive credentials and access permissions.
- Amazon CloudWatch, AWS CloudTrail, and AWS Systems Manager provide comprehensive monitoring, auditing, and system administration capabilities.
- Overall, the architecture delivers strong security, scalability, high availability, and operational efficiency, making it well suited for an enterprise-grade help desk application.
