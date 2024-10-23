import { useRegisterSW } from "virtual:pwa-register/react";
import { useState } from "react";

import "./PWABadge.css";

function PWABadge() {
    // check for updates every hour
    const period = 60 * 60 * 1000

    const {
        
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = registerSW(period)

    function close() {
        
        setNeedRefresh(false)
    }

    return (
        <div className="PWABadge" role="alert" aria-labelledby="toast-message">
            { needRefresh
                && (
                    <div className="PWABadge-toast">
                        <div className="PWABadge-message">
                            <span id="toast-message">New content available, click on reload button to update.</span>
                                
                                
                        </div>
                        <div className="PWABadge-buttons">
                            { needRefresh && <button className="PWABadge-toast-button" onClick={() => updateServiceWorker(true)}>Reload</button> }
                            <button className="PWABadge-toast-button" onClick={() => close()}>Close</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default PWABadge

/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 */
function registerPeriodicSync(period: number, swUrl: string, r: ServiceWorkerRegistration) {
    if (period <= 0) return

    setInterval(async () => {
        if ('onLine' in navigator && !navigator.onLine)
            return

        const resp = await fetch(swUrl, {
            cache: 'no-store',
            headers: {
                'cache': 'no-store',
                'cache-control': 'no-cache',
            },
        })

        if (resp?.status === 200)
            await r.update()
    }, period)
}

function registerSW(period: number): ReturnType<typeof useRegisterSW> {
    if (typeof navigator === 'undefined') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const offlineReady = useState(false)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const needRefresh = useState(false)
        return {
            offlineReady,
            needRefresh,
            async updateServiceWorker(){},
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useRegisterSW({
        onRegisteredSW(swUrl, r) {
            if (period <= 0) return
            if (r?.active?.state === 'activated') {
                registerPeriodicSync(period, swUrl, r)
            }
            else if (r?.installing) {
                r.installing.addEventListener('statechange', (e) => {
                    const sw = e.target as ServiceWorker
                    if (sw.state === 'activated')
                        registerPeriodicSync(period, swUrl, r)
                })
            }
        },
    })
}