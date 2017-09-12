import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4950Component } from './my-comp-4950.component';

describe('MyComp4950Component', () => {
  let component: MyComp4950Component;
  let fixture: ComponentFixture<MyComp4950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
