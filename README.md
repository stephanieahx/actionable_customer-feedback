# ACF
Actionable Customer Feedback (ACF) is based on the idea that every piece of customer feedback is an opportunity and a useful guideline for improving company processes. 
- Sign-up and Login function with encrypted passwords and an authorisation flow. 
- API fetches customer feedback from a Typeform survey (https://chillipadigroup.typeform.com/to/lpNLpXTj).
- Customer feedback can also be manually logged by staff into the app.
- An app which logs customer feedback into actionable items.
- Managers and executives add 'Action Items' to each feedback ticket.
- Managers determine tickets have been adequately acted upon and can mark them as 'Completed'. 
- Managers (i.e. users with admin access) are able to manage admin permissions for all users; and are able to delete users. 

Developed as part of Project #2 under General Assembly Singapore's Software Engineering Immersive Flex course.

# User Stories
- As a Management Executive I want a systematic way to improve my company's processes - especially in the areas which have the highest payoff for customer satisfaction.
- As a department manager, I want to (A) be aware of customer pain points relevant to our department; (B) plan implementation of new processes; (C) crowdsource action steps for improvement from my staff.
- As an executive, I want to (A) solve problems and work on tasks which have direct influence on customer satisfaction and in turn sales; and (B) keep track of the backlog of tasks I need to act on. 

# Deployed on Heroku
https://actionable-customerfeedback.herokuapp.com/

# Database
• MongoDB || mLab (Cloud hosted MongoDB)

# Technologies
• Bcrypt - function to hash passwords
• EJS - HTML templating 
• Express
• Materialize - CSS framework
• Method-override - to use HTTP verbs (e.g. PUT or DELETE) where not supported by the client.
• Node.js
• node-fetch - A light-weight module that brings window.fetch to Node.js

# Unsolved Problems
- Admin status for users is logged as "true" and "false" in the database. I can't figure out how to pass a boolean value to update the users' data. If I didn't use "true" and "false" as strings, my functions to "Remove as admin" and "Add as Admin" would break.

# Stretch Goals & Additional Functions
- Managers can assign feedback tickets to executives.
- A dashboard to display chart of trend in customer satisfaction score. Data will be fetched from the same Typeform API. 

#
