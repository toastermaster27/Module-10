const intern = require('../lib/intern');

test('create intern obj', () => {
    const intern = new intern('Alice', 6, 'alice20@gmail.com', 'SWMU');
    expect(intern.school).toEqual(expect.any(String));
});

test('get employee school', () => {
    const intern = new intern('Alice', 6, 'alice20@gmail.com', 'SWMU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get employee role', () => {
    const intern = new intern('Alice', 6, 'alice20@gmail.com', 'SWMU');
    expect(intern.getRle()).toEqual("Intern");
});

