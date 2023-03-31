import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const ShowError = ({ errorYa }) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errorYa.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>)
}

class Index extends React.Component {
    state = {
        username : '',
        email : '',
        noHp : '',
        gender : '',
        password : '',
        setuju : false,
        errorYa : []
    }
    // validasi
    submitt = event =>{
        event.preventDefault();
        const {username, email, noHp, gender, password} = this.state;
        let pesanError = [];
        if(username.length === 0){
            pesanError = [...pesanError,"Username tidak boleh Kosong"];
        }else if(username.length < 4){
            pesanError = [...pesanError,"Username terlalu pendek"];
        }
        if(email.length === 0){
            pesanError = [...pesanError," Email tidak boleh kosong"];
        }
        if(noHp.length === 0 ){
            pesanError = [...pesanError," Nomer Hp tidak boleh kosong"];
        }
        if(gender.length === 0){
            pesanError = [...pesanError," Jenis Kelamin tidak boleh kosong"];
        }
        if(password.length === 0){
            pesanError = [...pesanError," Password tidak boleh kosong"];
        }
        
        // Menggunakan javascript regex email
        // https://www.google.com/search?q=javascript+regex+email&oq=javascript+regex+e&aqs=chrome.0.0i512l2j69i57j0i512l7.6292j0j9&sourceid=chrome&ie=UTF-8
        // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if(re.test(String(email).toLowerCase())){
        //    pesanError = [...pesanError," email tidak valid"]
        // }

        //output
        if(pesanError.length > 0 ){
            this.setState({errorYa : pesanError});
        } else{
            alert(`
            username: ${this.state.username}
            email: ${this.state.email}
            noHP: ${this.state.noHp}
            gender: ${this.state.gender}
            password: ${this.state.password}
            setuju: ${this.state.setuju ? "YES" : "NO"}
            `)
            this.setState({
                errorYa: []
            })
        }
    }
    // akhir validasi
    render(){
        return(
            <div className="bungkus">
                <form class="mt-2" onSubmit={this.submitt}>
                    {
                        this.state.errorYa && <ShowError errorYa={this.state.errorYa} />
                    }
                    <h1>Form Regristrasi</h1>
                    <div class="row mb-3 ">
                        <label class="col-sm-10 col-form-label">Username</label>
                        <div class="col-sm-12">
                            <input 
                                type="text" 
                                class="input form-control"  
                                name="username" 
                                onChange={t => this.setState({username: t.target.value}
                                ,()=>console.log(this.state))}  
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Email</label>
                        <div class="col-sm-12">
                            <input 
                                type="email" 
                                class="input form-control"  
                                name="email" 
                                onChange={t => this.setState({email: t.target.value}
                                ,()=>console.log(this.state))} 
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-5 col-form-label">Nomer Telepon</label>
                        <div class="col-sm-12">
                            <input 
                                type="tel" 
                                class="input form-control"  
                                name="noHp" 
                                onChange={t => this.setState({noHp: t.target.value}
                                ,()=>console.log(this.state))}
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-7 col-form-label">Jenis Kelamin</label>
                        <div class="col-sm-12">
                            <select 
                                class="input form-select" 
                                aria-label="Default select example" 
                                name="gender" 
                                onChange={t => this.setState({gender: t.target.value}
                                ,()=>console.log(this.state))} 
                            >
                                <option selected>Jenis kelamin</option>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-12">
                            <input 
                                type="password" 
                                class="input form-control"  
                                name="password" 
                                onChange={t => this.setState({password: t.target.value}
                                ,()=>console.log(this.state))}
                            />
                        </div>
                    </div>
                    <div class="cek row mb-2">
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            checked={this.state.setuju} 
                            onChange={t => this.setState({setuju: t.target.checked}
                            ,()=>console.log(this.state))} 
                        />
                        <div class="col-sm-10 col-form-label">
                                <label class="form-check-label" >
                                    Setuju dengan kebijakan perusahaan
                                </label>
                        </div>
                        <button type="submit" class="input btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
            
        )
    }
}
export default Index;
