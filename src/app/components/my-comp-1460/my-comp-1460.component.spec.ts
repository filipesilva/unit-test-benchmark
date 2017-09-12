import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1460Component } from './my-comp-1460.component';

describe('MyComp1460Component', () => {
  let component: MyComp1460Component;
  let fixture: ComponentFixture<MyComp1460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
