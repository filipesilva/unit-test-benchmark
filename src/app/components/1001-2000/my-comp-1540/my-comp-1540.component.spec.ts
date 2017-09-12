import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1540Component } from './my-comp-1540.component';

describe('MyComp1540Component', () => {
  let component: MyComp1540Component;
  let fixture: ComponentFixture<MyComp1540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
