'use strict';



;define("binance-market/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "binance-market/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"binance-market/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("binance-market/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("binance-market/components/entry-distribution", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="container mt-5">
    <h2 class="mb-4 text-center">Distribution Calculator</h2>
  
    <div class="mb-3">
      <label for="amount" class="form-label">Total Amount:</label>
      <Input
        id="amount"
        @type="number"
        @value={{this.amount}}
        class="form-control"
      />
    </div>
  
    <div class="mb-3">
      <label for="low-number" class="form-label">Low Number:</label>
      <Input
        id="low-number"
        @type="number"
        @value={{this.lowNumber}}
        class="form-control"
      />
    </div>
  
    <div class="mb-3">
      <label for="high-number" class="form-label">High Number:</label>
      <Input
        id="high-number"
        @type="number"
        @value={{this.highNumber}}
        class="form-control"
      />
    </div>
  
    <div class="mb-3">
      <label for="num-distributions" class="form-label">Number of Distributions:</label>
      <Input
        id="num-distributions"
        @type="number"
        @value={{this.distributionNumber}}
        class="form-control"
      />
    </div>
  
    <div class="text-center">
      <button
        type="button"
        class="btn btn-primary"
        {{on "click" this.calculateDistribution}}
      >
        Calculate Distribution
      </button>
    </div>
  
    {{#if this.distributions.length}}
      <h3 class="mt-4">Distributed Amounts:</h3>
  
      <table class="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>No.</th>
            <th>Entry</th>
            <th>Amount</th>
            <th>Cumulative Average</th>
          </tr>
        </thead>
        <tbody>
          {{#each this.distributions as |distribution index|}}
            <tr>
              <td>{{index}}</td>
              <td>{{distribution.entry}}</td>
              <td>${{distribution.amount}}</td>
              <td>${{distribution.cumulativeAverage}}</td>
            </tr>
          {{/each}}
          <tr>
            <td><strong>Average Entry Point:</strong></td>
            <td><strong>${{this.averageEntry}}</strong></td>
            <td><strong>Total Average: ${{this.totalAverage}}</strong></td>
          </tr>
        </tbody>
      </table>
    {{/if}}
  </div>
  */
  {
    "id": "vTrxxKfx",
    "block": "[[[10,0],[14,0,\"container mt-5\"],[12],[1,\"\\n  \"],[10,\"h2\"],[14,0,\"mb-4 text-center\"],[12],[1,\"Distribution Calculator\"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"amount\"],[14,0,\"form-label\"],[12],[1,\"Total Amount:\"],[13],[1,\"\\n    \"],[8,[39,3],[[24,1,\"amount\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"amount\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"low-number\"],[14,0,\"form-label\"],[12],[1,\"Low Number:\"],[13],[1,\"\\n    \"],[8,[39,3],[[24,1,\"low-number\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"lowNumber\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"high-number\"],[14,0,\"form-label\"],[12],[1,\"High Number:\"],[13],[1,\"\\n    \"],[8,[39,3],[[24,1,\"high-number\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"highNumber\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"num-distributions\"],[14,0,\"form-label\"],[12],[1,\"Number of Distributions:\"],[13],[1,\"\\n    \"],[8,[39,3],[[24,1,\"num-distributions\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"distributionNumber\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"text-center\"],[12],[1,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"calculateDistribution\"]]],null],[12],[1,\"\\n      Calculate Distribution\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"distributions\",\"length\"]],[[[1,\"    \"],[10,\"h3\"],[14,0,\"mt-4\"],[12],[1,\"Distributed Amounts:\"],[13],[1,\"\\n\\n    \"],[10,\"table\"],[14,0,\"table table-bordered table-striped mt-3\"],[12],[1,\"\\n      \"],[10,\"thead\"],[12],[1,\"\\n        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"th\"],[12],[1,\"No.\"],[13],[1,\"\\n          \"],[10,\"th\"],[12],[1,\"Entry\"],[13],[1,\"\\n          \"],[10,\"th\"],[12],[1,\"Amount\"],[13],[1,\"\\n          \"],[10,\"th\"],[12],[1,\"Cumulative Average\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,14],[[28,[37,14],[[30,0,[\"distributions\"]]],null]],null],null,[[[1,\"          \"],[10,\"tr\"],[12],[1,\"\\n            \"],[10,\"td\"],[12],[1,[30,2]],[13],[1,\"\\n            \"],[10,\"td\"],[12],[1,[30,1,[\"entry\"]]],[13],[1,\"\\n            \"],[10,\"td\"],[12],[1,\"$\"],[1,[30,1,[\"amount\"]]],[13],[1,\"\\n            \"],[10,\"td\"],[12],[1,\"$\"],[1,[30,1,[\"cumulativeAverage\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[1,2]],null],[1,\"        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"td\"],[12],[10,\"strong\"],[12],[1,\"Average Entry Point:\"],[13],[13],[1,\"\\n          \"],[10,\"td\"],[12],[10,\"strong\"],[12],[1,\"$\"],[1,[30,0,[\"averageEntry\"]]],[13],[13],[1,\"\\n          \"],[10,\"td\"],[12],[10,\"strong\"],[12],[1,\"Total Average: $\"],[1,[30,0,[\"totalAverage\"]]],[13],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"distribution\",\"index\"],false,[\"div\",\"h2\",\"label\",\"input\",\"button\",\"on\",\"if\",\"h3\",\"table\",\"thead\",\"tr\",\"th\",\"tbody\",\"each\",\"-track-array\",\"td\",\"strong\"]]",
    "moduleName": "binance-market/components/entry-distribution.hbs",
    "isStrictMode": false
  });
  let EntryDistributionComponent = _exports.default = (_class = class EntryDistributionComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "amount", _descriptor, this);
      _initializerDefineProperty(this, "lowNumber", _descriptor2, this);
      _initializerDefineProperty(this, "highNumber", _descriptor3, this);
      _initializerDefineProperty(this, "distributionNumber", _descriptor4, this);
      _initializerDefineProperty(this, "distributions", _descriptor5, this);
      _initializerDefineProperty(this, "cumulativeAverages", _descriptor6, this);
      _initializerDefineProperty(this, "averageEntry", _descriptor7, this);
      _initializerDefineProperty(this, "totalAverage", _descriptor8, this);
    }
    calculateDistribution() {
      this.calculate(this.lowNumber, this.highNumber, this.distributionNumber);
    }
    calculate(lowNumber, highNumber, distributionNumber) {
      this.distributions = []; // Reset distributions array
      const increment = this.increment(lowNumber, highNumber, distributionNumber);
      if (increment <= 0) {
        console.error('Invalid increment value.');
        return;
      }
      let entries = [];
      for (let i = lowNumber; i <= highNumber; i += increment) {
        entries.push(i);
      }
      this.weights = entries.map(entry => 1 / entry);
      this.totalWeight = this.weights.reduce((acc, weight) => acc + weight, 0);
      let cumulativeSum = 0;
      this.distributions = entries.map((entry, index) => {
        const share = this.weights[index] / this.totalWeight * this.amount;
        cumulativeSum += share;
        return {
          entry: entry.toFixed(4),
          amount: share.toFixed(4),
          cumulativeAverage: (cumulativeSum / (index + 1)).toFixed(4)
        };
      });
      this.calculateAverageEntry();
      this.calculateTotalAverage();
    }
    increment(lowNumber, highNumber, distributionNumber) {
      return (highNumber - lowNumber) / (distributionNumber - 1);
    }
    calculateAverageEntry() {
      const totalEntries = this.distributions.reduce((acc, distribution) => {
        return acc + parseFloat(distribution.entry);
      }, 0);
      this.averageEntry = (totalEntries / this.distributions.length).toFixed(4);
    }
    calculateTotalAverage() {
      const totalAmount = this.distributions.reduce((acc, distribution) => {
        return acc + parseFloat(distribution.amount);
      }, 0);
      this.totalAverage = (totalAmount / this.distributions.length).toFixed(4);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "amount", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 10;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "lowNumber", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 4.5;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "highNumber", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 5.32;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "distributionNumber", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 20;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "distributions", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "cumulativeAverages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "averageEntry", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "totalAverage", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "calculateDistribution", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "calculateDistribution"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, EntryDistributionComponent);
});
;define("binance-market/components/liquidation-calculator", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "Qqz4vXKA",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "binance-market/components/liquidation-calculator.hbs",
    "isStrictMode": false
  });
  class LiquidationCalculator extends _component2.default {}
  _exports.default = LiquidationCalculator;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LiquidationCalculator);
});
;define("binance-market/components/stock-calculator", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="container">
    <div class="header">
      <div class="symbol">REEFUSDT</div>
      <div class="leverage">Isolated
        <span>
          <input
            type="number"
            value={{this.leverage}}
            {{on "input" this.updateLeverage}}
          />x
        </span>
      </div>
    </div>
    <div class="grid">
      <div>
        <small>Unrealized PNL (USDT)</small>
        <div class="value negative">
          <input type="number" value={{this.pnl}} disabled />
        </div>
      </div>
      <div>
        <small>ROI</small>
        <div class="value negative">
          <input type="number" value={{this.roi}} disabled />
        </div>
      </div>
    </div>
  
    <!-- Row with Size, Margin, Margin Ratio -->
    <div class="row">
      <div>
        <small>Size (USDT)</small>
        <div class="highlight"><input
            type="number"
            value={{this.size}}
            {{on "input" this.updateSize}}
          />
        </div>
      </div>
      <div>
        <small>Margin (USDT)</small>
        <div class="highlight">
          <input
            type="number"
            value={{this.margin}}
            {{on "input" this.updateMargin}}
          />
        </div>
      </div>
      <div>
        <small>Margin Ratio</small>
        <div class="highlight positive">
          <input type="number" value={{this.marginRatio}} disabled />
        </div>
      </div>
    </div>
  
    <!-- Row with Entry Price, Mark Price, Liq. Price -->
    <div class="row">
      <div>
        <small>Entry Price (USDT)</small>
        <div class="highlight">
          <input
            type="number"
            value={{this.entryPrice}}
            {{on "input" this.updateEntryPrice}}
          />
        </div>
      </div>
      <div>
        <small>Mark Price (USDT)</small>
        <div class="highlight">
          <input
            type="number"
            value={{this.markPrice}}
            {{on "input" this.updateMarkPrice}}
          />
        </div>
      </div>
      <div>
        <small>Liq. Price (USDT)</small>
        <div class="highlight"><input
            type="number"
            value={{this.liquidationPrice}}
            {{on "input" this.updateLiquidationPrice}}
          />
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "qrC//7sd",
    "block": "[[[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"header\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"symbol\"],[12],[1,\"REEFUSDT\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"leverage\"],[12],[1,\"Isolated\\n      \"],[10,1],[12],[1,\"\\n        \"],[11,\"input\"],[16,2,[30,0,[\"leverage\"]]],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateLeverage\"]]],null],[12],[13],[1,\"x\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"grid\"],[12],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"Unrealized PNL (USDT)\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"value negative\"],[12],[1,\"\\n        \"],[10,\"input\"],[15,2,[30,0,[\"pnl\"]]],[14,\"disabled\",\"\"],[14,4,\"number\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"ROI\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"value negative\"],[12],[1,\"\\n        \"],[10,\"input\"],[15,2,[30,0,[\"roi\"]]],[14,\"disabled\",\"\"],[14,4,\"number\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[3,\" Row with Size, Margin, Margin Ratio \"],[1,\"\\n  \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"Size (USDT)\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"highlight\"],[12],[11,\"input\"],[16,2,[30,0,[\"size\"]]],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateSize\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"Margin (USDT)\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"highlight\"],[12],[1,\"\\n        \"],[11,\"input\"],[16,2,[30,0,[\"margin\"]]],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateMargin\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"Margin Ratio\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"highlight positive\"],[12],[1,\"\\n        \"],[10,\"input\"],[15,2,[30,0,[\"marginRatio\"]]],[14,\"disabled\",\"\"],[14,4,\"number\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[3,\" Row with Entry Price, Mark Price, Liq. Price \"],[1,\"\\n  \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"Entry Price (USDT)\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"highlight\"],[12],[1,\"\\n        \"],[11,\"input\"],[16,2,[30,0,[\"entryPrice\"]]],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateEntryPrice\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"Mark Price (USDT)\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"highlight\"],[12],[1,\"\\n        \"],[11,\"input\"],[16,2,[30,0,[\"markPrice\"]]],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateMarkPrice\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"small\"],[12],[1,\"Liq. Price (USDT)\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"highlight\"],[12],[11,\"input\"],[16,2,[30,0,[\"liquidationPrice\"]]],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateLiquidationPrice\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"span\",\"input\",\"on\",\"small\"]]",
    "moduleName": "binance-market/components/stock-calculator.hbs",
    "isStrictMode": false
  });
  let StockCalculatorComponent = _exports.default = (_class = class StockCalculatorComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "leverage", _descriptor, this);
      _initializerDefineProperty(this, "size", _descriptor2, this);
      // Size in USDT
      _initializerDefineProperty(this, "margin", _descriptor3, this);
      // Margin in USDT
      _initializerDefineProperty(this, "entryPrice", _descriptor4, this);
      _initializerDefineProperty(this, "markPrice", _descriptor5, this);
      _initializerDefineProperty(this, "liquidationPrice", _descriptor6, this);
    }
    // Computed properties for PNL, ROI, and Margin Ratio
    get pnl() {
      return (this.markPrice - this.entryPrice) * this.size * this.leverage;
    }
    get roi() {
      return (this.pnl / this.margin * 100).toFixed(2);
    }
    get marginRatio() {
      return (this.margin / (this.size * this.entryPrice) * 100).toFixed(2);
    }

    // Actions to update values based on user input
    updateLeverage(event) {
      this.leverage = parseFloat(event.target.value);
    }
    updateSize(event) {
      this.size = parseFloat(event.target.value);
    }
    updateMargin(event) {
      this.margin = parseFloat(event.target.value);
    }
    updateEntryPrice(event) {
      this.entryPrice = parseFloat(event.target.value);
    }
    updateMarkPrice(event) {
      this.markPrice = parseFloat(event.target.value);
    }
    updateLiquidationPrice(event) {
      this.liquidationPrice = parseFloat(event.target.value);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "leverage", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 26;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "size", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 42.487485;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "margin", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 7.52;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "entryPrice", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0.006536;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "markPrice", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0.006192;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "liquidationPrice", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0.005523;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateLeverage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateLeverage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateSize", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateMargin", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateMargin"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateEntryPrice", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateEntryPrice"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateMarkPrice", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateMarkPrice"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateLiquidationPrice", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateLiquidationPrice"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, StockCalculatorComponent);
});
;define("binance-market/components/stocks", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! <EntryDistribution />
  
  <LiquidationCalculator /> }}
  
  <StockCalculator />
  */
  {
    "id": "0mPP/ui5",
    "block": "[[[1,\"\\n\"],[8,[39,0],null,null,null]],[],false,[\"stock-calculator\"]]",
    "moduleName": "binance-market/components/stocks.hbs",
    "isStrictMode": false
  });
  class Stocks extends _component2.default {}
  _exports.default = Stocks;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Stocks);
});
;define("binance-market/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("binance-market/container-debug-adapter", ["exports", "ember-resolver/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _containerDebugAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/container-debug-adapter"eaimeta@70e063a35619d71f
});
;define("binance-market/data-adapter", ["exports", "@ember/array", "@ember/debug/data-adapter", "@ember/object/observers", "@ember/service", "@embroider/macros", "@ember-data/request-utils/string", "@ember-data/store"], function (_exports, _array, _dataAdapter, _observers, _service, _macros, _string, _store2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _InspectorDataAdapter;
  0; //eaimeta@70e063a35619d71f0,"@ember/array",0,"@ember/debug/data-adapter",0,"@ember/object/observers",0,"@ember/service",0,"@embroider/macros",0,"@ember-data/request-utils/string",0,"@ember-data/store"eaimeta@70e063a35619d71f
  function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
  function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  };

  // src/runtime.ts
  var runtime_exports = {};
  __export(runtime_exports, {
    c: () => decorateClass,
    f: () => decorateFieldV1,
    g: () => decorateFieldV2,
    i: () => initializeDeferredDecorator,
    m: () => decorateMethodV1,
    n: () => decorateMethodV2,
    p: () => decoratePOJO
  });
  var deferred = /* @__PURE__ */new WeakMap();
  function deferDecorator(proto, prop, desc) {
    let map = deferred.get(proto);
    if (!map) {
      map = /* @__PURE__ */new Map();
      deferred.set(proto, map);
    }
    map.set(prop, desc);
  }
  function findDeferredDecorator(target, prop) {
    let cursor = target.prototype;
    while (cursor) {
      let desc = deferred.get(cursor)?.get(prop);
      if (desc) {
        return desc;
      }
      cursor = cursor.prototype;
    }
  }
  function decorateFieldV1(target, prop, decorators, initializer) {
    return decorateFieldV2(target.prototype, prop, decorators, initializer);
  }
  function decorateFieldV2(prototype, prop, decorators, initializer) {
    let desc = {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    };
    if (initializer) {
      desc.initializer = initializer;
    }
    for (let decorator of decorators) {
      desc = decorator(prototype, prop, desc) || desc;
    }
    if (desc.initializer === void 0) {
      Object.defineProperty(prototype, prop, desc);
    } else {
      deferDecorator(prototype, prop, desc);
    }
  }
  function decorateMethodV1({
    prototype
  }, prop, decorators) {
    return decorateMethodV2(prototype, prop, decorators);
  }
  function decorateMethodV2(prototype, prop, decorators) {
    const origDesc = Object.getOwnPropertyDescriptor(prototype, prop);
    let desc = {
      ...origDesc
    };
    for (let decorator of decorators) {
      desc = decorator(prototype, prop, desc) || desc;
    }
    if (desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(prototype) : void 0;
      desc.initializer = void 0;
    }
    Object.defineProperty(prototype, prop, desc);
  }
  function initializeDeferredDecorator(target, prop) {
    let desc = findDeferredDecorator(target.constructor, prop);
    if (desc) {
      Object.defineProperty(target, prop, {
        enumerable: desc.enumerable,
        configurable: desc.configurable,
        writable: desc.writable,
        value: desc.initializer ? desc.initializer.call(target) : void 0
      });
    }
  }
  function decorateClass(target, decorators) {
    return decorators.reduce((accum, decorator) => decorator(accum) || accum, target);
  }
  function decoratePOJO(pojo, decorated) {
    for (let [type, prop, decorators] of decorated) {
      if (type === "field") {
        decoratePojoField(pojo, prop, decorators);
      } else {
        decorateMethodV2(pojo, prop, decorators);
      }
    }
    return pojo;
  }
  function decoratePojoField(pojo, prop, decorators) {
    let desc = {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: () => Object.getOwnPropertyDescriptor(pojo, prop)?.value
    };
    for (let decorator of decorators) {
      desc = decorator(pojo, prop, desc) || desc;
    }
    if (desc.initializer) {
      desc.value = desc.initializer.call(pojo);
      delete desc.initializer;
    }
    Object.defineProperty(pojo, prop, desc);
  }

  /**
    # Overview
  
    This package provides the `DataAdapter` which the [Ember Inspector](https://github.com/emberjs/ember-inspector)
    uses to subscribe and retrieve information for the `data` tab in the inspector.
  
    This package adds roughly .6 KB when minified and compressed to your application in production; however,
    you can opt out of shipping this addon in production via options in `ember-cli-build.js`
  
    ```js
    let app = new EmberApp(defaults, {
      emberData: {
        includeDataAdapterInProduction: false
      }
    });
    ```
  
    When using `ember-data` as a dependency of your app, the default is to ship the inspector support to production.
  
    When not using `ember-data` as a dependency but instead using EmberData via declaring specific `@ember-data/<package>`
    dependencies the default is to not ship to production.
  
    @module @ember-data/debug
    @main @ember-data/debug
  */

  const StoreTypesMap = new WeakMap();
  function debugInfo() {
    const relationships = {};
    const expensiveProperties = [];
    const identifier = (0, _store2.recordIdentifierFor)(this);
    const fields = this.store.schema.fields(identifier);
    const attrGroup = {
      name: 'Attributes',
      properties: ['id'],
      expand: true
    };
    const attributes = attrGroup.properties;
    const groups = [attrGroup];
    for (const field of fields.values()) {
      switch (field.kind) {
        case 'attribute':
          attributes.push(field.name);
          break;
        case 'belongsTo':
        case 'hasMany':
          {
            let properties = relationships[field.kind];
            if (properties === undefined) {
              properties = relationships[field.kind] = [];
              groups.push({
                name: field.kind,
                properties,
                expand: true
              });
            }
            properties.push(field.name);
            expensiveProperties.push(field.name);
            break;
          }
      }
    }
    groups.push({
      name: 'Flags',
      properties: ['isLoaded', 'hasDirtyAttributes', 'isSaving', 'isDeleted', 'isError', 'isNew', 'isValid'],
      expand: false
    });
    return {
      propertyInfo: {
        // include all other mixins / properties (not just the grouped ones)
        includeOtherProperties: true,
        groups: groups,
        // don't pre-calculate unless cached
        expensiveProperties: expensiveProperties
      }
    };
  }
  function installDebugInfo(ModelKlass) {
    /**
     Provides info about the model for debugging purposes
     by grouping the properties into more semantic groups.
      Meant to be used by debugging tools such as the Chrome Ember Extension.
      - Groups all attributes in "Attributes" group.
     - Groups all belongsTo relationships in "Belongs To" group.
     - Groups all hasMany relationships in "Has Many" group.
     - Groups all flags in "Flags" group.
     - Flags relationship CPs as expensive properties.
      @internal
     */
    ModelKlass.prototype._debugInfo = debugInfo;
  }
  function typesMapFor(store) {
    let typesMap = StoreTypesMap.get(store);
    if (typesMap === undefined) {
      typesMap = new Map();
      StoreTypesMap.set(store, typesMap);
    }
    return typesMap;
  }

  /**
    Implements `@ember/debug/data-adapter` with for EmberData
    integration with the ember-inspector.
  
    @class InspectorDataAdapter
    @extends DataAdapter
    @private
  */
  var _store = /*#__PURE__*/new WeakMap();
  class InspectorDataAdapter extends _dataAdapter.default {
    constructor(...args) {
      super(...args);
      _classPrivateFieldInitSpec(this, _store, (initializeDeferredDecorator(this, "store"), void 0));
    }
    /**
      Specifies how records can be filtered based on the state of the record
      Records returned will need to have a `filterValues`
      property with a key for every name in the returned array
       @method getFilters
      @private
      @return {Array} List of objects defining filters
       The object should have a `name` and `desc` property
    */
    getFilters() {
      return [{
        name: 'isNew',
        desc: 'New'
      }, {
        name: 'isModified',
        desc: 'Modified'
      }, {
        name: 'isClean',
        desc: 'Clean'
      }];
    }
    _nameToClass(type) {
      return this.store.modelFor(type);
    }

    /**
      Fetch the model types and observe them for changes.
      Maintains the list of model types without needing the Model package for detection.
       @method watchModelTypes
      @private
      @param {Function} typesAdded Callback to call to add types.
      Takes an array of objects containing wrapped types (returned from `wrapModelType`).
      @param {Function} typesUpdated Callback to call when a type has changed.
      Takes an array of objects containing wrapped types.
      @return {Function} Method to call to remove all observers
    */
    watchModelTypes(typesAdded, typesUpdated) {
      const {
        store
      } = this;
      const discoveredTypes = typesMapFor(store);
      const unsub = store.notifications.subscribe('resource', (identifier, notificationType) => {
        if (notificationType === 'added') {
          this.watchTypeIfUnseen(store, discoveredTypes, identifier.type, typesAdded, typesUpdated, _releaseMethods);
        }
      });
      const _releaseMethods = [() => {
        store.notifications.unsubscribe(unsub);
      }];
      Object.keys(store.identifierCache._cache.resourcesByType).forEach(type => {
        discoveredTypes.set(type, false);
      });

      // Add any models that were added during initialization of the app, before the inspector was opened
      discoveredTypes.forEach((_, type) => {
        this.watchTypeIfUnseen(store, discoveredTypes, type, typesAdded, typesUpdated, _releaseMethods);
      });
      const release = () => {
        _releaseMethods.forEach(fn => fn());
        // reset the list so the models can be added if the inspector is re-opened
        // the entries are set to false instead of removed, since the models still exist in the app
        // we just need the inspector to become aware of them
        discoveredTypes.forEach((value, key) => {
          discoveredTypes.set(key, false);
        });
        this.releaseMethods.removeObject(release);
      };
      this.releaseMethods.pushObject(release);
      return release;
    }

    /**
     * Loop over the discovered types and use the callbacks from watchModelTypes to notify
     * the consumer of this adapter about the mdoels.
     *
     * @method watchTypeIfUnseen
     * @param {store} store
     * @param {Map} discoveredTypes
     * @param {String} type
     * @param {Function} typesAdded
     * @param {Function} typesUpdated
     * @param {Array} releaseMethods
     * @private
     */
    watchTypeIfUnseen(store, discoveredTypes, type, typesAdded, typesUpdated, releaseMethods) {
      if (discoveredTypes.get(type) !== true) {
        const klass = store.modelFor(type);
        installDebugInfo(klass);
        const wrapped = this.wrapModelType(klass, type);
        releaseMethods.push(this.observeModelType(type, typesUpdated));
        typesAdded([wrapped]);
        discoveredTypes.set(type, true);
      }
    }

    /**
      Creates a human readable string used for column headers
       @method columnNameToDesc
      @private
      @param {String} name The attribute name
      @return {String} Human readable string based on the attribute name
    */
    columnNameToDesc(name) {
      return (0, _string.capitalize)((0, _string.underscore)(name).replace(/_/g, ' ').trim());
    }

    /**
      Get the columns for a given model type
       @method columnsForType
      @private
      @param {Model} typeClass
      @return {Array} An array of columns of the following format:
       name: {String} The name of the column
       desc: {String} Humanized description (what would show in a table column name)
    */
    columnsForType(typeClass) {
      const columns = [{
        name: 'id',
        desc: 'Id'
      }];
      let count = 0;
      typeClass.attributes.forEach((meta, name) => {
        if (count++ > this.attributeLimit) {
          return false;
        }
        const desc = this.columnNameToDesc(name);
        columns.push({
          name: name,
          desc: desc
        });
      });
      return columns;
    }

    /**
      Fetches all loaded records for a given type
       @method getRecords
      @private
      @param {Model} modelClass of the record
      @param {String} modelName of the record
      @return {Array} An array of Model records
       This array will be observed for changes,
       so it should update when new records are added/removed
    */
    getRecords(modelClass, modelName) {
      if (arguments.length < 2) {
        // Legacy Ember.js < 1.13 support
        const containerKey = modelClass._debugContainerKey;
        if (containerKey) {
          const match = containerKey.match(/model:(.*)/);
          if (match !== null) {
            modelName = match[1];
          }
        }
      }
      (0, _macros.macroCondition)((0, _macros.getGlobalConfig)().WarpDrive.env.DEBUG) ? (test => {
        if (!test) {
          throw new Error('Cannot find model name. Please upgrade to Ember.js >= 1.13 for Ember Inspector support');
        }
      })(!!modelName) : {};
      return this.store.peekAll(modelName);
    }

    /**
      Gets the values for each column
      This is the attribute values for a given record
       @method getRecordColumnValues
      @private
      @param {Model} record to get values from
      @return {Object} Keys should match column names defined by the model type
    */
    getRecordColumnValues(record) {
      let count = 0;
      const columnValues = {
        id: record.id
      };
      record.eachAttribute(key => {
        if (count++ > this.attributeLimit) {
          return false;
        }
        columnValues[key] = record[key];
      });
      return columnValues;
    }

    /**
      Returns keywords to match when searching records
       @method getRecordKeywords
      @private
      @param {Model} record
      @return {Array} Relevant keywords for search based on the record's attribute values
    */
    getRecordKeywords(record) {
      const keywords = [record.id];
      record.eachAttribute(key => {
        keywords.push(record[key]);
      });
      return (0, _array.A)(keywords);
    }

    /**
      Returns the values of filters defined by `getFilters`
      These reflect the state of the record
       @method getRecordFilterValues
      @private
      @param {Model} record
      @return {Object} The record state filter values
    */
    getRecordFilterValues(record) {
      return {
        isNew: record.isNew,
        isModified: record.hasDirtyAttributes && !record.isNew,
        isClean: !record.hasDirtyAttributes
      };
    }

    /**
      Returns a color that represents the record's state
      Possible colors: black, blue, green
       @method getRecordColor
      @private
      @param {Model} record
      @return {String} The record color
    */
    getRecordColor(record) {
      let color = 'black';
      if (record.isNew) {
        color = 'green';
      } else if (record.hasDirtyAttributes) {
        color = 'blue';
      }
      return color;
    }

    /**
      Observes all relevant properties and re-sends the wrapped record
      when a change occurs
       @method observeRecord
      @private
      @param {Model} record
      @param {Function} recordUpdated Callback used to notify changes
      @return {Function} The function to call to remove all observers
    */
    observeRecord(record, recordUpdated) {
      const releaseMethods = [];
      const keysToObserve = ['id', 'isNew', 'hasDirtyAttributes'];
      record.eachAttribute(key => keysToObserve.push(key));
      keysToObserve.forEach(key => {
        const handler = () => {
          recordUpdated(this.wrapRecord(record));
        };
        (0, _observers.addObserver)(record, key, handler);
        releaseMethods.push(function () {
          (0, _observers.removeObserver)(record, key, handler);
        });
      });
      const release = function () {
        releaseMethods.forEach(fn => fn());
      };
      return release;
    }
  }
  _InspectorDataAdapter = InspectorDataAdapter;
  decorateFieldV2(_InspectorDataAdapter.prototype, "store", [(0, _service.inject)('store')]);
  const dataAdapter = _exports.default = (0, _macros.macroCondition)((0, _macros.getGlobalConfig)().WarpDrive.includeDataAdapter) ? InspectorDataAdapter : null;
});
;define("binance-market/helpers/app-version", ["exports", "@ember/component/helper", "binance-market/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"binance-market/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("binance-market/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("binance-market/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "binance-market/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"binance-market/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("binance-market/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("binance-market/router", ["exports", "@ember/routing/router", "binance-market/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"binance-market/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("binance-market/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("binance-market/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("binance-market/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "BinanceMarket"}}
  
  {{outlet}}
  
  <Stocks />
  */
  {
    "id": "TlQ9cULt",
    "block": "[[[1,[28,[35,0],[\"BinanceMarket\"],null]],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\\n\"],[8,[39,3],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\",\"stocks\"]]",
    "moduleName": "binance-market/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("binance-market/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("binance-market/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("binance-market/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("binance-market/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;

;define('binance-market/config/environment', [], function() {
  var prefix = 'binance-market';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("binance-market/app")["default"].create({"name":"binance-market","version":"0.0.0+81cc4ba9"});
          }
        
//# sourceMappingURL=binance-market.map
