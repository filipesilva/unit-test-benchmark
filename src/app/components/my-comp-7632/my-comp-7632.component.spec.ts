import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7632Component } from './my-comp-7632.component';

describe('MyComp7632Component', () => {
  let component: MyComp7632Component;
  let fixture: ComponentFixture<MyComp7632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
