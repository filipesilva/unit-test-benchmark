import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6935Component } from './my-comp-6935.component';

describe('MyComp6935Component', () => {
  let component: MyComp6935Component;
  let fixture: ComponentFixture<MyComp6935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
