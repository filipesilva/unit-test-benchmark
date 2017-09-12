import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1606Component } from './my-comp-1606.component';

describe('MyComp1606Component', () => {
  let component: MyComp1606Component;
  let fixture: ComponentFixture<MyComp1606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
