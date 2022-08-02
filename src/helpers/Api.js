const PaletaContext = {
    paletaEndpoint: () => `${Api.baseUrl}/paletas`,
    paletaLista: () => `${PaletaContext.bandaEndpoint()}/all-paletas`,
    paletaById: (id) => `${PaletaContext.bandaEndpoint()}/one-paleta/${id}`,
    createPaleta: () => `${PaletaContext.bandaEndpoint()}/create-paleta`,
    updatePaletaById: (id) => `${PaletaContext.bandaEndpoint()}/update-paleta/${id}`,
    deletePaletaById: (id) => `${PaletaContext.bandaEndpoint()}/delete-paleta/${id}`,
};

export const Api = {
    baseUrl: "https://api-elgeladonpaletas.herokuapp.com",
    ...PaletaContext
};
