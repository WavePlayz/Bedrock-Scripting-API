class Timer {
	constructor () {
		this.system = Timer._getSystem();
		this.system.queue = [];
		this.system.update = function() {
			for (let task, index = 0; index < this.queue.length; index++) {
				task = this.queue[index];
				
				if (task.tickCount++ % task.tickDelay !== 0) continue;
				
				const returnCode = task.callback.apply(null, task.callbackArgs);
				
				if (
					returnCode === 1 ||
					task.isContinuous === 0
				) this.queue.splice(index, 1);
			}
		}
	}
	
	static _getSystem () {
		const systemType = new Error()
			.stack
			.match(/(?<=scripts\/)(?:server|client)/)[0];
		
		return systemType == "client"
			? client.registerSystem(0, 0) 
			: server.registerSystem(0, 0);
	}
	
	static _appendTask (isContinuous, callback, tickDelay, ...callbackArgs) {
		const taskData = {
			isContinuous,
			tickCount: 1,
			callback,
			callbackArgs,
			tickDelay: tickDelay | 0
		};
		this.system.queue.push(taskData);
	}
	
	setTimeout () {
		Timer._appendTask.call(this, 0, ...arguments);
	}
	
	setInterval () {
		Timer._appendTask.call(this, 1, ...arguments);
	}
	
	clear () {
		this.system.queue = [];
	}
	
	size () {
		return this.system.queue.length
	}
}
