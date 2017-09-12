import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9365Component } from './my-comp-9365.component';

describe('MyComp9365Component', () => {
  let component: MyComp9365Component;
  let fixture: ComponentFixture<MyComp9365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
