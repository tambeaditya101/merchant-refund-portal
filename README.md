# Merchant Refund Portal

Live Application
Frontend: [https://merchant-refund-portal.vercel.app](https://merchant-refund-portal-six.vercel.app/)

Backend API: [https://merchant-refund-portal-qgmf.onrender.com](https://merchant-refund-portal-six.vercel.app)

## Overview

This repository contains the initial implementation of a Merchant Refund Portal.

The system is designed to allow merchants to authenticate, view transaction history, and raise refund requests on eligible transactions while enforcing backend validation rules.

## Current Status

The application skeleton, deployment pipeline, and backend architecture have been set up.

Implemented so far:

* NestJS backend setup
* MongoDB integration
* Merchant authentication endpoint
* Initial project structure for transactions and refunds
* Frontend React application deployed on Vercel
* Backend deployed on Render
* Repository structured for full-stack development

Core functional modules such as transaction filtering, refund workflows, and timeline tracking are currently being implemented.

## Tech Stack

Backend

* Node.js
* NestJS
* MongoDB

Frontend

* React + TypeScript
* Vite

Deployment

* Vercel (Frontend)
* Render (Backend)

## Repository Structure

```
backend/
frontend/
README.md
```

## Test Credentials

Merchant 1
Email: [merchant1@test.com](mailto:merchant1@test.com)
Password: Test@1234

Merchant 2
Email: [merchant2@test.com](mailto:merchant2@test.com)
Password: Test@1234

## Future Improvements

* Transaction dashboard with pagination and filters
* Refund request workflow
* Transaction status timeline
* Server-side validation rules for refund eligibility
