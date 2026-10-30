# Zoro AI Trainer — Project State & Development Blueprint

## 1. Project Identity

**Project name:** Zoro AI Trainer

**Purpose:** A personal AI fitness-training web application that combines an AI trainer, personalized workout planning, workout scheduling, exercise guidance, progress tracking, and automated email reminders.

**Core design direction:**
- Premium dark-mode application
- Predominantly black / charcoal background
- Controlled green accents inspired by Zoro's visual theme
- High contrast white/gray typography
- Subtle green glow, gradients, borders, and shadows
- Modern cards and panels
- Smooth, purposeful animations
- App-like experience rather than a basic HTML website
- Avoid excessive colors or a childish/game-like appearance

> Note: The design can use green/black as a visual inspiration without copying protected character artwork, logos, or other copyrighted assets.

---

## 2. Core Technology Stack

| Layer | Technology |
|---|---|
| Frontend + application framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| Row-level security | Supabase RLS |
| AI | OpenAI API |
| Email | Resend |
| Scheduled reminders | Supabase Cron / scheduled backend job |
| File/media storage | Supabase Storage or properly licensed external media |
| Deployment | Vercel or another suitable host |
| Version control | Git + GitHub |

### Why this stack

Next.js gives the application a structured React-based full-stack framework.

TypeScript provides stronger typing for users, plans, workouts, dates, progress, and AI-generated structured data.

Tailwind CSS lets us build the visual system quickly and consistently.

Supabase provides authentication, PostgreSQL, Row Level Security, storage, and backend capabilities without building every service from scratch.

OpenAI provides the conversational AI trainer and plan-generation intelligence.

Resend handles transactional/reminder emails.

Scheduled backend jobs check each user's schedule and send appropriate reminders.

---

## 3. High-Level Product Flow

```text
USER
  ↓
LOGIN / SIGNUP
  ↓
EMAIL VERIFICATION
  ↓
AI TRAINER CHAT
  ↓
ADAPTIVE FITNESS INTERVIEW
  ↓
USER PROFILE + FITNESS PROFILE
  ↓
AI ANALYSIS
  ↓
PERSONALIZED TRAINING ROADMAP
  ↓
PLAN REVIEW
  ↓
ACCEPT / MODIFY
  ↓
WORKOUT SCHEDULER
  ↓
TODAY'S WORKOUT
  ↓
EXERCISE DETAILS + MEDIA
  ↓
COMPLETE EXERCISES
  ↓
WORKOUT COMPLETION STORED
  ↓
PROGRESS UPDATED
  ↓
NEXT SESSION UNLOCKED
  ↓
SCHEDULED EMAIL REMINDERS
```

---

## 4. Main Application Routes

```text
/
├── login
├── signup
├── verify-email
│
└── app
    ├── dashboard
    ├── chat
    ├── plan
    ├── today
    ├── calendar
    ├── progress
    ├── changes
    ├── settings
    └── help
```

---

## 5. Login and Authentication

### Login screen

The first page should be a polished dark interface.

Suggested structure:

```text
ZORO AI TRAINER

Welcome Back

Email
[________________________]

Password
[________________________]

[ LOG IN ]

Forgot password?

Don't have an account?
Create account
```

### Authentication requirements

- Email + password authentication
- Email verification
- Secure session handling
- Logout
- Password reset
- Protected application routes
- Users can only access their own data

### Security rule

Never place private API keys such as the OpenAI or Resend key in browser/client-side code.

---

## 6. AI Trainer

The AI trainer is the main conversational interface.

### Initial chat behavior

The AI should not immediately generate a workout.

It should first understand the user through a structured but conversational interview.

### Adaptive interview model

The AI asks essential questions first, then asks relevant follow-up questions based on previous answers.

The user should feel:

```text
AI asks
   ↓
User answers
   ↓
AI understands
   ↓
AI asks next relevant question
   ↓
Profile becomes more complete
   ↓
AI summarizes profile
   ↓
User confirms
   ↓
Plan generation
```

Do not force every user through a rigid list of questions when some questions are irrelevant.

---

# 7. Fitness Interview — Question Bank

The goal is to gather enough useful information for personalization while avoiding unsafe or medically inappropriate recommendations.

## A. Basic profile

1. What should I call you?
2. What age group are you in?
3. What is your height?
4. What is your current weight, if you are comfortable sharing it?
5. How active are you during a normal day?
6. What is your main reason for starting training?

## B. Goals

7. What is your primary fitness goal?
8. What secondary goals do you have?
9. What would you most like to improve: strength, endurance, mobility, general fitness, consistency, energy, or another area?
10. When would you like to review your progress?
11. How many days per week can you realistically train?
12. How much time can you realistically spend per session?

The app should avoid promising a specific body transformation or guaranteed weight change by a deadline.

## C. Daily routine and occupation

13. Are you a student, employed, self-employed, or something else?
14. What type of work or study do you do?
15. Is your day mostly sitting, standing, walking, or physically demanding?
16. What time do you normally wake up?
17. What time do you normally sleep?
18. How many hours do you normally sleep?
19. When are you busiest during the day?
20. What time of day is most realistic for training?
21. Does your schedule change frequently?
22. Do you travel frequently?
23. Are there specific days when training is difficult?

## D. Previous training experience

24. Are you new to exercise?
25. Have you trained before?
26. How long did you train previously?
27. Are you currently training?
28. What types of training have you done?
29. Which exercises are you comfortable with?
30. Which exercises are unfamiliar?
31. Which exercises do you enjoy?
32. Which exercises do you dislike?
33. Have you ever followed a structured training program?
34. What made you stop previous programs?

## E. Gym and equipment

35. Do you have regular access to a gym?
36. How many days can you physically reach the gym?
37. What equipment is available?
38. Dumbbells?
39. Barbells?
40. Benches?
41. Cable machines?
42. Squat rack?
43. Resistance machines?
44. Pull-up equipment?
45. Cardio machines?
46. Do you need home-workout alternatives?

## F. Cardio

47. Do you currently perform cardio?
48. Which type?
49. How frequently?
50. How long can you comfortably perform it?
51. Which cardio types do you prefer?
52. Do you find cardio difficult?
53. Should cardio be included in the plan?

## G. Strength and exercise familiarity

54. Are you comfortable with free weights?
55. Do you know how to use common gym machines?
56. Are you familiar with basic movement patterns?
57. Are there movements you do not feel confident performing?
58. Would you like an explanation/video for every unfamiliar exercise?
59. Should the app record your weight and repetitions for each set?

## H. Recovery and lifestyle

60. How many hours do you normally sleep?
61. How do you usually feel after training?
62. How many rest days do you prefer?
63. How stressful is a normal week?
64. Do you often feel unusually tired?
65. Do you have enough time for recovery?
66. Are you willing to adjust your sleep/routine to support training?

## I. Health and safety screening

67. Do you currently have an injury or significant pain that affects exercise?
68. Do you have a medical condition that affects physical activity?
69. Has a healthcare professional told you to avoid specific activities?
70. Are there movements you have been advised not to perform?
71. Are there any other health or safety considerations the trainer should know?

For medical conditions, injuries, persistent pain, or medication-related exercise concerns, the app should encourage consultation with a qualified healthcare professional rather than acting as a medical provider.

## J. Nutrition and eating habits

72. What does a typical day of eating look like?
73. How many meals do you usually have?
74. What foods do you commonly eat?
75. How often do you eat outside?
76. How much water do you normally drink?
77. Do you have food allergies or intolerances?
78. Are there foods you avoid?
79. Are there cultural, family, or dietary preferences the plan should respect?
80. How much time do you have for cooking?
81. Would you prefer simple meal ideas or more structured guidance?

The nutrition module should emphasize balanced eating and general guidance, not extreme restriction or unsafe dieting.

## K. Training preferences

82. Do you prefer machines or free weights?
83. Do you prefer shorter or longer sessions?
84. Do you prefer repeating a routine or having more variety?
85. Morning or evening workouts?
86. Cardio on separate days or after strength training?
87. Would you like visual demonstrations for each exercise?
88. Would you like the AI to explain why each exercise is included?

## L. Motivation and adherence

89. What usually makes you skip workouts?
90. What motivates you to keep going?
91. Do you want workout reminders?
92. What reminder time should be used?
93. Do you want email reminders?
94. What should happen if you miss a scheduled workout?
95. Should the app automatically propose a reschedule or ask for confirmation?
96. Do you want streaks and consistency statistics?

---

# 8. Profile Confirmation Before Plan Generation

After the interview, the AI should show a summary.

Example:

```text
YOUR TRAINING PROFILE

Training availability
4 days / week

Preferred training time
6:00 AM

Session duration
60 minutes

Experience level
Beginner

Gym access
Full gym

Primary goal
Strength + general fitness

Cardio
2 sessions / week

Typical sleep
7–8 hours

Plan review timeframe
23 months

[ EDIT ANSWERS ]

[ CONFIRM PROFILE ]
```

The user should confirm or edit the information before plan generation.

---

# 9. Personalized Plan Architecture

Do not generate an enormous 23-month list of individual days in one AI response.

Instead:

```text
23-MONTH ROADMAP
      ↓
TRAINING PHASES
      ↓
MONTH
      ↓
WEEK
      ↓
DAY
      ↓
EXERCISE
```

Example:

```text
PHASE 1 — FOUNDATION

Month 1
 ├── Week 1
 │    ├── Day 1
 │    ├── Day 2
 │    └── Recovery
 ├── Week 2
 ├── Week 3
 └── Week 4

PHASE 2 — PROGRESSIVE TRAINING
...
```

The AI creates the recommendation and structure.

The application/database stores the actual schedule.

---

# 10. Plan Review

After generation:

```text
YOUR PERSONALIZED PLAN

Goal
Training schedule
Workout frequency
Workout structure
Cardio
Recovery
Exercise selection
Nutrition guidance
Progress tracking

[ ACCEPT PLAN ]

[ MODIFY PLAN ]
```

Then:

```text
Do you approve this plan?

[ YES — START PLAN ]

[ CHANGE SOMETHING ]
```

The accepted version becomes the active plan.

Plan modifications should create a new plan version rather than silently overwriting the user's history.

---

# 11. Workout Scheduler

The scheduler should show:

```text
SEPTEMBER 2026

MON TUE WED THU FRI SAT SUN

21  22  23  24  25  26  27
            ↑
          TODAY
```

Example:

```text
DAY 1
Upper Body

□ Dumbbell Curl
□ Hammer Curl
□ Shoulder Press
□ Lat Pulldown
```

---

# 12. Today's Workout

Clicking today's session opens:

```text
DAY 1 — UPPER BODY

Workout duration
~55 minutes

Exercise 1
Dumbbell Curl

Sets: 3
Reps: 10
Rest: 60 seconds

[ OPEN EXERCISE ]

[ COMPLETE ]
```

Each exercise should support:

- Sets
- Repetitions
- Duration where relevant
- Rest interval
- Suggested weight where appropriate
- Actual weight entered by user
- Actual reps entered by user
- Exercise sequence
- Instructions
- Media/visual demonstration
- Completion status
- Notes

---

# 13. Exercise Visualization

Each exercise can open an exercise detail view:

```text
DUMBBELL HAMMER CURL

[ VIDEO / ANIMATION / DEMONSTRATION ]

Sets: 3
Reps: 12
Rest: 60 sec

Instructions
1. ...
2. ...
3. ...

[ MARK COMPLETE ]
```

Use only media that we are legally allowed to use.

We should not scrape random copyrighted exercise videos or GIFs.

---

# 14. Workout Completion

Exercise state:

```text
NOT_STARTED
   ↓
IN_PROGRESS
   ↓
COMPLETED
```

Workout-day state can be:

```text
NOT_STARTED
IN_PROGRESS
COMPLETED
SKIPPED
REST_DAY
```

The application can use sequential progression such as:

```text
Day 1 completed
      ↓
Day 2 unlocked
      ↓
Day 2 completed
      ↓
Day 3 unlocked
```

But scheduled rest/recovery days remain valid calendar days and are not treated as missed workouts.

---

# 15. Progress Page

The progress dashboard can show:

```text
WORKOUT CONSISTENCY
██████████████░░ 82%

Sessions completed
42 / 50

Current streak
6 sessions

Completed training days
42

Missed/skipped
8
```

Additional metrics:

- Weekly completion
- Monthly completion
- Workout history
- Exercise history
- Personal records
- Strength progression
- Consistency trends

Calorie-burn values must be treated as estimates, not exact measurements.

---

# 16. Changes / Progress Journal

The changes page should focus on user-entered progress observations.

Example:

```text
WEEK 4

Training notes
"Exercises feel easier."

Strength observations
"Improved performance on several exercises."

Recovery notes
"Recovery feels better."
```

Potential fields:

- Strength observations
- Endurance observations
- Mobility observations
- Energy/recovery notes
- Training consistency
- Optional measurements
- Optional progress photos where appropriate

Avoid appearance scoring or body comparisons.

---

# 17. Calendar

The calendar shows:

- Workout days
- Cardio days
- Recovery days
- Rest days
- Completed sessions
- Missed sessions
- Current day
- Future scheduled sessions

Clicking a date opens the relevant plan.

---

# 18. Settings

Settings should include:

```text
Profile
Email
Timezone
Preferred workout time
Training days
Gym availability
Equipment
Goals
Reminder settings
Training preferences
AI preferences

[ MODIFY PERSONALIZED PLAN ]
```

Important plan-related changes should trigger a plan review/regeneration.

---

# 19. Help Page

Include:

```text
How does Zoro AI Trainer work?

How is my plan created?

How do I complete a workout?

How do I use exercise demonstrations?

How does the calendar work?

Why is the next workout locked?

How do reminders work?

How do I modify my plan?

How is my data protected?
```

---

# 20. Email Reminder System

User profile stores:

```text
timezone = Asia/Kolkata
preferred_workout_time = 06:00
```

The system does not simply send an email to everyone every day.

Instead:

```text
SCHEDULED JOB
      ↓
CHECK USER
      ↓
WORKOUT SCHEDULED TODAY?
      ↓
YES
      ↓
ALREADY COMPLETED?
   ↙           ↘
 YES           NO
  ↓             ↓
NO EMAIL     SEND EMAIL
```

Example email:

```text
Subject:
Your workout is ready for today

Good morning!

Today's scheduled workout is ready.

Day 18
Upper Body

[ START TODAY'S WORKOUT ]

Have a great session.
```

Timezone should be stored and interpreted properly rather than hard-coding one UTC offset.

---

# 21. Database Design

Core tables:

```text
users
profiles
fitness_profiles
chat_messages
training_plans
plan_phases
workout_days
exercise_library
workout_exercises
workout_logs
progress_logs
reminders
user_settings
```

### Relationships

```text
USER
 │
 ├── PROFILE
 ├── FITNESS PROFILE
 ├── CHAT MESSAGES
 ├── TRAINING PLAN
 │       │
 │       └── PLAN PHASES
 │              │
 │              └── WORKOUT DAYS
 │                     │
 │                     └── WORKOUT EXERCISES
 │
 ├── WORKOUT LOGS
 ├── PROGRESS LOGS
 └── SETTINGS
```

---

# 22. Important Database Structures

## profiles

```text
id
user_id
display_name
age_group
timezone
preferred_workout_time
created_at
updated_at
```

## fitness_profiles

```text
id
user_id
fitness_goal
secondary_goals
experience_level
height
weight
available_days
session_duration
gym_access
equipment
cardio_preferences
daily_activity
sleep_information
nutrition_preferences
training_preferences
restrictions
target_review_date
created_at
updated_at
```

## training_plans

```text
id
user_id
status
start_date
target_review_date
plan_version
plan_summary
created_at
updated_at
```

## plan_phases

```text
id
plan_id
phase_number
name
description
start_date
end_date
```

## workout_days

```text
id
plan_phase_id
date
day_number
session_type
title
status
```

## exercise_library

```text
id
name
muscle_group
equipment
difficulty
instructions
media_url
```

## workout_exercises

```text
id
workout_day_id
exercise_id
sequence
sets
reps
duration
rest_seconds
suggested_weight
```

## workout_logs

```text
id
user_id
workout_day_id
started_at
completed_at
duration
notes
status
```

## progress_logs

```text
id
user_id
date
category
value
unit
notes
```

## reminders

```text
id
user_id
reminder_type
scheduled_time
timezone
sent_at
status
```

---

# 23. Exercise Library Strategy

The application should have a reusable exercise library.

Example:

```text
Barbell Squat
Dumbbell Curl
Hammer Curl
Push Up
Lat Pulldown
Shoulder Press
...
```

The AI should primarily choose exercises from this validated library.

Architecture:

```text
USER PROFILE
      ↓
AI RECOMMENDATION
      ↓
APPLICATION VALIDATES EXERCISES
      ↓
EXERCISE LIBRARY
      ↓
WORKOUT GENERATED
      ↓
DATABASE
```

This is preferable to letting the AI invent every exercise record from scratch.

---

# 24. AI Architecture

```text
CHAT UI
   ↓
SERVER/API
   ↓
OPENAI
   ↓
STRUCTURED AI RESPONSE
   ↓
APPLICATION VALIDATION
   ↓
DATABASE
```

AI should provide structured output for plan generation.

Conceptually:

```json
{
  "goal": "strength and general fitness",
  "training_days_per_week": 4,
  "cardio_days": 2,
  "phases": []
}
```

The exact schema will be implemented and validated in the plan-generation module.

Key rule:

> AI recommends. The application controls system state.

The AI should not independently decide whether Day 2 is unlocked or whether an email was sent.

---

# 25. Frontend Folder Structure

Recommended initial structure:

```text
zoro-ai-trainer/
│
├── app/
│   ├── login/
│   ├── signup/
│   ├── verify-email/
│   ├── dashboard/
│   ├── chat/
│   ├── plan/
│   ├── today/
│   ├── calendar/
│   ├── progress/
│   ├── changes/
│   ├── settings/
│   └── help/
│
├── components/
│   ├── ui/
│   ├── chat/
│   ├── workout/
│   ├── calendar/
│   ├── progress/
│   └── navigation/
│
├── lib/
│   ├── supabase/
│   ├── ai/
│   ├── email/
│   ├── workout/
│   └── utils/
│
├── types/
│
├── data/
│   └── exercises/
│
├── supabase/
│   ├── migrations/
│   └── functions/
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

---

# 26. UI Design System

## Color direction

Primary background:
- Near black
- Deep charcoal

Secondary surfaces:
- Dark charcoal / dark gray

Accent:
- Green

Text:
- White for primary
- Gray for secondary

Use green for:
- Active navigation
- Buttons
- Progress indicators
- Completion states
- Important highlights
- Small glow effects

Do not make every component neon green.

## Components

Build reusable:

```text
Button
Card
Input
Modal
Badge
ProgressBar
Sidebar
TopBar
ChatBubble
WorkoutCard
ExerciseCard
CalendarCell
StatCard
```

## Interaction

Use subtle effects:

- Hover states
- Active states
- Smooth transitions
- Expand/collapse exercise details
- Progress animations
- Loading states
- AI typing indicator
- Success completion animation

---

# 27. Development Roadmap

## MODULE 1 — Foundation + UI

Build:

```text
Next.js
TypeScript
Tailwind CSS
Global styles
Dark theme
Green accent system
Fonts
Layout
Sidebar
Top bar
Reusable UI components
Login UI
Signup UI
```

Checkpoint:
- Application runs
- Pages navigate
- Dark Zoro design is established

---

## MODULE 2 — Supabase

Build:

```text
Supabase project
Authentication
PostgreSQL
RLS
Initial migrations
Profiles
Fitness profile
```

Checkpoint:
- Database connected
- Authentication backend ready
- Security policies applied

---

## MODULE 3 — Authentication

Build:

```text
Signup
Login
Email verification
Password reset
Logout
Protected routes
Session handling
```

Checkpoint:
- User can securely sign in
- Authenticated user reaches the app

---

## MODULE 4 — AI Trainer

Build:

```text
Chat interface
Message history
OpenAI server integration
AI system instructions
Loading states
Error states
Conversation persistence
```

Checkpoint:
- User can chat with the AI trainer

---

## MODULE 5 — Adaptive Fitness Interview

Build:

```text
Question flow
Profile extraction
Follow-up questions
Question completion detection
Profile summary
Edit answers
Confirmation
Database storage
```

Checkpoint:
- AI can collect and confirm a complete fitness profile

---

## MODULE 6 — Personalized Plan Engine

Build:

```text
Plan generation
Training phases
Weekly structure
Workout-day creation
Exercise-library matching
Plan versioning
Plan review
Accept
Modify
```

Checkpoint:
- User accepts a real stored training plan

---

## MODULE 7 — Workout System

Build:

```text
Today's workout
Exercise cards
Sets/reps/rest
Weight tracking
Exercise details
Media
Exercise completion
Workout completion
Sequential unlock
```

Checkpoint:
- User can complete a workout and the database records it

---

## MODULE 8 — Calendar + Progress

Build:

```text
Calendar
Workout history
Completion %
Streaks
Exercise history
Progress dashboard
Changes/journal
```

Checkpoint:
- User can see historical and current progress

---

## MODULE 9 — Settings + Help

Build:

```text
Profile editing
Training preferences
Reminder settings
Plan modification
Help center
```

Checkpoint:
- User can manage application settings

---

## MODULE 10 — Email Automation

Build:

```text
Timezone handling
Scheduled job
Today's workout lookup
Completion check
Reminder generation
Resend integration
6 AM reminder
Missed-workout logic
```

Checkpoint:
- Correct users receive correct reminder emails

---

## MODULE 11 — Testing + Deployment

Test:

```text
Authentication
Database security
AI failures
Empty responses
Duplicate submissions
Date/time issues
Timezone
Workout unlocking
Email reminders
Mobile layout
Desktop layout
Error handling
```

Then deploy.

---

# 28. Token / Context Efficiency System

Because a long coding project can eventually become difficult to continue in one conversation, every completed module should produce a checkpoint.

Use this exact format:

```text
# ZORO AI TRAINER — PROJECT CHECKPOINT

Current module:
Module X

Completed:
- ...
- ...
- ...

Files created:
- ...
- ...

Files modified:
- ...
- ...

Database changes:
- ...
- ...

Environment variables required:
- ...
- ...

Current working features:
- ...
- ...

Known issues:
- ...
- ...

Next module:
Module X+1

Next exact task:
...

Important decisions:
- ...
- ...
```

When continuing in another chat, provide:
1. `Zoro_PROJECT_STATE.md`
2. The latest checkpoint
3. Any current error message
4. The relevant files if needed

This prevents the new conversation from guessing the project's current state.

---

# 29. Git Strategy

Use Git from the beginning.

Recommended milestone commits:

```text
module-01-foundation
module-02-supabase
module-03-authentication
module-04-ai-chat
module-05-fitness-interview
module-06-plan-engine
module-07-workout-system
module-08-progress-calendar
module-09-settings-help
module-10-email-reminders
module-11-deployment
```

This also lets us roll back a broken module instead of rebuilding everything.

---

# 30. First MVP Target

The first usable version should achieve:

```text
LOGIN
   ↓
AI INTERVIEW
   ↓
PERSONALIZED PLAN
   ↓
USER ACCEPTS
   ↓
TODAY'S WORKOUT
   ↓
COMPLETE WORKOUT
   ↓
PROGRESS UPDATED
```

Then email reminders and advanced features can be layered on top.

---

# 31. Architecture Principle

The whole system follows this separation:

```text
                    ZORO AI TRAINER
                           │
              ┌────────────┼────────────┐
              ↓            ↓            ↓
             AI         DATABASE        UI
```

### AI
Understands the user's answers and generates recommendations.

### Database
Stores the authoritative state.

### UI
Displays the state and lets the user interact with it.

The AI is not allowed to become the source of truth for application state.

---

# 32. Project Continuity Rule

Whenever a module is completed:
1. Update this file or generate an updated project-state file.
2. Record all changed files.
3. Record all database migrations.
4. Record new environment variables.
5. Record known issues.
6. State exactly which module comes next.
7. Use Git commit milestones.

This is the official source of truth for Zoro AI Trainer.

---

# 33. Immediate Next Task

Start with:

**MODULE 1 — FOUNDATION + PREMIUM DARK ZORO UI**

First implementation tasks:

```text
1. Create the Next.js project
2. Configure TypeScript
3. Configure Tailwind CSS
4. Create global dark theme
5. Define black/charcoal + green design tokens
6. Create application layout
7. Create navigation/sidebar
8. Create reusable UI components
9. Create login screen
10. Create signup screen
11. Add responsive desktop/mobile behavior
```

Do not implement AI, database, email, or workout logic in Module 1.

The objective is to establish a clean visual and structural foundation first.
