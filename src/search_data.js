import Airtable from 'airtable'

const token =
  'pat6Q8OawT0Mr8qNK.368ad66e62d9324f26481087d14ce43765df1459892193ffcaff2ef1266aba40'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('appA8TJVgBuIQ7UUJ')

function getPostTeasers() {
    return new Promise((resolve, reject) => {
        const content = []

        base('Post Teasers')
            .select({ maxRecords: 100 })
            .firstPage()
            .then((result) => {
                result.forEach((record) => {
                    content.push({
                        id: record.id,
                        tags: record.fields['Tags'],
                        title: record.fields['Title'],
                        category: record.fields['Category'],
                        link: record.fields['Link'],
                        description: record.fields['Description']
                    })
                })
                resolve(content)
            })
    })
}

export { getPostTeasers }