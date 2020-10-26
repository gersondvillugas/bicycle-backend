const mongoose =require('mongoose')
const URI='mongodb+srv://bicycle:akame159@cluster0.mmg6n.mongodb.net/bicycle?retryWrites=true&w=majority'
//const PASSWORD=encodeURIComponent('akame159')
//const URI=`mongodb+srv://workfree:${PASSWORD}@cluster0.mmg6n.mongodb.net/workfree`;
mongoose.connect(URI)
    .then(db=>console.log('DB IS CONEECNTED'))
    .catch(err=>console.log(err) );
module.exports=mongoose