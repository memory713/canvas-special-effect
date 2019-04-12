var app = new Vue({
    el: '#app',
    data: {
        tab:[{name:'我要结汇',choose:true},{name:'我要购汇',choose:false},{name:'我要外汇买卖',choose:false}],
        listTop:['货币对','结汇价格','当日涨幅'],
        list:[{name:'HKD/CNY',time:"09:29:39",price:['7.58','15','3'],zhang:'--'},
        {name:'EUR/CNY',time:"09:29:39",price:['7.581','53',''],zhang:'--'},
        {name:'JPY/CNY',time:"09:29:39",price:['0.581','53',''],zhang:'--'},
        {name:'HKD/CNY',time:"09:29:39",price:['0.581','53',''],zhang:'--'},
        {name:'HKD/CNY',time:"09:29:39",price:['0.581','53',''],zhang:'--'},
        {name:'HKD/CNY',time:"09:29:39",price:['7.581','53',''],zhang:'--'},]
    },
    methods:{
        chooseTab(index){
            for (var i = 0; i < this.tab.length; i++) {
                this.tab[i].choose = false
            }
            this.tab[index].choose = true
            /*赋值*/
            if(index == 0){
                this.listTop=['货币对','结汇价格','当日涨幅'];
            }else if(index == 1){
                this.listTop=['货币对','购汇价格','当日涨幅'];
            }else{
                this.listTop=['货币对','卖出价','买入价'];
            }
            
        },
        choose(item,index){
            console.log(index,item)
        }
    }
})