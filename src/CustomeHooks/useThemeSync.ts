import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    setHeaderColors,
    setMenuColors,
    setThemeBackground,
    setThemeColorMode,
    setThemePrimary,
} from "../Store/CommonStore/CommonSave_GlobalValSlice";
import { useAppSelector } from "./Hooks";


export function useThemeSync() {
    const dispatch = useDispatch();
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);

    useEffect(() => {
        const root = document.getElementById("root");
        const savedTheme = CommonSave_GlobalValStore?.ThemeColorMode || "light";
        if(CommonSave_GlobalValStore?.ThemeBackground !== "") return;
        dispatch(setHeaderColors(""));
        dispatch(setMenuColors(""));
        dispatch(setThemeBackground(""));
        const applyTheme = (theme: "light" | "dark") => {
            if (theme === "dark") {
                root?.classList.add("dark");
                dispatch(setThemeColorMode("dark"));
                dispatch(setThemePrimary("white"));
            } else {
                root?.classList.remove("dark");
                dispatch(setThemeColorMode("light"));
                dispatch(setThemePrimary("black"));
            }
        };
        applyTheme(savedTheme);
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            applyTheme(e.matches ? "dark" : "light");
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [CommonSave_GlobalValStore?.ThemeColorMode, dispatch]);
}
