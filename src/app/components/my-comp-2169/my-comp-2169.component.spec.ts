import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2169Component } from './my-comp-2169.component';

describe('MyComp2169Component', () => {
  let component: MyComp2169Component;
  let fixture: ComponentFixture<MyComp2169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
