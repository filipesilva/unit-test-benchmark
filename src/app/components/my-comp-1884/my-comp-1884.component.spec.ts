import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1884Component } from './my-comp-1884.component';

describe('MyComp1884Component', () => {
  let component: MyComp1884Component;
  let fixture: ComponentFixture<MyComp1884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
