import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4585Component } from './my-comp-4585.component';

describe('MyComp4585Component', () => {
  let component: MyComp4585Component;
  let fixture: ComponentFixture<MyComp4585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
