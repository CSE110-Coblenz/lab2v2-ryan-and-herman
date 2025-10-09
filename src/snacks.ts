import bold from "./animation"
export const snacks = ["Chocolate", "Snowbunnies", "Gummybears", "Boba", "Chips", "Cookies", "nuts", "banana", "apple"];

function printSnacks(snacksL: string[]): void {
    for (let i = 0; i < snacksL.length; i++) {
        bold(snacksL[i]);
    }
}

export default printSnacks;