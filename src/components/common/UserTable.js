import React from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from "../../actions/users";

const TABLE_HEADERS = ['Name', 'Email', 'City', 'Company'];

export class UserTable extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderTableHeader () {
        return TABLE_HEADERS.map((name, index) => {
            return (<th key={index}>{name}</th>);
        })
    }

    renderTableData() {

        return this.props.users.users.map((user, index) =>  {
            const { name, email, address, company } = user;
            return (
                <tr key={index}>
                    <td data-label='name'>{name}</td>
                    <td data-label='email'><a href={`mailto:${email}`}>{email}</a></td>
                    <td data-label='city'>{address.city}</td>
                    <td data-label='company'>{company.name}</td>
                </tr>
            );
        });
    }

    renderTable() {
        return (
            <table className="ui celled table">
                <thead><tr>{this.renderTableHeader()}</tr></thead>
                <tbody>{this.renderTableData()}</tbody>
            </table>
        );
    }

    render() {
        if(this.props.users.error) {
            return <div>A network error occured</div>
        }
        if(this.props.users.loading) {
            return <div>Loading...</div>
        }
        return this.renderTable();
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable)