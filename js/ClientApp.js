import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (div(null, MyTitleFactory({
      title: 'props are the best',
      color: 'peru'
    }), MyTitleFactory({
      title: 'semicolons are the worst',
      color: 'mediumaquamarine'
    }), MyTitleFactory({
      title: 'jk lol its okay',
      color: 'darkviolet'
    }), MyTitleFactory({
      title: 'Im the best',
      color: 'rebeccapurple'
    })))
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
