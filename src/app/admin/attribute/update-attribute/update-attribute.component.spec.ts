import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAttributeComponent } from './update-attribute.component';

describe('UpdateAttributeComponent', () => {
  let component: UpdateAttributeComponent;
  let fixture: ComponentFixture<UpdateAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
