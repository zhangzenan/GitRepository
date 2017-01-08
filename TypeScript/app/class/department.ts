 /**
 * name
 */
abstract class Department {
    constructor(public name:string) {
        
   }

   printName():void{
       console.log('Department name:'+this.name);
   }

   abstract printMeeting():void;//必须在派生类中实现
}

class AccountingDepartment extends Department{
    constructor(){
        super('Accoungting and Auditing');
    }

    printMeeting():void{
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports():void{
        console.log('Generating accounting reports...');
    }
}

let department:Department;
department=new Department();// error: cannot create an instance of an abstract class
department=new AccountingDepartment("张三");
department.printName();
//department.printMeeting();
//department.generateReports();