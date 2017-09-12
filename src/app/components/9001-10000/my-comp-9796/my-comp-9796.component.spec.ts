import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9796Component } from './my-comp-9796.component';

describe('MyComp9796Component', () => {
  let component: MyComp9796Component;
  let fixture: ComponentFixture<MyComp9796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
