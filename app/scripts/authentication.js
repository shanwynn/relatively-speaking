Rs.ApplicationController = Ember.Controller.extend({
    // used to show, or not show, the log out button
    isLoggedIn: false,
    // when a user enters the app unauthenticated, the transition
    // to where they are going is saved off so it can be retried
    // when they have logged in.
    savedTransition: null,

    login: function() {
      this.setProperties({ savedTransition: null, isLoggedIn: true });
    },

    logout: function() {
      this.set('isLoggedIn', false);
    }
});


Rs.ApplicationRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    var applicationController = this.controllerFor('application');
    if (localStorage.authToken) {
      this.controllerFor('application').login();
    } else {
      this.controllerFor('application').logout();
    }
  },
  actions: {
    logout: function() {
      this.controllerFor('application').logout();
      delete localStorage.authToken;
      this.transitionTo('login');
      Rs.Firebase.unauth();
    }
  }
});

Rs.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    var applicationController = this.controllerFor('application');
    if (localStorage.authToken !== Rs.Firebase.getAuth().token) {//Yay! actual verification
      applicationController.set('savedTransition', transition);
      this.transitionTo('login');
    } else {
      this.controllerFor('application').login();
    }
  }
});

Rs.LoginRoute = Ember.Route.extend({
    actions: {
        login: function () {
            var loginController = this.controllerFor('login');
            var username = loginController.get('username');
            var password = loginController.get('password');
            var that = this;
            Rs.Firebase.authWithPassword({
                email: username,
                password: password
            }, function (error, authData) {
                console.log(authData);
                if (authData) {
                    localStorage.authToken = authData.token;
                    that.transitionTo('index');
                } else {
                    console.warn(error);
                    loginController.set('error', error.message);
                }
            });
        }
    }
});
