
function Todo() {
	this.tasks = [];
}

Todo.prototype.addTask = function (task) {
	this.tasks.push(task);
};

Todo.prototype.count = function () {
	return this.tasks.length;
};

module.exports = Todo;
