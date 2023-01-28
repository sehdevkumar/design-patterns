var ConcreteStrategyA = /** @class */ (function () {
    function ConcreteStrategyA() {
    }
    ConcreteStrategyA.prototype.execute = function () {
        console.log('Executing strategy A');
    };
    return ConcreteStrategyA;
}());
var ConcreteStrategyB = /** @class */ (function () {
    function ConcreteStrategyB() {
    }
    ConcreteStrategyB.prototype.execute = function () {
        console.log('Executing strategy B');
    };
    return ConcreteStrategyB;
}());
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.executeStrategy = function () {
        this.strategy.execute();
    };
    return Context;
}());
var context = new Context();
context.setStrategy(new ConcreteStrategyA());
context.executeStrategy(); // Output: "Executing strategy A"
context.setStrategy(new ConcreteStrategyB());
context.executeStrategy(); // Output: "Executing strategy B"
