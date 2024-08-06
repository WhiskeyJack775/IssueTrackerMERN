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

const issues = [{
    id: 1, status: 'Open', owner: 'Ravan', created: new Date('2024-08-04'), effort: 5, completionDate: undefined, title: 'Error in console when clicking Add'
}, {
    id: 2, status: 'Assigned', owner: 'Venkat', created: new Date('2024-09-15'), effort: 14, completionDate: new Date('2024-09-16'), title: 'Missing bottom border on panel'
}];

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        //const borderStyle = {border: '1px solid white', padding:4};
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                issue.id
            ),
            React.createElement(
                'td',
                null,
                issue.status
            ),
            React.createElement(
                'td',
                null,
                issue.owner
            ),
            React.createElement(
                'td',
                null,
                issue.created.toDateString()
            ),
            React.createElement(
                'td',
                null,
                issue.effort
            ),
            React.createElement(
                'td',
                null,
                issue.completionDate ? issue.completionDate.toDateString() : ' '
            ),
            React.createElement(
                'td',
                null,
                issue.title
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
        const issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue.id, issue: issue }));
        //const borderStyle = {border: '1px solid white', padding:4};
        return React.createElement(
            'table',
            { className: 'borderedTable' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        null,
                        'Id'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Status'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Owner'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Created'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Effort'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Completed'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Title'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                issueRows
            )
        );
    }
}

IssueRow.defaultProps = {
    issue_title: '--Title Not Specified--'
};

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: issues };
        setTimeout(this.createTestIssue.bind(this), 2000);
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    }

    createTestIssue() {
        this.createIssue({
            status: 'New', owner: 'Thaheer', created: new Date(), title: 'Completion Date should be optional'
        });
    }
    render() {
        //const fontcolor = {color: 'red'};
        //const fontStyle = {color: 'red', fontSize: '30px'};
        //const borderStyle = {color: 'red', fontSize: '30px', width: '300rem', height: '200rem', backgroundColor: 'black'};
        return React.createElement(
            'div',
            { className: 'listStyle' },
            React.createElement(
                'h1',
                { style: { color: 'darkmagenta', fontSize: '50px' } },
                'Issue Tracker'
            ),
            React.createElement('hr', null),
            React.createElement(IssueFilter, null),
            React.createElement('hr', null),
            React.createElement(IssueTable, { issues: this.state.issues }),
            React.createElement('hr', null),
            React.createElement(IssueAdd, null),
            React.createElement('hr', null)
        );
    }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode);