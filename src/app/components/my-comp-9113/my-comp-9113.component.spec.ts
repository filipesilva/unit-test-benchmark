import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9113Component } from './my-comp-9113.component';

describe('MyComp9113Component', () => {
  let component: MyComp9113Component;
  let fixture: ComponentFixture<MyComp9113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
