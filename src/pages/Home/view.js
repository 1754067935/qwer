import React, { Component } from 'react'
import axios from 'axios';
export default class view extends Component {
    state={
        arr:[

        ],
        arrs:[]
    }
    componentDidMount(){
        axios.get('/list.json').then(({data})=>{
            this.setState({
                arr:data.datas,
                arrs:data.datass
            })
           
        })
    }
    render() {
        let {arr}=this.state;
        let {arrs}=this.state;
        return (
            <div>
                <header>
                    <div className="Hleft">
                    北京
                    </div>
                    <div className="Hcen">
                    <input type="text" placeholder="请输入店家的名称"/>
                    </div>
                    <div className="Hrit">
                    我的
                    </div>
                </header>
                <section>
                <div>
                <img src="/da.png"/>
                </div>
                <div className="dls">
                   {
                       arr.map((v)=>
                        <dl key={v.id}>
                        <dt>
                        <img src={v.imgs}/>
                        </dt>
                        <dd>{v.name}</dd>
                        </dl>
                       )
                   }
            
                </div>
                <h2 className="h2s">猜你喜欢</h2>
                <div className="dlss">
                   {
                       arrs.map((v)=>
                       <dl key={v.id}>
                       <dt><img src={v.imgs}/></dt>
                       <dd>
                       <div className="ding">
                           <span>已售{v.jian}</span>
                       </div>
                       <p className="p1">{v.name}</p>
                       <p className="p2">{v.namess}</p>
                       <p className="p3"><span id="s1">{v.price}元</span>&nbsp;<span>门市价{v.prices}元</span></p>
                       </dd>
                       </dl>
                       )
                   }
                </div>
                </section>

            </div>
        )
    }
}
