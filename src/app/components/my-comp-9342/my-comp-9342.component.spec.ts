import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9342Component } from './my-comp-9342.component';

describe('MyComp9342Component', () => {
  let component: MyComp9342Component;
  let fixture: ComponentFixture<MyComp9342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
