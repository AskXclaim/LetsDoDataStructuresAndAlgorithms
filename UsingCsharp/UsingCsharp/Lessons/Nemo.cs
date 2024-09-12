namespace UsingCsharp.Lessons;

public class Nemo
{
    public static bool IsNemoPresent(string[] words)
    {
        foreach (var word in words)
        {
            if (word.Equals("nemo", StringComparison.CurrentCultureIgnoreCase)) return true;
        }

        return false;
    }
}