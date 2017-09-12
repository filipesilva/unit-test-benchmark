import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4099Component } from './my-comp-4099.component';

describe('MyComp4099Component', () => {
  let component: MyComp4099Component;
  let fixture: ComponentFixture<MyComp4099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
