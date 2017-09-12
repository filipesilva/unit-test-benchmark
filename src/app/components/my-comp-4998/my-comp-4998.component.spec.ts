import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4998Component } from './my-comp-4998.component';

describe('MyComp4998Component', () => {
  let component: MyComp4998Component;
  let fixture: ComponentFixture<MyComp4998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
