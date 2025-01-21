import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
  name:{type:String, required:true},
  cuisine:{type:String, required:true},
  deliveryTime:{type:String, required:true},
  costForTwo:{type:Number, required:true},
  image:{type:[String], required:true},
  rating:{type:Number, required:true},
  offers:{type:[String], required:true},

});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;