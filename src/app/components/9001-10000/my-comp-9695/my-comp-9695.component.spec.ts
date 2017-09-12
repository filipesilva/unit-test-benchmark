import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9695Component } from './my-comp-9695.component';

describe('MyComp9695Component', () => {
  let component: MyComp9695Component;
  let fixture: ComponentFixture<MyComp9695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
