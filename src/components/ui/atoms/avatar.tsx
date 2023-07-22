type AvatarProps = {
    avatar: string | null;
    displayName: string;
};

export default function Avatar({ avatar, displayName }: AvatarProps) {
    return (
        <div className="rounded-full bg-primary-500 text-powder-500 w-8 h-8 flex items-center justify-center overflow-hidden">
            {avatar ? (
                <img src={avatar} alt={displayName} className="w-full h-full object-cover" />
            ) : (
                <span className="font-medium">{displayName.slice(0, 2).toUpperCase()}</span>
            )}
        </div>
    );
}
