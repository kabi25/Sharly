Overview -
This dashboard fetches and displays a list of documents stored in Firebase Firestore. The document list updates in real-time whenever new documents are added or modified, and there's an option to manually refresh the list.

Approach -
Real-Time Data:
Used Firebase Firestore’s real-time listeners to listen for changes in the document list and update the dashboard in real time.

State Management:
Managed the state of the document list using Zustand to ensure the data was stored centrally and accessible throughout the component.

Manual Refresh:
Added a button that manually fetches the document list from Firestore in case real-time updates fail.

Bonus (Design & Pagination):
Styled the dashboard using Material-UI to ensure responsiveness and good user experience.
Implemented basic pagination to display 10 documents per page, enhancing the usability of the list.

Technologies Used:
ReactJS for the dashboard.
Firebase Firestore for real-time data fetching.
Zustand for state management.
Material-UI for styling.

Output:

![Screenshot from 2024-10-12 01-52-04](https://github.com/user-attachments/assets/de92c14b-545d-433b-b8cb-a2612364d83d)

![Screenshot from 2024-10-12 01-52-09](https://github.com/user-attachments/assets/f5cfc43a-e756-4e53-8461-57e732340b84)

