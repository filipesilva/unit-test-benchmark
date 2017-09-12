import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2592Component } from './my-comp-2592.component';

describe('MyComp2592Component', () => {
  let component: MyComp2592Component;
  let fixture: ComponentFixture<MyComp2592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
