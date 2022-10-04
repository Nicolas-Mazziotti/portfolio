import SendIcon from '../../assets/send_icon.png'
import { ContactContainer, ImgContainer, DataContainer } from '../Styles/Contact.styles'

const Contact = () => {


    return (
        <ContactContainer id="contact">
            <ImgContainer>
                <img src= {SendIcon} alt='Send Icon'/>
            </ImgContainer>
            <DataContainer>
                <strong>nicolas.mazziotti1@gmail.com</strong>
            </DataContainer>
        </ContactContainer>
    )
}

export default Contact