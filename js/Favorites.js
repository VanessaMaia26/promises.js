export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'vanessaamaia',
                name: "Vanessa Maia",
                public_repos: '75',
                followers: 120000
            },
            {
                login: 'diego3g',
                name: "Diego Fernandes",
                public_repos: '758',
                followers: 22000
            }
        ]
    }

    delete(user) {
        const filterdEntries = this.entries
          .filter(entry => entry.login !== user.login)
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()
        
        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/diego3g.png" alt="Imagem de vanessaamaia">
            <a href="https://github.com/diego3g" target="_blank">
                <p>Diego Fernandes</p>
                <span>diego3g</span>
            </a>
        </td>
        <td class="repositories">
            48
        </td>
        <td class="followers">
            22503
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>`

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}