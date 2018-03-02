var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.contactArrey = [];

  // once you refresh the app and added another contact the local storage was getting refreshed
  // This was because the contactArrey  was empty after each refresh
  //And hece the local storage was getting updated with the empty arrey
  // Thus needed to initialize it with values from the local storage everytime from the refresh
  if (localStorage.getItem("contacts")) {
    $scope.contactArrey.push(JSON.parse(localStorage.getItem("contacts")));
  } else {
    alert("No contacts");
  }

  ($scope.retrieveFromStorage = function() {
    $scope.contactFromStorage = localStorage.getItem("contacts");
    return $scope.contactFromStorage
      ? JSON.parse($scope.contactFromStorage)
      : [];
  })();

  $scope.saveContact = function(contact) {
    // new object creation from the frontend to be pushed in contactArrey
    //Its very critical step to create a new object which will hold the values once pushed
    $scope.contactsaved = {
      srNo:$scope.contact.$index;
      fName: $scope.contact.fName,
      sName: $scope.contact.sName,
      contact: $scope.contact.number,
      email: $scope.contact.email
    };
    $scope.contactArrey.push($scope.contactsaved);
    localStorage.setItem("contacts", JSON.stringify($scope.contactArrey));
    $scope.retrieveFromStorage();
  };
});
