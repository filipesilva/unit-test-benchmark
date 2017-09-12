import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2212Component } from './my-comp-2212.component';

describe('MyComp2212Component', () => {
  let component: MyComp2212Component;
  let fixture: ComponentFixture<MyComp2212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
