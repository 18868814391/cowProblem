var sumClass = []; //总数
var alives = 1; //存活数量
var Cow = /** @class */ (function () {
    function Cow(age, alive, sex, haveBorned) {
        this.age = 0; //牛的年纪
        this.alive = true; //牛的死活
        this.sex = 0; //牛的性别
        this.haveBorned = 0; //已经生了几胎
        this.age = age;
        this.alive = alive;
        this.sex = sex;
        this.haveBorned = haveBorned;
    }
    Cow.prototype.pastYear = function () {
        if (this.age <= 70) { //牛的寿命为20
            this.age++;
            if (this.sex == 2) { //如果是母的每年生一胎
                this.haveChild();
            }
        }
        else if (this.age > 70 && this.alive) { //如果寿命到20了  就死亡
            this.alive = false;
            alives--; //总数-1
        }
    };
    Cow.prototype.haveChild = function () {
        if (this.age >= 15 && this.age < 45) { //牛在5~15岁之间可以生
            var sex = Math.random() >= 0.5 ? 1 : 2; //生母牛公牛概率相等
            this.haveBorned++; //生了一胎
            sumClass.push(new Cow(0, true, sex, 0));
            alives++; //总数+1
        }
    };
    return Cow;
}());
sumClass.push(new Cow(0, true, 2, 0)); //把cow放入数组，第一年放进一头 0岁 活着 母的 0胎
for (var y = 0; y < 30; y++) { //经过了20年
    sumClass.forEach(function (v, i, a) {
        v.pastYear();
    });
}
console.log('总计存活有', alives); //20年后还有几头牛活着
var totalDie = 0;
var aliveFemal = 0;
var aliveMale = 0;
console.log(sumClass);
sumClass.forEach(function (v, i, a) {
    if (v.alive == false) {
        totalDie++;
    }
    if (v.alive && v.sex == 2) {
        aliveFemal++;
    }
    if (v.alive && v.sex == 1) {
        aliveMale++;
    }
});
console.log('总计死亡了', totalDie);
console.log('总计存活母牛', aliveFemal);
console.log('总计存活公牛', aliveMale);
