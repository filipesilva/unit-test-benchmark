import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp978Component } from './my-comp-978.component';

describe('MyComp978Component', () => {
  let component: MyComp978Component;
  let fixture: ComponentFixture<MyComp978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
