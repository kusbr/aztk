export interface ComputerVisionRequest{
    url: String;
}

export interface ComputerVisionResponse{
    description: {
        captions: Array<{
                confidence: number,
                text: string
        }>;
    }
    tags: Array<{
        confidence: number,
        name: string
    }>;
    categories: Array<{
        name: string
    }>;
    faces: Array<{
        age: number,
        gender: string
    }>;
    hasPeople: boolean;
    totalFaces: number;
    averageAge: number;
}