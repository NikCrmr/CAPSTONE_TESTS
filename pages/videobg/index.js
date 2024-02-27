import styled from "styled-components";

export default function VideoBGRender() {
  return (
    <>
      <StyledVideoContainer>
        <StyledVideo loop autoPlay muted>
          <source src="/assets/airplane-rain.mp4" type="video/mp4" />
        </StyledVideo>
      </StyledVideoContainer>
    </>
  );
}

const StyledVideoContainer = styled.div`
  width: 100%;
`;

const StyledVideo = styled.video`
  width: 100%;
  position: fixed;
  object-fit: cover;
`;
