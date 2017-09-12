import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2204Component } from './my-comp-2204.component';

describe('MyComp2204Component', () => {
  let component: MyComp2204Component;
  let fixture: ComponentFixture<MyComp2204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
