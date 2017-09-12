import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9158Component } from './my-comp-9158.component';

describe('MyComp9158Component', () => {
  let component: MyComp9158Component;
  let fixture: ComponentFixture<MyComp9158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
