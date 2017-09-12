import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2849Component } from './my-comp-2849.component';

describe('MyComp2849Component', () => {
  let component: MyComp2849Component;
  let fixture: ComponentFixture<MyComp2849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
