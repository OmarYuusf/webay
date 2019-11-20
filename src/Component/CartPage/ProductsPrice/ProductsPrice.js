import React from 'react';
import "./ProductsPrice.css"


class ProductsPrice extends React.Component {
    render() {
        return(
            <div className="price">
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
            </div>
        )
    }
}

export default ProductsPrice;