function constitutionCrew (input) {
    const obj = {... input};

    if(obj.dizziness){
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
        return obj;
    }
    return obj;
}
constitutionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })