import { baseURL } from "../../enum/consts";
const apiKey = 'AIzaSyAZ4pja68qoa62hCzFdlmAu30iAb_CgmTk';

export function getListPetAPI(params) {
    return fetch(baseURL + `api/get-pet?CenterId=${params.centerId}&PetStatus=${params.status}&PetTypeName=${params.type}&PetBreedName=${params.breed}&PetFurColorName=${params.color}&fields=detail&limit=-1`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
        }
    });
}

export function getPetByIdAPI(params) {
    return fetch(baseURL + `api/get-document-pet?petProfileId=${params.petId}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
        }
    });
}

export function createNewPetAPI(data, token) {
    let requestBody = {
        petStatus: data.petStatus,
        petName: data.petName,
        petGender: data.petGender,
        petAge: data.petAge,
        petDocumentId: data.petDocumentId,
        petProfileDescription: data.petProfileDescription,
        petBreedId: data.petBreedId,
        petFurColorId: data.petFurColorId,
        petImgUrl: data.petImgUrl
    }
    return fetch(baseURL + `api/create-pet-profile`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
            Authorization: "Bearer " + token
        },
        body: JSON.stringify(requestBody),
    });
}

export function getAllPetColorsAPI() {
    return fetch(baseURL + `api/get-all-pet-fur_colors`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
        }
    });
}

export function getPetBreedByTypeIdsAPI(typeId) {
    return fetch(baseURL + `api/get-pet-breeds-by-type-id?id=${typeId}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
        }
    });
}

export function getAllPetTypeAPI() {
    return fetch(baseURL + `api/get-all-pet-types`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
        }
    });
}

export function createPetTracking(data, token) {
    let requestBody = {
        petProfileId: data.petProfileId,
        isVaccinated: data.isVaccinated,
        isSterilized: data.isSterilized,
        imageUrl: data.imageUrl,
        description: data.description,
        weight: data.weight,
    }
    return fetch(baseURL + `/api/create-pet-tracking`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
            Authorization: "Bearer " + token
        },
        body: JSON.stringify(requestBody)
    });
}

export function getPetTrackingByIdAPI(data) {
    return fetch(baseURL + `/api/get-pet-tracking-by-id?petTrackingId=${data.petTrackingId}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
            Authorization: "Bearer " + data.token
        },
    });
}

export function updatePetProfile(data, token) {
    let requestBody = {
        petProfileId: data.petProfileId,
        petStatus: data.petStatus,
        petName: data.petName,
        petGender: data.petGender,
        petAge: data.petAge,
        petProfileDescription: data.description,
        petBreedId: data.petBreedId,
        petFurColorId: data.petFurColorId,
        petImgUrl: data.imageUrl,
        petDocumentId: data.petDocumentId,
    }
    return fetch(baseURL + `/api/update-pet-profile`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            Accept: "*/*",
            Authorization: "Bearer " + token
        },
        body: JSON.stringify(requestBody)
    });
}

export function getLocationAPI(lat, lng) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`, {
        method: "GET",
    });
}