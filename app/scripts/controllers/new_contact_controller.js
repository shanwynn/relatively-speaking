Rs.NewContactController = Ember.Controller.extend({
  actions: {
    save: function() {
      var contactRecord = this.store.createRecord('contact', {
        firstname:        this.get('firstname'),
        lastname:         this.get('lastname'),
        birthdate:        this.get('birthdate'),
        address:          this.get('address'),
        phone:            this.get('phone'),
        email:            this.get('email'),
        webaddress:       this.get('webaddress'),
        familyphoto:      this.get('familyphoto'),
        spouse:           this.get('spouse'),
        children:         this.get('children'),
        firstnameSpouse:  this.get('firstnameSpouse'),
        lastnameSpouse:   this.get('lastnameSpouse'),
        birthdateSpouse:  this.get('birthdateSpouse'),
        anniversary:      this.get('anniversary'),
        firstnameChild1:  this.get('firstnameChild1'),
        lastnameChild1:   this.get('lastnameChild1'),
        birthdateChild1:  this.get('birthdateChild1'),
        firstnameChild2:  this.get('firstnameChild2'),
        lastnameChild2:   this.get('lastnameChild2'),
        birthdateChild2:  this.get('birthdateChild2'),
        firstnameChild3:  this.get('firstnameChild3'),
        lastnameChild3:   this.get('lastnameChild3'),
        birthdateChild3:  this.get('birthdateChild3'),
        firstnameChild4:  this.get('firstnameChild4'),
        lastnameChild4:   this.get('lastnameChild4'),
        birthdateChild4:  this.get('birthdateChild4')
      });
      contactRecord.save();
      this.transitionToRoute('contacts');
    }
  }
});
