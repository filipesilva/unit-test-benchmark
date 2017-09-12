import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2273Component } from './my-comp-2273.component';

describe('MyComp2273Component', () => {
  let component: MyComp2273Component;
  let fixture: ComponentFixture<MyComp2273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
