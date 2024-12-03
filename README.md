# Admin & Employee Portal with Redux and React

This project is an Admin & Employee Portal developed using **React**, **Redux**, and **Material-UI**. The portal provides functionalities for both Admin and Employee users, including job management, user management, and secure routing.

---

## **Features**

### **Admin Functionalities**
1. **POST: /user/create API**
   - Create users with fields: `full name`, `email`, `password`, and `type` (`admin` or `employee`).
   - Type validation ensures only `admin` or `employee` values are accepted.
   - Passwords are excluded from the GET API response.
2. **Admin Page: Employees**
   - Display all users in a table format with details like `email`, `name`, and `type`.
3. **Add Jobs**
   - `/create/job` API: Create job postings with fields:
     - `companyName`
     - `jobTitle`
     - `description`
     - `salary`
   - Add Jobs page allows admins to post jobs using a form.

### **Employee Functionalities**
1. **GET: /jobs API**
   - Retrieve the list of available jobs posted by the admin.
2. **Jobs Page**
   - Displays all available jobs in a card layout with pagination support.

### **General Functionalities**
- Role-based routing:
  - **Admin**: Access to Admin Pages only.
  - **Employee**: Access to Employee Pages only.
- Secure routes: No pages are accessible without login.
- Loading indicators for API calls.
- Clean and responsive UI built with Material-UI.

---

## **Technologies Used**
- **React**: Frontend framework.
- **Redux**: State management.
- **Material-UI**: UI components.
- **React Router**: Routing.
- **Axios**: API calls.
- **Node.js and Express**: Backend APIs.

---
