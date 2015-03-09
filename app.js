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

		self.displayLib = function () {
			self.libShow = true;
		}

		self.questions = false;

		self.female = true;

		self.libShow = false;

		self.sex = true;

		self.respond = function(stuff) {
			self.questions = true;
			self.female = stuff;
			self.sex = false;
		}

		self.displayLib = function() {
			self.libShow = true;
			self.questions = false;
		}

		self.startOver = function() {
			self.sex = true;
			self.libShow = false;
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
		}
	})