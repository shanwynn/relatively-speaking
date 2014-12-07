Rs.Router.map(function () {
  this.route('news');
  this.route('new_news', {path: 'news/new'});
  this.route('news_edit', {path: 'news/:id/edit'});
  this.route('new_comment', {path: 'news/:id/new_comment'});

  this.route('events');
  this.route('new_event', {path: 'event/new'});

  this.route('bdayanniv');
  this.route('contacts');

  this.route('recipes');
  this.route('recipe', {path: 'recipes/:id'});
  this.route('recipe_edit', {path: 'recipes/:id/edit'});
  this.route('new_recipe', {path: 'recipes/new'});
  this.route('category', {path: 'categories'});

  this.route('feedback');
  this.route('new_feedback', {path: 'feedback/new'});

  this.route ('login', {path: 'login'});
});
