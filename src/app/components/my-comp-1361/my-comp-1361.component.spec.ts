import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1361Component } from './my-comp-1361.component';

describe('MyComp1361Component', () => {
  let component: MyComp1361Component;
  let fixture: ComponentFixture<MyComp1361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
