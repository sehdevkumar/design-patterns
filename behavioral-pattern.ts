interface Strategy {
  execute(): void
}

class ConcreteStrategyA implements Strategy {
  execute(): void {
    console.log('Executing strategy A')
  }
}

class ConcreteStrategyB implements Strategy {
  execute(): void {
    console.log('Executing strategy B')
  }
}

class Context {
  private strategy: Strategy

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy
  }

  executeStrategy(): void {
    this.strategy.execute()
  }
}

const context = new Context()
context.setStrategy(new ConcreteStrategyA())
context.executeStrategy() // Output: "Executing strategy A"
context.setStrategy(new ConcreteStrategyB())
context.executeStrategy() // Output: "Executing strategy B"
