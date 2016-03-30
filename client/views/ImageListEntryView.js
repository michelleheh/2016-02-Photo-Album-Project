var ImageListEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= title %></td>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
  
});