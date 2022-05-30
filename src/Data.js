import './Data.css';

function Data() {
  return (
    <div className='Data'>
        <div className='data-left'>
            <div className='data-left-title'><h1>Acquiring the Data.</h1></div>
            <div className='data-left-text'><p>In Quebec, the only website (I could find) that openly exposes data on sold houses is <a href="https://duproprio.com/en">DuProprio</a>.
              This website allows homeowners to sell their houses without the use of an agent.
              The data I was interested in was sold homes and condos, anywhere in Quebec.
              Luckily, DuProprio allows users to filter their search using these exact criteria.</p></div>
              <div className='data-left-img1'>
                <div className='img'>
                  <div className='data-left-img1-img'></div>
                  <div className='data-left-img1-desc'><p>DuProprio Search Filters.</p></div>
                </div>
              </div>
        </div>
        <div className='data-right'></div>
    </div>
  );
}

export default Data;
