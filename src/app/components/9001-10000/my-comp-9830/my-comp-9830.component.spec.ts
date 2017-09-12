import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9830Component } from './my-comp-9830.component';

describe('MyComp9830Component', () => {
  let component: MyComp9830Component;
  let fixture: ComponentFixture<MyComp9830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
