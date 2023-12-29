"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted ] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="text-2xl cursor-pointer hover:text-amber-500">
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode onClick={() => setTheme("light")} />
        ) : (
          <MdDarkMode onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
}
