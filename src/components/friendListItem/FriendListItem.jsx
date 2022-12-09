import propTypes from 'prop-types';
import css from './friendListItem.module.css';


export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <>
        <li className={css.item}>
            <span className={isOnline ? css.online : css.ofline}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
            </li>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired

};