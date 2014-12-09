Rs.NewAnniversaryController = Ember.Controller.extend({
    actions: {
        save: function() {
            if(!this.get('yourname')) {
              this.set('errors', 'Name can not be blank.');
              return;
            }
            if(!this.get('spousename')) {
              this.set('errors', 'Spouse name can not be blank.');
              return;
            }

            var anniversary = this.store.createRecord('anniversary', {
              yourname:    this.get('yourname'),
              spousename:  this.get('spousename'),
              anniversary: this.get('anniversary'),

            });
            anniversary.save();
            this.transitionToRoute('anniversaries');
        }
    }
});
