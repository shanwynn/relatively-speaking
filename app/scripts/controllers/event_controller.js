Rs.EventController = Ember.Controller.extend({
  actions: {
    save: function() {
      var event = this.store.createRecord('event', {
        title:    this.get('title'),
        date:     this.get('date'),
        post:     this.get('post'),
      });
      event.save();
      this.transitionToRoute('events');
    }
  }
});
