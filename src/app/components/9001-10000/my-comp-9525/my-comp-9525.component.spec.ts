import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9525Component } from './my-comp-9525.component';

describe('MyComp9525Component', () => {
  let component: MyComp9525Component;
  let fixture: ComponentFixture<MyComp9525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
