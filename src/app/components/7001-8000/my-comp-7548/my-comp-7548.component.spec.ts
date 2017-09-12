import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7548Component } from './my-comp-7548.component';

describe('MyComp7548Component', () => {
  let component: MyComp7548Component;
  let fixture: ComponentFixture<MyComp7548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
