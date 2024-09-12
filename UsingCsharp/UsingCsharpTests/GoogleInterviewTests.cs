namespace UsingCSharpTests;

[TestFixture]
public class GoogleInterviewTests
{
    [TestCaseSource(nameof(GetDoesContainMatchTestCase))]
    public void DoesContainMatch_WhenCalledCorrectly_ReturnsExpectedResult((int[] arrayOne, int[] arrayTwo,
        bool expectedResult) parameters)
    {
        var result = GoogleInterview.DoesContainMatch(parameters.arrayOne, parameters.arrayTwo);
        result.Should().Be(parameters.expectedResult);
        Assert.That(result, Is.EqualTo(parameters.expectedResult));
    }

    private static IEnumerable<(int[], int[], bool)> GetDoesContainMatchTestCase()
    {
        yield return ([1, 2, 3, 4], [1, 2, 3, 4], true);
        yield return ([1, 1, 3, 4], [1, 2, 5, 6], true);
        yield return ([1, 2, 3, 4], [6, 7, 8, 9], false);
        yield return ([], [], false);
    }
}