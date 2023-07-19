import Button from '../atoms/button';

export default function Navbar() {
    return (
        <div className="flex items-center justify-between col-span-2">
            <h4>ProManage</h4>
            <Button type="button" variant="outline" color="secondary">
                Create Account
            </Button>
        </div>
    );
}
