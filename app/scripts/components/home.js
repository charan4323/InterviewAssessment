/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Home ", this.props.products);
    }

    render() {
        return (
            <section id="home">
                <div className="content">
                    <p>ELC Coding Test...</p>
                    <div className="container">
                    {
                        this.props.products.map((product, index) => {
                            return (
                                <div key={index} className="product-container">
                                    <div className="thumbnail">
                                        <img src={product.picture} />
                                    </div>
                                    <div className="details">
                                        <p className="product-title">{product.name}</p>
                                        <p>{product.price}</p>
                                        <p className="product-description">{product.about}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;