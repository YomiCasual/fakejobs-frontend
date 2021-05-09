import Head from 'next/head'
import React from 'react'

const Meta = ({
    title = "FakeJobs",
    description = "Fake Jobs",
    content = "Posting fake jobs"
}) => {
    return (
        <Head>
        <title>{title}</title>
        <meta name={description} content={content} />
        <link rel="icon" href="/FakeJobLogo.svg" />
      </Head>
    )
}

export default Meta
