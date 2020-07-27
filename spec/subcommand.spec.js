import suite        from './suite-generator.js';

// This seed spec gets us started on specifying our project. 
suite(['Version 0.1.0', 'Specs'], () => {
  // It has one spec test: this one
  test('has at least one spec test', () => {
    // Tautologically true.
    expect(true).toBe(true);
  });
});
