exports.createProduct =(req, res, next)=> {
    const name= req.body.name;
    const price = req.body.price   
    res.json({
        message: 'Add Product Success',
        data: [
            {
                id: 1,
                name: name,
                price: price
            }
        ]
    });
    next();
}

exports.getProducts =(req, res, next)=> {
    
    res.json({
        message: 'get products success',
        data: [
            {
                id: 1,
                name: `Playstation 5`,
                price: 899
            },
            {
                id: 2,
                name: `Xbox Series X`,
                price: 899
            }
        ]
    });
    next();
}


// exports.GetCustomer =(req, res, next)=> {
//     // request yg sering dipakai
//     // console.log(`url: ${req.originalUrl}`); 
//     // console.log(`method: ${req.method}`);
//     //response   
//     res.json({
//         message: 'Get Customer Success',
//         data: {
//             id: 1,
//             name: 'Hanendyo Indira', 
//             email: 'Hanendyo47@gmail.com'
//         }
//     });
//     next();
// }