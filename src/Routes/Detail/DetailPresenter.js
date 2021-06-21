import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  //포스터이미지
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px;
`;

const Item = styled.span``;

const Divider = styled.span`
  //아이템과 아이템 컨테이너를 나눠줌
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 1em;
  opacity: 0.5;
  line-height: 1.5; // 줄들여쓰기 <br>기능
  width: 50%; //가로 비율 50퍼센트만 차지하게
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date
                : result.first_air_date}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? result.runtime + ` Minute`
                : result.episode_run_time[0] + ` Minute`}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1 // 장르 에서 슬래쉬(/) 하나 빼주는거임 자리값에서
                    ? genre.name
                    : `${genre.name}/
                  `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
