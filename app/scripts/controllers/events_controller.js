Rs.EventsController = Ember.Controller.extend({
  actions: {
    save: function() {
      var eventRecord = this.store.createRecord('event', {
        title:    this.get('title'),
        date:     this.get('date'),
        time:     this.get('time'),
        post:     this.get('post'),
      });
      eventRecord.save();
      this.transitionToRoute('events');
    }
  }
});
