import React from 'react';

// Styled-Component
import styled from 'styled-components'

const Price = styled.div`


    > div {
        border:1px solid rgba(0,0,0,10%);
        padding:10px;

        h6{
            font-weight:800;
            margin-top:8px;
            
        }

        table{
            width:100%;

            tr:first-of-type{
                td{
                    span{
                        font-size:11px;
                        color:#999;

                        b{  
                            font-weight:800;
                        }
                    }
                }
            }

            tr{
                display:flex;
                justify-content:space-between;

                td{
                    color:#777;
                    font-size:14px;
                }
            }
        }

        > div{
            display:flex;
            padding:10px 0px;
            margin:0px;
            margin:10px 0px;
            border-top:1px solid rgba(0,0,0,10%);
            border-bottom:1px solid rgba(0,0,0,10%);
            font-size:14px;
            display:flex;
            justify-content:space-between;
            p{
                margin:0px;
            }
        }
    }

    button{
        width:100%;
        border:0px;
        font-size:14px;
        background:#03A9F4;
        padding:8px 0px;
        color:#FFF;
        box-shadow:3px 3px 6px rgba(0,0,0,.15);
        transition:all .2s;

        &:hover{
            transform:translateY(2px)
        }

        &:active{
            transform:translateY(4px)
        }
    }
`

class ProductsPrice extends React.Component {
    render() {
        return(
            <Price>
                <div>
                    <h6>ملخص الطلبية</h6>
                    <table>
                        <tbody>
                            <tr>
                                <td>  المجموع الفرعي <span> <b>{this.props.ProductsInCart.length}</b> منتجات</span></td>
                                <td>14798.85 جنيه</td>
                            </tr>
                            <tr>
                                <td>الشحن</td>
                                <td>مجاناً</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <p>المجموع النهائي</p>
                        <p>14798.85 جنيه</p>
                    </div>
                </div>
                <button>إتمام الشراء الأن</button>
            </Price>
        )
    }
}

export default ProductsPrice;