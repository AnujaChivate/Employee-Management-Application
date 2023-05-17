import React from "react";
// import { useParams } from "react-router-dom";

export default class EmployeeEdit extends React.Component {
    // const { id } = useParams();
    constructor() {
        super();
        this.state = { employee: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const id = window.location.pathname.split("/")[2];
        fetch(`/api/employees/${id}`)
            .then((response) => response.json())
            .then((data) => {
                data.employee.dateHired = new Date(data.employee.dateHired);
                this.setState({ employee: data.employee });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log("You submitted");
        const form = document.forms.employeeUpdate;
        console.log(form);
        let id = form.id.value;
        let name = form.name.value;
        let extension = form.extension.value;
        let email = form.email.value;
        let title = form.title.value;
        let currentlyEmployed = form.currentlyEmployed.value;

        let url = `/api/employees/${id}`;
        fetch(url, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                name: name,
                extension: extension,
                email: email,
                title: title,
                currentlyEmployed: currentlyEmployed ? true : false,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                document.getElementById("message").innerHTML = data.msg;
            });
    }

    render() {
        return (
            <form name="employeeUpdate" onSubmit={this.handleSubmit}>
                <h1>Edit {this.state.employee.name} </h1>
                ID:
                <br />
                <input
                    type="text"
                    name="id"
                    readOnly="readOnly"
                    defaultValue={this.state.employee._id}
                />
                <br />
                Name:
                <br />
                <input
                    type="text"
                    name="name"
                    defaultValue={this.state.employee.name}
                />
                <br />
                Extension:
                <br />
                <input
                    type="text"
                    name="extension"
                    defaultValue={this.state.employee.extension}
                />
                <br />
                Email:
                <br />
                <input
                    type="text"
                    name="email"
                    defaultValue={this.state.employee.email}
                />
                <br />
                Title:
                <br />
                <input
                    type="text"
                    name="title"
                    defaultValue={this.state.employee.title}
                />
                <br />
                Date Hired:
                <br />
                <input
                    type="text"
                    name="dateHired"
                    readOnly="readOnly"
                    defaultValue={this.state.employee.dateHired}
                />
                <br />
                Currently Employed?
                <br />
                <input
                    type="checkbox"
                    name="currentlyEmployed"
                    defaultChecked={this.state.employee.currentlyEmployed}
                />
                <br />
                <br />
                <input type="submit" value="Update" />
                <p id="message"></p>
            </form>
        );
    }
}
