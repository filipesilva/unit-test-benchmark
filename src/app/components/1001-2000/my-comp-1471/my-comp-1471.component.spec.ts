import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1471Component } from './my-comp-1471.component';

describe('MyComp1471Component', () => {
  let component: MyComp1471Component;
  let fixture: ComponentFixture<MyComp1471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
