import {h, Component} from 'composi'
  
const pics = []
for (let i = 17; i !=0; i--) {
  pics.push(`/pics/IMG_${i}.jpg`)
}

function Slide({img, idx, count}) {
  return (
    <div  class={`slide ${count == idx + 1 ? 'active' : ''}`} style={{backgroundImage: `url(${img})`}}></div>
  )
}

export class SlideShow extends Component {
  constructor(props) {
    super(props)
    this.container = 'section'
    this.state = {
      count: 1,
      pics: pics
    }
  }
  render(state) {
    // console.log(state.pics)
    return (
      <div class='slide-show'>
        {
          state.pics.map((img, idx) => <Slide {...{count: this.state.count, idx, img}} />)
        }
      </div>
    )
  }
  tick() {
    let count = parseInt(this.state.count)
    count += 1
    if (count > 17) count = 1
    this.setState({count})
  }
  componentDidMount() {
    setInterval(() => {
      this.tick()
    }, 5000)
  }
}
