import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1443Component } from './my-comp-1443.component';

describe('MyComp1443Component', () => {
  let component: MyComp1443Component;
  let fixture: ComponentFixture<MyComp1443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
