Rs.AnniversariesController = Ember.ArrayController.extend({
  sortProperties: ['anniversary'],
  sortAscending: true,
  actions: {
        destroy: function () {
                this.get('model').deleteRecord();
                this.get('model').save();
                this.transitionToRoute('anniversaries');
    }
  }
});
