import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

export function FrontAthleteBody({ profile }) {
  return (
    <Wrapper>
      <Card.Title>{`${profile.firstName} ${profile.lastName}`}</Card.Title>
      <CardTextWrapper>
      <Card.Text>{profile.position}</Card.Text>
      </CardTextWrapper>
    </Wrapper>
  );
}


export function FrontStudentBody({ profile }) {
  return (
    <>
      <Card.Title>{`${profile.firstName} ${profile.lastName}`}</Card.Title>
      <Card.Text>{profile.achievements[0]}</Card.Text>
    </>
  );
}

export function FrontCadetBody({ profile }) {
  return (
    <>
      <Card.Title>{`${profile.firstName} ${profile.lastName}`}</Card.Title>
      <Card.Text>{profile.DesiredMilitaryOccupationalSpecialty}</Card.Text>
    </>
  );
}

const Wrapper = styled.div``
const CardTextWrapper = styled.div``