import Member from './2. Member'
import Member2 from './3. Member2'

const Greet = (props) => {
    const name = '최길동'
    return (
        <>
            <div>
                안녕하세요{' '}
                <Member2
                    name={name}
                    age={30}
                    email="hong@gmail.com"
                    nickname="길똥"
                    tel="010-2556-6858"
                >
                    <div>안녕?</div>
                </Member2>
            </div>
        </>
    )
}

export default Greet
