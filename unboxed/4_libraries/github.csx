
var library = new OctokitLibrary();
var client = library.Create("OctokitLibrary");
var userTask = client.User.Get("ryanrousseau");
var user = userTask.Result;

Console.WriteLine(user.Name);

var eventsTask = client.Activity.Events.GetAllUserPerformed("ryanrousseau");
var events = eventsTask.Result;

foreach (var userEvent in events)
{
	Console.WriteLine(userEvent.Type);
}