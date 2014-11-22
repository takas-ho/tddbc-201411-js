
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
	return this.tasks[index];
};

module.exports = Todo;
