type Invitation = {
    email: string
    name: string
}

type InvitationDTO = {
    id: number
    guest_id: number
    user_id: number
}

export {
    Invitation,
    InvitationDTO
}