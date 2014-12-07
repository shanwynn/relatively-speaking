Rs.NewFeedbackController = Ember.Controller.extend({
  actions: {
    save: function () {
       if (!this.get('text')) { return;}

       var feedbackRecord = this.store.createRecord('feedback', {
         name: this.get('name'),
         date: (new Date()).toDateString(),
         text: this.get('text')
       });
       feedbackRecord.save();
       this.transitionToRoute('feedback');
    }
  }
});
