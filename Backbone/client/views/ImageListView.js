var ImageListView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  }, 

  render: function() {
    this.$el.children().detach();
    
    this.$el.html('<th>ImageList</th>').append(
      this.collection.map(function(image) {
        return new ImageListEntryView({model: image}).render();
      })
    );
  }
});