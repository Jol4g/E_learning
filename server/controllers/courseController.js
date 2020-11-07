
exports.getCourses = (req, res) => {
    const customers = [
        {id:1,title:'C Programming',duree:20,completed:true,to:'cprogramming'},
        {id:2,title:'Web dev',duree:15,completed:true,to:'webdev'},
        {id:3,title:'Algorithm',duree:30,completed:false,to:'algorithm'},
        {id:4,title:'Data science',duree:20,completed:true,to:'datascience'},
    ];
    res.json(customers)
    }