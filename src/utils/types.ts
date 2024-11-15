export type ProfileType = {
	name: string
	desc: string
	location: string
	tags: string[]
}

export type MainDataType = {
	profile: ProfileType
	about: string
}
