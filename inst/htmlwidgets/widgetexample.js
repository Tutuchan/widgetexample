HTMLWidgets.widget({
  name: 'widgetexample',
  type: 'output',
  factory: function(el, width, height) {
    return {
      renderValue: function(x) {
        console.log(x);
        el.innerText = x.message;
      },
      resize: function(width, height) {
      }
    };
  }
});
