import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1359Component } from './my-comp-1359.component';

describe('MyComp1359Component', () => {
  let component: MyComp1359Component;
  let fixture: ComponentFixture<MyComp1359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
