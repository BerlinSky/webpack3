// import 'jquery';
import angular from 'angular';

// // eslint-disable-next-line

const app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

// const siteSetup = () => {
//   console.log("Set up ... in arrow function now")
// }

// const testjQuery = () => {
//   const thisBody = $('body');
//   thisBody.css({ 'backgroundColor': 'tomato' })
// }

// $(function () {
//   siteSetup();
//   testjQuery();
// });

