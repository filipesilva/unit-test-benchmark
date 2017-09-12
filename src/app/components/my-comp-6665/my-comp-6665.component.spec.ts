import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6665Component } from './my-comp-6665.component';

describe('MyComp6665Component', () => {
  let component: MyComp6665Component;
  let fixture: ComponentFixture<MyComp6665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
