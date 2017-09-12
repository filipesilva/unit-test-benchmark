import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4995Component } from './my-comp-4995.component';

describe('MyComp4995Component', () => {
  let component: MyComp4995Component;
  let fixture: ComponentFixture<MyComp4995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
