import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRoomTypeComponent } from './select-room-type.component';

describe('SelectRoomTypeComponent', () => {
  let component: SelectRoomTypeComponent;
  let fixture: ComponentFixture<SelectRoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRoomTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
