import propTypes from 'prop-types';
import { FriendListItem } from 'components/friendListItem/FriendListItem';
import css from './FriendList.module.css';


export const FriendList = ({ friends }) => {
    return (
        <>
            <ul className={css.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        key={id}
                        name={name}
                        isOnline={isOnline}
                        avatar={avatar}
                    />
                ))}
            </ul>
        </>
    )
}


FriendList.propTypes = {
    friends: propTypes.shape({
        id: propTypes.number.isRequired,
    }).isRequired,
};