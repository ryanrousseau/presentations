
var client = "Client";

var environment = "Environment";

if (Env.ScriptArgs.Count == 2)
{
	client = Env.ScriptArgs[0];
	environment = Env.ScriptArgs[1];
}

var dateTimeSalt = DateTime.Now.ToString();
var sha1 = System.Security.Cryptography.SHA1.Create();

var clientBytes = System.Text.Encoding.ASCII.GetBytes(client + dateTimeSalt);
var clientHash = Convert.ToBase64String(sha1.ComputeHash(clientBytes));

var environemntBytes = System.Text.Encoding.ASCII.GetBytes(environment + dateTimeSalt);
var environmentHash = Convert.ToBase64String(sha1.ComputeHash(environemntBytes));

var key = clientHash + environmentHash;

Console.WriteLine(key);
Console.WriteLine();