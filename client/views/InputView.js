var InputView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },


  render: function(){
    return this.$el.html([
      '<form><label>Image Link: <input></input></label><label>Image Title: <input></input></label><button>Save Photo</button></form>'
    ])
  }

});