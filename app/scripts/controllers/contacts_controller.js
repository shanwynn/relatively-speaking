Rs.ContactsController = Ember.Controller.extend({
  actions: {
    save: function() {
      var contactRecord = this.store.createRecord('contact', {
        firstname:    this.get('firstname'),
        lastname:     this.get('lastname'),
        birthdate:    this.get('birthdate'),
        address:      this.get('address'),
        phone:        this.get('phone'),
        email:        this.get('email'),
        webaddress:   this.get('webaddress'),
        spouse:       this.get('spouse'),
        children:     this.get('children')
      });
      contactRecord.save();
      this.transitionToRoute('contacts');
    }
  }
});
