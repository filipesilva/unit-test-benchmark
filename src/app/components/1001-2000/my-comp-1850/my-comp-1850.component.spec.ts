import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1850Component } from './my-comp-1850.component';

describe('MyComp1850Component', () => {
  let component: MyComp1850Component;
  let fixture: ComponentFixture<MyComp1850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
