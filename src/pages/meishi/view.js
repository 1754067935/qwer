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
                arr:data.datasss,
                arrs:data.datassss
            })
           
        })
    }
    render() {
      let {arr}=this.state;
      let {arrs}=this.state;
        return (
            <div>
            <header id="hding">
            <div className="headder_left">
                返回
            </div>
            <div className="headder_center">
                <input type="text" placeholder="请输入、品类或者商圈..." />
             
            </div>
            <div className="headder_right">
                <span className="icon-wode iconfont"></span>
            </div>
        </header>
            <section>
               <div className="imgs"><img src="/bei.png"/></div>
               <div className="meidiv">
                    {
                        arr.map((v)=>
                        <dl key={v.id}>
                        <dt><img src={v.imgs}/></dt>
                        <dd>{v.name}</dd>
                        </dl>
                        )
                    }
               </div>
               <ul className="uls">
                        <li>
                        <select>
                        <option>全部类目</option>
                        <option>鸡排</option>
                        </select>
                        </li>
                        <li>
                        <select>
                        <option>附近商家</option>
                        <option>上地</option>
                        </select>
                        </li>
                        <li>
                        <select>
                        <option>智能排序</option>
                        <option>价格</option>
                        </select>
                        </li>
                        <li>
                        <select>
                        <option>筛选</option>
                        <option>美食</option>
                        </select>
                        </li>
               </ul>
               <div className="divs">
                   {
                       arrs.map((v)=> <dl>
                       <dt><img src={v.imgs}/></dt>
                       <dd>
                       <span className="dings">{v.m}</span>
                       <p className="dp1">{v.name})</p>
                       <p className="dp2"><span>￥{v.price}/人</span></p>
                       <p className="dp3"><span>{v.names}</span></p>
                       <p className="dp4"><span>{v.b}</span></p>
                       <p className="dp5"><button className="tn1">团</button>&nbsp;&nbsp;&nbsp;<span>单人餐{v.prices}元</span></p>
                       </dd>
                       </dl>)
                   }
               </div>
            </section>
            </div>
        )
    }
}
