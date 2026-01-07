# Hotel Room Booking Application

This project is a simple Hotel Room Booking application built using Angular and Bootstrap.

## Features
- Display a list of hotel rooms
- Show room availability (Available / Booked)
- Book a room using a modal form
- Form validation for booking details
- Success and error notifications using toast messages
- Filter rooms by room type
- Persist booking state using browser localStorage

## Technologies Used
- Angular (Standalone Components)
- TypeScript
- Bootstrap 5
- HTML & SCSS

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/sararosli12/hotel-room-booking.git

2. Navigate to the project folder:

cd hotel-room-booking


3. Install dependencies:

npm install


4. Run the application:

ng serve


5. Open your browser and go to:

http://localhost:4200


## Design Decisions

- Modular Structure: I have separated the room list functionality into a standalone component to promote reusability and clarity. This follows Angular's best practices for a modular and maintainable application.
  
- Data Management: For simplicity, the data (room information and booking state) is stored in the `localStorage` to simulate a backend system. This ensures the booking state persists even after a page refresh.

- UI/UX: The application uses Bootstrap for styling, utilizing its grid system for responsive design. The room cards are used to provide a clean, modern UI compared to the typical table layout. Additionally, a filter function was added as a bonus feature to improve usability.


## Framework and Library Decisions

- Angular vs React/Vue: Angular was chosen because it provides a comprehensive structure with its built-in tools for routing, state management, and form handling. Since the task focuses on component structure and modularity, Angular's features fit well.

- Bootstrap for UI: I decided to use Bootstrap because it provides an easy way to implement responsive layouts and components. Additionally, it offers a range of pre-built styles and utilities, speeding up the UI development process without requiring custom CSS.

- localStorage for Persistence: The application uses `localStorage` to persist the booking state. While in a production environment, I would use a backend API and database to store this information, for this task, `localStorage` simulates this functionality efficiently for a small-scale project.
