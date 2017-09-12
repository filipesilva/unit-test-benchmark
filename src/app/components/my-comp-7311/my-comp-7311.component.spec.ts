import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7311Component } from './my-comp-7311.component';

describe('MyComp7311Component', () => {
  let component: MyComp7311Component;
  let fixture: ComponentFixture<MyComp7311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
