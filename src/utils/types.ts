export type ProfileType = {
	name: string
	desc: string
	location: string
	tags: string[]
}

export type ProductType = {
	name: string
	price: number
	currency: string
	desc: string
}

export type MainDataType = {
	profile: ProfileType
	about: string
	collaborates: string[]
	products: ProductType[]
}
