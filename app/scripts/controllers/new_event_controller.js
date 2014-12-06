Rs.NewEventController = Ember.Controller.extend({
    actions: {
        save: function() {
            if(!this.get('title')) {
              this.set('errors', 'Title can not be blank.');
              return;
            }
            if(!this.get('post')) {
              this.set('errors', 'Post can not be blank.');
              return;
            }

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
