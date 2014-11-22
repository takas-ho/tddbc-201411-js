
function Todo() {
	this.tasks = [];
}

Todo.prototype.addTask = function (task) {
	this.tasks.push(task);
};

Todo.prototype.count = function () {
	return this.tasks.length;
};

Todo.prototype.getTask = function (index) {
	if ( index < 0 || this.count() <= index) {
		throw new Error('OutOfRange...');
	}
	return this.tasks[index];
};



module.exports = Todo;
