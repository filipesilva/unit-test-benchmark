import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1307Component } from './my-comp-1307.component';

describe('MyComp1307Component', () => {
  let component: MyComp1307Component;
  let fixture: ComponentFixture<MyComp1307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
