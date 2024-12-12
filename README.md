# Kitap Kurdu Application
Kitap Kurdu is a web application that allows you to get information about books and search. This project was developed using ReactJS, HTML, CSS and Bootstrap. The application allows users to view, sort, examine details and search books by category.

## Preview
A preview of my Kitap kurdu project is in the gif below.

![kitapkurdu](https://github.com/user-attachments/assets/90d04580-79d4-4f4a-bdbb-cfb35a19aa41)

## Features
* Routing Between Pages: React Router library provides redirection between pages. Page transitions are provided using NavLink and Link components.
* Book Search: Users can search for books by entering the book name in the search bar.
* Book List: Books are listed on the products page by getting them from the database.
* Category Page: Books are listed under "Story" and "Novel" categories. Books in categories are shown with a simple nested structure.
* Data Retrieval: Data is retrieved from the db.json file with the server-json library and the axios library.
* Book Sorting: Books can be sorted in A-Z and Z-A order.
* Book Details: For each book, you can click on the "See Details" button to access detailed information about the book (page count, publication year, author, title, etc.).
* 404 Page: If the searched page cannot be found, a special 404 error page is displayed to the user.

## Technologies
* ReactJS: Used to create the user interface.
* React Router: Used to manage redirects between pages.
* Axios: Used to retrieve data via API.
* Bootstrap: Used for responsive design.
* Server JSON: Used to use JSON data as a backend.
