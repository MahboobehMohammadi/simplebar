import React from 'react';
import ReactDOM from 'react-dom';
import 'SimpleBar';


ReactDOM.render(
    <section>
        <h1>Simplebar demo page</h1>
        <section>
            <div className="col demo1-col">
                <div id="demo1" className="demo1" data-simplebar data-simplebar-auto-hide="false">
                    {[...Array(50)].map((x, i) =>
                        <p key={i} className="odd">Some content</p>
                    )}
                </div>
            </div>
            <div className="col demo2-col">
                <h2>Default</h2>
                <div id="demo2" className="demo1" data-simplebar>
                    {[...Array(10)].map((x, i) =>
                        <p key={i} className="odd">Some content</p>
                    )}
                </div>
            </div>
        </section>
        <section>
            <div className="col demo4-col">
                <div 
                    className={"demo4"} 
                    style={{ width: '200px', direction: 'rtl' }} 
                    data-simplebar
                >
                    <div className={"box"}>1</div>
                    <div className={"box"}>2</div>
                    <div className={"box"}>3</div>
                    <div className={"box"}>4</div>
                    <div className={"box"}>5</div>
                </div>
            </div>
        </section>
    </section>,
    document.getElementById('root')
);

// var demo5 = new SimpleBar(document.getElementById('demo5'));