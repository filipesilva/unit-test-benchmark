import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7978Component } from './my-comp-7978.component';

describe('MyComp7978Component', () => {
  let component: MyComp7978Component;
  let fixture: ComponentFixture<MyComp7978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
