// Create a new file in the `demo\src\components` folder called `Layout.js` and add the following code:
// // Path: demo\src\components\Layout.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
function Layout(props) {
    return (
        <div>
            <Header />
            <Nav />
            {props.children}
            <Footer />
        </div>
    );

}
export default Layout;

// // // // Now, when we run the application, we should see the Header component at the top of the page, the Nav component below the Header component, the Footer component at the bottom of the page, and the content of the page in between the Nav and Footer components.
// // // // We can also add the Layout component to the About.js file, and any other page we create. This will allow us to display the layout on any page in our application.
// // // // We can also add the Layout component to the App.js file, and it will be displayed on every page. This is a good way to add a layout to our application.
// // // // We can also add the Layout component to the index.js file, and it will be displayed on every page. This is a good way to add a layout to our application.
