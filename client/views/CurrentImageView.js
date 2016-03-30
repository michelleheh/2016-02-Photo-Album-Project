var CurrentImageView = Backbone.View.extend({

  template: _.template('<img src=<%= url %> /><div><%= title %></div>'),

  initialize: function() {

  },

  setImage: function(image) {
    this.model = image;
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
  
});