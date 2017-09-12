import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9389Component } from './my-comp-9389.component';

describe('MyComp9389Component', () => {
  let component: MyComp9389Component;
  let fixture: ComponentFixture<MyComp9389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
