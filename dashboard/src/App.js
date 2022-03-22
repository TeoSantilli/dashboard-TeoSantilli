import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import Heading from './components/Heading/Heading'
import LastProd from './components/LastProd/LastProd'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Heading2 from './components/Heading2/Heading2'
import Card from './components/Card/Card'
import TopCards from './components/TopCards/TopCards'


function App() {

  // ------------------------------ ITEMS ----------------------------------------

  let cardItems=[
    {
        label:'Products in Data Base',
        num:'135',
        color:'card border-left-primary shadow h-100 py-2',
        icon:'fas fa-clipboard-list fa-2x text-gray-300',
        text:'text-xs font-weight-bold text-primary text-uppercase mb-1',
    },
    {
        label:'Amount in Products',
        num:'$546.456',
        color:'card border-left-success shadow h-100 py-2',
        icon:'fas fa-dollar-sign fa-2x text-gray-300',
        text:'text-xs font-weight-bold text-success text-uppercase mb-1',
    },
    {
        label:'Users Quantity',
        num:'38',
        color:'card border-left-warning shadow h-100 py-2',
        icon:'fas fa-user-check fa-2x text-gray-300',
        text:'text-xs font-weight-bold text-warning text-uppercase mb-1',
    }];

  let catItems =['Category 01','Category 02','Category 03','Category 04','Category 05','Category 06']

  let chaItems =[
    {
      name:'Ashoka',
      imagen:'assets/images/characters/ahsoka.jpg',
    },{
      name:'Anakin',
      imagen:'assets/images/characters/anakin.jpg',
    },{
      name:'Batman',
      imagen:'assets/images/characters/batman.jpg',
    },{
      name:'Capitan America',
      imagen:'assets/images/characters/capAmerica.jpg',
    },{
      name:'Cell',
      imagen:'assets/images/characters/cell.jpg',
    },{
      name:'Hulk',
      imagen:'assets/images/characters/hulkSmall.jpg',
    },{
      name:'Kylo Ren',
      imagen:'assets/images/characters/kyloRen.jpg',
    },{
      name:'Luke',
      imagen:'assets/images/characters/luke.jpg',
    },{
      name:'Obi Wan',
      imagen:'assets/images/characters/obiWan.jpg',
    },{
      name:'Dr Strange',
      imagen:'assets/images/characters/strange.jpg',
    },{
      name:'Superman',
      imagen:'assets/images/characters/superman.jpg',
    },{
      name:'Vegetta',
      imagen:'assets/images/characters/vegetta.jpg',
    },{
      name:'Yoda',
      imagen:'assets/images/characters/yoda.jpg',
      }];

  //-------------------------------------------------------------
  
  //--------------------------DASHBOARD--------------------------

  return (
    <div id='wrapper'>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
          <Topbar />
          <div className='container-fluid'>
            <Heading />
            <TopCards cardContent={cardItems}/>
              
            <div className='row'>
              <LastProd />
              <Categories catContent={catItems}/>
            </div>
          </div>
          <div className='container-fluid'>
            <Heading2 />
            <Card chaCont={chaItems}/>
          </div>
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
