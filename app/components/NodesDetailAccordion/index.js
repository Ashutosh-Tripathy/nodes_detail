import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import Accordion from 'components/Accordion';
import AccordionItem from 'components/AccordionItem';
import LoadingIndicator from 'components/LoadingIndicator';
import NodeDetailAccordionItem from 'containers/NodeDetailAccordionItem';

function NodesDetailAccordian({ loading, error, nodesDetail }) {
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
        let accordianRender = [];
        for (let item in nodesDetail) {
            let accordionProps = { key: item, id: item, items: nodesDetail[item], component: NodeDetailAccordionItem };
            accordianRender.push(<Accordion {...accordionProps} />);
        }
        return (
            <div>
                {accordianRender}
                {/* {nodesDetail.map((item) => {
                    <Accordion key={item} items={nodesDetail[item]} component={NodeDetailAccordionItem} />
                })} */}
            </div>
        )
    }

    return null;
}

NodesDetailAccordian.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.any,
    nodesDetail: PropTypes.any,
};

export default NodesDetailAccordian;
