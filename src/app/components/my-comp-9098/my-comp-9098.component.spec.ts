import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9098Component } from './my-comp-9098.component';

describe('MyComp9098Component', () => {
  let component: MyComp9098Component;
  let fixture: ComponentFixture<MyComp9098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
