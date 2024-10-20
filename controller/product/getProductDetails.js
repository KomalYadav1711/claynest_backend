const productModel = require("../../Models/productModel")

const getProductDetails = async(req, res) =>{
    try{
        const {productId} = req.body

        const product = await productModel.findById(productId)

        res.json({
            data: product,
            message: "Ok",
            success:true,
            error: false 
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getProductDetails