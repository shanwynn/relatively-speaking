Rs.Feedback = DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('string'),
  text: DS.attr('string'),
  markedText: function () {
    return marked(this.get('text') || '');
  }.property('text'),
  feedback: DS.belongsTo('feedback', {async: true})
});
