import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4038Component } from './my-comp-4038.component';

describe('MyComp4038Component', () => {
  let component: MyComp4038Component;
  let fixture: ComponentFixture<MyComp4038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
