
Console.WriteLine("Hello .NET Unboxed!");

// declare variables
var message = "Thanks for coming to my talk";

Console.WriteLine(message);

// declare functions
void WriteLine(string message)
{
	Console.WriteLine(message);
}

WriteLine("Woot");

// use lambdas 
Action<string> WL = (s) => Console.WriteLine(s);

WL("Neat");