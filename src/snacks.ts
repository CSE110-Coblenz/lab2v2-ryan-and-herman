export const snacks = ["Chocolate", "Snowbunnies", "Gummybears", "Boba", "Chips", "Cookies"];

function printSnacks(snacksL: string[]): void {
    for (let i = 0; i < snacksL.length; i++) {
        console.log(snacksL[i]);
    }
}

export default printSnacks;