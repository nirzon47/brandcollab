export type ProfileType = {
	name: string
	desc: string
	location: string
	tags: string[]
}

export type ProductType = {
	id: number
	name: string
	price: number
	currency: string
	desc: string
}

export type TestimonialType = {
	id: number
	name: string
	company: string
	desc: string
}

export type MainDataType = {
	profile: ProfileType
	about: string
	collaborates: string[]
	products: ProductType[]
	testimonials: TestimonialType[]
}
