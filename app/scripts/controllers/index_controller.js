Relativelyspeaking.IndexController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: false,
  actions: {
    sortToggle: function (prop) {
      if(prop === 'name') {
        this.set('sortProperties', ['name']);
      }
      
      this.set('sortAscending', !this.get('sortAscending'));
    },
  }
});
