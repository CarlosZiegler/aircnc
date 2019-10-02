// index, show, store, update, destroy
const Spot = require('../models/Spot')
const User = require('../models/User')


module.exports= {



    async store(request, response) {
        //const {email} = require.body;
        const {filename } = request.file;
        const { company, techs , price } = request.body;
        const { user_id } = request.headers; 

        const user = await User.findById(user_id);

        if (!user) {
            return response.status(400).json('Error, User not exist!'); 
        }

        const spot = await Spot.create({ 
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
         });
         return response.json(spot) 
        
    }
}