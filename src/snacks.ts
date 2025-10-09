import bold from "./animation"
export const snacks = ["Chocolate", "chips", "Snowbunnies", "Gummybears", "Boba", "Cookies", "nuts", "banana", "apple", "Feet", "Chicken", "Overnight Oats"];

function printSnacks(snacksL: string[]): void {
    for (let i = 0; i < snacksL.length; i++) {
        bold(snacksL[i]);
    }
}

export default printSnacks;