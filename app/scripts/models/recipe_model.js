/*global Ember*/
Rs.Recipe = DS.Model.extend({
  recipeName:  DS.attr('string'),
  contributor: DS.attr('string'),
  imageURL:    DS.attr('string'),
  ingredients: DS.attr('string'),
  directions:  DS.attr('string'),

  splitDirections: function () {
        if(this.get('directions')) {
            return (this.get('directions') || '').split(',');
        }
    }.property('directions'),

    splitIngredients: function () {
        if(this.get('ingredients')) {
            return this.get('ingredients').split(',');
        }
    }.property('ingredients'),

});
