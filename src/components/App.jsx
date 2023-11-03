import user from '../data/user';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data';
import { FriendsList } from './Friends-list/FriendsList';
import friends from '../data/friends'
import { TrasactionHistory } from './History-transactions/HistoryTransactions';
import transactions from '../data/transactions';
  
export const App = () => {
  return (
    <div>
          <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
     <Statistics title="Statistics" stats={data}/>
    <FriendsList friends={friends}/>
    <TrasactionHistory transaction={transactions}/> 
    </div>
  );
};


