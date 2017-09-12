import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6573Component } from './my-comp-6573.component';

describe('MyComp6573Component', () => {
  let component: MyComp6573Component;
  let fixture: ComponentFixture<MyComp6573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
