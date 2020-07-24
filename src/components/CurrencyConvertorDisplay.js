
import React, { Component } from 'react'
import axios from 'axios'
import { DisplayCurreny } from './DisplayCurreny'
import { connect } from 'react-redux'
import './../cssfiles/CurrencyConvertor.css'



class CurrencyConvertorDisplay extends Component {
    
    input = React.createRef();
    state = {
        exchangeRates: [{ currency: "EUR", rate: '1' }],
        targetValue: this.props.targetValue,
        //baseValue: this.props.baseValue
    }

    componentDidMount() {
        axios.get(`https://api.exchangeratesapi.io/latest`)
            .then(res => {
                const exchangerates = res.data['rates'];
                const excRates = [...this.state.exchangeRates];
                Object.keys(exchangerates).map(ele => {
                    const exchangeR = { currency: ele, rate: exchangerates[ele] }
                    //excRates = [...excRates, exchangeR]
                    excRates.push(exchangeR)
                    
                });
                this.setState({
                    exchangeRates : excRates
                })

            }
            )
    }

    handleChangebase = (event) => {
        this.props.updateBaseCurrency(event.target.value)
    }
    handleChangetarget = (event) => {
        this.props.updateTargetCurrency(event.target.value)
       // this.newTargetValue();

    }

    newTargetValue = () => {
        
        let target = 1
        let base = 1
        
        Object.keys(this.state.exchangeRates).map((curr) => {
            if (this.state.exchangeRates[curr].currency === this.props.targetCurrency) {
                console.log("tarcur", this.props.targetCurrency)
                target= this.state.exchangeRates[curr].rate 
            }
            if (this.state.exchangeRates[curr].currency === this.props.baseCurrency) {
                console.log("bascur", this.props.baseCurrency)
                base= this.state.exchangeRates[curr].rate 
            }
        })

        console.log("base value", base, "\ntarget value", target )
        this.setState({
            //baseValue : this.input.current.value,
            targetValue: ((target/base)*this.props.baseValue).toFixed(2)
        }, () => {  this.props.updateTargetValue(this.state.targetValue)})
       
    }

   componentDidUpdate (prevProps) { 
       if(this.props.baseValue !== prevProps.baseValue || this.props.baseCurrency !==prevProps.baseCurrency || this.props.targetCurrency!== prevProps.targetCurrency)
            this.newTargetValue();
   }
    render() {
        //console.log(`targetCurrency` , this.props.targetCurrency, "\nbasecur", this.props.baseCurrency)
       
        return (
            <div className="ConvertorDisplay" >
                <div className="baseCurrency">
                    <DisplayCurreny selectedValue={this.props.baseCurrency} OnChange={this.handleChangebase} exchangeRates={this.state.exchangeRates} />
                    <input className="input" value={this.props.baseValue}  readOnly/>
                </div>
                <div className="targetCurrency">
                    <DisplayCurreny selectedValue={this.props.targetCurrency} OnChange={this.handleChangetarget} exchangeRates={this.state.exchangeRates} />
                    <input className="input"  value={this.props.targetValue} readOnly/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        baseCurrency: state.baseCurrency,
        targetCurrency: state.targetCurrency,
        targetValue: state.targetValue,
        baseValue: state.baseValue
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBaseCurrency: (basecurr) => dispatch({ type: 'UPADTE BASE CURRENCY', currency: basecurr }),
        updateTargetCurrency: (targetcurr) => dispatch({ type: 'UPADTE TARGET CURRENCY', currency:targetcurr }),
        updateBaseValue: () => dispatch({ type: 'UPADTE BASE VALUE' }),
        updateTargetValue: (val) => dispatch({ type: 'UPADTE TARGET VALUE', value: val}),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConvertorDisplay);
