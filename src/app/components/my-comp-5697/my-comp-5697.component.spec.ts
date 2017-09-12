import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5697Component } from './my-comp-5697.component';

describe('MyComp5697Component', () => {
  let component: MyComp5697Component;
  let fixture: ComponentFixture<MyComp5697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
