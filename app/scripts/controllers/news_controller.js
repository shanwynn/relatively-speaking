Rs.NewsController = Ember.Controller.extend({
  actions: {
    save: function() {
      var news = this.store.createRecord('news', {
        title:       this.get('title'),
        post:        this.get('post'),
        imageURL:    this.get('imageURL'),
      });
        news.save();
      this.transitionToRoute('news');
    }
  }
});
