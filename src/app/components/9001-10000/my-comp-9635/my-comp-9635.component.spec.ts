import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9635Component } from './my-comp-9635.component';

describe('MyComp9635Component', () => {
  let component: MyComp9635Component;
  let fixture: ComponentFixture<MyComp9635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
