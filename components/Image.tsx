import Image from 'next/image';

function UserPageImage() {
    return (
        <div>
            <Image src="/download.jpeg" alt="Nature-image" width={500} height={800} />
        </div>
    );
}

export default UserPageImage;
