var logic = angular.module('Logic', []);

angular.module('Logic').controller('GetLogicOut', function() {
		var self = this;

		self.inputs = {
			name: "",
			job_title: "",
			tedious_task: "",
			dirty_task: "",
			celebrity: "",
			useless_skill: "",
			adjective: "",
			obnoxious_celebrity: "",
			huge_number: "",
		}

		self.questions = false;

		self.female = true;

		self.respond = function(stuff) {
			self.questions = true;
			self.female = stuff;
		}

		// self.conditions = function() {
		// 	if (!self.inputs.name) {
		// 		self.inputs.name = "__________";
		// 	}
		// 	if (!self.inputs.job_title) {
		// 		self.inputs.job_title = "__________";
		// 	}
		// 	if (!self.inputs.tedious_task) {
		// 		self.inputs.tedious_task = "__________";
		// 	}
		// 	if (!self.inputs.dirty_task) {
		// 		self.inputs.dirty_task = "__________";
		// 	}
		// 	if (!self.inputs.celebrity) {
		// 		self.inputs.celebrity = "__________";
		// 	}
		// 	if (!self.inputs.useless_skill) {
		// 		self.inputs.useless_skill = "__________";
		// 	}
		// 	if (!self.inputs.adjective) {
		// 		self.inputs.adjective = "__________";
		// 	}
		// 	if (!self.inputs.obnoxious_celebrity) {
		// 		self.inputs.obnoxious_celebrity = "__________";
		// 	}
		// 	if (!self.inputs.huge_number) {
		// 		self.inputs.huge_number = "__________";
		// 	}
		// 	console.log(self.inputs.name);
		// }
	})