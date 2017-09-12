import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9223Component } from './my-comp-9223.component';

describe('MyComp9223Component', () => {
  let component: MyComp9223Component;
  let fixture: ComponentFixture<MyComp9223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
