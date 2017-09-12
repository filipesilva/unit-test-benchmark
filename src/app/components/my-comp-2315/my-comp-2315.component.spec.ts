import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2315Component } from './my-comp-2315.component';

describe('MyComp2315Component', () => {
  let component: MyComp2315Component;
  let fixture: ComponentFixture<MyComp2315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
