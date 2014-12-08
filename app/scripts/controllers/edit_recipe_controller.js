Rs.EditRecipeController = Ember.ObjectController.extend({
  actions: {
    update: function () {
      this.model.save();
      this.transitionToRoute('recipes');
    },
destroy: function () {
  if (confirm('Are you sure you want to delete this recipe?')) {
  this.get('model').deleteRecord();
  this.get('model').save();
  this.transitionToRoute('recipes');
      }
    }
  }
});
