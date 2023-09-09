'use client'
import styles from './page.module.css'
import { Snippet, useClipboard } from '@geist-ui/core'
import { useState, useEffect } from 'react'
import Copy from '@geist-ui/icons/copy'

interface CustomInputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

const CustomInput = ({ placeholder, value, onChange, label }: CustomInputProps) => {
  const [copied, setCopied] = useState<boolean>(false)
  const { copy } = useClipboard()

  const copyToClipboard = (text: string) => {
    console.log('copying to clipboard: ', text)
    try {
      copy(text)
      setCopied(true)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false)
      }, 1500) // 1.5 seconds
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [copied])

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input className={styles.input} type='text' placeholder={placeholder} value={value} onChange={onChange} />
        <button className={styles.iconButton} onClick={() => copyToClipboard(value)}>
          <Copy className={styles.icon} color={'black'} size={30} />
        </button>
        {copied && <div className={styles.tooltip}>Copied!</div>}
      </div>
    </div>
  )
}

export default function Home() {
  const [customField, setCustomField] = useState('')
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [portfolioUrl, setPortfolioUrl] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  console.log('customField: ', customField)

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>PASTY</h1>
      <p className={styles.welcome}>
        Welcome to Pasty! No more copying and pasting from multiple tabs. Whether you&apos;re filling out forms, on a
        job hunt, or plotting world domination, Pasty simplifies your life. Pasty respects your privacy, and does not
        store any of your data. All data will be cleared when you close the tab.
      </p>

      <CustomInput
        placeholder='Custom Field'
        value={customField}
        onChange={(e) => setCustomField(e.target.value)}
        label='CUSTOM FIELD:'
      />
      <CustomInput placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} label='NAME:' />
      <CustomInput placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} label='TITLE:' />
      <CustomInput
        placeholder='Portfolio URL'
        value={portfolioUrl}
        onChange={(e) => setPortfolioUrl(e.target.value)}
        label='PORTFOLIO URL:'
      />
      <CustomInput
        placeholder='Linkedin URL'
        value={linkedinUrl}
        onChange={(e) => setLinkedinUrl(e.target.value)}
        label='LINKEDIN URL:'
      />
      <CustomInput
        placeholder='Github URL'
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
        label='GITHUB URL:'
      />
      <CustomInput placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} label='EMAIL:' />
      <CustomInput placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} label='PHONE:' />
      <CustomInput
        placeholder='Address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        label='ADDRESS:'
      />
      <div className={styles.contactContainer}>
        <p className={styles.copy}>
          Have feedback? You can reach me <a href='https://isaacmoreno.vercel.app/contact'>here</a>. Cheers!
        </p>
      </div>
    </main>
  )
}
