import React from 'react';
import { Header, Body, Title, Left, Button, Icon, Right } from 'native-base';

const renderLeftSide = (url) => (
  <Left>
    <Button
      transparent
      onPress={() => url.goBack()}>
      <Icon type='Feather' name="arrow-left" />
    </Button>
  </Left>
)

const renderRightSide = (url) => (
  <Right>
    <Button
      transparent
      onPress={() => url.logOutFirebase()}>
      <Icon type='Feather' name="log-out" />
    </Button>
  </Right>
)

export default (title, goBackUrl=false, logOutUrl=false ) => {
  const elementLeftHeader = (goBackUrl) ? renderLeftSide(goBackUrl) : <Left />;
  const elementRightHeader = (logOutUrl) ? renderRightSide(logOutUrl) : <Right />;

  return (
    <Header noShadow>
      { elementLeftHeader }
      <Body>
        <Title>{title}</Title>
      </Body>
      { elementRightHeader }
    </Header>
  )
}

