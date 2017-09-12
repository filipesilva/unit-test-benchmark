import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1800Component } from './my-comp-1800.component';

describe('MyComp1800Component', () => {
  let component: MyComp1800Component;
  let fixture: ComponentFixture<MyComp1800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
