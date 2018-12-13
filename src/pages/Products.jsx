import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Products.css'; 

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pdata: []
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        const count = 1
        console.log('mount c', count+1)
        this.getData()
    }

    getData() {
        fetch('http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id='+this.props.match.params.id)
        .then(response => {return response.json();})
        .then(data => {
            console.log(data.data)
            // let pdata = 
            this.setState({pdata: data.data})
        })
    }

    shouldComponentUpdate(nextProps){
        if(this.props.match.params.id !== nextProps.match.params.id){
            this.getData()
        }
        console.log("shouldComponentUpdate")
        return true;
    }

    render() {
        return(
            <div className="main">
                <Navbar/> 
                <div className="container">
                <h1 className="heading">Our Products</h1>    
                    <div className="items">{this.state.pdata.map(prod => {
                        return(
                            <div className="containerMain">
                                <div className="row innerContainer">
                                    <div className="col-md-2 imgContainer">
                                        <img className="prodImg mx-auto" src={prod.product_images}/>
                                    </div>
                                    <div className="col-md-7 descContainer">
                                        <h4>{prod.name}</h4>
                                        <p className="desc">{prod.description}</p>
                                        <p className="cost">Price - ₹{prod.cost}</p>
                                    </div>
                                    <div className="col-md-2 details">
                                        <Link className="viewDetails" to={"/product_details/"+prod.id}>View Details ></Link>
                                    </div>
                                </div> 
                                <hr/>
                            </div>
                        )
                    })}</div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Products;