import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1912Component } from './my-comp-1912.component';

describe('MyComp1912Component', () => {
  let component: MyComp1912Component;
  let fixture: ComponentFixture<MyComp1912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
