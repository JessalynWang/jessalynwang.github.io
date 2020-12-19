import './demo_component.css';

function DemoComponent(props) {

    return (
      <div className="space">
        <a className="demo-link" href={props.link} rel="noreferrer" target="_blank">
          <div className="demo_component">
            <div className="thumbnail"><img src={require(`./../../../images/${props.image}`).default} alt="project thumbnail" className="thumbimg"/></div>
            <div className="title">{props.name}</div>
            <div className="uses">{props.uses}</div>
            <div className="desc">{props.desc}</div>
          </div>
        </a>
      </div>
    );
  }
  
  export default DemoComponent;