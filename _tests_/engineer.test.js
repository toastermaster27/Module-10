const engineer = require('../lib/engineer');

test('create engineer obj', () => {
    const engineer = new engineer('Alice', 6, 'alice20@gmail.com', 'alice20');
    expect(engineer.github).toEqual(expect.any(String));
});

test('get github value', () => {
    const engineer = new engineer('Alice', 6, 'alice20@gmail.com', 'alice20');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get employee role', () => {
    const engineer = new engineer('Alice', 6, 'alice20@gmail.com', 'alice20');
    expect(engineer.getRole()).toEqual("Engineer");
});