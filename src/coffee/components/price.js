// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    OJ.components.members['x-price'] = 'price';
    OJ.components.register('price', function(options, owner) {
      var cents, defaults, dollars, price, ret;
      defaults = {};
      OJ.extend(defaults, options);
      ret = OJ.component(defaults, owner, 'x-price');
      price = ret.div({
        props: {
          "class": 'input-line'
        }
      });
      price.span({
        props: {
          "class": 'above-line'
        }
      }).text('$');
      dollars = price.span({
        props: {
          "class": 'dollars'
        }
      });
      dollars.input({
        props: {
          type: 'text'
        }
      });
      dollars.label().text('Dollars');
      price.span({
        props: {
          "class": 'above-line'
        }
      }).text('.');
      cents = price.span({
        props: {
          "class": 'cents'
        }
      });
      cents.input({
        props: {
          type: 'text'
        }
      });
      cents.label().text('Cents');
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=price.map