import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9127Component } from './my-comp-9127.component';

describe('MyComp9127Component', () => {
  let component: MyComp9127Component;
  let fixture: ComponentFixture<MyComp9127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
