export default function formatObjectForUI(obj, hiddenKeys = []) {
    const formatKey = (key: string) =>
        key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    const formatValue = (value: number) => value.toLocaleString("en-US");

    return Object.entries(obj)
        .filter(([key]) => !hiddenKeys.includes(key))
        .map(([key, value]) => ({
            label: formatKey(key),
            value: formatValue(value),
        }));
}
