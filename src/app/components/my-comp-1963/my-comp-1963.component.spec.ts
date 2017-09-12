import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1963Component } from './my-comp-1963.component';

describe('MyComp1963Component', () => {
  let component: MyComp1963Component;
  let fixture: ComponentFixture<MyComp1963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
