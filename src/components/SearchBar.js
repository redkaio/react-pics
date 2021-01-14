import React from 'react';

class SearchBar extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search a name" name="text" />
                </form>
            </div>
        );
    }

}

export default SearchBar;