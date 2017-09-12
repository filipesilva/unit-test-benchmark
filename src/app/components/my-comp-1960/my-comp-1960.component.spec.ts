import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1960Component } from './my-comp-1960.component';

describe('MyComp1960Component', () => {
  let component: MyComp1960Component;
  let fixture: ComponentFixture<MyComp1960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
