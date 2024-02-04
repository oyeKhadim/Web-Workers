let p = document.getElementById("paragraph");
let p1 = document.getElementById("1");
let p2 = document.getElementById("2");
let count = 0;
p.innerText = "The count is : " + count;

function increaseCount() {
	count += 1;
	p.innerText = "The count is : " + count;
}
let w = new Worker("worker.js");
function calculateSum() {
	w.postMessage("start");

	p1.innerText = "Loading...";
}

w.onmessage = function (data) {
    // console.log(data);
	p1.innerText = "Total sum is : " + data.data;
};
function calculateSumWithoutWorkers(){

    p2.innerText="Loading...";
    sum = 0;
	// console.log(message.data);
	for (let i = 1; i < 1000000000; i++) {
        sum += i;
	}
    p2.innerText="The Sum is "+ sum;
}