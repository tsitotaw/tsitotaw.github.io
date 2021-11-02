let accountInfoList = [];
let account = (function() {
    
    class Account {
        constructor(name, deposit){
            this.name = name;
            this.deposit = deposit;
        }
    }

    function displayAccountDetail() {
        document.getElementById("list").value = "";
        accountInfoList.forEach(acc => {
            document.getElementById("list").value += "Account name: " + acc.name + " Balance: " + acc.deposit + "\n";
        });
    }

    function resetText(){
        document.getElementById("name").value = '';
        document.getElementById("deposit").value='';
    }
    return {
        create: function() {
            let name = document.getElementById("name").value;
            let deposit = document.getElementById("deposit").value;
            if (name.trim() != "" && deposit > 0) {
                let newAccount = new Account(name, deposit);
                accountInfoList.push(newAccount);
                displayAccountDetail();
                resetText();
            }
        }
    };
})();