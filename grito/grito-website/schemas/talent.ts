export default {
    name: 'talent',
    type: 'document',
    title: 'Talent',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'countryImgUrl',
            title:'Country ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country'
        },
        {
            name: 'skillSet',
            type: 'string',
            title: 'Skill Set'
        },
        {
            name: 'level',
            type: 'string',
            title: 'Level'
        },
        {
            name: 'gender',
            type: 'string',
            title: 'Gender'
        },
        {
            name: 'profile',
            type: 'string',
            title: 'Profile'
        },
        {
            name: 'skillName',
            type: 'string',
            title: 'Skill Name'
        },
    ]
  }