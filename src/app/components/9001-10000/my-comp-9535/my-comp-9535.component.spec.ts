import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9535Component } from './my-comp-9535.component';

describe('MyComp9535Component', () => {
  let component: MyComp9535Component;
  let fixture: ComponentFixture<MyComp9535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
