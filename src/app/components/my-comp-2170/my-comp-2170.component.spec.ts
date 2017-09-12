import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2170Component } from './my-comp-2170.component';

describe('MyComp2170Component', () => {
  let component: MyComp2170Component;
  let fixture: ComponentFixture<MyComp2170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
