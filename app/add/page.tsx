'use client'

import { FormEvent } from 'react'

export default function Page() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        console.log(data);
    }

    return (
        <form onSubmit={onSubmit}>
            Name <input type="text" name="name" />
            <button type="submit">Submit</button>
        </form>
    )
}