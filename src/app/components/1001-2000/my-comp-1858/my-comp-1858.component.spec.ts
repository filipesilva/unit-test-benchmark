import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1858Component } from './my-comp-1858.component';

describe('MyComp1858Component', () => {
  let component: MyComp1858Component;
  let fixture: ComponentFixture<MyComp1858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
