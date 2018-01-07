/**
 * NodeDetailAccordionItem
 *
 * Accordions the name and the issue count of a node
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import AccordionItem from 'components/AccordionItem';
import NodeDetailLink from './NodeDetailLink';
import Wrapper from './Wrapper';
import Collapsible from 'react-collapsible';
import  Diff from 'react-diff';

export class NodeDetailAccordionItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        const items = this.props.items;

        // Put together the content of the node
        const content = (
            <Collapsible trigger={this.props.id}>
                <div key={0}> <Diff inputA={items[0]} inputB={items[1]} type="chars" /></div>
            </Collapsible>
            // <Wrapper>
            //     <NodeDetailLink href={item.html_url} target="_blank">
            //         {item.value}
            //     </NodeDetailLink>
            // </Wrapper>
        );

        // Render the content into a accordion item
        return (
            <AccordionItem key={`node-detail-accordion-item-${this.props.key}`} item={content} />
        );
    }
}

NodeDetailAccordionItem.propTypes = {
    items: PropTypes.array,
    id: PropTypes.string
    // currentUser: PropTypes.string,
};

export default connect(createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
}))(NodeDetailAccordionItem);
