const PaletaContext = {
    bandaEndpoint: () => `${Api.baseUrl}/paletas`,
    bandaLista: () => `${PaletaContext.bandaEndpoint()}/all-paletas`,
    bandaById: (id) => `${PaletaContext.bandaEndpoint()}/one-paleta/${id}`,
    createBanda: () => `${PaletaContext.bandaEndpoint()}/create-paleta`,
    updateBandaById: (id) => `${PaletaContext.bandaEndpoint()}/update-paleta/${id}`,
    deleteBandaById: (id) => `${PaletaContext.bandaEndpoint()}/delete-paleta/${id}`,
};

export const Api = {
    baseUrl: "https://api-elgeladonpaletas.herokuapp.com",
    ...PaletaContext
};
