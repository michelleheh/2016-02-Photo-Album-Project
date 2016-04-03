var InputView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },


  render: function(){
    return this.$el.html([
      '<form><label>Image Link: <input id="imageURL"></input></label><label>Image Title: <input id="imageTitle"></input></label><button>Save Photo</button></form>'
    ]);
  }

});