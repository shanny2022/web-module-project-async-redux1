import React from 'react';
import { connect} from 'react-redux';
import { getAdvice } from './../actions/adviceActions';
import styled from 'styled-components';

const Advice = (props) => {
    const { advice, isGetting } = props;

    const handleClick = () => {
        props.getAdvice();
    }
   
    if(isGetting) {
        return <h2>Getting Advice for you!</h2>;
    }
    return (
        <>
        <AdviceStyle>&#9829; {advice} &#9829;
</AdviceStyle>
        <ButtonStyle onClick={handleClick}>Want some more advice?</ButtonStyle>
        </>
    );
}

const mapStateToProps = state => {
    return {
        advice: state.advice,
        isGetting: state.isGetting,
       
    };
};

const AdviceStyle = styled.h2`
color: #203B3D;
font-size: 1rem;
font-weight: bold;

`
const ButtonStyle = styled.button`
background-color: #C4D5ED;
border-radius: 5px;
padding: 15px 20px 14px;

`
export default connect(mapStateToProps, {getAdvice})(Advice);