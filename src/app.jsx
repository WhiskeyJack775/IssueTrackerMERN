const contentNode=document.getElementById("content");

//const PropTypes = require("prop-types");

class IssueFilter extends React.Component{
    render () {
        return(<div >This is a place holder for Issue Filter</div>);
    }
}

const issues = [
    {
        id: 1, status: 'Open', owner: 'Ravan', created: new Date('2024-08-04'), effort: 5, completionDate: undefined, title: 'Error in console when clicking Add',
    },
    {
        id: 2, status: 'Assigned', owner: 'Venkat', created: new Date('2024-09-15'), effort: 14, completionDate: new Date('2024-09-16'), title: 'Missing bottom border on panel',
    },
];

class IssueRow extends React.Component{
    render () {
        const issue = this.props.issue;
        //const borderStyle = {border: '1px solid white', padding:4};
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ?issue.completionDate.toDateString(): ' '}</td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

class IssueAdd extends React.Component{
    render () {
        return(<div>This a place holder for Issue Add form</div>);
    }
}

IssueRow.propTypes = {
    issue_id: React.PropTypes.number.isRequired,
    issue_title: React.PropTypes.string
};

class IssueTable extends React.Component{
    render () {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
        //const borderStyle = {border: '1px solid white', padding:4};
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
}

IssueRow.defaultProps = {
    issue_title: '--Title Not Specified--',
};

class IssueList extends React.Component{
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
            <IssueTable issues = {issues}/>
            <hr />
            <IssueAdd />
            <hr />
        </div>);
    }
}

ReactDOM.render(<IssueList />,contentNode);