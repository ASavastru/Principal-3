This file represents an in-depth explanation of all of the changes done from previous version.

1. Modals don't work no more bicoz of refresh from get (maybe ajax) :'(
2. Reverted to base form because nav variable broke; there is a mix of Date from vanilla JS and moment.js that needs to be solved
3. Added 

TODO: 
- make getAppointments() get data from appointments table joined with users table and display it somewhere [DONE]
- make setAppointments() have the ability to insert data into appointments table [DONE]
- change everything to moment.js
- add login
- finish ui


/*
* "docker compose up" starts server
* "Ctrl+C" hotkey stops server
*
* we need to add login functionality with encrypted passowrd
  */