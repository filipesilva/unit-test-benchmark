import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4978Component } from './my-comp-4978.component';

describe('MyComp4978Component', () => {
  let component: MyComp4978Component;
  let fixture: ComponentFixture<MyComp4978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
