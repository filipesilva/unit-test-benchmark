import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2110Component } from './my-comp-2110.component';

describe('MyComp2110Component', () => {
  let component: MyComp2110Component;
  let fixture: ComponentFixture<MyComp2110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
