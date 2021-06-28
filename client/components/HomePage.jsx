import React from 'react'

function HomePage() {
    return (
        <div>
            <div className="header">
                <h1>Dianne Tennent</h1>
                <p className="subheading">Software Developer</p>
            </div>
            <div className="app-windows">
                <div className="smartphone">
                    <div className="content"><iframe src="https://rank2021.herokuapp.com/#/" title="Toilet finding app called Rank"></iframe></div>
                </div>
                <div className="smartphone">
                    <div className="content">
                        <iframe src="https://madlibs-by-dianne.herokuapp.com/" title="Madlibs App"></iframe></div></div>
                <div className="smartphone">
                    <div className="content"><iframe src="https://tennentd.github.io/haukai/index.html" title="Haukai Restaurant Website"></iframe></div>
                </div>
                <div className="smartphone">
                    <div className="content"><iframe src="https://to-do-list-by-dianne.herokuapp.com/" title="To Do List App"></iframe></div>
                </div>
            </div>
            <div className="footer">
                <p>Contact me at diannerosemay@gmail.com</p>
            </div>
        </div>
    )
}

export default HomePage
