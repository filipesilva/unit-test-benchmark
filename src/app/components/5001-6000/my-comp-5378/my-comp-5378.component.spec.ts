import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5378Component } from './my-comp-5378.component';

describe('MyComp5378Component', () => {
  let component: MyComp5378Component;
  let fixture: ComponentFixture<MyComp5378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
