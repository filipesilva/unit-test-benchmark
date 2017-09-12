import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1373Component } from './my-comp-1373.component';

describe('MyComp1373Component', () => {
  let component: MyComp1373Component;
  let fixture: ComponentFixture<MyComp1373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
