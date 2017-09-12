import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1825Component } from './my-comp-1825.component';

describe('MyComp1825Component', () => {
  let component: MyComp1825Component;
  let fixture: ComponentFixture<MyComp1825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
