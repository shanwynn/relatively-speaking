Rs.EditContactController = Ember.ObjectController.extend({
actions: {
  update: function () {
    this.model.save();
    this.transitionToRoute('contacts');
   },
  destroy: function () {
    if (confirm('Are you sure you want to delete this contact?')) {
    this.get('model').deleteRecord();
    this.get('model').save();
    this.transitionToRoute('contacts');
      }
    }
  }
});
