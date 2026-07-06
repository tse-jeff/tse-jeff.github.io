import { useEffect, useState } from 'react';
import { CMS_BASE_URL } from '../cms';

// Fetches a text content slot from custom-cms, falling back to the given
// default (baked into the build) until the fetch resolves, or forever if
// it fails — keeps the site looking correct even if the CMS is down.
export function useContentSlot(slotName, fallback) {
  const [text, setText] = useState(fallback);

  useEffect(() => {
    let cancelled = false;

    fetch(`${CMS_BASE_URL}/api/content/${slotName}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data.exists && data.text) {
          setText(data.text);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [slotName]);

  return text;
}
