import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5760Component } from './my-comp-5760.component';

describe('MyComp5760Component', () => {
  let component: MyComp5760Component;
  let fixture: ComponentFixture<MyComp5760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
