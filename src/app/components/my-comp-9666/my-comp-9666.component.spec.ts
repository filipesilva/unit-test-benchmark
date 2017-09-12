import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9666Component } from './my-comp-9666.component';

describe('MyComp9666Component', () => {
  let component: MyComp9666Component;
  let fixture: ComponentFixture<MyComp9666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
