export const useUtilities = () => {
    function toTitleCase(str: string): string {
        return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
    }

    return {
        toTitleCase,
    };
};