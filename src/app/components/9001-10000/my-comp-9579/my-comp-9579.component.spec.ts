import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9579Component } from './my-comp-9579.component';

describe('MyComp9579Component', () => {
  let component: MyComp9579Component;
  let fixture: ComponentFixture<MyComp9579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
