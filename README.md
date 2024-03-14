Internet Status Checker
Overview :-
The Internet Status Checker is a simple web application that allows users to check their internet connection status. It provides real-time updates on the user's online/offline status, displays the user's IP address when online, and handles offline scenarios by displaying the last known status.

Features :-
Real-time updates on internet connection status.
Display of user's IP address when online.
Handling of offline scenarios to display last known status.

Technologies Used:-
HTML
CSS
JavaScript

Implementation Details :-
Real-time Updates:-

Uses JavaScript's navigator.onLine property to check online status.
Updates the UI to display "Connected" or "Disconnected" based on the status.

Display of IP Address :-
Uses a public API (https://api.ipify.org?format=json) to fetch the user's IP address.
Updates the UI with the fetched IP address when online.

Handling Offline Scenarios :-
Caches the last known status and displays it when the user is offline.

Challenges and Solutions :-
Managing UI Updates: Ensured smooth UI updates when the internet connection status changed by using event listeners.
Displaying IP Address: Fetched the user's IP address using a public API and updated the UI with this information.

Benefits and Learning :-
Improved understanding of front-end development and browser APIs.
Enhanced problem-solving skills, particularly in handling real-time updates and offline scenarios.

Deployment :-
The application can be deployed to any web server or hosting service that supports static websites.
:-
Conclusion
The Internet Status Checker project demonstrates proficiency in front-end web development and showcases the ability to work with browser APIs to provide real-time updates. It serves as a valuable learning experience in managing internet connection status in web applications.

