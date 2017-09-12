import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4690Component } from './my-comp-4690.component';

describe('MyComp4690Component', () => {
  let component: MyComp4690Component;
  let fixture: ComponentFixture<MyComp4690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
