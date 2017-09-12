import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9742Component } from './my-comp-9742.component';

describe('MyComp9742Component', () => {
  let component: MyComp9742Component;
  let fixture: ComponentFixture<MyComp9742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
