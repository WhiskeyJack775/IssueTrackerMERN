const contentNode=document.getElementById("content");

//const PropTypes = require("prop-types");

class IssueFilter extends React.Component{
    render () {
        return(<div >This is a place holder for Issue Filter</div>);
    }
}

function IssueRow (props) {
    const issue = props.issue;
    return(
        <tr>
            <td>{props.issue.id}</td>
            <td>{props.issue.status}</td>
            <td>{props.issue.owner}</td>
            <td>{props.issue.created.toDateString()}</td>
            <td>{props.issue.effort}</td>
            <td>{props.issue.completionDate ?issue.completionDate.toDateString(): ' '}</td>
            <td>{props.issue.title}</td>
        </tr>
    );
}


/*IssueRow.propTypes = {
    issue_id: React.PropTypes.number.isRequired,
    issue_title: React.PropTypes.string
};*/

function IssueTable (props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
    return(
        <table className='borderedTable'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>Completed</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {issueRows}
            </tbody>
        </table>
    );
}

/*IssueRow.defaultProps = {
    issue_title: '--Title Not Specified--',
};*/

class IssueAdd extends React.Component{
    constructor () {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        var form = e.target;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date(),
        });
        form.owner.value= "";
        form.title.value= "";
    }

    render () {
        return (
            <div>
                <form name='issueAdd' onSubmit={this.handleSubmit}>
                    <input type='text' name='owner' placeholder="Owner" />
                    <input type='text' name='title' placeholder="Title" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

class IssueList extends React.Component{
    constructor () {
        super();
        this.state = {issues: []};
        this.createIssue = this.createIssue.bind(this);
    }

    componentDidMount () {
        this.loadData();
    }

    loadData () {
        setTimeout( () => {
            this.setState({issues: issues});
            //setTimeout(this.createTestIssue, 2000);
        }, 1000)
    }

    createIssue (newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({issues: newIssues});
    }

    /*createTestIssue () {
        this.createIssue ({
            status: 'New', owner: 'Thaheer', created: new Date(), title: 'Completion Date should be optional',
        });
    }*/
    render () {
        //const fontcolor = {color: 'red'};
        //const fontStyle = {color: 'red', fontSize: '30px'};
        //const borderStyle = {color: 'red', fontSize: '30px', width: '300rem', height: '200rem', backgroundColor: 'black'};
        return (
        <div className = 'listStyle'>
            <h1 style={{color: 'darkmagenta', fontSize:'50px'}}>Issue Tracker</h1>
            <hr />
            <IssueFilter />
            <hr />
            <IssueTable issues = {this.state.issues}/>
            <hr />
            <IssueAdd createIssue = {this.createIssue} />
            <hr />
        </div>);
    }
}

ReactDOM.render(<IssueList />,contentNode);