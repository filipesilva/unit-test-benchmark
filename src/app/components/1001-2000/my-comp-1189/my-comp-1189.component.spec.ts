import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1189Component } from './my-comp-1189.component';

describe('MyComp1189Component', () => {
  let component: MyComp1189Component;
  let fixture: ComponentFixture<MyComp1189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
