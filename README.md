# README

This is a project that essentially boils down to a to-do list.

The app in this repo is deployed at [random-team-generator](https://working-to-do-list.onrender.com/STATIC/)

## Deployment

To Deploy you must create a new web service with the following values:
  * Language: Node
  * Branch: main
  * Root Directory: backend
  * Build Command: npm install
  * Start Command: node server.js

Once you make the service there's still a few more things you need to do:
  On the side, go the "Envernment" and then edit.
    * Add two keys:
    * First one named: DATABASE_URL
    * Second one named: PORT
    * Then in the Value section:
    * First Value Add: postgresql://testing_time_user:g9x33zFaLyZiI1NRpAju3oNvHVFyhqIZ@dpg-d0us1cs9c44c73bs1gbg-a/testing_time
    * Second Value Add: 3000
      
And once you deploy it, type /STATIC/ at the very end. Now you can make your very own to-do list.
