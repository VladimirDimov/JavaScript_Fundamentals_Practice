function solution(n){
	r = 2*(2*n-1)/(n+1);
	if(n>3){
		return r*solution-1);
}
return r;
}

console.log(solution(7));