import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1506Component } from './my-comp-1506.component';

describe('MyComp1506Component', () => {
  let component: MyComp1506Component;
  let fixture: ComponentFixture<MyComp1506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
