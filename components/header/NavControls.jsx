import {
  IonLanguage,
  IcOutlineBookmarkBorder,
  IcOutlineShoppingCart,
  IcBaselineNotificationsNone,
} from "@/components/ui/atoms/Icons";
import avatar1 from "@/images/avatars/avatar-1.jpeg";

import { Button } from "@/components/ui/atoms/Button";
import Image from "next/image";

export function NavControls() {
  return (
    <>
      <Button href="#" variant="icon">
        <IonLanguage className="w-6 h-6 text-white" />
      </Button>
      <Button href="#" variant="icon">
        <IcOutlineBookmarkBorder className="w-6 h-6 text-white" />
      </Button>
      <Button href="#" variant="icon">
        <IcOutlineShoppingCart className="w-6 h-6 text-white" />
      </Button>
      <Button href="#" variant="icon">
        <IcBaselineNotificationsNone className="w-6 h-6 text-white" />
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute bottom-0 right-3 inline-flex h-full w-full rounded-full bg-red-400"></span>
          <span className="relative bottom-0 right-3 inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
        </span>
      </Button>
      <div className="mt-4">
        <Image
          src={avatar1}
          width={36}
          height={36}
          className="rounded-full"
          alt="avatar"
        />
        <span className="relative flex left-6 bottom-3">
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
        </span>
      </div>
    </>
  );
}
