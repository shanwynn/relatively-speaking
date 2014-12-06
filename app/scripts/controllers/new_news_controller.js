Rs.NewNewsController = Ember.Controller.extend({
    actions : {
        save: function () {
            if(!this.get('title')) {
              this.set('errors', 'Title can not be blank.');
              return;
            }
            if(!this.get('post')) {
              this.set('errors', 'Post can not be blank.');
              return;
            }

            var newsRecord = this.store.createRecord('news', {
              title:       this.get('title'),
              post:        this.get('post'),
              imageURL:    this.get('imageURL'),
            });
            newsRecord.save();
            this.transitionToRoute('news');
        }
    }
});
