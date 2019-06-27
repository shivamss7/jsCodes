//1st module
insert(roots, node) {
		if(roots.data > node.data) {
			if(roots.left == null)
				roots.left = node;
			else if(roots.right == null)
				roots.right = node;
			else {
				let pop = this.queue.pop();
				//console.log(pop);
				if(pop.left == null && pop.right == null)
					this.queue.addFirst(pop);
				this.insert(pop, node);
			}
		}
		else {
			let temp = roots.data;
			roots.data = node.data;
			node.data = temp;
			this.insert(roots, node);
		}
	}

//2nd module
insert(roots, node) {
		if(roots != null) {1
			if(roots.left == null && roots.right == null) {
				if(roots.data > node.data) {
					roots.left = node;
					roots.left.parent = roots;
				}
				else {
					let temp = roots.data;
					roots.data = node.data;
					node.data = temp;
					this.insert(roots, node);
				}
			}
			else if(roots.left != null && roots.right == null) {
				if(roots.data > node.data) {
					roots.right = node;
					roots.right.parent = roots;
				}
				else {
					let temp = roots.data;
					roots.data = node.data;
					node.data = temp;
					this.insert(roots, node);
				}
			}
			else {
				let pop = this.queue.pop();
					//console.log(pop);
					if(pop.left == null && pop.right == null)
						this.queue.addFirst(pop);
					this.insert(pop, node);
			}
		
		}	
	}