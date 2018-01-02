import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import NodeListItem from 'containers/NodeListItem';

function NodesList({ loading, error, nodes }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (nodes !== false) {
    return <List items={nodes} component={NodeListItem} />;
  }

  return null;
}

NodesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  nodes: PropTypes.any,
};

export default NodesList;
