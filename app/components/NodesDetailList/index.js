import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import NodeDetailListItem from 'containers/NodeDetailListItem';

function NodesDetailList({ loading, error, nodesDetail }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (nodesDetail !== false) {
    return <List items={nodesDetail} component={NodeDetailListItem} />;
  }

  return null;
}

NodesDetailList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  nodesDetail: PropTypes.any,
};

export default NodesDetailList;
