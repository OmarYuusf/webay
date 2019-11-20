import React,{useState} from 'react';
import "./ProductInformation.css"

import { Tabs, Tab, Container } from 'react-bootstrap'

// Styled-Component
import styled from 'styled-components';

const ContainerTap = styled.div`
    

`

const ControlledTabs = () => {
        const [key, setKey] = useState('home');
      
        return (
          <div className="container-tap">
              <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="home" title="OVERVIEW">
                <div className="view">
                    <h6>مميزات المنتج</h6>
                    <ul>
                        <li>Pocket sized for easy transportability.</li>
                        <li>Features a stylish black casing with a sliding cap design.</li>
                        <li>It is supported by a wide array of devices thanks to the USB 2.0 interface</li>
                    </ul>
                </div>
                </Tab>
                <Tab eventKey="profile" title="SPECIFICATIONS">
                    <div className="tablesContainer">
                        <table>
                            <tbody>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                                <tr>
                                    <td>حجم الشاشة</td>
                                    <td>15 بوصه</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tab>
            </Tabs>
          </div>
        );
  }


export default ControlledTabs;