namespace UsingCsharpTests;

public class NemoTests
{
    [TestCaseSource(nameof(GetParametersForIsNemoPresentTestCases))]
    public void IsNemoPresent_WhenCalled_ReturnsExpectedResult(string[] words, bool expectedResult)
    {
        var result = Nemo.IsNemoPresent(words);
        result.Should().Be(expectedResult);
        Assert.That(result, Is.EqualTo(expectedResult));
    }

    private static IEnumerable<object> GetParametersForIsNemoPresentTestCases()
    {
        return new[]
        {
            [new[] { "One", "Two", "Three" }, false],
            [new[] { "One", "Two", "nemo" }, true],
            [new[] { "One", "Nemo", "Three" }, true],
            [new[] { "Nemo", "Two", "Three" }, true],
            new object[] { new[] { "Nemo", "nemo", "Three" }, true }
        };
    }
}