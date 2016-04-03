var ImageModel = Backbone.Model.extend({
  
  initialize:  function() {},

  select: function() {
    this.trigger('select', this);
  }

});