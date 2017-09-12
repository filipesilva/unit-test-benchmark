import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1880Component } from './my-comp-1880.component';

describe('MyComp1880Component', () => {
  let component: MyComp1880Component;
  let fixture: ComponentFixture<MyComp1880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
