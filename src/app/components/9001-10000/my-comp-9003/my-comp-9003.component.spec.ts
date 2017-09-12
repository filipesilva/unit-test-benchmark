import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9003Component } from './my-comp-9003.component';

describe('MyComp9003Component', () => {
  let component: MyComp9003Component;
  let fixture: ComponentFixture<MyComp9003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
