import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1134Component } from './my-comp-1134.component';

describe('MyComp1134Component', () => {
  let component: MyComp1134Component;
  let fixture: ComponentFixture<MyComp1134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
