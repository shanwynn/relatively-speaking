Rs.NewBirthdayController = Ember.Controller.extend({
    actions: {
        save: function() {
            if(!this.get('fullname')) {
              this.set('errors', 'Title can not be blank.');
              return;
            }

            var birthday = this.store.createRecord('birthday', {
              fullname:    this.get('fullname'),
              birthday:    this.get('birthday'),

            });
            birthday.save();
            this.transitionToRoute('birthdays');
        }
    }
});
