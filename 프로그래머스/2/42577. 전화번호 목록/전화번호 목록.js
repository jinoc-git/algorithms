function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        const phone = phone_book[i];
        const nextPhone = phone_book[i + 1];
        const target = nextPhone.slice(0, phone.length);

        if (phone === target) return false;
    }
    
    return true;
}