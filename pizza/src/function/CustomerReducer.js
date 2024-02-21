import { createAction } from "@reduxjs/toolkit";


const initialState = {
    customers: [
        {
            "userId" : 1,
            "name": "sankar",
            "password": "user",
            "phone": "9345645400",
            "address": "ABC",
            "cart": [],
        }
    ],
    login: {
        userID: 1,
        index: 0,
        orderId: "",
    },
    response: "",
    cartNum:0,
    userId: 2,
    userName: "Sankar",
};

export default function CustomerReducer(state = initialState,action)
{
    console.log(state);
    switch(action.type)
    {
        case 'login':
            return{
                ...state,
                customers: [...state.customers],
                login: {...state.login,userId:action.payload,index:action.index},
                userId: action.payload,
                userName: state.customers[state.login.index].name,
            }
        case 'addCustomer':
            return{
                    ...state,
                    customers: [...state.customers, {...action.payload,userId:state.userId,cart: []}],
                    userId: state.userId+1,
                    userName: action.payload.name,
            }
         case 'addCart':
            console.log(state.customers[action.index]);
            const updatedItems = [...state.customers];
            updatedItems[action.index] = {
              ...updatedItems[action.index],
              cart: [...updatedItems[action.index].cart, action.payload],
            };
            return { ...state, customers: updatedItems,cartNum: state.cartNum+1};
        case 'setResponse':
            return{
                ...state,
                response: action.payload,
            }
        case 'remove':
          const uState = state.customers.map((customer, index) => {
            if (index === state.login.index) {        
              const newArray = state.customers[state.login.index].cart.filter(item => item !== state.customers[state.login.index].cart[action.payload]);
              return {
                ...customer,
                cart: newArray,
              };
            }
            return customer;
          });
          
          return {
            ...state,
            customers: uState,
            cartNum: state.cartNum-1,
          };
        case 'inc':
            const updatedState = state.customers.map((customer, index) => {
                if (index === state.login.index) {
                  const updatedCart = customer.cart.map((item, i) => {
                    if (i === action.payload) {
                      return {
                        ...item,
                        quantity: item.quantity + 1,
                      };
                    }
                    return item;
                  });
              
                  return {
                    ...customer,
                    cart: updatedCart,
                  };
                }
                return customer;
              });
              
              return {
                ...state,
                customers: updatedState,
              };
        case 'dec':
            const updated = state.customers.map((customer, index) => {
                if (index === state.login.index) {
                  const updatedCart = customer.cart.map((item, i) => {
                    if (i === action.payload) {
                      return {
                        ...item,
                        quantity: item.quantity - 1,
                      };
                    }
                    return item;
                  });
              
                  return {
                    ...customer,
                    cart: updatedCart,
                  };
                }
                return customer;
              });
              
              return {
                ...state,
                customers: updated,
              };
         case 'empty':
            return{
              ...state,cartNum: 0,
            }     
         default:
            return state;
    }

}

export function addCustomer(customerObj)
{
    return {
        type: "addCustomer",
        payload: customerObj,
      };
}

export function LoginReducer(userID,ind)
{
    return {
        type: "login",
        payload: userID,
        index:ind,
    };
}

export function addToCart(pizzaObject,ind)
{
    return{
        type: "addCart",
        payload: pizzaObject,
        index: ind,
    }
}

export function setResponse(response)
{
    return{
        type: "setResponse",
        payload: response,
    }
}

export function increment(index)
{
    return{
        type: "inc",
        payload: index,
    }

}

export function Decrement(index)
{
    return{
        type: "dec",
        payload: index,
    }

}

export function Remove(index)
{
  return{
    type: "remove",
    payload: index,
  }
}

export function EmptyState()
{
  return{
    type: "empty",
  }
}