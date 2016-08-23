/**
 * Created by jabue on 16-08-17.
 */
var Greeting = React.createClass({
        getInitialState : function() {
            return {
                name : "chris"
            };
        },
        handleClick : function() {
            console.log(this.state.name);
            this.setState({
                name : "bob"
            });
            console.log(this.state.name);
        },
        render : function() {
            return <div>
            <button onClick = {this.handleClick}>SET STATE</button>
    hello {this.state.name}
</div>;
}
});

ReactDOM.render(
<Greeting/>,
    document.getElementById('greeting-div')
);