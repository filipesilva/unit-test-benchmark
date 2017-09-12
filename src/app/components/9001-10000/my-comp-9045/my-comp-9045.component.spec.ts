import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9045Component } from './my-comp-9045.component';

describe('MyComp9045Component', () => {
  let component: MyComp9045Component;
  let fixture: ComponentFixture<MyComp9045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
