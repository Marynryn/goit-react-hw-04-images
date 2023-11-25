import React from "react";
import { SearchBtn, SearchForm, Input, SearchBtnLabel, HeaderSearchbar } from "./Searchbar.styled";

export class Searchbar extends React.Component {
    state = {
        query: "",
    }
    handleSubmit = event => {
        event.preventDefault();
        const { query } = this.state;
        this.props.onSubmit(query);
        this.reset();
    };
    handleChange = event => {
        this.setState({ query: event.currentTarget.value })
    }
    reset = () => {
        this.setState({ query: '' });
    };
    render() {
        return (
            <HeaderSearchbar >
                <SearchForm onSubmit={this.handleSubmit}>
                    <Input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                    <SearchBtn type="submit">
                        <SearchBtnLabel >Search</SearchBtnLabel>
                    </SearchBtn>
                </SearchForm>
            </HeaderSearchbar>
        )
    }
}