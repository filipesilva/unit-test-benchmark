import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp436Component } from './my-comp-436.component';

describe('MyComp436Component', () => {
  let component: MyComp436Component;
  let fixture: ComponentFixture<MyComp436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
