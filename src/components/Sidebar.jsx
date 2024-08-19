import IconTextItem from "./sidebar/IconTextItem";
import { IoIosArrowDown } from "react-icons/io";
import UserSubscriptionItem from "./sidebar/UserSubscription";
import {
  mainMenuItems,
  yourMenuItems,
  subscriptionData,
  exploreItems,
  moreItems,
  settingsItems,
} from "./sidebar/menuItemData";
export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 pb-16 overflow-auto h-[100vh] w-[240px] fixed left-0 p-3 text-white text-sm font-semibold flex flex-col">
      {mainMenuItems.map((item, index) => (
        <IconTextItem key={index} icon={item.icon} text={item.text} />
      ))}
      <hr className="border-zinc-600 border-t my-3" />
      <span className="text-lg px-3 py-2 flex items-center space-x-4">
        You &gt;
      </span>
      {yourMenuItems.map((item, index) => (
        <IconTextItem key={index} icon={item.icon} text={item.text} />
      ))}
      {/* subscriptions */}
      <span className="text-lg px-3 py-2">Subscriptions</span>
      {subscriptionData.map((subscription, index) => (
        <UserSubscriptionItem
          key={index}
          img={subscription.img}
          name={subscription.name}
        />
      ))}
      <IconTextItem icon={IoIosArrowDown} text="Show more" />
      {/* explore */}
      <hr className="border-zinc-600 border-t my-3 w-full" />
      <span className="text-lg px-3 py-2">Explore</span>
      {exploreItems.map((item, index) => (
        <IconTextItem key={index} icon={item.icon} text={item.text} />
      ))}
      {/* More from youtube */}
      {moreItems.map((item, index) => (
        <IconTextItem
          key={index}
          icon={item.icon}
          text={item.text}
          color={item.color}
        />
      ))}
      {/* settings */}
      <hr className="border-zinc-600 border-t my-3 w-full" />
      {settingsItems.map((item, index) => (
        <IconTextItem key={index} icon={item.icon} text={item.text} />
      ))}
      <hr className="border-zinc-600 border-t my-3 w-full" />

      <section className="text-zinc-300 mt-2 ml-2">
        <span className="px-1">About</span>
        <span className="px-1">Press</span>
        <span className="px-1">Copyright</span>
        <br />
        <div className="block">
          <span className="px-1">Contact Us</span>
          <span className="px-1">Creator</span>
          <span className="px-1">Advertise</span>
          <br />
          <span className="px-1">Developers</span>
        </div>
        <br />
        <div className="block">
          <span className="px-1">Term</span>
          <span className="px-1">Privacy</span>
          <span className="px-1">Policy & Safety</span>
        </div>
        <span className="px-1">How YouTube works</span> <br />
        <span className="px-1">Test new features</span>
        <span className="px-1 py-2 block">&copy; 2024 Google LLC</span>
      </section>
    </aside>
  );
}
