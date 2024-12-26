import { useEffect } from "react";
import { useLocation } from "@remix-run/react";

const useGptSlot = ({ path, size, id }: any) => {
  const locationPath = useLocation();
  const routePath = locationPath.pathname;
  useEffect(() => {
    let slot: any;
    const googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function () {
      slot = googletag.defineSlot(path, size, id);
      slot?.addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });
    googletag.cmd.push(function () {
      googletag.display(id);
    });
    return () => {
      if (slot) {
        googletag.destroySlots([slot]);
      }
    };
  }, [path, size, id]);
  useEffect(() => {
    const googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function () {
      googletag.pubads().refresh();
    });
  }, [routePath]);
};
export default useGptSlot;

