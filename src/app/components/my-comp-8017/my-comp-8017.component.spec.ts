import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8017Component } from './my-comp-8017.component';

describe('MyComp8017Component', () => {
  let component: MyComp8017Component;
  let fixture: ComponentFixture<MyComp8017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
