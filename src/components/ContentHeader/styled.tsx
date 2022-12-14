import styled from 'styled-components';
import { ITitleContainer} from '../../types';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: 480px) {
       flex-direction: column;
    }
    
`;

export const TitleContainer = styled.div<ITitleContainer>`
    >h1{
        color: ${props => props.theme.colors.white};

        &::after{
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColor};
        }

        @media(max-width: 480px) {
            > h1 {
                font-size: 18px;
                &::after{
                    content: '';
                    display: block;
                    width: 55px;
                    border-bottom: 5px solid ${props => props.lineColor};
                }       
            }
        }
    }   

`;  

export const Controllers = styled.div`
    display: flex;
    @media(max-width: 480px) {
       justify-content: space-around;
       width: 100%;
       margin-top: 20px;
    }
`;