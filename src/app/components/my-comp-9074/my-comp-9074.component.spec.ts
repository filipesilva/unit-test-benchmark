import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9074Component } from './my-comp-9074.component';

describe('MyComp9074Component', () => {
  let component: MyComp9074Component;
  let fixture: ComponentFixture<MyComp9074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
