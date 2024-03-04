import ProfileHeatMap from "./ProfileHeatMap"
import ProfileDetails from "./ProfileDetails"
import BadgeDetails from "./BadgeDetails"

export default function ProfileHeroSection() {
    return (
        <div className="w-11/12 min-h-screen pt-[100px] flex justify-center flex-col items-center gap-8 mx-auto">
            <ProfileDetails />
            <ProfileHeatMap />
            <BadgeDetails />
        </div>
    )
}