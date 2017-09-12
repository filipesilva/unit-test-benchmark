import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4795Component } from './my-comp-4795.component';

describe('MyComp4795Component', () => {
  let component: MyComp4795Component;
  let fixture: ComponentFixture<MyComp4795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
