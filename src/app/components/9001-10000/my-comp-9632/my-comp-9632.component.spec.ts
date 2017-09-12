import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9632Component } from './my-comp-9632.component';

describe('MyComp9632Component', () => {
  let component: MyComp9632Component;
  let fixture: ComponentFixture<MyComp9632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
