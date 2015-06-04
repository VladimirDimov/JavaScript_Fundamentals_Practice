var test1 = ['+++login=+student&password=student'];
var test2 = [
'field=value1&field=value2&field=value3',
'http://example.com/over/there?name=ferret'];
var test3 = [
'foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'];

function solver(args){
	var result = [];
	for(var i in args){
		var curline = args[i];
		curline = curline.replace(/\+|%20/g, ' ');
		curline = curline.split(/&|\?/).filter(Boolean);
		for(var j in curline){
			curline[j] = curline[j].trim();			
		}
		curline = curline.filter(function(obj){if(obj.indexOf('=') != -1) return true;});
		args[i] = curline;
		var curobj = {params:{}};
		curobj['toString'] = function(){
			var result = '';
			for(var i in this.params){
				result += i + '=[' + this.params[i].join(', ') + ']';
			}
			return result;
		}

		for(var j in curline){			
			var curcommand = curline[j].split('=');
			
			for(var k in curcommand){
				curcommand[k] = curcommand[k].trim();
				curcommand[k] = curcommand[k].replace(/\s+/, ' ');
			}

			if (curobj['params'][curcommand[0]]) {
				curobj['params'][curcommand[0]].push(curcommand[1])
			}else{
				curobj['params'][curcommand[0]] = [curcommand[1]];
			};			
		}

		result.push(curobj);
	}

	for(var i in result){
		console.log(result[i].toString());
	}
	debugger;
}

solver(test3);