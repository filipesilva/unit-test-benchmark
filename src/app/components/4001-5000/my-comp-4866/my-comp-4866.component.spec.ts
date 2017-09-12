import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4866Component } from './my-comp-4866.component';

describe('MyComp4866Component', () => {
  let component: MyComp4866Component;
  let fixture: ComponentFixture<MyComp4866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
