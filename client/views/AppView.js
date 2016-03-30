var AppView = Backbone.View.extend({
  
  initialize: function() {
    this.currentImageView = new CurrentImageView({model: this.model.get('currentImage')});
    this.imageListView = new ImageListView({collection: this.model.get('imageList')});
  },

  render: function() {
    return this.$el.html([
      this.imageListView.$el,
      this.currentImageView.$el
    ]);
  }

});