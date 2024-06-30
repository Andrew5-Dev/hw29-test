const ageClassification = require('../ageClassification(num)');

test('ageClassification', () => {
    expect(ageClassification(3)).toBe('Дитинство');
    expect(ageClassification(23)).toBe('Дитинство');
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(39)).toBe('Молодість');
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(60)).toBe('Зрілість');
    expect(ageClassification(65.1)).toBe('Старість');
    expect(ageClassification(73)).toBe('Старість');
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(89)).toBe('Довголіття');
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(120)).toBe('Рекорд');
    expect(ageClassification(0)).toBe(null);
    expect(ageClassification(-1)).toBe(null);
});