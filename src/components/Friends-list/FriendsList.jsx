import css from './Friends.module.css';
import {FriendItem} from './FriendListItem';
export const FriendsList = ({friends}) => {
    return(
        <section className = {css.friendslist}>
<ul className={css.list}>
{friends.map(({ avatar,name,isOnline,id}) => {return (
              <FriendItem
                  key={id}
                  avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                  />)})} 
</ul>
        </section>
    );
};

