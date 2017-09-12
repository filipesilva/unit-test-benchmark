import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4929Component } from './my-comp-4929.component';

describe('MyComp4929Component', () => {
  let component: MyComp4929Component;
  let fixture: ComponentFixture<MyComp4929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
