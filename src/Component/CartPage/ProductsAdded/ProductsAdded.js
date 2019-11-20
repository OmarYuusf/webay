import React from 'react';
import "./ProductsAdded.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


class ProductsAdded extends React.Component {

    handleDelete = (index) => {
        
    }

    render() {

        const pro = this.props.ProductsInCart.map((product,index) => {
            return(
                <div className="productInCart" key={Math.random()}>
                    <div className="right">
                        <div>
                            <img src={product.imgSrc} alt={product.productName}/>
                        </div>
                        <div>
                            <p className="ownerName">{product.owner}</p>
                            <p className="productName">{product.productName}</p>
                            <p className="deleteProduct" onClick={() => this.handleDelete(index)}>
                                حذف
                                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                            </p>
                        </div>
                    </div>
                    <div className="left">
                        <h6>
                            {product.price}
                            <span>جنيه</span>
                        </h6>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
            )
        })

        return(
            <div className="added">
                <div className="Added-Header">
                    <h5>
                عربة التسوق<span> <b>{this.props.ProductsInCart.length}</b> منتجات</span>
                    </h5>
                </div>
                <div className="Added-body">
                    {pro}
                </div>
            </div>
        )
    }
}

export default ProductsAdded;