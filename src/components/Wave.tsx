type WaveProps = {
  className?: string
  tone?: 'lime' | 'teal' | 'deep'
}

const tones = {
  lime: '#B5F166',
  teal: '#007D81',
  deep: '#004551',
}

export default function Wave({ className = '', tone = 'lime' }: WaveProps) {
  return (
    <svg
      className={`wave ${className}`}
      viewBox="0 0 220 56"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 28c28-22 48-22 76 0s48 22 76 0 48-22 64-10"
        stroke={tones[tone]}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M2 40c28-22 48-22 76 0s48 22 76 0 48-22 64-10"
        stroke={tones[tone]}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M2 16c28-22 48-22 76 0s48 22 76 0 48-22 64-10"
        stroke={tones[tone]}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  )
}
