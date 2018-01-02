/**
 * NodeListItem
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
import NodeLink from './NodeLink';
import Wrapper from './Wrapper';

export class NodeListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the node
    const content = (
      <Wrapper>
        <NodeLink href={item.html_url} target="_blank">
          {item.name}
        </NodeLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`node-list-item-${item.full_name}`} item={content} />
    );
  }
}

NodeListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(NodeListItem);
