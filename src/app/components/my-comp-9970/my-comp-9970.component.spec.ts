import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9970Component } from './my-comp-9970.component';

describe('MyComp9970Component', () => {
  let component: MyComp9970Component;
  let fixture: ComponentFixture<MyComp9970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
