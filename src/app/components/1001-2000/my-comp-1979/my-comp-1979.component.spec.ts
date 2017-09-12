import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1979Component } from './my-comp-1979.component';

describe('MyComp1979Component', () => {
  let component: MyComp1979Component;
  let fixture: ComponentFixture<MyComp1979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
