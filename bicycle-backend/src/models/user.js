const mongoose=require('mongoose')
let Schema=mongoose.Schema;
const uniqueValidator=require('mongoose-unique-validator')
let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};
let userSchema =new Schema ({
   
    
    email :{ 
        type: String,
        unique : true,
        required :[true ,"el correo es necesario"]
    } ,
    password :{
        type:String ,
        required : [true,' el password es necesario']
    }, 
    img:{
        type:String ,
        require :false
    },  
    latitude:{
        type:Number,
        require:false
    },
    longitude:{
      type:Number,
      required :false
        
    },
    precio:{
        type:Number, 
        required :false
          
      },
    role:{
        type : String,
        default:'USER_ROLE',
        enum:rolesValidos,
        required:false
    }
   
  
   

   
})

     

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
userSchema.plugin(uniqueValidator,{message:'{PATH} debe de ser unico'})
module.exports=mongoose.model('Users',userSchema)