import { useState } from "react";
import styled from "styled-components";

const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexRow = styled.div`
  flex: 0 0 auto;
  margin-top: 1rem;
  &:first-of-type {
    margin-top: 0;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

interface StyledStarProps {
  isSelected: boolean;
}

interface RatingState {
  rawRating: number;
}

const StyledStar = styled.div`
  flex: 0 0 auto;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  &:last-of-type {
    margin-right: 0;
  }

  cursor: pointer;
  background-color: ${(props: StyledStarProps) => {
    return (props.isSelected) ? "gold" : "white";
  }};
  
  clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
    );
`
const NUMBER_OF_STARS: number = 5;


const defaultState: RatingState = {
  rawRating: -1
}
export default function Rating() {
  const [state, setState] = useState(defaultState);

  return (
    <StyledRating>
      <FlexRow>
        Rating:
      </FlexRow>
      <FlexRow>
        {
          [...Array(NUMBER_OF_STARS)].map((value, index) => {
            return (
              <StyledStar key={index}
                isSelected={index <= state.rawRating} 
                onClick={() => {
                  setState({rawRating: index});
                }}>
              </StyledStar>
            )
          })
        }
      </FlexRow>
      <FlexRow>
        <RatingString {...state}/>
      </FlexRow>
    </StyledRating>
  );
}

function RatingString(props: RatingState) {
  if (props.rawRating < 0) return null;

  //rating which starts with 1
  const rating = props.rawRating + 1;
  return (
    <span>
      {"Current rating: " + rating + " star" + ((rating === 1) ? "" : "s")}
    </span>
  )
}