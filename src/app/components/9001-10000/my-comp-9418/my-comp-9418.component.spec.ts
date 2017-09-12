import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9418Component } from './my-comp-9418.component';

describe('MyComp9418Component', () => {
  let component: MyComp9418Component;
  let fixture: ComponentFixture<MyComp9418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
