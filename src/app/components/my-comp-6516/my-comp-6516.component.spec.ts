import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6516Component } from './my-comp-6516.component';

describe('MyComp6516Component', () => {
  let component: MyComp6516Component;
  let fixture: ComponentFixture<MyComp6516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
