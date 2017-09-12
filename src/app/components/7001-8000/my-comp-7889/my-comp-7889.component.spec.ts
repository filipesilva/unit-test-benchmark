import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7889Component } from './my-comp-7889.component';

describe('MyComp7889Component', () => {
  let component: MyComp7889Component;
  let fixture: ComponentFixture<MyComp7889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
