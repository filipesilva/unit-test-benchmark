import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp330Component } from './my-comp-330.component';

describe('MyComp330Component', () => {
  let component: MyComp330Component;
  let fixture: ComponentFixture<MyComp330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
