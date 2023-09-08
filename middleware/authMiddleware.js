import jsonwebtoken from "jsonwebtoken"



// THIS IS WHERE WE WILL BE VERIFYING THE TOKEN THAT IS NEEDED TO ACCESS THE DATA

// LOGIC
export const verifyToken = async (req, res) => {

    const headerAvailable = req.header.authorization

    if(headerAvailable && headerAvailable.startsWith("Bearer ")){
        
    }

}