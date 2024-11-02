import { createSlice } from "@reduxjs/toolkit";

//mock users for demonstration
const fakeUsers = [
  {
    id: 1,
    username: "johnDoe69",
    fullname: "John Doe",
    email: "johndoe99@gmail.com",
    password: "johndoe99",
    contact: "+233 20 530 5555",
    token: "fakeToken1",
    billing:{
        firstName:"John",
        lastName:"Doe",
        address:"123 Elm Street",
        contact:"+233 20 530 5555",
        city:"Legon, Accra",
        apartment:"Akoafo Hall, Room B12"
    },
    shipping:{
        firstName:"John",
        lastName:"Doe",
        address:"123 Elm Street",
        contact:"+233 20 530 5555",
        city:"Legon, Accra",
        apartment:"Akoafo Hall, Room B12"
    }
  },
  {
    id: 2,
    username: "janeDoe96",
    fullname: "Jane Doe",
    email: "janedoe99@gmail.com",
    contact: "+233 20 530 5556",
    password: "janedoe99",
    billing:{
        firstName:"John",
        lastName:"Doe",
        address:"123 Elm Street",
        contact:"+233 20 530 5555",
        city:"Legon, Accra",
        apartment:"Akoafo Hall, Room B12"
    },
    shipping:{
        firstName:"John",
        lastName:"Doe",
        address:"123 Elm Street",
        contact:"+233 20 530 5555",
        city:"Legon, Accra",
        apartment:"Akoafo Hall, Room B12"
    },
    token: "fakeToken2",
  },
];
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    token: null,
    error: null,
  },
  reducers: {
    login(state, action) {
      //login reducer
      const { username, password, email } = action.payload;
      //mock for user auth
      const authUser = fakeUsers.find(
        (user) => user.username === username && user.password === password
      );
      if (authUser) {
        state.user = authUser;
        state.isAuthenticated = true;
        state.token = authUser.token;
        state.error = null;
      } else {
        state.error = "Invalid username or password.";
        state.isAuthenticated = false;
      }
    },
    logout(state) {
      //logout reducer
      state.user = null;
      state.isAuthenticated = null;
      state.token = null;
      state.error = null;
    },
    signUp(state, action) {
      //create account reducer
      const { username, email, password } = action.payload;

      //check if user exists
      const userExists = fakeUsers.some(
        (user) => user.username === username || user.email === email
      );
      if (userExists) {
        state.error = "Username or email already exists";
      } else {
        const newUser = {
          id: fakeUsers.length + 1,
          username,
          email,
          password,
          token: `fakeToken${fakeUsers.length + 1}`,
        };

        fakeUsers.push(newUser);

        state.user = newUser;
        state.token = newUser.token;
        state.isAuthenticated = true;
        state.error = null;
      }
    },
    updateAccount(state, action) {
      const { username, email, contact, fullname } = action.payload;
      try {
        const userIndex = fakeUsers.findIndex((user) => user.id === state.user.id);

        if (userIndex !== -1 && state.isAuthenticated) {
          const updateUser = {
            ...fakeUsers[userIndex],
            username: username || fakeUsers[userIndex].username,
            fullname: fullname || fakeUsers[userIndex].fullname,
            email: email || fakeUsers[userIndex].email,
            contact: contact || fakeUsers[userIndex].contact,
            password: password || fakeUsers[userIndex].password,
          };
          fakeUsers[userIndex] = updateUser;
          state.user = updateUser;
          state.error = null;
        }else(
            state.error = "User not found or not authenticated"
        )
      } catch (error) {
        console.error(error);
        state.error = "An error occured while trying to update account."
      }
    },
    updateBilling(state, action){
        const {firstName, lastName, address, contact, city, apartment} = action.payload

        try {
            const userIndex = fakeUsers.findIndex((user) => user.id === state.user.id)

            if (userIndex !== -1 && state.isAuthenticated) {
                fakeUsers[userIndex].billing = {
                    firstName: firstName || fakeUsers[userIndex].billing.firstName,
                    lastName: lastName || fakeUsers[userIndex].billing.lastName,
                    address: address || fakeUsers[userIndex].billing.address,
                    contact: contact || fakeUsers[userIndex].billing.contact,
                    city: city || fakeUsers[userIndex].billing.city,
                    apartment: apartment || fakeUsers[userIndex].billing.apartment
                }
                state.user.billing = fakeUsers[userIndex].billing
                state.error = null
            }
        } catch (error) {
            console.error(error);
            state.error = "An error occured while trying to update account."
        }
    },
    updateShipping(state, action){
        const {firstName, lastName, address, contact, city, apartment} = action.payload

        try {
            const userIndex = fakeUsers.findIndex((user) => user.id === state.user.id)

            if (userIndex !== -1 && state.isAuthenticated) {
                fakeUsers[userIndex].shipping = {
                    firstName: firstName || fakeUsers[userIndex].shipping.firstName,
                    lastName: lastName || fakeUsers[userIndex].shipping.lastName,
                    address: address || fakeUsers[userIndex].shipping.address,
                    contact: contact || fakeUsers[userIndex].shipping.contact,
                    city: city || fakeUsers[userIndex].shipping.city,
                    apartment: apartment || fakeUsers[userIndex].shipping.apartment
                }
                state.user.shipping = fakeUsers[userIndex].shipping
                state.error = null
            }
        } catch (error) {
            console.error(error);
            state.error = "An error occured while trying to update account."
        }
    },

  },
});
export const { login, logout, signUp, updateAccount, updateBilling, updateShipping } = authSlice.actions;
export default authSlice;
