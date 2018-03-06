var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.contactArrey = [];
  $scope.contact={};

  // once you refresh the app and added another contact the local storage was getting refreshed
  // This was because the contactArrey  was empty after each refresh
  //And hece the local storage was getting updated with the empty arrey
  // Thus needed to initialize it with values from the local storage everytime from the refresh
  if (localStorage.getItem("contacts")) {
    // initially i had used :-
    // $scope.contactArrey.push(JSON.parse(localStorage.getItem("contacts")));
    // Concat function was best to use here as arrey.push was changing the json structor  after refresh each time
    $scope.contactArrey = $scope.contactArrey.concat(
      JSON.parse(localStorage.getItem("contacts"))
    );

    console.log(JSON.parse(localStorage.getItem("contacts")));
  } else {
    alert("No contacts");
  }

  // a javascript IFFE
  ($scope.retrieveFromStorage = function() {
    $scope.contactFromStorage = localStorage.getItem("contacts");
    return $scope.contactFromStorage
      ? JSON.parse($scope.contactFromStorage)
      : ($scope.contactArrey = []);
  })();

  $scope.saveContact = function(contact) {
  console.log($scope.contactArrey.indexOf(contact));
    
    // new object creation from the frontend to be pushed in contactArrey
    //Its very critical step to create a new object which will hold the values once pushed
    $scope.contactsaved = {
      //   srNo:$scope.contact.$index;
      fName: $scope.contact.fName,
      sName: $scope.contact.sName,
      contact: $scope.contact.number,
      email: $scope.contact.email
    };

    $scope.contactArrey.push($scope.contactsaved);
    localStorage.setItem("contacts", JSON.stringify($scope.contactArrey));
    $scope.retrieveFromStorage();
  };
   
  $scope.edit= function(item){
    $scope.contact.fName=item.fName;
    $scope.contact.sName=item.sName ;
    $scope.contact.number=item.contact;
    $scope.contact.email=item.email;
    $scope.contactArrey.indexOf(item);

  }

  $scope.delete=function(item){
    // mapping object to delete
    var idx = $scope.contactArrey.indexOf(item);
    $scope.contactArrey.splice(idx, 1);
   
 localStorage.setItem("contacts", JSON.stringify($scope.contactArrey));
  }
});
