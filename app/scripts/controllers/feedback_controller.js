Rs.FeedbackController = Ember.Controller.extend({
  actions: {
    save: function () {
       if (!this.get('text')) { return;}

       var feedback = this.store.createRecord('feedback', {
         name: this.get('name'),
         date: (new Date()).toDateString(),
         text: this.get('text')
       });
       feedback.save();
       this.transitionToRoute('index');
    }
  }
});
