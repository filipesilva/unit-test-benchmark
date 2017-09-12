import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3019Component } from './my-comp-3019.component';

describe('MyComp3019Component', () => {
  let component: MyComp3019Component;
  let fixture: ComponentFixture<MyComp3019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
