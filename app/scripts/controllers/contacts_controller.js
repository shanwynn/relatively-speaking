Rs.ContactsController = Ember.ArrayController.extend({
  sortProperties: ['lastname', 'firstname'],
  sortAscending: true,
  actions: {
        destroy: function () {
                this.get('model').deleteRecord();
                this.get('model').save();
                this.transitionToRoute('contacts');
    }
  }
});
