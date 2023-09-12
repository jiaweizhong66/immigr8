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
![Screenshot 2023-09-12 at 5 10 06 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/45ec4e82-b02f-4a48-b829-3648d222588c)


Countries can be selected from the dropdown(material UI)
![Screenshot 2023-09-12 at 5 26 18 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/0f9a6d35-a431-420b-b213-f1f47da1145b)


Submitting form will save data in local storage, Canada is selected for this demo
![Screenshot 2023-09-12 at 5 10 19 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/7665b7b8-9246-4af4-8841-bb0c4b325f96)


Submitting empty country of birth will be caught by Yup Validation Schema and a warning will pop up
![Screenshot 2023-09-12 at 5 21 02 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/ba9b5add-bb74-4c20-a8cc-50de24268a7f)

User will be directed to review page, where it is populated with Canada already
![Screenshot 2023-09-12 at 5 10 27 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/f49754ff-3009-4a76-a35d-82ea952bd40e)


User could make further changes in Review page and update the local storage
![Screenshot 2023-09-12 at 5 10 35 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/f97cbd66-e642-47c5-a48c-545e7a320e38)

If no records in local storage, review page will show a loading page
![Screenshot 2023-09-12 at 5 35 07 AM](https://github.com/jiaweizhong66/immigr8/assets/66694451/612173aa-9ab8-4082-9d12-ab989a333220)



Need more time to implement backend and set up database. I am not too familiar with Java Springboot, so I would probabily using Express.js
I am comfortable with both Sql and NoSql, but I would prefer MongoDB for this project as it is easier to implement
