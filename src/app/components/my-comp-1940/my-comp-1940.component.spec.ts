import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1940Component } from './my-comp-1940.component';

describe('MyComp1940Component', () => {
  let component: MyComp1940Component;
  let fixture: ComponentFixture<MyComp1940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
