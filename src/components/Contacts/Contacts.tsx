import { ContactLink } from 'components/ContactLink';
import styles from './Contacts.module.scss';


export const Contacts = () => (
  <div className={styles.contacts}>
    <div className={styles.title}>Контакты</div>
    <ContactLink text='Git' url='https://github.com/Artem26r'/>
    <ContactLink text='Linkedin' url='https://www.linkedin.com/in/artem-kr'/>
    <ContactLink text='Email' url='mailto:artem.kravetz@gmail.com'/>
    <ContactLink text='Telegram' url='https://t.me/akerror'/>
  </div>
);
