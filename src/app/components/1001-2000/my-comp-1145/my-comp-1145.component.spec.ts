import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1145Component } from './my-comp-1145.component';

describe('MyComp1145Component', () => {
  let component: MyComp1145Component;
  let fixture: ComponentFixture<MyComp1145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
