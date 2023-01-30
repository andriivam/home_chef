import React from 'react';
import Cards from 'react-credit-cards-2';

 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  submitHandler = (event) => {
    event.preventDefault();
    window.location.href = '/home/user/checkout/lastPage';

}

  render() {
    return (
      <div id="PaymentForm">
        <br /><Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        /><br /><br />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="name"
            placeholder="Full Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="Expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br/><br/>
           
            <input type="submit" className="pay" value="Confirm Payment" onClick={this.submitHandler}/>
          
          </form>
      </div>
    );
  }
}