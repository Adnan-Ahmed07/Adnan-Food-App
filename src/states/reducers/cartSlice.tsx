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
        existingItem.quantity+=1;
        existingItem.cartPrice=(existingItem.cartPrice||0)+existingItem?.price
       }else{ 
        existingRestaurantCart?.items?.push({...item,quantity:1,cartPrice:item?.price})
       }

     }else{ 
       state.carts.push({ 
        restaurant,
        items:[{...item,quantity:1,cartPrice:item?.price}]
       })
     }
  },
  removeItemFromCart:(
    state,
    action:PayloadAction<{ 
      restaurant_id:string;
      itemId:string;
    }>

  )=>{ 
     const {itemId,restaurant_id}=action?.payload 
     const restaurantCart=state?.carts?.find(cart=>cart?.restaurant?.id===restaurant_id)
     if(!restaurantCart) return;
     const itemIndex=restaurantCart.items?.findIndex(item=>item?.id===itemId)

     if(itemIndex !==-1){ 
        const item=restaurantCart.items[itemIndex]
        if(item.quantity >1){ 
          item.quantity-=1;
          item.cartPrice=(item.cartPrice||0)-item?.price
        }else{ 
          restaurantCart.items.splice(itemIndex,1);
        }
     }

     if(restaurantCart.items.length===0){ 
       state.carts=state.carts.filter(cart=>cart.restaurant.id!==restaurant_id)
     }
  },
  addCustomizableItem:(
    state,
    action:PayloadAction<{ 
      restaurant:RestaurantDetails;
      item:CartItem;
     customization:{ 
        quantity:number;
        price:number;
        customizationOptions:any[]
     }
    }>

  ) =>{ 
    const {restaurant,item,customization}=action.payload
    const existingRestaurantCart=state.carts.find(cart=>cart.restaurant.id===restaurant.id)
    if(existingRestaurantCart){
      const existingItem=existingRestaurantCart?.items?.find(cartItem=>cartItem?.id===item?.id)as any;

      if(existingItem){ 
        const existingCustomizationIndex=existingItem?.customizations?.findIndex((cust:any) => JSON.stringify(cust.customizationOptions) === JSON.stringify(customization.customizationOptions));
        if(existingCustomizationIndex !==undefined && existingCustomizationIndex !==-1){ 
          
          const existingCustomization=existingItem?.customizations[existingCustomizationIndex]
          existingCustomization.quantity+=customization?.quantity
          existingCustomization.cartPrice+=customization?.price


        }else{ 
          const newCustomizationId=`c${(existingItem?.customizations?.length || 0)+1}`
          existingItem?.customizations?.push( { 
            id:newCustomizationId,
            ...customization,
            quantity:customization?.quantity,
            cartPrice:customization?.price,
            price:customization?.price / customization?.quantity
          })
        }

        existingItem.quantity+=customization.quantity
        existingItem.cartPrice=(existingItem?.cartPrice||0)+customization?.price

      }

    }else{

      const newCustomizationId=`c1`
      state.carts.push({ 
        restaurant,
        items:[
          {
            ...item,
            quantity:customization.quantity,
            cartPrice:customization?.price,
            customizations:[ 
              { 
                id:newCustomizationId,
                ...customization,
                quantity:customization?.quantity,
                cartPrice:customization?.price,
                price:customization.price / customization.quantity 

              }
            ]
          }
        ]
      })

    }

  } ,
  removeCustomizableItem:(
  state,
  action:PayloadAction<{ 
    restaurant_id:string;
    itemId:string;
    customizationId:string;
  }>


  )=>{ 
       const {restaurant_id,itemId,customizationId}=action.payload
       const restaurantCart=state?.carts?.find(cart=>cart?.restaurant?.id===restaurant_id)

       if(!restaurantCart) return;
        const item=restaurantCart?.items?.find(cartItem=>cartItem?.id===itemId)
        if(!item) return;
       const customizationIndex=item?.customizations?.findIndex((cust)=>cust?.id===customizationId) as number
       if(customizationIndex !==-1 && item?.customizations){ 
         const customization=item.customizations[customizationIndex]
         if(customization?.quantity>1){ 
           customization.quantity-=1
           customization.cartPrice-=customization?.price
         }else{ 
           item?.customizations?.splice(customizationIndex,1)
         }

         item.quantity-=1
          item.cartPrice=(item?.cartPrice||0)-customization?.price

          if(item?.quantity==0 || item?.customizations?.length===0){ 
            restaurantCart.items=restaurantCart?.items?.filter(cartItem=>cartItem.id!==itemId)
          }
          if(restaurantCart?.items?.length===0){ 
            state.carts=state.carts?.filter(cart=>cart?.restaurant?.id!==restaurant_id)
          }
       }

  }
  
 }
})

export const { 
  addItemToCart,
  removeItemFromCart,
  addCustomizableItem,
  removeCustomizableItem
}=cartSlice.actions

export const selectCart =(state:RootState)=>state.cart
export const selectRestaurantCartItem=(restaurantId:string,itemId:string)=>
  createSelector(
    (state:RootState)=>state.cart.carts.find(cart=>cart.restaurant.id===restaurantId)?.items,
    (items)=>items?.find(item=>item?.id===itemId)||null
  )

export default cartSlice.reducer 