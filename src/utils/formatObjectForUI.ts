import type { Wallet } from "@/types";

export default function formatObjectForUI(
    obj: Wallet,
    hiddenKeys: string[] = []
) {
    const formatKey = (key: string) =>
        key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    const formatValue = (value: number | string) => {
        if (typeof value === "number") return value.toLocaleString("en-US");
        return value;
    };

    return Object.entries(obj)
        .filter(([key]) => !hiddenKeys.includes(key))
        .map(([key, value]) => ({
            label: formatKey(key),
            value: formatValue(value),
        }));
}
