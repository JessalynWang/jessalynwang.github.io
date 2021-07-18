import DemoComponent from "../demo_component/demo_component";

function ComponentTab(props) {

    function togglecCollapse(e) {
        const x = e.currentTarget.id;
    
        let y = document.getElementsByClassName(x)
    
        for (var i = 0; i < y.length; i++) {
          y[i].classList.toggle("hide");
        }
      };

    return (
    <>
        <div className="sub-title">
            <button id={props.id} onClick={togglecCollapse}>
                <div>{props.name}</div>
                <i className={`fas fa-chevron-up ${props.id}`}></i>
                <i className={`fas fa-chevron-down ${props.id} hide`}></i>
            </button>
        </div>
        <div className={`sub-container hide ${props.id}`}>
            {
            props.data.map((val, index) =>
                <DemoComponent name={val.name} image={val.image} link={val.link} uses={val.uses} desc={val.description} key={index}/>
            )
            }
        </div>
    </>
    );
  }
  
  export default ComponentTab;