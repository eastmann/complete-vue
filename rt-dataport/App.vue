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
                            <details>
                                <summary class="rt-select__summary">
                                    <span>Компании и ИП</span>
                                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="rt-shevron-down" fill-rule="evenodd" clip-rule="evenodd" d="M6.46918 6.53393L0.997192 1.06086L2.05796 0.000305176L6.99957 4.94289L11.9412 0.000305294L13.0019 1.06086L7.52995 6.53393C7.38929 6.67461 7.1985 6.75365 6.99957 6.75365C6.80063 6.75365 6.60984 6.67461 6.46918 6.53393Z" fill="#4075FF"/>
                                    </svg>
                                </summary>
                                <ul class="rt-select__items">
                                    <li class="rt-select__item -selected">Компании и ИП</li>
                                    <li class="rt-select__item">Адрес</li>
                                </ul>
                            </details>
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
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="rt-map-marker" fill-rule="evenodd" clip-rule="evenodd" d="M14.5 7.48264C14.5 9.15596 14.2433 10.324 13.339 11.8289C12.4097 13.3756 10.8032 15.2663 8.00327 18.2688C5.19984 15.2661 3.59173 13.3752 2.66161 11.8286C1.75667 10.3238 1.5 9.15594 1.5 7.48264C1.5 4.42376 4.33729 1.5 8 1.5C11.6627 1.5 14.5 4.42376 14.5 7.48264ZM16 7.48264C16 11.2921 14.7554 13.2558 8.73205 19.6858C8.3389 20.1055 7.66871 20.1057 7.27532 19.6862C1.24465 13.2559 0 11.2922 0 7.48264C0 3.5243 3.58172 0 8 0C12.4183 0 16 3.5243 16 7.48264ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#4075FF"/>
                        </svg>
                        <span class="dp-main__options-text">Поиск на карте</span>
                    </li>
                    <li class="dp-main__options-item">
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="rt-extended-search" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3.5C7.5 4.60457 6.60457 5.5 5.5 5.5C4.39543 5.5 3.5 4.60457 3.5 3.5C3.5 2.39543 4.39543 1.5 5.5 1.5C6.60457 1.5 7.5 2.39543 7.5 3.5ZM5.5 7C7.17556 7 8.57612 5.82259 8.91946 4.25L20 4.25L20 2.75L8.91945 2.75C8.57612 1.17741 7.17556 0 5.5 0C3.82444 0 2.42388 1.17741 2.08054 2.75H0V4.25H2.08054C2.42388 5.82259 3.82444 7 5.5 7ZM11.0805 10.75L0 10.75V12.25L11.0805 12.25C11.4239 13.8226 12.8244 15 14.5 15C16.1756 15 17.5761 13.8226 17.9195 12.25H20V10.75H17.9195C17.5761 9.17741 16.1756 8 14.5 8C12.8244 8 11.4239 9.17741 11.0805 10.75ZM16.5 11.5C16.5 12.6046 15.6046 13.5 14.5 13.5C13.3954 13.5 12.5 12.6046 12.5 11.5C12.5 10.3954 13.3954 9.5 14.5 9.5C15.6046 9.5 16.5 10.3954 16.5 11.5Z" fill="#4075FF"/>                            </svg>
                        <span class="dp-main__options-text">Расширенный поиск</span>
                    </li>
                </ul>
                <div class="dp-main__info">
                    <dl class="dp-main__info-item"
                        v-for="item in info"
                        :key="item.title"
                        :style="`--background: url(${item.img})`">
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
                    text: 'Проводите проверку компаний по различным параметрам',
                    img: './assets/images/tiny-check-list.png'
                },
                {
                    title: 'Утилиты',
                    text: 'Проверяйте самозанятых, нахождении в санкционных списках и реестре РКН',
                    img: './assets/images/tiny-utilities.png'
                },
                {
                    title: 'Расширенный поиск',
                    text: 'Формируйте более точные поисковые запросы',
                    img: './assets/images/tiny-extended-search.png'
                },
                {
                    title: 'Поиск на карте',
                    text: 'Осуществляйте поиск по городам, кварталам, районам',
                    img: './assets/images/tiny-map-search.png'
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

    &__summary {
        display: flex;
        align-items: center;

        list-style: none;

        &::-webkit-details-marker {
            display: none;
        }

        svg {
            margin-left: 8px;
        }

        [open] & svg {
            transform: rotateX(180deg);
        }
    }

    &__items {
        min-width: 224px;
        padding: 8px;

        background-color: white;
        border-radius: 12px;
        box-shadow:
            0px 4px 8px rgba(28, 41, 61, 0.06),
            0px 0px 16px rgba(28, 41, 61, 0.05)
        ;
    }

    &__item {
        display: flex;
        align-items: center;

        height: 36px;
        padding: 8px 12px;

        color: var(--black-primary);
        font-size: 14px;

        border-radius: 8px;

        &:hover,
        &.-selected {
            background-color: var(--background-secondary);
        }
    }

    &__item + &__item {
        margin-top: 8px;
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
            padding: 6px;

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
            left: 0;
            top: ~"calc(100% + 12px)";
        }
    }

    &__options {
        // debug
        // background-color: #f5f5f5;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        column-gap: 26px;

        height: 36px;

        margin-top: 12px;

        &-item {
            display: flex;
            align-items: center;
            column-gap: 8px;

            cursor: pointer;
        }

        &-text {
            color: var(--color-primary);
            font-size: 14px;
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
            background-image: var(--background);
            background-repeat: no-repeat;
            background-size: 320px;
            background-position: 233px center;
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
