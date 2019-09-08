import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>سایت آرمان</h1>
                <p>سلام اسم من آرمانه <a href="https://html5up.net">فامیلیم مازندرانیه</a> ومن زبا هستم<br />
               <a href="https://html5up.net/license">همه ی دوستان عشقند</a> </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>آرمان</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>مازندرانی</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>نوید</a></li>
               
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>کارن</a></li>
 <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>کارن ص</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
