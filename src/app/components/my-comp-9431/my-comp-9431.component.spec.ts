import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9431Component } from './my-comp-9431.component';

describe('MyComp9431Component', () => {
  let component: MyComp9431Component;
  let fixture: ComponentFixture<MyComp9431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
