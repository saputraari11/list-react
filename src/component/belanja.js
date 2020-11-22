import React,{Component} from "react"
import $, { event } from "jquery"
class belanja extends Component{
constructor(){
    super()
    this.state={
        barang:[
             {
                 id:1,
                 nama:"rinso",
                 harga:5000,
                 jumlah:0,
                 total:0
             }
            ,{                 id:2,

                nama:"baygon",
                harga:10000,
                jumlah:0,
                total:0
            }
            ,{ 
                id:3,
            nama:"susu beruang",
            harga:8000,
            jumlah:0,
            total:0}
        ],
        id:"",
        nama:"",
        harga:"",
        action:""
    }
    
}
kurang =(index)=>{
    let barang = this.state.barang
    let i = barang.findIndex(item=>item.id===index)
    if(barang[i].jumlah >0){
barang[i].jumlah = barang[i].jumlah - 1
barang[i].total = barang[i].jumlah * barang[i].harga
this.setState({barang:barang})}
}
tambah =(index)=>{
let barang = this.state.barang
let i = barang.findIndex(item=>item.id===index)
barang[i].jumlah = barang[i].jumlah + 1
barang[i].total = barang[i].jumlah * barang[i].harga
this.setState({barang:barang})
}
edit = (item)=>{
    this.setState({
        id:item.id,nama:item.nama,harga:item.harga,action:"update"
    })
    $(".r").hide("fast")
    $(".modal").show("slow")

}
bind = (event)=>{
    this.setState({[event.target.name]:event.target.value})
}
Save=(event)=>{
event.preventDefault()
let item = this.state.barang
if(this.state.action ==="insert"){
item.push({
    id:this.state.id,
    nama:this.state.nama,
    harga:this.state.harga,
    jumlah:0,
    total:0
})
}
else if(this.state.action ==="update"){
let index = item.findIndex(i=>i.id===this.state.id)
 item[index].nama = this.state.nama
 item[index].id=this.state.id
 item[index].harga=this.state.harga
 item[index].total=this.state.harga * item[index].jumlah
}
this.setState({barang:item})
$(".modal").hide("fast")
$(".r").show("slow")
}
add=()=>{
    this.setState({
        id:"",nama:"",harga:"",action:"insert"
    })
    $(".r").hide("fast")
    $(".modal").show("slow")
}
drop=(index)=>{
let item = this.state.barang
item.splice(index,1)
this.setState({barang:item})
}
render(){
    return(
        <div className="container">
            <div className="r">
            <ul className="list-group mt-4 d-flex justify-content-start flex-row">
                {
                this.state.barang.map((item,i)=>{
              
                    return(
                        <div className="card mr-5" style={{width:"18rem"}} >
                             <div className="card-header bg-info text-light">
                              keranjang
                          </div>
                          <div className="card-body">
                          <li className="list-group-item d-flex flex-column align-items-start" key={i}>
                         
                         <h5 className="text-primary">{item.nama}</h5>
                         <h6>
                             harga:{item.harga}
                         </h6>
                         <div className="d-flex flex-row" >
                         <i className="fa fa-minus-square text-warning mt-1" style={{fontSize:"20px"} }onClick={()=>this.kurang(item.id)}></i>
                         <h6 className="ml-2 mt-1">{item.jumlah}</h6>
                         <i className="fa fa-plus-square text-warning ml-2 mt-1" style={{fontSize:"20px"}} onClick={()=>this.tambah(item.id)}></i>
                
                         </div>
                  <h6>total:{item.total}</h6>
                     </li>
                          </div>
                          <div className="card-footer d-flex flex-row align-items-start">
                              <button type="button" className="btn btn-outline-success text-dark" onClick={()=>this.edit(item)}>Edit</button>
                              <button type="button" className="btn btn-outline-danger text-dark ml-4"onClick={()=>this.drop(i)}>Hapus</button>
                          </div>
                            
                        </div>


                       
                    )

                })}
            </ul>
            
            <button className="btn btn-primary mt-3 mr-4-ml-4 text-light" onClick={this.add}>Tambah</button>
            </div>
            <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-success text-light">
                    <h5 class="modal-title">Form</h5>
                   
                </div>
                <form onSubmit={this.Save}>
                <div class="modal-body d-flex flex-column align-items-start">
                    id
                    <input type="text" name="id"value={this.state.id} className="form-control" onChange={this.bind}/>
                    nama
                    <input type="text" name="nama"value={this.state.nama} className="form-control" onChange={this.bind}/>
                harga
                <input type="text" name="harga"value={this.state.harga} className="form-control" onChange={this.bind}/>

                </div>
                <div class="modal-footer">
                           <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
}
export default belanja