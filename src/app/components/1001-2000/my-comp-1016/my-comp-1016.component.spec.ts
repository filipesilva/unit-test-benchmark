import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1016Component } from './my-comp-1016.component';

describe('MyComp1016Component', () => {
  let component: MyComp1016Component;
  let fixture: ComponentFixture<MyComp1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
