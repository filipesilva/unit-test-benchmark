import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4965Component } from './my-comp-4965.component';

describe('MyComp4965Component', () => {
  let component: MyComp4965Component;
  let fixture: ComponentFixture<MyComp4965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
