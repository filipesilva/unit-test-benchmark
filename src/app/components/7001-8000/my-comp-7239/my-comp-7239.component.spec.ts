import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7239Component } from './my-comp-7239.component';

describe('MyComp7239Component', () => {
  let component: MyComp7239Component;
  let fixture: ComponentFixture<MyComp7239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
