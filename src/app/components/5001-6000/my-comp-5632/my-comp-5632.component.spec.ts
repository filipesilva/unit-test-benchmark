import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5632Component } from './my-comp-5632.component';

describe('MyComp5632Component', () => {
  let component: MyComp5632Component;
  let fixture: ComponentFixture<MyComp5632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
