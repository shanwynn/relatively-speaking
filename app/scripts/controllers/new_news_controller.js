Rs.NewNewsController = Ember.Controller.extend({
    actions: {
        save: function () {
            if(!this.get('newsTitle')) {
              this.set('errors', 'Title can not be blank.');
              return;
            }
            if(!this.get('newsPost')) {
              this.set('errors', 'Post can not be blank.');
              return;
            }

            var newsRecord = this.store.createRecord('news', {
              newsTitle:       this.get('newsTitle'),
              newsPost:        this.get('newsPost'),
              imageURL:        this.get('imageURL'),
            });
            newsRecord.save();
            this.transitionToRoute('news');
        }
    }
});
