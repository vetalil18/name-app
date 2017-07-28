var Hello = React.createClass({
    
    getInitialState: function() {
        return {
            inputText: '',
            fieldIsEmpty: true
        };  
    },
    inputChange: function(e) {
        this.setState({inputText: e.target.value});
        if(e.target.value.trim().length > 0) {
            this.setState({fieldIsEmpty: false});
        } else {
            this.setState({fieldIsEmpty: true});
        }
    },
    render: function() {
        var input = this.state.inputText,
            empty = this.state.fieldIsEmpty;
        var text;
        if(empty == false) {
            text = <div>Hello {input}</div>
        } else {
            text = <div>Hello srt</div>
        }
        return(
            <div>
                <input 
                    type="text" 
                    onChange={this.inputChange}
                />
                {text}
                
            </div>
        );
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);