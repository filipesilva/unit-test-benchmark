import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1303Component } from './my-comp-1303.component';

describe('MyComp1303Component', () => {
  let component: MyComp1303Component;
  let fixture: ComponentFixture<MyComp1303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
