Rs.Router.map(function () {
  this.route('news');
  this.route('new_news', {path: 'news/new'});
  this.route('edit_news', {path: 'news/:id/edit'});

  this.route('events');
  this.route('new_event', {path: 'event/new'});
  this.route('edit_event', {path: 'event/:id/edit'});

  this.route('birthdays');
  this.route('new_birthday', {path: 'birthday/new'});
  this.route('edit_birthday', {path: 'birthday/:id/edit'});

  this.route('anniversaries');
  this.route('new_anniversary', {path: 'anniversaries/new'});
  this.route('edit_anniversary', {path: 'anniversaries/:id/edit'});

  this.route('contacts');
  this.route('new_contact', {path: 'contact/new'});
  this.route('edit_contact', {path: 'contact/:id/edit'});

  this.route('recipes');
  this.route('new_recipe', {path: 'recipes/new'});
  this.route('edit_recipe', {path: 'recipes/:id/edit'});

  this.route('feedback');
  this.route('new_feedback', {path: 'feedback/new'});
  this.route('edit_feedback', {path: 'feedback/:id/edit'});

  this.route ('login', {path: 'login'});
});
