/**
 * NodeDetailListItem
 *
 * Lists the name and the issue count of a node
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import NodeDetailLink from './NodeDetailLink';
import Wrapper from './Wrapper';

export class NodeDetailListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the node
    const content = (
      <Wrapper>
        <NodeDetailLink href={item.html_url} target="_blank">
          {item.value}
        </NodeDetailLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`node-detail-list-item-${item.key}`} item={content} />
    );
  }
}

NodeDetailListItem.propTypes = {
  item: PropTypes.object,
  // currentUser: PropTypes.string,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(NodeDetailListItem);
