// hook: useAppBadge() for installed PWAs

import { useState } from "react";

export default function useAppBadge() {
    let [counter, setCounter] = useState(1)

    // setBadge
    function setBadge() {
        setCounter(++counter)
        if (navigator.setAppBadge) {
            // for installed PWAs
            navigator.setAppBadge(counter)
        } else if (navigator.setClientBadge) {
            // for documents
            navigator.setClientBadge()
        }
    }

    // clearBadge
    function clearBadge() {
        setCounter(1)
        if (navigator.clearAppBadge) {
            navigator.clearAppBadge()
        } else if (navigator.clearClientBadge){
            navigator.clearClientBadge()
        }

    }

    // returning an array, so we can access 'em with destructuring...
    return [setBadge, clearBadge];
    // return {counter, setBadge, clearBadge};
}
