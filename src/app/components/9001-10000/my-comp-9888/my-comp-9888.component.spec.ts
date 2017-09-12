import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9888Component } from './my-comp-9888.component';

describe('MyComp9888Component', () => {
  let component: MyComp9888Component;
  let fixture: ComponentFixture<MyComp9888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
