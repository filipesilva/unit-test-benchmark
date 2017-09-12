import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1632Component } from './my-comp-1632.component';

describe('MyComp1632Component', () => {
  let component: MyComp1632Component;
  let fixture: ComponentFixture<MyComp1632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
