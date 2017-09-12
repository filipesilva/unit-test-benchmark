import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9835Component } from './my-comp-9835.component';

describe('MyComp9835Component', () => {
  let component: MyComp9835Component;
  let fixture: ComponentFixture<MyComp9835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
