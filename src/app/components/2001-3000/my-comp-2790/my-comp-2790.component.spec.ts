import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2790Component } from './my-comp-2790.component';

describe('MyComp2790Component', () => {
  let component: MyComp2790Component;
  let fixture: ComponentFixture<MyComp2790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
