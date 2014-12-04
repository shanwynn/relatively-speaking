var Rs = window.Rs = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Rs.CATEGORIES = [
	{ id: '1', name: 'Main Dish'},
	{ id: '2', name: 'Side Dish'},
	{ id: '3', name: 'Bread'},
	{ id: '4', name: 'Dessert'}
];

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/authentication');
