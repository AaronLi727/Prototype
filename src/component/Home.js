import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
// import image from "../pixel2.jpg";
// import image2 from "../pixel3.jpg";
// import image3 from "../pixel4.jpg";
import menu from "../menu.svg";
class Home extends Component {
    
    constructor(props) {
        super(props)
      this.state = {images: ["https://images.squarespace-cdn.com/content/v1/5bfeedcb3c3a5311ba2b33aa/1582091122134-252CNVPYF8393QBQM0IG/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/20.jpg?format=1500w",
      "https://images.squarespace-cdn.com/content/v1/5bfeedcb3c3a5311ba2b33aa/1582091526592-V4Q3R22OWKG5F9DEX5O2/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/2019+DP+Csaa+Oakland_010-Edit.jpg?format=1500w",
        "https://images.squarespace-cdn.com/content/v1/5bfeedcb3c3a5311ba2b33aa/1583456333605-P4XEMQMBYKWWW7MVCRU7/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/AAA_05.jpg?format=1500w",
        "https://images.squarespace-cdn.com/content/v1/5bfeedcb3c3a5311ba2b33aa/1582091582700-66S4O8I4777R39F7BVXP/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/2019+CCSA+Mountain+View+Interiors_008.jpg?format=1500w"
    ],
    selectedImage: "https://images.squarespace-cdn.com/content/v1/5bfeedcb3c3a5311ba2b33aa/1582091122134-252CNVPYF8393QBQM0IG/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/20.jpg?format=1500w"};
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState(prevState => {
              if (prevState.selectedImage === this.state.images[0]) {
                return {
                  selectedImage: this.state.images[1]
                };
              } else if(prevState.selectedImage === this.state.images[1]) { 
                return {
                  selectedImage: this.state.images[2]
                };
            }else if(prevState.selectedImage === this.state.images[2]) { 
                    return {
                      selectedImage: this.state.images[3]
                    };
              } else{
                  return{
                      selectedImage: this.state.images[0]
                  }
              }
            });
          }, 3000);
      
          this.setState({
            intervalId
          });
        }
      

    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className = "image">
                <img class = "bg" src={this.state.selectedImage} alt={"images"} />
                <img class ="logo" src ="https://static1.squarespace.com/static/5bfeedcb3c3a5311ba2b33aa/t/5d0da85fb3f1e70001391606/1591934091645/?format=750w" alt="PHO ARCHITECTS"></img>
                {/* <a href = "#menu" class ="box-shadow-menu">
                    Menu
                </a> */}
                {/* <div class="bmd-layout-container bmd-drawer-f-l">
                <header class="bmd-layout-header"></header>
                <nav class="navbar navbar-light">
                    <ul class = "navbar-nav ml-auto"></ul>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Hidden brand</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                </div>
                
                </nav>
                </div> */}
                <div class="bmd-layout-container bmd-drawer-f-r bmd-drawer-overlay">
                    <header class="bmd-layout-header">
                        <div class="navbar  bg-faded">
                            <ul class="nav-bar ml-auto"></ul>
                        <button class="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-s2">
                            <span class="sr-only">Toggle drawer</span>
                            <img src={menu} width="50"/>
                        </button>
                        
                        </div>
                    </header>
                    <div id="dw-s2" class="bmd-layout-drawer bg-faded">
                        <header>
                        <a class="navbar-brand">PHO ARCHITECTS</a>
                        </header>
                        <ul class="list-group">
                        <a class="list-group-item">Home</a>
                        <a class="list-group-item">Projects</a>
                        <a class="list-group-item">Firm</a>
                        <a class="list-group-item">Contact</a>
                        </ul>
                    </div>
                    <main class="bmd-layout-content">
                        {/* <div class="container">
                        
                        </div> */}
                    </main>
                    </div>
                </div>
           
            
            
            );
        } 
    }
 


export default Home;
