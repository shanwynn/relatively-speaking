Rs.Router.map(function () {
  this.route('news');
  this.route('new_news', {path: 'news/new'});
  this.route('edit_news', {path: 'news/:id/edit'});
  this.route('new_comment', {path: 'news/:id/new_comment'});

  this.route('events');
  this.route('new_event', {path: 'event/new'});
  this.route('edit_event', {path: 'event/:id/edit'});

  this.route('bdayanniv');

  this.route('contacts');
  this.route('new_contact', {path: 'contact/new'});
  this.route('edit_contact', {path: 'contact/:id/edit'});

  this.route('recipes');
  this.route('recipe', {path: 'recipes/:id'});
  this.route('new_recipe', {path: 'recipes/new'});
  this.route('edit_recipe', {path: 'recipes/:id/edit'});
  this.route('category', {path: 'categories'});

  this.route('feedback');
  this.route('new_feedback', {path: 'feedback/new'});
  this.route('edit_feedback', {path: 'feedback/:id/edit'});

  this.route ('login', {path: 'login'});
});
