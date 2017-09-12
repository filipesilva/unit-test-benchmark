import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9979Component } from './my-comp-9979.component';

describe('MyComp9979Component', () => {
  let component: MyComp9979Component;
  let fixture: ComponentFixture<MyComp9979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
