const sendStandardEvent = ({
    elementId: e,
    elementLabel: n,
    elementPosition: o,
    eventType: t,
    pageId: a,
    sectionId: i,
    sectionLabel: l,
    sectionPosition: s,
    tagName: d
}) => {
    if (window.ga && window._envGaTrackerNames)
        for (let r = 0; r < window._envGaTrackerNames.length; r++) {
            const v = window._envGaTrackerNames[r];
            ga(v + ".send", {
                hitType: "event",
                eventCategory: [i, l].filter(Boolean).join(";"),
                eventAction: [t, d].filter(Boolean).join(";"),
                eventLabel: [e, n].filter(Boolean).join(";"),
                eventValue: o,
                dimension15: s,
                dimension20: a
            })
        }
};