
Webstack - Portfolio Project - Pitch

Steps to Build the "South Sudan Job Board" Website
1. Project Overview:
Name: South Sudan Job Board
Solo Project: Philip Ajuong Deng
Description: A job advertisement platform for employers in South Sudan (NGOs, Government, and private sector) to post job openings, where job seekers can view and apply.
Timeframe: 2 weeks
2. Technologies Used:
Frontend: HTML, CSS, JavaScript
Backend: Python (Flask/Django) or Node.js
Database: MySQL/PostgreSQL
Version Control: Git/GitHub
Hosting: Heroku or AWS
APIs: Google Authentication for user login
3. Project Plan with Kanban Workflow
We will use Trello or Kanban for task management:

Day 1–3: Research & Planning
Finalize wireframes.
Create project structure and set up repositories.
Day 4–7: Frontend Development
Build the homepage and job listing page.
Implement search functionality and filters.
Day 8–10: Backend Development
Create API endpoints for job posting and job seeker registration.
Set up user authentication and database schema.
Day 11–12: Integration & Testing
Connect frontend and backend.
Conduct thorough testing (functionality and security).
Day 13–14: Final Review & Presentation Preparation
Refine UI and fix bugs.
Prepare Google Slides presentation and record video pitch.
4. Mock-ups (Homepage Design)
Here’s the first mock-up for the homepage. I'll proceed with the job posting form and admin dashboard next.

5. Files, Directories, and Setup
File Structure:
plaintext
Copy code
south-sudan-job-board/
│
├── frontend/                   # Frontend code (HTML, CSS, JS)
│   ├── index.html              # Homepage
│   ├── job-listing.html        # Job listing page
│   ├── css/
│   │   └── styles.css          # Styling for the website
│   └── js/
│       └── script.js           # JavaScript for interactions
│
├── backend/                    # Backend code (Flask/Django)
│   ├── app.py                  # Main Flask/Django app file
│   ├── models.py               # Database models
│   ├── routes.py               # API routes for job postings
│   └── config.py               # Configuration for DB, Auth, etc.
│
├── database/                   # Database schema files
│   └── schema.sql              # SQL file to create necessary tables
│
├── tests/                      # Testing files
│   ├── test_routes.py          # Backend API tests
│   └── test_frontend.js        # Frontend tests
│
└── .gitignore                  # Git ignore file
