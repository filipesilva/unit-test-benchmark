import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5028Component } from './my-comp-5028.component';

describe('MyComp5028Component', () => {
  let component: MyComp5028Component;
  let fixture: ComponentFixture<MyComp5028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
