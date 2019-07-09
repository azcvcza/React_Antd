import React from 'react';

class Square extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: null,
            }
        }
        render() {
            return ( < button className = "square"
                onClick = {
                    () => this.setState({ value: 'X' })
                } > click here get: { this.state.value } <
                /button>)
            }
        }
        export default Square;