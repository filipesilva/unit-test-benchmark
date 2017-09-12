import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9703Component } from './my-comp-9703.component';

describe('MyComp9703Component', () => {
  let component: MyComp9703Component;
  let fixture: ComponentFixture<MyComp9703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
