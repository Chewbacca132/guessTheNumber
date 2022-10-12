import React from 'react';

class Nav extends React.Component {
    constructor(props){
        super();
        Nav.instance = this; //singleton
        this.state = {
            currentView : props.defaultView,
            currentProps : props.defaultProps || {},
            views : props.views,
        };
    }

    render(){
        const CurrentView = this.state.views[this.state.currentView];
        return <CurrentView {...this.state.currentProps}/>
    }

    navigate(viewName, props){
        this.setState({
            currentView : viewName,
            currentProps : props,
            views : this.state.views
        })
    }

    static navigate(viewName, props = {}){
        this.instance.navigate(viewName, props);
    }
}

export default Nav;