import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1172Component } from './my-comp-1172.component';

describe('MyComp1172Component', () => {
  let component: MyComp1172Component;
  let fixture: ComponentFixture<MyComp1172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
