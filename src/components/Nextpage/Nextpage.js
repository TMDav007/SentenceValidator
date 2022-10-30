import React from "react";
import styled from "styled-components";

function Nextpage({setLoading}) {
  setLoading(false)
  return (
    <Backdrop>
      {" "}
      <Content>Congrats, You have qualified for the next round!!!</Content>
    </Backdrop>
  );
}

export default Nextpage;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1004;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;

  &.backdrop {
    z-index: 1005;
  }
`;

const Content = styled.p`
  font-size: 3em;
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 45%;
  font-weight: 600;
`;
