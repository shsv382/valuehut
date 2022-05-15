import styled from 'styled-components';

export const BannerShadow = styled.div`
    background-color: rgba(0,0,0,0.3);
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & img {
        display: block;
        max-width: 300px;
        max-height: 300px;
        @media screen and (max-width: 1023px) {
            max-width: 220px;
            max-height: 220px;
        }
        @media screen and (max-width: 767px) {
            max-width: 180px;
            max-height: 180px;
        }
        @media screen and (max-width: 479px) {
            max-width: 150px;
            max-height: 150px;
        }
    }
`