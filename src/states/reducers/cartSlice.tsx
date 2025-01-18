import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@states/store";

interface CartItem{ 
  isVeg:Boolean;
  id:String;
  name:String;
  price:number;
  quantity:number;
  cartPrice?:number;
  isCustomizable:boolean;
  customizations?:any[];

} 
interface RestaurantDetails{ 
  id:String;
  name:String;
  discount:string;
  discountAmount:string;
  time:string;
  distance:string;
  rating:number;
  imageUrl:string;
}
interface RestaurantCart{ 
 restaurant:RestaurantDetails;
 items:CartItem[];
}

interface CartState{  
  carts:RestaurantCart[];
}
const initialState: CartState = { 
  carts: [],
};

export const cartSlice=createSlice({
 name:"cart",
 initialState,
 reducers: {
  addItemToCart:(
   state,
   action:PayloadAction<{ 
    restaurant:RestaurantDetails;
    item:CartItem
   }>

  )=>{  
     const {restaurant, item} = action.payload
     const existingRestaurantCart = state.carts.find((cart) => cart.restaurant.id === restaurant.id);
     if (existingRestaurantCart) {
      const existingItem=existingRestaurantCart?.items?.find(cartItem=>cartItem?.id === item?.id)
       if(existingItem){ 

       }else{ 
        
       }

     }else{ 
       state.carts.push({ 
        restaurant,
        items:[{...item,quantity:1,cartPrice:item?.price}]
       })
     }
  }

  
 }
})

export const selectCart =(state:RootState)=>state.cart
export const selectRestaurantCartItem=(restaurantId:string,itemId:string)=>
  createSelector(
    (state:RootState)=>state.cart.carts.find(cart=>cart.restaurant.id===restaurantId)?.items,
    (items)=>items?.find(item=>item?.id===itemId)||null
  )

export default cartSlice.reducer 