// ui/src/hooks/useProfile.js
import { useEffect, useState } from "react";

export default function useProfile() {
  const [profile, setProfile] = useState(null);  // Will store { userName, userRole }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // This endpoint is protected by server-side token validation
        const res = await fetch("/api/profile", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setProfile(data); // e.g. { userName: "Alice", userRole: "admin" }
        } else {
          setProfile(null); // unauthorized or not logged in
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return { profile, loading };
}
