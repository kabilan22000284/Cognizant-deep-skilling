# Cognizant-deep-skilling
## HANDS ON EXERCISE 1
### PROGRAM
```
using System;
public class Singleton
{
    private static Singleton _instance;
    private Singleton()
    {
        Console.WriteLine("Singleton Created");
    }

    public static Singleton GetInstance()
    {
        if (_instance == null)
        {
            _instance = new Singleton();
        }
        return _instance;
    }

    public void ShowMessage()
    {
        Console.WriteLine("Hello");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Singleton s1 = Singleton.GetInstance();
        Singleton s2 = Singleton.GetInstance();

        s1.ShowMessage();
        Console.WriteLine(Object.ReferenceEquals(s1, s2));
    }
}
```
### OUTPUT
![image](https://github.com/user-attachments/assets/b9b10e9c-7031-40de-9eab-b071919d9e6a)


