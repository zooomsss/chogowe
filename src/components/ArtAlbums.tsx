import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import siggy1 from '@assets/IMG_4364_1784562472247.jpg';
import siggy2 from '@assets/IMG_1024_1784562472248.jpg';
import siggy3 from '@assets/IMG_4367_1784562472248.jpg';
import siggy4 from '@assets/IMG_4368_1784562472248.jpg';

import rocky1 from '@assets/IMG_4331_1784561739852.PNG';
import rocky2 from '@assets/IMG_4332_1784561739853.PNG';
import rocky3 from '@assets/IMG_4324_1784561739853.PNG';
import rocky4 from '@assets/IMG_4330_1784561739854.PNG';
import rocky5 from '@assets/IMG_4323_1784561958493.PNG';
import rocky6 from '@assets/IMG_4321_1784561958493.PNG';
import rocky7 from '@assets/IMG_4320_1784561958494.PNG';
import rocky8 from '@assets/IMG_4319_1784561958494.PNG';
import rocky9 from '@assets/IMG_4318_1784562115357.PNG';
import rocky10 from '@assets/IMG_4317_1784562115357.PNG';
import rocky11 from '@assets/IMG_3034_1784562115357.PNG';
import rocky12 from '@assets/IMG_0855_1784562115357.PNG';

import seismic1 from '@assets/IMG_0771_1784560447063.PNG';
import seismic2 from '@assets/IMG_0788_1784560483799.PNG';
import seismic3 from '@assets/IMG_0807_1784560483800.PNG';
import seismic4 from '@assets/IMG_0827_1784560483801.PNG';
import seismic5 from '@assets/IMG_0842_1784560568554.PNG';
import seismic6 from '@assets/IMG_0885_1784560568554.PNG';
import seismic7 from '@assets/IMG_1097_1784560698542.PNG';
import seismic8 from '@assets/IMG_1100_1784560698543.PNG';
import seismic9 from '@assets/IMG_1134_1784560698543.PNG';
import seismic10 from '@assets/IMG_1136_1784560698543.PNG';
import seismic11 from '@assets/IMG_1143_1784561017884.PNG';
import seismic12 from '@assets/IMG_1270_1784561017884.PNG';
import seismic13 from '@assets/IMG_1271_1784561017884.PNG';
import seismic14 from '@assets/IMG_1272_1784561146368.PNG';
import seismic15 from '@assets/IMG_1384_1784561146368.PNG';
import seismic16 from '@assets/IMG_1385_1784561146368.PNG';

import anago1 from '@assets/IMG_2551_1784558340726.PNG';
import anago2 from '@assets/IMG_2552_1784558340727.PNG';
import anago3 from '@assets/IMG_2556_1784558340727.PNG';
import anago4 from '@assets/IMG_2673_1784558340728.PNG';
import anago5 from '@assets/IMG_2793_1784558340728.PNG';
import anago6 from '@assets/IMG_2799_1784558340729.PNG';
import anago7 from '@assets/IMG_2902_1784558340730.PNG';
import anago8 from '@assets/IMG_3069_1784558340731.PNG';
import anago9 from '@assets/IMG_3277_1784558340732.PNG';
import anago10 from '@assets/IMG_3425_1784558340732.PNG';
import anago11 from '@assets/IMG_3509_1784558340733.PNG';
import anago12 from '@assets/IMG_4360_1784558340734.PNG';
import anago13 from '@assets/IMG_3609_1784558340734.PNG';

const siggyImages = [siggy1, siggy2, siggy3, siggy4];

const rockyImages = [
  rocky1, rocky2, rocky3, rocky4, rocky5, rocky6,
  rocky7, rocky8, rocky9, rocky10, rocky11, rocky12,
];

const seismicImages = [
  seismic1, seismic2, seismic3, seismic4, seismic5, seismic6, seismic7, seismic8,
  seismic9, seismic10, seismic11, seismic12, seismic13, seismic14, seismic15, seismic16,
];

const anagoImages = [
  anago1, anago2, anago3, anago4, anago5, anago6, anago7,
  anago8, anago9, anago10, anago11, anago12, anago13,
];

const albums = [
  {
    name: 'ANAGO',
    slug: 'anago',
    desc: 'A collection of illustrated moments — cozy, chaotic, and full of heart.',
    color: 'bg-primary',
    textColor: 'text-primary-foreground',
    shadowColor: 'var(--secondary)',
    rotation: -2,
    images: anagoImages,
    cover: anago5,
  },
  {
    name: 'ROCKY',
    slug: 'rocky',
    desc: 'The rocky golem — unstoppable, iconic, and full of personality.',
    color: 'bg-secondary',
    textColor: 'text-secondary-foreground',
    shadowColor: 'var(--accent)',
    rotation: 1,
    images: rockyImages,
    cover: rocky1,
  },
  {
    name: 'SIGGY',
    slug: 'siggy',
    desc: 'The cat-girl character — cute, mysterious, and full of charm.',
    color: 'bg-accent',
    textColor: 'text-accent-foreground',
    shadowColor: 'var(--primary)',
    rotation: -1,
    images: siggyImages,
    cover: siggy1,
  },
  {
    name: 'SEISMIC',
    slug: 'seismic',
    desc: 'Dark, cinematic, and fiercely expressive — the Seismic collection.',
    color: 'bg-card',
    textColor: 'text-card-foreground',
    shadowColor: 'var(--muted)',
    rotation: 2,
    images: seismicImages,
    cover: seismic1,
  },
];

type Album = typeof albums[0];

function AlbumModal({ album, onClose }: { album: Album; onClose: () => void }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const hasImages = album.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.88)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.75, rotate: -4 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.75, rotate: 4 }}
        transition={{ type: 'spring', bounce: 0.4 }}
        className={`relative w-full max-w-4xl max-h-[88vh] overflow-y-auto chunky-border ${album.color} ${album.textColor} p-6 md:p-10`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-black text-xl leading-none hover:scale-125 transition-transform z-10"
          data-testid="button-close-album"
        >
          X
        </button>

        <h3 className="text-4xl md:text-5xl font-black mb-1" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.25)' }}>
          {album.name}
        </h3>
        <p className="font-mono text-sm mb-6 opacity-70">{album.desc}</p>

        {hasImages ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {album.images.map((src, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setLightbox(src)}
                className="aspect-square overflow-hidden chunky-border focus:outline-none"
                data-testid={`img-artwork-${album.slug}-${i}`}
              >
                <img
                  src={src}
                  alt={`${album.name} artwork ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square chunky-border bg-background opacity-25 flex items-center justify-center"
              >
                <span className="font-mono font-bold text-foreground text-xs opacity-60">EMPTY</span>
              </motion.div>
            ))}
            <p className="col-span-full font-mono text-sm mt-2 opacity-60">Artwork dropping soon.</p>
          </div>
        )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              src={lightbox}
              alt="Artwork full view"
              className="max-w-full max-h-[90vh] object-contain chunky-border"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ArtAlbums() {
  const [openAlbum, setOpenAlbum] = useState<Album | null>(null);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-9xl text-accent">
            THE ART
          </h2>
          <p className="font-mono text-xl mt-4 text-foreground opacity-70 font-bold">
            Four collections. Pick one and step inside.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {albums.map((album, i) => (
            <motion.button
              key={album.slug}
              data-testid={`button-album-${album.slug}`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.06, rotate: album.rotation * -1, zIndex: 10 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setOpenAlbum(album)}
              className={`relative w-full aspect-square chunky-border ${album.color} ${album.textColor} flex flex-col items-end justify-end cursor-pointer group overflow-hidden p-4`}
              style={{
                transform: `rotate(${album.rotation}deg)`,
                boxShadow: `6px 6px 0px 0px hsl(${album.shadowColor})`,
              }}
            >
              {/* Cover image or placeholder grid */}
              {album.cover ? (
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={album.cover}
                    alt={album.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ) : (
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-3 opacity-10 pointer-events-none">
                  {Array.from({ length: 9 }).map((_, j) => (
                    <div key={j} className="bg-current rounded-sm" />
                  ))}
                </div>
              )}

              {/* Name label at bottom */}
              <div className="relative z-10 w-full">
                <span
                  className="block text-xl md:text-2xl font-black leading-tight drop-shadow-lg"
                  style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}
                >
                  {album.name}
                </span>
                <span className="block font-mono text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  OPEN &rarr;
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openAlbum && (
          <AlbumModal album={openAlbum} onClose={() => setOpenAlbum(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
