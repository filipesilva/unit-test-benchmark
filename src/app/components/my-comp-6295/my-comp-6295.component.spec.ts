import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6295Component } from './my-comp-6295.component';

describe('MyComp6295Component', () => {
  let component: MyComp6295Component;
  let fixture: ComponentFixture<MyComp6295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
