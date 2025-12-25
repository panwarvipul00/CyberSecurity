# ApiSec – Issue Management Platform

ApniSec is a full-stack cybersecurity issue management platform built using
Next.js App Router, MongoDB, JWT authentication, and Tailwind CSS.

## Features
- User Authentication (Register / Login / Logout)
- Secure Issue Management (CRUD)
- Issue Categories: Cloud Security, Red Team, VAPT
- Email Notifications (Resend integration)
- Protected APIs using HTTP-only JWT cookies
- Modern UI with Tailwind CSS & gradients

## Tech Stack
- Frontend: Next.js 16 (App Router), Tailwind CSS
- Backend: Next.js API Routes
- Database: MongoDB (Mongoose)
- Auth: JWT + Cookies
- Email: Resend

## Email Note
Resend is used in testing mode. Email delivery is restricted to the
registered account email as per Resend policy.

## Setup
```bash
npm install
npm run dev
