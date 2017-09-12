import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4632Component } from './my-comp-4632.component';

describe('MyComp4632Component', () => {
  let component: MyComp4632Component;
  let fixture: ComponentFixture<MyComp4632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
