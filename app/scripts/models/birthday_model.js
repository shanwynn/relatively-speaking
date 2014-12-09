Rs.Birthday = DS.Model.extend({
  fullname:         DS.attr('string'),
  birthday:         DS.attr('string'),

  formattedBirthday: function() {
    return moment(this.get('birthday')).format('LL');
  }.property('birthday')
});
