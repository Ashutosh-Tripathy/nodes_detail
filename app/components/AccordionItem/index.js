import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function AccordionItem(props) {
  return (
    <Wrapper>
      <Item>
        {props.item}
      </Item>
    </Wrapper>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.any,
};

export default AccordionItem;
