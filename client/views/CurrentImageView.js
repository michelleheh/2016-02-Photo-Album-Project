var CurrentImageView = Backbone.View.extend({

  template: _.template('<img src=<%= url %> /><div><%= title %></div><div><%= rating %> out of 5</div>'),

  dropdown: function(num){
    var $menu = $('<select>');
    var $option = $('<option>');
    for (var i = 0; i <= num; i++) {
      $menu.append($('<option>').text(i));
    }
    console.log($menu);
    return $menu;
  },

  initialize: function() {

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