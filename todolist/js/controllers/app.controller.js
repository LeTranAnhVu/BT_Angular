app.controller('ToDoList',function($scope){
    let that = $scope;
    that.title = 'TO DO LIST';
    that.name = 'le tran anh vu'
    that.list = [
        'quét nhà',
        'rửa chén',
        'giắt đồ',
        'nấu cơm',
        'tắm',
    ];
    that.addStuff= function(){
        if(that.newStuff){
            that.list.push(that.newStuff);
        }
        console.log('ss:', this==that)
    }

});



app.controller('LangVoting',function($scope){
    let scope = $scope;
    scope.languages = [
        {name: 'C#', likes: 0, dislikes: 0},
        {name: 'javascript', likes: 0, dislikes: 0},
        {name: 'python', likes: 0, dislikes: 0}
    ];
    scope.upLike = function(id){
        scope.languages[id].likes++;
    }
    scope.upDislike = function(id){
        scope.languages[id].dislikes++;
    }

})



app.controller('BangLuong',function($scope){
    let scope = $scope;
    scope.newEmp ={};

    scope.employees = [
        {name: 'hải' , dob: new Date('10/31/1995'), salary: 15000000, gender: 'm'},
        {name: 'linh' , dob: new Date('10/31/1994'), salary: 153000000, gender: 'f'},
        {name: 'trang' , dob: new Date('10/31/1935'), salary: 18000000, gender: 'f'},
        {name: 'nguyên' , dob: new Date('10/31/1990'), salary: 1500000, gender: 'x'},
    ];

    scope.addNewEmp = function(){
        console.log('jell');
        let newEmp = scope.newEmp
        console.log(newEmp)
        if(newEmp){
            scope.employees.push({
                name: newEmp.name,
                dob: newEmp.dob,
                salary: parseInt(newEmp.salary),
                gender: newEmp.gender,
            })
        }
    }
});

app.filter('gender',function(){
    return function(value,lang){
        let female = 'female';
        let male = 'male';
        let other = 'unknown';
        if(lang =='vn'){
            female = 'nữ';
            male = 'nam';
            other = 'không xác định';
        }else if(lang =='us' || lang=='uk'){
            // default
        }
        if(value == 'f'){
            return female;
        } else if(value == 'm'){
            return male;
        } else{
            return other;
        }
        
    }
})


app.component('phoneList', {
    template:
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });