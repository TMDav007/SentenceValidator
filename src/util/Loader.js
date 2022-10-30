import React from "react";
import styled from "styled-components";

import { RotatingLines } from "react-loader-spinner";
import { Backdrop } from "../components/Nextpage/Nextpage";

function Loader() {
  return (
    <Backdrop className="loader">
      <LoaderWrapper>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="76"
          visible={true}
        />
      </LoaderWrapper>
    </Backdrop>
  );
}

export default Loader;

const LoaderWrapper = styled.div`
  position: relative;
  width: 100%;
  top: 40%;
`;
