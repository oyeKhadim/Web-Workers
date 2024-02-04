let sum = 0;
onmessage = function (message) {
	sum = 0;
	// console.log(message.data);
	for (let i = 1; i < 1000000000; i++) {
		sum += i;
	}
	self.postMessage(sum);
};
