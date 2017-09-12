import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1332Component } from './my-comp-1332.component';

describe('MyComp1332Component', () => {
  let component: MyComp1332Component;
  let fixture: ComponentFixture<MyComp1332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
