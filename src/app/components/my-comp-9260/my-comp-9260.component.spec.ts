import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9260Component } from './my-comp-9260.component';

describe('MyComp9260Component', () => {
  let component: MyComp9260Component;
  let fixture: ComponentFixture<MyComp9260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
