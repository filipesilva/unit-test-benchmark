import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5242Component } from './my-comp-5242.component';

describe('MyComp5242Component', () => {
  let component: MyComp5242Component;
  let fixture: ComponentFixture<MyComp5242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
