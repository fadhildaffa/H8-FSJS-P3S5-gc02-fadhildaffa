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
                            Selamat datang di cOlx – tempat terbaik untuk menjelajahi dan menemukan mobil impian Anda! Kami menyediakan koleksi mobil berkualitas tinggi dari berbagai merek terkemuka, memberikan Anda pilihan luas untuk memenuhi kebutuhan dan gaya hidup Anda.

                            Temukan pengalaman berbelanja mobil yang nyaman dan andal di cOlx. Dari mobil keluarga yang aman dan nyaman hingga mobil sport yang memikat hati, kami memiliki berbagai opsi yang sesuai dengan preferensi Anda. Semua mobil yang kami tawarkan telah melewati pemeriksaan kualitas ketat, sehingga Anda dapat memiliki keyakinan bahwa setiap pembelian adalah investasi yang cerdas.

                            Kami memahami bahwa keamanan dan kenyamanan Anda adalah prioritas utama. Oleh karena itu, kami menyediakan informasi rinci mengenai setiap mobil, termasuk fitur keselamatan dan spesifikasi teknis, sehingga Anda dapat membuat keputusan yang cerdas sebelum membeli. Tim ahli kami juga siap membantu Anda dengan pertanyaan atau bantuan teknis kapan pun diperlukan.

                            Proses pembelian di cOlx sangat mudah dan transparan. Anda dapat dengan nyaman menjelajahi pilihan mobil kami, membandingkan fitur, dan bahkan menjadwalkan tes drive secara online. Kami juga menawarkan berbagai opsi pembiayaan yang dapat disesuaikan dengan kebutuhan keuangan Anda.

                            Dengan pengiriman yang dapat diandalkan dan layanan pelanggan yang responsif, kami berkomitmen untuk membuat pengalaman belanja mobil online Anda menyenangkan dan tanpa hambatan. cOlx hadir untuk membantu Anda mewujudkan impian memiliki mobil baru. Selamat berbelanja dan temukan perjalanan baru Anda di jalan raya bersama kami!
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