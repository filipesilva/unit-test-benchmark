import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp455Component } from './my-comp-455.component';

describe('MyComp455Component', () => {
  let component: MyComp455Component;
  let fixture: ComponentFixture<MyComp455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
