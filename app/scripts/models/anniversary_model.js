Rs.Anniversary = DS.Model.extend({
  yourname:         DS.attr('string'),
  spousename:       DS.attr('string'),
  anniversary:      DS.attr('string'),

  formattedAnniversary: function() {
    return moment(this.get('anniversary')).format('LL');
  }.property('anniversary')
});
