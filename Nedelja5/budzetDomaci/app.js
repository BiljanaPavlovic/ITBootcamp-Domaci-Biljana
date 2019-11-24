let budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id,
		this.description = description,
		this.value = value,
		this.percentage = -1
	}

	Expense.prototype.calcPercentage = function(totalIncome) {
			if (totalIncome > 0){
			this.percentage = Math.round((this.value/totalIncome) * 100);
		} else {
			this.percentage = -2
		};
	};

	Expense.prototype.getPercentage = function() {
		return this.percentage;
	}

	var Income = function(id, description, value){
		this.id = id,
		this.description = description,
		this.value = value
	};

	var calculateTotalIncomeAndExpenses = (type) => {
		var sum = 0;
		data.items[type].forEach((cur) => {
			
			sum = sum + cur.value;
		});
		data.totals[type] = sum;
	}

	var data = {
		items: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		percentage: -1
	}

	return {
		addItem: function(type, des, val){
			var newItem, ID;

			// Give a unique ID to each element.
			if (data.items[type].length > 0){
				ID = data.items[type][data.items[type].length - 1].id + 1
			} else {
				ID = 0
			}

			// check the type of the item
			if (type === 'exp'){
				newItem = new Expense(ID, des, val)
			} else if (type === 'inc'){
				newItem = new Income(ID, des, val)
			}

			
			data.items[type].push(newItem);
			
			return newItem;
		},

		calculateBudget: () => {
		
			calculateTotalIncomeAndExpenses('inc');
			calculateTotalIncomeAndExpenses('exp');

			
			data.budget = data.totals.inc - data.totals.exp;

			// calculate the percentage
			if(data.totals.inc > 0){
				data.percentage = Math.round((data.totals.exp/data.totals.inc)*100);
			} else {
				data.percentage = -1;
			}
		},

		calculatePercentage: () => {
			
				data.items['exp'].forEach((current) => {
					current.calcPercentage(data.totals.inc);
				})
		},

		getThePercentage: () => {
			var allPerc = data.items['exp'].map((current) => {
				return current.getPercentage();
			});
			return allPerc;
		},

		getTheBudget: () => {
			return {
				budget: data.budget,
				percentage: data.percentage,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp
			}
		},

		deleteItem: (type, id) => {
			var ids, index;

			
			ids = data.items[type].map((current) => {
				return current.id 
			});

			
			index = ids.indexOf(id);

		
			if (index !== -1) {
				data.items[type].splice(index, 1)
			}
		},

		testing: function() {
			console.log(data)
		}
	}

})();

let UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputbtn: '.add__btn',
		incomeList: '.income__list',
		expensesList: '.expenses__list',
		budgetValue: '.budget__value',
		budgetIncome: '.budget__income--value',
		budgetExpenses: '.budget__expenses--value',
		budgetExpensesPerct: '.budget__expenses--percentage',
		container: '.container',
		percentage: '.item__percentage',
		date: '.budget__title--month'
	}

	var formatNumber = function(number, type) {
			var num,numSplit, int, dec;

			num = Math.abs(number);
			num = num.toFixed(2);

			numSplit = num.split('.');
			int = numSplit[0];
			dec = numSplit[1];

			if(int.length > 3){
				int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
			}

			return (type === 'exp' ? '-' : '+') + ' ' + int + '.' +dec;
	};

var nodeListForEach = (list, callback) => {
		for (var i = 0; i<list.length; i++){
			callback(list[i], i);
		}
	};

	return {
		getInput: () => {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
			}
		},

		addListItem: function(obj, type) {
			var html, element, newHTML;

			
			if (type === 'inc'){
				element = DOMstrings.incomeList
				html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			} else if (type === 'exp'){
				element = DOMstrings.expensesList
				html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			}

			
			newHTML = html.replace('%id%', obj.id) // since it is a stirng,
			newHTML = newHTML.replace('%description%', obj.description)
			newHTML = newHTML.replace('%value%', formatNumber(obj.value, type))
			if(type === 'exp'){
				newHTML = newHTML.replace('%percentage%', obj.percentage)
			}

			
			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML)

		},

		clearFields: () => {
			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

			fieldsArr = Array.prototype.slice.call(fields) 

		
			fieldsArr.forEach((current) => {
				current.value = "";
			})

			
			fieldsArr[0].focus();

		},

		updateBudgetUI: (budget) => {
			var type;
			budget.budget > 0 ? type = 'inc' : type = 'exp';
			document.querySelector(DOMstrings.budgetValue).textContent = formatNumber(budget.budget, type);
			document.querySelector(DOMstrings.budgetIncome).textContent = formatNumber(budget.totalInc, 'inc');
			document.querySelector(DOMstrings.budgetExpenses).textContent = formatNumber(budget.totalExp, 'exp');

			if (budget.percentage > 0){
				document.querySelector(DOMstrings.budgetExpensesPerct).textContent = budget.percentage + '%';
			} else {
				document.querySelector(DOMstrings.budgetExpensesPerct).textContent = '---';
				}

		},

		displayPercentages: (percentage) => {
			var fields = document.querySelectorAll(DOMstrings.percentage);

			nodeListForEach(fields, (current, index) => {
				if (percentage[index] > 0){
					current.textContent = percentage[index] + '%';
				}else {
					current.textContent = '---';
				}
			})

		},

		deleteListItem: (selectorID) => {
			var el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},

		displayDate: () => {
			var now, year, month, monthNames;

			now = new Date();
			month = now.getMonth();
			year = now.getFullYear();
			monthNames = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust',
										'Septembar', 'Oktobar', 'Novembar', 'Decembar'];

			document.querySelector(DOMstrings.date).textContent = monthNames[month] + ' ' + year ;
		},

		changed: () => {
			var fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' +
																	DOMstrings.inputValue);
			nodeListForEach(fields, (current) => {
				current.classList.toggle('red-focus');
			});

			document.querySelector(DOMstrings.inputbtn).classList.toggle('red')

		},

		getDOMStrings: () => {
			return DOMstrings
		}
	}

})();

let controller = (function(budgetCtrl, uiCtrl) {

	var setupEventListeners = () => {

		var DOM = uiCtrl.getDOMStrings();

		document.querySelector(DOM.inputbtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', (event) => {
			if (event.keycode === 13 || event.which == 13){ 
				ctrlAddItem();
			}
		});

		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

		document.querySelector(DOM.inputType).addEventListener('change', uiCtrl.changed)

	}

	var updateBudget = () => {
		
		budgetCtrl.calculateBudget();
		
		var budget = budgetCtrl.getTheBudget();

		
		uiCtrl.updateBudgetUI(budget)
	}

	var updatePercentage = () => {

		
		budgetCtrl.calculatePercentage();
		
		var per = budgetCtrl.getThePercentage();
		
		uiCtrl.displayPercentages(per);
	}

	var ctrlAddItem = () => {
		
			var input = uiCtrl.getInput()
			console.log(input)

			if (input.description !== "" && !isNaN(input.value) && input.value > 0){
				
					var newItem = budgetCtrl.addItem(input.type, input.description, input.value)
				
					uiCtrl.addListItem(newItem, input.type)
				
					uiCtrl.clearFields();
				
					updateBudget();
				
					updatePercentage();
			}
	}

	var ctrlDeleteItem = (event) => {
		var itemID, splitID, type, ID;

		
		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
		splitID = itemID.split('-');
		type = splitID[0];
		ID = parseInt(splitID [1]);
		console.log(itemID)
		if (itemID) {
			
			budgetCtrl.deleteItem(type, ID);
			
			uiCtrl.deleteListItem(itemID);
			
			updateBudget();
			
			updatePercentage();
		}
	}

	return {
		init: () => {
			setupEventListeners();
			uiCtrl.displayDate();
			uiCtrl.updateBudgetUI({
				budget: 0,
				percentage: -1,
				totalInc: 0,
				totalExp: 0
			})
		}
	}

})(budgetController, UIController);


controller.init();
