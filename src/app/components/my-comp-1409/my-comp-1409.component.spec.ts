import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1409Component } from './my-comp-1409.component';

describe('MyComp1409Component', () => {
  let component: MyComp1409Component;
  let fixture: ComponentFixture<MyComp1409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
