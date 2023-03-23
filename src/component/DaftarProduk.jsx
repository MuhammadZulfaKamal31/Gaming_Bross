
const DaftarProduct = () => {
    const items = [
        {
            title: "Wild Hearts - PlayStation 5",
            description: "Hunt giant nature-infused bests – Survive their attacks, learn from their behaviors, and use your Karakuri and your weapons in combination to cut these creatures down to size.",
            Image: "https://m.media-amazon.com/images/I/81F925s0ZAL._SX385_.jpg"
        },
        {
            title: "Atomic Heart PS5",
            description: "Exclusive Physical Version Bonus DLC: Swede Weapon Skin and Electro Weapon Skin",
            Image: "https://m.media-amazon.com/images/I/81wSlwccDDL._AC_SX679_.jpg"
        },
        {
            title: "Mato Anomalies - PlayStation 5",
            description: "Mato Anomalies is an anime-inspired RPG that intertwines the stories of two Protagonists to investigate and save an embattled city.",
            Image: "https://m.media-amazon.com/images/I/81SzMYWw-IL._SX342_.jpg"
        },
        {
            title: "Scars Above - PlayStation 5",
            description: "Immerse yourself in an exciting sci-fi adventure inspired by the classics of the genre",
            Image: "https://m.media-amazon.com/images/I/51GO+SYHD7L._SX342_SY445_.jpg"
        },
    ]
    return (
        <>
            <section class="flex px-32 pb-10 dark:bg-gray-800">
                {items.map(({ title, Image, description }, i) => (
                    <div class="card card-compact w-96 bg-white shadow-xl static mx-5"
                        key={`intorduction_items_${i}`}>
                        <figure><img src={Image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{title}</h2>
                            <p>{description}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default DaftarProduct;