<template>
    <div class="container">
        <header class="header">
            <nav class="main-navigation">
                <div class="">DataPort</div>
            </nav>
        </header>
        <div class="dp-main">
            <div class="dp-main__wrapper">

                <form class="dp-main__search" action="">
                    <div class="dp-main__search-wrapper">
                        <div class="rt-select">
                            <p class="rt-select__label">Компании и ИП</p>
                            <ul class="rt-select__items">
                                <li class="rt-select__item">Компании и ИП</li>
                                <li class="dp-main__filter-item">Адрес</li>
                            </ul>
                        </div>
                        <div class="dp-main__search-input">
                            <input class="rt-input" type="text" name="" id="" placeholder="Введите название, ИНН, ОГРН, ЛС или адрес">
                        </div>
                    </div>
                    <div class="dp-main__search-button">
                        <button class="rt-button -primary" type="submit">
                            <span>Найти</span>
                        </button>
                    </div>
                </form>

                <ul class="dp-main__options">
                    <li class="dp-main__options-item">
                        <span class="dp-main__options-text">Поиск на карте</span>
                    </li>
                    <li class="dp-main__options-item">
                        <span class="dp-main__options-text">Расширенный поиск</span>
                    </li>
                </ul>
                <div class="dp-main__info">
                    <dl class="dp-main__info-item"
                        v-for="item in info"
                        :key="item.title">
                        <dt class="dp-main__info-title">{{ item.title }}</dt>
                        <dd class="dp-main__info-text">{{ item.text }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: [
                {
                    title: 'Чек-листы',
                    text: 'Проводите проверку компаний по различным параметрам'
                },
                {
                    title: 'Утилиты',
                    text: 'Проверяйте самозанятых, нахождении в санкционных списках и реестре РКН'
                },
                {
                    title: 'Расширенный поиск',
                    text: 'Формируйте более точные поисковые запросы'
                },
                {
                    title: 'Поиск на карте',
                    text: 'Осуществляйте поиск по городам, кварталам, районам'
                },
            ]
        }
    }
}
</script>

<style lang="less">
@import './styles/_styles.less';

.rt-button {
    // debug
    // background: teal;

    height: 100%;
    padding-left: 30px;
    padding-right: 30px;

    color: white;

    border-radius: 12px;
    cursor: pointer;
}

.rt-input {
    // debug
    // background-color: #edc;

    width: 100%;
}

.rt-select {
    display: flex;
    align-items: center;

    margin-right: 8px;
    padding-left: 12px;
    padding-right: 12px;

    color: var(--color-primary);
    font-size: 14px;

    background-color: var(--background-secondary);
    border-radius: 8px;
    cursor: pointer;

    &__items {
        // display: none;
    }
}

.header {
    padding-top: 20px;
    padding-bottom: 20px;
}

.dp-main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;

    background-color: white;
    border-radius: 20px;

    &__wrapper {
        // debug
        // background-color: #edc;

        max-width: 925px;
        width: 100%;
    }

    &__search {
        position: relative;

        display: flex;

        height: 48px;

        background-color: var(--color-primary);
        border-radius: 8px;

        &-wrapper {
            display: flex;
            align-items: stretch;
            flex: 1;

            height: 100%;
            padding: 8px;

            background-color: white;
            border: 2px solid var(--color-primary);
            border-radius: 8px;
        }

        &-input {
            display: flex;
            flex: 1;

            color: #10182880;
            font-size: 16px;

            input {
                color: currentColor;
            }
        }

        .rt-select__items {
            position: absolute;
            top: 100%;

            padding: 8px;

            background-color: white;
            border-radius: 12px;
            box-shadow: 4px 4px 8px hsla(216.4, 37.1%, 17.5%, 0.05);
        }
    }

    &__options {
        // debug
        background-color: #f5f5f5;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        column-gap: 26px;

        height: 36px;

        margin-top: 12px;

        &-text {
            color: var(--color-primary);
            font-size: 14px;

            cursor: pointer;
        }
    }

    &__info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        margin-top: 25px;

        &-item {
            height: 108px;
            padding: 20px 168px 20px 20px;

            background-color: var(--background-primary);
            border-radius: 12px;
        }

        &-title {
            font-size: 18px;
        }

        &-text {
            margin-top: 8px;

            color: #10182880;
            font-size: 14px;
        }
    }
}

</style>
