import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1977Component } from './my-comp-1977.component';

describe('MyComp1977Component', () => {
  let component: MyComp1977Component;
  let fixture: ComponentFixture<MyComp1977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
