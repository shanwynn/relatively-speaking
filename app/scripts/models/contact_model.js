Rs.Contact = DS.Model.extend({
  firstname:  DS.attr('string'),
  lastname:   DS.attr('string'),
  birthdate:  DS.attr('date'),
  address:    DS.attr('string'),
  phone:      DS.attr('string'),
  email:      DS.attr('string'),
  webaddress: DS.attr('string'),
  spouse:     DS.attr('boolean'),
  children:   DS.attr('boolean'),
});
