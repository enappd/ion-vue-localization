import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonSegment, IonSegmentButton, IonContent, IonItem, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonListHeader, IonLabel, IonImg } from '@ionic/vue';

export default defineComponent({
    data() {
        return {
            language: 'en'
        }
    },
    
    name: 'Tab1',
    components: {
        IonPage,
        IonHeader, 
        IonToolbar, 
        IonButtons, 
        IonMenuButton, 
        IonTitle, 
        IonSegment, 
        IonSegmentButton, 
        IonContent, 
        IonItem, 
        IonSelect, 
        IonSelectOption, 
        IonGrid, 
        IonRow, 
        IonCol, 
        IonCard, 
        IonCardHeader, 
        IonCardContent, 
        IonListHeader, 
        IonLabel, 
        IonImg
    },
    methods: {
        changeLanguage($event: any) {
            this.$i18n.locale = $event.detail.value;
            
        },
    }
})