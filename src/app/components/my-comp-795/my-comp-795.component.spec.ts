import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp795Component } from './my-comp-795.component';

describe('MyComp795Component', () => {
  let component: MyComp795Component;
  let fixture: ComponentFixture<MyComp795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
