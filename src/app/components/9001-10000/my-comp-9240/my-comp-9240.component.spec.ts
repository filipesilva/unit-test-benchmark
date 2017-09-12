import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9240Component } from './my-comp-9240.component';

describe('MyComp9240Component', () => {
  let component: MyComp9240Component;
  let fixture: ComponentFixture<MyComp9240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
