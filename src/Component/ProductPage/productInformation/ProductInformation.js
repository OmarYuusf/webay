import React,{useState} from 'react';

import { Tabs, Tab, Container } from 'react-bootstrap'

// Styled-Component
import styled from 'styled-components';

const ContainerTap = styled.div`
    width:80%;
    margin:35px auto;

    @media (max-width: 1024px){ 
        width:100% !important
    }

    .nav-tabs{
        padding:0px 15px;
        background:transparent ;

        a{
            font-weight:800;
            font-size:15px;
            color:#777;
        }

        .active{
            border-bottom:1px solid rgba(0,0,0,1) ;
            color:#212121
        }
    }

    .view{

        h6{
            font-weight:800;
            color:#777;
            font-size:14px;
        }
        ul {
            margin:0px; 
            padding-inline-start:18px;

            li{
                color:#888;
                font-size:13px;
                color:#414141;
                font-size:12px;
            }
        }
        }
     
    .tablesContainer{
        display:flex;
        justify-content:flex-start;

        @media (max-width: 425px){ 
            flex-direction:column;
        }
        
        table{
            width:40%;
            margin-inline-end:10%;

            @media (max-width: 768px){ 
                margin-inline-end:0%;
                width:50%;
            }

            @media (max-width: 425px){ 
                width:100%;
            }

            tr{
                width:65%;
                margin-inline-end:10%;
                display:flex;
                justify-content:space-between;
                padding:8px 5px;

                @media (max-width: 768px){
                    padding:8px 10px;
                    width:100%;
                    margin-inline-end:3%;
                }

                td{
                    font-size:12px;
                }

                td:first-of-type{
                    color:#777;
                }

                td:last-of-type{
                    font-weight:600;
                    color:#414141
                }
            }
        }
        
    }

    .tab-content{
        >div{
            padding:20px;
        }
    }

`

const ControlledTabs = () => {
        const [key, setKey] = useState('home');
      
        return (
          <ContainerTap>
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
          </ContainerTap>
        );
  }


export default ControlledTabs;