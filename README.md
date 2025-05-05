📘 **Ecommerce Frontend Application Documentation**

---

## 🛍️ Overview

This is a React-based ecommerce frontend application built with **Vite**. It offers a seamless shopping experience with features like product browsing, cart management, checkout, and order confirmation. The app utilizes **Redux** for state management and **TailwindCSS** for styling.

---

## 📑 Table of Contents

* Features
* Folder Structure
* Key Components
* Pages
* State Management
* API and Data Fetching
* Styling
* Setup and Installation
* Future Enhancements

---

## ✨ Features

* 🛒 **Product Listing**: View featured, trending, and new arrival products.
* 🔍 **Product Details**: View detailed information including images, price, availability, and reviews.
* 🧺 **Cart Management**: Add, remove, and update items.
* 💳 **Checkout Process**: Complete purchases with billing, shipping, and payment info.
* 📦 **Order Confirmation**: Get a summary of your completed order.
* 📱 **Responsive Design**: Optimized for desktop and mobile screens.

---

## 📁 Folder Structure

```
Ecommerce-FrontEnd/
├── public/                # Static assets (images, JSON data, etc.)
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components for routing
│   ├── states/            # Redux slices for state management
│   ├── styles/            # Global and component-specific styles
│   ├── tests/             # Unit and integration tests
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles and Tailwind imports
├── .eslintrc.js           # ESLint configuration
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies and scripts
```

---

## 🧩 Key Components

1. **Card**

   * File: `card.jsx`
   * Purpose: Displays product image, name, price, and "Add to Cart" button.

2. **Carousel**

   * File: `slider.jsx`
   * Purpose: Displays image sliders for banners or featured items.

3. **CartItem**

   * File: `cartItem.jsx`
   * Purpose: Renders an individual cart item with edit and delete options.

4. **Checkout Components**

   * Files: `checkoutBilling.jsx`, `checkoutShipping.jsx`, `checkoutPayment.jsx`
   * Purpose: Handle user input for checkout.

5. **Toast Notifications**

   * Library: `react-toastify`
   * Purpose: Provides real-time feedback for user actions.

---

## 📄 Pages

1. **Home** - `home.jsx`

   * Showcases featured/trending products and categories.

2. **Shop** - `shop.jsx`

   * Lists products with filter and sort options.

3. **Product** - `product.jsx`

   * Displays single product details including reviews, sizes, and images.

4. **Cart** - `cart.jsx`

   * Displays all cart items with update/remove functionality.

5. **Checkout** - `checkout.jsx`

   * Manages the purchase process from billing to payment.

6. **Order Confirmation** - `orderConfirmation.jsx`

   * Shows a summary of a successful order.

7. **Contact** - `contact.jsx`

   * A form for user queries and support.

8. **Account** - `account.jsx`

   * Lets users update profile and address details.

---

## 🧠 State Management

### Redux Slices

* **Cart Slice** - `cartSlice.js`

  * Manages cart content, total price, and quantity.

* **Auth Slice** - `authSlice.js`

  * Stores login, registration, and profile info.

* **Order Slice** - `orderSlice.js`

  * Stores confirmed order details.

* **Categories Slice** - `categoriesSlice.js`

  * Handles product filtering and sorting logic.

### Store Configuration

* **File**: `store.js`

  * Combines all slices into a global store.

---

## 🌐 API and Data Fetching

* **Source**: `public/data.json`

  * Contains product metadata and images.

* **Custom Hook**: `useFetch.js`

  * Fetches JSON data and manages loading/error states.

---

## 🎨 Styling

* **TailwindCSS**

  * File: `tailwind.config.js`
  * Provides responsive utility-first styling.

* **Global Styles**

  * File: `index.css`
  * Imports Tailwind base, components, and custom styles.

---

## ⚙️ Setup and Installation

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Steps

```bash
git clone <repository-url>
cd Ecommerce-FrontEnd
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🚀 Future Enhancements

* 🔐 **Authentication**: Add login/signup and user dashboard.
* 📦 **Backend Integration**: Replace static JSON with real APIs.
* 💖 **Wishlist**: Allow users to save favorite items.
* 🔎 **Search Functionality**: Add product search bar.
* 🚚 **Order Tracking**: Let users monitor delivery progress.

---

## ✅ Conclusion

This ecommerce frontend app is a scalable and modular solution for modern online stores. With clean code structure, responsive design, and state-driven logic, it's ready for real-world deployment and future expansion.
