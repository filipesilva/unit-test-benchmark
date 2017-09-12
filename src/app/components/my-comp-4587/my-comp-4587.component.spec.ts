import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4587Component } from './my-comp-4587.component';

describe('MyComp4587Component', () => {
  let component: MyComp4587Component;
  let fixture: ComponentFixture<MyComp4587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
