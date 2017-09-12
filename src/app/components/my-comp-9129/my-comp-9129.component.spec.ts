import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9129Component } from './my-comp-9129.component';

describe('MyComp9129Component', () => {
  let component: MyComp9129Component;
  let fixture: ComponentFixture<MyComp9129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
