# ApniSec – Issue Management Platform

**ApniSec ** is a full-stack cybersecurity issue management platform designed to securely manage, track, and organize security-related issues such as Cloud Security findings, Red Team assessments, and VAPT reports.

The project is built using modern web technologies with a strong focus on security, scalability, performance, and clean architecture.

---

##  Features

###  User Authentication
- Secure user registration, login, and logout
- JWT-based authentication using **HTTP-only cookies**
- Fully protected API routes

###  Issue Management
- Create, view, and delete security issues
- Each issue is associated with the authenticated user
- Authorization ensures users can only access their own data

### 🗂️ Issue Categories
- Cloud Security
- Red Team Assessment
- VAPT (Vulnerability Assessment & Penetration Testing)

### 📧 Email Notifications
- Email notification is triggered on issue creation
- Integrated using **Resend**
- Configured in testing mode as per Resend policy

###  Modern UI
- Responsive and modern UI built with **Tailwind CSS**
- Gradient-based design inspired by cybersecurity dashboards
- Optimized for both mobile and desktop devices

### ⚡ Performance & SEO
- Server-side rendering using Next.js App Router
- Optimized Lighthouse SEO score (80%+)
- Fast load times and efficient API handling

---

## 🧰 Tech Stack

### Frontend
- Next.js 16 (App Router)
- Tailwind CSS

### Backend
- Next.js API Routes
- JWT Authentication
- HTTP-only Cookies

### Database
- MongoDB
- Mongoose ODM

### Email Service
- Resend

### Deployment
- Vercel

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user
- `POST /api/auth/logout` – Logout user
- `GET /api/auth/me` – Get authenticated user details

### Issues
- `GET /api/issues` – Fetch all issues for the logged-in user
- `POST /api/issues` – Create a new issue
- `DELETE /api/issues/[id]` – Delete an issue by ID

All issue-related endpoints are **protected** and require authentication.

---

## 📩 Email Configuration Note

Email notifications are implemented using **Resend**.

> **Important:**  
> Resend is currently used in **testing mode**, which restricts email delivery to the registered Resend account email only. This is an expected limitation and not an application bug.

---

## 🛠️ Local Setup

```bash
git clone https://github.com/panwarvipul00/CyberSecurity
cd my-app
npm install
npm run dev

