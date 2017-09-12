import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5263Component } from './my-comp-5263.component';

describe('MyComp5263Component', () => {
  let component: MyComp5263Component;
  let fixture: ComponentFixture<MyComp5263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
