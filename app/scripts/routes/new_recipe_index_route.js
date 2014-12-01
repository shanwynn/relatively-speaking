Relativelyspeaking.NewRecipeIndexRoute = Relativelyspeaking.AuthenticatedRoute.extend({
    model: function () {
        return this.store.find('ingredient');
    }
});
