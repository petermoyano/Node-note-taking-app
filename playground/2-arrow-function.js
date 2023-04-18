const event = {
    name: "Birthday party",
    guestList: ["Peter", "Paul", "John"],
    printGuestList() {
        console.log(`Guest list for ${this.name}`);
        this.guestList.forEach((guest) =>
            console.log(guest + " is attending the " + this.name)
        );
    },
};

event.printGuestList();
