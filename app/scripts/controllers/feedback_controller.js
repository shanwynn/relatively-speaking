Rs.FeedbackController = Ember.ObjectController.extend({
  markedText: function () {
    return marked(this.get('text') || '');
  }.property('text'),

  actions: {
    save: function () {
      if (!this.get('text')) { return;}
      var feedback = this.store.createRecord('feedback', {
        name: this.get('name'),
        date: (new Date()).toDateString(),
        text: this.get('text')
      });
      feedback.save();

      this.transitionToRoute('feedback');
    }
  }
});
