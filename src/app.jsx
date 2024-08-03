const contentNode=document.getElementById("content");

//const PropTypes = require("prop-types");

class IssueFilter extends React.Component{
    render () {
        return(<div >This is a place holder for Issue Filter</div>);
    }
}

class IssueRow extends React.Component{
    render () {
        const borderStyle = {border: '1px solid white', padding:4};
        return (
            <tr>
                <td style={borderStyle}>{this.props.issue_id}</td>
                <td style={borderStyle}>{this.props.issue_title}</td>
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
        const borderStyle = {border: '1px solid white', padding:4};
        return(
            <table style={{borderCollapse: 'Collapse'}}>
                <thead>
                    <tr>
                        <th style={borderStyle}>Id</th>
                        <th style={borderStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1} issue_title='Error in the Console when clicking Add' />
                    <IssueRow issue_id={2} issue_title='Missing bottom border on panel' />
                    <IssueRow issue_id={3} />
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
        const borderStyle = {color: 'red', fontSize: '30px', width: '300rem', height: '200rem', backgroundColor: 'black'};
        return (
        <div style={borderStyle}>
            <h1 style={{color: 'red', fontSize:'50px'}}>Issue Tracker</h1>
            <hr />
            <IssueFilter />
            <hr />
            <IssueTable />
            <hr />
            <IssueAdd />
            <hr />
        </div>);
    }
}

ReactDOM.render(<IssueList />,contentNode);