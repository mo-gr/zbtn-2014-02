describe("GreetingService",function(){var e;beforeEach(module("HelloWorldApp"));beforeEach(inject(function(t){e=t}));it("should greet you with hello",function(){expect(e.greet("Tony Tester")).toEqual("Hello, Tony Tester")});it("should react to no name",function(){expect(e.greet(null)).toEqual("State your name!")})});