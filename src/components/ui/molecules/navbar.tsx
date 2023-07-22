import UserProfile from '../organisms/user-profile';

export default function Navbar() {
    return (
        <div className="flex items-center justify-between col-span-2">
            <h4>ProManage</h4>
            <UserProfile />
        </div>
    );
}
