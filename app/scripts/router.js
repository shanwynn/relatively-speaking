Rs.Router.map(function () {
  this.route('news');
  this.route('events');
  this.route('bdayanniv');
  this.route('contacts');
  this.route('recipes');
  this.route('recipe', {path: 'recipes/:id'});
  this.route('recipe_edit', {path: 'recipes/:id/edit'});
  this.route('new_recipe', {path: 'recipes/new'});
  this.route('category', {path: 'categories'});
  this.route('feedback');

});
