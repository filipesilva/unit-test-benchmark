import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1250Component } from './my-comp-1250.component';

describe('MyComp1250Component', () => {
  let component: MyComp1250Component;
  let fixture: ComponentFixture<MyComp1250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
