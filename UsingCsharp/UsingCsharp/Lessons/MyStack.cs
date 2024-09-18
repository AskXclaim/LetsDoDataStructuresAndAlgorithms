namespace UsingCsharp.Lessons;

public class MyStack<T>
{
    private T[] _data;
    private int _length = 0;

    public MyStack(int size)
    {
        if (size <= 0) throw new ArgumentException($"{nameof(size)} has to be greater zero");
        _data = new T[size];
    }

    public void Push(T value)
    {
        _data[_length] = value;
        _length++;
    }

    public T Pop()
    {
        if (_length == 0) throw new InvalidOperationException("No values available to Pop");

        var result = _data[_length - 1];
        _length--;

        return result;
    }

    public T Peek()
    {
        if (_length == 0) throw new InvalidOperationException("No values available to show");
        
        return _data[_length - 1];
    }
}