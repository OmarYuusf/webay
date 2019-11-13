import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Styled-Component
import styled from 'styled-components'

const Added = styled.div`
    .Added-Header{
        h5{
            font-weight:800;
            padding:12px 0px;

            span{
                color:#777;
                font-weight:400;
                font-size:13px;
                margin-inline-start:8px;
            }
        }
    }

    .Added-body{
        border:1px solid rgba(0,0,0,10%);   

        .productInCart{
            display:flex;
            padding:0px 10px;
            border-bottom:1px solid rgba(0,0,0,10%);

            .right{
                flex:3;
                display:flex;

                img{
                    height:150px;
                    padding:10px;
                }

                > div:last-of-type{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }
                
                .ownerName{
                    font-size:12px;
                    color:#777;
                    margin:0px;
                    margin-top:15px;
                }

                .productName{
                    font-weight:800;
                    font-size:14px;
                    color:#03A9F4
                }

                .deleteProduct{
                    color:#999;
                    font-size:11px;
                    svg{
                        margin-inline-start:8px;
                    }

                    &:hover{
                        color:#555;
                        cursor: pointer;
                    }
                }

            }

            .left{
                flex:1;
                display:flex;
                justify-content:space-between;
                align-items:center;

                h6{
                    font-weight:800;
                    font-size:19px; 
                    margin:0px;

                    span{
                        font-weight:400;
                        font-size:12px;
                        margin-inline-start:5px;
                    }
                }
            }

            
        }
    }
`

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
            <Added>
                <div className="Added-Header">
                    <h5>
                عربة التسوق<span> <b>{this.props.ProductsInCart.length}</b> منتجات</span>
                    </h5>
                </div>
                <div className="Added-body">
                    {pro}
                </div>
            </Added>
        )
    }
}

export default ProductsAdded;