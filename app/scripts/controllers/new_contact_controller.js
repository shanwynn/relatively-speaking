Rs.NewContactController = Ember.Controller.extend({
  actions: {
    save: function() {
      var contactRecord = this.store.createRecord('contact', {
        firstname:        this.get('firstname'),
        lastname:         this.get('lastname'),
        address:          this.get('address'),
        phone:            this.get('phone'),
        email:            this.get('email'),
        webaddress:       this.get('webaddress'),
        familyphoto:      this.get('familyphoto'),
        firstnameSpouse:  this.get('firstnameSpouse'),
        lastnameSpouse:   this.get('lastnameSpouse'),
        firstnameChild1:  this.get('firstnameChild1'),
        lastnameChild1:   this.get('lastnameChild1'),
        firstnameChild2:  this.get('firstnameChild2'),
        lastnameChild2:   this.get('lastnameChild2'),
        firstnameChild3:  this.get('firstnameChild3'),
        lastnameChild3:   this.get('lastnameChild3'),
        firstnameChild4:  this.get('firstnameChild4'),
        lastnameChild4:   this.get('lastnameChild4'),
      });
      contactRecord.save();
      this.transitionToRoute('contacts');
    }
  }
});
