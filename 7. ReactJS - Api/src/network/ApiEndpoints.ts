type ApiEndpointsType = {
    [key: string]: {
        isAuthRequired: boolean;
        method: 'POST' | 'GET' | 'PUT';
        url: string;
    };
};


export const ApiEndpoints: ApiEndpointsType = {
    LOGIN_USER: {
        isAuthRequired: false,
        method: "POST",
        url: "/abc/login"
    },
    LIST_USER: {
        isAuthRequired: true,
        method: "GET",
        url: "/xyz/list"
    },
    UPDATE_USER: {
        isAuthRequired: true,
        method: "PUT",
        url: "/ijk/update-profile"
    },
    UPLOAD_USER_PHOTO: {
        isAuthRequired: true,
        method: "POST",
        url: "/lmn/upload-user-photo"
    },
};