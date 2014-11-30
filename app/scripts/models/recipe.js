Relativelyspeaking.Recipe = DS.Model.extend({
  name:        DS.attr('string'),
  description: DS.attr('string'),

  markedDescription: function () {
    return marked(this.get('description') || '');
  }.property('description'),

  category:    DS.attr('string'),
  imageURL:    DS.attr('string'),
  ingredients: DS.attr('string'),
  directions:  DS.attr('string'),
  rank:        DS.attr('number'),
  comments:    DS.hasMany('comment', {async: true})
});
