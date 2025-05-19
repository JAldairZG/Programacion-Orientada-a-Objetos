interface CloudHostingProvider {
    createServer(region: string): void;
    listServer(region: string): void;
}

interface CDNProvider {
    getCDNAddress(): void;
}

interface CloudStorageProvider {
    storeFile(name: string): void;
    getFile(name: string): void;
}

class Amazon implements CloudHostingProvider, CDNProvider, CloudStorageProvider {
    createServer(region: string): void{

    }
    listServer(region: string): void{

    }
    getCDNAddress(): void {
        
    }
    storeFile(name: string): void {
        
    }
    getFile(name: string): void {
        
    }
}

class Dropbox implements CloudStorageProvider{
    storeFile(name: string): void {
        
    }
    getFile(name: string): void {
        
    }
}