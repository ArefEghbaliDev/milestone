import Avatar from 'src/components/ui/atoms/avatar';
import Button from 'src/components/ui/atoms/button';

export default function BoardsPage() {
    return (
        <div>
            <div className="flex items-center justify-between border-b border-b-dark-100 pb-5">
                <div className="flex items-center justify-between">
                    <Button type="button" variant="text" color="default">
                        Overview
                    </Button>
                    <Button type="button" variant="text" color="default">
                        Tasks
                    </Button>
                    <Button type="button" variant="text" color="default">
                        Roadmap
                    </Button>
                    <Button type="button" variant="text" color="default">
                        Notes
                    </Button>
                </div>
                <div className="flex items-center justify-end">
                    <Avatar displayName="Aref Eghbali" avatar={null} />
                    <Button type="button" variant="outline" color="default">
                        Invite Members
                    </Button>
                </div>
            </div>
            <div className="w-full h-full bg-dark-100">
                <div className="p-5 rounded border border-dark-100">
                    <p>Tasks Overview</p>
                </div>
            </div>
        </div>
    );
}
