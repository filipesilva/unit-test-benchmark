import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1268Component } from './my-comp-1268.component';

describe('MyComp1268Component', () => {
  let component: MyComp1268Component;
  let fixture: ComponentFixture<MyComp1268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
