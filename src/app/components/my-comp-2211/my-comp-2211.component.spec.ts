import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2211Component } from './my-comp-2211.component';

describe('MyComp2211Component', () => {
  let component: MyComp2211Component;
  let fixture: ComponentFixture<MyComp2211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
