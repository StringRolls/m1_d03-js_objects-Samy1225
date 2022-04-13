/*We will work with objects from simple to complicated.

We have received a request from the Public Library to send them an example of what would be a good way to organize their user registry:

They want to track user’s information (user id and full name), and which books each user has.
For each book, they want to have some information about the book: title, author, category and [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) number.
Let’s split the problem into small parts.

###Iteration 1
First of all, let’s create a user object. You should start with something like this:*/

const user1 = {
    name : 'Nick',
    id : 7
}
const user2 = {
    name: 'Samy',
    id: 12
}

/*Let’s create the user with your own information (your name, and your favorite number as an id). So we will have to add an id and the name to the object, and set them up with the right values.
//Iteration 2
*///In the same way, let’s create some book objects. Let’s create two different books (your favorite books) with the following data: Title, Author, ISBN and Category.
const book1 = {
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    isbn: '0316769487',
    category: 'Classic Literature'
    };

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310786',
    category: 'Classic Literature'
    };

 const book3 = {
    title: 'El padrino',
    author: 'Al paccino',
    isbn: '0316769487',
    category: 'Mafia'
 }   
 const book4 = {
    title: 'Robin Hood',
    author: 'Gerard Butler',
    isbn: '2737289372',
    category: 'Cartoons'
    };



/*Iteration 3
The next step is to relate the books with the user. As we can deduce, a user can have several books at the same time. Which data type do we know that allows us to specify several data in the same field?

Exactly, an array. Let’s add an array inside the user that represents the books. The array must contain the books that we’ve created.

Use the dot notation to add the new key in the user object.
*/


user1.books = [book1, book2];
user2.books = [book3,book4];

console.log(user1)

/*Iteration 4
Now, we have to create a library object and add the only user that we have right now. Again, we will have several users in the Library, so we could use an array to store all of them.

```javascript
const library = {};
```

So, we have to do three different things here:

Add the array of books to the user object
Create the library object.
Add the user object into the library.users array.
*/

const library = {};
library.users = [user1, user2];

/*Iteration 5
Let’s pick up a new book from the library. That means we will have to add a new book inside the `user.books` array. But now, the user is inside the library object. So you have to access the library, then the user and, finally, the books array to add the new book.

```javascript
const book3 = {};
*/

const book5 = {
   title: 'Caperucita',
   author: 'El Lobo',
   isbn: '2737289372',
   category: 'Animation'
}; 

library.users[1].books.push(book5)

console.log(library.users)


