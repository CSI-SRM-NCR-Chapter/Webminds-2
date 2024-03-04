import BadgeCard from "./BadgeCard"

export default function BadgeDetails() {
    const badges = ["streak", "contest", "performer"];
    const badgesList = badges.map((badge, index) => {
        return <BadgeCard key={index} data={badge} />
    });
    return (
        <div className="w-11/12 mx-auto flex flex-col gap-5">
            <h1 className="text-6xl text-center">Badges</h1>
            <div className="w-full flex flex-col justify-center items-center flex-wrap sm:!justify-between sm:flex sm:flex-row">
                {badgesList}
            </div>
        </div>
    )
}