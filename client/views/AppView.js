var AppView = Backbone.View.extend({
  
  initialize: function() {
    this.inputView = new InputView();
    this.currentImageView = new CurrentImageView({model: this.model.get('currentImage')});
    this.imageListView = new ImageListView({collection: this.model.get('imageList')});
    this.model.on('change:currentImage', function(image) {
      this.currentImageView.setImage(image.get('currentImage'));
    }, this);
    // add a rating view
  },

  events: {
    "submit": function(e) { 
      e.preventDefault();
      var image = {
        title: $('#imageTitle').val(),
        url: $('#imageURL').val(),
        rating: 0
      };
      this.imageListView.collection.add(new ImageModel(image));
      this.imageListView.render();
    }
  },

  render: function(event) {
    return this.$el.html([
      this.inputView.$el,
      this.imageListView.$el,
      this.currentImageView.$el
    ]);
  }

});