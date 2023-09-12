# immigr8
Interview coding project

Only the frontend is implemented due to lack of time.
Data is saved through local storage.

User can complete the form, when done click submit button will save the data in local storage take them to Review Page, where they can further edit the form if they found errors in the form.

Review page is populated with data from local storage. If there is no data from local storage, it will display Loading

Form uses Yup Validation for the schema, however, the schema is not quite finished due to the lack of time to finish the project

Start the app by running 
```
npm start
```


The form is displayed on localhost:3000 (only country of birth field is included right now)
![Screenshot 2023-09-12 at 5 10 06 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/b2b37173-a6fd-49fc-a365-3dc605b6b0ea)

Submitting form will save data in local storage, Canada is selected for this demo
![Screenshot 2023-09-12 at 5 10 19 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/15b551ae-f301-4d55-8af1-8fd6920fca45)

Submitting empty country of birth will be caught by Yup Validation Schema and a warning will pop up
![Screenshot 2023-09-12 at 5 21 02 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/958c3383-7d28-4274-8f6c-26e3797a8057)

User will be directed to review page, where it is populated with Canada already
![Screenshot 2023-09-12 at 5 10 27 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/93249559-8476-43a7-ab3c-de90fdb57898)

User could make further changes in Review page and update the local storage
![Screenshot 2023-09-12 at 5 10 35 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/1ded6304-a6b3-4f6b-be45-b40968b67061)


Need more time to implement backend and set up database. I am not too familiar with Java Springboot, so I would probabily using Express.js
I am comfortable with both Sql and NoSql, but I would prefer MongoDB for this project as it is easier to implement
