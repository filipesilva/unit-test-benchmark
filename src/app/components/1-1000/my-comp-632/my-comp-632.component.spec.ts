import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp632Component } from './my-comp-632.component';

describe('MyComp632Component', () => {
  let component: MyComp632Component;
  let fixture: ComponentFixture<MyComp632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
