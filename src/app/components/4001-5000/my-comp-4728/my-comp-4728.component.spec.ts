import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4728Component } from './my-comp-4728.component';

describe('MyComp4728Component', () => {
  let component: MyComp4728Component;
  let fixture: ComponentFixture<MyComp4728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
