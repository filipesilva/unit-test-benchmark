import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9224Component } from './my-comp-9224.component';

describe('MyComp9224Component', () => {
  let component: MyComp9224Component;
  let fixture: ComponentFixture<MyComp9224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
