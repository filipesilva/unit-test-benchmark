import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1274Component } from './my-comp-1274.component';

describe('MyComp1274Component', () => {
  let component: MyComp1274Component;
  let fixture: ComponentFixture<MyComp1274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
