import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1178Component } from './my-comp-1178.component';

describe('MyComp1178Component', () => {
  let component: MyComp1178Component;
  let fixture: ComponentFixture<MyComp1178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
