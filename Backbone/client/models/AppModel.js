var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentImage', new ImageModel(imageData[0]));

    params.imageList.on('select', function(image) {
      this.set('currentImage', image);
    }, this);
  }
});