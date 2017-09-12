import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7779Component } from './my-comp-7779.component';

describe('MyComp7779Component', () => {
  let component: MyComp7779Component;
  let fixture: ComponentFixture<MyComp7779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
