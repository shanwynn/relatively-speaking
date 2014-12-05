var Rs = window.Rs = Ember.Application.create({
	LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/authentication');

Rs.CATEGORIES = [
	{ id: '1', name: 'Main Dish'},
	{ id: '2', name: 'Side Dish'},
	{ id: '3', name: 'Meat'},
	{ id: '4', name: 'Casseroles'},
	{ id: '5', name: 'Bread'},
	{ id: '6', name: 'Dessert'}
];

Rs.FORMWIZARD = [
	{ id: '1', name: 'Yes'},
	{ id: '2', name: 'No'}
];
