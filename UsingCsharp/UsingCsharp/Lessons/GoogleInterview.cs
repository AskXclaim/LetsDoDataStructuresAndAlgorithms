namespace UsingCsharp.Lessons;

public class GoogleInterview
{
    public static bool DoesContainMatch(int[] arrayOne, int[] arrayTwo)
    {
        var uniqueSet = new HashSet<int>();
        foreach (var number in arrayOne)
        {
            uniqueSet.Add(number);
        }

        return arrayTwo.Any(t => uniqueSet.Contains(t));
    }
}