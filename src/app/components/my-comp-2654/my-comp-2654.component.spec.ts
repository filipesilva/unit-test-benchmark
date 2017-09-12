import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2654Component } from './my-comp-2654.component';

describe('MyComp2654Component', () => {
  let component: MyComp2654Component;
  let fixture: ComponentFixture<MyComp2654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
