import PropTypes from 'prop-types'
import React from 'react'

class Member2 extends React.Component {
    render() {
        const { name, age, email, children, nickname } = this.props
        return (
            <>
                <div>저는 {name}입니다.</div>
                <div>저는 {age}입니다.</div>
                <div>저는 {email}입니다.</div>
                <div>별명은 {nickname}</div>
                <div>{children}</div>
                <div>안녕</div>
            </>
        )
    }
}

Member2.defaultProps = {
    nickname: '별명',
}

Member2.propTypes = {
    age: PropTypes.number,
    tel: PropTypes.string.isRequired,
}

export default Member2
