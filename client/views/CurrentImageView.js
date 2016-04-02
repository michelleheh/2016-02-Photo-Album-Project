var CurrentImageView = Backbone.View.extend({

  template: _.template('<img class="image" src=<%= url %> /><div><%= title %></div><div><%= rating %> out of 5</div>'),

  dropdown: function(num){
    var $menu = $('<select class="rating">');
    var $option = $('<option>');
    for (var i = 0; i <= num; i++) {
      $menu.append($('<option>').text(i));
    }
    return $menu;
  },

  initialize: function() {

  },

  setRating: function(rating) {

  }, 

  events: {
    'change': function() {
      var newRating = $('.rating :selected').text()
      this.model.set({'rating': newRating});
      this.render();
      $('.rating').val(newRating);
    }
  },

  setImage: function(image) {
    this.model = image;
    this.render();
  },

  render: function() {
    return this.$el.html([
      this.template(this.model.attributes),
      this.dropdown(5)
      ]);
  }
  
});