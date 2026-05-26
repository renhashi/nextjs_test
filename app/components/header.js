import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div>
                <Link href="/">
                    <Image src="/next.svg" alt="Logo" width={100} height={50} priority/>
                </Link>
            </div>
            <nav>
                <li><Link href="/user/register">ユーザー登録</Link></li>
                <li><Link href="/user/login">ログイン</Link></li>
                <li><Link href="/item/create">アイテム作成</Link></li>
            </nav>
        </header>
    )
}

export default Header