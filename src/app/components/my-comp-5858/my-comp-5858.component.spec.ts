import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5858Component } from './my-comp-5858.component';

describe('MyComp5858Component', () => {
  let component: MyComp5858Component;
  let fixture: ComponentFixture<MyComp5858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
