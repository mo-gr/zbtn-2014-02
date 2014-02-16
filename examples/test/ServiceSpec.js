describe('GreetingService', function() {

  var service;

  beforeEach(module('HelloWorldApp'));
  beforeEach(inject(function(GreetingService) {
    service = GreetingService;
  }));

  it('should greet you with hello', function() {
    expect(service.greet("Tony Tester")).toEqual('Hello, Tony Tester');
  });

  it('should react to no name', function() {
    expect(service.greet(null)).toEqual('State your name!');
  });

});
