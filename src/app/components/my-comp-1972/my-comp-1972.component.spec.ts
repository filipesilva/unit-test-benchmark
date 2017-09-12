import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1972Component } from './my-comp-1972.component';

describe('MyComp1972Component', () => {
  let component: MyComp1972Component;
  let fixture: ComponentFixture<MyComp1972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
