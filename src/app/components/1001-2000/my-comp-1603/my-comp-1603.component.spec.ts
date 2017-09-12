import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1603Component } from './my-comp-1603.component';

describe('MyComp1603Component', () => {
  let component: MyComp1603Component;
  let fixture: ComponentFixture<MyComp1603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
