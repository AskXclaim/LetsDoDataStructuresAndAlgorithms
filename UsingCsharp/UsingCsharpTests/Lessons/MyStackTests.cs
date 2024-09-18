namespace UsingCsharpTests.Lessons;

[TestFixture]
public class MyStackTests
{
    [TestCase(-1)]
    [TestCase(0)]
    public void MyStack_WhenInstansiatedWithZeroOrLessNumber_ThrowsArgumentException(int size)
    {
        Action act = () => new MyStack<int>(size);
        act.Should().Throw<ArgumentException>();

        Assert.Throws<ArgumentException>(() => new MyStack<int>(size));
    }

    [TestCase(0)]
    [TestCase(1)]
    [TestCase(2)]
    public void Push_WhenCalledWithValidValue_AddsValue(int value)
    {
        var sut = new MyStack<int>(3);
        sut.Push(value);
        var result = sut.Pop();
        result.Should().Be(value);
        Assert.That(result, Is.EqualTo(value));
    }

    [TestCase(2, 2)]
    [TestCase(3, 3)]
    public void Push_WhenCalledMultipleTimesWithValidValues_AddsValuesCorrectly(int size, int value)
    {
        var sut = new MyStack<int>(size);
        for (var i = 1; i <= value; i++) sut.Push(i);

        for (var i = value; i > 0; i--)
        {
            var result = sut.Pop();
            result.Should().Be(i);
            Assert.That(result, Is.EqualTo(i));
        }
    }
    
    [TestCase( 3)]
    public void Peek_WhenCalledWithValuesPresent_ReturnsNextValueToPop(int sizeValue)
    {
        var sut = new MyStack<int>(sizeValue);
        for (var i = 1; i <= sizeValue; i++) sut.Push(i);

        for (var i = sizeValue; i > 0; i--)
        {
            var result = sut.Peek();
            result.Should().Be(i);
            Assert.That(result, Is.EqualTo(i));
            sut.Pop();
        }
    }
}