var test1 = [
'  right,   down, left , up',
'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
'tr{&}yrty, zxx{*}{!}{!}zxc, mncvnvcn, popipoip',
'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'];

var test2 = [
'up, right, left, down',
'as{!}xnk'];

function solver(args){
	var position = [0, 0];
	var jumps = args[0].split(',').map(function(item){return item.trim()});
	var grid = args.slice(1);
	var wallHits = 0;
	var bag = { amper:0, star:0, sharp:0, exclam:0, wallHits: 0};
	var visited = [];
	for(var i in grid){
		grid[i] = grid[i].split(', ');
	}

	jumps.forEach(function(element, index){
		switch(element){
			case 'right':
			if (position[1] == grid[position[0]].length - 1) {
				bag.wallHits += 1;
				break;
			};
			position[1] += 1;
			checkPosition(position[0], position[1]);
			break;
			case 'left':
			if (position[1] == 0) {
				bag.wallHits += 1;
				break;
			};
			position[1] -= 1;
			checkPosition(position[0], position[1]);
			break;
			case 'up':
			if (position[0] == 0) {
				bag.wallHits += 1;
				break;
			};
			position[0] -= 1;	
			checkPosition(position[0], position[1]);		
			break;
			case 'down':
			if (position[0] == grid.length - 1) {
				bag.wallHits += 1;
				break;
			};
			position[0] += 1;
			checkPosition(position[0], position[1]);
			break;
			default:
			statements_def
			break;
		}
		// TODO Check position;
	});

	var result = JSON.stringify(bag);
	result = result.replace(/amper/g, '&')
	.replace(/star/g, '*')
	.replace(/sharp/g, '#')
	.replace(/exclam/g, '!')
	.replace(/wallHits/g, 'wall hits');
	console.log(result);

	if (visited.length != 0) {
		console.log(visited.join('|'));
	}else{
		console.log('no');
	};

	debugger;

	function checkPosition(row, col){
		var cell = grid[row][col];
		var vegetables = cell.match(/{[&#!*]}/g);
		visited.push(grid[row][col].replace(/{[&#!*]}/g, '@'));
		if (vegetables) {			
			eat(vegetables);
		};		
	}

	function eat(vegs){
		vegs.forEach(function(element, index){
			var curveg = element.replace(/\s+/, '')
			switch(curveg){
				case '{&}':
				bag.amper += 1;
				break;
				case '{*}':
				bag.star += 1;
				break;
				case '{#}':
				bag.sharp += 1;
				break;
				case '{!}':
				bag.exclam += 1;
				default:				
				break;
			}
		});
	}
}

solver(test1);