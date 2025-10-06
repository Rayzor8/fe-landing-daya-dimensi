import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import NavigationButton from "../custom-button/navigation-button";

export default function HomeActivities() {
  const activities = [
    {
      title: "PUBLIC WORKSHOP",
      time: "25 Feb 2022",
      desc: "Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout",
    },
    {
      title: "BUKA PINTU",
      time: "25 Feb 2022",
      desc: "Our New Solution To Hire The Right Person For Your Company",
    },
    {
      title: "LIVE WEBINAR",
      time: "25 Feb 2022",
      desc: "DDI : Among Indonesia’s First Signatories of UN WEP",
    },
    {
      title: "BUKA PINTU",
      time: "25 Feb 2022",
      desc: "Our New Solution To Hire The Right Person For Your Company",
    },
  ];

  return (
    <div className="wrapper">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
        <h2 className="text-var-lg mb-2">Upcoming Activities</h2>
        <NavigationButton>VIEW ALL</NavigationButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-0 ">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/img/home/activities.png"
            alt="activities"
            width={481}
            height={481}
            className="w-full object-cover"
          />
        </div>

        <div className="col-span-2  lg:pl-18 py-8  border-t border-gray-200 justify-between">
          {activities.map((activity, index) => (
            <div className="flex text-red-primary  gap-3 mb-8" key={index}>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold w-30">{activity.title}</p>
                <p className="text-[13px] text-black/40">{activity.time}</p>
              </div>

              <p className="text-foreground text-lg lg:text-var-md text-start w-full">
                {activity.desc}
              </p>

              <Button
                variant="ghost"
                className="text-red-primary cursor-pointer"
                type="button"
                aria-label="read more"
              >
                <MoveRight size={20} className="w-14 " />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
