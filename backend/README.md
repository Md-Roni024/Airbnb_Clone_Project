# Full Statck Assignment - Backend
This is a full-stack site <span style="color: red">backend</span> built with Node.js and Express.js stores hotel and room details. It uses PostgreSQL to manage data like hotel slug,title,host name,host email,bedroom count,guest count and amenities. The backend provides APIs to create & read this information. It ensures data is accurate and easy to query. This setup allows the frontend to display hotel and room details for users.

### Technology stack
As the name suggests, this repository is built on top of Node.js, Express.js & PostgreSql, however in the implementation detail, we will find other supporting technologies as well.

**PostgreSQL** : For the database to store user information, complaints, and other relevant data.

**Node.js** : A runtime environment for executing JavaScript code on the server side.

**Express.js** : A web application framework for building APIs to handle server-side logic.

**Postman** : For testing API endpoints and ensuring smooth communication between frontend and backend.


### Running the backend 
Before running the application, make sure you have the following installed:

- Node.js
- Express.js
- Postgresql

1. Clone the project
    ```bash
    git clone https://github.com/Md-Roni024/Full_Stack_Assignment
    ```  

2. Go to the project directory and install dependencies
    ```
    cd backend
    npm install
    ```
3. Create a .env file then add your variables credentials as like:
    ```
    USER = "Postgress User Name"
    HOST = "Host Name"
    DATABASE = "Database Name"
    PASSWORD = "Postgress Password"
    PORT = ""
    ```
4. Start the backend
    ```
    npm start
    ```
    After successfully run the backend part it will launch in port 8000.


### REST API
In the backend for managing hotel details and room information I build 5 endpoints. Where 3 endpoints for get and post hotel details, similarly rest 2 endpoins are for get and post room information.

- POST /hotel
- GET /hotel/slug
- GET /hotel
- POST /hotel/room
- GET /hotel/slug/room


### Database Schema
- Hotel Deatils Table
  ```sql
  CREATE TABLE hotel_details(
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    images TEXT[], -- Array of images
    guest_count INTEGER,
    bedroom_count INTEGER,
    bathroom_count INTEGER,
    amenities TEXT[], -- Array of amenity
    host_name VARCHAR(255),
    host_image TEXT,
    host_email VARCHAR(255),
    host_phone VARCHAR(20),
    address TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8)
    );
  ```
  - Room Information table
  ```sql
  CREATE TABLE room_information (
    id SERIAL PRIMARY KEY,
    hotel_slug VARCHAR(255) REFERENCES hotel_details(slug),
    room_slug VARCHAR(255) NOT NULL,
    room_image TEXT,
    room_title VARCHAR(255) NOT NULL,
    bedroom_count INTEGER,
    UNIQUE (hotel_slug, room_slug)
    );
  ```


### Future Improvements
  - Add more functionality:

    In future I will add some more inteactive functionality where user can give ratings and review  to every hotels. Also can make report to hotel in any unwanted reason.

  - Notification System :

    The system notifies rectors instantly upon new complaints within their hostel blocks, facilitating swift response



### Contributing
- Contributions are welcome! Feel free to open issues or submit pull requests.


### Contact

- For any inquiries or feedback, please contact us at roni.cse@gmail.com

