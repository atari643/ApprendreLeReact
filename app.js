// let n = 0
// function numberFormat(n) {
//     return n.toString().padStart(2, '0')
// }
// function render() {
//     const items = [
//         'Tache 1',
//         'Tache 2',
//         'Tache 3'
//     ]
//     const lis = items.map((item, k) => <li key={k}>{item}</li>)
//     const title = <React.Fragment><h1 className="title" id="title">
//         Bonjour les gens <span>{n}</span>
//     </h1>
//         <ul>
//             {lis}
//         </ul>
//     </React.Fragment>

//     ReactDOM.render(title, document.querySelector('#app'))
// }
// render()
// window.setInterval(() => {
//     n++
//     render();
// }, 1000)

function WelcomeFunc({name, children}){

    return <div>
        <h1>Bonjour {name}</h1>
        <p>{children}</p>
    </div>
}
class Welcome extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
    </div>
    }
}
class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }
    componentDidMount(){
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }
    componentwillUnmount(){
        window.clearInterval(this.timer)

    }
    tick(){
        this.setState({date: new Date()})
    }
    render() {
        const date = new Date()
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
        }
}
function Home(){
    return <div>
        <Welcome name = "Dorothée"/>
        <Welcome name = "Jean"/>
        <Clock/>
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#app'));