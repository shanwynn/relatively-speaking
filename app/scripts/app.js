var Relativelyspeaking = window.Relativelyspeaking = Ember.Application.create({
LOG_TRANSITIONS: true
});

Relativelyspeaking.Firebase = new Firebase('https://dazzling-torch-1926.firebaseio.com');

Relativelyspeaking.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: Relativelyspeaking.Firebase
});

Relativelyspeaking.CATEGORIES = [
  { id: '1', name: 'Main Dish'},
  { id: '2', name: 'Side Dish'},
  { id: '3', name: 'Bread'},
  { id: '4', name: 'Dessert'}
];

Relativelyspeaking.RecipeFormComponent = Ember.Component.extend({
  markedDescription: function () {
    return marked((this.get('recipe.description')) || '');
  }.property('recipe.description')
});


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
