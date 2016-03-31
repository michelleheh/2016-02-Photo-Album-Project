var AppView = Backbone.View.extend({
  
  initialize: function() {
    this.currentImageView = new CurrentImageView({model: this.model.get('currentImage')});
    this.imageListView = new ImageListView({collection: this.model.get('imageList')});
    this.model.on('change:currentImage', function(image) {
      this.currentImageView.setImage(image.get('currentImage'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.imageListView.$el,
      this.currentImageView.$el
    ]);
  }

});