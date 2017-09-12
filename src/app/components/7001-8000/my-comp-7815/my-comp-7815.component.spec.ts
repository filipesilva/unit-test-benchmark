import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7815Component } from './my-comp-7815.component';

describe('MyComp7815Component', () => {
  let component: MyComp7815Component;
  let fixture: ComponentFixture<MyComp7815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
