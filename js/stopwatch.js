var Stopwatch = (function() {
				var s;
				return {
					settings: {
						stop: 0,
						sw: document.querySelectorAll(".stopwatch")[0],
						mills: 0,
						secs: 0,
						mins: 0,
						i: 1,
						times: [" 0:00 "]
						 
					},
					init: function() {
						s = this.settings;
						setInterval(this.timer, 10);
					},
					clear: function() {
						s.i = 1,
						s.times = ["0:00"],
						s.results.innerHTML = s.clearButton;
					},
					lap: function() {
						if (s.i === 1) {
							s.results.innerHTML = s.clearButton;
						}
						s.times.push(("0" + s.mins).slice(-2) + ":"
							 				 + ("0" + s.secs).slice(-2) + ":"
											 + ("0" + s.mills).slice(-2));
						var diffTime = ("0" + Math.floor(s.times[s.i].split(":")[0]
												 - s.times[s.i-1].split(":")[0])).slice(-2)
												 + ":"
												 + ("0" + Math.floor(s.times[s.i].split(":")[1]
												 - s.times[s.i-1].split(":")[1])).slice(-2)
												 + ":"
												 + ("0" + (s.times[s.i].split(":")[2]
												 - s.times[s.i-1].split(":")[2])).slice(-2);
						s.results.innerHTML = s.results.innerHTML + "<tr><td>"
																+ s.times[s.i] + "</td><td>"
																+ diffTime + "</td></tr>";
						s.i++;
					},
					check: function() {
						 return s.secs;
						 
					},
					restart: function() {
						s.mills = 0,
						s.secs = 0,
						s.mins = 0;
						this.start();
						
					},
					start: function() {
						s.stop = 0;
					},
					stop: function() {
						s.stop = 1;
					},
					timer: function() {
						if (s.stop === 0) {
							if (s.mills === 100) {
								s.secs++;
								s.mills = 0;
							}
							if (s.secs === 60) {
								s.mins++;
								s.secs = 0;
							}
							s.sw.innerHTML =   ("" + s.mins).slice(-2) + ":"
								 						 + ("0" + s.secs).slice(-2) 
													 
							s.mills++;
						}
					}
				};
			})();
		 Stopwatch.init();