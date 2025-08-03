// first step we import the mongoose for making the model they will same almost everytime
import mongoose from 'mongoose';

// second step is to create mongoose new keyword

const userSchema = new mongoose.Schema(
  {
    // first approch which is use to store the structure of data
    // username : String,
    // email : String,
    // isActive : Boolean,

    // second approch is given below which is standard paratics of complex projects

    username: {
      type: String,
      required: true, // if we not check in controller then mongoose auto check and say without this field data will not save make sure fill the data in this entry
      unique: true, //  user name must be unique just like instagram username scenrio
      lowercase: true, // and username must be in lowercase just like instagram scenrio
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: ture,
      // required : [ture , "password is required"],
      // above , we also use array and for min max and show the message if field is not get or filled then they show this message . thats why people prefer mongoose
      unique: true,
    },
  },
  { timestamps: true }
  // amost in every model they use timestamp createdat and updatedat . so first your data model object then timestamp model come here .
);

// third step is to export . if not they will not workable

export const User = new mongoose.model('User', userSchema);
