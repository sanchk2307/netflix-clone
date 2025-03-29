# Netflix Clone App

A fully responsive Netflix clone built using Angular and Firebase, featuring user authentication, content browsing, and video playback.

## Features 🌟

- User Authentication (Sign up, Sign in, Sign out) using Firebase
- Fetch and display movie and series data from Firestore
- Fuzzy search functionality using Fuse.js
- Responsive design for various screen sizes
- Protected routes using Angular guards
- Video playback support
<img width="1440" alt="Screenshot 2025-03-29 at 10 55 57 AM" src="https://github.com/user-attachments/assets/e12c005e-021c-4635-a28e-36d7f60e66e7" />
<img width="1440" alt="Screenshot 2025-03-29 at 10 56 21 AM" src="https://github.com/user-attachments/assets/57327547-d681-4a4f-8910-1f96983f2901" />
<img width="1440" alt="Screenshot 2025-03-29 at 10 54 50 AM" src="https://github.com/user-attachments/assets/72504042-98a0-4f8e-aeea-0563835b2689" />
<img width="1440" alt="Screenshot 2025-03-29 at 10 55 23 AM" src="https://github.com/user-attachments/assets/37edf333-159b-4f58-b76e-03545e325d2b" />

## Technologies Used 💻

| Technology       | Description                        |
|------------------|------------------------------------|
| Angular          | Frontend framework                 |
| Firebase         | Authentication, Firestore, Hosting |
| SCSS             | Styling                            |
| Fuse.js          | Fuzzy search functionality         |

## Setup and Installation

#### Prerequisites

Make sure you have the following installed:
- Node.js (LTS version recommended)
- Angular CLI

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sanchk2307/netflix-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Firebase Configuration:
   - Create a Firebase project at Firebase Console.
   - Enable Authentication (Email/Password sign-in method).
   - Create a Firestore database and add your movie/series collection. (Data seeding logic included in the service files)
   - Get your Firebase config and add it to the service files
5. Run the app:
   ```bash
   ng serve
   ```
6. Open the app in your browser:
   ```
   http://localhost:4200
   ```

## Usage 📖

1. Sign up or log in with your credentials.
2. Browse movies and TV shows.
3. Search for content using the search bar.
4. Click on a movie/series to play the video.

## Contributing 🤝

Contributions are welcome! To improve this project:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is for educational purposes only and is not affiliated with Netflix.

---
