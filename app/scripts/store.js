Rs.Firebase = new Firebase('https://relatively-speaking.firebaseIO.com');

Rs.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: Rs.Firebase
});
