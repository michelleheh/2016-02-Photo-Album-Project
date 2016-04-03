var ImageListEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<tds><%= title %></td>'),

  events: {
    'click': function(){
      this.model.select();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
  
});