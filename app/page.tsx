'use client'
import styles from './page.module.css'
import { Snippet } from '@geist-ui/core'
import { useState } from 'react'

interface CustomInputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

const CustomInput = ({ placeholder, value, onChange, label }: CustomInputProps) => {
  return (
    <div className={styles.inputSnippetContainer}>
      <input className={styles.input} type='text' placeholder={placeholder} value={value} onChange={onChange} />
      <Snippet width='100%' symbol={label} text={value} />
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

  return (
    <main className={styles.main}>
      <h1>PASTY</h1>
      <p className={styles.copy}>
        Welcome to Pasty! No more copying and pasting from multiple tabs. Whether you&apos;re on a job hunt, filling out
        forms, or plotting world domination, Pasty simplifies your life. Pasty respects your privacy, and does not store
        any of your data. All data will be cleared when you close the tab.
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
    </main>
  )
}
