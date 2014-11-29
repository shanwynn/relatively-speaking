Relativelyspeaking.Router.map(function () {
  this.route ('recipe', {path: 'recipes/:id'});
  this.route ('edit_recipe', {path: 'recipes/:id/edit'});
  this.route ('new_recipe', {path: 'recipes/new'});
  this.route ('category', {path: 'categories'});
  this.route ('login', {path: 'login'});
});
