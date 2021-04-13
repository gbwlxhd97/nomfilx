import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)} //2018-MM-DD  2018년만 가져가게 섭스트링.
              isMovie={true} //위에는 만약 10000만넘어가면 4자리수가 넘어가니까 그냥 모든 날짜 데이터 출력 &&는 삼항연산자와 같은기능
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Up coming">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)} //2018-MM-DD  2018년만 가져가게 섭스트링.
              isMovie={true} //위에는 만약 10000만넘어가면 4자리수가 넘어가니까 그냥 모든 날짜 데이터 출력 &&는 삼항연산자와 같은기능
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)} //2018-MM-DD  2018년만 가져가게 섭스트링.
              isMovie={true} //위에는 만약 10000만넘어가면 4자리수가 넘어가니까 그냥 모든 날짜 데이터 출력 &&는 삼항연산자와 같은기능
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
