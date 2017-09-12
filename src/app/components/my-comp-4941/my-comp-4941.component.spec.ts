import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4941Component } from './my-comp-4941.component';

describe('MyComp4941Component', () => {
  let component: MyComp4941Component;
  let fixture: ComponentFixture<MyComp4941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
