import { useState } from "react";
import IconTextItem from "./sidebar/IconTextItem";
import UserSubscriptionItem from "./sidebar/UserSubscription";
import {
  mainMenuItems,
  yourMenuItems,
  subscriptionData,
  exploreItems,
  moreItems,
  settingsItems,
} from "./sidebar/menuItemData";
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar({ isCollapsed }) {
  return (
    <aside
      className={`bg-zinc-900 fixed top-0 left-0 h-full overflow-auto p-3 text-white text-sm font-semibold flex flex-col transition-all duration-300 
      ${isCollapsed ? "w-16" : "w-[240px]"}
    `}
    >
      {/* Main Menu Items */}
      {!isCollapsed ? (
        <>
          {mainMenuItems.map((item, index) => (
            <IconTextItem key={index} icon={item.icon} text={item.text} />
          ))}
          <hr className="border-zinc-600 border-t my-3" />
        </>
      ) : (
        <>
          <div className="mt-14 flex flex-col gap-2">
            {mainMenuItems.map((item, index) => (
              <div
                key={index}
                className="transition hover:bg-neutral-700 cursor-pointer rounded-xl p-2 flex items-center justify-center"
              >
                <item.icon size={24} color="white" />
              </div>
            ))}
          </div>
        </>
      )}

      {/* "You" Menu Items */}
      {!isCollapsed && (
        <>
          <span className="text-lg px-3 py-2">You &gt;</span>
          {yourMenuItems.map((item, index) => (
            <IconTextItem key={index} icon={item.icon} text={item.text} />
          ))}
          <span className="text-lg px-3 py-2">Subscriptions</span>
        </>
      )}

      {/* Subscriptions */}
      {subscriptionData.map((subscription, index) => (
        <UserSubscriptionItem
          key={index}
          img={subscription.img}
          name={subscription.name}
        />
      ))}
      {!isCollapsed && <IconTextItem icon={IoIosArrowDown} text="Show more" />}

      {/* Explore and More from YouTube */}
      {!isCollapsed && (
        <>
          <hr className="border-zinc-600 border-t my-3 w-full" />
          <span className="text-lg px-3 py-2">Explore</span>
          {exploreItems.map((item, index) => (
            <IconTextItem key={index} icon={item.icon} text={item.text} />
          ))}
          {moreItems.map((item, index) => (
            <IconTextItem
              key={index}
              icon={item.icon}
              text={item.text}
              color={item.color}
            />
          ))}
          <hr className="border-zinc-600 border-t my-3 w-full" />
        </>
      )}

      {/* Settings */}
      {!isCollapsed &&
        settingsItems.map((item, index) => (
          <IconTextItem key={index} icon={item.icon} text={item.text} />
        ))}

      {/* Footer */}
      {!isCollapsed && (
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
      )}
    </aside>
  );
}
