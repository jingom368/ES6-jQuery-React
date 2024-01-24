import PropTypes from 'prop-types'

const Member = (props) => {
    const { name, age, email, children, nickname } = props
    return (
        <>
            <div>저는 {name}입니다.</div>
            <div>저는 {age}입니다.</div>
            <div>저는 {email}입니다.</div>
            <div>별명은 {nickname}</div>
            <div>{children}</div>
        </>
    )
}

Member.defaultProps = {
    nickname: '별명',
}

Member.propTypes = {
    age: PropTypes.number,
    tel: PropTypes.string.isRequired,
}

export default Member
