namespace UsingCsharpTests;

public class InterviewTests
{
    [TestCase("One", "enO")]
    [TestCase("Two", "owT")]
    [TestCase("", "")]
    [TestCase(" ", " ")]
    public void ReverseString_WhenCalled_ReturnsExpectedResult(string aString, string reversedString)
    {
        var result = Interview.ReverseString(aString);
        result.Should().Be(reversedString);
        Assert.That(result, Is.EqualTo(reversedString));
    }

    [TestCaseSource(nameof(GetMergeArrayTestCase))]
    public void MergeArrays((int[] arrayOne, int[] arrayTwo, int[] expectedArray) parameters)
    {
        var result = Interview.MergeArrays(parameters.arrayOne, parameters.arrayTwo);
        result.Should().BeEquivalentTo(parameters.expectedArray);
        Assert.That(result, Is.EqualTo(parameters.expectedArray));
    }

    private static IEnumerable<(int[], int[], int[])> GetMergeArrayTestCase()
    {
        yield return ([1, 2, 3], [3, 4, 5], [1, 2, 3, 4, 5]);
        yield return ([1, 2, 3], [], [1, 2, 3]);
        yield return ([1], [1, 1, 1, 1,], [1]);
        yield return ([], [1, 2, 3], [1, 2, 3]);
        yield return ([1, 2, 3, 4], [3, 4, 5], [1, 2, 3, 4, 5]);
        yield return ([1, 2, 3], [3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
    }
}