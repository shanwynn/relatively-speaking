/*global Ember*/
Rs.Recipe = DS.Model.extend({
  recipeName:  DS.attr('string'),
  contributor: DS.attr('string'),
  imageURL:    DS.attr('string'),
  ingredients: DS.attr('string'),
  directions:  DS.attr('string')
});
