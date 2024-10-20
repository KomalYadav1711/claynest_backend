async function userLogout(req, res){

    try{
        res.clearCookie("token")

        res.status(201).json({
            message: "Logout Successfully",
            success: true,
            error: false,
            data:[]
            
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error: true,
            success: false
        })

    }

}

module.exports = userLogout