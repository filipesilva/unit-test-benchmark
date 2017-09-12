import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9349Component } from './my-comp-9349.component';

describe('MyComp9349Component', () => {
  let component: MyComp9349Component;
  let fixture: ComponentFixture<MyComp9349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
