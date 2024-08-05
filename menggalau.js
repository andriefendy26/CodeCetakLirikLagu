const MainkanLirik = () => {
    const lirik = [
        "Sometime in the future maybe we can get together",
        "maybe share a drink and talk a while",
        "And reminisce about the days when we were still together",
        "Maybe someday further down the line",
        "And I will meet you there",
        "Sometime in the future we can share our stories",
        "When we won’t care about all of our mistakes, our failures, and our glories",
        "But until that day comes along I’ll keep on moving on :) ",
    ];
    const delay = [3, 3, 3, 3, 3.2, 3.3, 4, 5]; 

    let currIndex = 0;

    const cetakPerhuruf = (text, index = 0) => {
        if (index < text.length) {
            process.stdout.write(text[index]);
            setTimeout(() => {
                cetakPerhuruf(text, index + 1);
            }, 80);
        }
    };

    const cetakBaris = (index) => {
        if (index < lirik.length) {
            setTimeout(() => {
                console.log();
                cetakPerhuruf(lirik[index]);
                setTimeout(() => {
                    cetakBaris(index + 1);
                }, delay[index] * 1000);
            }, delay[index] * 1000)
        }
    };

    cetakBaris(currIndex);
};

MainkanLirik();
