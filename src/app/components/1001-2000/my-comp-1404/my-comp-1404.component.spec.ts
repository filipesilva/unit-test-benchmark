import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1404Component } from './my-comp-1404.component';

describe('MyComp1404Component', () => {
  let component: MyComp1404Component;
  let fixture: ComponentFixture<MyComp1404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
