import React,{Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxilliary/Auxilliary";
// import axios from "axios";
const withErrorHandler=(WrappedComponent,axios)=>{
   
    return class extends Component{
        state={
            error:null
        }
        errorConfirmedHandler=()=>{
            this.setState({
                error:null
            });
        }
        componentWillMount(){
            this.reqInterceptor= axios.interceptors.request.use(
                req=>{
                    this.setState({
                        error:null
                    });
                    return req; 

                },error=>{return error;}
            );
           this.resInterceptor=   axios.interceptors.response.use(res=>res,
                error=>{
                    this.setState({
                        error:error
                    });
                    return error;
                });
        }
        componentWillUnmount(){
                console.log('Will Unmount',this.reqInterceptor,this.resInterceptor);
              axios.interceptors.request.eject(this.reqInterceptor);
              axios.interceptors.request.eject(this.resInterceptor);
        }
        render(){
            return (
                <Aux>
                    <Modal show={this.state.error}
                    closeModal={this.errorConfirmedHandler}
                    >
                        {this.state.error?this.state.error.message:null}
                        </Modal>
                        
                    <WrappedComponent{...this.props}/>
                </Aux>
                
            );
        }
    }
    
}
export default withErrorHandler;