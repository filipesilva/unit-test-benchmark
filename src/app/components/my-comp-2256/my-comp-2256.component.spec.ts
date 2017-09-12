import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2256Component } from './my-comp-2256.component';

describe('MyComp2256Component', () => {
  let component: MyComp2256Component;
  let fixture: ComponentFixture<MyComp2256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
