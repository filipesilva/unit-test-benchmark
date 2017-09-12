import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4488Component } from './my-comp-4488.component';

describe('MyComp4488Component', () => {
  let component: MyComp4488Component;
  let fixture: ComponentFixture<MyComp4488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
