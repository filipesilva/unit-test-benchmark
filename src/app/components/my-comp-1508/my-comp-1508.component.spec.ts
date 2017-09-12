import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1508Component } from './my-comp-1508.component';

describe('MyComp1508Component', () => {
  let component: MyComp1508Component;
  let fixture: ComponentFixture<MyComp1508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
