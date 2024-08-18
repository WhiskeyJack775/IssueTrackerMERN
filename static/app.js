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

function IssueRow(props) {
    const issue = props.issue;
    return React.createElement(
        'tr',
        null,
        React.createElement(
            'td',
            null,
            props.issue.id
        ),
        React.createElement(
            'td',
            null,
            props.issue.status
        ),
        React.createElement(
            'td',
            null,
            props.issue.owner
        ),
        React.createElement(
            'td',
            null,
            props.issue.created.toDateString()
        ),
        React.createElement(
            'td',
            null,
            props.issue.effort
        ),
        React.createElement(
            'td',
            null,
            props.issue.completionDate ? issue.completionDate.toDateString() : ' '
        ),
        React.createElement(
            'td',
            null,
            props.issue.title
        )
    );
}

/*IssueRow.propTypes = {
    issue_id: React.PropTypes.number.isRequired,
    issue_title: React.PropTypes.string
};*/

function IssueTable(props) {
    const issueRows = props.issues.map(issue => React.createElement(IssueRow, { key: issue.id, issue: issue }));
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

/*IssueRow.defaultProps = {
    issue_title: '--Title Not Specified--',
};*/

class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var form = e.target;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date()
        });
        form.owner.value = "";
        form.title.value = "";
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { name: 'issueAdd', onSubmit: this.handleSubmit },
                React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
                React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
                React.createElement(
                    'button',
                    null,
                    'Add'
                )
            )
        );
    }
}

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };
        this.createIssue = this.createIssue.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
            this.setState({ issues: issues });
            //setTimeout(this.createTestIssue, 2000);
        }, 1000);
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    }

    /*createTestIssue () {
        this.createIssue ({
            status: 'New', owner: 'Thaheer', created: new Date(), title: 'Completion Date should be optional',
        });
    }*/
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
            React.createElement(IssueAdd, { createIssue: this.createIssue }),
            React.createElement('hr', null)
        );
    }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode);