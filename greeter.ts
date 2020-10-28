let sumClass=[] //总数
let alives=1  //存活数量

class Cow {  //牛的类
  age:number=0  //牛的年纪
  alive:boolean=true  //牛的死活
  sex:number=0  //牛的性别
  haveBorned:number=0//已经生了几胎
  constructor(age:number,alive:boolean,sex:number,haveBorned:number){
    this.age=age
    this.alive=alive
    this.sex=sex
    this.haveBorned=haveBorned
  }
  pastYear(){  //经过一年
    if(this.age<=70){  //牛的寿命为70
      this.age++
      if(this.sex==2){  //如果是母的每年生一胎
        this.haveChild()
      }
    }else if(this.age>70&&this.alive){  //如果寿命到70了  就死亡
      this.alive=false
      alives--  //总数-1
    }
  }
  haveChild(){
    if(this.age>=15&&this.age<45){  //牛在15~45岁之间可以生
      let sex=Math.random()>=0.5?1:2  //生母牛公牛概率相等
      this.haveBorned++//生了一胎
      sumClass.push(new Cow(0,true,sex,0))
      alives++  //总数+1
    }
  }
}

sumClass.push(new Cow(0,true,2,0))  //把cow放入数组，第一年放进一头 0岁 活着 母的 0胎
for(let y=0;y<30;y++){  //经过了30年
  sumClass.forEach((v,i,a)=>{  //每个类都执行过一年
    v.pastYear()
  })
}
console.log('总计存活有',alives)  //30年后还有几头牛活着
let totalDie=0
let aliveFemal=0
let aliveMale=0
console.log(sumClass)
sumClass.forEach((v,i,a)=>{
  if(v.alive==false){
    totalDie++
  }
  if(v.alive&&v.sex==2){
    aliveFemal++
  }
  if(v.alive&&v.sex==1){
    aliveMale++
  }  
})
console.log('总计死亡了',totalDie)
console.log('总计存活母牛',aliveFemal)
console.log('总计存活公牛',aliveMale)


