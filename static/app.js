const contentNode = document.getElementById("content");

//const PropTypes = require("prop-types");

class IssueFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a place holder for Issue Filter'
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const borderStyle = { border: '1px solid white', padding: 4 };
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                { style: borderStyle },
                this.props.issue_id
            ),
            React.createElement(
                'td',
                { style: borderStyle },
                this.props.issue_title
            )
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This a place holder for Issue Add form'
        );
    }
}

IssueRow.propTypes = {
    issue_id: React.PropTypes.number.isRequired,
    issue_title: React.PropTypes.string
};

class IssueTable extends React.Component {
    render() {
        const borderStyle = { border: '1px solid white', padding: 4 };
        return React.createElement(
            'table',
            { style: { borderCollapse: 'Collapse' } },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        { style: borderStyle },
                        'Id'
                    ),
                    React.createElement(
                        'th',
                        { style: borderStyle },
                        'Title'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                React.createElement(IssueRow, { issue_id: 1, issue_title: 'Error in the Console when clicking Add' }),
                React.createElement(IssueRow, { issue_id: 2, issue_title: 'Missing bottom border on panel' }),
                React.createElement(IssueRow, { issue_id: 3 })
            )
        );
    }
}

IssueRow.defaultProps = {
    issue_title: '--Title Not Specified--'
};

class IssueList extends React.Component {
    render() {
        //const fontcolor = {color: 'red'};
        //const fontStyle = {color: 'red', fontSize: '30px'};
        const borderStyle = { color: 'red', fontSize: '30px', width: '300rem', height: '200rem', backgroundColor: 'black' };
        return React.createElement(
            'div',
            { style: borderStyle },
            React.createElement(
                'h1',
                { style: { color: 'red', fontSize: '50px' } },
                'Issue Tracker'
            ),
            React.createElement('hr', null),
            React.createElement(IssueFilter, null),
            React.createElement('hr', null),
            React.createElement(IssueTable, null),
            React.createElement('hr', null),
            React.createElement(IssueAdd, null),
            React.createElement('hr', null)
        );
    }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode);