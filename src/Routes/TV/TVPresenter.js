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

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)} //2018-MM-DD  2018년만 가져가게 섭스트링.
              //위에는 만약 10000만넘어가면 4자리수가 넘어가니까 그냥 모든 날짜 데이터 출력 &&는 삼항연산자와 같은기능
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)} //2018-MM-DD  2018년만 가져가게 섭스트링.
              //위에는 만약 10000만넘어가면 4자리수가 넘어가니까 그냥 모든 날짜 데이터 출력 &&는 삼항연산자와 같은기능
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              title={show.original_name}
              imageUrl={show.poster_path}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)} //2018-MM-DD  2018년만 가져가게 섭스트링.
              //위에는 만약 10000만넘어가면 4자리수가 넘어가니까 그냥 모든 날짜 데이터 출력 &&는 삼항연산자와 같은기능
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
