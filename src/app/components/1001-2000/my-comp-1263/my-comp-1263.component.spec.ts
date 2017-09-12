import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1263Component } from './my-comp-1263.component';

describe('MyComp1263Component', () => {
  let component: MyComp1263Component;
  let fixture: ComponentFixture<MyComp1263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
