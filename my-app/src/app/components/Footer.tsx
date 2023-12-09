import Image from 'next/image'

export default function Footer() {
    return (
        <section className='w-full h-32 flex flex-col'>
            <div className='w-full h-auto flex flex-col gap-8 px-2 py-4 bg-sky-400'>
                <div className='w-full flex flex-row '>
                    <div className=' w-full p-4'>
                        <div className='pb-6'>
                            <span className='text-xl font-bold text-white italic'>Tentang cOlx</span>
                        </div>
                        <p className='text-white pb-4'>
                            Selamat datang di cOlx – destinasi belanja online terbaik untuk memenuhi kebutuhan Anda! Kami bangga menyajikan koleksi produk berkualitas tinggi yang dirancang untuk memenuhi gaya hidup modern Anda. Dari pakaian fashion hingga peralatan rumah tangga, kami memiliki segala sesuatu yang Anda butuhkan dengan harga yang terjangkau.

                            Eksplorasi pilihan fashion kami yang treni untuk menemukan gaya yang sesuai dengan kepribadian Anda. Dengan pakaian berkualitas tinggi dan desain terkini, kami menyajikan pilihan yang sempurna untuk segala kesempatan. Tambahkan sentuhan akhir dengan aksesori kami yang elegan dan selesaikan tampilan Anda dengan sentuhan yang istimewa.

                            Kami juga menawarkan berbagai peralatan rumah tangga yang inovatif dan fungsional. Dari perabotan hingga perlengkapan dapur, produk-produk kami dirancang untuk mempermudah hidup sehari-hari Anda. Kualitas tinggi dan daya tahan menjadi prioritas utama kami, sehingga Anda dapat yakin bahwa setiap pembelian di cOlx adalah investasi yang baik.

                            Keamanan dan kepuasan pelanggan adalah fokus utama kami. Kami menawarkan layanan pengiriman yang cepat dan andal, serta kebijakan pengembalian yang fleksibel. Tim dukungan pelanggan kami siap membantu Anda setiap saat untuk memastikan pengalaman belanja online Anda berjalan lancar.

                            Nikmati pengalaman belanja online yang menyenangkan dan praktis di cOlx. Temukan produk unggulan kami dan temukan keindahan dan fungsionalitas dalam setiap pembelian. Terima kasih telah memilih cOlx sebagai destinasi belanja online Anda. Selamat berbelanja!
                        </p>

                    </div>
                </div>

                <div className='h-full w-full flex flex-row gap-14 justify-center content-center items-center'>
                    <div style={{ position: 'relative', width: '26px', height: '26px' }}>
                        <Image
                            src="https://assets.loket.com/web/legacy/img/social/logo-socmed-fb.svg"
                            alt="Deskripsi gambar"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div style={{ position: 'relative', width: '26px', height: '26px' }}>
                        <Image
                            src="https://assets.loket.com/web/legacy/img/social/logo-socmed-ig.svg"
                            alt="Deskripsi gambar"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div style={{ position: 'relative', width: '26px', height: '26px' }}>
                        <Image
                            src="https://assets.loket.com/web/legacy/img/social/logo-socmed-twtr.svg"
                            alt="Deskripsi gambar"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div style={{ position: 'relative', width: '26px', height: '26px' }}>
                        <Image
                            src="https://assets.loket.com/web/legacy/img/social/logo-socmed-lnkdin.svg"
                            alt="Deskripsi gambar"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div style={{ position: 'relative', width: '26px', height: '26px' }}>
                        <Image
                            src="https://assets.loket.com/web/legacy/img/social/logo-socmed-yt.svg"
                            alt="Deskripsi gambar"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center content-center gap-8 px-8' style={{ backgroundColor: "#083c9c" }}>
                <span className='text-white text-xs tracking-wider font-medium'>
                    cOlx
                </span>
            </div>
        </section>
    )
}