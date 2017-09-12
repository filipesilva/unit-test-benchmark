import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2466Component } from './my-comp-2466.component';

describe('MyComp2466Component', () => {
  let component: MyComp2466Component;
  let fixture: ComponentFixture<MyComp2466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
