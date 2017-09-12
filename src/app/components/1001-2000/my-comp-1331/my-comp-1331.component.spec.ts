import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1331Component } from './my-comp-1331.component';

describe('MyComp1331Component', () => {
  let component: MyComp1331Component;
  let fixture: ComponentFixture<MyComp1331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
