import React,{Component} from "react"
import $ from "jquery"

class hari extends React.Component{
    constructor(){
        super()
        this.state={
            hari:[
                 {
                     nama:"Hari Pahlawan",
                     tanggal:"1959-12-16"
                 }
                ,{  
                    nama:"Hari Sumpah pembuda",
                    tanggal:"1928-10-28"
                }
                ,{ 
                    
                    nama:"Hari Ibu kita kartini",
                    tanggal:"1964-05-02"
            }
            ],
            nama:"",
            tanggal:"",
            id:"",
            action:""
        }
        
    }
    
edit = (item,index)=>{
    this.setState({
        nama:item.nama,tanggal:item.tanggal,action:"update",id:index
    })
    $(".r").hide("fast")
    $(".modal").show("slow")

}
bind = (event)=>{
    this.setState({[event.target.name]:event.target.value})
}

Save=(event)=>{
    event.preventDefault()
    let item = this.state.hari
    if(this.state.action ==="insert"){
    item.push({
        nama:this.state.nama,
        tanggal:this.state.tanggal
    })
    }
    else if(this.state.action ==="update"){
        let index = this.state.id
     item[index].tanggal = this.state.tanggal
     item[index].nama = this.state.nama
    }
    this.setState({barang:item})
    $(".modal").hide("fast")
    $(".r").show("slow")
    }
    
add=()=>{
    this.setState({
        id:"",nama:"",tanggal:"",action:"insert"
    })
    $(".r").hide("fast")
    $(".modal").show("slow")
}
drop=(index)=>{
let item = this.state.hari
item.splice(index,1)
this.setState({barang:item})
}
render(){
    return(
        <div>
             <div className="container">
            <div className="r">
            <ul className="list-group mt-4 d-flex justify-content-start flex-row">
                {
                this.state.hari.map((item,i)=>{
              
                    return(
                        <div className="card mr-5" style={{width:"18rem"}} >
                             <div className="card-header bg-info text-light">
                              Event
                          </div>
                          <div className="card-body">
                          <li className="list-group-item d-flex flex-column align-items-start" key={i}>
                         <h5 className="text-warning text-sm">{item.nama}</h5>
                         <h6>
                        {item.tanggal}
                         </h6>
                     </li>
                          </div>
                          <div className="card-footer d-flex flex-row align-items-start">
                              <button type="button" className="btn btn-outline-success text-dark" onClick={()=>this.edit(item,i)}>Edit</button>
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
                    nama
                    <input type="text" name="nama"value={this.state.nama} className="form-control" onChange={this.bind}/>
                tanggal
                <input type="date" name="tanggal" min="1900-01-01" max="2050-12-31" value={this.state.tanggal} className="form-control" onChange={this.bind}/>

                </div>
                <div class="modal-footer">
                           <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
}
export default hari