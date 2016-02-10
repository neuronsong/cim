(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'cimi-editor',
      template: '<h1>CIMI Editor Angularized!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));