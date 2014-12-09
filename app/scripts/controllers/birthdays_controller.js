Rs.BirthdaysController = Ember.ArrayController.extend({
  sortProperties: ['birthday'],
  sortAscending: true,
  actions: {
        destroy: function () {
                this.get('model').deleteRecord();
                this.get('model').save();
                this.transitionToRoute('birthdays');
    }
  }
});
