'use client'

import { useState } from 'react'

import AdminUpload from './admin-upload'

interface AdminCoverUploadFieldProps {
  name: string
  placeholder: string
  defaultValue?: string
  type?: 'projects' | 'profile'
}

export default function AdminCoverUploadField({
  name,
  placeholder,
  defaultValue = '',
  type = 'projects',
}: AdminCoverUploadFieldProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <div className="space-y-2">
      <input
        className="admin-input"
        name={name}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        value={value}
      />

      <AdminUpload onUploaded={setValue} type={type} />

      <p className="text-xs text-slate-500">
        Uploaded URL is auto-filled in the field above.
      </p>
    </div>
  )
}
