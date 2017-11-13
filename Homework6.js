const spaces = function(x)
{
	if(x <= 0) 
	{
		return'';
	}
	else {
		return ' ' + spaces(x - 1);
	}
};

const sign = function(y, character) {
	if(y <= 0)
	{
		return'';
	}
	else {
		return character + sign(y - 1, character);
	}
};

const diamond = function(height, string)
{
	const helper = function(height, num, string, space)
	{
		if(height <= 0)
		{
			return'';
		}
		console.log(spaces(space) + sign(num, string));
		return helper(height - 1, num - 2, string, space + 1);
	}
	const numberOfStrings = (2 * height) - 1
	return helper(height, numberOfStrings, string, 0);
};

































const spaces = function(x)
{
	if(x <= 0) 
	{
		return'';
	}
	else {
		return ' ' + spaces(x - 1);
	}
};

const sign = function(y, character) {
	if(y <= 0)
	{
		return'';
	}
	else {
		return character + sign(y - 1, character);
	}
};

const diamond = function(height, string)
{
	const helper = function(height, num, string, space)
	{
		if(height <= 0)
		{
			return'';
		}
		console.log(spaces(space) + sign(num, string));
		return helper(height - 1, num + 2, string, space - 1);
	}
	const numOfSpaces = height - 1;
	return helper(height, 1, string, numOfSpaces);
};
