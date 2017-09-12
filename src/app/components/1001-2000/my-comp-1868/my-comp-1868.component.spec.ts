import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1868Component } from './my-comp-1868.component';

describe('MyComp1868Component', () => {
  let component: MyComp1868Component;
  let fixture: ComponentFixture<MyComp1868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
