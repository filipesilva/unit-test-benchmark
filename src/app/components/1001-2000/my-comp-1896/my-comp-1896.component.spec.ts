import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1896Component } from './my-comp-1896.component';

describe('MyComp1896Component', () => {
  let component: MyComp1896Component;
  let fixture: ComponentFixture<MyComp1896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
