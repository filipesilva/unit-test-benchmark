import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1908Component } from './my-comp-1908.component';

describe('MyComp1908Component', () => {
  let component: MyComp1908Component;
  let fixture: ComponentFixture<MyComp1908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
