import React,{ReactNode} from "react"

export interface children {
	children: any
	className?: string
	superStyle?: string
	style?: object
}

export interface card {
	title: string
	description: string
	buttonTitle: string
	className: string
	showCopyButton: boolean
	icon: string
}

export interface cardContainer {
	title: string
}

export interface tileContainer {
	title: string
}

export interface metricContainer {
	title: string
}

export interface verticalTile {
	title: string
	description: string
	buttonTitle: string
	htmlTextArea: boolean
	colorSelector: boolean
}

export interface horizontalTile {
	title: string
	description: string
	buttonTitle: string
	logoIncluded: boolean
}

export interface pieChart {
	title: string
	orderValue: string
}

export interface pageTracking {
	title: string
	description: string
}

