### **Playwright Login Test for Doximity**
This Playwright test automates the Doximity login process and 
verifies if the user logged in successfully.

-----

### **What this test does:**  
1. Tests if the user successfully landed on https://www.doximity.com/ using API response.
2. Navigates to the **Doximity Login page** using the **Sign In** link.
3. Fills in **email** and **password** (stored securely in `.env`).  
4. Clicks the **Sign In** button.  
5. Verifies if the user is redirected to the **Newsfeed page**.  

-----

### **Important**  
To run this test, install Node, Playwright and all dependencies.

Create a .env file and fill in your **email** and **password** for the test there.
This is the format:

EMAIL="testEmail@email.com"
PASSWORD="myPassword"

-----

### **Author**  
Joe Duong 
Date: 02/07/25