/**
 * Aquí especifiquem quines vistes cargar i amb quins controladors al escriure les adreçes desde el client
 */

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
        $routeProvider.when('/', {
            controller:'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/register',{
            controller:'BooksController',
            templateUrl: 'views/register.html'
        })
        .when('/login',{
            controller:'BooksController',
            templateUrl: 'views/login.html'
        })
        .when('/login/:name', {
            controller:'BooksController',
            templateUrl: 'views/userProfile.html'
        })
        .when('/users', {
            controller:'BooksController',
            templateUrl: 'views/users.html'
        })
        .when('/books', {
            controller:'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books/details/:id',{
            controller:'BooksController',
            templateUrl: 'views/book_details.html'
        })
        .when('/books/add',{
            controller:'BooksController',
            templateUrl: 'views/add_book.html'
        })
        .when('/books/edit/:id',{
            controller:'BooksController',
            templateUrl: 'views/edit_book.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});