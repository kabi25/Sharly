Overview -
This part implements a simple login and logout functionality using Firebase Authentication in a Next.js environment. Users can log in with their email and password, and their authentication state is managed globally.

Approach -
Login Functionality:
Created a login form using Next.js and integrated Firebase Authentication for email/password sign-in.
On successful login, the user’s session is stored and managed globally using Zustand for state management.

Session Management:
Used Zustand to store the authentication state, ensuring it is accessible throughout the app.
Displayed the logged-in user’s email on the homepage.

Logout Functionality:
Implemented a logout button that clears the session and redirects the user.

Bonus (Design & Loading State)-
Styled the login page and home page using Chakra UI to create a clean and responsive design.
Added a loading state to the login button, improving the user experience during authentication.

Technologies Used - 
Next.js for server-side rendering.
Firebase Authentication for user management.
Zustand for global state management.
Chakra UI for styling.

Output:
![Screenshot from 2024-10-12 01-54-55](https://github.com/user-attachments/assets/35c274e2-cb67-495f-991c-fe2f6e11c3c8)
![Screenshot from 2024-10-12 01-55-04](https://github.com/user-attachments/assets/6abc71bc-07e2-4c99-9796-623e82d210ee)
![Screenshot from 2024-10-12 02-06-42](https://github.com/user-attachments/assets/8070765d-98b8-4d4e-913c-3570344069f0)
